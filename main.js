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
  fig4chain: {
    alt: "Seven linked panels, each with its equation and a simulated trace over 21 days: contraction force; membrane stress, which only tears the membrane when dystrophin is absent or cardiotoxin is given; calcium influx; albumin uptake into damaged fibers; necrosis followed by satellite-cell repair through Pax7, MyoD and myogenin; a cross-section of 40 fibers that turn leaky, die, and are rebuilt with central nuclei; and a histogram of fiber sizes, which spreads out in the mdx setting.",
    caption: "Muscle damage and repair as a chain of steps, and why muscle breaks down in Duchenne muscular dystrophy (DMD). Dystrophin links the actin cytoskeleton, through the dystrophin-glycoprotein complex (dystroglycan and sarcoglycans), to laminin-211 in the basal lamina. Without it, contraction tears the membrane and Ca²⁺ floods in. Damaged fibers take up serum proteins such as albumin, which is why Evans blue dye (it binds albumin) and albumin uptake are used to mark damaged fibers. That is the link to my albumin project. Dead fibers are cleared, and satellite cells (Pax7, then MyoD, then myogenin) rebuild them with central nuclei. After a single cardiotoxin injury the muscle recovers; in the mdx setting the cycle keeps repeating and fiber sizes spread out.",
    label: "Simplified toy model; parameters illustrative, not lab data.",
  },
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
  fig1chain: {
    alt: "Five linked panels, each with its equation and a simulated trace: priming raises NLRP3 and pro-IL-1β; a second signal produces oxidized mtDNA when CMPK2 is present; NLRP3 and ASC assemble, shown in a cell diagram; caspase-1 becomes active; mature IL-1β is released. With Cmpk2 deleted, every trace after priming stays flat.",
    caption: "NLRP3 inflammasome activation in a macrophage, as a chain of five steps. Priming (signal 1) raises NLRP3 and pro-IL-1β. After a second signal, new mtDNA made with CMPK2 is oxidized and enters the cytosol. NLRP3 assembles with ASC, caspase-1 becomes active, and mature IL-1β leaves the cell. Deleting Cmpk2 stops new mtDNA synthesis, so everything after priming stays flat.",
    note: "Simplified toy model; parameters illustrative, not lab data.",
    label: "Simplified toy model; parameters illustrative, not lab data.",
  },
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
      { title: "$5 Snacks You Can't Read", hook: "Guess what's in a snack when nobody in the group can read the label.", area: "Seward", photo: "snack.jpg", credit: "Sharon Mollerus, CC BY 2.0", vibes: ["food", "weird", "competitive", "social"] },
      { title: "Hold a Pose From Sunset to Dark", hook: "Whoever shows up last picks the group pose you hold at three spots until dark.", area: "Mill District / St. Anthony Main", photo: "stone-arch.jpg", credit: "Darb02, CC BY-SA 4.0", vibes: ["outdoors", "creative", "chill", "social"] },
      { title: "Mimic the Weisman", hook: "Recreate a piece of art with only what's in your backpacks.", area: "East Bank (campus)", photo: "weisman.jpg", credit: "Bmzuckerman, CC BY 4.0", vibes: ["creative", "weird", "chill"] },
      { title: "Fourth From the Bottom at Hard Times", hook: "Count four up from the bottom of the menu board and order whatever it lands on.", area: "Cedar-Riverside / West Bank", photo: "hard-times.jpg", credit: "Chad Davis, CC BY-SA 2.0", vibes: ["food", "late-night", "social", "weird"] },
      { title: "Skyway Speedrun", hook: "Cross downtown through the skyways without touching a sidewalk.", area: "Downtown", photo: "skyway.jpg", credit: "Randy Stern, CC BY 2.0", vibes: ["active", "competitive", "weird"] },
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

  document.documentElement.classList.add("booting");
  setTimeout(() => document.documentElement.classList.remove("booting"), 3500); // never leave the page hidden
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
    // one pentatonic note with a soft echo (used by the figure engine for simulation events)
    lib.note = ({ i = 0, v = 1 } = {}) => { const f = note(i); bell(f, 0, 0.2 * v, 0.55); bell(f, 0.17, 0.065 * v, 0.5); bell(f, 0.34, 0.022 * v, 0.45); }; // same level as the page chime
    lib.page = lib.chime; lib.select = lib.pop; lib.tab = lib.thump;
    const GAP = { note: 45, blip: 90, tick: 35, slot: 50, bump: 150, fizzle: 900, hover: 60, chime: 220, thump: 120, tabSwitch: 120, click: 40 };
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
  const FX_SEL = "button, .btn, .nav-link, .ink, .pager-next, .plate, .brand, .net-node";
  function ripple(el, x, y) {
    if (REDUCE || !el.matches(".btn.press")) return;
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
    if (!el.matches(".nav-link, .ink, .pager-next, .plate, .brand")) Sound.play("click"); // links get the route sound
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
     ROUTES — every hash route is one "view"
     ====================================================================== */
  const PAGES = C.pages;
  const R = C.research, E = C.experience;
  const RES = [
    { id: "inflammasome", title: R.inflammasome.title, note: R.inflammasome.kicker, fig: "Fig. 1" },
    { id: "heart-repair", title: R.heart.title, note: R.heart.kicker, fig: "Fig. 2" },
    { id: "seahorse", title: R.seahorse.title, note: R.seahorse.kicker, fig: "Fig. 3" },
    { id: "muscle-dmd", title: R.muscle.title, note: R.muscle.kicker, fig: "Fig. 4" },
    { id: "methods", title: C.methodsPage.title, note: C.methodsPage.lede, fig: "" },
  ];
  const EXP = [
    { id: "clinical", tab: "Clinical", title: C.clinical.title },
    { id: "awards", tab: "Honors & Awards", title: E.awards.title },
    { id: "leadership", tab: "Leadership", title: E.leadership.title },
    { id: "service", tab: "Service", title: E.service.title },
  ];
  const VIEWS = [
    { id: "about", top: "about", label: "About" },
    { id: "research", top: "research", label: "Research" },
    ...RES.map((s) => ({ id: `research/${s.id}`, top: "research", sub: s.id, label: PAGES[1].subs.find((x) => x.id === s.id).tab })),
    { id: "ventures", top: "ventures", label: "Ventures" },
    ...EXP.map((s) => ({ id: `experience/${s.id}`, top: "experience", sub: s.id, label: s.tab })),
  ];
  const viewEl = (id) => document.getElementById(`view-${id.replace("/", "-")}`);
  const href = (id) => `#/${id}`;
  const TOP_HREF = { about: "about", research: "research", ventures: "ventures", experience: "experience/clinical" };

  /* text link whose underline is drawn by hand (see Underlines) */
  const ink = (h, html, extra = "") => `<a class="ink" href="${h}" ${extra}><span class="ink-t">${html}</span></a>`;
  const runIn = (t, d) => `<p><i class="run">${esc(t)}.</i> ${d}</p>`;
  const ARROW = `<svg class="arrow-svg" viewBox="0 0 64 24" aria-hidden="true"><path d="M2 12.5 C 16 11, 34 13.5, 60 12"/><path d="M50 4.5 C 53 8, 57 10.5, 61 12 C 57 14, 53.5 16.5, 51 20"/></svg>`;

  /* ======================================================================
     CELL GEOMETRY — shared by the Fig. 1 simulation (canvas) and its SVG kit of parts
     ====================================================================== */
  const CELL = (() => {
    const r0 = rng(11), SLOTS = 8, PRO_N = 12, RING_R = 0.16;
    const RING = { u: 0.2, v: -0.06 };
    const NUC = { u: -0.3, v: 0.22, rx: 0.27, ry: 0.2, a: -0.35 };
    const MITOS = [[0.48, -0.44, 0.6], [0.6, 0.26, 0.35], [-0.14, -0.62, 0.1], [-0.64, -0.24, -0.7], [0.16, 0.6, -0.3]];
    const inNucleus = (u, v, pad = 0) => {
      const c = Math.cos(-NUC.a), s = Math.sin(-NUC.a), du = u - NUC.u, dv = v - NUC.v;
      const x = du * c - dv * s, y = du * s + dv * c;
      return (x * x) / ((NUC.rx + pad) ** 2) + (y * y) / ((NUC.ry + pad) ** 2) < 1;
    };
    function freeSpot() {
      for (let k = 0; k < 40; k++) {
        const a = r0() * Math.PI * 2, d = 0.22 + r0() * 0.6, u = Math.cos(a) * d, v = Math.sin(a) * d;
        if (!inNucleus(u, v, 0.06) && Math.hypot(u - RING.u, v - RING.v) > RING_R + 0.08) return [u, v];
      }
      return [0.4, 0.4];
    }
    const monos = Array.from({ length: SLOTS }, () => { const [u, v] = freeSpot(); return { u, v, rot: r0() * 6 }; });
    const pros = Array.from({ length: PRO_N }, () => { const [u, v] = freeSpot(); return { u, v }; });
    const clearance = (p) => {
      let d = Math.hypot(p.u - NUC.u, p.v - NUC.v) - 0.3;
      MITOS.forEach((m) => (d = Math.min(d, Math.hypot(p.u - m[0], p.v - m[1]) - 0.24)));
      return Math.min(d, Math.hypot(p.u - RING.u, p.v - RING.v) - RING_R - 0.1, 0.8 - Math.hypot(p.u, p.v));
    };
    const best = (arr) => arr.reduce((b, p, i) => (clearance(p) > clearance(arr[b]) ? i : b), 0);
    return { SLOTS, PRO_N, RING_R, RING, NUC, MITOS, inNucleus, freeSpot, monos, pros, clearance, best, monoLbl: best(monos), proLbl: best(pros) };
  })();
  const CV = { W: 500, H: 400, R: 168, X: (u) => 250 + u * 168, Y: (v) => 200 + v * 168 };
  const f1 = (n) => n.toFixed(1);

  /* The cell as separate SVG parts. `story` adds the pieces used only while the mechanism plays. */
  function cellSVG(story) {
    const { R: Rr, X, Y } = CV, { NUC, MITOS, RING, RING_R, SLOTS, monos, pros } = CELL;
    let mem = "";
    for (let i = 0; i < 96; i++) {
      const th = (i / 96) * Math.PI * 2, r = (1 + 0.045 * Math.sin(3 * th) + 0.03 * Math.sin(5 * th)) * Rr;
      mem += `${i ? "L" : "M"}${f1(250 + Math.cos(th) * r)} ${f1(200 + Math.sin(th) * r)}`;
    }
    const L = Rr * 0.23, Wd = Rr * 0.1, tri = Rr * 0.042;
    let s = `<path class="c-mem" d="${mem}Z"/>`;
    s += `<g class="c-nuc"><ellipse cx="${f1(X(NUC.u))}" cy="${f1(Y(NUC.v))}" rx="${f1(NUC.rx * Rr)}" ry="${f1(NUC.ry * Rr)}" transform="rotate(${f1(NUC.a * 180 / Math.PI)} ${f1(X(NUC.u))} ${f1(Y(NUC.v))})"/></g>`;
    MITOS.forEach(([u, v, a]) => {
      let cr = "";
      for (let k = 0; k <= 6; k++) cr += `${f1(-L / 2 + Wd * 0.5 + (k / 6) * (L - Wd))},${f1((k % 2 ? 1 : -1) * Wd * 0.22)} `;
      s += `<g transform="translate(${f1(X(u))} ${f1(Y(v))}) rotate(${f1(a * 180 / Math.PI)})"><g class="c-mito"><rect x="${f1(-L / 2)}" y="${f1(-Wd / 2)}" width="${f1(L)}" height="${f1(Wd)}" rx="${f1(Wd / 2)}"/><polyline points="${cr}"/></g></g>`;
    });
    monos.forEach((m) => {
      s += `<g transform="translate(${f1(X(m.u))} ${f1(Y(m.v))})"><g class="c-mono"><path transform="rotate(${f1(m.rot * 180 / Math.PI)})" d="M${f1(tri)} 0L${f1(-tri * 0.7)} ${f1(tri * 0.8)}L${f1(-tri * 0.7)} ${f1(-tri * 0.8)}Z"/></g></g>`;
    });
    pros.forEach((p) => (s += `<circle class="c-pro" cx="${f1(X(p.u))}" cy="${f1(Y(p.v))}" r="${f1(Rr * 0.022)}"/>`));
    // labels, each with a short leader that draws out to its target
    const lab = (cls, txt, x, y, lead, anchor = "middle") => `<g class="c-lab ${cls}">${lead ? `<path class="lead" d="${lead}"/>` : ""}<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor}">${txt}</text></g>`;
    const m1 = MITOS[1], ml = monos[CELL.monoLbl], pl = pros[CELL.proLbl];
    s += lab("l-cell", "macrophage", 58, 372, "M100 360L125 327", "start");
    s += lab("l-nuc", "nucleus", X(NUC.u), Y(NUC.v) + 4, "");
    s += lab("l-mito", "mitochondrion", X(m1[0]), Y(m1[1]) + Rr * 0.13 + 4, `M${f1(X(m1[0]))} ${f1(Y(m1[1]) + Rr * 0.13 - 7)}V${f1(Y(m1[1]) + Wd / 2 + 2)}`);
    s += lab("l-mono", "NLRP3", X(ml.u), Y(ml.v) - 11, `M${f1(X(ml.u))} ${f1(Y(ml.v) - 9)}v3`);
    s += lab("l-pro", "pro-IL-1β", X(pl.u), Y(pl.v) + 18, `M${f1(X(pl.u))} ${f1(Y(pl.v) + 9)}v-3`);
    if (story) {
      const rx = X(RING.u), ry = Y(RING.v), rr = RING_R * Rr;
      s += `<circle class="c-guide fx" cx="${f1(rx)}" cy="${f1(ry)}" r="${f1(rr)}"/><circle class="c-speck fx" cx="${f1(rx)}" cy="${f1(ry)}" r="${f1(rr * 0.5)}"/><circle class="c-pulse fx" cx="${f1(rx)}" cy="${f1(ry)}" r="${f1(rr * 0.6)}"/>`;
      for (let i = 0; i < SLOTS; i++) {
        const [u, v] = MITOS[i % MITOS.length];
        let d = "";
        for (let k = 0; k <= 8; k++) d += `${k ? "L" : "M"}${f1(-7 + k * 1.75)} ${f1(Math.sin(k * 1.4 + i) * 2.2)}`;
        s += `<g transform="translate(${f1(X(u))} ${f1(Y(v))})"><path class="c-dna fx" d="${d}"/></g>`;
      }
      pros.forEach((p) => (s += `<circle class="c-il fx" cx="${f1(X(p.u))}" cy="${f1(Y(p.v))}" r="${f1(Rr * 0.024)}"/>`));
      s += `<g class="c-lab acc fx l-dna"><text x="${f1(X(MITOS[0][0]) - 34)}" y="${f1(Y(MITOS[0][1]) + 30)}" text-anchor="middle">ox-mtDNA</text></g>`;
      s += `<g class="c-lab acc fx l-ring"><text x="${f1(rx)}" y="${f1(ry + rr + 19)}" text-anchor="middle">NLRP3 + ASC speck</text></g>`;
      s += `<g class="c-lab acc fx l-il"><text x="${f1(rx + 150)}" y="${f1(ry - 150)}" text-anchor="middle">IL-1β</text></g>`;
    }
    return `<svg class="cell" viewBox="0 0 ${CV.W} ${CV.H}" aria-hidden="true" focusable="false">${s}</svg>`;
  }

  /* ---------- Fig. 1 markup ---------- */
  function fig1HTML() {
    const F = C.fig1;
    return `
      <figure class="fig1 sim" id="fig1" data-flip-id="fig-inflammasome" aria-label="Fig. 1, NLRP3 inflammasome simulation">
        <div class="sim-stage" role="button" tabindex="0" aria-label="${esc(F.stageLabel)}">
          ${cellSVG(true)}
          <canvas role="img" aria-label="${esc(F.alt)}"></canvas>
          <dl class="readout"><dt>${esc(F.readout)}</dt><dd id="f1-il">0</dd></dl>
        </div>
        <div class="f1-ui">
          <ol class="f1-steps" aria-label="Steps">${F.steps.map((s, i) => `<li data-step="${i + 1}"><b>${esc(s.t)}</b><span>${esc(COARSE && s.dTouch ? s.dTouch : s.d)}</span></li>`).join("")}</ol>
          <button class="switch" type="button" role="switch" aria-checked="false" id="ko-switch">
            <span class="switch-track" aria-hidden="true"></span><span>${esc(F.toggle)}</span>
          </button>
        </div>
      </figure>`;
  }
  const cite = (src, doi) => `<span class="cap-src">Source: ${src}${doi ? ` <a href="${esc(doi)}" target="_blank" rel="noopener">${esc(doi.replace("https://", ""))}</a>` : ""}</span>`;

  /* ---------- Fig. 2 markup ---------- */
  const MI = { L: 52, R: 624, T: 40, B: 252, DMAX: 7.6 };
  const miX = (d) => MI.L + (d / MI.DMAX) * (MI.R - MI.L), miY = (v) => MI.B - v * (MI.B - MI.T - 8);
  const MI_KEYS = ["neut", "prom", "repm", "fib"];
  const MI_BASE = { promA: 0.72, promW: 1.5, repmA: 0.82, repmC: 4, repmWl: 1.35, ecmA: 0.86, ecmC: 5.2 };
  const miG = (d, c, wl, wr, a) => Math.exp(-(((d - c) / (d < c ? wl : wr)) ** 2)) * a;
  const miFns = (p) => ({
    neut: (d) => miG(d, 1, 0.45, 1.7, 0.95),
    prom: (d) => miG(d, 1.6, 0.75, p.promW, p.promA),
    repm: (d) => miG(d, p.repmC, p.repmWl, 2.8, p.repmA),
    fib: (d) => miG(d, 3, 1.1, 1.7, 0.62),
    ecm: (d) => p.ecmA / (1 + Math.exp(-(d - p.ecmC) / 0.85)),
  });
  function miPath(f) {
    let d = "";
    for (let x = 0; x <= MI.DMAX + 0.001; x += 0.05) d += `${x ? " L" : "M"}${miX(x).toFixed(1)} ${miY(f(x)).toFixed(1)}`;
    return d;
  }
  function fig2Plot(thumb) {
    const { L, R: Rt, T, B } = MI, X = miX, F = miFns(MI_BASE);
    let s = thumb ? "" : `<defs><clipPath id="mi-clip-fib"><rect class="clipr" x="${L}" y="0" width="${Rt - L + 12}" height="300"/></clipPath></defs>`;
    s += `<rect class="band" x="${X(3)}" y="${T - 6}" width="${X(5) - X(3)}" height="${B - T + 6}"/>`;
    [[0, "MI"], [1, "day 1"], [3, "day 3"], [5, "day 5"], [7, "day 7"]].forEach(([d, t]) => {
      s += `<g class="dl" data-d="${d}">${d ? `<line class="vguide" x1="${X(d)}" y1="${T - 6}" x2="${X(d)}" y2="${B}"/>` : ""}<text class="svg-label${d === 0 ? " b" : ""}" x="${X(d)}" y="${T - 14}" text-anchor="${d === 0 ? "start" : "middle"}">${t}</text></g>`;
    });
    s += `<path class="ax" d="M${L} ${T - 6} V${B} H${Rt + 8}"/>`;
    for (let d = 0; d <= 7; d++) s += `<g class="tk"><line class="tick" x1="${X(d)}" y1="${B}" x2="${X(d)}" y2="${B + 5}"/><text class="svg-label" x="${X(d)}" y="${B + 18}" text-anchor="middle">${d === 7 ? "7+" : d}</text></g>`;
    s += `<text class="svg-label b at" x="${Rt + 8}" y="${B + 36}" text-anchor="end">Days after MI</text>`;
    s += `<g class="at"><text class="svg-label b wide-only" transform="translate(20 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">Relative abundance (schematic)</text>`;
    s += `<text class="svg-label b narrow-only" transform="translate(20 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">Relative abundance</text></g>`;
    s += `<path class="mi-curve c-ecm" data-k="ecm" d="${miPath(F.ecm)}"/>`;
    MI_KEYS.forEach((k) => (s += `<path class="mi-curve c-${k}" data-k="${k}" d="${miPath(F[k])}"${k === "fib" && !thumb ? ' clip-path="url(#mi-clip-fib)"' : ""}/>`));
    if (!thumb) {
      MI_KEYS.forEach((k) => (s += `<path class="hit" data-k="${k}" aria-hidden="true"/>`));
      s += `<g class="day-cursor"><line class="day-line" x1="0" y1="${T - 6}" x2="0" y2="${B}"/>${MI_KEYS.map((k) => `<circle class="dot d-${k}" r="4.5" cx="0" cy="${B}"/>`).join("")}</g>`;
    }
    return thumb
      ? `<svg class="plot mi" viewBox="0 0 650 300" aria-hidden="true" focusable="false">${s}</svg>`
      : `<svg class="plot mi" viewBox="0 0 650 300" role="img" aria-label="Schematic curves over days 0 to 7 after a heart attack: neutrophils peak at day 1; pro-inflammatory macrophages peak around days 1 to 2; reparative macrophages peak around days 3 to 5; fibroblast proliferation peaks around day 3; new collagen rises from day 3 onward.">${s}</svg>`;
  }
  function fig2HTML() {
    const M = C.fig2;
    const legend = MI_KEYS.map((k) => `<button class="mi-key" type="button" data-k="${k}" aria-pressed="false"><svg viewBox="0 0 20 10" aria-hidden="true"><line x1="1" y1="5" x2="19" y2="5" class="mi-curve c-${k}"/></svg>${esc(M.cells[k].label)}</button>`).join("")
      + `<span class="mi-key static"><svg viewBox="0 0 20 10" aria-hidden="true"><line x1="3" y1="5" x2="17" y2="5" class="mi-curve c-ecm"/></svg>${esc(M.ecmLabel)}</span>`;
    const balance = `
      <svg class="balance" viewBox="0 0 300 210" role="img" aria-label="Balance diagram: inflammation feeds both the breakdown of existing extracellular matrix and the synthesis of new matrix. The balance tips toward new matrix as the scar forms.">
        <defs><marker id="mi-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="var(--ink-2)"/></marker></defs>
        <g class="bk b-box"><rect class="box" x="92" y="6" width="116" height="28"/><text class="svg-label b" x="150" y="24" text-anchor="middle">Inflammation</text></g>
        <path class="arrow b-arr" d="M120 34 Q80 50 64 80" marker-end="url(#mi-ah)"/>
        <path class="arrow b-arr" d="M180 34 Q220 50 236 80" marker-end="url(#mi-ah)"/>
        <g class="bk b-ful"><path d="M150 112 L138 140 H162 Z" fill="var(--ink)"/><line x1="120" y1="140" x2="180" y2="140" stroke="var(--ink)" stroke-width="1"/></g>
        <g class="bk b-beam"><g class="beam">
          <line x1="40" y1="112" x2="260" y2="112" stroke="var(--ink)" stroke-width="1.6"/>
          <path d="M40 112 L24 134 M40 112 L56 134" class="arrow"/>
          <path d="M20 134 Q40 148 60 134 Z" fill="var(--paper-2)" stroke="var(--ink)" stroke-width="1"/>
          <path d="M260 112 L244 134 M260 112 L276 134" class="arrow"/>
          <path d="M240 134 Q260 148 280 134 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/>
        </g></g>
        <g class="bk b-l"><text class="svg-label b" x="6" y="174">ECM breakdown</text><text class="svg-label" x="6" y="188">MMP-8, MMP-9</text><text class="svg-label" x="6" y="201">neutrophil elastase</text></g>
        <g class="bk b-r"><text class="svg-label b acc" x="294" y="174" text-anchor="end">New ECM synthesis</text><text class="svg-label" x="294" y="188" text-anchor="end">collagen, periostin</text><text class="svg-label" x="294" y="201" text-anchor="end">SPARC, lysyl oxidase</text></g>
      </svg>`;
    return `
      <figure class="mi-fig" id="fig2" aria-label="Fig. 2, cardiac wound healing">
        <div class="mi-plot">
          <p class="note fig-tag">Fig. 2a · cell populations in the first week</p>
          <div class="flip-box" data-flip-id="fig-heart-repair">${fig2Plot(false)}</div>
          <div class="mi-scrub">
            <input class="range" type="range" min="0" max="${MI.DMAX}" step="0.05" value="0" aria-label="Day after heart attack">
            <div class="mi-scrub-row"><span class="mi-day" aria-hidden="true">Day 0</span><span class="mi-hint note">Drag, or use the arrow keys</span></div>
          </div>
          <div class="mi-keys" role="group" aria-label="Cell types">${legend}</div>
        </div>
        <div class="mi-side">
          <div class="mi-bal"><p class="note fig-tag">Fig. 2b · the central balance</p>${balance}</div>
          <div class="mi-role" aria-live="polite"><h4>${esc(M.pickTitle)}</h4><p>${esc(M.pickText)}</p></div>
          <div class="mi-tx-wrap"><p class="note">Try an intervention</p>
            <div class="mi-tx">${M.tx.map((t) => `<button class="switch" type="button" aria-pressed="false" data-tx="${t.k}"><span class="switch-track" aria-hidden="true"></span><span>${esc(t.t)}<small>${esc(t.d)}</small></span></button>`).join("")}</div>
          </div>
        </div>
      </figure>`;
  }

  /* ---------- Fig. 3 markup ---------- */
  const SH = (() => {
    const L = 60, Rr = 500, T = 46, B = 246, TMAX = 84, YMAX = 220;
    const X = (t) => L + (t / TMAX) * (Rr - L), Y = (v) => B - (v / YMAX) * (B - T);
    const times = [4, 10, 16, 24, 30, 36, 44, 50, 56, 64, 70, 76];
    const vals = [96, 100, 98, 37, 34, 35, 178, 186, 171, 22, 19, 21];
    const errs = [6, 5, 6, 3, 3, 4, 10, 12, 9, 2, 3, 2];
    const pts = times.map((t, i) => [X(t), Y(vals[i])]);
    let acc = 0; const fr = [0];
    for (let i = 1; i < pts.length; i++) { acc += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); fr.push(acc); }
    return { L, Rr, T, B, YMAX, X, Y, errs, pts, fr: fr.map((f) => f / acc) };
  })();
  function seahorseSVG(thumb) {
    const { L, Rr, T, B, YMAX, X, Y, errs, pts } = SH;
    let s = "";
    [0, 50, 100, 150, 200].forEach((v) => {
      s += `<g class="yt"><line class="grid-l" x1="${L}" y1="${Y(v)}" x2="${Rr}" y2="${Y(v)}"/><line class="tick" x1="${L - 5}" y1="${Y(v)}" x2="${L}" y2="${Y(v)}"/><text class="svg-label" x="${L - 9}" y="${Y(v) + 3.5}" text-anchor="end">${v}</text></g>`;
    });
    [0, 20, 40, 60, 80].forEach((t) => {
      s += `<g class="xt"><line class="tick" x1="${X(t)}" y1="${B}" x2="${X(t)}" y2="${B + 5}"/><text class="svg-label" x="${X(t)}" y="${B + 18}" text-anchor="middle">${t}</text></g>`;
    });
    s += `<path class="ax" d="M${L} ${T - 18} V${B} H${Rr + 6}"/>`;
    s += `<g class="at"><text class="svg-label b" transform="translate(16 ${(T + B) / 2}) rotate(-90)" text-anchor="middle">OCR (pmol/min)</text></g>`;
    s += `<text class="svg-label b at" x="${Rr}" y="${B + 36}" text-anchor="end">Time (min)</text>`;
    [[20, "A", "Oligomycin", "Oligo"], [40, "B", "FCCP", "FCCP"], [60, "C", "Rot/AA", "Rot/AA"]].forEach(([t, k, name, short]) => {
      s += `<g class="injg"><line class="inj" x1="${X(t)}" y1="${T - 12}" x2="${X(t)}" y2="${B}"/><g class="inj-head"><path d="M${X(t) - 4} ${T - 22} L${X(t) + 4} ${T - 22} L${X(t)} ${T - 15} Z" fill="var(--ink)"/>`;
      s += `<text class="svg-label b wide-only" x="${X(t)}" y="${T - 27}" text-anchor="middle">${k} · ${name}</text><text class="svg-label b narrow-only" x="${X(t)}" y="${T - 27}" text-anchor="middle">${k} · ${short}</text></g></g>`;
    });
    const ann = (txt, x, y, lead, anchor = "middle", short) => `<g class="ann">${lead ? `<path class="lead" d="${lead}"/>` : ""}<text class="svg-label acc${short ? " wide-only" : ""}" x="${x}" y="${y}" text-anchor="${anchor}">${txt}</text>${short ? `<text class="svg-label acc narrow-only" x="${x}" y="${y}" text-anchor="${anchor}">${short}</text>` : ""}</g>`;
    s += ann("basal", X(10), Y(100) - 26, `M${X(10)} ${Y(100) - 22}V${Y(100) - 8}`);
    s += ann("ATP-linked drop", X(30), Y(37) - 24, `M${X(30)} ${Y(37) - 20}V${Y(37) - 8}`, "middle", "ATP-linked");
    s += ann("maximal", X(50) + 26, Y(186) - 16, `M${X(50) + 12} ${Y(186) - 15}L${X(50) + 4} ${Y(186) - 7}`, "start");
    s += ann("non-mitochondrial", Rr + 14, B - 6, "", "end", "non-mito.");
    s += `<path class="acc-l sh-line" d="M${pts.map((p) => p.join(" ")).join(" L")}"/>`;
    pts.forEach((p, i) => {
      const e = (errs[i] / YMAX) * (B - T);
      s += `<g class="pt-g"><line class="err" x1="${p[0]}" y1="${p[1] - e}" x2="${p[0]}" y2="${p[1] + e}"/><line class="err" x1="${p[0] - 3}" y1="${p[1] - e}" x2="${p[0] + 3}" y2="${p[1] - e}"/><line class="err" x1="${p[0] - 3}" y1="${p[1] + e}" x2="${p[0] + 3}" y2="${p[1] + e}"/><circle class="pt" cx="${p[0]}" cy="${p[1]}" r="3.6"/></g>`;
    });
    return thumb
      ? `<svg class="plot seahorse" viewBox="0 0 520 296" aria-hidden="true" focusable="false">${s}</svg>`
      : `<svg class="plot seahorse" viewBox="0 0 520 296" role="img" aria-label="Illustrative Seahorse Mito Stress Test trace. Oxygen consumption rate is steady at basal level, drops after oligomycin, spikes to maximal respiration after FCCP, and falls to non-mitochondrial respiration after rotenone and antimycin A.">${s}</svg>`;
  }
  const SH_CAP = `<span><b>Fig. 3</b> Seahorse XF Cell Mito Stress Test. Oxygen consumption rate (OCR) at baseline, then after sequential injection of oligomycin (A, ATP synthase inhibitor), FCCP (B, uncoupler), and rotenone/antimycin A (C, complex I/III inhibitors).</span><span class="cap-note">Simplified toy model; parameters illustrative, not lab data.</span><span class="cap-src">Source: standard Agilent Seahorse XF Cell Mito Stress Test design (oligomycin → FCCP → rotenone/antimycin A).</span>`;

  /* ---------- Fig. 4: muscle damage, DMD and satellite cells ---------- */
  const F4A = { AX: [200, 460], TX: 330 };
  function fig4PanelA(thumb) {
    const { AX, TX } = F4A, r = rng(31);
    const lb = (cls, inner) => `<g class="lb ${cls}">${inner}</g>`;
    let s = "";
    s += lb("lb-out", `<text class="svg-label b" x="12" y="20">outside the fiber</text>`);
    s += `<g class="lb lb-alb"><text class="svg-label acc wide-only" x="628" y="20" text-anchor="end">albumin (from the blood)</text><text class="svg-label acc narrow-only" x="628" y="20" text-anchor="end">albumin</text></g>`;
    // albumin: 12 dots outside; the 6 nearest the tear can leak in
    const inside = [[292, 150], [352, 166], [314, 232], [376, 250], [270, 272], [338, 292]];
    const xs = [TX - 52, TX - 30, TX - 10, TX + 12, TX + 34, TX + 56, 196, 236, 470, 520, 566, 606];
    xs.forEach((x, i) => {
      const y = 34 + r() * 8;
      const tgt = inside[i];
      s += `<g class="k-alb"><circle class="alb-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.6"${tgt ? ` data-dx="${(tgt[0] - x).toFixed(1)}" data-dy="${(tgt[1] - y).toFixed(1)}"` : ""}/></g>`;
    });
    const caFrom = [[262, 58], [300, 58], [340, 58], [380, 58], [420, 58]], caTo = [[262, 186], [410, 176], [300, 258], [392, 228], [244, 300]];
    caFrom.forEach(([x, y], i) => (s += `<g class="k-ca"><text class="ca" x="${x}" y="${y}" data-dx="${caTo[i][0] - x}" data-dy="${caTo[i][1] - y}">Ca²⁺</text></g>`));
    // basal lamina with laminin-211
    s += lb("lb-lam", `<text class="svg-label wide-only" x="12" y="60">basal lamina · laminin-211</text><text class="svg-label narrow-only" x="12" y="60">laminin-211</text>`);
    s += `<g class="k-band"><rect class="lam-band" x="0" y="66" width="640" height="14"/></g>`;
    [AX[0], TX, AX[1], 580].forEach((x) => (s += `<path class="lam" d="M${x} 60 V88 M${x - 9} 69 H${x + 9}"/>`));
    // membrane in two halves (it tears at TX), each carrying one dystrophin anchor
    const anchor = (x) => `
      <g class="k-dgc"><g class="dgc"><ellipse class="dg-a" cx="${x}" cy="93" rx="5" ry="8"/><rect class="dg-b" x="${x - 3}" y="98" width="6" height="22" rx="2"/>
      <rect class="sg" x="${x + 6}" y="100" width="5" height="18" rx="2"/><rect class="sg" x="${x + 13}" y="101" width="5" height="16" rx="2"/></g></g>
      <path class="dys" d="M${x} 124 C${x + 16} 146, ${x - 16} 172, ${x} 194"/>`;
    s += `<g class="a-body">`;
    s += `<g class="seg-l"><g class="k-mem l"><rect class="mem" x="-20" y="104" width="${TX + 20}" height="10"/></g>${anchor(AX[0])}</g>`;
    s += `<g class="seg-r"><g class="k-mem r"><rect class="mem" x="${TX}" y="104" width="${660 - TX}" height="10"/></g>${anchor(AX[1])}</g>`;
    s += `<path class="tearmark" d="M${TX - 12} 101 l4 4 -4 4 4 4 M${TX + 12} 101 l-4 4 4 4 -4 4"/>`;
    s += `</g>`;
    // actin cytoskeleton
    s += `<g class="actin">`;
    for (let x = 14, i = 0; x <= 626; x += 9, i++) s += `<circle class="act" cx="${x}" cy="${i % 2 ? 199 : 207}" r="4.4"/>`;
    s += `</g>`;
    // labels with leaders
    s += `<g class="lb lb-mem"><path class="lead" d="M40 124V116"/><text class="svg-label wide-only" x="12" y="136">membrane (sarcolemma)</text><text class="svg-label narrow-only" x="12" y="136">membrane</text></g>`;
    s += `<g class="lb lb-dys"><path class="lead healthy-only" d="M${AX[0] + 22} 160H${AX[0] + 6}"/><text class="svg-label b healthy-only" x="${AX[0] + 26}" y="164">dystrophin</text><text class="svg-label b dmd-only" x="${AX[0] + 26}" y="164">no dystrophin</text></g>`;
    s += `<g class="lb lb-dgc"><path class="lead" d="M${AX[1] + 30} 128L${AX[1] + 21} 114"/><text class="svg-label" x="${AX[1] + 26}" y="140">dystroglycan +</text><text class="svg-label" x="${AX[1] + 26}" y="156">sarcoglycans</text></g>`;
    s += `<g class="lb lb-act"><path class="lead" d="M40 224V213"/><text class="svg-label" x="12" y="236">actin cytoskeleton</text></g>`;
    s += lb("lb-in", `<text class="svg-label b" x="12" y="308">inside the fiber</text>`);
    return thumb
      ? `<svg class="plot dmd-a" viewBox="0 0 640 320" aria-hidden="true" focusable="false">${s}</svg>`
      : `<svg class="plot dmd-a" viewBox="0 0 640 320" role="img" aria-label="Membrane-level diagram. Inside the fiber, actin connects to dystrophin, which links through dystroglycan and sarcoglycans in the membrane to laminin-211 in the basal lamina. Without dystrophin, contraction tears the membrane and calcium and albumin enter the fiber.">${s}</svg>`;
  }
  /* ---------- Fig. 5 markup: contact links as nodes ---------- */
  function fig5HTML() {
    return `
      <figure class="net-fig" aria-labelledby="net-cap">
        <div class="net-stage">
          <svg class="net-lines" aria-hidden="true"></svg>
          <div class="net-center" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${LOGO_PATH}"/></svg></div>
          <ul class="net-links" aria-label="Links">${C.links.map((l) => {
            const ext = /^https?:/.test(l.href);
            return `<li><a class="net-node${l.key === "email" ? "" : " short"}" data-key="${l.key}" href="${esc(l.href)}"${ext ? ' target="_blank" rel="noopener"' : ""} draggable="false"><span class="k">${esc(l.label)}${ext ? ' <span aria-hidden="true">↗</span>' : ""}</span><span class="v">${esc(l.text)}</span></a></li>`;
          }).join("")}</ul>
        </div>
        <figcaption class="note" id="net-cap"><b>Fig. 5</b> ${esc(C.contact.caption)}</figcaption>
      </figure>`;
  }

  /* ======================================================================
     VIEWS
     ====================================================================== */
  const split = (s) => s.split(" · ");
  const pager = (prev, next, all) => `
    <nav class="pager" aria-label="More">
      <div class="pager-back">${all ? ink(all[0], esc(all[1])) : ""}${prev ? ink(prev[0], `<span aria-hidden="true">←</span> ${esc(prev[1])}`) : ""}</div>
      ${next ? `<a class="pager-next" href="${next[0]}"><span class="note">Next</span><span class="pager-title">${esc(next[1])}</span>${ARROW}</a>` : ""}
    </nav>`;
  const resPager = (i) => pager(i > 0 ? [href(`research/${RES[i - 1].id}`), RES[i - 1].title] : null, RES[i + 1] ? [href(`research/${RES[i + 1].id}`), RES[i + 1].title] : [href("ventures"), C.venture.name], [href("research"), "All research"]);
  const caption = (html) => `<aside class="cap" data-rise>${html}</aside>`;
  const step = (html, cls = "") => `<div class="step ${cls}">${html}</div>`;

  function aboutHTML() {
    const K = C.contact;
    return `
      <div class="hero">
        <p class="hero-tag" data-lines>${esc(C.tagline)}</p>
        <div class="hero-fig">
          <div class="fig1-slot" data-slot="about">${fig1HTML()}</div>
          <p class="note hero-fignote"><b>Fig. 1</b> A primed macrophage. ${esc(COARSE ? C.fig1.steps[0].dTouch : C.fig1.steps[0].d)}, or ${ink(href("research/inflammasome"), "take it apart", 'data-flip="fig-inflammasome"')}.</p>
        </div>
        <h1 class="name" id="page-title"><span class="sr-only">${esc(C.name)}</span><svg class="name-svg" aria-hidden="true" focusable="false"></svg><span class="name-fallback" aria-hidden="true">${esc(C.name)}</span></h1>
        <ul class="hero-meta note">${[...split(C.eyebrow), ...split(C.heroMeta)].map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>
      <section class="abstract" aria-labelledby="h-abstract">
        <h2 class="side-h" id="h-abstract" data-rise>${esc(C.abstract.title)}</h2>
        <div class="abstract-body">
          <p class="abstract-lead" data-lines>${esc(C.abstract.text[0])}</p>
          <div class="abstract-rest">${C.abstract.text.slice(1).map((p) => `<p data-rise>${esc(p)}</p>`).join("")}
            <p class="note" data-rise>${ink(href("research"), "Research")} &nbsp; ${ink(href("ventures"), "Ventures")}</p></div>
        </div>
      </section>
      <section class="me" aria-labelledby="h-me">
        <h2 class="me-h" id="h-me" data-lines>${esc(C.aboutMe.title)}</h2>
        <div class="me-body">
          <aside class="edu-float" aria-label="Education" data-rise>${C.education.map((e) => `
            <div class="edu"><h3>${esc(e.school)}</h3><p class="note">${esc(e.when)}</p>${e.lines.map((l) => `<p class="note">${esc(l)}</p>`).join("")}</div>`).join("")}
          </aside>
          ${C.aboutMe.text.map((p, i) => `<p${i ? "" : ' class="drop"'} data-rise>${esc(p)}</p>`).join("")}
        </div>
      </section>
      <section class="contact story" id="contact" aria-labelledby="h-contact" data-story="pin">
        <div class="contact-head">
          <h2 class="contact-h" id="h-contact">${esc(K.title)}</h2>
          <p class="contact-lede">${esc(K.lede)}</p>
          <p><button class="btn" type="button" data-copy="${esc(C.links[0].text)}">${esc(K.copy)}</button></p>
        </div>
        ${fig5HTML()}
      </section>`;
  }

  function researchIndexHTML() {
    const plates = { inflammasome: cellSVG(false), "heart-repair": fig2Plot(true), seahorse: seahorseSVG(true), "muscle-dmd": fig4PanelA(true) };
    return `
      <header class="idx-head">
        <h1 class="display" id="page-title-research" data-chars>${esc(R.title)}</h1>
        <p class="idx-lede" data-rise>${esc(C.abstract.text[1])}</p>
      </header>
      <ol class="idx">${RES.map((s, i) => `
        <li class="idx-row r${i}${plates[s.id] ? "" : " no-plate"}">
          ${plates[s.id] ? `<a class="plate" href="${href(`research/${s.id}`)}" data-flip="fig-${s.id}" data-flip-id="fig-${s.id}" aria-label="${esc(s.fig)}: ${esc(s.title)}" tabindex="-1">${plates[s.id]}</a>` : ""}
          <div class="idx-text" data-rise>
            <h2 class="idx-title">${ink(href(`research/${s.id}`), esc(s.title), plates[s.id] ? `data-flip="fig-${s.id}"` : "")}</h2>
            <p class="note">${s.fig ? `<b>${esc(s.fig)}</b> · ` : ""}${esc(s.note)}</p>
            ${s.id === "methods" ? `<p class="note idx-terms">${C.methods.map((m) => esc(m.h)).join(" · ")}</p>` : ""}
          </div>
        </li>`).join("")}
      </ol>`;
  }

  const detailHead = (o) => `
    <header class="d-head">
      <h1 class="d-title" data-lines>${esc(o.title)}</h1>
      <p class="note d-note" data-rise>${split(o.note).map(esc).join("<br>")}</p>
    </header>`;
  const labLead = (o) => `<p class="lead">${esc(o.lab)}</p><p class="note">Source: <a href="${esc(o.labSrc.url)}" target="_blank" rel="noopener">${esc(o.labSrc.text)}</a></p>`;

  function inflammasomeHTML() {
    const I = R.inflammasome, F = C.fig1, FC = C.fig1chain;
    return `
      <section class="chain">
        <div class="chain-intro">
          ${detailHead({ title: I.title, note: I.kicker })}
          <div class="prose" data-rise>${labLead(I)}<p>${esc(I.text[0])}</p><p>${esc(I.text[1].replace(" Fig. 1 walks through the steps.", ""))}</p></div>
        </div>
        <figure id="fig1-chain" aria-label="Fig. 1, NLRP3 inflammasome signal chain"></figure>
      </section>
      <section class="after">
        <p class="after-lead" data-lines>${esc(I.text[2])}</p>
        ${caption(`<span><b>Fig. 1</b> ${esc(FC.caption)}</span><span class="cap-note">${FC.note}</span>${cite(F.source, F.doi)}`)}
      </section>
      ${resPager(0)}`;
  }

  function heartHTML() {
    const M = C.fig2, H = R.heart;
    return `
      <div class="d-top">${detailHead({ title: H.title, note: H.kicker })}</div>
      <section class="story pinned heart" data-story="pin">
        <div class="pin-steps">
          ${step(`<p>${esc(H.text[0])}</p>`)}
          ${M.phases.map((p) => step(`<p class="step-day">${esc(p.day)}</p>${runIn(p.title, esc(p.text))}`)).join("")}
          ${step(`<p>${esc(H.text[1])}</p><p class="bridge">${ink(href("research/inflammasome"), esc(M.bridge))}</p>`)}
        </div>
        <div class="stage">${fig2HTML()}</div>
      </section>
      <section class="after">
        ${caption(`<span><b>Fig. 2</b> ${esc(M.caption)}</span><span class="cap-note">${esc(M.note)}</span>${cite(M.source, M.doi)}`)}
      </section>
      ${resPager(1)}`;
  }

  function seahorseHTML() {
    const S = R.seahorse, t = S.text[1].match(/[^.]+\./g).map((x) => x.trim());
    return `
      <section class="chain">
        <div class="chain-intro">
          ${detailHead({ title: S.title, note: S.kicker })}
          <div class="prose" data-rise><p class="lead">${esc(S.text[0])}</p><p>${esc(t[0])} ${esc(t[1])}</p></div>
        </div>
        <figure id="fig3-chain" aria-label="Fig. 3, Seahorse Mito Stress Test signal chain"></figure>
      </section>
      <section class="after">${caption(SH_CAP)}</section>
      ${resPager(2)}`;
  }

  function muscleHTML() {
    const Mu = R.muscle, T = C.fig4, FC = C.fig4chain;
    return `
      <section class="chain">
        <div class="chain-intro">
          ${detailHead({ title: Mu.title, note: Mu.kicker })}
          <div class="prose" data-rise>${labLead(Mu)}<p>${esc(Mu.text[0])} ${esc(Mu.text[1])}</p></div>
        </div>
        <figure id="fig4-chain" aria-label="Fig. 4, muscle damage and repair signal chain"></figure>
      </section>
      <section class="after">
        ${caption(`<span><b>Fig. 4</b> ${esc(FC.caption)}</span><span class="cap-note">${esc(FC.label)}</span><span class="cap-src">Source: ${esc(T.source)} <a href="${esc(Mu.labSrc.url)}" target="_blank" rel="noopener">${esc(Mu.labSrc.text)}</a></span>`)}
      </section>
      ${resPager(3)}`;
  }

  function methodsHTML() {
    return `
      <div class="d-top">${detailHead({ title: C.methodsPage.title, note: C.methodsPage.lede })}</div>
      <ol class="methods">${C.methods.map((m) => `
        <li class="method" data-rise>
          <h2>${esc(m.h)}</h2>
          <p>${esc(m.p)}</p>
          <p class="note terms">${m.terms.map(esc).join("<br>")}</p>
        </li>`).join("")}
      </ol>
      ${resPager(4)}`;
  }

  function venturesHTML() {
    const V = C.venture;
    return `
      <section class="story scrolly fig-right ven" data-story="scroll">
        <div class="steps">
          <div class="intro">
            <header class="ven-head">
              <h1 class="display ven-name" data-chars><img class="cq-mark" src="assets/coquest/coquest-mark.svg" alt="CoQuest logo" width="64" height="64">${esc(V.name)}</h1>
              <p class="note d-note" data-rise>${split(V.kicker).map(esc).join("<br>")}</p>
            </header>
            <p class="cq-tagline" data-lines>${esc(V.tagline)}</p>
          </div>
          ${V.text.map((p) => step(`<p>${esc(p)}</p>`)).join("")}
        </div>
        <div class="stage-col"><div class="stage">
          <figure class="deck-fig" aria-label="A quest card from CoQuest">
            <div class="deck">
              <div class="qcard" data-qcard>
                <svg class="q-outline" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true"><rect x="1" y="1" width="398" height="498" rx="18"/></svg>
                <span class="q-sheet s2" aria-hidden="true"></span><span class="q-sheet s1" aria-hidden="true"></span>
                <span class="qcard-inner">
                  <span class="qface front" aria-live="polite" data-qfront>
                    <span class="q-photo"><img alt="" width="720" height="480"><span class="q-credit"></span></span>
                    <span class="q-area"></span><span class="q-title"></span><span class="q-hook"></span>
                    <span class="q-vibes">${[0, 1, 2, 3].map(() => `<span class="q-vibe"><img alt="" width="28" height="28"><span></span></span>`).join("")}</span>
                  </span>
                  <span class="qface back" aria-hidden="true"><img src="assets/coquest/coquest-mark.svg" alt=""><span class="q-small">CoQuest</span></span>
                </span>
              </div>
              <div class="deck-row">
                <button class="btn press" type="button" data-draw>${esc(V.deckButton)}</button>
                <span class="note" data-qcount></span>
              </div>
              <p class="note deck-intro">${esc(V.deckIntro)}</p>
            </div>
          </figure>
        </div></div>
      </section>
      <section class="facts-sec">
        <dl class="facts">${V.facts.map((f) => `<div data-rise><dd>${f.text ? esc(f.text) : count(f.n)}${f.unit ? `<span class="unit">${esc(f.unit)}</span>` : ""}</dd><dt class="note">${esc(f.label)}</dt></div>`).join("")}</dl>
        <p class="ven-link" data-rise>${ink(V.url, `Visit ${esc(V.urlText)} <span aria-hidden="true">↗</span>`, 'target="_blank" rel="noopener"')}</p>
      </section>
      ${pager([href("research"), "Research"], [href("experience/clinical"), "Experience"])}`;
  }

  function rowsHTML(arr) {
    return `<ol class="rows">${arr.map((r) => `
      <li data-rise>
        <p class="note when">${esc(r.when)}</p>
        <div class="row-main"><h2>${esc(r.role)}</h2><p class="note org">${esc(r.org)}</p></div>
        <div class="row-body">${r.text ? `<p>${esc(r.text)}</p>` : ""}${r.metric ? `<p class="note metric">${esc(r.metric)}</p>` : ""}</div>
      </li>`).join("")}</ol>`;
  }
  function expHTML(id) {
    const K = C.clinical, i = EXP.findIndex((x) => x.id === id), me = EXP[i];
    const flow = `
      <header class="exp-head">
        <p class="exp-word" aria-hidden="true">${esc(E.title)}</p>
        <nav class="flow" aria-label="Experience sections">${EXP.map((x) => `<a class="ink flow-link" href="${href(`experience/${x.id}`)}"${x.id === id ? ' aria-current="page"' : ""}><span class="ink-t">${esc(x.tab)}</span></a>`).join('<span class="flow-sep" aria-hidden="true">/</span>')}</nav>
      </header>`;
    let body = "";
    if (id === "clinical") {
      body = `
        <div class="clin">
          <div class="clin-num" aria-label="${K.hours}+ hours shadowing"><span class="clin-n">${count(K.hours)}<sup>+</sup></span><span class="note">hours shadowing</span></div>
          <div class="clin-text">
            <h1 class="d-title" data-lines>${esc(K.title)}</h1>
            <p class="note d-note" data-rise>${split(K.kicker).map(esc).join("<br>")}</p>
            <div class="prose" data-rise><p class="lead">${esc(K.role)}</p>${paras(K.text)}</div>
          </div>
          <dl class="clin-kv">
            ${[["Shadowed", K.shadowed], ["Practiced", K.practiced], ["Observed", K.observed]].map(([k, v]) => `<div data-rise><dt class="note">${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
          </dl>
        </div>`;
    } else if (id === "awards") {
      const stats = C.honorStats.map((h) => `
        <li class="honor" data-rise>
          <p class="ratio" aria-label="${esc(h.big.map((b) => b.n != null ? fmt(b.n) : b.of || b.txt).join(" "))}">${h.big.map((b) =>
            b.n != null ? count(b.n) : b.of ? `<span class="of">${esc(b.of)}</span>` : `<span class="slash">${esc(b.txt)}</span>`).join("")}</p>
          <div class="honor-text"><h2>${esc(h.title)}</h2><p>${esc(h.note)}</p></div>
          <p class="note honor-meta"><span class="pool">${esc(h.pool.pre)}${h.pool.n != null ? count(h.pool.n) : esc(h.pool.txt)}${esc(h.pool.post || "")}</span><br>${esc(h.date)}</p>
        </li>`).join("");
      const list = C.honorList.map((h) => `<li data-rise><span class="t">${esc(h.t)}</span><span class="note">${[h.s, h.d].filter(Boolean).map(esc).join(" · ")}</span></li>`).join("");
      body = `<div class="d-top">${detailHead({ title: me.title, note: E.awards.lede })}</div><ol class="honors">${stats}</ol><ul class="honor-list">${list}</ul>`;
    } else {
      body = `<div class="d-top">${detailHead({ title: me.title, note: E[id].lede })}</div>${rowsHTML(C[id])}`;
    }
    const next = EXP[i + 1], prev = EXP[i - 1];
    return `${flow}${body}${pager(prev ? [href(`experience/${prev.id}`), prev.title] : [href("ventures"), C.venture.name], next ? [href(`experience/${next.id}`), next.title] : [href("about#contact"), C.contact.title])}`;
  }

  /* ======================================================================
     BUILD
     ====================================================================== */
  const navEl = $("[data-nav]"), viewsEl = $("[data-views]");
  navEl.innerHTML = PAGES.map((p) => `<a class="nav-link" data-id="${p.id}" href="${href(TOP_HREF[p.id])}"><span class="ink-t">${esc(p.tab)}</span></a>`).join("");
  const builders = {
    about: aboutHTML, research: researchIndexHTML, "research/inflammasome": inflammasomeHTML, "research/heart-repair": heartHTML,
    "research/seahorse": seahorseHTML, "research/muscle-dmd": muscleHTML, "research/methods": methodsHTML, ventures: venturesHTML,
  };
  viewsEl.innerHTML = VIEWS.map((v) => `<article class="view v-${v.id.replace("/", " v-")}" id="view-${v.id.replace("/", "-")}" hidden>${v.top === "experience" ? expHTML(v.sub) : builders[v.id]()}</article>`).join("");
  $("[data-footer]").textContent = `© ${new Date().getFullYear()} ${C.footer}`;
  $("[data-skip]").addEventListener("click", (e) => { e.preventDefault(); viewsEl.focus(); });

  /* ======================================================================
     NAME — single-stroke outline that draws, then fills; letters lean away from the cursor
     ====================================================================== */
  const NameSig = (() => {
    const h1 = $(".name"), svgEl = $(".name-svg", h1), fallback = $(".name-fallback", h1);
    let built = false, letters = [], vb = null, raf = 0;
    const m = { x: -9999, y: -9999 };
    function build() {
      if (built) return;
      const view = viewEl("about"), was = view.hidden;
      view.hidden = false; // the text has to be laid out to be measured
      svgEl.innerHTML = `<text x="0" y="0">${esc(C.name)}</text>`;
      const tx = svgEl.firstChild;
      let bb = null;
      try { bb = tx.getBBox(); } catch (e) { bb = null; }
      if (!bb || !bb.width) { svgEl.innerHTML = ""; fallback.style.opacity = "1"; view.hidden = was; return; }
      const chars = [...C.name];
      const pos = chars.map((_, i) => { try { return tx.getStartPositionOfChar(i).x; } catch (e) { return 0; } });
      vb = { x: bb.x - 3, y: bb.y + bb.height * 0.12, w: bb.width + 6, h: bb.height * 0.82 };
      svgEl.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
      let html = "";
      chars.forEach((ch, i) => { if (ch !== " ") html += `<g><text x="${pos[i].toFixed(2)}" y="0" style="letter-spacing:0">${esc(ch)}</text></g>`; });
      svgEl.innerHTML = html;
      letters = $$("g", svgEl).map((g) => {
        const b = g.firstChild.getBBox();
        return { g, cx: b.x + b.width / 2, cy: b.y + b.height / 2, x: 0, y: 0, vx: 0, vy: 0 };
      });
      fallback.remove();
      svgEl.classList.add("ready");
      built = true;
      view.hidden = was;
    }
    // each letter's outline draws while it hangs slightly out of place, then it drops in and settles with a little overshoot
    function timeline() {
      const tl = gsap.timeline();
      letters.forEach((L, i) => {
        const t = L.g.firstChild, at = i * 0.085, dir = i % 2 ? 1 : -1;
        tl.fromTo(t, { strokeDasharray: 1100, strokeDashoffset: 1100, fillOpacity: 0 }, { strokeDashoffset: 0, duration: 1.25, ease: "power2.inOut" }, at)
          .fromTo(t, { y: -30 - (i % 3) * 9, rotation: dir * (6 + (i % 3) * 3), transformOrigin: "50% 100%" }, { y: 0, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.42)" }, at + 0.8)
          .to(t, { fillOpacity: 1, duration: 0.5, ease: "power1.out" }, at + 0.9)
          .call(() => Sound.play("slot", i), null, at + 0.92);
      });
      return tl;
    }
    function step() {
      const r = svgEl.getBoundingClientRect();
      const s = r.width / vb.w;
      let energy = 0;
      letters.forEach((L) => {
        const sx = r.left + (L.cx - vb.x) * s, sy = r.top + (L.cy - vb.y) * s;
        const dx = sx - m.x, dy = sy - m.y, d = Math.hypot(dx, dy);
        let tx = 0, ty = 0;
        if (d < 190 && d > 0.01) { const f = (1 - d / 190) ** 2 * 9 / s; tx = (dx / d) * f; ty = (dy / d) * f; }
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
      document.documentElement.addEventListener("pointerleave", () => { m.x = m.y = -9999; if (built && h1.offsetParent && !raf) raf = requestAnimationFrame(step); });
    }
    return { build, timeline };
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
    const COL = { ink: css("--ink"), ink2: css("--ink-2"), ink3: css("--ink-3"), acc: css("--accent"), paper: css("--paper"), paper3: css("--paper-3") };
    const { SLOTS, PRO_N, RING_R, RING, NUC, inNucleus, freeSpot } = CELL;
    let live = false; // the canvas simulation only runs once the SVG kit has assembled
    let W = 0, H = 0, R = 1, CX = 0, CY = 0, t = 0, last = 0, raf = 0, running = false, visible = false;
    let ko = false, filled = 0, speck = 0, complete = false, released = 0, resetAt = 0, uiKey = "", kbIdx = 0;
    const ptr = { u: 9, v: 9, on: false, until: 0 };
    const mitos = CELL.MITOS
      .map(([u, v, a]) => ({ u, v, a, glow: 0, ou: 0, ov: 0, vu: 0, vv: 0, cd: 0 }));
    let dna = [], monos = [], pros = [], il = [], pulses = [];

    const mem = (th) => 1 + (REDUCE ? 0 : 0.045 * Math.sin(3 * th + t * 0.35) + 0.03 * Math.sin(5 * th - t * 0.25));
    // every run starts from the same layout as the SVG kit, so the hand-off between the two is seamless
    function seed() {
      monos = CELL.monos.map((m) => ({ u: m.u, v: m.v, vu: 0, vv: 0, slot: -1, rot: m.rot }));
      pros = CELL.pros.map((p) => ({ u: p.u, v: p.v, vu: 0, vv: 0, a: 1 }));
      dna = []; il = []; filled = 0; speck = 0; complete = false;
      pickLabels();
    }
    let proLbl = 0, monoLbl = 0;
    function pickLabels() { monoLbl = CELL.best(monos); proLbl = CELL.best(pros); }
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
        if (speck >= 1) { complete = true; Sound.play("success"); glow(stage); announce(F.msg.ready); }
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
        ctx.fillStyle = COL.paper3; ctx.fill();
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
      ctx.beginPath(); ctx.moveTo(X(-0.893), Y(0.952)); ctx.lineTo(X(-0.744), Y(0.756)); ctx.lineWidth = 1; ctx.strokeStyle = COL.ink3; ctx.stroke();
      label("macrophage", X(-1.143), Y(1.0), COL.ink2);
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
    function start() { if (running || !visible || !live || document.hidden) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }
    function reset() {
      t = 0; seed(); pulses = []; resetAt = 0;
      mitos.forEach((m) => { m.glow = m.ou = m.ov = m.vu = m.vv = m.cd = 0; });
      uiKey = ""; draw(); ui();
    }
    function setLive(on) {
      if (on === live) return;
      live = on; fig.classList.toggle("live", on);
      if (on) { reset(); start(); } else stop();
    }
    function showCount(n) { if (n == null) { uiKey = ""; ui(); } else ilOut.textContent = n; }

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
    return { el: fig, resize, setLive, showCount, get live() { return live; } };
  })();

  /* ======================================================================
     FIG. 1 (research page) — INFLAMMASOME SIGNAL CHAIN, built with figure-engine.js.
     A toy model: every parameter is illustrative. Nothing here is lab data.
       priming      dN/dt = k1·S1 − d·N            NLRP3 and pro-IL-1β expression
       mtDNA        dM/dt = k2·CMPK2·S2 − d·M      oxidized mtDNA in the cytosol
       assembly     A = N · Mⁿ / (Kⁿ + Mⁿ)         NLRP3/ASC assembly (Hill function of M, scaled by N)
       caspase-1    dC/dt = k3·A − d·C
       IL-1β        dI/dt = k4·C                   mature IL-1β released (cumulative)
     ====================================================================== */
  const HEART_BPM = 72; // the connector pulse beats at this rate
  const Chain1 = (() => {
    const root = $("#fig1-chain");
    if (!root || !window.FigureEngine) return null;
    const FC = C.fig1chain, { NUC, MITOS, RING, RING_R, monos, pros } = CELL;
    const sub = (t, n, k) => ({ t, sub: String(n), k });

    // The cell: parts appear with priming (N), oxidized mtDNA with M, the ring and ASC speck with A,
    // a halo with caspase-1 activity (C), and IL-1β leaves the cell with I.
    const KEY = [["NLRP3", "N", "tri"], ["ASC speck", "A", "speck"], ["caspase-1", "C", "halo"], ["pro-IL-1β", "N", "ring"], ["IL-1β", "I", "dot"], ["ox-mtDNA", "M", "dna"]];
    function squiggle(ctx, x, y, w, ph) {
      ctx.beginPath();
      for (let k = 0; k <= 8; k++) { const px = x - w / 2 + (k / 8) * w, py = y + Math.sin(k * 1.4 + ph) * w * 0.16; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke();
    }
    function glyph(ctx, kind, x, y, ui, k) {
      const c = ui.col;
      ctx.lineWidth = 1.2;
      if (kind === "tri") { ctx.fillStyle = ui.tone(k, c.ink); ctx.beginPath(); ctx.moveTo(x + 4.5, y); ctx.lineTo(x - 3, y + 3.8); ctx.lineTo(x - 3, y - 3.8); ctx.closePath(); ctx.fill(); }
      else if (kind === "speck") { ctx.fillStyle = c.acc; ctx.beginPath(); ctx.arc(x, y, 4.6, 0, 6.3); ctx.fill(); }
      else if (kind === "halo") { ctx.strokeStyle = c.acc; ctx.setLineDash([2.5, 2.5]); ctx.beginPath(); ctx.arc(x, y, 4.6, 0, 6.3); ctx.stroke(); ctx.setLineDash([]); }
      else if (kind === "ring") { ctx.strokeStyle = ui.tone(k, c.ink2); ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.3); ctx.stroke(); }
      else if (kind === "dot") { ctx.fillStyle = c.acc; ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 6.3); ctx.fill(); }
      else { ctx.strokeStyle = c.acc; ctx.lineWidth = 1.4; squiggle(ctx, x, y, 11, 0.6); }
    }
    function diagram(ctx, d, s, ui) {
      const c = ui.col, b = ui.build, LEG = 40;
      const Rr = Math.min(d.w, d.h - LEG) * 0.37, cx = d.x + d.w / 2, cy = d.y + (d.h - LEG) / 2;
      const X = (u) => cx + u * Rr, Y = (v) => cy + v * Rr, u01 = (x) => clamp(x, 0, 1), ez = (x) => { x = u01(x); return x * x * (3 - 2 * x); };
      const N = u01(s.N), M = u01(s.M), A = u01(s.A), Cc = u01(s.C), I = u01(s.I / 1.1);
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      // membrane draws itself
      ui.alpha(1); ctx.strokeStyle = c.ink; ctx.lineWidth = 1.5;
      ctx.beginPath();
      const n = Math.round(96 * b);
      for (let i = 0; i <= n; i++) {
        const th = (i / 96) * Math.PI * 2 - 2.2, r = (1 + 0.045 * Math.sin(3 * th) + 0.03 * Math.sin(5 * th)) * Rr;
        if (i) ctx.lineTo(cx + Math.cos(th) * r, cy + Math.sin(th) * r); else ctx.moveTo(cx + Math.cos(th) * r, cy + Math.sin(th) * r);
      }
      if (n) ctx.stroke();
      const pa = u01(b * 2 - 1); // organelles settle in once the outline is halfway round
      if (pa <= 0) return;
      // nucleus
      ui.alpha(pa, "N"); ctx.strokeStyle = ui.tone("N", c.ink3); ctx.lineWidth = ui.on("N") ? 1.8 : 1.2;
      ctx.beginPath(); ctx.ellipse(X(NUC.u), Y(NUC.v), NUC.rx * Rr, NUC.ry * Rr, NUC.a, 0, 6.3); ctx.stroke();
      ctx.fillStyle = ui.tone("N", c.ink2); ctx.font = ui.mono(9.5); ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("nucleus", X(NUC.u), Y(NUC.v));
      ui.hit("N", X(NUC.u), Y(NUC.v), NUC.ry * Rr);
      // mitochondria
      const L = Rr * 0.23, Wd = Rr * 0.1;
      MITOS.forEach(([u, v, a]) => {
        ctx.save(); ctx.translate(X(u), Y(v)); ctx.rotate(a);
        ui.alpha(pa, "M"); ctx.strokeStyle = ui.tone("M", c.ink2); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(-L / 2 + Wd / 2, -Wd / 2); ctx.lineTo(L / 2 - Wd / 2, -Wd / 2); ctx.arc(L / 2 - Wd / 2, 0, Wd / 2, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(-L / 2 + Wd / 2, Wd / 2); ctx.arc(-L / 2 + Wd / 2, 0, Wd / 2, Math.PI / 2, -Math.PI / 2); ctx.stroke();
        ctx.lineWidth = 0.9; ctx.beginPath();
        for (let k = 0; k <= 6; k++) { const px = -L / 2 + Wd * 0.5 + (k / 6) * (L - Wd), py = (k % 2 ? 1 : -1) * Wd * 0.22; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
        ctx.stroke(); ctx.restore();
        ui.hit("M", X(u), Y(v), L * 0.55);
      });
      // oxidized mtDNA leaves the mitochondria and drifts toward NLRP3
      for (let i = 0; i < 8; i++) {
        const f = u01(M * 8 - i); if (f <= 0) continue;
        const [u, v] = MITOS[i % MITOS.length], k = 0.2 + 0.5 * ez(f) * (0.75 + 0.25 * Math.sin(i * 2.1));
        ui.alpha(pa * f, "M"); ctx.strokeStyle = c.acc; ctx.lineWidth = ui.on("M") ? 2 : 1.4;
        squiggle(ctx, X(u + (RING.u - u) * k), Y(v + (RING.v - v) * k), Rr * 0.085, i);
      }
      // pro-IL-1β in the cytosol; caspase-1 turns it into IL-1β, which leaves the cell
      pros.forEach((p, i) => {
        const have = u01(N * pros.length - i), out = ez(I * pros.length - i);
        if (have <= 0 && out <= 0) return;
        const a = Math.atan2(p.v, p.u), far = 1.14 + (i % 3) * 0.055;
        const x = X(p.u + (Math.cos(a) * far - p.u) * out), y = Y(p.v + (Math.sin(a) * far - p.v) * out);
        ctx.beginPath(); ctx.arc(x, y, Math.max(2, Rr * 0.024), 0, 6.3);
        if (out > 0.5) { ui.alpha(pa, "I"); ctx.fillStyle = c.acc; ctx.fill(); ui.hit("I", x, y, 8); }
        else { ui.alpha(pa * Math.max(have, out), "N"); ctx.strokeStyle = ui.tone("N", c.ink2); ctx.lineWidth = 1.1; ctx.stroke(); }
      });
      // caspase-1 activity: a halo around the assembled inflammasome
      const rx = X(RING.u), ry = Y(RING.v), rr = RING_R * Rr;
      if (Cc > 0.01) {
        ui.alpha(pa * Cc, "C"); ctx.strokeStyle = c.acc; ctx.lineWidth = ui.on("C") ? 2 : 1.2; ctx.setLineDash([3, 4]); ctx.lineDashOffset = -ui.t * 6;
        ctx.beginPath(); ctx.arc(rx, ry, rr * 1.75, 0, 6.3); ctx.stroke(); ctx.setLineDash([]);
      }
      ui.hit("C", rx, ry, rr * 1.9);
      // NLRP3 pieces lock into the ring one at a time; the ASC speck grows in the middle
      const tri = Math.max(3.4, Rr * 0.042);
      monos.forEach((m, i) => {
        const th = (i / monos.length) * Math.PI * 2, f = ez(A * monos.length - i);
        const x = X(m.u + (RING.u + Math.cos(th) * RING_R - m.u) * f), y = Y(m.v + (RING.v + Math.sin(th) * RING_R - m.v) * f);
        let dr = th + Math.PI - m.rot; dr = ((dr + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
        const k = f > 0.5 ? "A" : "N";
        ui.alpha(pa * (f > 0 ? Math.max(N, f) : N), k); ctx.fillStyle = ui.tone(k, f > 0.5 ? c.ink : c.ink2);
        ctx.save(); ctx.translate(x, y); ctx.rotate(m.rot + dr * f);
        ctx.beginPath(); ctx.moveTo(tri, 0); ctx.lineTo(-tri * 0.7, tri * 0.8); ctx.lineTo(-tri * 0.7, -tri * 0.8); ctx.closePath(); ctx.fill(); ctx.restore();
      });
      if (A > 0.02) { ui.alpha(pa * 0.92, "A"); ctx.fillStyle = c.acc; ctx.beginPath(); ctx.arc(rx, ry, rr * 0.5 * ez(A), 0, 6.3); ctx.fill(); }
      ui.hit("A", rx, ry, rr * 1.15);
      if (!ui.controls.cmpk2) { ui.alpha(pa); ctx.fillStyle = c.ink; ctx.font = ui.mono(10); ctx.textAlign = "left"; ctx.textBaseline = "top"; ctx.fillText("Cmpk2 deleted: no new mtDNA", d.x + 2, d.y + 1); }
      // key
      const cw = d.w / 3, y0 = d.y + d.h - LEG + 12;
      KEY.forEach(([txt, k, kind], i) => {
        const x = d.x + (i % 3) * cw + 7, y = y0 + Math.floor(i / 3) * 17;
        ui.alpha(pa, k); glyph(ctx, kind, x, y, ui, k);
        ctx.fillStyle = ui.tone(k, c.ink2); ctx.font = ui.mono(10); ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(txt, x + 11, y + 0.5);
        ui.hit(k, x + cw / 2 - 7, y, 8); ui.hit(k, x + 4, y, 8); ui.hit(k, x + 24, y, 8); ui.hit(k, x + 44, y, 8);
      });
    }

    const spec = {
      alt: FC.alt,
      duration: 24, dt: 0.02, unit: "h", ticks: [0, 6, 12, 18, 24],
      scale: { S1: 1, S2: 1, N: 1.25, M: 1.25, A: 1.25, C: 1.25, I: 1.4 },
      controls: [
        { id: "s1", type: "toggle", label: "Signal 1", value: true },
        { id: "s2", type: "toggle", label: "Signal 2", value: true },
        { id: "cmpk2", type: "choice", label: "Cmpk2", value: 1, options: [{ v: 1, label: "WT" }, { v: 0, label: "LysM-Cre deletion" }] },
      ],
      model: {
        setup(c, r) {
          const j = (x, a = 0.09) => x * (1 + (r.u() - 0.5) * 2 * a); // every rebuild lands a little differently
          return { k1: j(0.5), k2: j(0.5), k3: j(0.5), k4: j(0.085), d: 0.5, K: 0.5, n: 4, t1: 0.8 + r.u() * 0.9, t2: 8 + (r.u() - 0.5) * 2, s1: c.s1 ? 1 : 0, s2: c.s2 ? 1 : 0, cmpk2: c.cmpk2, sig: 0.04 };
        },
        init: () => ({ S1: 0, S2: 0, N: 0, M: 0, A: 0, C: 0, I: 0 }),
        step(s, p, t, dt, r) {
          const w = () => p.sig * Math.sqrt(dt) * r.n();
          s.S1 = p.s1 && t >= p.t1 ? 1 : 0;
          s.S2 = p.s2 && t >= p.t2 ? 1 : 0;
          s.N = Math.max(0, s.N + (p.k1 * s.S1 - p.d * s.N) * dt + s.N * w());
          s.M = Math.max(0, s.M + (p.k2 * p.cmpk2 * s.S2 - p.d * s.M) * dt + s.M * w());
          const mn = s.M ** p.n;
          s.A = (s.N * mn) / (p.K ** p.n + mn);
          s.C = Math.max(0, s.C + (p.k3 * s.A - p.d * s.C) * dt + s.C * w());
          s.I += p.k4 * s.C * dt;
        },
      },
      events: [
        { k: "S1", levels: [0.5], note: 0 }, { k: "N", levels: [0.5], note: 2 },
        { k: "S2", levels: [0.5], note: 3 }, { k: "M", levels: [0.5], note: 4 },
        { k: "A", levels: [0.2, 0.5, 0.8], note: 5, step: 1 },
        { k: "C", levels: [0.3, 0.7], note: 7, step: 1 },
        { k: "I", levels: [0.25, 0.5, 0.75, 1], note: 8, step: 1 },
      ],
      panels: [
        {
          id: "prime",
          html: runIn("Priming", "A first signal reaches TLR4 and switches on NF-κB. The macrophage starts making NLRP3 and pro-IL-1β."),
          eq: [{ t: "dN/dt", k: "N" }, " = ", sub("k", 1), "·", sub("S", 1, "S1"), " − d·", { t: "N", k: "N" }],
          say: "Signal 1 turns on NLRP3 and pro-IL-1β (N); both decay.",
          traces: [{ k: "S1", label: sub("S", 1), role: "in" }, { k: "N", label: "N" }],
        },
        {
          id: "mtdna",
          html: runIn("Mitochondria", "CMPK2 is an enzyme mitochondria need to make new DNA. After a second signal, newly made mtDNA is oxidized and enters the cytosol."),
          eq: [{ t: "dM/dt", k: "M" }, " = ", sub("k", 2), "·CMPK2·", sub("S", 2, "S2"), " − d·", { t: "M", k: "M" }],
          say: "Signal 2 yields oxidized mtDNA (M) only if CMPK2 is there.",
          traces: [{ k: "S2", label: sub("S", 2), role: "in" }, { k: "M", label: "M", ref: { v: 0.5, label: "K" } }],
        },
        {
          id: "asm",
          html: runIn(C.fig1.steps[2].t, "NLRP3 assembles with ASC into a ring, one piece at a time."),
          eq: [{ t: "A", k: "A" }, " = ", { t: "N", k: "N" }, " · ", { t: "M", sup: "n", k: "M" }, " / (", { t: "K", sup: "n" }, " + ", { t: "M", sup: "n", k: "M" }, ")"],
          say: "Assembly (A) switches on once M passes the threshold K.",
          traces: [{ k: "N", label: "N", role: "in" }, { k: "M", label: "M", role: "in" }, { k: "A", label: "A" }],
          diagram,
        },
        {
          id: "casp",
          html: runIn("Caspase-1", "The assembled inflammasome switches on caspase-1."),
          eq: [{ t: "dC/dt", k: "C" }, " = ", sub("k", 3), "·", { t: "A", k: "A" }, " − d·", { t: "C", k: "C" }],
          say: "Assembled inflammasomes activate caspase-1 (C).",
          traces: [{ k: "A", label: "A", role: "in" }, { k: "C", label: "C" }],
        },
        {
          id: "il1b",
          html: runIn(C.fig1.steps[3].t, "Active caspase-1 cuts pro-IL-1β into IL-1β, which leaves the cell."),
          eq: [{ t: "dI/dt", k: "I" }, " = ", sub("k", 4), "·", { t: "C", k: "C" }],
          say: "Caspase-1 matures IL-1β (I), which leaves the cell.",
          traces: [{ k: "C", label: "C", role: "in" }, { k: "I", label: "I", readout: "IL-1β released (a.u.)" }],
        },
      ],
      links: [
        { from: "prime", to: "asm", k: "N", label: "N" },
        { from: "mtdna", to: "asm", k: "M", label: "M" },
        { from: "asm", to: "casp", k: "A", label: "A" },
        { from: "casp", to: "il1b", k: "C", label: "C" },
      ],
      outro: `${runIn("Your turn", "Switch a signal off, or switch on the Cmpk2 deletion: it stops new mtDNA synthesis, so the ring never forms.")}<p class="note">${esc(FC.label)}</p>`,
    };
    return window.FigureEngine.create(root, spec, { reduce: !MOTION, bpm: HEART_BPM, note: (i, v) => Sound.play("note", { i, v }) });
  })();

  /* ======================================================================
     FIG. 3 (research page) — SEAHORSE MITO STRESS TEST, built with figure-engine.js.
     A toy model: every parameter is illustrative. Nothing here is lab data.
       ports        A, B, C switch from 0 to 1 at 20, 40 and 60 min (oligomycin, FCCP, rotenone/antimycin A)
       respiration  J = (1 − B)·(J_leak + J_ATP·(1 − A)) + B·J_max
       OCR          OCR = OCR_non-mito + (1 − C)·J, followed with a short lag plus noise; ECAR alongside
       parameters   plateau averages of the trace, then the standard differences between them
     ====================================================================== */
  const Chain3 = (() => {
    const root = $("#fig3-chain");
    if (!root || !window.FigureEngine) return null;
    const LABEL = "Simplified toy model; parameters illustrative, not lab data.";
    const PORTS = [["A", "oligomycin", 0.19, 20], ["B", "FCCP", 0.5, 40], ["C", "rot/AA", 0.81, 60]];
    const MEAS = [3, 10, 17, 23, 30, 37, 43, 50, 57, 63, 70, 77]; // three measurements per phase
    const r0 = rng(31), DOTS = PORTS.map(() => Array.from({ length: 9 }, () => [0.06 + r0() * 0.88, 0.16 + r0() * 0.6]));
    const ez = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };

    // The well: three ports above it empty in order, and each drug spreads through the medium over the cells.
    function well(ctx, d, s, ui) {
      const c = ui.col, b = ui.build, w = Math.min(d.w, 380), x0 = d.x + (d.w - w) / 2, top = d.y + 4;
      const xl = x0 + w * 0.07, xr = x0 + w * 0.93, rim = top + 84, floor = d.y + d.h - 24, surf = rim + 18;
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      // the well outline draws itself
      const pts = [[xl - 12, rim], [xl, rim], [xl, floor], [xr, floor], [xr, rim], [xr + 12, rim]];
      let tot = 0; const seg = [];
      for (let i = 1; i < pts.length; i++) { seg.push(Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); tot += seg[i - 1]; }
      let rem = tot * b;
      ui.alpha(1); ctx.strokeStyle = c.ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length && rem > 0; i++) { const k = Math.min(1, rem / seg[i - 1]); ctx.lineTo(pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k); rem -= seg[i - 1]; }
      ctx.stroke();
      const pa = clamp(b * 2 - 1, 0, 1);
      if (pa <= 0) return;
      // medium and the cell layer
      ui.alpha(pa * 0.55); ctx.fillStyle = c.paper2; ctx.fillRect(xl + 1, surf, xr - xl - 2, floor - surf - 1);
      ui.alpha(pa); ctx.strokeStyle = c.ink3; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(xl + 1, surf); ctx.lineTo(xr - 1, surf); ctx.stroke();
      const nc = 8, cw = (xr - xl - 8) / nc;
      for (let i = 0; i < nc; i++) {
        const cx = xl + 4 + cw * (i + 0.5);
        ctx.strokeStyle = c.ink2; ctx.lineWidth = 1.1; ctx.beginPath(); ctx.ellipse(cx, floor - 1, cw * 0.46, 9, 0, Math.PI, 2 * Math.PI); ctx.stroke();
        ctx.fillStyle = c.ink3; ctx.beginPath(); ctx.arc(cx, floor - 4.5, 1.6, 0, 6.3); ctx.fill();
      }
      ctx.fillStyle = c.ink2; ctx.font = ui.mono(10); ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("cells in one well", (xl + xr) / 2, floor + 13);
      // ports, falling drops, and each drug in the medium
      PORTS.forEach(([k, name, fx], pi) => {
        const v = clamp(s[k], 0, 1), px = x0 + w * fx, ry = top + 20, rh = 36, rw = 20, on = ui.on(k);
        ui.alpha(pa, k); ctx.fillStyle = ui.tone(k, c.ink); ctx.font = ui.mono(10, 500); ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`${k} · ${name}`, px, top + 7);
        ui.alpha(pa * 0.8, k); ctx.fillStyle = c.acc; if (v < 0.97) ctx.fillRect(px - rw / 2 + 1.5, ry + rh * v, rw - 3, rh * (1 - v) - 1);
        ui.alpha(pa, k); ctx.strokeStyle = ui.tone(k, c.ink); ctx.lineWidth = on ? 1.9 : 1.3;
        ctx.beginPath(); ctx.moveTo(px - rw / 2, ry); ctx.lineTo(px - rw / 2, ry + rh); ctx.lineTo(px - 2.5, ry + rh + 7); ctx.lineTo(px - 2.5, ry + rh + 13);
        ctx.moveTo(px + rw / 2, ry); ctx.lineTo(px + rw / 2, ry + rh); ctx.lineTo(px + 2.5, ry + rh + 7); ctx.lineTo(px + 2.5, ry + rh + 13); ctx.stroke();
        ui.hit(k, px, ry + rh / 2, 26);
        if (v > 0.02 && v < 0.97 && !ui.reduce) {
          for (let j = 0; j < 3; j++) {
            const ph = ((ui.now / 420 + j / 3) % 1 + 1) % 1, y = ry + rh + 15 + (surf - ry - rh - 15) * ph * ph;
            ui.alpha(pa * (1 - ph * 0.4), k); ctx.fillStyle = c.acc; ctx.beginPath(); ctx.arc(px, y, 2.4, 0, 6.3); ctx.fill();
          }
        }
        DOTS[pi].forEach(([u, vv], i) => {
          const f = ez(v * DOTS[pi].length - i); if (f <= 0) return;
          const x = xl + 6 + (xr - xl - 12) * (fx + (u - fx) * f), y = surf + 5 + (floor - surf - 22) * vv * f;
          ui.alpha(pa * f, k); ctx.strokeStyle = ctx.fillStyle = c.acc; ctx.lineWidth = on ? 1.8 : 1.2; ctx.beginPath();
          if (pi === 0) { ctx.arc(x, y, 2.3, 0, 6.3); ctx.fill(); }
          else if (pi === 1) { ctx.arc(x, y, 2.6, 0, 6.3); ctx.stroke(); }
          else { ctx.moveTo(x - 2.6, y - 2.6); ctx.lineTo(x + 2.6, y + 2.6); ctx.moveTo(x + 2.6, y - 2.6); ctx.lineTo(x - 2.6, y + 2.6); ctx.stroke(); }
        });
      });
    }

    // On the live trace: where each port fired, and the instrument's discrete measurements.
    function marks(ctx, g, s, ui) {
      const c = ui.col;
      ui.alpha(0.9); ctx.fillStyle = c.ink2; ctx.font = ui.mono(9.5); ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText("pmol/min", g.left + 8, g.top + 5);
      PORTS.forEach(([k, , , t]) => {
        if (g.drawn < t) return;
        const x = Math.round(g.x(t)) + 0.5;
        ui.alpha(0.9, k); ctx.strokeStyle = ui.tone(k, c.ink3); ctx.lineWidth = ui.on(k) ? 1.6 : 1; ctx.setLineDash([2, 3]);
        ctx.beginPath(); ctx.moveTo(x, g.top - 3); ctx.lineTo(x, g.base); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = ui.tone(k, c.ink); ctx.font = ui.mono(10.5, 500); ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(k, x + 5, g.top + 5);
        ui.hit(k, x + 6, g.top + 5, 10);
      });
      MEAS.forEach((t) => {
        if (g.drawn < t) return;
        ui.alpha(1, "OCR"); ctx.fillStyle = c.paper; ctx.strokeStyle = ui.tone("OCR", c.ink); ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.arc(g.x(t), g.y("OCR", g.at("OCR", t)), 3.1, 0, 6.3); ctx.fill(); ctx.stroke();
      });
    }

    // Brackets: each parameter is the gap between two plateaus, drawn once both have been measured.
    const LEVELS = [["base", 2, 58], ["oli", 22, 40], ["fccp", 43, 60], ["nm", 4, 80]];
    const BRACKETS = [ // key, tag, time it stands at, from, to, where the tag sits, how far up
      ["nm", "non-mito", 72, null, "nm", "above", 1], ["basal", "basal", 6, "nm", "base", "right", 0.5], ["atp", "ATP", 27, "oli", "base", "right", 0.5],
      ["leak", "leak", 27, "nm", "oli", "right", 0.5], ["maxr", "max", 46, "nm", "fccp", "right", 0.3], ["spare", "spare", 57, "base", "fccp", "left", 0.5],
    ];
    const TABLE = ["basal", "atp", "leak", "maxr", "spare", "nm"], seen = {};
    function grow(key, on, ui, delay) { // 0 → 1 once `key` has a value (wall-clock, so brackets draw in even when the trace is fast)
      if (!on) { delete seen[key]; return 0; }
      if (ui.reduce) return 1;
      if (seen[key] == null) seen[key] = ui.now;
      return ez((ui.now - seen[key] - (delay || 0)) / 380);
    }
    function brackets(ctx, g, s, ui) {
      const c = ui.col, v = (k) => g.at(k, g.drawn), yv = (x) => g.y("OCR", x);
      ctx.lineCap = "round";
      LEVELS.forEach(([k, t0, t1]) => {
        const f = grow(`L${k}`, v(k) > 0, ui); if (f <= 0) return;
        const y = Math.round(yv(v(k))) + 0.5;
        ui.alpha(0.95, k); ctx.strokeStyle = ui.tone(k, c.ink3); ctx.lineWidth = ui.on(k) ? 1.8 : 1; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(g.x(t0), y); ctx.lineTo(g.x(t0 + (t1 - t0) * f), y); ctx.stroke(); ctx.setLineDash([]);
        ui.hit(k, g.x((t0 + t1) / 2), y, 7);
      });
      BRACKETS.forEach(([k, tag, t, lo, hi, side, up], i) => {
        const f = grow(k, v(k) > 0, ui, i * 110); if (f <= 0) return;
        const x = Math.round(g.x(t)) + 0.5, ya = lo ? yv(v(lo)) : g.bottom, yb = yv(v(hi)), y1 = ya + (yb - ya) * f, on = ui.on(k);
        ui.alpha(1, k); ctx.strokeStyle = c.acc; ctx.lineWidth = on ? 2.4 : 1.4;
        ctx.beginPath(); ctx.moveTo(x - 4, ya); ctx.lineTo(x + 4, ya); ctx.moveTo(x, ya); ctx.lineTo(x, y1); ctx.moveTo(x - 4, y1); ctx.lineTo(x + 4, y1); ctx.stroke();
        ui.alpha(f, k); ctx.fillStyle = ui.tone(k, c.ink); ctx.font = ui.mono(10, 500); ctx.textBaseline = "middle";
        const ty = side === "above" ? yb - 11 : ya + (yb - ya) * up;
        ctx.textAlign = side === "right" ? "left" : "right";
        ctx.fillText(tag, side === "right" ? x + 7 : side === "left" ? x - 7 : g.right, ty);
        ui.hit(k, x, (ya + yb) / 2, 9); ui.hit(k, x + (side === "right" ? 20 : -20), ty, 11);
      });
      // the numbers, top left, filled in as each one is computed
      ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ui.alpha(0.9); ctx.fillStyle = c.ink2; ctx.font = ui.mono(9.5); ctx.fillText("pmol/min", g.left + 8, g.top + 2);
      TABLE.forEach((k, i) => {
        const val = v(k); if (!(val > 0)) return;
        const x = g.left + 8 + (i > 2 ? 58 : 0), y = g.top + 15 + (i % 3) * 12.5, tag = BRACKETS.find((b) => b[0] === k)[1];
        ui.alpha(1, k); ctx.fillStyle = ui.tone(k, c.ink); ctx.font = ui.mono(9.5, 500);
        ctx.fillText(`${tag} ${Math.round(val)}`, x, y);
        ui.hit(k, x + 14, y, 7); ui.hit(k, x + 34, y, 7);
      });
    }

    const J = (sub, k) => ({ t: "J", sub, k });
    const spec = {
      alt: "Three linked panels. Ports A, B and C deliver oligomycin, FCCP and rotenone/antimycin A into a well at 20, 40 and 60 minutes. The simulated oxygen consumption rate holds at baseline, drops after oligomycin, rises to its maximum after FCCP and falls to the non-mitochondrial level after rotenone/antimycin A, with a small ECAR trace above. Brackets on the trace mark non-mitochondrial OCR, basal respiration, ATP-linked respiration, proton leak, maximal respiration and spare capacity. With impaired mitochondria, basal and maximal respiration are lower and the spare capacity is small.",
      duration: 80, dt: 0.05, unit: "min", ticks: [0, 20, 40, 60, 80],
      scale: { A: 1.25, B: 1.9, C: 3.8, OCR: 220, ECAR: 48, base: 220, oli: 220, fccp: 220, nm: 220, basal: 220, atp: 220, leak: 220, maxr: 220, spare: 220 },
      controls: [{ id: "mito", type: "choice", label: "Mitochondria (toy)", value: 1, options: [{ v: 1, label: "Healthy" }, { v: 0, label: "Impaired" }] }],
      model: {
        setup(c, r) {
          const j = (x, a = 0.08) => x * (1 + (r.u() - 0.5) * 2 * a), H = !!c.mito; // every rebuild lands a little differently
          return { nm: j(15), leak: j(H ? 20 : 30), atp: j(H ? 65 : 35), cap: j(H ? 170 : 86), g0: j(H ? 18 : 29), gO: H ? 0.8 : 0.3, tau: 1.3, tauD: 0.7, sig: 2.2, sum: {}, cnt: {} };
        },
        init: (p) => ({ A: 0, B: 0, C: 0, OCR: p.nm + p.leak + p.atp, ECAR: p.g0, base: 0, oli: 0, fccp: 0, nm: 0, basal: 0, atp: 0, leak: 0, maxr: 0, spare: 0 }),
        step(s, p, t, dt, r) {
          PORTS.forEach(([k, , , at]) => { s[k] += ((t >= at ? 1 : 0) - s[k]) * (dt / p.tauD); });
          const droop = 1 - 0.06 * clamp((t - 44) / 16, 0, 1); // uncoupled respiration sags a little
          const mito = (1 - s.B) * (p.leak + p.atp * (1 - s.A)) + s.B * p.cap * droop;
          s.OCR = Math.max(0, s.OCR + (p.nm + (1 - s.C) * mito - s.OCR) * (dt / p.tau) + p.sig * Math.sqrt(dt) * r.n());
          s.ECAR = Math.max(0, s.ECAR + (p.g0 * (1 + p.gO * s.A + 0.12 * s.B - 0.08 * s.C) - s.ECAR) * (dt / p.tau) + 0.7 * Math.sqrt(dt) * r.n());
          // plateaus: the mean of the trace over each measurement window, held once the window closes
          [["base", 10, 19], ["oli", 30, 39], ["fccp", 44, 52], ["nm", 68, 76]].forEach(([k, a, b]) => {
            if (t >= a && t < b) { p.sum[k] = (p.sum[k] || 0) + s.OCR; p.cnt[k] = (p.cnt[k] || 0) + 1; }
            else if (t >= b && !s[k]) s[k] = Math.max(1, p.sum[k] / p.cnt[k]);
          });
          const set = (k, at, x) => { if (t >= at && !s[k] && x != null) s[k] = Math.max(1, x); };
          set("atp", 39.5, s.oli ? s.base - s.oli : null);
          if (s.nm) {
            set("basal", 77, s.base - s.nm); set("leak", 78, s.oli - s.nm); set("maxr", 79, s.fccp - s.nm);
            if (s.maxr && s.basal) set("spare", 79.7, s.maxr - s.basal);
          }
        },
      },
      events: [
        { k: "A", levels: [0.5], note: 0 }, { k: "B", levels: [0.5], note: 2 }, { k: "C", levels: [0.5], note: 4 },
        { k: "OCR", levels: [130, 165], note: 6, step: 1 },
        { k: "base", levels: [1], note: 3 }, { k: "oli", levels: [1], note: 1 }, { k: "atp", levels: [1], note: 5 }, { k: "fccp", levels: [1], note: 7 }, { k: "nm", levels: [1], note: 0 },
        { k: "basal", levels: [1], note: 6 }, { k: "leak", levels: [1], note: 7 }, { k: "maxr", levels: [1], note: 8 }, { k: "spare", levels: [1], note: 9 },
      ],
      panels: [
        {
          id: "inj",
          html: runIn("Injections", "A · Oligomycin: an ATP synthase inhibitor. B · FCCP: an uncoupler. C · Rotenone/antimycin A: complex I/III inhibitors."),
          eq: [{ t: "A", k: "A" }, " = 1[t\u00a0≥\u00a020],  ", { t: "B", k: "B" }, " = 1[t\u00a0≥\u00a040],  ", { t: "C", k: "C" }, " = 1[t\u00a0≥\u00a060]"],
          say: "Port A fires at 20 min, B at 40, C at 60.",
          traces: [{ k: "A", label: "A" }, { k: "B", label: "B" }, { k: "C", label: "C" }],
          diagram: well,
        },
        {
          id: "ocr",
          html: runIn("Oxygen consumption", "Basal: oxygen consumption rate (OCR) at baseline. Oligomycin blocks ATP production, FCCP makes the mitochondria run flat out, and rotenone/antimycin A shut them off."),
          eq: [
            [{ t: "J" }, " = (1 − ", { t: "B", k: "B" }, ")·(", J("leak"), " + ", J("ATP"), "·(1 − ", { t: "A", k: "A" }, ")) + ", { t: "B", k: "B" }, "·", J("max")],
            [{ t: "OCR", k: "OCR" }, " = ", { t: "OCR", sub: "non-mito" }, " + (1 − ", { t: "C", k: "C" }, ")·J"],
          ],
          say: "A removes ATP-linked respiration, B drives it to maximum, C stops it.",
          traces: [{ k: "ECAR", label: "ECAR", role: "in" }, { k: "OCR", label: "OCR" }],
          overlay: marks,
        },
        {
          id: "par",
          html: runIn("Reading the curve", "The shape of the curve shows how hard the mitochondria are working and how much spare capacity they have."),
          eq: [
            [{ t: "non-mito", k: "nm" }, " = OCR after C"],
            [{ t: "basal", k: "basal" }, " = ", { t: "baseline", k: "base" }, " − ", { t: "non-mito", k: "nm" }],
            [{ t: "ATP-linked", k: "atp" }, " = ", { t: "baseline", k: "base" }, " − ", { t: "post-oligo", k: "oli" }],
            [{ t: "proton leak", k: "leak" }, " = ", { t: "post-oligo", k: "oli" }, " − ", { t: "non-mito", k: "nm" }],
            [{ t: "maximal", k: "maxr" }, " = ", { t: "post-FCCP", k: "fccp" }, " − ", { t: "non-mito", k: "nm" }],
            [{ t: "spare", k: "spare" }, " = ", { t: "maximal", k: "maxr" }, " − ", { t: "basal", k: "basal" }],
          ],
          say: "Each bracket is the gap between two plateaus of the trace.",
          traces: [{ k: "OCR", label: "OCR" }],
          overlay: brackets, tall: true,
          listen: ["base", "oli", "fccp", "nm", "basal", "atp", "leak", "maxr", "spare"],
        },
      ],
      links: [
        { from: "inj", to: "ocr", k: "B", label: "A·B·C" },
        { from: "ocr", to: "par", k: "OCR", label: "OCR" },
      ],
      outro: `${runIn("Your turn", "Switch to impaired mitochondria: basal and maximal respiration fall, and the spare capacity shrinks.")}<p class="note">${esc(LABEL)}</p>`,
    };
    return window.FigureEngine.create(root, spec, { reduce: !MOTION, bpm: HEART_BPM, note: (i, v) => Sound.play("note", { i, v }) });
  })();

  /* ======================================================================
     FIG. 4 (research page) — MUSCLE DAMAGE, DMD AND REPAIR, built with figure-engine.js.
     A toy model: every parameter is illustrative. Nothing here is lab data. Time runs in days.
       force        F = F0·bout(t)                               one contraction bout a day
       membrane     σ = F / (1 + g·D);  dP/dt = k·[σ − σ*]₊ + c·CTX − r·P      D = 1 (WT) or 0 (mdx); P = open tears
       Ca²⁺         d[Ca]/dt = j·P − u·[Ca]
       albumin      d[alb]/dt = e·P·(1 − [alb]) − w·[alb]
       necrosis     d[nec]/dt = n·[Ca − θ]₊·[alive] − q·[nec]
       satellite    Pax7 pool → MyoD → myogenin (activated by necrosis), which refills cleared gaps with new fibers
       fibers       40 model fibers move through leaky → necrotic → cleared → new (small, central nucleus) → rebuilt;
                    the cross-section and the size histogram are both drawn from those 40 fibers
     ====================================================================== */
  const Chain4 = (() => {
    const root = $("#fig4-chain");
    if (!root || !window.FigureEngine) return null;
    const FC = C.fig4chain, NF = 40, r4 = rng(4242), ez = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
    const FIB = [];
    for (let j = 0; j < 5; j++) for (let i = 0; i < 8; i++) FIB.push({ u: (i + 0.5 + (r4() - 0.5) * 0.7) / 8, v: (j + 0.5 + (r4() - 0.5) * 0.65) / 5, h: r4() * 1.2 - 0.55, j: (r4() - 0.5) * 2 });
    FIB.map((f, i) => [r4(), i]).sort((a, b) => a[0] - b[0]).forEach(([, i], pos) => (FIB[i].r = (pos + 0.5) / NF)); // the order fibers get damaged in

    // What each of the 40 fibers looks like, given the model's fractions.
    function fibers(s) {
      const b0 = s.Hd + s.Rm, b1 = b0 + s.G, b2 = b1 + s.E, b3 = b2 + s.X, b4 = b3 + s.L, V = s.V;
      return FIB.map((f) => {
        const r = f.r;
        if (r < s.Hd) return { size: 1 + 0.07 * f.j + 0.25 * V * f.h, kind: "ok" }; // long since rebuilt: nuclei back at the edge
        if (r < b0) return { size: 0.85 + (1 + V * f.h - 0.85) * ez((b0 - r) / 0.1), kind: "old", cn: 1 };
        if (r < b1) return { size: 0.4 + (0.45 * (b1 - r)) / Math.max(s.G, 1e-3), kind: "new", cn: 1 };
        if (r < b2) return { size: 0.32, kind: "gap" };
        if (r < b3) return { size: 1.02, kind: "nec", alb: 1 };
        if (r < b4) return { size: 1 + 0.07 * f.j, kind: "leaky", alb: 1 };
        return { size: 1 + 0.07 * f.j + 0.25 * V * f.h, kind: "ok" };
      });
    }
    function spread(list) { // coefficient of variation of fiber size
      let n = 0, m = 0, q = 0;
      list.forEach((f) => { if (f.kind !== "gap") { n++; m += f.size; } });
      m /= n || 1;
      list.forEach((f) => { if (f.kind !== "gap") q += (f.size - m) ** 2; });
      return Math.sqrt(q / (n || 1)) / (m || 1);
    }

    // A power diagram (weighted Voronoi): each fiber's cell grows or shrinks with its size.
    function clip(poly, nx, ny, c) {
      const out = [];
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i], b = poly[(i + 1) % poly.length], da = nx * a[0] + ny * a[1] - c, db = nx * b[0] + ny * b[1] - c;
        if (da <= 0) out.push(a);
        if ((da < 0 && db > 0) || (da > 0 && db < 0)) { const t = da / (da - db); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
      }
      return out;
    }
    function cells(list, A) {
      const cellA = (A.w * A.h) / NF, P = FIB.map((f, i) => [A.x + f.u * A.w, A.y + f.v * A.h, (list[i].size - 1) * cellA * 0.75]);
      return P.map((p, i) => {
        let poly = [[A.x, A.y], [A.x + A.w, A.y], [A.x + A.w, A.y + A.h], [A.x, A.y + A.h]];
        for (let j = 0; j < NF && poly.length; j++) {
          if (j === i) continue;
          const q = P[j];
          poly = clip(poly, q[0] - p[0], q[1] - p[1], (q[0] * q[0] + q[1] * q[1] - p[0] * p[0] - p[1] * p[1] + p[2] - q[2]) / 2);
        }
        return poly;
      });
    }
    const KEY = [["albumin inside", "albP", "alb"], ["necrotic", "X", "nec"], ["central nucleus", "CNF", "cn"], ["being cleared", "X", "gap"]];
    const state = (ui, s) => `day ${Math.round(ui.t)} · ${ui.controls.mdx ? "mdx" : "WT"}${ui.controls.ctx ? " + cardiotoxin" : ""}`;
    function swatch(ctx, kind, x, y, ui) {
      const c = ui.col;
      ctx.lineWidth = 1.2; ctx.setLineDash([]);
      if (kind === "alb") { ctx.fillStyle = c.acc; ctx.fillRect(x - 5, y - 5, 10, 10); }
      else if (kind === "nec") { ctx.strokeStyle = c.ink2; ctx.setLineDash([2, 2]); ctx.strokeRect(x - 5, y - 5, 10, 10); ctx.setLineDash([]); }
      else if (kind === "cn") { ctx.strokeStyle = c.ink; ctx.beginPath(); ctx.arc(x, y, 5, 0, 6.3); ctx.stroke(); ctx.fillStyle = c.ink; ctx.beginPath(); ctx.arc(x, y, 1.8, 0, 6.3); ctx.fill(); }
      else { ctx.strokeStyle = c.ink3; ctx.setLineDash([1, 2.5]); ctx.beginPath(); ctx.arc(x, y, 4, 0, 6.3); ctx.stroke(); ctx.setLineDash([]); }
    }
    function section(ctx, d, s, ui) {
      const c = ui.col, LEG = 50, A = { x: d.x + 3, y: d.y + 3, w: d.w - 6, h: d.h - LEG - 6 };
      const list = fibers(s), polys = cells(list, A), albA = 0.3 + 0.55 * clamp(s.B, 0, 1);
      ctx.lineJoin = "round"; ctx.lineCap = "round";
      polys.forEach((poly, i) => {
        const a = clamp(ui.build * NF * 1.15 - i, 0, 1); // fibers tile in one by one
        if (a <= 0 || poly.length < 3) return;
        const f = list[i], k = f.alb ? "albP" : f.cn ? "CNF" : null;
        let cx = 0, cy = 0; poly.forEach((p) => { cx += p[0]; cy += p[1]; }); cx /= poly.length; cy /= poly.length;
        const pt = (p, sc) => [cx + (p[0] - cx) * sc, cy + (p[1] - cy) * sc];
        ctx.beginPath(); poly.forEach((p, n) => { const [x, y] = pt(p, 0.9); if (n) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.closePath();
        if (f.kind === "gap") { ui.alpha(a * 0.9, "X"); ctx.strokeStyle = c.ink3; ctx.lineWidth = 1; ctx.setLineDash([1, 3]); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = c.ink3; [[-3, -2], [3, 2]].forEach(([ox, oy]) => { ctx.beginPath(); ctx.arc(cx + ox, cy + oy, 1.5, 0, 6.3); ctx.fill(); }); ui.hit("X", cx, cy, 8); return; }
        if (f.alb) { ui.alpha(a * albA, "albP"); ctx.fillStyle = c.acc; ctx.fill(); } // albumin inside the fiber
        else { ui.alpha(a * 0.7, k); ctx.fillStyle = c.paper2; ctx.fill(); }
        ui.alpha(a, k);
        if (f.kind === "nec") { ctx.strokeStyle = c.ink2; ctx.lineWidth = 1.1; ctx.setLineDash([2.5, 2.5]); ctx.stroke(); ctx.setLineDash([]); }
        else { ctx.strokeStyle = k ? ui.tone(k, c.ink) : c.ink; ctx.lineWidth = k && ui.on(k) ? 1.9 : 1.2; ctx.stroke(); }
        ctx.fillStyle = k && !f.alb ? ui.tone(k, c.ink) : c.ink;
        if (f.cn) { ctx.beginPath(); ctx.arc(cx, cy, 2.3, 0, 6.3); ctx.fill(); } // rebuilt fibers: nucleus in the center
        else if (f.kind !== "nec") [0, Math.floor(poly.length / 2)].forEach((n) => { const [x, y] = pt(poly[n], 0.74); ctx.beginPath(); ctx.arc(x, y, 1.7, 0, 6.3); ctx.fill(); });
        if (k) ui.hit(k, cx, cy, 9); else if (f.kind === "nec") ui.hit("X", cx, cy, 9);
      });
      const pa = clamp(ui.build * 2 - 1, 0, 1);
      if (pa <= 0) return;
      const cw = d.w / 2, y0 = d.y + d.h - LEG + 9;
      KEY.forEach(([txt, k, kind], i) => {
        const x = d.x + (i % 2) * cw + 8, y = y0 + Math.floor(i / 2) * 16;
        ui.alpha(pa, k); swatch(ctx, kind, x, y, ui);
        ctx.fillStyle = ui.tone(k, c.ink2); ctx.font = ui.mono(10); ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(txt, x + 12, y + 0.5);
        ui.hit(k, x + 10, y, 9); ui.hit(k, x + 40, y, 9); ui.hit(k, x + 70, y, 9);
      });
      ui.alpha(pa); ctx.fillStyle = c.ink; ctx.font = ui.mono(10, 500); ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(state(ui, s), d.x + 3, y0 + 33);
    }
    function histogram(ctx, d, s, ui) {
      const c = ui.col, list = fibers(s).filter((f) => f.kind !== "gap"), NB = 8, lo = 0.2, bw = 0.2, bins = new Array(NB).fill(0);
      list.forEach((f) => { bins[clamp(Math.floor((f.size - lo) / bw), 0, NB - 1)]++; });
      const x0 = d.x + 8, x1 = d.x + d.w - 8, yb = d.y + d.h - 50, yt = d.y + 30, w = (x1 - x0) / NB, b = ui.build, pa = clamp(b * 2 - 1, 0, 1);
      ctx.lineCap = "round";
      ui.alpha(1); ctx.strokeStyle = c.ink; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(x0 + (x1 - x0) * b, yb); ctx.stroke();
      if (pa <= 0) return;
      bins.forEach((n, i) => {
        const h = (yb - yt) * Math.min(1, n / (NF * 0.6)) * pa; if (h < 0.5) return;
        ui.alpha(0.75, "CV"); ctx.fillStyle = c.paper2; ctx.fillRect(x0 + i * w + 2, yb - h, w - 4, h);
        ui.alpha(1, "CV"); ctx.strokeStyle = ui.tone("CV", c.ink); ctx.lineWidth = ui.on("CV") ? 1.9 : 1.2; ctx.strokeRect(x0 + i * w + 2, yb - h, w - 4, h - 0.5);
      });
      ui.hit("CV", (x0 + x1) / 2, (yb + yt) / 2 + 20, Math.min(d.w, d.h) * 0.3);
      ui.alpha(pa); ctx.fillStyle = c.ink2; ctx.font = ui.mono(10); ctx.textBaseline = "middle";
      [[0, "0.2"], [4, "1.0"], [8, "1.8"]].forEach(([i, t]) => { ctx.textAlign = i === 0 ? "left" : i === 8 ? "right" : "center"; ctx.fillText(t, x0 + i * w, yb + 12); ctx.beginPath(); ctx.moveTo(x0 + i * w, yb); ctx.lineTo(x0 + i * w, yb + 4); ctx.strokeStyle = c.ink; ctx.lineWidth = 1; ctx.stroke(); });
      ctx.textAlign = "center"; ctx.fillText("fiber size (healthy = 1)", (x0 + x1) / 2, yb + 28);
      ctx.textAlign = "left"; ctx.fillStyle = c.ink; ctx.font = ui.mono(10, 500); ctx.fillText(state(ui, s), d.x + 3, yb + 44);
      ui.alpha(pa, "CV"); ctx.fillStyle = ui.tone("CV", c.ink); ctx.font = ui.serif(26, 300); ctx.textBaseline = "alphabetic"; ctx.fillText(clamp(s.CV, 0, 9).toFixed(2), x0 + 2, d.y + 22);
      ctx.font = ui.mono(10); ctx.fillStyle = ui.tone("CV", c.ink2); ctx.fillText(`CV of ${list.length} fibers`, x0 + 58, d.y + 21);
    }

    const B = (t, k) => ({ t: `[${t}]`, k }), sub = (t, s, k) => ({ t, sub: s, k });
    const spec = {
      alt: FC.alt,
      duration: 21, dt: 0.01, unit: "d", ticks: [0, 7, 14, 21],
      scale: { F: 1.25, CTX: 1.1, sig: 1.25, P: 1.25, Ca: 1, B: 1.1, X: 1, S: 1.1, Y: 1, Z: 1, albP: 1, CNF: 1, CV: 0.6 },
      controls: [
        { id: "ctx", type: "toggle", label: "Acute cardiotoxin injury", value: true },
        { id: "mdx", type: "choice", label: "Muscle", value: 0, options: [{ v: 0, label: "WT" }, { v: 1, label: "mdx (DMD model)" }] },
      ],
      model: {
        setup(c, r) {
          const j = (x, a = 0.08) => x * (1 + (r.u() - 0.5) * 2 * a); // every rebuild lands a little differently
          return {
            D: c.mdx ? 0 : 1, ctx: c.ctx ? 1 : 0, amps: Array.from({ length: 23 }, () => 0.88 + r.u() * 0.24), tc: 2.8 + r.u() * 0.5,
            g: 2, sStar: 0.55, kt: j(9), rr: 3, kc: 30, kca: j(4), u: 4, th: 0.1, ka: j(3), cb: 0.6, kn: j(2), q: j(0.7),
            a: 1.5, rho: 0.5, beta: 2, del: 0.9, phz: 0.8, phi: j(4), m: 0.25, mu: 0.02,
          };
        },
        init: () => { const s = { F: 0, CTX: 0, sig: 0, P: 0, Ca: 0, B: 0, X: 0, S: 1, Y: 0, Z: 0, E: 0, G: 0, Rm: 0, Hd: 0, V: 0, L: 0, albP: 0, CNF: 0, CV: 0 }; s.CV = spread(fibers(s)); return s; },
        step(s, p, t, dt) {
          const ph = t % 1;
          s.F = p.amps[Math.floor(t)] * (ph > 0.3 && ph < 0.7 ? Math.sin(((ph - 0.3) / 0.4) * Math.PI) ** 2 : 0);
          s.CTX = p.ctx * Math.exp(-(((t - p.tc) / 0.3) ** 2));
          s.sig = s.F / (1 + p.g * p.D); // dystrophin passes most of the force out to the basal lamina
          const alive = Math.max(0, 1 - s.X - s.E - s.G - s.Rm - s.Hd) + s.Hd, kill = p.kn * Math.max(0, s.Ca - p.th);
          s.P += (p.kt * Math.max(0, s.sig - p.sStar) + p.kc * s.CTX * (1 - s.P) - p.rr * s.P) * dt;
          s.Ca += (p.kca * s.P - p.u * s.Ca) * dt;
          s.B += (p.ka * s.P * (1 - s.B) - p.cb * s.B) * dt;
          const wake = p.a * s.X * s.S, fuse = p.phi * s.Z * s.E;
          s.X += (kill * (alive + s.Rm) - p.q * s.X) * dt;      // necrosis; macrophages clear it
          s.S += (-wake + p.rho * (1 - s.S)) * dt;              // Pax7 pool: activation out, self-renewal back
          s.Y += (p.beta * wake - p.del * s.Y) * dt;            // MyoD: activated, dividing myoblasts
          s.Z += (p.del * s.Y - p.phz * s.Z) * dt;              // myogenin: committed to becoming muscle
          s.E += (p.q * s.X - fuse) * dt;                       // cleared gaps, refilled by fusion
          s.G += (fuse - (p.m + p.mu) * s.G) * dt;              // new, small fibers
          s.V += (10 * kill * s.Rm * (1 - s.V) - 0.03 * s.V) * dt; // size spread builds only when rebuilt fibers are damaged again
          s.Rm += (p.m * s.G - p.mu * s.Rm - kill * s.Rm) * dt; // rebuilt fibers (central nuclei persist for a while)
          s.Hd += (p.mu * s.CNF - kill * s.Hd) * dt;            // central nuclei eventually move back to the edge
          s.L = clamp(0.5 * s.P, 0, Math.max(0, 1 - s.X - s.E - s.G - s.Rm - s.Hd));
          s.albP = s.L + s.X; s.CNF = s.G + s.Rm; s.CV = spread(fibers(s));
        },
      },
      events: [
        { k: "CTX", levels: [0.5], note: 0 }, { k: "sig", levels: [0.55], note: 2 }, { k: "P", levels: [0.15, 0.5], note: 3, step: 1 },
        { k: "Ca", levels: [0.1, 0.4], note: 4, step: 1 }, { k: "B", levels: [0.25, 0.55], note: 5, step: 1 },
        { k: "X", levels: [0.05, 0.3], note: 1, step: 1 }, { k: "Y", levels: [0.15], note: 6 }, { k: "Z", levels: [0.15], note: 7 },
        { k: "CNF", levels: [0.1, 0.25, 0.4], note: 7, step: 1 }, { k: "CV", levels: [0.2, 0.3], note: 9, step: 1 },
      ],
      panels: [
        {
          id: "force",
          html: runIn("Contraction", "Every contraction pulls on the fiber's membrane."),
          eq: [{ t: "F", k: "F" }, "(t) = ", sub("F", "0"), "·bout(t)"],
          say: "The muscle works in bouts: one a day in this toy model.",
          traces: [{ k: "F", label: "F" }],
        },
        {
          id: "mem",
          html: runIn("The link", "Dystrophin links the actin cytoskeleton, through the dystrophin-glycoprotein complex (dystroglycan and sarcoglycans), to laminin-211 in the basal lamina."),
          eq: [
            [{ t: "σ", k: "sig" }, " = ", { t: "F", k: "F" }, " / (1 + g·D)"],
            [{ t: "dP/dt", k: "P" }, " = k·[", { t: "σ", k: "sig" }, " − σ*", sub("]", "+"), " + c·", { t: "CTX", k: "CTX" }, " − r·", { t: "P", k: "P" }],
          ],
          say: "Dystrophin (D) shares the load. Without it, stress passes σ* and the membrane tears (P).",
          traces: [{ k: "F", label: "F", role: "in" }, { k: "CTX", label: "CTX", role: "in" }, { k: "sig", label: "σ", ref: { v: 0.55, label: "σ*" } }, { k: "P", label: "P" }],
        },
        {
          id: "ca",
          html: runIn("Ca²⁺", "Ca²⁺ floods in through the tears."),
          eq: [{ t: "d[Ca]/dt", k: "Ca" }, " = j·", { t: "P", k: "P" }, " − u·", B("Ca", "Ca")],
          say: "Calcium enters through the tears and is pumped back out.",
          traces: [{ k: "P", label: "P", role: "in" }, { k: "Ca", label: "Ca²⁺", ref: { v: 0.1, label: "θ" } }],
        },
        {
          id: "alb",
          html: runIn("Albumin", C.research.muscle.text[2].replace(/ Fig\. 4 shows.*$/, "")),
          eq: [{ t: "d[alb]/dt", k: "B" }, " = e·", { t: "P", k: "P" }, "·(1 − ", B("alb", "B"), ") − w·", B("alb", "B")],
          say: "Albumin leaks in through the same tears and lingers, so it marks damaged fibers.",
          traces: [{ k: "P", label: "P", role: "in" }, { k: "B", label: "alb", accent: true }],
        },
        {
          id: "regen",
          html: runIn("Necrosis and repair", "Damaged fibers die, and macrophages move in to clear the debris. Injury wakes the satellite cells: they switch on MyoD and start dividing, then switch on myogenin and commit to becoming muscle."),
          eq: [
            [{ t: "d[nec]/dt", k: "X" }, " = n·[", { t: "Ca", k: "Ca" }, " − θ", sub("]", "+"), "·[alive] − q·", B("nec", "X")],
            [{ t: "d[MyoD]/dt", k: "Y" }, " = a·", B("nec", "X"), "·", B("Pax7", "S"), " − δ·", B("MyoD", "Y")],
            [{ t: "d[MyoG]/dt", k: "Z" }, " = δ·", B("MyoD", "Y"), " − φ·", B("MyoG", "Z")],
          ],
          say: "Ca²⁺ overload kills fibers. The damage wakes Pax7⁺ satellite cells: MyoD first, then myogenin (MyoG).",
          traces: [{ k: "Ca", label: "Ca²⁺", role: "in" }, { k: "S", label: "Pax7", role: "in" }, { k: "X", label: "nec" }, { k: "Y", label: "MyoD" }, { k: "Z", label: "MyoG" }],
        },
        {
          id: "xs",
          html: runIn("Cross-section", `${C.fig4.b.stages[0].d} ${C.fig4.b.stages[2].d}`),
          eq: [
            [B("alb⁺", "albP"), " = [leaky] + ", B("nec", "X")],
            [{ t: "d[CNF]/dt", k: "CNF" }, " = f·", B("MyoG", "Z"), "·[gap] − μ·", B("CNF", "CNF")],
          ],
          say: "Leaky and dead fibers fill with albumin. Rebuilt fibers keep a central nucleus (CNF) for a while.",
          traces: [{ k: "Z", label: "MyoG", role: "in" }, { k: "albP", label: "alb⁺", accent: true }, { k: "CNF", label: "CNF" }],
          diagram: section,
        },
        {
          id: "size",
          html: runIn("Fiber size", `${C.fig4.b.last.acute.d.split(". ")[0]}. In DMD, damage and repair keep repeating, and fiber sizes vary.`),
          eq: [{ t: "CV", k: "CV" }, " = sd(size) / mean(size)"],
          say: "The spread of fiber sizes: narrow in healthy muscle, wider when repair never finishes.",
          traces: [{ k: "CNF", label: "CNF", role: "in" }, { k: "CV", label: "CV" }],
          diagram: histogram,
        },
      ],
      links: [
        { from: "force", to: "mem", k: "F", label: "F" },
        { from: "mem", to: "ca", k: "P", label: "P" },
        { from: "mem", to: "alb", k: "P", label: " " },
        { from: "ca", to: "regen", k: "Ca", label: "Ca²⁺" },
        { from: "alb", to: "xs", k: "B", label: "alb" },
        { from: "regen", to: "xs", k: "Z", label: "MyoG" },
        { from: "xs", to: "size", k: "CNF", label: "CNF" },
      ],
      outro: `${runIn("Your turn", "Switch to mdx: with no dystrophin, every bout tears the membrane, so damage and repair never stop. Turn the cardiotoxin injury off to see each case on its own.")}<p class="note">${esc(FC.label)}</p>`,
    };
    return window.FigureEngine.create(root, spec, { reduce: !MOTION, bpm: HEART_BPM, note: (i, v) => Sound.play("note", { i, v }) });
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
    const BASE = MI_BASE, fns = miFns, pathD = miPath;
    const cur = { ...BASE };
    const mods = { ccr2: false, il10: false, deplete: false };
    let day = 0, sel = null;
    function target() {
      const p = { ...BASE };
      if (mods.ccr2) p.promA *= 0.45;
      if (mods.il10) { p.promW = 0.85; p.promA *= 0.85; p.repmC = 3; p.repmWl = 1; p.repmA *= 0.82; p.ecmC = 4.6; }
      if (mods.deplete) { p.promA *= 0.12; p.repmA *= 0.12; p.ecmA *= 0.45; }
      return p;
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
    function setDay(d, fromRange, quiet) {
      d = clamp(d, 0, MI.DMAX);
      const before = Math.floor(day + 1e-6);
      day = d;
      if (Math.floor(d + 1e-6) !== before && !quiet) Sound.play("tick");
      if (!fromRange) range.value = d.toFixed(2);
      place();
    }
    const stopIntro = () => {};
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
      if (MOTION) gsap.to(cur, { ...to, duration: 0.65, ease: "power2.out", onUpdate: render });
      else { Object.assign(cur, to); render(); }
    }));
    render();
    setDay(MOTION ? 0 : 1);
    // the same heartbeat dot as the engine's connector lines, on the two arrows of the balance diagram
    const pulse = window.FigureEngine ? window.FigureEngine.pulse($$(".balance .b-arr", root), { bpm: HEART_BPM, reduce: !MOTION, stagger: false }) : null;
    return { root, setDay, pulse };
  })();

  /* ======================================================================
     VENTURES — draw-a-quest card
     ====================================================================== */
  (function deck() {
    const V = C.venture;
    const card = $("[data-qcard]"), inner = $(".qcard-inner", card), front = $("[data-qfront]"), countEl = $("[data-qcount]"), btn = $("[data-draw]");
    const photo = $(".q-photo img", front), credit = $(".q-credit", front), area = $(".q-area", front), title = $(".q-title", front), hook = $(".q-hook", front), vibes = $$(".q-vibe", front);
    const n = V.quests.length;
    let order = [...Array(n).keys()], pos = 0, busy = false;
    V.quests.forEach((q) => { const im = new Image(); im.src = "assets/coquest/quests/" + q.photo; }); // preload so the flip never shows a blank photo
    const shuffle = () => { for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } };
    // the card's parts stay in the DOM (they are the pieces that assemble); only their contents change
    function fill() {
      const q = V.quests[order[pos]];
      photo.src = "assets/coquest/quests/" + q.photo;
      photo.alt = `${q.title}, photo from the CoQuest app`;
      credit.textContent = `Photo: ${q.credit} · Wikimedia Commons`;
      area.textContent = q.area; title.textContent = q.title; hook.textContent = q.hook;
      vibes.forEach((el, i) => {
        const v = q.vibes[i];
        el.hidden = !v;
        if (v) { $("img", el).src = `assets/coquest/doodles/${v}.png`; $("span", el).textContent = V.vibeLabels[v] || v; }
      });
      countEl.textContent = `${V.deckSource} · ${pos + 1} of ${n}`;
    }
    function draw() {
      if (busy) return;
      busy = true;
      Sound.play("flip");
      const prev = order[pos];
      pos++;
      if (pos >= n) { pos = 0; shuffle(); if (order[0] === prev) [order[0], order[1]] = [order[1], order[0]]; }
      const done = () => { busy = false; Sound.play("success"); glow(front); };
      if (!MOTION) { fill(); done(); return; }
      gsap.to(inner, {
        rotationY: 180, duration: 0.3, ease: "power2.in",
        onComplete: () => {
          fill();
          gsap.to(inner, { rotationY: 360, duration: 0.56, ease: "back.out(1.3)", onComplete: () => { gsap.set(inner, { rotationY: 0 }); done(); } });
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
    const nodes = $$(".net-node", stage).map((el) => ({ el, key: el.dataset.key, hx: 0, hy: 0, x: 0, y: 0, vx: 0, vy: 0, w: 0, h: 0, drag: false, moved: false, a: 1, l: 1, kx: 0, ky: 0, kr: 0 }));
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
        // where the node waits before it is assembled: pushed outward from the centre, slightly turned
        n.kx = n.hx + (n.hx - ctr.x) * 0.8; n.ky = n.hy + (n.hy - ctr.y) * 0.8; n.kr = n.hx < ctr.x ? -10 : 9;
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
        const e = n.a >= 1 ? 1 : backOut(n.a), px = n.kx + (n.x - n.kx) * e, py = n.ky + (n.y - n.ky) * e;
        n.el.style.transform = `translate(${(px - n.w / 2).toFixed(1)}px, ${(py - n.h / 2).toFixed(1)}px) rotate(${((1 - e) * n.kr).toFixed(2)}deg)`;
        n.el.style.opacity = n.a >= 1 ? "" : (0.22 + 0.78 * Math.min(1, n.a * 1.4)).toFixed(2);
        const { qx, qy } = quad({ x: px, y: py, hx: n.hx });
        const ln = lnEls[i];
        ln.setAttribute("d", `M${ctr.x.toFixed(1)} ${ctr.y.toFixed(1)} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)}`);
        if (n.l >= 1) ln.style.strokeDasharray = "";
        else { const len = ln.getTotalLength(); ln.style.strokeDasharray = `${(len * n.l).toFixed(1)} ${(len + 4).toFixed(1)}`; }
        const s = REDUCE ? 0.5 : ((t * 0.32 + i / nodes.length) % 1);
        const qx2 = (1 - s) ** 2 * ctr.x + 2 * (1 - s) * s * qx + s * s * px, qy2 = (1 - s) ** 2 * ctr.y + 2 * (1 - s) * s * qy + s * s * py;
        pulses[i].setAttribute("cx", qx2.toFixed(1)); pulses[i].setAttribute("cy", qy2.toFixed(1));
        pulses[i].style.opacity = REDUCE || n.a < 1 ? 0 : Math.sin(s * Math.PI).toFixed(2);
      });
      faint.setAttribute("d", `M${nodes.map((n) => `${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" L")} Z`);
    }
    const backOut = (x) => 1 + 2.70158 * (x - 1) ** 3 + 1.70158 * (x - 1) ** 2;
    // assembly: a = how far node i has flown in (0–1), l = how much of its line is drawn (0–1)
    function asm(i, a, l) { const n = nodes[i]; n.a = a; n.l = l; if (!running) render(); }
    function step(dt) {
      t += dt;
      nodes.forEach((n) => {
        if (n.drag || n.a < 1) return;
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
    return { layout, asm, nodes };
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
      const hot = !!e.target.closest("a, button, input, .sim-stage, .qcard, .mi .hit");
      cur.classList.toggle("hot", hot); st = hot ? 1.6 : 1; kick();
    });
    document.addEventListener("pointerdown", () => { st = 0.7; kick(); });
    document.addEventListener("pointerup", () => { st = cur.classList.contains("hot") ? 1.6 : 1; kick(); });
    document.documentElement.addEventListener("pointerleave", () => cur.classList.add("gone"));
  }


  /* ======================================================================
     MOTION SETUP — GSAP plugins, Lenis smooth scroll synced with ScrollTrigger
     ====================================================================== */
  const G = window.gsap, ST = window.ScrollTrigger;
  let lenis = null;
  if (G) G.registerPlugin(...[ST, window.DrawSVGPlugin, window.SplitText, window.MorphSVGPlugin, window.Flip].filter(Boolean));
  if (MOTION && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.11 });
    lenis.on("scroll", ST.update);
    G.ticker.add((t) => lenis.raf(t * 1000));
    G.ticker.lagSmoothing(0);
  }
  const scrollTop = () => { if (lenis) lenis.scrollTo(0, { immediate: true, force: true }); window.scrollTo(0, 0); };
  const PIN_Q = matchMedia("(min-width: 1024px) and (min-height: 600px)");
  const canPin = () => MOTION && PIN_Q.matches;
  const navH = () => $(".nav").offsetHeight;

  /* ======================================================================
     UNDERLINES — a slightly wobbly pen stroke under each text link.
     It draws in on hover and stays under the current page.
     ====================================================================== */
  const Underlines = (() => {
    const r = rng(77);
    function pen(w) {
      const n = Math.max(2, Math.round(w / 44));
      let d = `M1.5 ${(5 + (r() - 0.5) * 2).toFixed(1)}`;
      for (let i = 1; i <= n; i++) {
        const x = 1.5 + ((w - 3) * i) / n, px = 1.5 + ((w - 3) * (i - 0.5)) / n;
        d += ` Q${px.toFixed(1)} ${(5 + (r() - 0.5) * 4.6).toFixed(1)} ${x.toFixed(1)} ${(5 + (r() - 0.5) * 1.8).toFixed(1)}`;
      }
      return d;
    }
    const isCur = (a) => a.hasAttribute("aria-current");
    const pathOf = (a) => $(".ul path", a);
    function build(a) {
      const t = $(".ink-t", a);
      if (!t || a.closest(".idx-title")) return;
      const w = Math.ceil(t.offsetWidth);
      if (!w) return;
      const old = $(".ul", a);
      if (old && +old.dataset.w === w) return;
      if (old) old.remove();
      t.insertAdjacentHTML("beforeend", `<svg class="ul" data-w="${w}" viewBox="0 0 ${w} 10" width="${w}" height="10" aria-hidden="true" focusable="false"><path d="${pen(w)}"/></svg>`);
      if (MOTION) G.set(pathOf(a), { drawSVG: isCur(a) ? "0% 100%" : "0% 0%" });
    }
    const scan = (root = document) => $$(".ink, .nav-link", root).forEach(build);
    function show(a, on) {
      const p = pathOf(a);
      if (!p || !MOTION) return;
      G.killTweensOf(p);
      if (on) G.fromTo(p, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out" });
      else G.to(p, { drawSVG: "100% 100%", duration: 0.35, ease: "power2.in" });
    }
    document.addEventListener("pointerover", (e) => {
      const a = e.target.closest && e.target.closest(".ink, .nav-link");
      if (a && !a.contains(e.relatedTarget) && !isCur(a)) show(a, true);
    });
    document.addEventListener("pointerout", (e) => {
      const a = e.target.closest && e.target.closest(".ink, .nav-link");
      if (a && !a.contains(e.relatedTarget) && !isCur(a)) show(a, false);
    });
    // mark which link is the current page; the stroke draws under the new one and lifts off the old one
    function current(links, pick) {
      links.forEach((a) => {
        const on = pick(a), was = isCur(a);
        if (on === was) return;
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
        show(a, on);
      });
    }
    return { scan, current };
  })();

  /* ======================================================================
     PAGE TURN — a cobalt sheet with a curved leading edge (MorphSVG) sweeps up,
     the page swaps underneath it, and the sheet lifts away.
     ====================================================================== */
  const Wipe = (() => {
    const el = $(".wipe"), path = $("path", el), word = $(".wipe-word", el);
    const D = {
      off: "M0 100 Q50 100 100 100 L100 100 Q50 100 0 100 Z",
      rise: "M0 52 Q50 -6 100 52 L100 100 Q50 100 0 100 Z",
      full: "M0 0 Q50 0 100 0 L100 100 Q50 100 0 100 Z",
      lift: "M0 0 Q50 0 100 0 L100 48 Q50 2 0 48 Z",
      gone: "M0 0 Q50 0 100 0 L100 0 Q50 0 0 0 Z",
    };
    let tl = null;
    function run(label, mid) {
      if (!MOTION) { mid(); return; }
      if (tl) tl.kill();
      path.setAttribute("d", D.off);
      word.textContent = label;
      el.classList.add("on");
      Sound.play("flip");
      tl = G.timeline({ onComplete: () => { el.classList.remove("on"); tl = null; } })
        .to(path, { morphSVG: D.rise, duration: 0.3, ease: "power2.in" })
        .to(path, { morphSVG: D.full, duration: 0.28, ease: "power2.out" })
        .fromTo(word, { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.42, ease: "power3.out" }, 0.18)
        .call(mid, null, 0.62)
        .to(word, { yPercent: -60, opacity: 0, duration: 0.3, ease: "power2.in" }, 0.84)
        .to(path, { morphSVG: D.lift, duration: 0.3, ease: "power2.in" }, 0.86)
        .to(path, { morphSVG: D.gone, duration: 0.32, ease: "power2.out" });
    }
    return { run };
  })();

  /* ======================================================================
     KIT — helpers that add "a part arrives" tweens to a step timeline.
     Times are in a nominal 0–1 s step; scroll scrubs the step back and forth.
     ====================================================================== */
  let hush = false, ghosts = [];
  // Scroll can jump a timeline past a tween without firing its callbacks, so state that lives outside GSAP
  // (the simulation hand-off, the day marker, the cross-section stage, the contact nodes) is synced from
  // the tweened values once per frame instead. Watchers belong to the mounted view and are dropped with it.
  let watchers = [];
  const watch = (get, apply, now) => watchers.push({ get, apply, last: now ? undefined : get() });
  if (G) G.ticker.add(() => { for (const w of watchers) { const v = w.get(); if (v !== w.last) { w.last = v; w.apply(v); } } });
  const K = {
    r: rng(5),
    hit(tl, at, name, arg) { tl.call(() => { if (!hush) Sound.play(name, arg); }, null, Math.max(0.01, at)); },
    // parts start scattered and faint, fly in, and land with a little overshoot
    fly(tl, els, at = 0, o = {}) {
      G.utils.toArray(els).forEach((el, i) => {
        const k = canPin() ? 1 : 0.4; // on phones the parts start closer in, so they never drift over the text
        const a = K.r() * Math.PI * 2, d = (o.spread == null ? 120 : o.spread) * (0.6 + K.r() * 0.7) * k;
        const each = o.each == null ? 0.06 : o.each, dur = o.dur || 0.45, t = at + i * each;
        tl.fromTo(el,
          { x: o.x != null ? o.x * k : Math.cos(a) * d, y: o.y != null ? o.y * k : Math.sin(a) * d, rotation: o.rot != null ? o.rot : (K.r() - 0.5) * 80, opacity: o.fade != null ? o.fade : 0.26, transformOrigin: "50% 50%" },
          { x: 0, y: 0, rotation: 0, opacity: 1, duration: dur, ease: o.ease || "back.out(1.7)" }, t);
        if (o.sound && (!o.every || i % o.every === 0)) K.hit(tl, t + dur * 0.5, o.sound, o.pitch ? i : undefined);
      });
    },
    // a dotted pencil underdrawing that sits where a stroke will be inked, and lifts off once it is
    ghost(tl, els, at) {
      G.utils.toArray(els).forEach((el) => {
        const g = el.cloneNode(false);
        ["id", "clip-path", "data-k", "marker-end"].forEach((a) => g.removeAttribute(a));
        g.setAttribute("class", "ghost");
        el.parentNode.insertBefore(g, el);
        ghosts.push(g);
        tl.fromTo(g, { opacity: 1 }, { opacity: 0, duration: 0.15, ease: "none" }, at);
      });
    },
    draw(tl, els, at = 0, o = {}) {
      if (o.ghost) K.ghost(tl, els, at + (o.dur || 0.6) * 0.8);
      tl.fromTo(els, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: o.dur || 0.6, ease: o.ease || "power2.inOut", stagger: o.each || 0 }, at);
    },
    fade(tl, els, at = 0, o = {}) {
      tl.fromTo(els, { opacity: 0, y: o.y == null ? 8 : o.y }, { opacity: 1, y: 0, duration: o.dur || 0.3, ease: "power2.out", stagger: o.each || 0 }, at);
    },
    // a label: its leader line draws out to the target, then the text settles in
    label(tl, g, at = 0) {
      G.utils.toArray(g).forEach((el) => {
        const lead = $$(".lead", el), txt = $$("text", el);
        if (lead.length) tl.fromTo(lead, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.18, ease: "power1.out" }, at);
        tl.fromTo(txt, { opacity: 0 }, { opacity: 1, duration: 0.18, ease: "none" }, at + (lead.length ? 0.1 : 0));
      });
    },
    // run fn(true) once the playhead passes `at`, fn(false) when it scrubs back before it
    flag(tl, at, fn) {
      const p = { v: 0 };
      tl.fromTo(p, { v: 0 }, { v: 1, duration: 0.02, ease: "none" }, at);
      watch(() => p.v > 0.5, fn);
    },
  };

  /* ======================================================================
     STORY — one figure, several steps.
     Desktop: the figure is pinned and each step is scrubbed by scroll
       ("scroll": text scrolls past beside it · "pin": the whole section holds still).
     Phone / small windows: no pinning; the figure assembles when it scrolls into view.
     Reduced motion: nothing here runs, so figures are simply shown assembled.
     ====================================================================== */
  function story(sec, steps, o = {}) {
    if (!MOTION) return null;
    const stepEls = $$(".step", sec), stage = $(".stage", sec), n = steps.length;
    const mk = (fn) => { const tl = G.timeline({ defaults: { ease: "none" } }); fn(tl); return tl; };
    const setStep = (i) => stepEls.forEach((el, k) => el.classList.toggle("on", k === i));
    const kitN = o.kit == null ? n : o.kit;

    if (!canPin()) {
      const master = G.timeline({ paused: true });
      steps.forEach((fn, i) => master.add(mk(fn), i * 0.85));
      ST.create({ trigger: stage || sec, start: "top 76%", once: true, onEnter: () => master.play() });
      return { explode() {}, mobile: true };
    }

    sec.classList.add("is-pinned");
    let explodeTl = null;
    const stopExplode = () => { if (explodeTl) { explodeTl.kill(); explodeTl = null; hush = false; } };

    if (sec.dataset.story === "pin") {
      const master = G.timeline({ defaults: { ease: "none" } });
      steps.forEach((fn, i) => master.add(mk(fn), i));
      master.to({}, { duration: 0.5 }, n);
      setStep(0);
      ST.create({
        trigger: sec, start: () => `top ${navH() + 6}`, end: () => `+=${Math.round(innerHeight * 0.62 * n)}`,
        pin: true, scrub: 0.6, animation: master, invalidateOnRefresh: false,
        onUpdate: stopExplode,
      });
      // the text follows the (smoothed) playhead, not the raw scroll position
      watch(() => (explodeTl ? 0 : clamp(Math.floor(master.time() + 0.12), 0, n - 1)), setStep);
      return {
        explode(delay) {
          hush = true; master.progress(1);
          explodeTl = G.timeline({ delay, onComplete: () => { hush = false; explodeTl = null; } })
            .call(() => Sound.play("flip"))
            .to(master, { progress: 0, duration: 1.15, ease: "power3.inOut" });
        },
      };
    }

    // "scroll": pin the figure column while the text column scrolls; each step scrubs its own timeline
    const col = $(".stage-col", sec);
    ST.create({ trigger: sec, start: () => `top ${navH() + 14}`, end: () => `+=${Math.max(0, sec.offsetHeight - col.offsetHeight)}`, pin: col, pinSpacing: false });
    const tls = steps.map(mk);
    tls.forEach((tl, i) => {
      ST.create({ trigger: stepEls[i], start: "clamp(top 80%)", end: "clamp(top 32%)", scrub: 0.5, animation: tl, onUpdate: stopExplode });
      ST.create({ trigger: stepEls[i], start: i ? "top 82%" : "top bottom", end: i === n - 1 ? "bottom top" : "bottom 30%", toggleClass: { targets: stepEls[i], className: "on" } });
    });
    return {
      explode(delay) {
        hush = true;
        const kit = tls.slice(0, kitN);
        kit.forEach((tl) => tl.progress(1));
        explodeTl = G.timeline({ delay, onComplete: () => { hush = false; explodeTl = null; } }).call(() => Sound.play("flip"));
        kit.slice().reverse().forEach((tl, i) => explodeTl.to(tl, { progress: 0, duration: 0.6, ease: "power2.inOut" }, i * 0.16));
      },
    };
  }

  /* ---------- Fig. 1: membrane traces, mitochondria dock, NLRP3 locks into the ring ---------- */
  function fig1Steps() {
    const fig = Fig1.el, q = (s) => $$(s, fig);
    const { X, Y, R: Rr } = CV, { RING, RING_R, SLOTS, PRO_N, monos, pros, MITOS } = CELL;
    const mitos = q(".c-mito"), mono = q(".c-mono"), pro = q(".c-pro"), dna = q(".c-dna"), ils = q(".c-il");
    const guide = q(".c-guide"), speck = q(".c-speck"), pulse = q(".c-pulse"), cnt = { v: 0 };
    const slot = monos.map((m, i) => {
      const th = (i / SLOTS) * Math.PI * 2;
      let rot = ((th + Math.PI - m.rot) * 180) / Math.PI;
      rot = ((rot + 180) % 360 + 360) % 360 - 180;
      return { x: X(RING.u + Math.cos(th) * RING_R) - X(m.u), y: Y(RING.v + Math.sin(th) * RING_R) - Y(m.v), rotation: rot };
    });
    // (tweens that pick up where an earlier step left off never sit at time 0, so a step at rest leaves the parts alone)
    const show = (tl, els, at, on) => tl.fromTo(els, { opacity: on ? 0 : 1 }, { opacity: on ? 1 : 0, duration: 0.12, immediateRender: false }, Math.max(0.01, at));
    return [
      (tl) => { // the cell: membrane traces itself, nucleus settles
        K.draw(tl, q(".c-mem"), 0, { dur: 0.75, ghost: true });
        tl.fromTo(q(".c-mem"), { fillOpacity: 0 }, { fillOpacity: 1, duration: 0.2 }, 0.7);
        tl.fromTo(q(".c-nuc"), { scale: 0.2, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.8)" }, 0.4);
        K.hit(tl, 0.06, "tick"); K.hit(tl, 0.62, "thump");
        K.label(tl, q(".l-cell"), 0.55); K.label(tl, q(".l-nuc"), 0.75);
      },
      (tl) => { // mitochondria drift in and dock
        K.fly(tl, mitos, 0, { spread: 250, each: 0.14, dur: 0.4, sound: "slot", pitch: true });
        K.label(tl, q(".l-mito"), 0.8);
      },
      (tl) => { // NLRP3 monomers and pro-IL-1β arrive
        K.fly(tl, mono, 0, { spread: 190, each: 0.05, dur: 0.38, sound: "pop", pitch: true });
        K.fly(tl, pro, 0.4, { spread: 150, each: 0.025, dur: 0.3, sound: "tick", every: 3 });
        K.label(tl, q(".l-mono"), 0.55); K.label(tl, q(".l-pro"), 0.8);
      },
      (tl) => { // stimulus → oxidized mtDNA leaves the mitochondria
        tl.fromTo(mitos, { scale: 1 }, { scale: 1.14, duration: 0.1, yoyo: true, repeat: 1, stagger: 0.05, transformOrigin: "50% 50%", immediateRender: false }, 0.01);
        dna.forEach((p, i) => {
          const [u, v] = MITOS[i % MITOS.length], at = 0.1 + i * 0.055;
          tl.fromTo(p, { opacity: 0, x: 0, y: 0 }, { opacity: 1, duration: 0.06 }, at)
            .to(p, { x: (X(RING.u) - X(u)) * 0.78, y: (Y(RING.v) - Y(v)) * 0.78, duration: 0.5, ease: "power1.inOut" }, at);
          K.hit(tl, at, "blip");
        });
        show(tl, q(".l-dna"), 0.2, true);
      },
      (tl) => { // NLRP3 pieces lock into the ring, one by one; ASC speck forms
        show(tl, guide, 0, true); show(tl, q(".l-dna"), 0, false); show(tl, q(".l-mono"), 0, false);
        mono.forEach((g, i) => {
          const at = 0.04 + i * 0.09;
          tl.fromTo(dna[i], { opacity: 1 }, { opacity: 0, duration: 0.06, immediateRender: false }, at);
          tl.fromTo(g, { x: 0, y: 0, rotation: 0 }, { ...slot[i], duration: 0.28, ease: "back.out(1.5)", immediateRender: false }, at);
          tl.fromTo($("path", g), { fill: "#4b4c52" }, { fill: "#15161a", duration: 0.1, immediateRender: false }, at + 0.2);
          K.hit(tl, at + 0.2, "slot", i + 1);
        });
        tl.fromTo(speck, { scale: 0, opacity: 0.85, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.18, ease: "back.out(2.2)" }, 0.8);
        show(tl, guide, 0.8, false); show(tl, q(".l-ring"), 0.85, true);
        K.hit(tl, 0.88, "success");
      },
      (tl) => { // caspase-1 cleaves pro-IL-1β; IL-1β leaves the cell
        tl.fromTo(q(".readout"), { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0);
        tl.fromTo(pulse, { scale: 1, opacity: 0, transformOrigin: "50% 50%" }, { opacity: 1, duration: 0.04 }, 0.02).to(pulse, { scale: 8, opacity: 0, duration: 0.5, ease: "power1.out" }, 0.06);
        K.hit(tl, 0.06, "release");
        show(tl, q(".l-pro"), 0.05, false);
        ils.forEach((c, i) => {
          const p = pros[i], a = Math.atan2(p.v - RING.v, p.u - RING.u) + (K.r() - 0.5) * 0.6, at = 0.14 + i * 0.035;
          tl.fromTo(pro[i], { opacity: 1 }, { opacity: 0, duration: 0.03, immediateRender: false }, at)
            .fromTo(c, { opacity: 0, x: 0, y: 0 }, { opacity: 1, duration: 0.03 }, at)
            .to(c, { x: Math.cos(a) * Rr * 1.35, y: Math.sin(a) * Rr * 1.35, duration: 0.42, ease: "power1.out" }, at + 0.02)
            .to(c, { opacity: 0, duration: 0.12 }, at + 0.34);
        });
        tl.fromTo(cnt, { v: 0 }, { v: PRO_N, duration: 0.5, ease: "none" }, 0.3);
        watch(() => Math.round(cnt.v), (n) => { if (!Fig1.live) Fig1.showCount(n); });
        show(tl, q(".l-il"), 0.35, true); show(tl, q(".l-il"), 0.9, false);
      },
      (tl) => { // the ring comes apart again, and the simulation is handed to the reader
        show(tl, q(".l-ring"), 0, false);
        tl.fromTo(speck, { scale: 1 }, { scale: 0, duration: 0.15, immediateRender: false }, 0.01);
        mono.forEach((g, i) => {
          tl.fromTo(g, { ...slot[i] }, { x: 0, y: 0, rotation: 0, duration: 0.32, ease: "power2.inOut", immediateRender: false }, 0.05 + i * 0.03);
          tl.fromTo($("path", g), { fill: "#15161a" }, { fill: "#4b4c52", duration: 0.1, immediateRender: false }, 0.05 + i * 0.03);
        });
        tl.fromTo(pro, { opacity: 0 }, { opacity: 1, duration: 0.15, stagger: 0.012, immediateRender: false }, 0.3);
        show(tl, q(".l-mono"), 0.5, true); show(tl, q(".l-pro"), 0.5, true);
        K.fade(tl, q(".f1-ui"), 0.45, { y: 14 });
        K.hit(tl, 0.6, "on");
        K.flag(tl, 0.8, (on) => { Fig1.setLive(on); Fig1.showCount(on ? null : Math.round(cnt.v)); });
      },
    ];
  }

  /* ---------- Fig. 2: axes draw, each population traces in as its day arrives, the balance assembles ---------- */
  function fig2Steps() {
    const root = Fig2.root, q = (s) => $$(s, root);
    const day = { v: 0 };
    const sweep = (tl, a, b, at, dur) => tl.fromTo(day, { v: a }, { v: b, duration: dur, ease: "none", immediateRender: false }, at);
    Fig2.setDay(0, false, true);
    watch(() => day.v, (v) => Fig2.setDay(v, false, hush));
    const guide = (tl, d, at) => tl.fromTo(q(`.dl[data-d="${d}"]`), { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.2, ease: "back.out(2)" }, at);
    return [
      (tl) => {
        K.fade(tl, q(".mi-plot .fig-tag"), 0, { y: 0 });
        K.draw(tl, q(".mi .ax"), 0, { dur: 0.5, ghost: true });
        K.fade(tl, q(".mi .tk"), 0.25, { each: 0.045, y: 10 });
        K.fade(tl, q(".mi .at"), 0.55, { y: 0 });
        K.hit(tl, 0.1, "tick"); K.hit(tl, 0.45, "tick");
      },
      (tl) => {
        guide(tl, 0, 0);
        tl.fromTo(q(".day-cursor"), { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.12);
        tl.fromTo(q(".day-line"), { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.3, ease: "power2.out" }, 0.12);
        tl.fromTo(q(".mi .dot"), { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.2, stagger: 0.06, ease: "back.out(3)" }, 0.4);
        K.hit(tl, 0.3, "thump");
      },
      (tl) => {
        guide(tl, 1, 0);
        K.draw(tl, q(".mi-curve.c-neut"), 0.05, { dur: 0.6, ghost: true }); K.draw(tl, q(".mi-curve.c-prom"), 0.22, { dur: 0.6, ghost: true });
        sweep(tl, 0, 1, 0.1, 0.6);
        K.hit(tl, 0.08, "slot", 1); K.hit(tl, 0.26, "slot", 2);
      },
      (tl) => {
        guide(tl, 3, 0); guide(tl, 5, 0.2);
        tl.fromTo(q(".band"), { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.1);
        K.draw(tl, q(".mi-curve.c-repm"), 0.05, { dur: 0.6, ghost: true });
        K.ghost(tl, q(".mi-curve.c-fib"), 0.7);
        tl.fromTo(q(".clipr"), { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 0.22);
        sweep(tl, 1, 4, 0.1, 0.65);
        K.hit(tl, 0.08, "slot", 3); K.hit(tl, 0.26, "slot", 4);
      },
      (tl) => {
        guide(tl, 7, 0);
        K.draw(tl, q(".mi-curve.c-ecm"), 0, { dur: 0.5, ghost: true });
        sweep(tl, 4, 7.6, 0.05, 0.55);
        K.fade(tl, q(".mi-bal .fig-tag"), 0.25, { y: 0 });
        K.fly(tl, q(".bk"), 0.3, { spread: 110, each: 0.08, dur: 0.34, sound: "pop", pitch: true });
        tl.fromTo(q(".b-arr"), { opacity: 0 }, { opacity: 1, duration: 0.15, stagger: 0.08 }, 0.72);
      },
      (tl) => {
        K.fly(tl, [...q(".mi-scrub"), ...q(".mi-keys"), ...q(".mi-role"), ...q(".mi-tx-wrap")], 0, { x: 0, y: 46, rot: 0, fade: 0.16, each: 0.13, dur: 0.4, sound: "slot", pitch: true });
      },
    ];
  }

  /* ---------- CoQuest card: outline draws, photo and text land, vibes pop in ---------- */
  function deckSteps(root) {
    const q = (s) => $$(s, root), card = $(".qcard", root), svg = $(".q-outline", root);
    const w = card.offsetWidth, h = card.offsetHeight, r = 18;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = `<path d="M${r} .5H${w - r}A${r - 0.5} ${r - 0.5} 0 0 1 ${w - 0.5} ${r}V${h - r}A${r - 0.5} ${r - 0.5} 0 0 1 ${w - r} ${h - 0.5}H${r}A${r - 0.5} ${r - 0.5} 0 0 1 .5 ${h - r}V${r}A${r - 0.5} ${r - 0.5} 0 0 1 ${r} .5Z"/>`;
    return [
      (tl) => {
        K.draw(tl, $("path", svg), 0, { dur: 0.55, ghost: true });
        K.hit(tl, 0.05, "tick");
        tl.fromTo(q(".q-sheet"), { x: -70, y: -40, rotation: -16, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, duration: 0.35, stagger: 0.1, ease: "back.out(1.6)" }, 0.3);
        tl.fromTo(q(".qface.front"), { backgroundColor: "rgba(248,246,240,0)", borderColor: "rgba(21,22,26,0)" }, { backgroundColor: "rgba(248,246,240,1)", borderColor: "rgba(21,22,26,1)", duration: 0.2 }, 0.5);
        tl.fromTo(svg, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0.7);
        K.fly(tl, q(".q-photo"), 0.5, { x: 60, y: -260, rot: 14, dur: 0.42, ease: "back.out(1.4)" });
        K.hit(tl, 0.5, "slot", 0); K.hit(tl, 0.8, "thump");
      },
      (tl) => {
        K.fly(tl, [...q(".q-area"), ...q(".q-title"), ...q(".q-hook")], 0, { x: 240, y: 0, rot: 5, each: 0.2, dur: 0.4, sound: "slot", pitch: true });
      },
      (tl) => {
        tl.fromTo(q(".q-vibes"), { borderTopColor: "rgba(21,22,26,0)" }, { borderTopColor: "rgba(21,22,26,.42)", duration: 0.2 }, 0);
        K.fly(tl, q(".q-vibe"), 0.05, { spread: 170, each: 0.12, dur: 0.34, sound: "pop", pitch: true });
        K.fly(tl, [...q(".deck-row"), ...q(".deck-intro")], 0.6, { x: 0, y: 24, rot: 0, fade: 0, each: 0.1, dur: 0.3 });
        K.hit(tl, 0.85, "success");
      },
    ];
  }

  /* ---------- Contact: the mark draws, a line traces out to each node, the nodes land ---------- */
  function netSteps(sec) {
    const q = (s) => $$(s, sec);
    return [
      (tl) => {
        if (window.SplitText) {
          const sp = window.SplitText.create($(".contact-h", sec), { type: "words,chars" });
          tl.fromTo(sp.chars, { yPercent: 70, opacity: 0, rotation: 8 }, { yPercent: 0, opacity: 1, rotation: 0, duration: 0.3, stagger: 0.025, ease: "back.out(1.8)" }, 0);
        }
        K.fade(tl, [...q(".contact-lede"), ...q(".contact-head .btn")], 0.3, { each: 0.1, y: 16 });
        tl.fromTo(q(".net-center"), { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.1);
        K.draw(tl, q(".net-center path"), 0.12, { dur: 0.35 });
        K.hit(tl, 0.2, "tick");
        const os = Net.nodes.map(() => ({ l: 0, a: 0 }));
        os.forEach((o, i) => {
          tl.fromTo(o, { l: 0 }, { l: 1, duration: 0.28, ease: "power2.out" }, 0.3 + i * 0.16)
            .fromTo(o, { a: 0 }, { a: 1, duration: 0.34, ease: "none" }, 0.42 + i * 0.16);
          K.hit(tl, 0.66 + i * 0.16, "slot", i);
        });
        watch(() => os.map((o) => o.a.toFixed(3) + o.l.toFixed(3)).join(), () => os.forEach((o, i) => Net.asm(i, o.a, o.l)), true);
        tl.fromTo(q(".ln-faint"), { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.92);
        K.fade(tl, q(".net-fig figcaption"), 0.9, { y: 0 });
      },
    ];
  }

  /* ======================================================================
     ENTER — type and small parts that arrive with the page (SplitText) or as they scroll into view
     ====================================================================== */
  function enter(el, delay = 0) {
    if (!MOTION) return;
    const ST_ONCE = (trigger) => ({ trigger, start: "top 90%", once: true });
    const SplitText = window.SplitText;
    $$("[data-lines]", el).forEach((t) => {
      if (!SplitText) return;
      SplitText.create(t, { type: "lines", mask: "lines", linesClass: "line", autoSplit: true, onSplit: (self) => G.from(self.lines, { yPercent: 108, duration: 0.95, ease: "power4.out", stagger: 0.09, delay, scrollTrigger: ST_ONCE(t) }) });
    });
    $$("[data-chars]", el).forEach((t) => {
      if (!SplitText) return;
      const sp = SplitText.create(t, { type: "words,chars" });
      G.from(sp.chars, { yPercent: 60, opacity: 0, rotation: 7, duration: 0.9, ease: "back.out(1.5)", stagger: 0.035, delay, scrollTrigger: ST_ONCE(t) });
    });
    const rise = $$("[data-rise]", el);
    G.set(rise, { opacity: 0, y: 26 });
    ST.batch(rise, { start: "top 92%", once: true, onEnter: (b) => G.to(b, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.07, delay, overwrite: true }) });
    $$("[data-count]", el).forEach((c) => {
      const n = +c.dataset.count, o = { v: 0 };
      c.textContent = "0";
      G.to(o, { v: n, duration: n > 1000 ? 2 : 1.4, ease: "expo.out", delay: delay + 0.15, onUpdate: () => (c.textContent = fmt(o.v)), onComplete: () => (c.textContent = fmt(n)), scrollTrigger: ST_ONCE(c) });
    });
    $$(".arrow-svg", el).forEach((a) => G.from($$("path", a), { drawSVG: "0% 0%", duration: 0.7, stagger: 0.25, ease: "power2.out", scrollTrigger: ST_ONCE(a) }));
  }

  /* ======================================================================
     MOUNT — what each view sets up when it is shown (torn down again by gsap.context)
     ====================================================================== */
  let arrive = null; // story to "take apart" right after a detail page lands
  const mounts = {
    about(el) {
      Net.layout();
      const fig = Fig1.el;
      if (!MOTION) { Fig1.setLive(true); return; }
      Fig1.setLive(false);
      const steps = fig1Steps(), hero = G.timeline({ delay: 0.15 });
      hero.add(NameSig.timeline(), 0);
      steps.slice(0, 3).forEach((fn, i) => { const t = G.timeline(); fn(t); hero.add(t, 0.55 + i * 0.8); });
      const last = G.timeline();
      K.fade(last, $$(".f1-ui", fig), 0, { y: 14 });
      last.fromTo($$(".readout", fig), { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0);
      K.flag(last, 0.25, (on) => Fig1.setLive(on));
      hero.add(last, 3.1);
      hero.from($$(".hero-meta li", el), { opacity: 0, x: -14, duration: 0.6, stagger: 0.07, ease: "power2.out" }, 1.1);
      hero.from($$(".hero-fignote", el), { opacity: 0, duration: 0.6 }, 3.1);
      story($(".contact", el), netSteps($(".contact", el)));
      return () => Net.nodes.forEach((_, i) => Net.asm(i, 1, 1));
    },
    research(el) {
      if (!MOTION) return;
      $$(".plate", el).forEach((p) => {
        G.from(p, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: p, start: "top 90%", once: true } });
        const strokes = $$(".c-mem, .mi-curve:not(.c-fib), .sh-line, .dys, .ax", p);
        if (strokes.length) G.from(strokes, { drawSVG: "0% 0%", duration: 1.3, stagger: 0.1, ease: "power2.inOut", scrollTrigger: { trigger: p, start: "top 85%", once: true } });
      });
    },
    "research/inflammasome"() {
      if (!Chain1) return;
      Chain1.reset();
      const t = setTimeout(() => Chain1.start(), 450); // (once the page turn has lifted)
      return () => { clearTimeout(t); Chain1.stop(); };
    },
    "research/heart-repair"(el) {
      const st = story($(".story", el), fig2Steps());
      if (st && !st.mobile) arrive = { st };
      if (Fig2.pulse) Fig2.pulse.start();
      return () => { if (Fig2.pulse) Fig2.pulse.stop(); Fig2.setDay(1, false, true); };
    },
    "research/seahorse"() {
      if (!Chain3) return;
      Chain3.reset();
      const t = setTimeout(() => Chain3.start(), 450); // (once the page turn has lifted)
      return () => { clearTimeout(t); Chain3.stop(); };
    },
    "research/muscle-dmd"() {
      if (!Chain4) return;
      Chain4.reset();
      const t = setTimeout(() => Chain4.start(), 450); // (once the page turn has lifted)
      return () => { clearTimeout(t); Chain4.stop(); };
    },
    ventures(el) {
      const sec = $(".story", el);
      story(sec, deckSteps(sec));
    },
  };

  /* ======================================================================
     ROUTER — hash routes (#/page or #/page/sub). Pages change with a page turn;
     a figure opened from another page flies there as a shared element (Flip).
     ====================================================================== */
  const navLinks = $$(".nav-link", navEl);
  let current = null, ctx = null, cleanup = null, token = 0, pendingFlip = null, lastExp = "clinical";
  function parse(hash) {
    let raw = decodeURIComponent(hash.replace(/^#\/?/, "")), anchor = null;
    if (raw.includes("#")) [raw, anchor] = raw.split("#");
    const rd = C.redirects[raw] || (!VIEWS.some((v) => v.id === raw) && C.redirects[raw.split("/")[0]]);
    if (rd) { const [r2, a2] = rd.split("#"); raw = r2; anchor = a2 || anchor; }
    const top = raw.split("/")[0];
    const view = VIEWS.find((v) => v.id === raw) || (top === "experience" ? VIEWS.find((v) => v.id === `experience/${lastExp}`) : VIEWS.find((v) => v.id === top)) || VIEWS[0];
    return { view, anchor };
  }
  function toAnchor(id) {
    const t = document.getElementById(id);
    if (!t) return;
    const pin = ST && ST.getAll().find((x) => x.pin && x.trigger === t);
    if (lenis) lenis.scrollTo(pin ? pin.end : t, { offset: pin ? 0 : -navH(), duration: 1.4 });
    else t.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "start" });
  }
  function unmount() {
    if (ctx) { ctx.revert(); ctx = null; }
    watchers = [];
    if (cleanup) { try { cleanup(); } catch (e) { /* noop */ } cleanup = null; }
    arrive = null; hush = false;
    ghosts.forEach((g) => g.remove()); ghosts = [];
    $$(".is-pinned").forEach((s) => s.classList.remove("is-pinned"));
    $$(".step.on").forEach((s) => s.classList.remove("on"));
  }
  function mountFig1(view) {
    const slot = view.id === "about" ? $('[data-slot="about"]') : null;
    if (slot && Fig1.el.parentElement !== slot) slot.appendChild(Fig1.el);
  }
  function show(view, { initial, flip, anchor, soft }) {
    unmount();
    const el = viewEl(view.id);
    VIEWS.forEach((v) => { const e = viewEl(v.id); e.hidden = v !== view; e.style.opacity = ""; e.style.transform = ""; });
    current = view;
    if (view.top === "experience") lastExp = view.sub;
    scrollTop();
    mountFig1(view);
    Underlines.scan(el);
    Underlines.current($$(".flow-link", el), (a) => a.getAttribute("href") === href(view.id));
    const delay = initial ? 0.1 : flip || soft ? 0.05 : 0.3;
    if (G) {
      ctx = G.context(() => {
        const fn = mounts[view.id];
        cleanup = (fn && fn(el)) || null;
        enter(el, delay);
        ST.refresh(); // measure pins first, so the arrival state set below is not reset by a later refresh
        if (flip && MOTION && window.Flip) {
          const target = $(`[data-flip-id="${flip.id}"]`, el);
          if (target) window.Flip.from(flip.state, { targets: target, duration: 0.9, ease: "power3.inOut", scale: true, absolute: false, zIndex: 40 });
          const rest = [...el.children].filter((c) => !c.contains(target));
          G.from(rest, { opacity: 0, duration: 0.6, delay: 0.25 });
        }
        if (arrive) {
          const { st, before, keepLive } = arrive, d = flip ? 1.0 : 0.75;
          if (before && keepLive) G.delayedCall(d, before);
          st.explode(d);
        }
        if (soft && MOTION) G.from(el, { opacity: 0, y: 18, duration: 0.5, ease: "power2.out" });
      });
    } else if (view.id === "about") Fig1.setLive(true);
    else if (view.id === "research/inflammasome" && Chain1) { Chain1.reset(); Chain1.start(); }
    else if (view.id === "research/seahorse" && Chain3) { Chain3.reset(); Chain3.start(); }
    else if (view.id === "research/muscle-dmd" && Chain4) { Chain4.reset(); Chain4.start(); }
    Fig1.resize(); Net.layout();
    if (anchor) setTimeout(() => toAnchor(anchor), initial ? 500 : 900);
    if (!initial) viewsEl.focus({ preventScroll: true });
  }
  const fadeOthers = (src, root) => { const out = []; for (let n = src; n && n !== root; n = n.parentElement) [...n.parentElement.children].forEach((c) => c !== n && out.push(c)); return out; };
  function route(initial) {
    const { view, anchor } = parse(location.hash);
    const canon = href(view.id);
    if (location.hash !== canon) history.replaceState(null, "", canon);
    if (current === view) { if (anchor) toAnchor(anchor); return; }
    const from = current, flip = pendingFlip, my = ++token;
    pendingFlip = null;
    Underlines.current(navLinks, (a) => a.dataset.id === view.top);
    document.title = view.id === "about" ? C.name : `${view.label} · ${view.sub ? `${PAGES.find((p) => p.id === view.top).tab} · ` : ""}${C.name}`;
    const go = (extra) => { if (my === token) show(view, { initial, flip, anchor, ...extra }); };
    if (initial || !from || !MOTION) { go(); return; }
    if (from.top !== view.top) Sound.play("tabSwitch", view.top); else Sound.play("thump");
    if (flip && flip.src) {
      const out = fadeOthers(flip.src, viewEl(from.id));
      G.to(out, { opacity: 0, duration: 0.28, ease: "power1.in", onComplete: () => { G.set(out, { clearProps: "opacity" }); go(); } });
    } else if (from.top === "experience" && view.top === "experience") {
      G.to($$(":scope > :not(.exp-head)", viewEl(from.id)), { opacity: 0, y: -14, duration: 0.24, ease: "power1.in", onComplete: () => { G.set($$(":scope > *", viewEl(from.id)), { clearProps: "opacity,transform" }); go({ soft: true }); } });
    } else Wipe.run(view.label, go);
  }
  // a link marked data-flip carries its figure along to the detail page
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[data-flip]");
    if (!a || !MOTION || !window.Flip || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const src = $(`.view:not([hidden]) [data-flip-id="${a.dataset.flip}"]`);
    if (src) pendingFlip = { id: a.dataset.flip, src, state: window.Flip.getState(src) };
  }, true);
  addEventListener("hashchange", () => route(false));

  let rT = 0, lastW = innerWidth, lastPin = canPin();
  addEventListener("resize", () => {
    clearTimeout(rT);
    rT = setTimeout(() => {
      if (innerWidth === lastW) return;
      lastW = innerWidth;
      Underlines.scan();
      if (canPin() !== lastPin && current) { lastPin = canPin(); const v = current; current = null; show(v, { initial: true }); }
    }, 250);
  });

  // boot once the fonts are in (type is measured for the name, the underlines and the line splits)
  const boot = () => { NameSig.build(); Underlines.scan($(".nav")); document.documentElement.classList.remove("booting"); route(true); };
  if (document.fonts && document.fonts.status !== "loaded") Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1800))]).then(boot);
  else boot();
})();
