/* ==========================================================================
   ✏️  CONTENT — every word on the site lives in this object.
   ========================================================================== */
const CONTENT = {
  name: "Zuan Park",
  eyebrow: "Biomedical Engineering · University of Minnesota",
  tagline: "I study how mitochondria help immune cells start inflammation. I'm working toward an MD/PhD.",
  heroMeta: "Minneapolis, MN · van Berlo Lab and Asakura Lab · Founding partner at CoQuest",
  footer: "Zuan Park · Minneapolis, MN",

  /* Tabs, in order. `subs` become sub-tabs. */
  pages: [
    { id: "about", tab: "About" },
    { id: "research", tab: "Research", subs: [
      { id: "inflammasome", tab: "Inflammasome" },
      { id: "heart-repair", tab: "Heart repair timeline" },
      { id: "seahorse", tab: "Seahorse assay" },
      { id: "muscle-dmd", tab: "Muscle & DMD" },
      { id: "methods", tab: "Methods" },
    ] },
    { id: "ventures", tab: "Ventures" },
    { id: "experience", tab: "Experience", subs: [
      { id: "clinical", tab: "Clinical" },
      { id: "awards", tab: "Honors & Awards" },
      { id: "leadership", tab: "Leadership" },
      { id: "service", tab: "Service" },
    ] },
  ],
  /* Old links → new routes (anything after # scrolls to that id) */
  redirects: {
    "contact": "about#contact",
    "methods": "research/methods",
    "research/muscle": "research/muscle-dmd",
    "clinical": "experience/clinical",
    "honors": "experience/awards",
    "honors/awards": "experience/awards",
    "honors/leadership": "experience/leadership",
    "honors/service": "experience/service",
  },

  /* About */
  abstract: {
    title: "Abstract",
    text: [
      "I'm a first-year Biomedical Engineering student in the University of Minnesota Honors Program, and I plan to pursue an MD/PhD.",
      "I work in two labs. In the van Berlo Lab at the Lillehei Heart Institute, I study how CMPK2, an enzyme mitochondria need to make new DNA, affects NLRP3 inflammasome signaling in macrophages. In the Asakura Lab, I looked at where albumin sits in healthy and regenerating skeletal muscle.",
      "Outside the lab, I'm a founding partner at CoQuest, a startup that gives students reasons to go out and explore.",
    ],
  },
  aboutMe: {
    title: "About me",
    text: [
      "I finished high school at West Fargo Sheyenne in North Dakota, first in a class of 304. I captained the Public Forum debate team, and in June 2025 I represented North Dakota as a senator at American Legion Boys Nation in Washington, D.C.",
      "Outside class I ran debate practices, started a hydroponics club, led worship and youth groups, and collected pop tabs for the Ronald McDonald House.",
    ],
  },
  education: [
    { school: "University of Minnesota, Twin Cities", when: "August 2026 – May 2030 (expected)",
      lines: ["B.S. Biomedical Engineering, Honors Program", "Phyllis B. Price and Presidential Scholarship"] },
    { school: "West Fargo Sheyenne High School", when: "August 2024 – May 2026",
      lines: ["GPA 4.57 · Class rank 1 of 304", "AP Scholar with Distinction · ASCE, NHS, and Grooters Impact Scholarship"] },
  ],

  /* Research */
  research: {
    title: "Research",
    lede: "I work in two labs at the University of Minnesota. Pick a topic to see the figure that goes with it.",
    inflammasome: {
      kicker: "van Berlo Lab · Lillehei Heart Institute",
      title: "How an immune cell sounds the alarm",
      lab: "The van Berlo Lab studies the pathways that control how the heart regenerates. It uses genetic mouse models to study cardiac progenitor cells, what drives cardiac hypertrophy, and alternative splicing in heart disease.",
      labSrc: { text: "van Berlo Lab, Lillehei Heart Institute, University of Minnesota", url: "https://med.umn.edu/lhi/research/research-labs/van-berlo-lab" },
      text: [
        "I joined in September 2026 as a cardiovascular research assistant. My project asks how CMPK2 shapes mitochondrial function and inflammatory signaling in macrophages, with a focus on the NLRP3 inflammasome. We use LysM-Cre to delete the gene in myeloid cells, which include macrophages.",
        "Macrophages are immune cells. When they sense trouble, a protein complex called the NLRP3 inflammasome can assemble and release IL-1β, a signal that drives inflammation. Fig. 1 walks through the steps.",
        "Day to day, I do histology, extract bone marrow, and prepare samples. I analyze images and data in CellProfiler and Fiji, and I keep detailed records of experiments and protocols.",
      ],
    },
    heart: {
      kicker: "van Berlo Lab · Background reading",
      title: "How the heart heals after a heart attack",
      text: [
        "This is background reading for my work in the van Berlo Lab. Doctors call a heart attack a myocardial infarction (MI). Fig. 2 summarizes how the heart heals in the week after one, based on a review by Chalise, Becirovic-Agic, and Lindsey.",
        "Drag the day marker to move through the week. Click a curve to see what that cell does, and switch on an intervention to see how the review says it changes healing.",
      ],
    },
    seahorse: {
      kicker: "van Berlo Lab · Cell metabolism",
      title: "Measuring how cells use oxygen",
      text: [
        "In the van Berlo Lab I run Seahorse extracellular flux assays to measure cell metabolism and mitochondrial function.",
        "The instrument tracks how fast cells use oxygen while three drugs go in one after another. The first blocks ATP production, the second makes the mitochondria run flat out, and the last shuts them off. The shape of the curve shows how hard the mitochondria are working and how much spare capacity they have.",
      ],
    },
    muscle: {
      kicker: "Asakura Lab · University of Minnesota Medical School",
      title: "How muscle rebuilds after injury",
      lab: "The Asakura Lab is part of the UMN Stem Cell Institute and the Wellstone Muscular Dystrophy Center. It studies muscle stem cells, called satellite cells, and therapies for Duchenne muscular dystrophy (DMD).",
      labSrc: { text: "Asakura Lab, University of Minnesota", url: "https://med.umn.edu/neurology/research/asakura-lab" },
      text: [
        "I joined the lab in September 2026 as a myology research assistant.",
        "My project looked at how albumin is distributed in healthy skeletal muscle and in muscle regenerating after a cardiotoxin injury. I cut thin sections on a cryostat, stained them with hematoxylin and eosin (H&E), and compared injured and uninjured tissue.",
        "Albumin is a blood protein. It normally stays outside muscle fibers, so finding it inside one means the fiber's membrane was damaged. Fig. 4 shows why that happens in DMD, how damaged muscle repairs itself, and the stem cells that do the work.",
      ],
    },
  },

  /* Fig. 4 — muscle damage, DMD and satellite cells (simplified, well-established biology) */
  fig4: {
    a: {
      title: "(a) Why the fiber breaks",
      healthy: "Healthy",
      dmd: "DMD (no dystrophin)",
      contract: "Contract",
      healthyIdle: "Dystrophin links actin inside the fiber to laminin-211 outside it. Press Contract to squeeze the fiber.",
      dmdIdle: "Without dystrophin, the membrane has no anchor. Press Contract to squeeze the fiber.",
      held: "The membrane holds. Dystrophin passes the force out to the basal lamina.",
      torn: "The membrane tears. Ca²⁺ floods in and albumin leaks into the fiber.",
      count: "albumin inside the fiber",
    },
    b: {
      title: "(b) Damage and repair over time",
      acute: "Acute cardiotoxin injury (wild-type)",
      chronic: "Chronic DMD (mdx mouse model)",
      stages: [
        { t: "Healthy", d: "Fibers are packed tight and many-sided, with their nuclei at the edge." },
        { t: "Injury & necrosis", d: "Damaged fibers die and leak. Albumin from the blood gets inside them, and macrophages move in to clear the debris." },
        { t: "Regeneration", d: "Satellite cells rebuild the lost fibers. The new fibers start small, with their nuclei in the center." },
      ],
      last: {
        acute: { t: "Resolved", d: "After a one-time injury, the new fibers grow back to normal size. Central nuclei stay for a while, a sign the fiber was rebuilt." },
        chronic: { t: "Repeated cycles", d: "In DMD, damage and repair keep repeating. Fiber sizes vary, scar tissue (fibrosis) builds up, and fat replaces muscle as regeneration wears out." },
      },
      legend: ["Myonucleus", "Albumin inside a leaky fiber", "Macrophage", "Fibrosis", "Fat"],
      rangeLabel: "Stage",
    },
    c: {
      title: "(c) Muscle stem cells",
      hint: "Click a stage to see what happens.",
      stages: [
        { t: "Quiescent", m: "Pax7⁺", say: "Satellite cells rest under the basal lamina, right against the fiber, waiting for damage." },
        { t: "Activation", m: "MyoD", say: "Injury wakes them up. They switch on MyoD and start dividing again." },
        { t: "Proliferation", m: "myoblasts", say: "Activated cells divide into many myoblasts, enough to rebuild what was lost." },
        { t: "Differentiation", m: "myogenin", say: "Myoblasts switch on myogenin, stop dividing, and commit to becoming muscle." },
        { t: "Fusion", m: "new fiber", say: "They fuse with each other or with damaged fibers. The new fiber's nuclei sit in the center." },
        { t: "Self-renewal", m: "back to rest", say: "A few activated cells go back to rest, so the stem cell pool is ready for the next injury." },
      ],
    },
    caption: "Muscle damage and repair, and why muscle breaks down in Duchenne muscular dystrophy (DMD). (a) Dystrophin links the actin cytoskeleton, through the dystrophin-glycoprotein complex (dystroglycan and sarcoglycans), to laminin-211 in the basal lamina. Without it, contraction tears the membrane. Damaged dystrophic fibers take up serum proteins such as albumin, which is why Evans blue dye (it binds albumin) and albumin uptake are used to mark damaged fibers. That is the link to my albumin project. (b) A cross-section through injury and repair. (c) The satellite cells that do the repair.",
    note: "Simplified schematic of well-established biology; not lab data.",
    source: "standard muscle biology (dystrophin-glycoprotein complex; satellite-cell myogenesis). Lab context:",
  },

  /* Fig. 1 */
  fig1: {
    toggle: "Cmpk2 deletion (LysM-Cre, myeloid cells)",
    steps: [
      { t: "Stimulus", d: "Move over a mitochondrion", dTouch: "Tap a mitochondrion" },
      { t: "mtDNA release", d: "Oxidized mtDNA enters the cytosol" },
      { t: "Assembly", d: "NLRP3 and ASC form the inflammasome" },
      { t: "IL-1β release", d: "Click: caspase-1 cleaves pro-IL-1β", dTouch: "Tap: caspase-1 cleaves pro-IL-1β" },
    ],
    readout: "IL-1β released",
    stageLabel: "Interactive cell. Press Enter to stimulate the mitochondria; once the inflammasome is assembled, press Enter to release IL-1β.",
    alt: "Schematic macrophage with a nucleus, five mitochondria, NLRP3 proteins and pro-IL-1β. Stimulating a mitochondrion releases oxidized mtDNA, which assembles NLRP3 into a ring around an ASC speck. Activating it releases IL-1β from the cell. With Cmpk2 deleted, no mtDNA is released.",
    caption: "NLRP3 inflammasome activation in a macrophage that is already primed. A stimulus makes the mitochondria release oxidized mtDNA, NLRP3 assembles with ASC into a ring, and active caspase-1 cuts pro-IL-1β into IL-1β, which leaves the cell. Deleting Cmpk2 stops new mtDNA synthesis, so the ring never forms.",
    note: "Simplified schematic based on Zhong et al., <i>Nature</i> 2018; not lab data.",
    source: "Zhong Z, et al. New mitochondrial DNA synthesis enables NLRP3 inflammasome activation. <i>Nature</i> 2018;560:198–203.",
    doi: "https://doi.org/10.1038/s41586-018-0372-z",
    msg: {
      notYet: "The inflammasome isn't assembled yet. Stimulate the mitochondria first.",
      ko: "Cmpk2 is deleted, so no new mtDNA is made and the inflammasome can't assemble.",
      ready: "Inflammasome assembled. Click, tap, or press Enter to release IL-1β.",
      released: "Caspase-1 cleaved pro-IL-1β, and IL-1β is leaving the cell.",
    },
  },

  /* Fig. 2 */
  fig2: {
    phases: [
      { d: 0, day: "Day 0", title: "Infarction", text: "Dying heart muscle cells release damage signals (DAMPs): HMGB1, S100A8/A9, mitochondrial DNA, and ATP." },
      { d: 1, day: "Day 1", title: "Inflammation", text: "Neutrophils peak and release MMP-8, MMP-9, and elastase. Pro-inflammatory macrophages express IL-1β, IL-6, and TNFα and lean on glycolysis." },
      { d: 3, day: "Days 3–5", title: "Resolution", text: "Macrophage numbers peak and shift toward anti-inflammatory markers (IL-10, ARG1, CD206, TGF-β). Fibroblasts divide fastest around day 3." },
      { d: 7, day: "Day 7", title: "Repair", text: "Reparative macrophages and fibroblasts make collagen, periostin, SPARC, and lysyl oxidase. New matrix forms the scar." },
    ],
    cells: {
      neut: { label: "Neutrophils", role: "The first cells to arrive. They peak around day 1 and release MMP-8, MMP-9, and neutrophil elastase, enzymes that break down the existing matrix." },
      prom: { label: "Pro-inflammatory macrophages", role: "They arrive early and express IL-1β, IL-6, and TNFα. They secrete MMP-8 and MMP-9 to help clear dead tissue, and they rely on glycolysis for energy." },
      repm: { label: "Reparative macrophages", role: "They take over around days 3 to 5, express IL-10, ARG1, CD206, and TGF-β, and eat dying neutrophils. By day 7 they help make collagen, periostin, SPARC, and lysyl oxidase." },
      fib: { label: "Fibroblasts", role: "Present the whole time. They divide fastest around day 3, and by day 7 they are the cells that build the scar, secreting collagen I, SPARC, and lysyl oxidase." },
    },
    ecmLabel: "New collagen (scar)",
    pickTitle: "Pick a cell",
    pickText: "Click a curve, or a name in the key, to see what that cell does.",
    tx: [
      { k: "ccr2", t: "CCR2 inhibition", d: "Fewer pro-inflammatory monocytes come in" },
      { k: "il10", t: "IL-10 given at 24 h", d: "Fewer macrophages, earlier shift to repair" },
      { k: "deplete", t: "Macrophage depletion", d: "Repair is impaired" },
    ],
    caption: "Cardiac wound healing after myocardial infarction, mostly from mouse permanent-occlusion models. (a) Cell populations over the first week. (b) Healing balances the breakdown of existing extracellular matrix (ECM) against building new ECM, and inflammation feeds both. The review summarizes these interventions: CCR2 inhibition targets pro-inflammatory monocytes and helps repair; IL-10 given 24 h after MI lowers macrophage numbers and shifts them toward repair; depleting macrophages impairs repair.",
    note: "Qualitative schematic. Curve heights and shifts show direction only, not measurements.",
    bridge: "Link to Fig. 1: IL-1β is a key cytokine of day-1 pro-inflammatory macrophages.",
    source: "Chalise U, Becirovic-Agic M, Lindsey ML. The cardiac wound healing response to myocardial infarction. <i>WIREs Mech Dis</i>. 2023;15(1):e1584.",
    doi: "https://doi.org/10.1002/wsbm.1584",
  },

  /* Ventures */
  venture: {
    kicker: "Startup · Founding partner · September 2026 – Present",
    name: "CoQuest",
    tagline: "Side quests for students. Don't recommend places, create reasons to go.",
    url: "https://coquestapp.com",
    urlText: "coquestapp.com",
    text: [
      "CoQuest started at the 0-1 UMN Hackathon. Five of us built wego, a web app for finding spontaneous things to do around campus, in 71 hours. It won the Audience Vote, and we kept building it into CoQuest.",
      "My part was product and website design, collecting data and real user stories, fabrication, and the pitch we gave to judges and peers.",
      "I built it with Evan Morris, Reeha Ibrahim, Jacob Lee, and Caleb Fynewever.",
    ],
    facts: [
      { n: 71, unit: "h", label: "Hackathon build" },
      { n: 5, label: "Founding team" },
      { text: "Won", label: "Audience Vote" },
    ],
    deckIntro: "These are real quests from the app. Draw one.",
    deckButton: "Draw a quest",
    deckSource: "From CoQuest's quest list",
    /* Real quests from CoQuest (src/data/quests.ts) */
    quests: [
      { title: "$5 Snacks You Can't Read", hook: "Guess what's in a snack when nobody in the group can read the label.", area: "Seward", vibes: ["food", "weird", "competitive", "social"] },
      { title: "Hold a Pose From Sunset to Dark", hook: "Whoever shows up last picks the group pose you hold at three spots until dark.", area: "Mill District / St. Anthony Main", vibes: ["outdoors", "creative", "chill", "social"] },
      { title: "Mimic the Weisman", hook: "Recreate a piece of art with only what's in your backpacks.", area: "East Bank (campus)", vibes: ["creative", "weird", "chill"] },
      { title: "Fourth From the Bottom at Hard Times", hook: "Count four up from the bottom of the menu board and order whatever it lands on.", area: "Cedar-Riverside / West Bank", vibes: ["food", "late-night", "social", "weird"] },
      { title: "Skyway Speedrun", hook: "Cross downtown through the skyways without touching a sidewalk.", area: "Downtown", vibes: ["active", "competitive", "weird"] },
    ],
    vibeLabels: { chill: "Chill", active: "Active", food: "Food", creative: "Creative", social: "Social", weird: "Weird", outdoors: "Outdoors", competitive: "Competitive", "late-night": "Late night" },
  },

  /* Clinical */
  clinical: {
    kicker: "Sanford Medical Center · Fargo, ND · September 2024 – May 2025",
    title: "Shadowing doctors at Sanford",
    role: "Sanford MedX & Orthopedic Fellow",
    text: [
      "In high school I was a Sanford MedX and Orthopedic Fellow at Sanford Medical Center in Fargo.",
      "I spent more than 40 hours shadowing surgeons, radiologists, orthopedic specialists, and physical therapists across a range of specialties and patient-care settings.",
      "I watched diagnostic imaging, surgeries, and patient evaluations, and saw how clinicians made decisions. Working next to the staff, I also practiced hands-on skills: orthopedic casting, phlebotomy, and patient-care procedures.",
    ],
    hours: 40,
    shadowed: "Surgeons, radiologists, orthopedic specialists, physical therapists",
    practiced: "Orthopedic casting, phlebotomy, patient-care procedures",
    observed: "Diagnostic imaging, surgical procedures, patient evaluations, clinical decision-making",
  },

  /* Experience */
  experience: {
    title: "Experience",
    lede: "Clinical shadowing, awards, the groups I led, and where I volunteered.",
    awards: { title: "Honors and awards", lede: "The big numbers show how selective each one was." },
    leadership: { title: "Leading teams and clubs", lede: "Roles where I ran something, from debate practice to a hydroponics club." },
    service: { title: "Volunteering", lede: "Where I've spent time helping out since 2022." },
  },
  honorStats: [
    { big: [{ n: 1 }, { of: "of" }, { n: 25 }], pool: { pre: "from ", n: 17000, post: "+ applicants nationwide" },
      title: "NHS National Scholar", note: "Finalist invited to Washington, D.C., for a weeklong conference and award ceremony. 500+ volunteer hours.", date: "Spring 2026" },
    { big: [{ n: 1 }, { of: "of" }, { n: 100 }], pool: { pre: "from ", n: 25000, post: "+ applicants" },
      title: "American Legion Boys Nation Senator", note: "Represented North Dakota in Washington, D.C., and was elected Nationalist Party Chair.", date: "June 2025" },
    { big: [{ of: "rank" }, { n: 1 }, { txt: "/" }, { n: 304 }], pool: { pre: "GPA ", txt: "4.57" },
      title: "Class Rank", note: "West Fargo Sheyenne High School.", date: "May 2026" },
    { big: [{ n: 1 }, { of: "of" }, { n: 1238 }], pool: { pre: "from ", n: 100000, post: "+ applicants nationwide" },
      title: "Coca-Cola Scholarship Semifinalist", note: "One of 1,238 semifinalists nationwide.", date: "December 2025" },
    { big: [{ n: 1 }, { of: "of" }, { n: 800 }], pool: { pre: "teams from ", n: 20000, post: "+ international teams" },
      title: "Odyssey of the Mind World Finalist", note: "1st place at the Regional and State competitions.", date: "February 2023" },
    { big: [{ txt: "#" }, { n: 1 }], pool: { pre: "", txt: "in North Dakota · Division I" },
      title: "State Champion, Public Forum Debate", note: "Seven-time District Champion and National Competitor.", date: "January 2026" },
  ],
  honorList: [
    { t: "NSDA Degree of Superior Distinction", s: "850+ points", d: "" },
    { t: "College Board AP Scholar with Distinction", s: "", d: "July 2025" },
    { t: "West Fargo Exchange Club Student of the Month", s: "", d: "September 2025" },
    { t: "Phyllis B. Price and Presidential Scholarship", s: "University of Minnesota", d: "2026" },
    { t: "ASCE, NHS, and Grooters Impact Scholarship", s: "West Fargo Sheyenne High School", d: "2026" },
  ],
  leadership: [
    { role: "North Dakota Senator & Nationalist Party Chair", org: "American Legion Boys Nation · Washington, D.C.", when: "June 2025", metric: "1 of 100 senators",
      text: "I was one of 100 senators chosen from more than 25,000 applicants. I was elected chair of the Nationalist Party and led legislative debate, policy discussions, and coalition-building." },
    { role: "Public Forum Debate Team Captain", org: "Sheyenne High School", when: "2024 – 2026", metric: "State champion",
      text: "I ran 55+ practices, organized and hosted home tournaments, and taught Public Forum basics like case writing and rebuttals to 150+ novice students across the state. I also served in the Student Congressional Senate and was state champion in November 2024." },
    { role: "Hydroponics Club Founder", org: "The Charter School of Wilmington", when: "2022 – 2024", metric: "10+ classroom systems",
      text: "I lobbied the school district for funding and approval, then installed 10+ hydroponic systems in classrooms. We grew fresh produce and donated it to homeless shelters and food pantries." },
    { role: "HOSA Senior Representative", org: "Sheyenne High School", when: "2025 – 2026", metric: "$1,500+ raised",
      text: "I organized blood drive fundraisers that raised $1,500+ and led a school-wide pop-tab drive for the Ronald McDonald House that collected 35,000+ tabs." },
    { role: "Fellowship of Christian Athletes President", org: "Sheyenne High School", when: "2024 – 2026", metric: "10 → 50+ members",
      text: "Our chapter grew from 10 to 50+ members. I led bi-weekly Bible studies and community outreach events." },
  ],
  service: [
    { role: "Volunteer Team Lead", org: "Ronald McDonald House", when: "2024 – 2026", metric: "60,000+ pop tabs",
      text: "I organized pop-tab drives that collected 60,000+ tabs and coordinated monthly volunteer shifts. Each shift, we served 30+ meals to families of hospitalized children." },
    { role: "Tutor & Landscaping Volunteer", org: "Urban Promise", when: "2022 – 2024", metric: "25+ trees planted",
      text: "I tutored 8 students over Zoom in Algebra 1 and 2 and English 1 and 2. I also mulched 4 playgrounds and planted 25+ trees." },
    { role: "Founding Member", org: "True Love Ministry (NDSU)", when: "2024 – 2026", text: "" },
    { role: "Church Worship & Youth Leader", org: "DKUM Church & Bethel Church", when: "2024 – 2026", metric: "200+ campers",
      text: "I coordinated twice-weekly services for 100+ students and mentored 5 musicians and vocalists. With J316 Ministries, I organized a free week-long soccer camp for over 200 elementary and middle schoolers." },
    { role: "Volunteer", org: "Bethany Nursing Home", when: "2025 – 2026", metric: "60+ hours",
      text: "I visited every week, 60+ hours in total, and planned and led activities for residents." },
  ],

  /* Methods */
  methodsPage: { title: "Lab skills I use", lede: "The techniques and tools I use in the lab." },
  methods: [
    { h: "Histology", p: "I cut skeletal muscle on a cryostat and stain the sections with hematoxylin and eosin (H&E).",
      terms: ["Histology", "H&E staining", "Cryostat sectioning"] },
    { h: "Working with mice", p: "I isolate bone marrow, give intraperitoneal injections, and do echocardiography in mouse models, including mice with LysM-Cre gene deletion.",
      terms: ["Murine bone marrow isolation", "Intraperitoneal (IP) injection", "Echocardiography"] },
    { h: "Cell metabolism and assays", p: "I run Seahorse extracellular flux assays to measure metabolism and mitochondrial function. I also do in vitro cellular assays and mass spectrometry.",
      terms: ["Seahorse extracellular flux analysis", "In vitro cellular assays", "Mass spectrometry"] },
    { h: "Image and data analysis", p: "I quantify images and data in CellProfiler and Fiji, and I use MATLAB for computation.",
      terms: ["CellProfiler", "Fiji", "MATLAB"] },
    { h: "Training", p: "I completed two CITI Program courses on research with laboratory animals in September 2026.",
      terms: ["Working with Mice in Research", "Reducing Pain and Distress in Laboratory Mice and Rats"] },
    { h: "Documentation", p: "I keep detailed experiment records and lab protocols up to date.",
      terms: ["Experimental documentation", "Laboratory protocols"] },
  ],

  /* Contact */
  contact: {
    title: "Get in touch",
    lede: "Email is the fastest way to reach me, whether it's about research or CoQuest.",
    caption: "Where to find me. Each link is a node: drag one to nudge it, or click it to open.",
    copy: "Copy email address",
    copied: "Copied",
  },
  links: [
    { key: "email", label: "Email", text: "zuanpark@gmail.com", href: "mailto:zuanpark@gmail.com" },
    { key: "linkedin", label: "LinkedIn", text: "linkedin.com/in/zuanpark", href: "https://www.linkedin.com/in/zuanpark" },
    { key: "github", label: "GitHub", text: "github.com/zpark-start", href: "https://github.com/zpark-start" },
  ],
};

/* ==========================================================================
   Everything below builds the site.
   ========================================================================== */
(() => {
  "use strict";

  const A = window.anime;
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MOTION = document.documentElement.classList.contains("motion");
  const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const COARSE = matchMedia("(pointer: coarse)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => Math.round(n).toLocaleString("en-US");
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const C = CONTENT;
  const LOGO_PATH = "M4.5 6.5H11L4.5 17.5H13.5V6.5H16.4A3.15 3.15 0 0 1 16.4 12.8H13.5";
  const live = $("[data-live]");
  const announce = (m) => { live.textContent = ""; setTimeout(() => (live.textContent = m), 30); };

  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const count = (n) => `<span data-count="${n}">${MOTION ? 0 : fmt(n)}</span>`;
  const paras = (arr, leadFirst) => arr.map((p, i) => `<p${leadFirst && !i ? ' class="lead"' : ""}>${esc(p)}</p>`).join("");

  /* ======================================================================
     SOUND — tiny Web Audio synth. Off by default; choice kept in localStorage.
     ====================================================================== */
  const Sound = (() => {
    const KEY = "zp-sound";
    let on = true;
    try { if (localStorage.getItem(KEY) === "0") on = false; } catch (e) { on = true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    let ac = null, master = null, nbuf = null, voices = 0, lastPlay = 0;
    // Created on load; browsers keep it suspended until the first gesture.
    try {
      ac = new AC();
      const comp = ac.createDynamicsCompressor();
      comp.threshold.value = -16; comp.knee.value = 10; comp.ratio.value = 5; comp.attack.value = 0.002; comp.release.value = 0.18;
      master = ac.createGain(); master.gain.value = 0.7;
      master.connect(comp); comp.connect(ac.destination);
      nbuf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.6), ac.sampleRate);
      const d = nbuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { ac = null; }

    function osc(f, { to, toT, type = "sine", dur = 0.15, vol = 0.4, at = 0, attack = 0.003 } = {}) {
      const t = ac.currentTime + at, o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t);
      if (to) o.frequency.exponentialRampToValueAtTime(to, t + (toT || dur));
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + attack);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
    }
    function noise({ f = 3000, to, type = "bandpass", q = 1, dur = 0.04, vol = 0.3, at = 0 } = {}) {
      const t = ac.currentTime + at, s = ac.createBufferSource(), flt = ac.createBiquadFilter(), g = ac.createGain();
      s.buffer = nbuf; flt.type = type; flt.Q.value = q;
      flt.frequency.setValueAtTime(f, t); if (to) flt.frequency.exponentialRampToValueAtTime(to, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.004, dur / 3)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(flt); flt.connect(g); g.connect(master); s.start(t, Math.random() * 0.4); s.stop(t + dur + 0.05);
    }
    const PENTA = [261.63, 293.66, 329.63, 392, 440];
    const note = (i) => PENTA[((i % 5) + 5) % 5] * 2 ** Math.floor(i / 5);
    const bell = (f, at = 0, vol = 0.22, dur = 0.9) => {
      osc(f, { dur, vol, at, attack: 0.005 });
      osc(f * 2, { dur: dur * 0.55, vol: vol * 0.3, at, attack: 0.004 });
      osc(f * 3, { dur: dur * 0.25, vol: vol * 0.1, at, attack: 0.003 });
    };
    // Tab-switch pitch per main tab (C major chord, low → high, left → right). Tweak freely.
    const TAB_HZ = { about: 261.63, research: 329.63, ventures: 392.0, experience: 523.25 };
    const lib = {
      // layered click: noise transient + pitched pop with a fast pitch drop
      click: () => { noise({ f: 4200, q: 0.8, dur: 0.022, vol: 0.45 }); osc(1150, { to: 230, toT: 0.05, dur: 0.08, vol: 0.55 }); },
      hover: () => osc(3600, { type: "triangle", dur: 0.016, vol: 0.05 }),
      thump: () => { osc(150, { to: 46, toT: 0.15, dur: 0.22, vol: 0.9 }); noise({ f: 260, type: "lowpass", dur: 0.06, vol: 0.4 }); },
      // main-nav tab switch: a clear, steady note at the destination tab's pitch (see TAB_HZ),
      // with the same soft low "thump" transient on top
      tabSwitch: (id) => {
        const f = TAB_HZ[id]; if (!f) return;
        osc(f, { type: "triangle", dur: 0.55, vol: 0.8, attack: 0.004 });
        osc(f * 2, { dur: 0.3, vol: 0.16, attack: 0.004 });
        noise({ f: 260, type: "lowpass", dur: 0.06, vol: 0.4 });
      },
      chime: () => { const i = 6 + Math.floor(Math.random() * 4); bell(note(i), 0.07, 0.2); bell(note(i + 2), 0.15, 0.13); },
      success: () => [0, 2, 4].forEach((k, j) => bell(note(7 + k), j * 0.09, 0.3, 0.75)),
      tick: () => { noise({ f: 5200, q: 2, dur: 0.012, vol: 0.25 }); osc(2300, { type: "triangle", dur: 0.03, vol: 0.2 }); },
      pop: (i = 0) => { noise({ f: 3800, dur: 0.015, vol: 0.2 }); osc(note(6 + i), { to: note(6 + i) * 0.62, toT: 0.05, dur: 0.12, vol: 0.45 }); },
      slot: (i = 0) => { noise({ f: 3200, dur: 0.014, vol: 0.18 }); osc(note(5 + i), { type: "triangle", dur: 0.24, vol: 0.38 }); },
      blip: () => osc(900 + Math.random() * 500, { to: 1700, dur: 0.06, vol: 0.2 }),
      release: () => { noise({ f: 600, to: 3200, dur: 0.45, vol: 0.32 }); [4, 2, 0].forEach((k, j) => bell(note(5 + k), 0.08 + j * 0.07, 0.17, 0.5)); },
      fizzle: () => osc(220, { to: 130, dur: 0.2, vol: 0.38 }),
      bump: () => osc(270, { to: 150, dur: 0.14, vol: 0.5 }),
      on: () => { osc(700, { to: 320, toT: 0.04, dur: 0.06, vol: 0.4 }); osc(1050, { type: "triangle", dur: 0.11, vol: 0.28, at: 0.05 }); },
      off: () => { osc(1050, { to: 420, toT: 0.04, dur: 0.06, vol: 0.38 }); osc(600, { type: "triangle", dur: 0.11, vol: 0.24, at: 0.05 }); },
      flip: () => { noise({ f: 900, to: 3400, dur: 0.24, vol: 0.38, q: 1.2 }); osc(520, { to: 210, toT: 0.05, dur: 0.08, vol: 0.32, at: 0.22 }); },
      pluck: () => { osc(523.25, { type: "triangle", dur: 0.36, vol: 0.42 }); osc(1046.5, { dur: 0.2, vol: 0.12 }); },
      tear: () => { for (let k = 0; k < 5; k++) noise({ f: 1400 + Math.random() * 2600, q: 3, dur: 0.03, vol: 0.45, at: k * 0.035 }); osc(180, { to: 70, dur: 0.26, vol: 0.5 }); },
    };
    lib.page = lib.chime; lib.select = lib.pop; lib.tab = lib.thump;
    const GAP = { blip: 90, tick: 35, slot: 50, bump: 150, fizzle: 900, hover: 60, chime: 220, thump: 120, tabSwitch: 120, click: 40 };
    const last = {};
    function run(name, arg) {
      // hover ticks are 16 ms, so they don't hold a slot; the tab-switch note is never dropped
      if (name !== "hover") {
        if (voices >= 4 && name !== "tabSwitch") return; // never stack more than a few sounds
        voices++; setTimeout(() => voices--, 420);
      }
      try { lib[name](arg); } catch (e) { /* ignore */ }
    }
    function play(name, arg) {
      if (!on || !ac || document.hidden || !lib[name]) return;
      const t = performance.now();
      if (t - (last[name] || 0) < (GAP[name] || 30)) return;
      last[name] = t; lastPlay = t;
      if (ac.state === "running") { run(name, arg); return; }
      const ua = navigator.userActivation;
      if (!ua || ua.isActive) ac.resume().then(() => run(name, arg)).catch(() => {});
    }
    // First gesture anywhere unlocks audio, and that gesture itself makes a sound.
    const GESTURES = ["pointerdown", "keydown", "touchstart"];
    const unlock = () => {
      GESTURES.forEach((ev) => removeEventListener(ev, unlock, true));
      if (!ac) return;
      const t0 = performance.now();
      ac.resume().then(() => setTimeout(() => { if (on && lastPlay < t0) run("pop", 1); }, 25)).catch(() => {});
    };
    GESTURES.forEach((ev) => addEventListener(ev, unlock, true));

    const btn = $("[data-sound]");
    function sync() {
      btn.setAttribute("aria-pressed", String(on));
      btn.title = on ? "Sound on" : "Sound off";
    }
    btn.addEventListener("click", () => {
      on = !on;
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) { /* storage blocked */ }
      sync();
      if (on) play("on");
      else if (ac) { if (ac.state === "running") lib.off(); }
    });
    sync();
    return { play };
  })();

  /* Visual + haptic feedback paired with every sound */
  const FX_SEL = "button, .btn, .tab, .subtab, .brand, .net-node, .mi-key";
  function ripple(el, x, y) {
    if (REDUCE || el.closest(".qcard")) return;
    const r = el.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2;
    const sp = document.createElement("span");
    sp.className = "rip"; sp.setAttribute("aria-hidden", "true");
    sp.style.cssText = `width:${s}px;height:${s}px;left:${(x == null ? r.width / 2 : x - r.left) - s / 2}px;top:${(y == null ? r.height / 2 : y - r.top) - s / 2}px`;
    el.appendChild(sp); setTimeout(() => sp.remove(), 650);
  }
  function glow(el) { if (!el) return; el.classList.add("glow"); setTimeout(() => el.classList.remove("glow"), 900); }
  const buzz = () => { try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) { /* unsupported */ } };
  function feedback(el, x, y) {
    ripple(el, x, y); buzz();
    if (!el.matches(".tab, .subtab, .brand")) Sound.play("click"); // tabs get the route "thump"
  }
  document.addEventListener("pointerdown", (e) => {
    if (e.button) return;
    const el = e.target.closest(FX_SEL); if (el) feedback(el, e.clientX, e.clientY);
  }, true);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const el = e.target.closest && e.target.closest(FX_SEL); if (el && el === e.target) feedback(el);
  }, true);
  document.addEventListener("pointerover", (e) => {
    if (e.pointerType !== "mouse") return;
    const el = e.target.closest(FX_SEL);
    if (el && !el.contains(e.relatedTarget)) Sound.play("hover");
  });

  /* ======================================================================
     PAGE TEMPLATES
     ====================================================================== */
  const PAGES = C.pages;
  const routeHref = (p, s) => `#/${p.id}${s ? `/${s.id}` : ""}`;
  const head = (o, tag = "h2") => `
    <header class="page-head" data-reveal>
      ${o.kicker ? `<p class="kicker">${esc(o.kicker)}</p>` : ""}
      <${tag} class="page-title">${esc(o.title)}</${tag}>
      ${o.lede ? `<p class="page-lede">${esc(o.lede)}</p>` : ""}
    </header>`;
  const subHead = (o) => `
    <header class="sub-head" data-reveal>
      ${o.kicker ? `<p class="kicker">${esc(o.kicker)}</p>` : ""}
      <h3 class="sub-title">${esc(o.title)}</h3>
      ${o.lede ? `<p class="page-lede">${esc(o.lede)}</p>` : ""}
    </header>`;
  const subtabs = (p) => `
    <div class="subtabs" role="tablist" aria-label="${esc(p.tab)} topics" data-reveal>
      ${p.subs.map((s) => `<a class="subtab" role="tab" id="subtab-${p.id}-${s.id}" href="${routeHref(p, s)}" aria-controls="sub-${p.id}-${s.id}" aria-selected="false" tabindex="-1">${esc(s.tab)}</a>`).join("")}
    </div>`;
  const subpage = (p, s, html) => `<section class="subpage" id="sub-${p.id}-${s.id}" role="tabpanel" aria-labelledby="subtab-${p.id}-${s.id}" hidden>${html}</section>`;

  function aboutHTML() {
    const K = C.contact;
    return `
      <div class="hero-grid">
        <div class="hero-text">
          <p class="eyebrow hero-in">${esc(C.eyebrow)}</p>
          <h1 class="name" id="tab-title-about"><span class="sr-only">${esc(C.name)}</span><svg class="name-svg" aria-hidden="true" focusable="false"></svg><span class="name-fallback" aria-hidden="true">${esc(C.name)}</span></h1>
          <p class="tagline hero-in">${esc(C.tagline)}</p>
          <p class="hero-meta hero-in">${esc(C.heroMeta)}</p>
        </div>
        <div class="fig1-slot hero-in" data-slot="about">${fig1HTML()}</div>
      </div>
      <div class="about-sections">
        <section class="about-block" aria-labelledby="h-abstract" data-reveal>
          <h2 id="h-abstract">${esc(C.abstract.title)}</h2>
          <div class="prose">${paras(C.abstract.text, true)}</div>
        </section>
        <section class="about-block" aria-labelledby="h-me" data-reveal>
          <h2 id="h-me">${esc(C.aboutMe.title)}</h2>
          <div class="about-cols">
            <div class="prose">${paras(C.aboutMe.text)}</div>
            <div aria-label="Education">${C.education.map((e) => `
              <div class="edu"><h3>${esc(e.school)}</h3><span class="when">${esc(e.when)}</span>${e.lines.map((l) => `<p>${esc(l)}</p>`).join("")}</div>`).join("")}
            </div>
          </div>
        </section>
        <section class="about-block" id="contact" aria-labelledby="h-contact" data-reveal>
          <div class="stack contact-head"><h2 id="h-contact">${esc(K.title)}</h2><p class="page-lede">${esc(K.lede)}</p></div>
          ${fig5HTML()}
        </section>
      </div>`;
  }

  // Every Research sub-tab: heading block + text on the left, figure on the right, tops aligned.
  const twoCol = (left, right, wide) => `<div class="split${wide ? " split-wide" : ""}"><div class="stack">${left}</div><div class="fig-col" data-reveal>${right}</div></div>`;
  function researchHTML(p) {
    const R = C.research;
    const [inf, heart, sea, mus, meth] = p.subs;
    const labSrc = (s) => `<p class="src">Source: <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.text)}</a></p>`;
    return `
      ${head({ title: R.title, lede: R.lede })}
      ${subtabs(p)}
      ${subpage(p, inf, twoCol(`
        ${subHead(R.inflammasome)}
        <div class="prose" data-reveal><p class="lead">${esc(R.inflammasome.lab)}</p>${labSrc(R.inflammasome.labSrc)}${paras(R.inflammasome.text)}</div>`,
        `<div class="fig1-slot" data-slot="inflammasome"></div>`))}
      ${subpage(p, heart, twoCol(`
        ${subHead(R.heart)}
        <div class="prose" data-reveal>${paras(R.heart.text)}</div>`, fig2HTML(), true))}
      ${subpage(p, sea, twoCol(`
        ${subHead(R.seahorse)}
        <div class="prose" data-reveal>${paras(R.seahorse.text, true)}</div>`, seahorseFig(3)))}
      ${subpage(p, mus, twoCol(`
        ${subHead(R.muscle)}
        <div class="prose" data-reveal><p class="lead">${esc(R.muscle.lab)}</p>${labSrc(R.muscle.labSrc)}${paras(R.muscle.text)}</div>`, fig4HTML(), true))}
      ${subpage(p, meth, twoCol(subHead(C.methodsPage), `
        <div class="methods">${C.methods.map((m) => `
          <div class="method">
            <h4>${esc(m.h)}</h4>
            <p>${esc(m.p)}</p>
            <ul class="terms">${m.terms.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          </div>`).join("")}
        </div>`))}`;
  }

  function venturesHTML() {
    const V = C.venture;
    return `
      <div class="split">
        <div class="stack">
          <header class="page-head" data-reveal>
            <p class="kicker">${esc(V.kicker)}</p>
            <div class="cq-head"><img class="cq-mark" src="assets/coquest/coquest-mark.svg" alt="CoQuest logo" width="64" height="64"><h2 class="page-title">${esc(V.name)}</h2></div>
            <p class="cq-tagline">${esc(V.tagline)}</p>
          </header>
          <div class="prose" data-reveal>${paras(V.text)}</div>
          <dl class="facts" data-reveal>${V.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${f.text ? esc(f.text) : count(f.n)}${f.unit ? `<span class="unit">${esc(f.unit)}</span>` : ""}</dd></div>`).join("")}</dl>
          <p data-reveal><a class="btn" href="${esc(V.url)}" target="_blank" rel="noopener">Visit ${esc(V.urlText)} <span aria-hidden="true">↗</span></a></p>
        </div>
        <div class="fig deck-fig" data-reveal>
          <div class="fig-top"><span class="label">${esc(V.deckIntro)}</span></div>
          <div class="deck">
            <div class="qcard" data-qcard aria-hidden="false">
              <span class="qcard-inner">
                <span class="qface front" aria-live="polite" data-qfront></span>
                <span class="qface back" aria-hidden="true"><img src="assets/coquest/coquest-mark.svg" alt=""><span class="q-small">CoQuest</span></span>
              </span>
            </div>
            <div class="deck-row">
              <button class="btn btn-solid" type="button" data-draw>${esc(V.deckButton)}</button>
              <span class="q-small" data-qcount></span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function rowsHTML(arr) {
    return `<ol class="rows">${arr.map((r) => `
      <li data-reveal>
        <div><h3>${esc(r.role)}</h3><span class="org">${esc(r.org)}</span></div>
        <span class="when">${esc(r.when)}</span>
        <div class="body">${r.text ? `<p>${esc(r.text)}</p>` : ""}${r.metric ? `<span class="metric">${esc(r.metric)}</span>` : ""}</div>
      </li>`).join("")}</ol>`;
  }
  function experienceHTML(p) {
    const E = C.experience, K = C.clinical;
    const [cl, aw, le, se] = p.subs;
    const stats = C.honorStats.map((h) => `
      <article class="honor" data-reveal>
        <p class="ratio" aria-label="${esc(h.big.map((b) => b.n != null ? fmt(b.n) : b.of || b.txt).join(" "))}">${h.big.map((b) =>
          b.n != null ? count(b.n) : b.of ? `<span class="of">${esc(b.of)}</span>` : `<span class="slash">${esc(b.txt)}</span>`).join("")}</p>
        <p class="pool">${esc(h.pool.pre)}${h.pool.n != null ? count(h.pool.n) : esc(h.pool.txt)}${esc(h.pool.post || "")}</p>
        <h3>${esc(h.title)}</h3>
        <p>${esc(h.note)}</p>
        <p class="when">${esc(h.date)}</p>
      </article>`).join("");
    const list = C.honorList.map((h) => `
      <li data-reveal><span class="t">${esc(h.t)}${h.s ? `<small>${esc(h.s)}</small>` : ""}</span><span class="d">${esc(h.d)}</span></li>`).join("");
    return `
      ${head({ title: E.title, lede: E.lede })}
      ${subtabs(p)}
      ${subpage(p, cl, `<div class="split"><div class="stack">${subHead({ kicker: K.kicker, title: K.title })}<div class="prose" data-reveal><p class="lead">${esc(K.role)}</p>${paras(K.text)}</div></div>
        <aside class="side-box" aria-label="Clinical exposure" data-reveal>
          <div><p class="big-num">${count(K.hours)}<span class="unit">+ hours</span></p><p class="label">Shadowing</p></div>
          <dl class="kv"><dt>Shadowed</dt><dd>${esc(K.shadowed)}</dd></dl>
          <dl class="kv"><dt>Practiced</dt><dd>${esc(K.practiced)}</dd></dl>
          <dl class="kv"><dt>Observed</dt><dd>${esc(K.observed)}</dd></dl>
        </aside></div>`)}
      ${subpage(p, aw, `${subHead(E.awards)}<div><div class="honor-grid">${stats}</div><ul class="honor-list">${list}</ul></div>`)}
      ${subpage(p, le, `${subHead(E.leadership)}${rowsHTML(C.leadership)}`)}
      ${subpage(p, se, `${subHead(E.service)}${rowsHTML(C.service)}`)}`;
  }

  /* ---------- Fig. 5 markup: contact links as nodes ---------- */
  function fig5HTML() {
    const K = C.contact;
    return `
      <figure class="fig net-fig" aria-labelledby="net-cap">
        <div class="fig-top"><span class="fig-no">Fig. 5</span></div>
        <div class="net-stage">
          <svg class="net-lines" aria-hidden="true"></svg>
          <div class="net-center" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${LOGO_PATH}"/></svg></div>
          <ul class="net-links" aria-label="Links">${C.links.map((l) => {
            const ext = /^https?:/.test(l.href);
            return `<li><a class="net-node${l.key === "email" ? "" : " short"}" data-key="${l.key}" href="${esc(l.href)}"${ext ? ' target="_blank" rel="noopener"' : ""} draggable="false"><span class="k">${esc(l.label)}${ext ? ' <span aria-hidden="true">↗</span>' : ""}</span><span class="v">${esc(l.text)}</span></a></li>`;
          }).join("")}</ul>
        </div>
        <div class="net-foot"><button class="btn" type="button" data-copy="${esc(C.links[0].text)}">${esc(K.copy)}</button></div>
        <figcaption id="net-cap"><span><b>Fig. 5</b> ${esc(K.caption)}</span></figcaption>
      </figure>`;
  }

  /* ---------- Fig. 1 markup ---------- */
  function fig1HTML() {
    const F = C.fig1;
    return `
      <figure class="fig sim" id="fig1" aria-labelledby="f1-cap">
        <div class="fig-top">
          <span class="fig-no">Fig. 1</span>
          <button class="switch" type="button" role="switch" aria-checked="false" id="ko-switch">
            <span class="switch-track" aria-hidden="true"><span class="switch-knob"></span></span><span>${esc(F.toggle)}</span>
          </button>
        </div>
        <div class="sim-stage" role="button" tabindex="0" aria-label="${esc(F.stageLabel)}">
          <canvas role="img" aria-label="${esc(F.alt)}"></canvas>
          <dl class="readout"><dt>${esc(F.readout)}</dt><dd id="f1-il">0</dd></dl>
        </div>
        <ol class="f1-steps" aria-label="Steps">${F.steps.map((s, i) => `<li data-step="${i + 1}"><b>${esc(s.t)}</b><span>${esc(COARSE && s.dTouch ? s.dTouch : s.d)}</span></li>`).join("")}</ol>
        <figcaption id="f1-cap">
          <span><b>Fig. 1</b> ${esc(F.caption)}</span>
          <span class="cap-note">${F.note}</span>
          <span class="cap-src">Source: ${F.source} <a href="${esc(F.doi)}" target="_blank" rel="noopener">${esc(F.doi.replace("https://", ""))}</a></span>
        </figcaption>
      </figure>`;
  }

  /* ---------- Fig. 2 markup ---------- */
  const MI = { L: 52, R: 624, T: 40, B: 252, DMAX: 7.6 };
  const miX = (d) => MI.L + (d / MI.DMAX) * (MI.R - MI.L), miY = (v) => MI.B - v * (MI.B - MI.T - 8);
  const MI_KEYS = ["neut", "prom", "repm", "fib"];
  function fig2HTML() {
    const M = C.fig2, { L, R, T, B } = MI, X = miX;
    let s = `<rect class="band" x="${X(3)}" y="${T - 6}" width="${X(5) - X(3)}" height="${B - T + 6}"/>`;
    [[0, "MI"], [1, "day 1"], [3, "day 3"], [5, "day 5"], [7, "day 7"]].forEach(([d, t]) => {
      if (d) s += `<line class="vguide" x1="${X(d)}" y1="${T - 6}" x2="${X(d)}" y2="${B}"/>`;
      s += `<text class="svg-label${d === 0 ? " b" : ""}" x="${X(d)}" y="${T - 14}" text-anchor="${d === 0 ? "start" : "middle"}">${t}</text>`;
    });
    s += `<path class="ax" d="M${L} ${T - 6} V${B} H${R + 8}"/>`;
    for (let d = 0; d <= 7; d++) s += `<line class="tick" x1="${X(d)}" y1="${B}" x2="${X(d)}" y2="${B + 5}"/><text class="svg-label" x="${X(d)}" y="${B + 18}" text-anchor="middle">${d === 7 ? "7+" : d}</text>`;
    s += `<text class="svg-label b" x="${R + 8}" y="${B + 36}" text-anchor="end">Days after MI</text>`;
    s += `<text class="svg-label b wide-only" transform="translate(20 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">Relative abundance (schematic)</text>`;
    s += `<text class="svg-label b narrow-only" transform="translate(20 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">Relative abundance</text>`;
    s += `<path class="mi-curve c-ecm" data-k="ecm"/>`;
    MI_KEYS.forEach((k) => (s += `<path class="mi-curve c-${k}" data-k="${k}"/>`));
    MI_KEYS.forEach((k) => (s += `<path class="hit" data-k="${k}" aria-hidden="true"/>`));
    s += `<g class="day-cursor"><line class="day-line" x1="0" y1="${T - 6}" x2="0" y2="${B}"/>${MI_KEYS.map((k) => `<circle class="dot d-${k}" r="4.5" cx="0" cy="${B}"/>`).join("")}</g>`;
    const legend = MI_KEYS.map((k) => `<button class="mi-key" type="button" data-k="${k}" aria-pressed="false"><svg viewBox="0 0 20 10" aria-hidden="true"><line x1="1" y1="5" x2="19" y2="5" class="mi-curve c-${k}"/></svg>${esc(M.cells[k].label)}</button>`).join("")
      + `<span class="mi-key static"><svg viewBox="0 0 20 10" aria-hidden="true"><line x1="3" y1="5" x2="17" y2="5" class="mi-curve c-ecm"/></svg>${esc(M.ecmLabel)}</span>`;
    const balance = `
      <svg class="balance" viewBox="0 0 300 210" role="img" aria-label="Balance diagram: inflammation feeds both the breakdown of existing extracellular matrix and the synthesis of new matrix. The balance tips toward new matrix as the scar forms.">
        <defs><marker id="mi-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="var(--ink-2)"/></marker></defs>
        <rect class="box" x="92" y="6" width="116" height="28"/>
        <text class="svg-label b" x="150" y="24" text-anchor="middle">Inflammation</text>
        <path class="arrow" d="M120 34 Q80 50 64 80" marker-end="url(#mi-ah)"/>
        <path class="arrow" d="M180 34 Q220 50 236 80" marker-end="url(#mi-ah)"/>
        <g class="beam">
          <line x1="40" y1="112" x2="260" y2="112" stroke="var(--ink)" stroke-width="1.6"/>
          <path d="M40 112 L24 134 M40 112 L56 134" class="arrow"/>
          <path d="M20 134 Q40 148 60 134 Z" fill="var(--paper-2)" stroke="var(--ink)" stroke-width="1"/>
          <path d="M260 112 L244 134 M260 112 L276 134" class="arrow"/>
          <path d="M240 134 Q260 148 280 134 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/>
        </g>
        <path d="M150 112 L138 140 H162 Z" fill="var(--ink)"/>
        <line x1="120" y1="140" x2="180" y2="140" stroke="var(--ink)" stroke-width="1"/>
        <text class="svg-label b" x="6" y="174">ECM breakdown</text>
        <text class="svg-label" x="6" y="188">MMP-8, MMP-9</text>
        <text class="svg-label" x="6" y="201">neutrophil elastase</text>
        <text class="svg-label b acc" x="294" y="174" text-anchor="end">New ECM synthesis</text>
        <text class="svg-label" x="294" y="188" text-anchor="end">collagen, periostin</text>
        <text class="svg-label" x="294" y="201" text-anchor="end">SPARC, lysyl oxidase</text>
      </svg>`;
    return `
      <figure class="fig mi-fig" id="fig2" aria-labelledby="mi-cap">
        <div class="fig-top"><span class="fig-no">Fig. 2</span></div>
        <div class="mi-grid">
          <div class="mi-plot">
            <p class="sub-label">(a) Cell populations in the first week</p>
            <svg class="plot mi" viewBox="0 0 650 300" role="img" aria-label="Schematic curves over days 0 to 7 after a heart attack: neutrophils peak at day 1; pro-inflammatory macrophages peak around days 1 to 2; reparative macrophages peak around days 3 to 5; fibroblast proliferation peaks around day 3; new collagen rises from day 3 onward.">${s}</svg>
            <div class="mi-scrub">
              <input class="range" type="range" min="0" max="${MI.DMAX}" step="0.05" value="0" aria-label="Day after heart attack">
              <div class="mi-scrub-row"><span class="mi-day" aria-hidden="true">Day 0</span><span class="mi-hint">Drag, or use the arrow keys</span></div>
            </div>
            <div class="mi-keys" role="group" aria-label="Cell types">${legend}</div>
          </div>
          <div class="mi-side">
            <div class="mi-role" aria-live="polite"><h4>${esc(M.pickTitle)}</h4><p>${esc(M.pickText)}</p></div>
            <div class="mi-tx-wrap"><p class="sub-label">Try an intervention</p>
              <div class="mi-tx">${M.tx.map((t) => `<button class="switch" type="button" aria-pressed="false" data-tx="${t.k}"><span class="switch-track" aria-hidden="true"><span class="switch-knob"></span></span><span>${esc(t.t)}<small>${esc(t.d)}</small></span></button>`).join("")}</div>
            </div>
            <div><p class="sub-label">(b) The central balance</p>${balance}</div>
          </div>
        </div>
        <ol class="mi-phases">${M.phases.map((p) => `
          <li data-d="${p.d}"><span class="day">${esc(p.day)}</span><h4>${esc(p.title)}</h4><p>${esc(p.text)}</p></li>`).join("")}
        </ol>
        <figcaption id="mi-cap">
          <span><b>Fig. 2</b> ${esc(M.caption)}</span>
          <span class="cap-note">${esc(M.note)}</span>
          <span class="bridge"><a href="#/research/inflammasome">${esc(M.bridge)}</a></span>
          <span class="cap-src">Source: ${M.source} <a href="${esc(M.doi)}" target="_blank" rel="noopener">${esc(M.doi.replace("https://", ""))}</a></span>
        </figcaption>
      </figure>`;
  }

  function seahorseFig(n) {
    const L = 60, Rr = 500, T = 46, B = 246, TMAX = 84, YMAX = 220;
    const X = (t) => L + (t / TMAX) * (Rr - L), Y = (v) => B - (v / YMAX) * (B - T);
    const times = [4, 10, 16, 24, 30, 36, 44, 50, 56, 64, 70, 76];
    const vals = [96, 100, 98, 37, 34, 35, 178, 186, 171, 22, 19, 21];
    const errs = [6, 5, 6, 3, 3, 4, 10, 12, 9, 2, 3, 2];
    let s = "";
    // grid + axes
    [0, 50, 100, 150, 200].forEach((v) => {
      s += `<line class="grid-l" x1="${L}" y1="${Y(v)}" x2="${Rr}" y2="${Y(v)}"/><line class="tick" x1="${L - 5}" y1="${Y(v)}" x2="${L}" y2="${Y(v)}"/>`;
      s += `<text class="svg-label" x="${L - 9}" y="${Y(v) + 3.5}" text-anchor="end">${v}</text>`;
    });
    [0, 20, 40, 60, 80].forEach((t) => {
      s += `<line class="tick" x1="${X(t)}" y1="${B}" x2="${X(t)}" y2="${B + 5}"/><text class="svg-label" x="${X(t)}" y="${B + 18}" text-anchor="middle">${t}</text>`;
    });
    s += `<path class="ax" d="M${L} ${T - 18} V${B} H${Rr + 6}"/>`;
    s += `<text class="svg-label b" transform="translate(16 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">OCR (pmol/min)</text>`;
    s += `<text class="svg-label b" x="${Rr}" y="${B + 36}" text-anchor="end">Time (min)</text>`;
    // injections
    [[20, "A", "Oligomycin", "Oligo"], [40, "B", "FCCP", "FCCP"], [60, "C", "Rot/AA", "Rot/AA"]].forEach(([t, k, name, short]) => {
      s += `<line class="inj" x1="${X(t)}" y1="${T - 12}" x2="${X(t)}" y2="${B}"/>`;
      s += `<path d="M${X(t) - 4} ${T - 22} L${X(t) + 4} ${T - 22} L${X(t)} ${T - 15} Z" fill="var(--ink)"/>`;
      s += `<text class="svg-label b wide-only" x="${X(t)}" y="${T - 27}" text-anchor="middle">${k} · ${name}</text>`;
      s += `<text class="svg-label b narrow-only" x="${X(t)}" y="${T - 27}" text-anchor="middle">${k} · ${short}</text>`;
    });
    // phase annotations
    s += `<text class="svg-label acc" x="${X(10)}" y="${Y(100) - 20}" text-anchor="middle">basal</text>`;
    s += `<text class="svg-label acc" x="${X(30)}" y="${Y(37) + 26}" text-anchor="middle">ATP-linked drop</text>`;
    s += `<text class="svg-label acc" x="${X(50)}" y="${Y(186) - 22}" text-anchor="middle">maximal</text>`;
    s += `<text class="svg-label acc" x="${Rr + 14}" y="${B - 6}" text-anchor="end">non-mitochondrial</text>`;
    // trace + points
    const pts = times.map((t, i) => [X(t), Y(vals[i])]);
    s += `<path class="acc-l sh-line" d="M${pts.map((p) => p.join(" ")).join(" L")}"/>`;
    let acc = 0; const fr = [0];
    for (let i = 1; i < pts.length; i++) { acc += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); fr.push(acc); }
    pts.forEach((p, i) => {
      const e = (errs[i] / YMAX) * (B - T);
      s += `<g class="pt-g" data-f="${(fr[i] / acc).toFixed(4)}"><line class="err" x1="${p[0]}" y1="${p[1] - e}" x2="${p[0]}" y2="${p[1] + e}"/><line class="err" x1="${p[0] - 3}" y1="${p[1] - e}" x2="${p[0] + 3}" y2="${p[1] - e}"/><line class="err" x1="${p[0] - 3}" y1="${p[1] + e}" x2="${p[0] + 3}" y2="${p[1] + e}"/><circle class="pt" cx="${p[0]}" cy="${p[1]}" r="3.6"/></g>`;
    });
    return `
      <figure class="fig">
        <div class="fig-top"><span class="fig-no">Fig. ${n}</span></div>
        <svg class="plot seahorse" viewBox="0 0 520 296" role="img" aria-label="Illustrative Seahorse Mito Stress Test trace. Oxygen consumption rate is steady at basal level, drops after oligomycin, spikes to maximal respiration after FCCP, and falls to non-mitochondrial respiration after rotenone and antimycin A.">${s}</svg>
        <figcaption><span><b>Fig. ${n}</b> Seahorse XF Cell Mito Stress Test. Oxygen consumption rate (OCR) at baseline, then after sequential injection of oligomycin (A, ATP synthase inhibitor), FCCP (B, uncoupler), and rotenone/antimycin A (C, complex I/III inhibitors).</span><span class="cap-note mono">Illustrative trace of the assay's typical shape; not lab data.</span><span class="cap-src mono">Source: standard Agilent Seahorse XF Cell Mito Stress Test design (oligomycin → FCCP → rotenone/antimycin A).</span></figcaption>
      </figure>`;
  }

  /* ---------- Fig. 4: muscle damage, DMD and satellite cells ---------- */
  let f4B = null; // cross-section geometry for panel B, filled by fig4HTML()
  const F4A = { AX: [200, 460], TX: 330 };
  function fig4PanelA() {
    const { AX, TX } = F4A, r = rng(31);
    let s = "";
    s += `<text class="svg-label b" x="12" y="20">outside the fiber</text>`;
    s += `<text class="svg-label acc wide-only" x="628" y="20" text-anchor="end">albumin (from the blood)</text><text class="svg-label acc narrow-only" x="628" y="20" text-anchor="end">albumin</text>`;
    // albumin: 12 dots outside; the 6 nearest the tear can leak in
    const inside = [[292, 150], [352, 166], [314, 232], [376, 250], [270, 272], [338, 292]];
    const xs = [TX - 52, TX - 30, TX - 10, TX + 12, TX + 34, TX + 56, 196, 236, 470, 520, 566, 606];
    xs.forEach((x, i) => {
      const y = 34 + r() * 8;
      const tgt = inside[i];
      s += `<circle class="alb-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.6"${tgt ? ` data-dx="${(tgt[0] - x).toFixed(1)}" data-dy="${(tgt[1] - y).toFixed(1)}"` : ""}/>`;
    });
    const caFrom = [[262, 58], [300, 58], [340, 58], [380, 58], [420, 58]], caTo = [[262, 186], [410, 176], [300, 258], [392, 228], [244, 300]];
    caFrom.forEach(([x, y], i) => (s += `<text class="ca" x="${x}" y="${y}" data-dx="${caTo[i][0] - x}" data-dy="${caTo[i][1] - y}">Ca²⁺</text>`));
    // basal lamina with laminin-211
    s += `<text class="svg-label wide-only" x="12" y="60">basal lamina · laminin-211</text><text class="svg-label narrow-only" x="12" y="60">laminin-211</text>`;
    s += `<rect class="lam-band" x="0" y="66" width="640" height="14"/>`;
    [AX[0], TX, AX[1], 580].forEach((x) => (s += `<path class="lam" d="M${x} 60 V88 M${x - 9} 69 H${x + 9}"/>`));
    // membrane in two halves (it tears at TX), each carrying one dystrophin anchor
    const anchor = (x) => `
      <g class="dgc"><ellipse class="dg-a" cx="${x}" cy="93" rx="5" ry="8"/><rect class="dg-b" x="${x - 3}" y="98" width="6" height="22" rx="2"/>
      <rect class="sg" x="${x + 6}" y="100" width="5" height="18" rx="2"/><rect class="sg" x="${x + 13}" y="101" width="5" height="16" rx="2"/></g>
      <path class="dys" d="M${x} 124 C${x + 16} 146, ${x - 16} 172, ${x} 194"/>`;
    s += `<g class="a-body">`;
    s += `<g class="seg-l"><rect class="mem" x="-20" y="104" width="${TX + 20}" height="10"/>${anchor(AX[0])}</g>`;
    s += `<g class="seg-r"><rect class="mem" x="${TX}" y="104" width="${660 - TX}" height="10"/>${anchor(AX[1])}</g>`;
    s += `<path class="tearmark" d="M${TX - 12} 101 l4 4 -4 4 4 4 M${TX + 12} 101 l-4 4 4 4 -4 4"/>`;
    s += `</g>`;
    // actin cytoskeleton
    s += `<g class="actin">`;
    for (let x = 14, i = 0; x <= 626; x += 9, i++) s += `<circle class="act" cx="${x}" cy="${i % 2 ? 199 : 207}" r="4.4"/>`;
    s += `</g>`;
    // labels
    s += `<text class="svg-label wide-only" x="12" y="134">membrane (sarcolemma)</text><text class="svg-label narrow-only" x="12" y="134">membrane</text>`;
    s += `<text class="svg-label b healthy-only" x="${AX[0] + 18}" y="164">dystrophin</text><text class="svg-label b dmd-only" x="${AX[0] + 18}" y="164">no dystrophin</text>`;
    s += `<text class="svg-label" x="${AX[1] + 26}" y="134">dystroglycan +</text><text class="svg-label" x="${AX[1] + 26}" y="154">sarcoglycans</text>`;
    s += `<text class="svg-label" x="12" y="232">actin cytoskeleton</text>`;
    s += `<text class="svg-label b" x="12" y="308">inside the fiber</text>`;
    return `<svg class="plot dmd-a" viewBox="0 0 640 320" role="img" aria-label="Membrane-level diagram. Inside the fiber, actin connects to dystrophin, which links through dystroglycan and sarcoglycans in the membrane to laminin-211 in the basal lamina. Without dystrophin, contraction tears the membrane and calcium and albumin enter the fiber.">${s}</svg>`;
  }
  function fig4PanelB() {
    const W = 340, H = 210, r = rng(4242), seeds = [];
    for (let j = 0; j < 5; j++) for (let i = 0; i < 8; i++) {
      seeds.push([(i + 0.5 + (r() - 0.5) * 0.75) * (W / 8) + (j % 2 ? 10 : -10), (j + 0.5 + (r() - 0.5) * 0.7) * (H / 5)]);
    }
    const clip = (poly, a, b, c) => {
      const out = [];
      for (let k = 0; k < poly.length; k++) {
        const P = poly[k], Q = poly[(k + 1) % poly.length];
        const pin = a * P[0] + b * P[1] <= c, qin = a * Q[0] + b * Q[1] <= c;
        if (pin) out.push(P);
        if (pin !== qin) {
          const t = (c - a * P[0] - b * P[1]) / (a * (Q[0] - P[0]) + b * (Q[1] - P[1]));
          out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]);
        }
      }
      return out;
    };
    const fibers = [], nucs = [], macs = [], verts = [];
    let fb = "", fat = "", nu = "", inMacs = "";
    seeds.forEach((si, i) => {
      let poly = [[-20, -20], [W + 20, -20], [W + 20, H + 20], [-20, H + 20]];
      seeds.forEach((sj, j) => {
        if (i === j) return;
        const a = sj[0] - si[0], b = sj[1] - si[1];
        poly = clip(poly, a, b, a * (si[0] + sj[0]) / 2 + b * (si[1] + sj[1]) / 2);
      });
      if (poly.length < 3) return;
      const cx = poly.reduce((s, p) => s + p[0], 0) / poly.length, cy = poly.reduce((s, p) => s + p[1], 0) / poly.length;
      let rin = 99;
      poly.forEach((p, k) => {
        const q = poly[(k + 1) % poly.length], L = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
        rin = Math.min(rin, Math.abs((q[0] - p[0]) * (p[1] - cy) - (p[0] - cx) * (q[1] - p[1])) / L);
        if (p[0] > 4 && p[0] < W - 4 && p[1] > 4 && p[1] < H - 4) verts.push(p);
      });
      const fi = fibers.length, v = r(), v2 = r();
      fibers.push({ cx, cy, v, v2, fat: false });
      const pts = poly.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
      const o = `transform-origin:${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
      fb += `<g class="fb"><polygon class="fiber" points="${pts}" style="${o}"/><polygon class="alb" points="${pts}" style="${o}"/></g>`;
      fat += `<circle class="fat" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${Math.max(6, rin * 0.92).toFixed(1)}"/>`;
      inMacs += `<circle class="mac" cx="${(cx + 3).toFixed(1)}" cy="${(cy - 2).toFixed(1)}" r="2.3"/>`;
      macs.push({ fi });
      const edges = poly.map((p, k) => { const q = poly[(k + 1) % poly.length]; return { m: [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], len: Math.hypot(q[0] - p[0], q[1] - p[1]), ang: Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI }; })
        .sort((a, b) => b.len - a.len);
      const n = i % 3 === 0 ? 2 : 1;
      for (let k = 0; k < n; k++) {
        const e = edges[k * 2] || edges[0];
        nucs.push({ fi, em: e.m, ang: e.ang, k });
        nu += `<ellipse class="nuc" cx="0" cy="0" rx="3.4" ry="1.6"/>`;
      }
    });
    // fat replaces a few healthy interior fibers in late DMD
    fibers.filter((f) => f.v >= 0.45 && f.cx > 30 && f.cx < W - 30 && f.cy > 30 && f.cy < H - 30).slice(0, 4).forEach((f) => (f.fat = true));
    let edgeMacs = "";
    verts.filter((_, k) => k % 3 === 0).slice(0, 30).forEach((p) => {
      edgeMacs += `<circle class="mac" cx="${(p[0] + (r() - 0.5) * 3).toFixed(1)}" cy="${(p[1] + (r() - 0.5) * 3).toFixed(1)}" r="${(1.6 + r()).toFixed(1)}"/>`;
      macs.push({ fi: null });
    });
    f4B = { fibers, nucs, macs };
    return `
      <svg class="plot dmd-b" viewBox="0 0 ${W} ${H}" role="img" aria-label="Schematic muscle cross-section that changes with the selected stage.">
        <defs><pattern id="f4-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" style="stroke:var(--ink-3);stroke-width:1.6"/></pattern></defs>
        <rect class="bg" x="0" y="0" width="${W}" height="${H}"/>
        <rect class="fibro" x="0" y="0" width="${W}" height="${H}" fill="url(#f4-hatch)"/>
        ${fb}${fat}${inMacs}${edgeMacs}${nu}
      </svg>`;
  }
  const scIcons = [
    `<path d="M2 5H32M2 17H32"/><ellipse cx="17" cy="11" rx="9" ry="3.4"/>`,
    `<circle cx="17" cy="11" r="7"/><circle class="f" cx="17" cy="11" r="2.6"/>`,
    `<circle cx="11" cy="11" r="5.5"/><circle cx="23" cy="11" r="5.5"/>`,
    `<rect x="5" y="7" width="24" height="8" rx="4"/><circle class="f" cx="17" cy="11" r="2"/>`,
    `<rect x="2" y="4" width="30" height="14" rx="7"/><ellipse class="f" cx="17" cy="11" rx="2" ry="3"/>`,
    `<path d="M8 15a8 8 0 1 1 6 3"/><path d="M13 21l2-3-3-2"/><ellipse cx="25" cy="17" rx="5" ry="2"/>`,
  ];
  function fig4HTML() {
    const T = C.fig4, B = T.b;
    const stageLabels = [...B.stages.map((s) => s.t), B.last.acute.t];
    const legend = `<ul class="legend-row">
      <li><i class="lg-nuc"></i>${esc(B.legend[0])}</li><li><i class="lg-alb"></i>${esc(B.legend[1])}</li><li><i class="lg-mac"></i>${esc(B.legend[2])}</li><li><i class="lg-fib"></i>${esc(B.legend[3])}</li><li><i class="lg-fat"></i>${esc(B.legend[4])}</li></ul>`;
    return `
      <figure class="fig dmd-fig" id="fig4" aria-labelledby="f4-cap">
        <div class="fig-top"><span class="fig-no">Fig. 4</span></div>
        <section class="panel panel-a" aria-labelledby="f4a-h">
          <div class="panel-head"><h4 id="f4a-h">${esc(T.a.title)}</h4>
            <div class="choice" role="group" aria-label="Muscle type"><button type="button" data-a-mode="0" aria-pressed="true">${esc(T.a.healthy)}</button><button type="button" data-a-mode="1" aria-pressed="false">${esc(T.a.dmd)}</button></div></div>
          ${fig4PanelA()}
          <div class="panel-ctrl">
            <button class="btn btn-solid" type="button" data-contract>${esc(T.a.contract)}</button>
            <p class="panel-status" data-a-status aria-live="polite">${esc(T.a.healthyIdle)}</p>
            <p class="a-count"><b data-a-count>0</b> ${esc(T.a.count)}</p>
          </div>
        </section>
        <section class="panel panel-b" aria-labelledby="f4b-h">
          <div class="panel-head"><h4 id="f4b-h">${esc(B.title)}</h4>
            <div class="choice" role="group" aria-label="Injury type"><button type="button" data-b-mode="acute" aria-pressed="true">${esc(B.acute)}</button><button type="button" data-b-mode="chronic" aria-pressed="false">${esc(B.chronic)}</button></div></div>
          ${fig4PanelB()}
          <div class="b-scrub">
            <input class="range" type="range" min="0" max="3" step="1" value="0" aria-label="${esc(B.rangeLabel)}" data-b-range>
            <div class="b-stages" aria-hidden="true">${stageLabels.map((t, i) => `<span data-b-lab="${i}">${esc(t)}</span>`).join("")}</div>
          </div>
          <p class="b-text" data-b-text aria-live="polite"></p>
          ${legend}
        </section>
        <section class="panel panel-c" aria-labelledby="f4c-h">
          <div class="panel-head"><h4 id="f4c-h">${esc(T.c.title)}</h4></div>
          <ol class="sc-path">${T.c.stages.map((s, i) => `
            <li${i === 5 ? ' class="renew"' : ""}><button class="sc-btn" type="button" data-sc="${i}" aria-pressed="false"><svg viewBox="0 0 34 22" aria-hidden="true">${scIcons[i]}</svg>${esc(s.t)}<small>${esc(s.m)}</small></button></li>`).join("")}
          </ol>
          <p class="sc-info" data-sc-info aria-live="polite">${esc(T.c.hint)}</p>
        </section>
        <figcaption id="f4-cap">
          <span><b>Fig. 4</b> ${esc(T.caption)}</span>
          <span class="cap-note">${esc(T.note)}</span>
          <span class="cap-src">Source: ${esc(T.source)} <a href="${esc(C.research.muscle.labSrc.url)}" target="_blank" rel="noopener">${esc(C.research.muscle.labSrc.text)}</a></span>
        </figcaption>
      </figure>`;
  }

  /* ======================================================================
     BUILD
     ====================================================================== */
  const tabsEl = $("[data-tabs]"), pagesEl = $("[data-pages]");
  tabsEl.innerHTML = PAGES.map((p) => `<a class="tab" role="tab" id="tab-${p.id}" data-id="${p.id}" href="${routeHref(p, p.subs && p.subs[0])}" aria-controls="page-${p.id}" aria-selected="false" tabindex="-1">${esc(p.tab)}</a>`).join("");
  const builders = { about: aboutHTML, research: researchHTML, ventures: venturesHTML, experience: experienceHTML };
  pagesEl.innerHTML = PAGES.map((p) => `<section class="page wrap" id="page-${p.id}" role="tabpanel" aria-labelledby="tab-${p.id}" hidden>${builders[p.id](p)}</section>`).join("");
  $("[data-footer]").textContent = `© ${new Date().getFullYear()} ${C.footer}`;
  $("[data-skip]").addEventListener("click", (e) => { e.preventDefault(); pagesEl.focus(); });

  /* ======================================================================
     NAME — single-stroke outline that draws, then fills; letters lean away from the cursor
     ====================================================================== */
  const NameSig = (() => {
    const h1 = $(".name"), svgEl = $(".name-svg", h1), fallback = $(".name-fallback", h1);
    let built = false, letters = [], vb = null, drawn = false, raf = 0;
    const m = { x: -9999, y: -9999 };
    function build() {
      if (built || !h1.offsetParent) return;
      svgEl.innerHTML = `<text x="0" y="0">${esc(C.name)}</text>`;
      const tx = svgEl.firstChild;
      let bb;
      try { bb = tx.getBBox(); } catch (e) { return; }
      if (!bb || !bb.width) { svgEl.innerHTML = ""; fallback.style.opacity = "1"; return; }
      const chars = [...C.name];
      const pos = chars.map((_, i) => { try { return tx.getStartPositionOfChar(i).x; } catch (e) { return 0; } });
      vb = { x: bb.x - 3, y: bb.y, w: bb.width + 6, h: bb.height };
      svgEl.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
      let k = 0, html = "";
      chars.forEach((ch, i) => {
        if (ch === " ") return;
        html += `<g><text x="${pos[i].toFixed(2)}" y="0" style="--d:${k * 85}ms">${esc(ch)}</text></g>`; k++;
      });
      svgEl.innerHTML = html;
      letters = $$("g", svgEl).map((g) => {
        const t = g.firstChild, b = t.getBBox();
        return { g, cx: b.x + b.width / 2, cy: b.y + b.height / 2, x: 0, y: 0, vx: 0, vy: 0 };
      });
      fallback.remove();
      svgEl.classList.add("ready");
      built = true;
      if (MOTION && !drawn) { svgEl.classList.add("draw"); drawn = true; }
    }
    function step() {
      const r = svgEl.getBoundingClientRect();
      const s = r.width / vb.w;
      let energy = 0;
      letters.forEach((L) => {
        const sx = r.left + (L.cx - vb.x) * s, sy = r.top + (L.cy - vb.y) * s;
        const dx = sx - m.x, dy = sy - m.y, d = Math.hypot(dx, dy);
        let tx = 0, ty = 0;
        if (d < 170 && d > 0.01) { const f = (1 - d / 170) ** 2 * 7 / s; tx = (dx / d) * f; ty = (dy / d) * f; }
        L.vx += ((tx - L.x) * 120 - L.vx * 14) / 60; L.vy += ((ty - L.y) * 120 - L.vy * 14) / 60;
        L.x += L.vx / 60; L.y += L.vy / 60;
        energy += Math.abs(L.vx) + Math.abs(L.vy) + Math.abs(tx - L.x) + Math.abs(ty - L.y);
        L.g.setAttribute("transform", `translate(${L.x.toFixed(2)} ${L.y.toFixed(2)})`);
      });
      raf = energy > 0.02 ? requestAnimationFrame(step) : 0;
    }
    if (FINE && !REDUCE) {
      addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse" || !built || !h1.offsetParent) return;
        m.x = e.clientX; m.y = e.clientY;
        if (!raf) raf = requestAnimationFrame(step);
      }, { passive: true });
      document.documentElement.addEventListener("pointerleave", () => { m.x = m.y = -9999; if (built && !raf) raf = requestAnimationFrame(step); });
    }
    function ensure() {
      if (built) return;
      const go = () => build();
      if (document.fonts && document.fonts.status !== "loaded") {
        Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(go);
      } else go();
    }
    return { ensure };
  })();

  /* ======================================================================
     FIG. 1 — NLRP3 INFLAMMASOME (canvas)
     Simplified after Zhong et al., Nature 2018. The cell is assumed primed.
     Stimulus → mitochondria release oxidized mtDNA (needs CMPK2) →
     NLRP3 + ASC assemble → caspase-1 cleaves pro-IL-1β → IL-1β leaves.
     ====================================================================== */
  const Fig1 = (() => {
    const F = C.fig1;
    const fig = $("#fig1"), stage = $(".sim-stage", fig), cv = $("canvas", fig), ctx = cv.getContext("2d");
    const ilOut = $("#f1-il"), stepEls = $$(".f1-steps li", fig), sw = $("#ko-switch", fig);
    const COL = { ink: css("--ink"), ink2: css("--ink-2"), ink3: css("--ink-3"), acc: css("--accent"), paper: css("--paper-3") };
    const SLOTS = 8, PRO_N = 12, RING_R = 0.16;
    const RING = { u: 0.2, v: -0.06 };
    const NUC = { u: -0.3, v: 0.22, rx: 0.27, ry: 0.2, a: -0.35 };
    let W = 0, H = 0, R = 1, CX = 0, CY = 0, t = 0, last = 0, raf = 0, running = false, visible = false;
    let ko = false, filled = 0, speck = 0, complete = false, released = 0, resetAt = 0, uiKey = "", kbIdx = 0;
    const ptr = { u: 9, v: 9, on: false, until: 0 };
    const mitos = [[0.48, -0.44, 0.6], [0.6, 0.26, 0.35], [-0.14, -0.62, 0.1], [-0.64, -0.24, -0.7], [0.16, 0.6, -0.3]]
      .map(([u, v, a]) => ({ u, v, a, glow: 0, ou: 0, ov: 0, vu: 0, vv: 0, cd: 0 }));
    let dna = [], monos = [], pros = [], il = [], pulses = [];
    const r0 = rng(11);

    const inNucleus = (u, v, pad = 0) => {
      const c = Math.cos(-NUC.a), s = Math.sin(-NUC.a), du = u - NUC.u, dv = v - NUC.v;
      const x = du * c - dv * s, y = du * s + dv * c;
      return (x * x) / ((NUC.rx + pad) ** 2) + (y * y) / ((NUC.ry + pad) ** 2) < 1;
    };
    const mem = (th) => 1 + (REDUCE ? 0 : 0.045 * Math.sin(3 * th + t * 0.35) + 0.03 * Math.sin(5 * th - t * 0.25));
    function freeSpot() {
      for (let k = 0; k < 40; k++) {
        const a = r0() * Math.PI * 2, d = 0.22 + r0() * 0.6, u = Math.cos(a) * d, v = Math.sin(a) * d;
        if (!inNucleus(u, v, 0.06) && Math.hypot(u - RING.u, v - RING.v) > RING_R + 0.08) return [u, v];
      }
      return [0.4, 0.4];
    }
    function seed() {
      monos = Array.from({ length: SLOTS }, () => { const [u, v] = freeSpot(); return { u, v, vu: 0, vv: 0, slot: -1, rot: r0() * 6 }; });
      pros = Array.from({ length: PRO_N }, () => { const [u, v] = freeSpot(); return { u, v, vu: 0, vv: 0, a: 1 }; });
      dna = []; il = []; filled = 0; speck = 0; complete = false;
      pickLabels();
    }
    // label the particle with the most free space around it, so labels don't collide
    let proLbl = 0, monoLbl = 0;
    function clearance(p) {
      let d = Math.hypot(p.u - NUC.u, p.v - NUC.v) - 0.3;
      mitos.forEach((m) => (d = Math.min(d, Math.hypot(p.u - m.u, p.v - m.v) - 0.24)));
      d = Math.min(d, Math.hypot(p.u - RING.u, p.v - RING.v) - RING_R - 0.1, 0.8 - Math.hypot(p.u, p.v));
      return d;
    }
    function pickLabels() {
      const best = (arr, skip) => arr.reduce((b, p, i) => (i !== skip && clearance(p) > clearance(arr[b]) ? i : b), skip === 0 ? 1 : 0);
      monoLbl = best(monos, -1); proLbl = best(pros, -1);
    }
    seed();

    function resize() {
      const r = stage.getBoundingClientRect();
      if (!r.width) return;
      W = r.width; H = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.42; CX = W * 0.5; CY = H * 0.5;
      draw(); ui();
    }

    function activate() {
      if (!complete) {
        pulses.push({ age: 0, weak: true }); Sound.play("bump");
        announce(ko ? F.msg.ko : F.msg.notYet); return;
      }
      if (!pros.length) return;
      pulses.push({ age: 0, weak: false });
      pros.forEach((p, i) => {
        const a = Math.atan2(p.v - RING.v, p.u - RING.u) + (Math.random() - 0.5) * 0.6, sp = 0.45 + Math.random() * 0.3;
        il.push({ u: p.u, v: p.v, vu: Math.cos(a) * sp, vv: Math.sin(a) * sp, age: -0.15 - i * 0.04, out: false });
      });
      pros = [];
      Sound.play("release"); announce(F.msg.released);
      resetAt = performance.now() + 3800;
    }
    function disassemble() {
      monos.forEach((m) => { if (m.slot >= 0) { m.slot = -1; const a = Math.random() * Math.PI * 2; m.vu = Math.cos(a) * 0.3; m.vv = Math.sin(a) * 0.3; } });
      dna = []; filled = 0; speck = 0; complete = false; resetAt = 0;
      pros = Array.from({ length: PRO_N }, () => { const [u, v] = freeSpot(); return { u, v, vu: 0, vv: 0, a: 0 }; });
      pickLabels();
    }

    function drift(p, k = 0.05) {
      p.vu += (Math.random() - 0.5) * k; p.vv += (Math.random() - 0.5) * k;
      p.vu *= 0.94; p.vv *= 0.94;
      p.u += p.vu * 0.016; p.v += p.vv * 0.016;
      const d = Math.hypot(p.u, p.v);
      if (d > 0.84) { p.u *= 0.84 / d; p.v *= 0.84 / d; p.vu *= -0.5; p.vv *= -0.5; }
      if (inNucleus(p.u, p.v, 0.05)) { const du = p.u - NUC.u, dv = p.v - NUC.v, n = Math.hypot(du, dv) || 1; p.u += (du / n) * 0.01; p.v += (dv / n) * 0.01; }
    }

    function update(dt, now) {
      t += dt;
      if (ptr.until && now >= ptr.until) { ptr.on = false; ptr.until = 0; }
      // mitochondria: glow + nudge away from the cursor; release mtDNA when stimulated
      mitos.forEach((m) => {
        const pu = m.u + m.ou, pv = m.v + m.ov;
        const d = ptr.on ? Math.hypot(ptr.u - pu, ptr.v - pv) : 9;
        const near = d < 0.26;
        m.glow += ((near ? 1 : 0) - m.glow) * Math.min(1, dt * 6);
        if (!REDUCE && ptr.on && d < 0.3 && d > 0.001) { const f = (1 - d / 0.3) * 2.4; m.vu += ((pu - ptr.u) / d) * f * dt; m.vv += ((pv - ptr.v) / d) * f * dt; }
        m.vu += (-38 * m.ou - 7 * m.vu) * dt; m.vv += (-38 * m.ov - 7 * m.vv) * dt;
        m.ou += m.vu * dt; m.ov += m.vv * dt;
        m.cd -= dt;
        if (near && m.cd <= 0) {
          m.cd = 0.38;
          if (ko) { Sound.play("fizzle"); }
          else if (!complete && filled + dna.length < SLOTS) {
            const a = Math.random() * Math.PI * 2;
            dna.push({ u: pu, v: pv, vu: Math.cos(a) * 0.12, vv: Math.sin(a) * 0.12, ph: Math.random() * 6 });
            Sound.play("blip");
          }
        }
      });
      // ox-mtDNA drifts to the NLRP3 site; each fragment recruits one NLRP3
      dna = dna.filter((p) => {
        const du = RING.u - p.u, dv = RING.v - p.v, d = Math.hypot(du, dv) || 1;
        p.vu += ((du / d) * 0.42 - p.vu) * Math.min(1, dt * 2.5); p.vv += ((dv / d) * 0.42 - p.vv) * Math.min(1, dt * 2.5);
        p.u += (p.vu + (-dv / d) * Math.sin(t * 4 + p.ph) * 0.06) * dt; p.v += (p.vv + (du / d) * Math.sin(t * 4 + p.ph) * 0.06) * dt;
        if (d < RING_R * 0.7) {
          if (filled < SLOTS) {
            let best = null, bd = 9;
            monos.forEach((m) => { if (m.slot < 0) { const q = Math.hypot(m.u - RING.u, m.v - RING.v); if (q < bd) { bd = q; best = m; } } });
            if (best) { best.slot = filled++; Sound.play("slot", filled); }
          }
          return false;
        }
        return true;
      });
      // NLRP3: free monomers drift; bound ones join the ring
      monos.forEach((m) => {
        if (m.slot < 0) { drift(m, 0.04); m.rot += dt * 0.4; return; }
        const th = (m.slot / SLOTS) * Math.PI * 2 + (REDUCE ? 0 : t * 0.25);
        const tu = RING.u + Math.cos(th) * RING_R, tv = RING.v + Math.sin(th) * RING_R;
        const k = Math.min(1, dt * 4);
        m.u += (tu - m.u) * k; m.v += (tv - m.v) * k; m.rot = th + Math.PI;
      });
      if (filled >= SLOTS && !complete) {
        speck = Math.min(1, speck + dt * 1.6);
        if (speck >= 1) { complete = true; Sound.play("success"); glow(fig); announce(F.msg.ready); }
      }
      pros.forEach((p) => { drift(p, 0.03); p.a = Math.min(1, p.a + dt * 1.2); });
      // IL-1β leaves through the membrane
      il = il.filter((p) => {
        p.age += dt;
        if (p.age < 0) return true;
        p.u += p.vu * dt; p.v += p.vv * dt;
        const d = Math.hypot(p.u, p.v), th = Math.atan2(p.v, p.u);
        if (!p.out && d > mem(th)) { p.out = true; released++; }
        return d < 1.9;
      });
      pulses.forEach((p) => (p.age += dt * 1.4));
      pulses = pulses.filter((p) => p.age < 1);
      if (resetAt && now > resetAt && !il.some((p) => !p.out)) disassemble();
    }

    function ui() {
      const cur = complete ? 4 : filled > 0 ? 3 : dna.length ? 2 : 1;
      const key = `${cur}|${ko}|${released}`;
      if (key === uiKey) return;
      uiKey = key;
      stepEls.forEach((li, i) => {
        const n = i + 1;
        li.classList.toggle("done", n < cur);
        li.classList.toggle("on", n === cur);
        li.classList.toggle("blocked", ko && n === 2);
      });
      ilOut.textContent = released;
    }

    /* drawing */
    const X = (u) => CX + u * R, Y = (v) => CY + v * R;
    function label(txt, x, y, color = COL.ink2, align = "left") {
      ctx.font = `500 ${W < 420 ? 10 : 11}px 'IBM Plex Mono', ui-monospace, monospace`;
      ctx.textAlign = align; ctx.textBaseline = "middle";
      ctx.lineWidth = 3.5; ctx.strokeStyle = COL.paper; ctx.lineJoin = "round"; ctx.strokeText(txt, x, y);
      ctx.fillStyle = color; ctx.fillText(txt, x, y);
    }
    function draw() {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      // membrane
      ctx.beginPath();
      for (let i = 0; i <= 96; i++) { const th = (i / 96) * Math.PI * 2, r = mem(th) * R; i ? ctx.lineTo(CX + Math.cos(th) * r, CY + Math.sin(th) * r) : ctx.moveTo(CX + Math.cos(th) * r, CY + Math.sin(th) * r); }
      ctx.closePath(); ctx.fillStyle = "rgba(20,21,25,0.025)"; ctx.fill();
      ctx.lineWidth = 1.5; ctx.strokeStyle = COL.ink; ctx.stroke();
      // nucleus
      ctx.save(); ctx.translate(X(NUC.u), Y(NUC.v)); ctx.rotate(NUC.a);
      ctx.beginPath(); ctx.ellipse(0, 0, NUC.rx * R, NUC.ry * R, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(20,21,25,0.05)"; ctx.fill(); ctx.lineWidth = 1.1; ctx.strokeStyle = COL.ink2; ctx.stroke();
      ctx.restore();
      label("nucleus", X(NUC.u), Y(NUC.v), COL.ink2, "center");
      // mitochondria
      const idle = !ptr.on && !dna.length && filled === 0 && !ko;
      mitos.forEach((m, i) => {
        const x = X(m.u + m.ou), y = Y(m.v + m.ov), L = R * 0.23, Wd = R * 0.1;
        ctx.save(); ctx.translate(x, y); ctx.rotate(m.a);
        if (m.glow > 0.02) { ctx.beginPath(); ctx.ellipse(0, 0, L * 0.5 + 8, Wd * 0.5 + 8, 0, 0, Math.PI * 2); ctx.fillStyle = ko ? `rgba(139,140,146,${0.18 * m.glow})` : `rgba(31,58,158,${0.12 * m.glow})`; ctx.fill(); }
        ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(-L / 2, -Wd / 2, L, Wd, Wd / 2); else ctx.rect(-L / 2, -Wd / 2, L, Wd);
        ctx.fillStyle = COL.paper; ctx.fill();
        ctx.lineWidth = 1.3; ctx.strokeStyle = m.glow > 0.3 && !ko ? COL.acc : COL.ink; ctx.stroke();
        ctx.beginPath(); // cristae
        for (let k = 0; k <= 6; k++) { const xx = -L / 2 + Wd * 0.5 + (k / 6) * (L - Wd); ctx.lineTo(xx, (k % 2 ? 1 : -1) * Wd * 0.22); }
        ctx.lineWidth = 0.9; ctx.strokeStyle = COL.ink3; ctx.stroke();
        if (ko && m.glow > 0.3) { ctx.beginPath(); ctx.moveTo(-5, -5); ctx.lineTo(5, 5); ctx.moveTo(5, -5); ctx.lineTo(-5, 5); ctx.lineWidth = 1.6; ctx.strokeStyle = COL.ink; ctx.stroke(); }
        ctx.restore();
        if (i === 0 && idle && !REDUCE) { // gentle hint pulse on one mitochondrion
          const k = (t * 0.7) % 1;
          ctx.beginPath(); ctx.arc(x, y, R * 0.13 + k * R * 0.12, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(31,58,158,${0.45 * (1 - k)})`; ctx.lineWidth = 1; ctx.stroke();
        }
      });
      label("mitochondrion", X(mitos[1].u + mitos[1].ou), Y(mitos[1].v + mitos[1].ov) + R * 0.13, COL.ink2, "center");
      // inflammasome site
      const rx = X(RING.u), ry = Y(RING.v);
      if (filled > 0 && !complete) { ctx.beginPath(); ctx.arc(rx, ry, RING_R * R, 0, Math.PI * 2); ctx.setLineDash([2, 4]); ctx.strokeStyle = COL.ink3; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]); }
      if (speck > 0) {
        ctx.beginPath(); ctx.arc(rx, ry, RING_R * R * 0.5 * speck, 0, Math.PI * 2); ctx.fillStyle = COL.acc; ctx.globalAlpha = 0.85; ctx.fill(); ctx.globalAlpha = 1;
      }
      // NLRP3 (triangles)
      monos.forEach((m) => {
        const s = R * 0.042;
        ctx.save(); ctx.translate(X(m.u), Y(m.v)); ctx.rotate(m.rot);
        ctx.beginPath(); ctx.moveTo(s, 0); ctx.lineTo(-s * 0.7, s * 0.8); ctx.lineTo(-s * 0.7, -s * 0.8); ctx.closePath();
        ctx.fillStyle = m.slot >= 0 ? COL.ink : COL.ink2; ctx.fill();
        ctx.restore();
      });
      // pro-IL-1β
      pros.forEach((p) => { ctx.globalAlpha = p.a; ctx.beginPath(); ctx.arc(X(p.u), Y(p.v), R * 0.022, 0, Math.PI * 2); ctx.lineWidth = 1.2; ctx.strokeStyle = COL.ink3; ctx.stroke(); });
      ctx.globalAlpha = 1;
      // ox-mtDNA
      dna.forEach((p) => {
        const x = X(p.u), y = Y(p.v);
        ctx.beginPath();
        for (let k = 0; k <= 8; k++) { const xx = x - 7 + k * 1.75, yy = y + Math.sin(k * 1.4 + t * 6 + p.ph) * 2.2; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); }
        ctx.strokeStyle = COL.acc; ctx.lineWidth = 1.4; ctx.stroke();
      });
      // IL-1β (pro form until the cleavage pulse reaches it)
      il.forEach((p) => {
        const x = X(p.u), y = Y(p.v), d = Math.hypot(p.u, p.v);
        ctx.globalAlpha = clamp(1 - (d - 1.1) / 0.8, 0, 1);
        ctx.beginPath(); ctx.arc(x, y, R * 0.024, 0, Math.PI * 2);
        if (p.age < 0) { ctx.lineWidth = 1.2; ctx.strokeStyle = COL.ink3; ctx.stroke(); } else { ctx.fillStyle = COL.acc; ctx.fill(); }
      });
      ctx.globalAlpha = 1;
      // caspase-1 pulse
      pulses.forEach((p) => {
        ctx.beginPath(); ctx.arc(rx, ry, RING_R * R * (0.6 + p.age * (p.weak ? 1.2 : 5)), 0, Math.PI * 2);
        ctx.strokeStyle = p.weak ? `rgba(139,140,146,${1 - p.age})` : `rgba(31,58,158,${1 - p.age})`; ctx.lineWidth = p.weak ? 1 : 1.6; ctx.stroke();
      });
      // labels
      label("macrophage", 12, H - 16, COL.ink2);
      if (filled > 0) label(complete ? "NLRP3 + ASC speck" : "NLRP3 assembling", rx, ry + RING_R * R + 16, COL.acc, "center");
      else if (monos[monoLbl]) label("NLRP3", X(monos[monoLbl].u), Y(monos[monoLbl].v) - 14, COL.ink2, "center");
      const pl = pros[proLbl];
      if (pl && pl.a > 0.5) label("pro-IL-1β", X(pl.u), Y(pl.v) + 14, COL.ink2, "center");
      if (dna[0]) label("ox-mtDNA", X(dna[0].u) + 10, Y(dna[0].v) - 10, COL.acc);
      const out = il.find((p) => p.out && Math.hypot(p.u, p.v) < 1.35);
      if (out) label("IL-1β", X(out.u) + 9, Y(out.v) - 9, COL.acc);
      if (ko) label("Cmpk2 deleted: no new mtDNA", W - 12, 18, COL.ink, "right");
    }

    function frame(now) {
      if (!running) return;
      const dt = Math.min(0.033, (now - (last || now)) / 1000); last = now;
      update(dt, now); draw(); ui();
      raf = requestAnimationFrame(frame);
    }
    function start() { if (running || !visible || document.hidden) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    function setPtr(e) {
      const r = cv.getBoundingClientRect();
      ptr.u = (e.clientX - r.left - CX) / R; ptr.v = (e.clientY - r.top - CY) / R;
    }
    function nearestMito(u, v) {
      let best = mitos[0], bd = 9;
      mitos.forEach((m) => { const d = Math.hypot(m.u - u, m.v - v); if (d < bd) { bd = d; best = m; } });
      return best;
    }
    stage.addEventListener("pointermove", (e) => { if (e.pointerType !== "mouse") return; setPtr(e); ptr.on = true; ptr.until = 0; });
    stage.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") ptr.on = false; });
    stage.addEventListener("pointerdown", (e) => {
      setPtr(e);
      if (e.pointerType === "mouse" || complete) { activate(); return; }
      const m = nearestMito(ptr.u, ptr.v); ptr.u = m.u; ptr.v = m.v;
      ptr.on = true; ptr.until = performance.now() + 1800;
    });
    stage.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      if (complete) { activate(); return; }
      if (ko) { activate(); return; }
      const m = mitos[kbIdx++ % mitos.length]; ptr.u = m.u; ptr.v = m.v; ptr.on = true; ptr.until = performance.now() + 1600;
    });
    sw.addEventListener("click", () => {
      ko = !ko;
      sw.setAttribute("aria-checked", String(ko));
      Sound.play(ko ? "on" : "off");
      monos.forEach((m) => { m.slot = -1; });
      dna = []; filled = 0; speck = 0; complete = false;
      if (!pros.length) disassemble();
      uiKey = ""; ui(); draw();
      if (ko) announce(F.msg.ko);
    });

    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stage); else addEventListener("resize", resize);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; visible ? start() : stop(); })).observe(stage);
    } else { visible = true; start(); }
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    return { el: fig, resize };
  })();

  /* ======================================================================
     FIG. 2 — HEART REPAIR TIMELINE (scrubber, curve roles, interventions)
     ====================================================================== */
  const Fig2 = (() => {
    const M = C.fig2;
    const root = $("#fig2"), plot = $("svg.mi", root), range = $(".range", root), dayEl = $(".mi-day", root);
    const curves = {}, hits = {}, dots = {};
    $$(".mi-curve[data-k]", plot).forEach((p) => (curves[p.dataset.k] = p));
    $$(".hit", plot).forEach((p) => (hits[p.dataset.k] = p));
    MI_KEYS.forEach((k) => (dots[k] = $(`.dot.d-${k}`, plot)));
    const cursorG = $(".day-cursor", plot), phases = $$(".mi-phases li", root), beam = $(".balance .beam", root);
    const keys = $$(".mi-key[data-k]", root), role = $(".mi-role", root), txBtns = $$("[data-tx]", root);
    const BASE = { promA: 0.72, promW: 1.5, repmA: 0.82, repmC: 4, repmWl: 1.35, ecmA: 0.86, ecmC: 5.2 };
    const cur = { ...BASE };
    const mods = { ccr2: false, il10: false, deplete: false };
    let day = 0, sel = null, intro = null, introDone = false;
    const g = (d, c, wl, wr, a) => Math.exp(-(((d - c) / (d < c ? wl : wr)) ** 2)) * a;
    const fns = (p) => ({
      neut: (d) => g(d, 1, 0.45, 1.7, 0.95),
      prom: (d) => g(d, 1.6, 0.75, p.promW, p.promA),
      repm: (d) => g(d, p.repmC, p.repmWl, 2.8, p.repmA),
      fib: (d) => g(d, 3, 1.1, 1.7, 0.62),
      ecm: (d) => p.ecmA / (1 + Math.exp(-(d - p.ecmC) / 0.85)),
    });
    function target() {
      const p = { ...BASE };
      if (mods.ccr2) p.promA *= 0.45;
      if (mods.il10) { p.promW = 0.85; p.promA *= 0.85; p.repmC = 3; p.repmWl = 1; p.repmA *= 0.82; p.ecmC = 4.6; }
      if (mods.deplete) { p.promA *= 0.12; p.repmA *= 0.12; p.ecmA *= 0.45; }
      return p;
    }
    function pathD(f) {
      let d = "";
      for (let x = 0; x <= MI.DMAX + 0.001; x += 0.05) d += `${x ? " L" : "M"}${miX(x).toFixed(1)} ${miY(f(x)).toFixed(1)}`;
      return d;
    }
    function render() {
      const F = fns(cur);
      Object.keys(curves).forEach((k) => { const d = pathD(F[k]); curves[k].setAttribute("d", d); if (hits[k]) hits[k].setAttribute("d", d); });
      place();
    }
    function phaseFor(d) { return d < 0.5 ? 0 : d < 2.5 ? 1 : d < 6 ? 2 : 3; }
    function place() {
      const F = fns(cur), x = miX(day);
      cursorG.setAttribute("transform", `translate(${x.toFixed(1)} 0)`);
      MI_KEYS.forEach((k) => dots[k].setAttribute("cy", miY(F[k](day)).toFixed(1)));
      const n = Math.floor(day + 1e-6), label = n >= 7 ? "Day 7+" : `Day ${n}`;
      dayEl.textContent = label;
      const pi = phaseFor(day);
      phases.forEach((li, i) => li.classList.toggle("on", i === pi));
      range.setAttribute("aria-valuetext", `${label}: ${M.phases[pi].title}`);
      const tip = -9 + 17 * clamp(F.ecm(day) / 0.86, 0, 1);
      beam.style.transform = `rotate(${tip.toFixed(2)}deg)`;
    }
    function setDay(d, fromRange) {
      d = clamp(d, 0, MI.DMAX);
      const before = Math.floor(day + 1e-6);
      day = d;
      if (Math.floor(d + 1e-6) !== before) Sound.play("tick");
      if (!fromRange) range.value = d.toFixed(2);
      place();
    }
    function stopIntro() { if (intro) { try { intro.pause(); } catch (e) { /* noop */ } intro = null; } introDone = true; }
    function select(k) {
      sel = sel === k ? null : k;
      plot.classList.toggle("has-sel", !!sel);
      Object.keys(curves).forEach((c) => curves[c].classList.toggle("sel", c === sel));
      keys.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === sel)));
      const info = sel ? M.cells[sel] : null;
      role.innerHTML = info ? `<h4>${esc(info.label)}</h4><p>${esc(info.role)}</p>` : `<h4>${esc(M.pickTitle)}</h4><p>${esc(M.pickText)}</p>`;
    }
    range.addEventListener("input", () => { stopIntro(); setDay(+range.value, true); });
    range.addEventListener("keydown", (e) => {
      const n = Math.round(day);
      const map = { ArrowRight: n + 1, ArrowUp: n + 1, PageUp: n + 1, ArrowLeft: n - 1, ArrowDown: n - 1, PageDown: n - 1, Home: 0, End: MI.DMAX };
      if (!(e.key in map)) return;
      e.preventDefault(); stopIntro();
      setDay(e.key === "End" ? MI.DMAX : clamp(map[e.key], 0, 7));
    });
    const vbX = (e) => { const r = plot.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * 650; };
    let dragging = false;
    plot.addEventListener("pointerdown", (e) => {
      if (e.target.classList.contains("hit")) { stopIntro(); select(e.target.dataset.k); return; }
      stopIntro(); dragging = true;
      try { plot.setPointerCapture(e.pointerId); } catch (er) { /* noop */ }
      setDay(((vbX(e) - MI.L) / (MI.R - MI.L)) * MI.DMAX);
    });
    plot.addEventListener("pointermove", (e) => { if (dragging) setDay(((vbX(e) - MI.L) / (MI.R - MI.L)) * MI.DMAX); });
    const end = () => (dragging = false);
    plot.addEventListener("pointerup", end); plot.addEventListener("pointercancel", end);
    keys.forEach((b) => b.addEventListener("click", () => select(b.dataset.k)));
    txBtns.forEach((b) => b.addEventListener("click", () => {
      const k = b.dataset.tx;
      mods[k] = !mods[k];
      b.setAttribute("aria-pressed", String(mods[k]));
      Sound.play(mods[k] ? "on" : "off");
      const to = target();
      if (MOTION) A.animate(cur, { ...to, duration: 650, ease: "outQuad", onUpdate: render });
      else { Object.assign(cur, to); render(); }
    }));
    render();
    setDay(MOTION ? 0 : 1);
    function onShow() {
      if (!MOTION || introDone) return;
      introDone = true;
      const o = { d: 0 };
      intro = A.animate(o, { d: MI.DMAX, duration: 3200, delay: 500, ease: "inOutSine", onUpdate: () => setDay(o.d) });
    }
    return { onShow };
  })();

  /* ---------- Fig. 3 — trace draws whenever the tab opens ---------- */
  const Fig3 = (() => {
    const sh = $(".seahorse");
    const ptsG = $$(".pt-g", sh);
    if (!MOTION) { ptsG.forEach((g) => g.classList.add("on")); return { onShow() {} }; }
    const line = A.svg.createDrawable($(".sh-line", sh), 0, 0);
    let anim = null;
    return {
      onShow() {
        try { anim && anim.revert(); } catch (e) { /* noop */ }
        ptsG.forEach((g) => g.classList.remove("on"));
        anim = A.animate(line, {
          draw: ["0 0", "0 1"], duration: 2000, delay: 350, ease: "inOutSine",
          onUpdate: (self) => ptsG.forEach((g) => {
            const on = self.progress >= +g.dataset.f - 0.005;
            if (on && !g.classList.contains("on")) { g.classList.add("on"); Sound.play("hover"); }
          }),
        });
      },
    };
  })();

  /* ======================================================================
     FIG. 4 — muscle damage, DMD and satellite cells
     ====================================================================== */
  (function fig4() {
    const T = C.fig4, root = $("#fig4");
    if (!root) return;

    /* (a) dystrophin bridge + contraction */
    const a = $(".dmd-a", root), panelA = $(".panel-a", root);
    const statusA = $("[data-a-status]", root), countA = $("[data-a-count]", root), contractBtn = $("[data-contract]", root);
    const segL = $(".seg-l", a), segR = $(".seg-r", a), actin = $(".actin", a), body = $(".a-body", a);
    const movers = $$(".alb-dot[data-dx]", a), ions = $$(".ca", a), modeA = $$("[data-a-mode]", root);
    let dmd = false, torn = false, inside = 0, busy = false;
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    function resetA() {
      timers.splice(0).forEach(clearTimeout);
      torn = false; inside = 0; busy = false;
      a.classList.remove("torn");
      [segL, segR, ...movers, ...ions].forEach((el) => { el.style.transform = ""; el.classList.remove("in"); });
      actin.classList.remove("squeeze"); body.classList.remove("squeeze");
      countA.textContent = "0";
      statusA.textContent = dmd ? T.a.dmdIdle : T.a.healthyIdle;
    }
    modeA.forEach((b) => b.addEventListener("click", () => {
      dmd = b.dataset.aMode === "1";
      modeA.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      a.classList.toggle("is-dmd", dmd);
      Sound.play(dmd ? "off" : "on");
      resetA();
    }));
    contractBtn.addEventListener("click", () => {
      if (busy) return;
      busy = true;
      Sound.play("thump");
      actin.classList.add("squeeze"); body.classList.add("squeeze");
      later(() => { actin.classList.remove("squeeze"); body.classList.remove("squeeze"); }, 380);
      later(() => {
        if (!dmd) {
          statusA.textContent = T.a.held;
          Sound.play("success"); glow(panelA);
          return;
        }
        if (!torn) {
          torn = true; a.classList.add("torn");
          segL.style.transform = "translateX(-12px)"; segR.style.transform = "translateX(12px)";
          Sound.play("tear");
        }
        statusA.textContent = T.a.torn;
        ions.forEach((c, i) => later(() => { c.classList.add("in"); c.style.transform = `translate(${c.dataset.dx}px, ${c.dataset.dy}px)`; }, 80 + i * 70));
        movers.filter((d) => !d.classList.contains("in")).slice(0, 3).forEach((d, i) => later(() => {
          d.classList.add("in");
          d.style.transform = `translate(${d.dataset.dx}px, ${d.dataset.dy}px)`;
          inside++; countA.textContent = String(inside);
          Sound.play("blip");
        }, 260 + i * 240));
      }, 300);
      later(() => (busy = false), 1100);
    });

    /* (b) cross-section stages */
    const b = $(".dmd-b", root), rangeB = $("[data-b-range]", root), textB = $("[data-b-text]", root);
    const gEls = $$(".fb", b), fEls = $$(".fiber", b), aEls = $$(".alb", b), fatEls = $$(".fat", b), nEls = $$(".nuc", b), mEls = $$(".mac", b);
    const fibro = $(".fibro", b), labs = $$("[data-b-lab]", root), modeB = $$("[data-b-mode]", root);
    let chronic = false;
    const D = f4B;
    function applyB(instant) {
      const st = +rangeB.value;
      if (instant) b.classList.add("no-tr");
      const nec = (f) => f.v < 0.33 || (chronic && f.v < 0.45);
      D.fibers.forEach((f, i) => {
        let sc = 0.93, alb = 0, op = 1, central = false, nucOp = 1;
        const n = nec(f);
        if (st === 1 && n) { sc = 0.95; alb = 0.55; nucOp = 0; }
        else if (st === 2 && n) { sc = 0.6; central = true; }
        else if (st === 3) {
          if (!chronic) { if (n) { sc = 0.88; central = true; } }
          else {
            sc = 0.5 + f.v2 * 0.46; central = n || f.v2 < 0.35;
            if (f.v2 < 0.12 && !f.fat) alb = 0.55;
            if (f.fat) { op = 0; nucOp = 0; }
          }
        }
        f.sc = sc; f.central = central; f.nucOp = nucOp;
        gEls[i].style.opacity = op;
        fEls[i].style.transform = aEls[i].style.transform = `scale(${sc})`;
        aEls[i].style.opacity = alb;
        fatEls[i].style.opacity = st === 3 && chronic && f.fat ? 1 : 0;
      });
      D.nucs.forEach((m, j) => {
        const f = D.fibers[m.fi];
        let tr;
        if (f.central) tr = `translate(${(f.cx + (m.k ? 3 : 0)).toFixed(1)}px, ${(f.cy + (m.k ? 3 : 0)).toFixed(1)}px) scale(.85, 1.35)`;
        else { const s = f.sc * 0.88; tr = `translate(${(f.cx + (m.em[0] - f.cx) * s).toFixed(1)}px, ${(f.cy + (m.em[1] - f.cy) * s).toFixed(1)}px) rotate(${m.ang.toFixed(1)}deg)`; }
        nEls[j].style.transform = tr; nEls[j].style.opacity = f.nucOp;
      });
      D.macs.forEach((m, j) => {
        const on = m.fi != null ? st === 1 && nec(D.fibers[m.fi]) : st === 1 || ((st === 2 || (st === 3 && chronic)) && j % 2 === 0);
        mEls[j].classList.toggle("on", on);
      });
      fibro.style.opacity = st === 3 && chronic ? 1 : 0;
      const last = chronic ? T.b.last.chronic : T.b.last.acute;
      labs[3].textContent = last.t;
      labs.forEach((l, i) => l.classList.toggle("on", i === st));
      const stage = st === 3 ? last : T.b.stages[st];
      textB.innerHTML = `<b>${esc(stage.t)}.</b> ${esc(stage.d)}`;
      rangeB.setAttribute("aria-valuetext", stage.t);
      if (instant) requestAnimationFrame(() => requestAnimationFrame(() => b.classList.remove("no-tr")));
    }
    rangeB.addEventListener("input", () => { applyB(); Sound.play("tick"); Sound.play("chime"); });
    modeB.forEach((x) => x.addEventListener("click", () => {
      chronic = x.dataset.bMode === "chronic";
      modeB.forEach((y) => y.setAttribute("aria-pressed", String(y === x)));
      applyB();
    }));
    applyB(true);

    /* (c) satellite-cell path */
    const info = $("[data-sc-info]", root), scBtns = $$("[data-sc]", root);
    scBtns.forEach((btn, i) => btn.addEventListener("click", () => {
      scBtns.forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
      const s = T.c.stages[i];
      info.innerHTML = `<b>${esc(s.t)} (${esc(s.m)}).</b> ${esc(s.say)}`;
      Sound.play("slot", i);
    }));
  })();


  /* ======================================================================
     VENTURES — draw-a-quest card
     ====================================================================== */
  (function deck() {
    const V = C.venture;
    const card = $("[data-qcard]"), inner = $(".qcard-inner", card), front = $("[data-qfront]"), countEl = $("[data-qcount]"), btn = $("[data-draw]");
    const n = V.quests.length;
    let order = [...Array(n).keys()], pos = 0, busy = false;
    const shuffle = () => { for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } };
    function fill() {
      const q = V.quests[order[pos]];
      front.innerHTML = `
        <span class="q-area">${esc(q.area)}</span>
        <span class="q-title">${esc(q.title)}</span>
        <span class="q-hook">${esc(q.hook)}</span>
        <span class="q-vibes">${q.vibes.map((v) => `<span class="q-vibe"><img src="assets/coquest/doodles/${v}.png" alt="" width="28" height="28" loading="lazy">${esc(V.vibeLabels[v] || v)}</span>`).join("")}</span>`;
      countEl.textContent = `${V.deckSource} · ${pos + 1} of ${n}`;
    }
    function draw() {
      if (busy) return;
      busy = true;
      Sound.play("flip");
      const prev = order[pos];
      pos++;
      if (pos >= n) { pos = 0; shuffle(); if (order[0] === prev) [order[0], order[1]] = [order[1], order[0]]; }
      if (!MOTION) { fill(); busy = false; Sound.play("success"); glow(front); return; }
      A.animate(inner, {
        rotateY: [0, 180], duration: 300, ease: "inQuad",
        onComplete: () => {
          fill();
          A.animate(inner, { rotateY: [180, 360], duration: 560, ease: "outBack(1.3)", onComplete: () => { A.utils.set(inner, { rotateY: 0 }); busy = false; Sound.play("success"); glow(front); } });
        },
      });
    }
    shuffle(); fill();
    card.addEventListener("click", draw);
    btn.addEventListener("click", draw);
  })();

  /* ======================================================================
     CONTACT — Fig. 5: links as nodes that lean toward the cursor and can be nudged
     ====================================================================== */
  const Net = (() => {
    const stage = $(".net-stage"), lines = $(".net-lines"), center = $(".net-center");
    const nodes = $$(".net-node", stage).map((el) => ({ el, key: el.dataset.key, hx: 0, hy: 0, x: 0, y: 0, vx: 0, vy: 0, w: 0, h: 0, drag: false, moved: false }));
    const ctr = { x: 0, y: 0 };
    const mouse = { x: -9999, y: -9999 };
    let W = 0, H = 0, raf = 0, running = false, visible = false, last = 0, t = 0, dragNode = null, suppress = false;
    const HOMES = {
      wide: { email: [0.5, 0.17], linkedin: [0.22, 0.8], github: [0.78, 0.8], c: [0.5, 0.52] },
      narrow: { email: [0.5, 0.14], linkedin: [0.27, 0.84], github: [0.73, 0.84], c: [0.5, 0.5] },
    };
    lines.innerHTML = nodes.map(() => `<path class="ln"/>`).join("") + `<path class="ln-faint"/>` + nodes.map(() => `<circle class="pulse" r="2.6"/>`).join("");
    const lnEls = $$(".ln", lines), faint = $(".ln-faint", lines), pulses = $$(".pulse", lines);
    function layout() {
      W = stage.clientWidth; H = stage.clientHeight;
      if (!W) return;
      const set = W < 560 ? HOMES.narrow : HOMES.wide;
      ctr.x = set.c[0] * W; ctr.y = set.c[1] * H;
      nodes.forEach((n) => {
        n.w = n.el.offsetWidth; n.h = n.el.offsetHeight;
        const [fx, fy] = set[n.key];
        n.hx = clamp(fx * W, n.w / 2 + 10, W - n.w / 2 - 10);
        n.hy = clamp(fy * H, n.h / 2 + 10, H - n.h / 2 - 10);
        if (REDUCE || (!n.x && !n.y)) { n.x = n.hx; n.y = n.hy; }
      });
      render();
    }
    const quad = (n) => {
      const mx = (ctr.x + n.x) / 2, my = (ctr.y + n.y) / 2, dx = n.x - ctr.x, dy = n.y - ctr.y, L = Math.hypot(dx, dy) || 1;
      const sag = REDUCE ? 10 : 10 + Math.sin(t * 1.2 + n.hx) * 4;
      return { qx: mx - (dy / L) * sag, qy: my + (dx / L) * sag };
    };
    function render() {
      center.style.transform = `translate(${ctr.x.toFixed(1)}px, ${(ctr.y + (REDUCE ? 0 : Math.sin(t * 1.1) * 3)).toFixed(1)}px)`;
      nodes.forEach((n, i) => {
        n.el.style.transform = `translate(${(n.x - n.w / 2).toFixed(1)}px, ${(n.y - n.h / 2).toFixed(1)}px)`;
        const { qx, qy } = quad(n);
        lnEls[i].setAttribute("d", `M${ctr.x.toFixed(1)} ${ctr.y.toFixed(1)} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`);
        const s = REDUCE ? 0.5 : ((t * 0.32 + i / nodes.length) % 1);
        const px = (1 - s) ** 2 * ctr.x + 2 * (1 - s) * s * qx + s * s * n.x, py = (1 - s) ** 2 * ctr.y + 2 * (1 - s) * s * qy + s * s * n.y;
        pulses[i].setAttribute("cx", px.toFixed(1)); pulses[i].setAttribute("cy", py.toFixed(1));
        pulses[i].style.opacity = REDUCE ? 0 : Math.sin(s * Math.PI).toFixed(2);
      });
      faint.setAttribute("d", `M${nodes.map((n) => `${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" L")} Z`);
    }
    function step(dt) {
      t += dt;
      nodes.forEach((n) => {
        if (n.drag) return;
        let tx = n.hx, ty = n.hy;
        const dx = mouse.x - n.hx, dy = mouse.y - n.hy, d = Math.hypot(dx, dy);
        if (d < 170) { const f = (1 - d / 170) * 0.12; tx += clamp(dx * f, -12, 12); ty += clamp(dy * f, -12, 12); }
        n.vx += ((tx - n.x) * 70 - n.vx * 9) * dt; n.vy += ((ty - n.y) * 70 - n.vy * 9) * dt;
        n.x += n.vx * dt; n.y += n.vy * dt;
      });
    }
    function frame(now) {
      if (!running) return;
      const dt = Math.min(0.033, (now - (last || now)) / 1000); last = now;
      step(dt); render();
      raf = requestAnimationFrame(frame);
    }
    function start() { if (running || !visible || document.hidden || REDUCE) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    const local = (e) => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    stage.addEventListener("pointermove", (e) => {
      const [x, y] = local(e);
      if (e.pointerType === "mouse") { mouse.x = x; mouse.y = y; }
      if (!dragNode) return;
      const n = dragNode;
      if (!n.moved && Math.hypot(x - n.sx, y - n.sy) > 5) { n.moved = true; n.drag = true; n.el.classList.add("dragging"); }
      if (n.drag) {
        n.x = clamp(x - n.ox, n.w / 2, W - n.w / 2); n.y = clamp(y - n.oy, n.h / 2, H - n.h / 2); n.vx = n.vy = 0;
        if (REDUCE) render();
      }
    });
    stage.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
    nodes.forEach((n) => {
      n.el.addEventListener("pointerdown", (e) => {
        if (e.button) return;
        const [x, y] = local(e);
        dragNode = n; n.sx = x; n.sy = y; n.ox = x - n.x; n.oy = y - n.y; n.moved = false;
        try { n.el.setPointerCapture(e.pointerId); } catch (er) { /* noop */ }
      });
      const up = () => {
        if (dragNode !== n) return;
        if (n.moved) { suppress = true; Sound.play("pluck"); setTimeout(() => (suppress = false), 60); if (REDUCE) { n.x = n.hx; n.y = n.hy; render(); } }
        n.drag = false; n.el.classList.remove("dragging"); dragNode = null;
      };
      n.el.addEventListener("pointerup", up); n.el.addEventListener("pointercancel", up);
      n.el.addEventListener("click", (e) => { if (suppress) e.preventDefault(); });
    });
    const copyBtn = $("[data-copy]");
    copyBtn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(copyBtn.dataset.copy); copyBtn.textContent = C.contact.copied; }
      catch (e) { copyBtn.textContent = copyBtn.dataset.copy; }
      setTimeout(() => (copyBtn.textContent = C.contact.copy), 2200);
    });
    if ("ResizeObserver" in window) new ResizeObserver(layout).observe(stage);
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; visible ? start() : stop(); })).observe(stage);
    else { visible = true; start(); }
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    return { layout };
  })();

  (function ecmField() {
    const cv = $(".ecm"); if (!cv) return;
    const ctx = cv.getContext("2d");
    const SEG = 7, RADIUS = 130;
    let W = 0, H = 0, fibers = [], raf = 0, running = false, last = 0, active = 0;
    const ptr = { x: -9999, y: -9999, on: false };

    function build() {
      W = innerWidth; H = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const r = rng(1234), gap = W < 600 ? 64 : 76;
      fibers = [];
      for (let y = gap / 2; y < H + gap; y += gap) for (let x = gap / 2; x < W + gap; x += gap) {
        if (fibers.length > 260) break;
        const len = 46 + r() * 70;
        // locally aligned bundles, like collagen in a maturing scar
        const ang = -0.5 + Math.sin(x * 0.004 + y * 0.002) * 0.6 + (r() - 0.5) * 0.35;
        const cx = x + (r() - 0.5) * gap * 0.8, cy = y + (r() - 0.5) * gap * 0.8;
        const pts = [];
        for (let i = 0; i <= SEG; i++) {
          const s = i / SEG - 0.5, crimp = Math.sin(i * 1.9 + r() * 0.4) * 1.6;
          pts.push({ rx: cx + Math.cos(ang) * s * len - Math.sin(ang) * crimp, ry: cy + Math.sin(ang) * s * len + Math.cos(ang) * crimp, dx: 0, dy: 0, vx: 0, vy: 0 });
        }
        fibers.push(pts);
      }
      draw();
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(20,21,25,0.075)"; ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.lineCap = "round";
      ctx.beginPath();
      fibers.forEach((pts) => {
        pts.forEach((p, i) => { const x = p.rx + p.dx, y = p.ry + p.dy; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      });
      ctx.stroke();
    }
    function step(dt) {
      let energy = 0;
      const k = 70, c = 11; // spring stiffness, damping (slightly under-damped)
      fibers.forEach((pts) => pts.forEach((p) => {
        if (ptr.on) {
          const x = p.rx + p.dx - ptr.x, y = p.ry + p.dy - ptr.y, d = Math.hypot(x, y);
          if (d < RADIUS && d > 0.01) { const f = (1 - d / RADIUS) ** 2 * 2600; p.vx += (x / d) * f * dt; p.vy += (y / d) * f * dt; }
        }
        p.vx += (-k * p.dx - c * p.vx) * dt; p.vy += (-k * p.dy - c * p.vy) * dt;
        p.dx += p.vx * dt; p.dy += p.vy * dt;
        const m = Math.hypot(p.dx, p.dy); if (m > 26) { p.dx *= 26 / m; p.dy *= 26 / m; }
        energy += Math.abs(p.vx) + Math.abs(p.vy) + Math.abs(p.dx) + Math.abs(p.dy);
      }));
      return energy;
    }
    function frame(now) {
      if (!running) return;
      const dt = Math.min(0.033, (now - (last || now)) / 1000); last = now;
      const e = step(dt); draw();
      if (e < 0.5 && now > active) { running = false; last = 0; return; }
      raf = requestAnimationFrame(frame);
    }
    function kick(ms = 600) { active = performance.now() + ms; if (!running && !document.hidden) { running = true; last = 0; raf = requestAnimationFrame(frame); } }
    function impulse(x, y, power) {
      fibers.forEach((pts) => pts.forEach((p) => {
        const dx = p.rx - x, dy = p.ry - y, d = Math.hypot(dx, dy);
        if (d < 180 && d > 0.01) { const f = (1 - d / 180) * power; p.vx += (dx / d) * f; p.vy += (dy / d) * f; }
      }));
      kick();
    }

    build();
    let rT; addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(build, 200); });
    if (REDUCE) return; // static fibers only

    if (FINE) {
      addEventListener("pointermove", (e) => { if (e.pointerType !== "mouse") return; ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true; kick(); }, { passive: true });
      document.documentElement.addEventListener("pointerleave", () => { ptr.on = false; });
    }
    addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") impulse(e.clientX, e.clientY, 160); }, { passive: true });
    let lastY = scrollY;
    addEventListener("scroll", () => {
      const dy = Math.max(-40, Math.min(40, scrollY - lastY)); lastY = scrollY;
      if (Math.abs(dy) < 1) return;
      fibers.forEach((pts, i) => { const s = (i % 5) / 5 + 0.4; pts.forEach((p, j) => (p.vy -= dy * s * (0.6 + Math.sin(j) * 0.3))); });
      kick(300);
    }, { passive: true });
    document.addEventListener("visibilitychange", () => { if (document.hidden) { running = false; cancelAnimationFrame(raf); } });
  })();


  /* ======================================================================
     CUSTOM CURSOR (desktop, fine pointer, motion allowed)
     ====================================================================== */
  if (FINE && !REDUCE) {
    document.documentElement.classList.add("has-cursor");
    const cur = $(".cursor"), dot = $(".cursor-dot"), ring = $(".cursor-ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, s = 1, st = 1, raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2; s += (st - s) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) scale(${s})`;
      raf = Math.abs(mx - rx) + Math.abs(my - ry) + Math.abs(st - s) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      cur.classList.remove("gone"); kick();
    }, { passive: true });
    document.addEventListener("pointerover", (e) => {
      const hot = !!e.target.closest("a, button, input, .muscle-stage, .sim-stage, .qcard, .mi .hit");
      cur.classList.toggle("hot", hot); st = hot ? 1.6 : 1; kick();
    });
    document.addEventListener("pointerdown", () => { st = 0.7; kick(); });
    document.addEventListener("pointerup", () => { st = cur.classList.contains("hot") ? 1.6 : 1; kick(); });
    document.documentElement.addEventListener("pointerleave", () => cur.classList.add("gone"));
  }

  /* ======================================================================
     ROUTER — hash routes (#/page or #/page/sub), accessible tabs
     ====================================================================== */
  const tabEls = $$(".tab", tabsEl);
  const lastSub = {}, current = { top: null, sub: {} }, seen = new Set();
  let token = 0;
  function parse(hash) {
    let raw = hash.replace(/^#\/?/, ""), anchor = null;
    const rd = C.redirects[raw] || C.redirects[raw.split("/")[0]];
    if (rd) [raw, anchor] = rd.split("#");
    const [a, b] = raw.split("/");
    const page = PAGES.find((p) => p.id === a) || PAGES[0];
    let sub = null;
    if (page.subs) sub = page.subs.find((s) => s.id === b) || page.subs.find((s) => s.id === lastSub[page.id]) || page.subs[0];
    return { page, sub, anchor };
  }
  function setTabs(list, selId) {
    list.forEach((el) => {
      const on = el.dataset.id === selId || el.id.endsWith(`-${selId}`);
      el.setAttribute("aria-selected", String(on));
      el.tabIndex = on ? 0 : -1;
    });
  }
  function countUp(scope) {
    $$("[data-count]", scope).forEach((el) => {
      if (seen.has(el) || !el.offsetParent) return;
      seen.add(el);
      if (!MOTION) return;
      const o = { v: 0 }, n = +el.dataset.count;
      A.animate(o, { v: n, duration: n > 1000 ? 2000 : 1400, delay: 250, ease: "outExpo", onUpdate: () => (el.textContent = fmt(o.v)) });
    });
  }
  function enter(el, withSound) {
    countUp(el);
    if (!MOTION) return;
    A.animate(el, { opacity: [0, 1], translateY: [12, 0], duration: 420, ease: "outQuart" });
    const items = $$("[data-reveal]", el).filter((x) => x.offsetParent && !x.closest("[hidden]"));
    if (items.length) {
      A.utils.set(items, { opacity: 0 });
      A.animate(items, { opacity: [0, 1], translateY: [14, 0], duration: 620, delay: A.stagger(55, { start: 90 }), ease: "outQuart" });
    }
    if (withSound) Sound.play("chime");
  }
  function afterShow(page, sub) {
    if (page.id === "about") { NameSig.ensure(); Net.layout(); }
    if (sub && sub.id === "heart-repair") Fig2.onShow();
    if (sub && sub.id === "seahorse") Fig3.onShow();
    Fig1.resize();
  }
  function mountFig1(page, sub) {
    const slot = page.id === "about" ? $('[data-slot="about"]') : sub && sub.id === "inflammasome" ? $('[data-slot="inflammasome"]') : null;
    if (slot && Fig1.el.parentElement !== slot) slot.appendChild(Fig1.el);
  }
  function route(initial) {
    const { page, sub, anchor } = parse(location.hash);
    const canon = routeHref(page, sub);
    if (location.hash !== canon) history.replaceState(null, "", canon);
    if (sub) lastSub[page.id] = sub.id;
    setTabs(tabEls, page.id);
    tabEls.forEach((a) => { const p = PAGES.find((x) => x.id === a.dataset.id); if (p.subs) a.href = routeHref(p, p.subs.find((s) => s.id === lastSub[p.id]) || p.subs[0]); });
    const pageEl = $(`#page-${page.id}`);
    if (sub) setTabs($$(".subtab", pageEl), sub.id);
    document.title = `${sub ? `${sub.tab} · ` : ""}${page.id === "about" ? "" : `${page.tab} · `}${C.name}`;
    const topChanged = current.top !== page.id;
    const subChanged = sub && current.sub[page.id] !== sub.id;
    const my = ++token;
    const showSub = () => { if (sub) $$(".subpage", pageEl).forEach((s) => (s.hidden = s.id !== `sub-${page.id}-${sub.id}`)); };
    if (topChanged) {
      const oldEl = current.top && $(`#page-${current.top}`);
      const swap = () => {
        if (my !== token) return;
        $$(".page", pagesEl).forEach((p) => { p.hidden = p !== pageEl; if (p !== pageEl) { p.style.opacity = ""; p.style.transform = ""; } });
        showSub(); mountFig1(page, sub);
        window.scrollTo(0, 0);
        // no random chime on main-tab switches, so the tab's own note is what you hear
        if (page.id === "about" && !heroPlayed) heroIntro(); else enter(pageEl, false);
        afterShow(page, sub);
      };
      if (oldEl && MOTION && !initial) A.animate(oldEl, { opacity: [1, 0], translateY: [0, -6], duration: 150, ease: "inQuad", onComplete: swap });
      else swap();
    } else if (subChanged) {
      const subEl = $(`#sub-${page.id}-${sub.id}`);
      showSub(); mountFig1(page, sub);
      const bar = $(".subtabs", pageEl), top = bar.getBoundingClientRect().top;
      if (top < 0) window.scrollTo(0, scrollY + top - 72);
      enter(subEl, true);
      afterShow(page, sub);
    }
    if (!initial && topChanged) Sound.play("tabSwitch", page.id);
    else if (!initial && subChanged) Sound.play("thump");
    if (anchor) setTimeout(() => { const el = document.getElementById(anchor); if (el) el.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "start" }); }, topChanged ? 320 : 30);
    current.top = page.id;
    if (sub) current.sub[page.id] = sub.id;
  }
  let heroPlayed = false;
  function heroIntro() {
    heroPlayed = true;
    const pageEl = $("#page-about");
    countUp(pageEl);
    if (!MOTION) return;
    A.createTimeline({ defaults: { ease: "outExpo" } })
      .add(".eyebrow", { opacity: [0, 1], translateY: [8, 0], duration: 800 }, 0)
      .add(".tagline", { opacity: [0, 1], translateY: [12, 0], duration: 1000 }, 900)
      .add(".hero-meta", { opacity: [0, 1], translateY: [10, 0], duration: 900 }, 1150)
      .add(".fig1-slot[data-slot=about]", { opacity: [0, 1], translateY: [18, 0], duration: 1200 }, 400);
    const items = $$("[data-reveal]", pageEl);
    A.utils.set(items, { opacity: 0 });
    A.animate(items, { opacity: [0, 1], translateY: [16, 0], duration: 800, delay: A.stagger(120, { start: 1300 }), ease: "outQuart" });
  }
  function tablistKeys(list) {
    list.addEventListener("keydown", (e) => {
      const tabs = $$('[role="tab"]', list), i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      let j = null;
      if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") j = 0;
      else if (e.key === "End") j = tabs.length - 1;
      else if (e.key === " ") { e.preventDefault(); tabs[i].click(); return; }
      if (j === null) return;
      e.preventDefault(); tabs[j].focus();
      tabs[j].scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  }
  tablistKeys(tabsEl);
  $$(".subtabs").forEach(tablistKeys);
  addEventListener("hashchange", () => {
    route(false);
    const sel = $('.tab[aria-selected="true"]');
    if (sel) { const r = sel.getBoundingClientRect(), pr = tabsEl.getBoundingClientRect(); if (r.left < pr.left || r.right > pr.right) tabsEl.scrollLeft += r.left - pr.left - 16; }
  });
  route(true);
})();
