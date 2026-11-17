/* ==========================================================================
   figure-engine.js — reusable "signal chain" figures.

   A figure is a vertical chain of panels. Each panel has an equation that types
   itself, a one-line plain-English translation, a live trace (and optionally a
   diagram), and an output that is routed down a connector line in the margin to
   the panels that consume it. The curves come from a small model that runs in
   the browser with a fixed timestep and a seeded random generator.

   USAGE (classic script, no build step; load before the code that calls it)

     const fig = FigureEngine.create(rootElement, spec, env);
     fig.start();   // page shown: build panels as they scroll into view
     fig.stop();    // page hidden: pause the loop
     fig.reset();   // forget the build, so it plays again on the next start()

   The engine fills `rootElement` (any empty block element) with:
     canvas.fe-cv                      one canvas for the whole figure
     div.fe-panel > div.fe-text        prose (spec html), p.fe-eq, p.fe-say
                  > div.fe-plot        an empty box; CSS gives it a height and the
                                       canvas draws the panel inside that box
     div.fe-outro                      optional html
     div.fe-bar                        controls + Rebuild + Skip
   Layout is plain CSS (see the "Figure engine" block in styles.css), so stacking
   on phones is a media query; the engine only measures the .fe-plot boxes.
   Colors and fonts come from the CSS variables --ink, --ink-2, --ink-3, --rule,
   --accent, --paper, --paper-2, --serif and --mono on the root element.

   SPEC
     {
       alt: "text alternative for the canvas",
       duration: 24, dt: 0.02,          // model time span and fixed timestep
       unit: "h", ticks: [0, 6, 12, 18, 24],
       scale: { N: 1.25, ... },         // fixed y-axis maximum per variable (default 1)
       labelPad: 46,                    // optional: width of the margin inside each plot that holds the curve labels (default 46)
       controls: [
         { id: "s1", type: "toggle", label: "Signal 1", value: true },
         { id: "g", type: "choice", label: "Gene", value: 1, options: [{ v: 1, label: "WT" }, { v: 0, label: "Deleted" }] },
       ],
       model: {
         setup(controls, rand) -> params          // rand.u() uniform 0–1, rand.n() standard normal
         init(params) -> state                    // plain object of numbers; every key is recorded
         step(state, params, t, dt, rand)         // advance the state in place by one timestep
       },
       events: [{ k: "A", levels: [0.2, 0.5], note: 5, step: 1 }],   // upward crossings → notes
       panels: [{
         id: "prime",
         html: "<p>prose shown beside the panel</p>",
         eq: [{ t: "dN/dt", k: "N" }, " = ", { t: "k", sub: "1" }, "·", { t: "S", sub: "1", k: "S1" }],
                                        // or an array of such lines; `k` links a term to a variable
         say: "One line in plain English.",
         traces: [{ k: "S1", label: { t: "S", sub: "1" }, role: "in" },      // inputs: thin lanes on top
                  { k: "N", label: "N", ref: { v: 0.5, label: "K" }, readout: "caption", accent: false }],
                                        // accent: true draws that curve in the accent color all the time
         diagram(ctx, rect, sample, ui) {},  // optional drawing; see "DIAGRAM" below
         overlay(ctx, geo, sample, ui) {},   // optional marks on top of the traces; see "OVERLAY" below
         dur: 3,                             // optional: seconds the trace takes to draw (default 1.7, or 2.4 with a diagram or overlay)
         tall: true,                         // optional: a taller plot box (class fe-mid) without a diagram
         listen: ["basal"],                  // optional: event variables this panel sounds although it has no trace for them
       }],
       links: [{ from: "prime", to: "asm", k: "N", label: "N" }],    // output port → input port
       outro: "<p>html above the control bar</p>",
     }

   ENV (how the engine talks to the host page; all optional)
     { reduce: bool,            // true → no animation: figures are finished instantly, controls still work
       bpm: 72,                 // the connector pulse beats at this rate
       note(index, volume) }    // play pentatonic note `index`; the host decides whether sound is on

   DIAGRAM  diagram(ctx, rect, sample, ui)
     rect   {x, y, w, h} in CSS pixels;  sample {N: 0.8, ...} at the time being shown
     ui     { build 0–1 (use it to draw outlines in), t, T, controls, col: {ink, ink2, ink3, rule, acc, paper, paper2},
              mono(px) / serif(px) font strings, on(k) → is variable k highlighted, tone(k, base) → color for k,
              alpha(a, k) → set globalAlpha (dims non-highlighted parts), hit(k, x, y, r) → make a spot hoverable }

              now (ms clock) and reduce (true → draw finished states, no animation) are also on ui.

   OVERLAY  overlay(ctx, geo, sample, ui)   — same sample and ui as a diagram; called once the trace has started
     geo    { x(t) → px, y(k, v) → px on the main trace area (uses scale[k]), at(k, t) → value of k at time t,
              drawn (model time the trace has reached; = duration once built), left, right, top, bottom, base }
     Use it for brackets, injection marks, measurement points. Read values with geo.at(k, geo.drawn) so marks
     stay put while the reader scrubs.

   PULSE ONLY  FigureEngine.pulse(svgPaths, { bpm, reduce, stagger }) -> { start(), stop() }
     For a figure that is not built with the engine: runs the same heartbeat dot along existing SVG <path>
     elements (it adds one <circle class="fe-pulse"> after each path and changes nothing else). A dot only shows
     while its path is fully opaque. stagger: false makes all paths beat together.

   BEHAVIOR
     • Build-in: nothing is drawn ahead of time. A panel builds when it scrolls into view and the panel
       above it has finished its trace: frame strokes → equation types → trace draws → connector routes.
     • Clicking a half-built figure, or "Skip", finishes it. "Rebuild" throws the panels off to the side,
       reseeds the model and builds again. Changing a control re-runs the model with the same seed and
       the new curves ripple down the chain, panel by panel.
     • Hovering (or tapping) an equation term, a curve, a label or a port highlights that variable everywhere.
       Moving over a finished trace also scrubs time; diagrams show that moment.
     • One canvas (devicePixelRatio-aware), one requestAnimationFrame loop, paused when the figure is
       off-screen or the tab is hidden. Only the part of the canvas inside the viewport is repainted.
   ========================================================================== */
(function (global) {
  "use strict";

  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const smooth = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const part = (p) => (typeof p === "string" ? { t: p } : p);
  const partLen = (p) => p.t.length + (p.sub || "").length + (p.sup || "").length;
  // the first `n` characters of a term (on = true) or the rest of it (on = false), as html
  function partHTML(p, n, on) {
    const cut = (s, a) => (on ? s.slice(0, Math.max(0, a)) : s.slice(Math.max(0, a)));
    const t = cut(p.t, n), sub = cut(p.sub || "", n - p.t.length), sup = cut(p.sup || "", n - p.t.length - (p.sub || "").length);
    return esc(t) + (sub ? `<sub>${esc(sub)}</sub>` : "") + (sup ? `<sup>${esc(sup)}</sup>` : "");
  }
  const partText = (p) => p.t + (p.sub ? `_${p.sub}` : "") + (p.sup ? `^${p.sup}` : "");

  // Where the connector pulse is at a given beat: f = 0–1 along the line, a = its opacity. null between beats.
  function beatPhase(beat, order) {
    const ph = (((beat - order * 0.12) % 1) + 1) % 1;
    if (ph >= 0.72) return null;
    const f = smooth(ph / 0.72);
    return { f, a: Math.min(1, (1 - f) * 5, f * 12) };
  }
  function pulse(paths, env) {
    env = env || {};
    const BPM = env.bpm || 72, list = [...paths];
    const items = list.map((p, i) => {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("class", "fe-pulse"); c.setAttribute("r", env.r || 3.2); c.setAttribute("aria-hidden", "true"); c.style.opacity = "0";
      p.parentNode.insertBefore(c, p.nextSibling);
      return { p, c, len: 0, order: env.stagger === false ? 0 : i };
    });
    let active = false, on = false, seen = true, raf = 0;
    function frame(now) {
      if (!on) return;
      const beat = env.beat ? env.beat() : (now / 60000) * BPM;
      items.forEach((it) => {
        const bp = beatPhase(beat, it.order);
        if (!bp || parseFloat(getComputedStyle(it.p).opacity) < 0.9) { it.c.style.opacity = "0"; return; }
        if (!it.len) it.len = it.p.getTotalLength();
        const pt = it.p.getPointAtLength(it.len * bp.f);
        it.c.setAttribute("cx", pt.x.toFixed(1)); it.c.setAttribute("cy", pt.y.toFixed(1)); it.c.style.opacity = bp.a.toFixed(2);
      });
      raf = requestAnimationFrame(frame);
    }
    const go = () => { if (on || !active || !seen || env.reduce || document.hidden || !items.length) return; on = true; raf = requestAnimationFrame(frame); };
    const halt = () => { on = false; cancelAnimationFrame(raf); items.forEach((it) => (it.c.style.opacity = "0")); };
    document.addEventListener("visibilitychange", () => (document.hidden ? halt() : go()));
    if ("IntersectionObserver" in global && list[0]) new IntersectionObserver((es) => es.forEach((e) => { seen = e.isIntersecting; if (seen) go(); else halt(); })).observe(list[0].ownerSVGElement || list[0]);
    return { start() { active = true; go(); }, stop() { active = false; halt(); } };
  }

  // timings (seconds)
  const T_FRAME = 0.55, T_TYPE0 = 0.3, CPS = 30, T_CONN = 0.55, T_MIX = 0.6, T_RIPPLE = 0.32, T_EXIT = 0.45;

  function create(root, spec, env) {
    env = env || {};
    const REDUCE = !!env.reduce, BPM = env.bpm || 72;
    const play = (i, v) => { if (env.note) env.note(i, v); };
    const T = spec.duration, DT = spec.dt || 0.02, NS = Math.round(T / DT) + 1;
    const maxOf = (k) => (spec.scale && spec.scale[k]) || 1;
    const ctl = {};
    spec.controls.forEach((c) => (ctl[c.id] = c.value));
    let seed = (Date.now() % 2147483647) | 0;

    /* ---------------- model ---------------- */
    function simulate() {
      const r = rng(seed);
      const rand = { u: r, n: () => Math.sqrt(-2 * Math.log(r() + 1e-12)) * Math.cos(6.283185307 * r()) };
      const p = spec.model.setup(ctl, rand), s = spec.model.init(p), keys = Object.keys(s), out = {};
      keys.forEach((k) => (out[k] = new Float32Array(NS)));
      for (let i = 0; i < NS; i++) {
        for (const k of keys) out[k][i] = s[k];
        spec.model.step(s, p, i * DT, DT, rand);
      }
      const ev = [];
      (spec.events || []).forEach((e) => e.levels.forEach((lv, j) => {
        const a = out[e.k];
        for (let i = 1; i < NS; i++) if (a[i - 1] < lv && a[i] >= lv) { ev.push({ t: i * DT, k: e.k, note: e.note + (e.step || 0) * j }); break; }
      }));
      ev.sort((a, b) => a.t - b.t);
      return { s: out, ev };
    }
    let cur = simulate(), prev = cur;

    /* ---------------- DOM ---------------- */
    root.classList.add("fe");
    root.textContent = "";
    const cv = document.createElement("canvas");
    cv.className = "fe-cv"; cv.setAttribute("role", "img"); cv.setAttribute("aria-label", spec.alt || "");
    root.appendChild(cv);
    const ctx = cv.getContext("2d");
    const cursor = document.createElement("span");
    cursor.className = "fe-cur"; cursor.setAttribute("aria-hidden", "true");

    const panels = spec.panels.map((ps) => {
      const lines = (Array.isArray(ps.eq[0]) ? ps.eq : [ps.eq]).map((l) => l.map(part));
      const el = document.createElement("div");
      el.className = "fe-panel"; el.dataset.p = ps.id;
      el.innerHTML = `<div class="fe-text">${ps.html ? `<div class="fe-prose">${ps.html}</div>` : ""}${lines.map((l) =>
        `<p class="fe-eq"><span class="fe-sr">${esc(l.map(partText).join(""))}</span><span aria-hidden="true">${l.map((p) =>
          `<span class="fe-term"${p.k ? ` data-k="${esc(p.k)}"` : ""}><span class="fe-on"></span><span class="fe-off">${partHTML(p, 0, false)}</span></span>`).join("")}</span></p>`).join("")}
        <p class="fe-say">${esc(ps.say || "")}</p></div><div class="fe-plot${ps.diagram ? " fe-tall" : ps.tall ? " fe-mid" : ""}"></div>`;
      root.appendChild(el);
      const parts = lines.flat(), terms = [...el.querySelectorAll(".fe-term")];
      const nchar = parts.reduce((a, p) => a + partLen(p), 0);
      const tTypeEnd = T_TYPE0 + nchar / CPS, tTrace0 = tTypeEnd + 0.25, traceDur = ps.dur || (ps.diagram || ps.overlay ? 2.4 : 1.7);
      return {
        s: ps, el, plot: el.querySelector(".fe-plot"), parts, terms, nchar, shown: parts.map(() => -1),
        tTypeEnd, tTrace0, traceDur, tConn0: tTrace0 + traceDur, tEnd: tTrace0 + traceDur + T_CONN,
        c: -1, done: false, typed: -1, fired: 0, evs: [], mixT: 1, wait: 0, m: 1, r: null, g: null,
      };
    });
    const byId = {};
    panels.forEach((P, i) => { P.i = i; byId[P.s.id] = P; });
    const links = (spec.links || []).map((l, i) => ({ ...l, i, a: byId[l.from], b: byId[l.to] })).filter((l) => l.a && l.b);
    function assignEvents() {
      const first = {};
      panels.forEach((P) => P.s.traces.map((t) => t.k).concat(P.s.listen || []).forEach((k) => { if (first[k] == null) first[k] = P.i; }));
      panels.forEach((P) => { P.evs = cur.ev.filter((e) => first[e.k] === P.i); });
    }
    assignEvents();

    if (spec.outro) { const o = document.createElement("div"); o.className = "fe-outro"; o.innerHTML = spec.outro; root.appendChild(o); }

    const bar = document.createElement("div");
    bar.className = "fe-bar"; bar.setAttribute("role", "group"); bar.setAttribute("aria-label", "Figure controls");
    const tick = '<span class="switch-track" aria-hidden="true"></span>';
    bar.innerHTML = spec.controls.map((c) => (c.type === "choice"
      ? `<span class="fe-grp" role="group" aria-label="${esc(c.label)}"><span class="fe-grp-l">${esc(c.label)}</span>${c.options.map((o, j) =>
        `<button class="switch" type="button" data-c="${esc(c.id)}" data-o="${j}" aria-pressed="${o.v === c.value}">${tick}<span>${esc(o.label)}</span></button>`).join("")}</span>`
      : `<button class="switch" type="button" data-c="${esc(c.id)}" aria-pressed="${!!c.value}">${tick}<span>${esc(c.label)}</span></button>`)).join("")
      + '<span class="fe-acts"><button class="btn" type="button" data-act="rebuild">Rebuild</button><button class="btn" type="button" data-act="skip">Skip</button></span>';
    root.appendChild(bar);
    const skipBtn = bar.querySelector('[data-act="skip"]');

    /* ---------------- layout ---------------- */
    let W = 0, H = 0, dpr = 1, busX = 0, COL = {}, MONO = "monospace", SERIF = "serif";
    const mono = (px, w) => `${w || 400} ${px}px ${MONO}`, serif = (px, w) => `${w || 400} ${px}px ${SERIF}`;
    function rel(el) {
      let x = 0, y = 0, n = el;
      while (n && n !== root) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
      return { x, y, w: el.offsetWidth, h: el.offsetHeight };
    }
    function layout() {
      const cs = getComputedStyle(root), v = (n, d) => cs.getPropertyValue(n).trim() || d;
      COL = { ink: v("--ink", "#15161a"), ink2: v("--ink-2", "#4b4c52"), ink3: v("--ink-3", "#8d8e93"), rule: v("--rule", "rgba(0,0,0,.16)"), acc: v("--accent", "#1f3a9e"), paper: v("--paper", "#f1eee6"), paper2: v("--paper-2", "#e6e1d5") };
      MONO = v("--mono", "monospace"); SERIF = v("--serif", "serif");
      W = root.clientWidth; H = root.clientHeight;
      if (!W || !H) return;
      dpr = Math.min(global.devicePixelRatio || 1, 3);
      while (dpr > 1 && W * H * dpr * dpr > 14e6) dpr -= 0.25; // stay under mobile canvas limits
      const pw = Math.round(W * dpr), ph = Math.round(H * dpr);
      if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
      let right = 0;
      panels.forEach((P) => {
        const r = (P.r = rel(P.plot)), ps = P.s;
        let tr = { x: r.x, y: r.y, w: r.w, h: r.h }, dia = null;
        if (ps.diagram) {
          if (r.w >= 560) { const s = Math.min(r.h, r.w * 0.42); dia = { x: r.x, y: r.y, w: s, h: r.h }; tr = { x: r.x + s + 30, y: r.y, w: r.w - s - 30, h: r.h }; }
          else { const dh = Math.min(r.w * 0.8, r.h - 170); dia = { x: r.x, y: r.y, w: r.w, h: dh }; tr = { x: r.x, y: r.y + dh + 16, w: r.w, h: r.h - dh - 16 }; }
        }
        const ins = ps.traces.filter((t) => t.role === "in"), LH = 22, base = tr.y + tr.h - 20;
        P.g = {
          tr, dia, base, ix: tr.x + 2, iw: tr.w - (spec.labelPad || 46), mt: tr.y + 8 + ins.length * LH + (ins.length ? 12 : 6), mb: base - 1,
          lanes: ins.map((t, j) => ({ t, y0: tr.y + 8 + j * LH, h: LH - 8 })), outs: ps.traces.filter((t) => t.role !== "in"),
        };
        right = Math.max(right, tr.x + tr.w);
      });
      busX = Math.round(right + clamp((W - right) * 0.55, 8, 26));
    }
    const X = (P, i) => P.g.ix + (i / (NS - 1)) * P.g.iw;
    const Y = (P, k, v) => P.g.mb - clamp(v / maxOf(k), 0, 1.04) * (P.g.mb - P.g.mt - 4);
    const val = (P, k, i) => { const a = prev.s[k][i], b = cur.s[k][i]; return a + (b - a) * P.m; };

    /* ---------------- state ---------------- */
    let active = false, visible = false, running = false, raf = 0, last = 0, exit = 0;
    let hov = null, pin = null, hl = null, scrub = null, hits = [], GA = 1, NOW = 0;
    const allDone = () => panels.every((P) => P.done);
    function setTyped(P, n) {
      if (n === P.typed) return;
      P.typed = n;
      let acc = 0, at = null;
      P.parts.forEach((p, j) => {
        const len = partLen(p), k = clamp(n - acc, 0, len);
        if (P.shown[j] !== k) {
          P.shown[j] = k;
          P.terms[j].firstChild.innerHTML = partHTML(p, k, true);
          P.terms[j].lastChild.innerHTML = partHTML(p, k, false);
        }
        if (k > 0) at = P.terms[j];
        acc += len;
      });
      P.el.classList.toggle("fe-typed", n >= P.nchar);
      return at;
    }
    function caret(P, at, on) {
      if (on && at) { if (cursor.previousSibling !== at.firstChild) at.insertBefore(cursor, at.lastChild); }
      else if (cursor.parentNode && P.el.contains(cursor)) cursor.remove();
    }
    function finishPanel(P) {
      P.c = P.tEnd; P.done = true; P.fired = P.evs.length; P.mixT = 1; P.m = 1;
      setTyped(P, P.nchar); caret(P, null, false);
      P.el.classList.add("fe-built");
    }
    function sync() { skipBtn.disabled = allDone(); root.classList.toggle("fe-done", allDone()); }
    function finish() {
      if (exit) { exit = 0; clearBuild(); }
      panels.forEach(finishPanel);
      sync(); paint();
    }
    function clearBuild() {
      panels.forEach((P) => {
        P.c = -1; P.done = false; P.fired = 0; P.mixT = 1; P.m = 1;
        setTyped(P, 0); caret(P, null, false);
        P.el.classList.remove("fe-built", "fe-typed");
      });
      scrub = null;
    }
    function reset() {
      exit = 0;
      if (REDUCE) { finish(); return; }
      clearBuild(); sync(); paint();
    }
    function rebuild() {
      seed = (seed + 7919) | 0;
      if (REDUCE) { cur = prev = simulate(); assignEvents(); finish(); return; }
      if (!panels.some((P) => P.c >= 0)) { cur = prev = simulate(); assignEvents(); return; }
      exit = 0.0001; // the panels fly off first; see advance()
      kick();
    }
    function setControl(id, v) {
      if (ctl[id] === v) return;
      ctl[id] = v;
      bar.querySelectorAll(`[data-c="${id}"]`).forEach((b) => {
        const c = spec.controls.find((x) => x.id === id);
        b.setAttribute("aria-pressed", String(c.type === "choice" ? c.options[+b.dataset.o].v === v : !!v));
      });
      prev = cur; cur = simulate(); assignEvents();
      let k = 0;
      panels.forEach((P) => {
        P.fired = P.evs.length;
        if (P.c < 0 || REDUCE) { P.mixT = 1; P.m = 1; return; }
        if (!P.done) P.fired = P.evs.filter((e) => e.t <= ((P.c - P.tTrace0) / P.traceDur) * T).length;
        P.mixT = 0; P.m = 0; P.wait = k++ * T_RIPPLE; // the change ripples down the chain
      });
      kick(); paint();
    }
    function setHL() {
      const k = hov || pin;
      if (k === hl) return;
      hl = k;
      root.querySelectorAll(".fe-term[data-k]").forEach((t) => t.classList.toggle("fe-hl", t.dataset.k === hl));
      paint();
    }

    /* ---------------- per-frame update ---------------- */
    function advance(dt) {
      if (exit) {
        exit += dt / T_EXIT;
        if (exit >= 1) { exit = 0; cur = prev = simulate(); assignEvents(); clearBuild(); sync(); }
        return;
      }
      const top = root.getBoundingClientRect().top, vh = global.innerHeight;
      panels.forEach((P, i) => {
        if (P.c < 0) {
          const before = panels[i - 1];
          if (top + P.r.y < vh * 0.84 && (!before || before.done || before.c >= before.tConn0)) { P.c = 0; sync(); }
          else return;
        }
        if (!P.done) {
          P.c += dt;
          const n = clamp(Math.floor((P.c - T_TYPE0) * CPS), 0, P.nchar);
          const at = setTyped(P, n);
          if (P.c >= T_TYPE0 && P.c < P.tTypeEnd + 0.9) { if (at !== undefined) caret(P, at, true); } else caret(P, null, false);
          const tNow = clamp((P.c - P.tTrace0) / P.traceDur, 0, 1) * T;
          while (P.fired < P.evs.length && P.evs[P.fired].t <= tNow) play(P.evs[P.fired++].note, 1);
          if (P.c >= P.tEnd) { finishPanel(P); sync(); }
        }
        if (P.mixT < 1) {
          if (P.wait > 0) P.wait -= dt;
          else {
            if (P.mixT === 0) { const o = P.g.outs[0]; play(o && cur.s[o.k][NS - 1] > 0.05 * maxOf(o.k) ? i + 5 : i, 0.8); }
            P.mixT = Math.min(1, P.mixT + dt / T_MIX); P.m = smooth(P.mixT);
          }
        }
      });
    }

    /* ---------------- drawing ---------------- */
    const alpha = (a) => { ctx.globalAlpha = GA * a; };
    const dim = (k) => (hl && hl !== k ? 0.28 : 1);
    function poly(pts, f) {
      let tot = 0; const L = [];
      for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); L.push(d); tot += d; }
      let rem = tot * clamp(f, 0, 1), end = pts[0];
      if (rem <= 0) return end;
      ctx.beginPath(); ctx.moveTo(end[0], end[1]);
      for (let i = 1; i < pts.length && rem > 0; i++) {
        const k = Math.min(1, rem / (L[i - 1] || 1));
        end = [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k];
        ctx.lineTo(end[0], end[1]); rem -= L[i - 1];
      }
      ctx.stroke();
      return end;
    }
    // a label that may carry a subscript: "N" or { t: "S", sub: "1" }
    function label(lb, x, y, o) {
      o = o || {};
      const p = part(lb), px = o.px || 11;
      ctx.font = mono(px, o.w || 500);
      const w0 = ctx.measureText(p.t).width;
      ctx.font = mono(px * 0.74, o.w || 500);
      const w1 = p.sub ? ctx.measureText(p.sub).width + 0.5 : 0, w = w0 + w1;
      const x0 = o.align === "right" ? x - w : o.align === "center" ? x - w / 2 : x;
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      ctx.font = mono(px, o.w || 500); ctx.fillText(p.t, x0, y);
      if (p.sub) { ctx.font = mono(px * 0.74, o.w || 500); ctx.fillText(p.sub, x0 + w0 + 0.5, y + px * 0.3); }
      if (o.k) hits.push({ k: o.k, x: x0 - 6, y: y - 10, w: w + 12, h: 20 });
      return w;
    }
    function curve(P, k, yOf, n) {
      ctx.beginPath();
      for (let i = 0; i <= n; i += 2) { const x = X(P, i), y = yOf(val(P, k, i)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      if (n % 2) ctx.lineTo(X(P, n), yOf(val(P, k, n)));
      ctx.stroke();
    }
    function drawPanel(P) {
      const g = P.g, ps = P.s, c = P.done ? 1e9 : P.c, tr = g.tr;
      const prog = clamp((c - P.tTrace0) / P.traceDur, 0, 1), n = Math.floor(prog * (NS - 1));
      const fF = smooth(c / T_FRAME);
      let sample = null, ui = null;
      if (ps.diagram || ps.overlay) { // what custom drawings get to see
        const di = prog < 1 ? n : scrub != null ? scrub : NS - 1;
        sample = {};
        for (const k in cur.s) sample[k] = val(P, k, di);
        ui = {
          build: smooth(c / 0.9), t: di * DT, T, controls: ctl, col: COL, mono, serif, now: NOW, reduce: REDUCE,
          on: (k) => hl === k, tone: (k, base) => (hl === k ? COL.acc : base),
          alpha: (a, k) => alpha(a * (k ? dim(k) : 1)),
          hit: (k, x, y, r) => hits.push({ k, x: x - r, y: y - r, w: r * 2, h: r * 2 }),
        };
      }
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      // frame strokes: the two axes in ink, then a hairline closes the box
      alpha(1); ctx.strokeStyle = COL.ink; ctx.lineWidth = 1.2;
      poly([[tr.x, tr.y], [tr.x, g.base], [tr.x + tr.w, g.base]], fF * 1.6);
      if (fF > 0.55) { ctx.strokeStyle = COL.rule; ctx.lineWidth = 1; poly([[tr.x + tr.w, g.base], [tr.x + tr.w, tr.y], [tr.x, tr.y]], (fF - 0.55) / 0.45); }
      const ta = clamp((c - T_FRAME * 0.7) / 0.3, 0, 1);
      if (ta > 0) {
        const ticks = spec.ticks || [0, T];
        ticks.forEach((t, j) => {
          const x = g.ix + (t / T) * g.iw;
          alpha(ta); ctx.strokeStyle = COL.ink; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(x, g.base); ctx.lineTo(x, g.base + 4); ctx.stroke();
          ctx.fillStyle = COL.ink2;
          label(j === ticks.length - 1 && spec.unit ? `${t} ${spec.unit}` : String(t), x, g.base + 13, { px: 10, w: 400, align: j ? "center" : "left" });
        });
      }
      if (prog > 0) {
        const la = Math.min(1, prog * 8), xr = prog < 1 ? Math.min(g.ix + g.iw, X(P, n)) + 9 : g.ix + g.iw + 7; // labels ride the pen, then park in the margin
        // input lanes
        g.lanes.forEach((ln) => {
          const k = ln.t.k, on = hl === k, yOf = (v) => ln.y0 + ln.h - clamp(v / maxOf(k), 0, 1) * (ln.h - 2);
          alpha(0.9 * dim(k)); ctx.strokeStyle = COL.rule; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(g.ix, ln.y0 + ln.h + 0.5); ctx.lineTo(X(P, n), ln.y0 + ln.h + 0.5); ctx.stroke();
          alpha(dim(k)); ctx.strokeStyle = on ? COL.acc : COL.ink2; ctx.lineWidth = on ? 2 : 1.2;
          curve(P, k, yOf, n);
          alpha(la * dim(k)); ctx.fillStyle = on ? COL.acc : COL.ink2;
          label(ln.t.label || k, xr, ln.y0 + ln.h / 2 + 1, { k });
        });
        // output traces
        // (labels of curves that end close together are nudged apart)
        const ends = g.outs.map((t, j) => ({ j, y: clamp(Y(P, t.k, val(P, t.k, n)), g.mt + 6, g.mb - 7) })).sort((a, b) => a.y - b.y), yLab = [];
        for (let j = 1; j < ends.length; j++) if (ends[j].y - ends[j - 1].y < 13) ends[j].y = ends[j - 1].y + 13;
        for (let j = ends.length - 1, over = ends.length ? ends[j].y - (g.mb - 7) : 0; j >= 0 && over > 0; j--) { ends[j].y -= over; over = j ? Math.max(0, ends[j - 1].y + 13 - ends[j].y) : 0; }
        ends.forEach((e) => (yLab[e.j] = e.y));
        g.outs.forEach((t, oi) => {
          const k = t.k, on = hl === k, yOf = (v) => Y(P, k, v);
          if (t.ref) {
            const y = Math.round(yOf(t.ref.v)) + 0.5;
            alpha(la * 0.9); ctx.strokeStyle = COL.ink3; ctx.lineWidth = 1; ctx.setLineDash([2, 4]);
            ctx.beginPath(); ctx.moveTo(g.ix, y); ctx.lineTo(X(P, n), y); ctx.stroke(); ctx.setLineDash([]);
            ctx.fillStyle = COL.ink2; label(t.ref.label, g.ix + 6, y - 9, { px: 10, w: 400 });
          }
          alpha(dim(k)); ctx.strokeStyle = on || t.accent ? COL.acc : COL.ink; ctx.lineWidth = on ? 2.8 : 1.9;
          curve(P, k, yOf, n);
          const yEnd = yLab[oi];
          alpha(la * dim(k)); ctx.fillStyle = on || t.accent ? COL.acc : COL.ink;
          label(t.label || k, xr, yEnd, { k, px: 12 });
          if (t.readout) {
            const di = prog < 1 ? n : scrub != null ? scrub : NS - 1;
            alpha(la); ctx.fillStyle = on ? COL.acc : COL.ink; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
            ctx.font = serif(30, 300); ctx.fillText(val(P, k, di).toFixed(2), g.ix + 10, g.mt + 30);
            ctx.font = mono(10); ctx.fillStyle = COL.ink2; ctx.fillText(t.readout, g.ix + 10, g.mt + 46);
          }
        });
        if (ps.overlay) {
          ctx.save(); alpha(1);
          ps.overlay(ctx, {
            x: (t) => g.ix + (t / T) * g.iw, y: (k, v) => Y(P, k, v), at: (k, t) => val(P, k, clamp(Math.round(t / DT), 0, NS - 1)),
            drawn: prog < 1 ? n * DT : T, left: g.ix, right: g.ix + g.iw, top: g.mt, bottom: g.mb, base: g.base,
          }, sample, ui);
          ctx.restore(); ctx.setLineDash([]);
        }
        // playhead while the trace draws; time cursor when the reader scrubs
        const head = prog < 1 ? n : P.done && scrub != null ? scrub : -1;
        if (head >= 0) {
          const x = Math.round(X(P, head)) + 0.5, live = prog < 1;
          alpha(live ? 0.9 : 0.7); ctx.strokeStyle = live ? COL.acc : COL.ink3; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(x, tr.y + 4); ctx.lineTo(x, g.base); ctx.stroke();
          g.outs.forEach((t) => { alpha(1); ctx.fillStyle = COL.acc; ctx.beginPath(); ctx.arc(x, Y(P, t.k, val(P, t.k, head)), 3.2, 0, 6.3); ctx.fill(); });
        }
      }
      if (g.dia && ps.diagram) {
        ctx.save(); alpha(1);
        ps.diagram(ctx, g.dia, sample, ui);
        ctx.restore();
      }
    }
    function linkPath(L) {
      const a = L.a.g, b = L.b.g, y0 = clamp(Y(L.a, L.k, val(L.a, L.k, NS - 1)), a.mt + 6, a.mb - 7), y1 = b.tr.y + 15;
      return [[a.tr.x + a.tr.w + 1, y0], [busX, y0], [busX, y1], [b.tr.x + b.tr.w + 3, y1]];
    }
    function along(pts, f) {
      let tot = 0; const L = [];
      for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); L.push(d); tot += d; }
      let rem = tot * clamp(f, 0, 1);
      for (let i = 1; i < pts.length; i++) {
        if (rem <= L[i - 1]) { const k = rem / (L[i - 1] || 1); return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k]; }
        rem -= L[i - 1];
      }
      return pts[pts.length - 1];
    }
    function drawLinks(now) {
      const beat = env.beat ? env.beat() : (now / 60000) * BPM;
      const live = links.map((L) => ({ L, q: L.a.done ? 1 : clamp((L.a.c - L.a.tConn0) / T_CONN, 0, 1) })).filter((x) => x.q > 0);
      live.forEach((x) => (x.pts = linkPath(x.L)));
      live.forEach(({ L, q, pts }) => {
        const on = hl === L.k, e = smooth(q);
        ctx.lineCap = "round"; ctx.lineJoin = "round";
        alpha(dim(L.k)); ctx.strokeStyle = ctx.fillStyle = on ? COL.acc : COL.ink2; ctx.lineWidth = on ? 1.8 : 1.1;
        poly(pts, e);
        // a dot where this output joins a line that is already running down the margin
        if (live.some((o) => o.L !== L && o.pts[1][1] < pts[1][1] - 2 && o.pts[2][1] > pts[1][1] + 2)) { ctx.beginPath(); ctx.arc(pts[1][0], pts[1][1], 2.4, 0, 6.3); ctx.fill(); }
        if (q > 0.92) { // arrowhead into the next panel
          const [x, y] = pts[3];
          ctx.beginPath(); ctx.moveTo(x - 2, y); ctx.lineTo(x + 5.5, y - 3.6); ctx.lineTo(x + 5.5, y + 3.6); ctx.closePath(); ctx.fill();
        }
        alpha(e * dim(L.k)); ctx.fillStyle = on ? COL.acc : COL.ink;
        label(L.label || L.k, busX - 8, L.a.r.y + L.a.r.h + 17, { k: L.k, align: "right", px: 12 });
        // the pulse: one dot per beat runs down each finished connector, dimmer where the signal is flat
        if (q >= 1 && !REDUCE && !exit) {
          const bp = beatPhase(beat, L.i);
          if (bp) {
            const p = along(pts, bp.f), sig = clamp(val(L.a, L.k, NS - 1) / (0.4 * maxOf(L.k)), 0, 1);
            alpha(bp.a * (0.22 + 0.78 * sig) * dim(L.k)); ctx.fillStyle = COL.acc;
            ctx.beginPath(); ctx.arc(p[0], p[1], 3.2, 0, 6.3); ctx.fill();
          }
        }
      });
    }
    function draw(now) {
      if (!W || !H) return;
      NOW = now || performance.now();
      const top = root.getBoundingClientRect().top;
      const y0 = clamp(-top - 60, 0, H), y1 = clamp(global.innerHeight - top + 60, 0, H);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (y1 <= y0) return;
      ctx.clearRect(0, y0, W, y1 - y0);
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, y1 - y0); ctx.clip();
      hits = [];
      panels.forEach((P) => {
        if (P.c < 0 || P.r.y > y1 || P.r.y + P.r.h < y0) return;
        const e = exit ? clamp(exit * 1.5 - P.i * 0.1, 0, 1) : 0;
        GA = 1 - e;
        ctx.save();
        if (e) ctx.translate(e * e * W * 1.1, 0); // exits fly off to the side
        drawPanel(P);
        ctx.restore();
      });
      GA = exit ? Math.max(0, 1 - exit * 2.5) : 1;
      if (GA > 0) drawLinks(now);
      GA = 1; ctx.globalAlpha = 1;
      ctx.restore();
    }
    let painting = 0;
    function paint() { // one redraw outside the loop (reduced motion, hover while idle)
      if (running || painting) return;
      painting = requestAnimationFrame((t) => { painting = 0; draw(t); });
    }

    /* ---------------- loop ---------------- */
    function frame(now) {
      if (!running) return;
      const dt = Math.min(0.05, last ? (now - last) / 1000 : 0); last = now;
      advance(dt); draw(now);
      raf = requestAnimationFrame(frame);
    }
    function kick() {
      if (running || REDUCE || !active || !visible || document.hidden) return;
      running = true; last = 0; raf = requestAnimationFrame(frame);
    }
    function halt() { running = false; cancelAnimationFrame(raf); }

    /* ---------------- pointer ---------------- */
    function probe(e) {
      const b = root.getBoundingClientRect(), x = e.clientX - b.left - root.clientLeft, y = e.clientY - b.top - root.clientTop;
      let k = null, sc = null;
      for (let i = hits.length - 1; i >= 0 && !k; i--) { const h = hits[i]; if (x >= h.x && x <= h.x + h.w && y >= h.y && y <= h.y + h.h) k = h.k; }
      for (const P of panels) {
        if (P.c < P.tTrace0 || !P.g) continue;
        const g = P.g;
        if (x < g.ix - 4 || x > g.ix + g.iw + 4 || y < g.tr.y || y > g.base + 4) continue;
        const i = clamp(Math.round(((x - g.ix) / g.iw) * (NS - 1)), 0, NS - 1);
        if (P.done) sc = i;
        if (!k) {
          let best = 12;
          g.outs.forEach((t) => { const d = Math.abs(Y(P, t.k, val(P, t.k, i)) - y); if (d < best) { best = d; k = t.k; } });
          g.lanes.forEach((ln) => { if (y >= ln.y0 - 3 && y <= ln.y0 + ln.h + 3) k = ln.t.k; });
        }
      }
      return { k, sc };
    }
    root.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse" || bar.contains(e.target)) return;
      const t = e.target.closest && e.target.closest(".fe-term[data-k]"), p = probe(e);
      hov = t ? t.dataset.k : p.k;
      if (p.sc !== scrub) { scrub = p.sc; paint(); }
      setHL();
    });
    root.addEventListener("pointerleave", () => { hov = null; if (scrub != null) { scrub = null; paint(); } setHL(); });
    root.addEventListener("click", (e) => {
      const b = e.target.closest && e.target.closest("button");
      if (b && bar.contains(b)) {
        if (b.dataset.act === "rebuild") rebuild();
        else if (b.dataset.act === "skip") finish();
        else if (b.dataset.c) {
          const c = spec.controls.find((x) => x.id === b.dataset.c);
          setControl(c.id, c.type === "choice" ? c.options[+b.dataset.o].v : !ctl[c.id]);
        }
        return;
      }
      if (e.target.closest && e.target.closest("a, button")) return;
      if (!allDone() && panels.some((P) => P.c >= 0)) { finish(); return; } // a click completes a half-built figure
      const t = e.target.closest && e.target.closest(".fe-term[data-k]"), p = probe(e), k = t ? t.dataset.k : p.k;
      pin = k && k !== pin ? k : null; // tap to highlight, tap again (or elsewhere) to clear
      if (k) play(4, 0.6);
      if (e.pointerType && e.pointerType !== "mouse") { hov = null; scrub = p.sc; paint(); }
      setHL();
    });

    /* ---------------- observers ---------------- */
    const relayout = () => { layout(); paint(); if (running) draw(performance.now()); };
    if ("ResizeObserver" in global) new ResizeObserver(relayout).observe(root); else global.addEventListener("resize", relayout);
    if ("IntersectionObserver" in global) {
      new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible) { kick(); paint(); } else halt(); }), { rootMargin: "80px 0px" }).observe(root);
    } else visible = true;
    document.addEventListener("visibilitychange", () => (document.hidden ? halt() : kick()));
    global.addEventListener("scroll", () => { if (active && !running) paint(); }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);

    layout();
    if (REDUCE) finish(); else sync();

    return {
      el: root,
      start() { active = true; layout(); if (REDUCE) finish(); else { kick(); paint(); } },
      stop() { active = false; halt(); },
      reset, finish, rebuild, relayout,
      set: setControl,
      highlight(k) { pin = k || null; setHL(); },
      get controls() { return { ...ctl }; },
      get built() { return allDone(); },
    };
  }

  global.FigureEngine = { create, pulse };
})(window);
