const QUIZ_DATA = [
  // ==========================================
  // MODULE 1: NPTEL Design Thinking - Core (100 Qs)
  // ==========================================
  {
    id: "dt-m1-q1",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which of the following is the first stage in the Design Thinking process?",
    options: ["Ideate", "Empathize", "Prototype", "Test"],
    answer: 1,
    explanation: "Empathize is the initial stage where design thinkers gain an empathetic understanding of the problem and user needs."
  },
  {
    id: "dt-m1-q2",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Design Thinking is primarily a ________ approach.",
    options: ["Linear", "Iterative", "Random", "Fixed"],
    answer: 1,
    explanation: "Design Thinking is an iterative process where findings in later stages continuously inform and refine earlier stages."
  },
  {
    id: "dt-m1-q3",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which mindset is essential for Design Thinking?",
    options: ["Competitive mindset", "Growth mindset", "Fixed mindset", "Negative mindset"],
    answer: 1,
    explanation: "A growth mindset embraces learning, experimentation, user feedback, and continuous improvement."
  },
  {
    id: "dt-m1-q4",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "The focus of Design Thinking is on:",
    options: ["Cost reduction", "Human-centered solutions", "Market expansion", "Industrial automation"],
    answer: 1,
    explanation: "Human-centered solutions put human needs, behaviors, and experiences at the heart of the design process."
  },
  {
    id: "dt-m1-q5",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which company popularized Design Thinking globally?",
    options: ["IDEO", "Microsoft", "Samsung", "IBM"],
    answer: 0,
    explanation: "IDEO, led by David Kelley and Tim Brown, played a pivotal role in popularizing Design Thinking worldwide."
  },
  {
    id: "dt-m1-q6",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "In the empathy phase, the key activity is:",
    options: ["Building prototypes", "Understanding users", "Marketing strategy", "Cost analysis"],
    answer: 1,
    explanation: "Understanding users through observation, interviews, and immersion is the central activity of the Empathize phase."
  },
  {
    id: "dt-m1-q7",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which of these is NOT a stage of Design Thinking?",
    options: ["Define", "Ideate", "Execute", "Test"],
    answer: 2,
    explanation: "The standard 5 stages of Stanford d.school Design Thinking are Empathize, Define, Ideate, Prototype, and Test. 'Execute' is not one of them."
  },
  {
    id: "dt-m1-q8",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Divergent thinking is mainly used in which stage?",
    options: ["Define", "Ideate", "Prototype", "Test"],
    answer: 1,
    explanation: "Ideation relies heavily on divergent thinking to generate a wide variety and large quantity of creative solutions."
  },
  {
    id: "dt-m1-q9",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "The term “wicked problems” in Design Thinking refers to:",
    options: ["Problems with only one solution", "Problems that are easy to solve", "Problems that are complex and undefined", "Problems related to evil motives"],
    answer: 2,
    explanation: "Wicked problems are complex, ambiguous, interconnected, and lack a single optimal solution."
  },
  {
    id: "dt-m1-q10",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which of the following is an example of empathy in Design Thinking?",
    options: ["Studying customer complaints", "Preparing a business plan", "Brainstorming in a team", "Marketing products"],
    answer: 0,
    explanation: "Studying customer complaints directly investigates real user frustrations, pain points, and experiences."
  },
  {
    id: "dt-m1-q11",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which stage converts ideas into tangible solutions?",
    options: ["Prototype", "Define", "Empathize", "Test"],
    answer: 0,
    explanation: "Prototyping brings ideas out of the abstract into physical or digital mock-ups that users can experience."
  },
  {
    id: "dt-m1-q12",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "The main outcome of the “Define” stage is:",
    options: ["Problem statement", "Prototype", "Empathy map", "Market report"],
    answer: 0,
    explanation: "The Define stage synthesizes research insights into a meaningful, user-centered Problem Statement (or POV)."
  },
  {
    id: "dt-m1-q13",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Brainstorming sessions should encourage:",
    options: ["Criticism", "Wild ideas", "Limited participation", "Silence"],
    answer: 1,
    explanation: "Encouraging wild ideas expands the search space and fosters innovative thinking during ideation."
  },
  {
    id: "dt-m1-q14",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "“Fail fast, learn fast” is related to:",
    options: ["Empathizing", "Prototyping", "Defining", "Divergent thinking"],
    answer: 1,
    explanation: "Rapid low-fidelity prototyping allows teams to fail cheaply and quickly learn what works."
  },
  {
    id: "dt-m1-q15",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Human-centered design means focusing on:",
    options: ["Profit first", "User needs", "Technology advancement", "Cost cutting"],
    answer: 1,
    explanation: "Human-centered design starts and ends with deep empathy for human needs and behaviors."
  },
  {
    id: "dt-m1-q16",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which tool is most commonly used in empathy phase?",
    options: ["SWOT analysis", "Interview and observation", "Gantt chart", "Fishbone diagram"],
    answer: 1,
    explanation: "Interviews and qualitative observation allow designers to discover unspoken user needs."
  },
  {
    id: "dt-m1-q17",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Which is an example of convergent thinking?",
    options: ["Generating as many ideas as possible", "Narrowing down to best solution", "Brainstorming", "Mind mapping"],
    answer: 1,
    explanation: "Convergent thinking filters, synthesizes, and selects the most viable option from generated possibilities."
  },
  {
    id: "dt-m1-q18",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "The prototype stage should be:",
    options: ["Expensive and perfect", "Quick and low cost", "Long and detailed", "Formal and final"],
    answer: 1,
    explanation: "Prototypes should be quick and inexpensive to minimize investment while maximizing early learning."
  },
  {
    id: "dt-m1-q19",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "Empathy maps are divided into:",
    options: ["Think, Feel, Say, Do", "SWOT, PEST, Porter's", "Inputs, Outputs, Process", "Cost, Benefit, Value"],
    answer: 0,
    explanation: "An Empathy Map synthesizes research into four quadrants: What the user Thinks, Feels, Says, and Does."
  },
  {
    id: "dt-m1-q20",
    module: "Core Design Thinking",
    section: "Basics of Design Thinking",
    question: "The aim of Design Thinking is to find:",
    options: ["Any solution", "Feasible, viable, desirable solution", "Cheapest solution", "Easiest solution"],
    answer: 1,
    explanation: "Design thinking balances Desirability (user needs), Feasibility (technology capability), and Viability (business logic)."
  },
  {
    id: "dt-m1-q21",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which method is NOT used in Ideation phase?",
    options: ["Brainstorming", "SCAMPER", "Rapid prototyping", "Mind mapping"],
    answer: 2,
    explanation: "Rapid prototyping belongs to the Prototype phase, whereas Brainstorming, SCAMPER, and Mind Mapping generate ideas."
  },
  {
    id: "dt-m1-q22",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "SCAMPER stands for:",
    options: [
      "Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse",
      "Solve, Combine, Adjust, Make, Plan, Execute, Report",
      "Simplify, Combine, Apply, Manage, Plan, Enhance, Resolve",
      "Substitute, Compare, Adjust, Manage, Plan, Execute, Reverse"
    ],
    answer: 0,
    explanation: "SCAMPER is an acronym for Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, and Reverse."
  },
  {
    id: "dt-m1-q23",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Role of storytelling in design thinking is to:",
    options: ["Entertain audience", "Communicate user needs and insights", "Replace prototyping", "Reduce cost"],
    answer: 1,
    explanation: "Storytelling humanizes data, builds empathy, and effectively communicates user journeys to stakeholders."
  },
  {
    id: "dt-m1-q24",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "The Double Diamond model has how many stages?",
    options: ["Two", "Four", "Five", "Six"],
    answer: 1,
    explanation: "The UK Design Council Double Diamond consists of 4 stages: Discover, Define, Develop, Deliver."
  },
  {
    id: "dt-m1-q25",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Personas are created to represent:",
    options: ["Random customers", "Real users with key traits", "Employees", "Competitors"],
    answer: 1,
    explanation: "Personas are research-grounded archetypes summarizing real user goals, behaviors, and pain points."
  },
  {
    id: "dt-m1-q26",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which of these is NOT a benefit of prototyping?",
    options: ["Early feedback", "Saving time", "Avoiding all failures", "Improving design iteratively"],
    answer: 2,
    explanation: "Prototyping does NOT avoid all failures; instead, it encourages early failure to learn quickly."
  },
  {
    id: "dt-m1-q27",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Divergent thinking encourages:",
    options: ["Exploring multiple ideas", "Selecting only one idea", "Reducing creativity", "Avoiding experiments"],
    answer: 0,
    explanation: "Divergent thinking expands choices and explores diverse creative angles."
  },
  {
    id: "dt-m1-q28",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "A prototype should be:",
    options: ["User-tested", "Hidden from users", "Fully perfect", "Only internal document"],
    answer: 0,
    explanation: "Prototypes are built specifically to be tested with target users for validation."
  },
  {
    id: "dt-m1-q29",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Affinity diagrams are used to:",
    options: ["Organize data and insights", "Build prototypes", "Calculate costs", "Measure performance"],
    answer: 0,
    explanation: "Affinity diagrams group sticky notes and qualitative observations into thematic clusters."
  },
  {
    id: "dt-m1-q30",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "“How Might We” questions are created during:",
    options: ["Define phase", "Test phase", "Prototype phase", "Empathize phase"],
    answer: 0,
    explanation: "HMW statements frame problem insights into open-ended opportunity questions during Define."
  },
  {
    id: "dt-m1-q31",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Low-fidelity prototypes are usually:",
    options: ["Digital, interactive models", "Rough sketches or paper models", "Fully functional products", "Market-ready solutions"],
    answer: 1,
    explanation: "Low-fidelity prototypes include paper sketches, storyboards, and cardboard mockups."
  },
  {
    id: "dt-m1-q32",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which is an example of a physical prototype?",
    options: ["Wireframe", "3D-printed model", "Storyboard", "Flowchart"],
    answer: 1,
    explanation: "A 3D-printed model is a physical tangible representation of a product design."
  },
  {
    id: "dt-m1-q33",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Empathy requires:",
    options: ["Understanding and sharing feelings of users", "Only data analysis", "Ignoring user perspective", "Focusing on technology only"],
    answer: 0,
    explanation: "Empathy involves understanding user perspectives, emotions, motivations, and pain points."
  },
  {
    id: "dt-m1-q34",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Design Thinking is best used for:",
    options: ["Well-defined problems", "Ill-defined, complex problems", "Simple calculations", "Repetitive work"],
    answer: 1,
    explanation: "Design Thinking excels at tackling ill-defined, complex 'wicked' problems centered around people."
  },
  {
    id: "dt-m1-q35",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which of the following is NOT a part of Human-Centered Design?",
    options: ["Desirability", "Feasibility", "Viability", "Profitability only"],
    answer: 3,
    explanation: "Human-centered design balances Desirability, Feasibility, and Viability. Focusing solely on profit breaks human-centricity."
  },
  {
    id: "dt-m1-q36",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which activity comes first among these options?",
    options: ["Ideate", "Define", "Prototype", "Test"],
    answer: 1,
    explanation: "In chronological sequence of standard design thinking: Empathize -> Define -> Ideate -> Prototype -> Test. Among these options, Define comes first."
  },
  {
    id: "dt-m1-q37",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which type of research is used to understand user emotions?",
    options: ["Quantitative", "Qualitative", "Statistical", "Computational"],
    answer: 1,
    explanation: "Qualitative research (interviews, observation, empathy maps) captures emotions, underlying motives, and feelings."
  },
  {
    id: "dt-m1-q38",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "MVP in design thinking stands for:",
    options: ["Minimum Viable Product", "Most Valuable Product", "Maximum Value Prototype", "Main Visual Plan"],
    answer: 0,
    explanation: "Minimum Viable Product (MVP) is the simplest version of a product usable for early customer feedback."
  },
  {
    id: "dt-m1-q39",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Testing phase helps in:",
    options: ["Understanding if solution works for users", "Avoiding feedback", "Finalizing design without changes", "Reducing empathy"],
    answer: 0,
    explanation: "Testing evaluates whether prototypes solve real user problems effectively."
  },
  {
    id: "dt-m1-q40",
    module: "Core Design Thinking",
    section: "Tools & Techniques",
    question: "Which mindset helps generate new possibilities?",
    options: ["Beginner’s mindset", "Critical mindset", "Negative mindset", "Mechanical mindset"],
    answer: 0,
    explanation: "A Beginner's mindset approaches problems without preconceived notions or assumptions."
  },
  {
    id: "dt-m1-q41",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "A company redesigns its website after interviewing users. Which phase is this initial user research?",
    options: ["Prototype", "Empathize", "Test", "Define"],
    answer: 1,
    explanation: "Interviewing users to gather insights is part of the Empathize phase."
  },
  {
    id: "dt-m1-q42",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "When a designer asks “What is the real problem we are solving?”, he is in:",
    options: ["Ideate", "Define", "Prototype", "Test"],
    answer: 1,
    explanation: "Framing the true core problem statement takes place in the Define phase."
  },
  {
    id: "dt-m1-q43",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Rapid prototyping saves:",
    options: ["Cost & time", "Only money", "Only user effort", "None"],
    answer: 0,
    explanation: "Uncovering flaws early in quick mockups saves both development cost and project time."
  },
  {
    id: "dt-m1-q44",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "“Fail early” principle encourages:",
    options: ["Experimenting and learning quickly", "Avoiding mistakes", "Avoiding user feedback", "Avoiding risk"],
    answer: 0,
    explanation: "Failing early allows teams to experiment, adapt, and pivot while investment is still low."
  },
  {
    id: "dt-m1-q45",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Which is an empathy-building activity?",
    options: ["Online surveys", "Financial analysis", "Competitor analysis", "Project budgeting"],
    answer: 0,
    explanation: "Online surveys collect user input, experiences, and feelings directly from users."
  },
  {
    id: "dt-m1-q46",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Empathy maps help in:",
    options: ["Understanding user perspective", "Deciding budget", "Defining competition", "Writing code"],
    answer: 0,
    explanation: "Empathy mapping visualizes what users think, feel, say, and do to understand their perspective."
  },
  {
    id: "dt-m1-q47",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Double diamond model phases: Discover, Define, ______, Deliver",
    options: ["Develop", "Design", "Discuss", "Determine"],
    answer: 0,
    explanation: "The four steps of the Double Diamond are Discover, Define, Develop, and Deliver."
  },
  {
    id: "dt-m1-q48",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Testing prototypes with users provides:",
    options: ["Validation and insights", "Final approval only", "No value", "Only cost data"],
    answer: 0,
    explanation: "User testing validates assumptions and provides qualitative insights for refinement."
  },
  {
    id: "dt-m1-q49",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Who benefits most from design thinking approach?",
    options: ["Users and businesses", "Only designers", "Only management", "None"],
    answer: 0,
    explanation: "Design thinking delivers desirable products for users and viable outcomes for businesses."
  },
  {
    id: "dt-m1-q50",
    module: "Core Design Thinking",
    section: "Case Studies & Applications",
    question: "Design thinking encourages:",
    options: ["Collaboration", "Working alone", "Avoiding teamwork", "Competition only"],
    answer: 0,
    explanation: "Multi-disciplinary collaboration leverages diverse skillsets to solve complex problems."
  },
  {
    id: "dt-m1-q51",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "The main advantage of co-creation workshops is:",
    options: ["More hierarchy", "Involving stakeholders early", "Reducing collaboration", "Avoiding feedback"],
    answer: 1,
    explanation: "Co-creation engages users, business leaders, and developers early in collaborative design."
  },
  {
    id: "dt-m1-q52",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which of these is NOT a common brainstorming rule?",
    options: ["Defer judgment", "Encourage wild ideas", "Build on others’ ideas", "Criticize ideas immediately"],
    answer: 3,
    explanation: "Criticizing ideas stifles creative flow. Brainstorming rules require deferring judgment."
  },
  {
    id: "dt-m1-q53",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Human-centered design focuses on three overlapping lenses:",
    options: ["Technology, Cost, Time", "Desirability, Feasibility, Viability", "Design, Development, Delivery", "Product, Price, Place"],
    answer: 1,
    explanation: "Optimal innovation occurs at the intersection of Desirability, Feasibility, and Viability."
  },
  {
    id: "dt-m1-q54",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "A journey map helps to:",
    options: ["Visualize user’s experience step by step", "Calculate budget", "Test prototype", "Recruit participants"],
    answer: 0,
    explanation: "Customer Journey Maps plot end-to-end user touchpoints, emotional highs, and friction points."
  },
  {
    id: "dt-m1-q55",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which is a characteristic of wicked problems?",
    options: ["Easy to define", "No clear solution", "Always technical", "Quickly solved"],
    answer: 1,
    explanation: "Wicked problems have incomplete or contradictory requirements with no single clear-cut answer."
  },
  {
    id: "dt-m1-q56",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which method is used for clustering ideas?",
    options: ["Affinity mapping", "SWOT analysis", "Brain dump", "Fishbone diagram"],
    answer: 0,
    explanation: "Affinity mapping synthesizes diverse notes into logical clusters."
  },
  {
    id: "dt-m1-q57",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Stakeholder mapping is used to:",
    options: ["Identify key people affected by design", "Create product prototype", "Define cost", "Market the product"],
    answer: 0,
    explanation: "Stakeholder mapping identifies key influencers, decision makers, and users impacted by a project."
  },
  {
    id: "dt-m1-q58",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which type of prototype tests functionality best?",
    options: ["High fidelity", "Low fidelity", "Paper sketches", "Mind map"],
    answer: 0,
    explanation: "High-fidelity prototypes closely mimic final functionality, UI interactions, and system behavior."
  },
  {
    id: "dt-m1-q59",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which is an empathy-building technique?",
    options: ["Immersion (experiencing as user)", "Financial projection", "Competitor pricing", "Product roadmapping"],
    answer: 0,
    explanation: "Immersion allows designers to walk in the user's shoes by experiencing tasks firsthand."
  },
  {
    id: "dt-m1-q60",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Ideation phase is about:",
    options: ["Generating as many ideas as possible", "Finalizing one idea immediately", "Avoiding creativity", "Reducing possibilities"],
    answer: 0,
    explanation: "Ideation focuses on generating broad volume and diverse choices before narrowing down."
  },
  {
    id: "dt-m1-q61",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which is NOT a part of Double Diamond model?",
    options: ["Discover", "Define", "Deliver", "Deploy software"],
    answer: 3,
    explanation: "The Double Diamond steps are Discover, Define, Develop, Deliver. 'Deploy software' is a software dev term."
  },
  {
    id: "dt-m1-q62",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which phase validates problem understanding?",
    options: ["Define", "Test", "Prototype", "Ideate"],
    answer: 0,
    explanation: "The Define phase frames and validates problem understanding before jumping into solutions."
  },
  {
    id: "dt-m1-q63",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Design Thinking helps organizations be more:",
    options: ["User-centered", "Technology-driven only", "Profit-focused only", "Rule-based"],
    answer: 0,
    explanation: "Design thinking shifts organizational focus toward understanding human needs and user experience."
  },
  {
    id: "dt-m1-q64",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Role of feedback in testing is to:",
    options: ["Improve solution iteratively", "Reject all ideas", "End process", "Reduce innovation"],
    answer: 0,
    explanation: "User feedback during testing reveals flaws and guides iterative solution enhancements."
  },
  {
    id: "dt-m1-q65",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which is an example of divergent thinking activity?",
    options: ["Brainstorming", "Selecting best idea", "Prioritization matrix", "Final testing"],
    answer: 0,
    explanation: "Brainstorming generates multiple ideas without early constraints or filtering."
  },
  {
    id: "dt-m1-q66",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which method compares multiple solutions based on impact vs. effort?",
    options: ["Impact-effort matrix", "Affinity diagram", "Empathy map", "Journey map"],
    answer: 0,
    explanation: "An Impact-Effort matrix plots ideas on a 2x2 grid to prioritize high-impact, low-effort solutions."
  },
  {
    id: "dt-m1-q67",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "The term “prototype” means:",
    options: ["Early sample or model of product", "Final production model", "Marketing brochure", "Software release note"],
    answer: 0,
    explanation: "A prototype is a preliminary experimental model created to test concepts and learn."
  },
  {
    id: "dt-m1-q68",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "What is “co-creation”?",
    options: ["Designing with users and stakeholders", "Designing alone", "Copying competitor ideas", "Avoiding user input"],
    answer: 0,
    explanation: "Co-creation involves active collaboration between designers, end-users, and key stakeholders."
  },
  {
    id: "dt-m1-q69",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which phase allows re-framing of problem statement?",
    options: ["Define", "Test", "Prototype", "Implement"],
    answer: 0,
    explanation: "Re-framing problem perspectives is a core outcome of the Define stage."
  },
  {
    id: "dt-m1-q70",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "When a team uses role-play to understand user perspective, they are:",
    options: ["Building empathy", "Testing cost", "Finalizing design", "Measuring performance"],
    answer: 0,
    explanation: "Role-playing puts designers in user scenarios to feel and experience user interactions."
  },
  {
    id: "dt-m1-q71",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which thinking mode is used during “Ideate”?",
    options: ["Divergent thinking", "Convergent thinking only", "Linear thinking", "Critical thinking only"],
    answer: 0,
    explanation: "Divergent thinking expands possibilities during ideation."
  },
  {
    id: "dt-m1-q72",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which design principle ensures everyone’s ideas are heard?",
    options: ["Radical collaboration", "Expert-only discussion", "Silent decision-making", "Fixed hierarchy"],
    answer: 0,
    explanation: "Radical collaboration breaks down silos and ensures cross-functional voices are valued equally."
  },
  {
    id: "dt-m1-q73",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Minimum Viable Product (MVP) helps to:",
    options: ["Test assumptions early", "Delay feedback", "Spend maximum resources", "Avoid users"],
    answer: 0,
    explanation: "MVPs test core value propositions with real users while spending minimum build resources."
  },
  {
    id: "dt-m1-q74",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Which tool converts insights into “problem statements”?",
    options: ["POV (Point of View) statement", "Gantt chart", "Kanban board", "SWOT analysis"],
    answer: 0,
    explanation: "A POV statement structures user insights into a clear problem statement frame."
  },
  {
    id: "dt-m1-q75",
    module: "Core Design Thinking",
    section: "Advanced Understanding",
    question: "Storyboarding is used to:",
    options: ["Visualize user scenarios step by step", "Track project deadlines", "Build final prototype", "Analyze costs"],
    answer: 0,
    explanation: "Storyboards visually depict user interaction sequences and contexts using comic-style frames."
  },
  {
    id: "dt-m1-q76",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Rapid experimentation helps teams:",
    options: ["Learn quickly and pivot", "Avoid user testing", "Delay solution", "Work in isolation"],
    answer: 0,
    explanation: "Rapid experiments validate hypothesis quickly, enabling fast learning loops and tactical pivots."
  },
  {
    id: "dt-m1-q77",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which phase may repeat multiple times until a good solution emerges?",
    options: ["All phases", "Empathize only", "Prototype only", "Test only"],
    answer: 0,
    explanation: "Design thinking is non-linear and iterative; any phase can be revisited as new discoveries emerge."
  },
  {
    id: "dt-m1-q78",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "The term “iteration” in design thinking means:",
    options: ["Repeating process to refine solutions", "Ending process after first try", "Making only one version", "Avoiding feedback"],
    answer: 0,
    explanation: "Iteration is the repeated refinement of concepts based on testing and feedback."
  },
  {
    id: "dt-m1-q79",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which of these is a key mindset of design thinkers?",
    options: ["Bias toward action", "Fear of failure", "Focus only on theory", "Rigid thinking"],
    answer: 0,
    explanation: "A 'Bias toward Action' encourages building and testing over lengthy passive deliberation."
  },
  {
    id: "dt-m1-q80",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which method uses six colored hats to explore perspectives?",
    options: ["Six Thinking Hats", "SCAMPER", "Fishbone diagram", "Affinity mapping"],
    answer: 0,
    explanation: "Edward de Bono's Six Thinking Hats explores options through different emotional and analytical viewpoints."
  },
  {
    id: "dt-m1-q81",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Prototype testing should involve:",
    options: ["Real users", "Only design team", "Only management", "No participants"],
    answer: 0,
    explanation: "Testing must involve representative target users to yield authentic insights."
  },
  {
    id: "dt-m1-q82",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which activity is NOT part of empathy phase?",
    options: ["Observation", "Interview", "Persona creation", "Budget approval"],
    answer: 3,
    explanation: "Budget approval is a administrative managerial function, not a user empathy activity."
  },
  {
    id: "dt-m1-q83",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "In Double Diamond model, second diamond focuses on:",
    options: ["Solution space", "Problem space", "Cost space", "Technology space"],
    answer: 0,
    explanation: "The first diamond focuses on the Problem Space (Discover & Define); the second diamond focuses on the Solution Space (Develop & Deliver)."
  },
  {
    id: "dt-m1-q84",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which is an example of convergent thinking?",
    options: ["Voting for top 3 ideas", "Generating 50 ideas", "Brainstorming", "Mind mapping"],
    answer: 0,
    explanation: "Voting selects and filters options down to top priorities."
  },
  {
    id: "dt-m1-q85",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which prototype is used to test interface flow?",
    options: ["Wireframe", "Storyboard", "Journey map", "Mind map"],
    answer: 0,
    explanation: "Wireframes lay out UI elements and navigation flows for interface testing."
  },
  {
    id: "dt-m1-q86",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "The “Test” phase can lead to:",
    options: ["Redefining problem", "Final production only", "Ending design process", "Ignoring feedback"],
    answer: 0,
    explanation: "Test results often reveal deeper insights that re-frame or redefine the original problem statement."
  },
  {
    id: "dt-m1-q87",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Design Thinking is best described as:",
    options: ["Non-linear, iterative process", "One-time linear process", "Manufacturing method", "Marketing strategy"],
    answer: 0,
    explanation: "Design Thinking loops back fluidly between empathy, definition, ideation, prototyping, and testing."
  },
  {
    id: "dt-m1-q88",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Empathy maps answer questions like:",
    options: ["What does user think, feel, say, do", "What is project cost", "What is company revenue", "What is competitor doing"],
    answer: 0,
    explanation: "Empathy maps synthesize observable user behavior and emotional expressions."
  },
  {
    id: "dt-m1-q89",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "The IDEO approach to innovation focuses on:",
    options: ["People, not technology first", "Technology first", "Cost cutting", "Competition only"],
    answer: 0,
    explanation: "IDEO emphasizes human-centered innovation starting with people's needs rather than technology capabilities."
  },
  {
    id: "dt-m1-q90",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which factor is NOT part of human-centered innovation?",
    options: ["Desirability", "Feasibility", "Viability", "Profitability only"],
    answer: 3,
    explanation: "Focusing solely on profitability ignores human desirability and technological feasibility."
  },
  {
    id: "dt-m1-q91",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "The main goal of empathy research is:",
    options: ["Deep understanding of user needs", "Product marketing", "Cost optimization", "Technical specification"],
    answer: 0,
    explanation: "Empathy research uncovers meaningful insights and unarticulated user needs."
  },
  {
    id: "dt-m1-q92",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "POV statement combines:",
    options: ["User, need, insight", "Technology, cost, time", "Product, price, place", "Idea, prototype, test"],
    answer: 0,
    explanation: "Standard POV format: [User] needs [Need] because [Insight]."
  },
  {
    id: "dt-m1-q93",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which approach works best in brainstorming?",
    options: ["Quantity over quality first", "Quality over quantity first", "No participation", "Limited ideas only"],
    answer: 0,
    explanation: "Generating a high volume (quantity) of ideas increases the probability of discovering breakthrough concepts."
  },
  {
    id: "dt-m1-q94",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which method explores “what if we change X”?",
    options: ["SCAMPER", "SWOT", "Kanban", "Benchmarking"],
    answer: 0,
    explanation: "SCAMPER prompts designers to Substitute, Modify, or Rearrange components of an existing product."
  },
  {
    id: "dt-m1-q95",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Design thinking framework is:",
    options: ["Human-centered and iterative", "Linear and fixed", "Only for designers", "Technology-only process"],
    answer: 0,
    explanation: "Design thinking applies universally across disciplines as a human-centered iterative mindset."
  },
  {
    id: "dt-m1-q96",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Radical collaboration involves:",
    options: ["Interdisciplinary teamwork", "Single person decisions", "No communication", "Only expert opinions"],
    answer: 0,
    explanation: "Radical collaboration brings people of varied disciplines together to tackle complex challenges."
  },
  {
    id: "dt-m1-q97",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Prototype should fail:",
    options: ["Early so learning is fast", "Late to save money", "Never", "After final product launch"],
    answer: 0,
    explanation: "Failing early in prototype stages saves resources and accelerates learning before full launch."
  },
  {
    id: "dt-m1-q98",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Which of these is a creative constraint?",
    options: ["Limited resources inspiring innovation", "Unlimited time", "Unlimited budget", "No deadline"],
    answer: 0,
    explanation: "Constraints like limited budget or time force creative problem-solving and focused innovation."
  },
  {
    id: "dt-m1-q99",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "The primary benefit of iteration is:",
    options: ["Continuous improvement", "Avoiding mistakes", "Saving all costs", "Working only once"],
    answer: 0,
    explanation: "Iteration continuously refines concepts based on real feedback until optimal design is reached."
  },
  {
    id: "dt-m1-q100",
    module: "Core Design Thinking",
    section: "Deep Revision",
    question: "Design Thinking ultimately leads to:",
    options: ["Innovative, user-centered solutions", "Technology for its own sake", "Only cost saving", "Avoiding experiments"],
    answer: 0,
    explanation: "The ultimate outcome of Design Thinking is impactful, innovative solutions aligned with user desires."
  },

  // ==========================================
  // MODULE 2: NPTEL Practice Set 2 (100 Qs)
  // ==========================================
  {
    id: "dt-m2-q1",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "What is the primary goal of the Empathize phase in Design Thinking?",
    options: ["Generate many ideas quickly", "Understand user needs & experiences deeply", "Build final product features", "Conduct financial feasibility analysis"],
    answer: 1,
    explanation: "Empathizing builds deep understanding of user behaviors, pain points, and unarticulated needs."
  },
  {
    id: "dt-m2-q2",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "Which of the following best describes a Point of View (POV) statement?",
    options: ["A detailed product requirement list", "A summary of competitor's features", "A user-centred problem framed in 'how might we' form", "A timeline for product delivery"],
    answer: 2,
    explanation: "A POV frames an actionable problem statement from the user's perspective."
  },
  {
    id: "dt-m2-q3",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "The Define phase is mainly about:",
    options: ["Building prototypes", "Identifying and framing the core problem from user insights", "Testing with users", "Brainstorming solutions"],
    answer: 1,
    explanation: "Define organizes empathy insights to clearly frame the right core problem to solve."
  },
  {
    id: "dt-m2-q4",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "What does Ideation phase emphasize?",
    options: ["Narrowing down to one best solution immediately", "Exploring many possible solutions without judgment", "Testing prototypes with users", "Defining metrics and success criteria"],
    answer: 1,
    explanation: "Ideation encourages broad exploration and divergent thinking before evaluating options."
  },
  {
    id: "dt-m2-q5",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "A prototype is useful because:",
    options: ["It confirms the solution is perfect", "It allows feedback from users early", "It replaces the need for testing", "It ensures no changes needed in final version"],
    answer: 1,
    explanation: "Prototypes enable cheap, quick early user feedback to test assumptions."
  },
  {
    id: "dt-m2-q6",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "In Test phase, what is most important?",
    options: ["Having a finished-looking product", "Collecting user feedback & learning what works / what doesn’t", "Saving time by skipping iterations", "Focusing on internal review only"],
    answer: 1,
    explanation: "Testing is focused on collecting authentic user reactions and learning how to refine the product."
  },
  {
    id: "dt-m2-q7",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "What is meant by “Fail-Fast, Fail-Cheap” principle?",
    options: ["Avoid failure at any cost", "Accept failure early & low cost so you can learn & iterate", "Focus resources only on successful ideas", "Only produce prototypes near completion"],
    answer: 1,
    explanation: "Failing fast and cheap allows teams to discover flaws early when making changes is inexpensive."
  },
  {
    id: "dt-m2-q8",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "Which technique is used during Empathize to observe users in their natural environment?",
    options: ["Role Playing", "Fly-on-the-Wall Observation", "Brainstorming", "Storyboarding"],
    answer: 1,
    explanation: "Fly-on-the-wall observation captures unobtrusive, natural user behaviors without intervention."
  },
  {
    id: "dt-m2-q9",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "What is a persona?",
    options: ["A fictional representation of a typical user, based on research", "A competitor product", "A flowchart of product features", "A specification document"],
    answer: 0,
    explanation: "A persona is a semi-fictional profile summarizing target user demographics, habits, and goals."
  },
  {
    id: "dt-m2-q10",
    module: "Practice Set 2",
    section: "Phases & Methods",
    question: "Which statement best describes How Might We (HMW) questions?",
    options: ["They define the final product features", "They pose open-ended design opportunities to frame ideas", "They list user complaints only", "They describe the business plan"],
    answer: 1,
    explanation: "HMW statements convert problem challenges into optimistic, generative design prompts."
  },
  {
    id: "dt-m2-q11",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "In Design Thinking, Divergent thinking means:",
    options: ["Converging to a single idea quickly", "Expanding the number of ideas, exploring broadly", "Testing ideas only after building fully", "Sticking to safe ideas only"],
    answer: 1,
    explanation: "Divergent thinking broadens possibilities by exploring multiple creative avenues."
  },
  {
    id: "dt-m2-q12",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "And Convergent thinking means:",
    options: ["Generating as many ideas as possible", "Selecting, refining and narrowing ideas down", "Skipping ideation", "Building only one prototype"],
    answer: 1,
    explanation: "Convergent thinking narrows options to identify the most feasible and high-impact ideas."
  },
  {
    id: "dt-m2-q13",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "Which of these is NOT one of the typical stages of Design Thinking?",
    options: ["Empathize", "Define", "Launch", "Test"],
    answer: 2,
    explanation: "Launch is a product release phase, whereas Design Thinking stages are Empathize, Define, Ideate, Prototype, Test."
  },
  {
    id: "dt-m2-q14",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "What is Journey Mapping used for?",
    options: ["To map workflow inside the design team", "To visually represent the steps a user takes and their experience", "To build prototypes faster", "To test the final solution only"],
    answer: 1,
    explanation: "Journey mapping tracks user touchpoints and feelings sequentially over time."
  },
  {
    id: "dt-m2-q15",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "What is the purpose of Affinity Diagramming?",
    options: ["To build final prototypes", "To group observations or ideas into meaningful clusters or themes", "To define the business model", "To perform cost analysis"],
    answer: 1,
    explanation: "Affinity diagramming categorizes qualitative notes into thematic groups."
  },
  {
    id: "dt-m2-q16",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "Brainstorming rules usually include:",
    options: ["Criticism of ideas early", "Quantity over quality in early ideation", "Focusing only on feasible ideas initially", "Stopping after one idea"],
    answer: 1,
    explanation: "Focusing on quantity first unleashes creative momentum before filtering."
  },
  {
    id: "dt-m2-q17",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "Rapid prototyping refers to:",
    options: ["Building a polished product immediately", "Creating quick, rough versions to learn and iterate", "Waiting for complete design before testing", "Merging video + audio in media content"],
    answer: 1,
    explanation: "Rapid prototyping produces quick wireframes or paper mockups for fast feedback loops."
  },
  {
    id: "dt-m2-q18",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "What role does Usability Testing play?",
    options: ["Finalizing the design", "Evaluating how easy & satisfying a product is for users", "Ignoring user feedback after testing", "Building the design criteria only"],
    answer: 1,
    explanation: "Usability testing assesses user satisfaction, task completion rate, and interface ergonomics."
  },
  {
    id: "dt-m2-q19",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "Iterate and refine means:",
    options: ["Never revisiting your ideas once prototyped", "Repeatedly improving solutions based on feedback", "Focusing only on original concept", "Skipping user testing after prototype"],
    answer: 1,
    explanation: "Iterating means modifying and refining designs repeatedly using insights from testing."
  },
  {
    id: "dt-m2-q20",
    module: "Practice Set 2",
    section: "Design Concepts",
    question: "Which practice helps in defining root causes of a problem?",
    options: ["Testing", "“5-Whys” technique", "Prototyping", "Ideation"],
    answer: 1,
    explanation: "The 5-Whys technique drills down past surface symptoms to reveal underlying root causes."
  },
  {
    id: "dt-m2-q21",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is meant by “Human-Centered Design”?",
    options: ["Design focused only on aesthetics", "Design process that starts & ends with understanding people’s needs", "Business model first, user second", "Always using technology first"],
    answer: 1,
    explanation: "HCD roots all decisions in the physical, psychological, and emotional needs of people."
  },
  {
    id: "dt-m2-q22",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "A Prototype can be:",
    options: ["Only digital & high fidelity", "Only final product", "Low fidelity sketch, paper model, clickable mock-up etc.", "A specification document"],
    answer: 2,
    explanation: "Prototypes range from paper sketches and cardboard cutouts to interactive digital models."
  },
  {
    id: "dt-m2-q23",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "Which of the following describes Wicked Problem?",
    options: ["Simple problem with one solution", "Complex, ambiguous problem with no single correct answer", "A problem solved by technical experts only", "Problem only needing minor adjustment"],
    answer: 1,
    explanation: "Wicked problems are messy, ambiguous, and subject to evolving real-world factors."
  },
  {
    id: "dt-m2-q24",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is Mind Mapping useful for in ideation?",
    options: ["Recording the meeting agenda only", "Visually branching out ideas & exploring connections", "Defining testing metrics", "Finalizing the prototype fidelity"],
    answer: 1,
    explanation: "Mind mapping visually connects central concepts with peripheral ideas and sub-themes."
  },
  {
    id: "dt-m2-q25",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is Storyboarding used for in Design Thinking?",
    options: ["Writing code", "Sketching user’s journey to visualize experiences & test flows", "Measuring profit margins", "Demanding final product features"],
    answer: 1,
    explanation: "Storyboarding uses illustrated scenes to depict user interactions and contexts over time."
  },
  {
    id: "dt-m2-q26",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is Silent Ideation?",
    options: ["Working alone with no talking to generate ideas", "A final presentation technique", "A test method", "Critiquing prototype in silence only"],
    answer: 0,
    explanation: "Silent ideation (like Brainwriting) ensures extroverts don't dominate and all team members write ideas quietly."
  },
  {
    id: "dt-m2-q27",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is SCAMPER technique used for?",
    options: ["Observing users in natural settings", "Making small tweaks to existing ideas (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse)", "Business cost-benefit analysis", "Prototype fidelity measurement"],
    answer: 1,
    explanation: "SCAMPER provides structured operational triggers to transform existing products or concepts."
  },
  {
    id: "dt-m2-q28",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "What is meant by Minimum Viable Product (MVP)?",
    options: ["Fully featured final version before testing", "The smallest version of product that is testable with users & delivers value", "Prototype design document only", "Final version without user feedback"],
    answer: 1,
    explanation: "An MVP includes just enough features to validate core value propositions with real users."
  },
  {
    id: "dt-m2-q29",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "Which statement is true about Bias for Action in design thinking?",
    options: ["Delaying decisions until all data collected", "Preferring action, learning, quicker feedback loops", "Avoiding prototypes", "Focusing only on documentation"],
    answer: 1,
    explanation: "Bias for Action favors building tangible prototypes quickly over unending theoretical debate."
  },
  {
    id: "dt-m2-q30",
    module: "Practice Set 2",
    section: "Human-Centered Design",
    question: "Which of these is an example of Assumption Testing?",
    options: ["Sketching final GUI without user input", "Listing what you believe about users & testing if they are correct", "Ignoring what users said in interviews", "Only focusing on business metrics"],
    answer: 1,
    explanation: "Assumption testing identifies unverified beliefs and validates them through targeted experiments."
  },
  {
    id: "dt-m2-q31",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is Convergent Thinking primarily focused on?",
    options: ["Expanding ideas indefinitely", "Filtering, selecting & combining ideas to move forward", "Generating random ideas only", "Testing final solutions without iteration"],
    answer: 1,
    explanation: "Convergent thinking synthesizes and selects top ideas to build forward momentum."
  },
  {
    id: "dt-m2-q32",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is Problem Framing?",
    options: ["Defining the problem in a way that helps you explore solutions effectively", "Developing product features immediately", "Building the final product first", "Ignoring user pain points"],
    answer: 0,
    explanation: "Problem framing defines the perspective through which a problem is analyzed and solved."
  },
  {
    id: "dt-m2-q33",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What does the “How Might We” method help with?",
    options: ["Finalizing costs", "Framing opportunity space for ideation", "Coding product features", "Skipping user research"],
    answer: 1,
    explanation: "HMW opens up the creative opportunity space by converting challenges into questions."
  },
  {
    id: "dt-m2-q34",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is the purpose of Prototype Fidelity?",
    options: ["How quickly you prototype only", "The level of detail / realism in a prototype (low fidelity vs high fidelity)", "Cost testing of business model only", "Limiting user feedback"],
    answer: 1,
    explanation: "Fidelity indicates how closely a prototype resembles the final visual and functional experience."
  },
  {
    id: "dt-m2-q35",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is Feedback Loop?",
    options: ["Ignoring what users say", "Accepting suggestions but not making changes", "Collecting user feedback and going back to improve design", "Finalizing prototype without changes"],
    answer: 2,
    explanation: "A feedback loop gathers user evaluation and feeds it directly into design improvements."
  },
  {
    id: "dt-m2-q36",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is Participatory Design?",
    options: ["Users are ignored in design process", "Only design team works independently", "Involving end-users in co-creation of design throughout the process", "Avoiding user testing until end"],
    answer: 2,
    explanation: "Participatory design directly involves end-users as co-designers throughout the development."
  },
  {
    id: "dt-m2-q37",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is meant by Ethical Design?",
    options: ["Choosing solutions solely for profit", "Considering ethical implications, fairness, sustainability, impact on people & society", "Ignoring user well-being", "Overlooking environmental consequences"],
    answer: 1,
    explanation: "Ethical design prioritizes safety, privacy, accessibility, and long-term societal wellbeing."
  },
  {
    id: "dt-m2-q38",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "Which phase involves synthesizing insights from user research?",
    options: ["Ideation", "Define", "Prototype", "Test"],
    answer: 1,
    explanation: "Synthesizing research raw data into key insights takes place during the Define phase."
  },
  {
    id: "dt-m2-q39",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "Which of following best captures “Test” phase goal?",
    options: ["Launching product to market directly", "Observing how users interact with prototypes, what works what doesn’t", "Avoiding failure at all cost", "Only internal review"],
    answer: 1,
    explanation: "Testing validates prototype usability, emotional resonance, and functionality with real users."
  },
  {
    id: "dt-m2-q40",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is Co-Design (or Collaborative Design)?",
    options: ["Designers working alone", "Users and stakeholders collaborating in design decisions", "Only managers making design decisions", "Ignoring feedback from users after prototype"],
    answer: 1,
    explanation: "Co-design brings designers, non-designers, and users together to create solutions."
  },
  {
    id: "dt-m2-q41",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What does Double Diamond Model represent?",
    options: ["Two stages of testing only", "Divergent + Convergent thinking cycles: Discover–Define & Develop–Deliver", "Only two steps: Prototype & Test", "Business model analysis"],
    answer: 1,
    explanation: "Double Diamond illustrates alternating divergent exploration and convergent definition across problem and solution spaces."
  },
  {
    id: "dt-m2-q42",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "Which of the following is NOT a tool for empathy building?",
    options: ["Interviews", "Observation", "Empathy Map", "SWOT Analysis"],
    answer: 3,
    explanation: "SWOT analysis is a strategic business tool, whereas Interviews, Observation, and Empathy Maps build user empathy."
  },
  {
    id: "dt-m2-q43",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is an Insight Statement?",
    options: ["Financial report", "Deep understanding about user need discovered during research", "A legal document", "A product specification"],
    answer: 1,
    explanation: "An insight statement captures a non-obvious realization about user behaviors or hidden motivations."
  },
  {
    id: "dt-m2-q44",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "Which of the following encourages out-of-the-box thinking?",
    options: ["Benchmarking competitors", "Lateral Thinking", "Only user complaints list", "Feature freeze"],
    answer: 1,
    explanation: "Lateral thinking solves problems through an indirect, unorthodox, creative approach."
  },
  {
    id: "dt-m2-q45",
    module: "Practice Set 2",
    section: "Advanced UX & Research",
    question: "What is the first step in Design Thinking process?",
    options: ["Ideate", "Empathize", "Test", "Prototype"],
    answer: 1,
    explanation: "Empathize is the initial foundation stage in design thinking."
  },
  {
    id: "dt-m2-q46",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Role Playing used for?",
    options: ["Acting out user scenarios to understand pain points", "Only testing final product", "Recruiting new team members", "Deciding budget"],
    answer: 0,
    explanation: "Role playing simulates human interactions to expose hidden friction points."
  },
  {
    id: "dt-m2-q47",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is the benefit of Low-Fidelity Prototypes?",
    options: ["High cost and slow learning", "Fast, cheap way to explore and discard ideas early", "Only used at final stage", "No user involvement"],
    answer: 1,
    explanation: "Low-fidelity prototypes are fast to construct, cheap to throw away, and great for early conceptual validation."
  },
  {
    id: "dt-m2-q48",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which of these is an example of Creative Constraint?",
    options: ["Giving unlimited budget", "Setting a limit on time, cost or material to spark innovative solutions", "Avoiding deadlines", "Removing all restrictions"],
    answer: 1,
    explanation: "Constraints focus boundaries and spur inventive solutions that overcome limitations."
  },
  {
    id: "dt-m2-q49",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Design Sprint?",
    options: ["A 5-day structured process to answer critical business questions through prototyping & testing", "A marathon to code continuously", "A market research tool", "A brainstorming game"],
    answer: 0,
    explanation: "Google Ventures' Design Sprint is a 5-day process for solving critical problems through design, prototyping, and testing."
  },
  {
    id: "dt-m2-q50",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which tool is used to visualize causes and effects?",
    options: ["Fishbone Diagram (Ishikawa)", "Affinity Diagram", "Empathy Map", "Journey Map"],
    answer: 0,
    explanation: "The Fishbone (Ishikawa) diagram organizes potential causes of a problem into logical categories."
  },
  {
    id: "dt-m2-q51",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which statement is true about Prototyping Mindset?",
    options: ["Build to learn, not just to validate", "Wait until design is perfect", "Avoid sharing with users", "Focus only on aesthetics"],
    answer: 0,
    explanation: "A prototyping mindset treats building as a tool for thinking and learning rather than showing off completed work."
  },
  {
    id: "dt-m2-q52",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Stakeholder Map?",
    options: ["Map of city for user research", "Visual showing key people/groups involved & their influence", "Mind map of features", "Sales forecast chart"],
    answer: 1,
    explanation: "Stakeholder maps chart the relationships, interests, and power dynamics of involved parties."
  },
  {
    id: "dt-m2-q53",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Experience Prototype?",
    options: ["Final product blueprint", "Simulation allowing user to interact as if real product", "A flowchart", "Spreadsheet with data"],
    answer: 1,
    explanation: "An experience prototype simulates subjective aspects of interaction so designers can feel what users will feel."
  },
  {
    id: "dt-m2-q54",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What does Iteration help achieve?",
    options: ["Perfection in first attempt", "Continuous improvement by learning from failures", "Avoid user testing", "Finish project early by skipping steps"],
    answer: 1,
    explanation: "Iteration drives progressive improvement through feedback and error correction."
  },
  {
    id: "dt-m2-q55",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which question is most useful during Define phase?",
    options: ["“How do we code this feature?”", "“What is the core user problem we must solve?”", "“What is the cheapest vendor?”", "“Which competitor sells more?”"],
    answer: 1,
    explanation: "Define focuses on uncovering and articulating the underlying core user problem."
  },
  {
    id: "dt-m2-q56",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What does Empathy Map include?",
    options: ["What user says, thinks, feels, does", "Only financial data", "Project budget details", "Prototype sketches"],
    answer: 0,
    explanation: "Empathy maps capture Say, Think, Feel, and Do observations."
  },
  {
    id: "dt-m2-q57",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which is an example of Co-Creation Workshop?",
    options: ["Stakeholders & users ideate together to design solutions", "Team meeting without user involvement", "Final launch party", "Internal audit"],
    answer: 0,
    explanation: "Co-creation workshops active collaborate with users and multi-disciplinary teams."
  },
  {
    id: "dt-m2-q58",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "Which is a benefit of Storytelling in design?",
    options: ["Makes data boring", "Builds emotional connection and communicates user journey", "Avoids user empathy", "Replaces testing"],
    answer: 1,
    explanation: "Storytelling evokes empathy and makes user research relatable and memorable."
  },
  {
    id: "dt-m2-q59",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Heuristic Evaluation?",
    options: ["Market survey", "Expert review of interface based on usability principles", "Brainstorming session", "Journey mapping"],
    answer: 1,
    explanation: "Heuristic evaluation inspects digital interfaces against established usability principles (e.g. Nielsen's heuristics)."
  },
  {
    id: "dt-m2-q60",
    module: "Practice Set 2",
    section: "Specialized Tools",
    question: "What is Contextual Inquiry?",
    options: ["Interviewing users in the environment where they perform tasks", "Only desk research", "Asking random survey questions", "Brainstorming in office"],
    answer: 0,
    explanation: "Contextual inquiry studies users directly in their natural work or living environment."
  },
  {
    id: "dt-m2-q61",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What is the difference between Qualitative and Quantitative research?",
    options: ["Qualitative = Numbers, Quantitative = Emotions", "Qualitative = Insights, stories, why; Quantitative = Measurable data, how many", "Both are same", "Both ignore user behaviour"],
    answer: 1,
    explanation: "Qualitative research answers 'why and how', while quantitative measures 'how many and how much'."
  },
  {
    id: "dt-m2-q62",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which tool helps in organizing large number of ideas?",
    options: ["Affinity Diagram", "Fishbone Diagram", "Gantt Chart", "Wireframe"],
    answer: 0,
    explanation: "Affinity diagrams sort massive idea pools into logical thematic groups."
  },
  {
    id: "dt-m2-q63",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What does Brainwriting mean?",
    options: ["Speaking ideas aloud", "Writing ideas silently and passing them around", "Creating journey map", "Recording interviews"],
    answer: 1,
    explanation: "Brainwriting has participants write ideas on paper silently and pass them along to build upon."
  },
  {
    id: "dt-m2-q64",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What is Reframing a problem?",
    options: ["Changing wording to open new solution perspectives", "Avoiding problem statement", "Copying competitor solution", "Ignoring constraints"],
    answer: 0,
    explanation: "Reframing shifts the problem lens to unlock fresh, innovative angles."
  },
  {
    id: "dt-m2-q65",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which of the following is a Prototype Fidelity Level?",
    options: ["Low, Medium, High", "Easy, Medium, Hard", "Small, Big, Extra Big", "Fast, Slow, Static"],
    answer: 0,
    explanation: "Fidelity is categorized into Low fidelity (sketches), Medium fidelity (wireframes), and High fidelity (interactive prototypes)."
  },
  {
    id: "dt-m2-q66",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What is Wizard of Oz Prototype?",
    options: ["Magic trick", "User interacts with interface that seems automated but is controlled manually behind the scenes", "Final working system", "Unrelated demo"],
    answer: 1,
    explanation: "Wizard of Oz tests automated system concepts by having a human manually execute back-end logic without user knowledge."
  },
  {
    id: "dt-m2-q67",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which is NOT a benefit of Design Thinking?",
    options: ["Increased user satisfaction", "More innovative solutions", "Ignoring user needs", "Faster learning cycles"],
    answer: 2,
    explanation: "Design thinking centers user needs; ignoring them is the antithesis of the methodology."
  },
  {
    id: "dt-m2-q68",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What is T-Shaped Skill concept in design teams?",
    options: ["Only broad skills", "Deep expertise in one area + broad ability to collaborate across others", "Skill shaped like 'T'", "Only managerial skills"],
    answer: 1,
    explanation: "T-shaped individuals possess deep vertical knowledge in one specialty paired with horizontal empathy to collaborate across fields."
  },
  {
    id: "dt-m2-q69",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What is Stakeholder Interview used for?",
    options: ["To understand expectations, constraints, perspectives of key stakeholders", "To train employees", "To test final product", "To check financial risk"],
    answer: 0,
    explanation: "Stakeholder interviews uncover business goals, project constraints, and key domain requirements."
  },
  {
    id: "dt-m2-q70",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What does Delighters mean in Kano Model?",
    options: ["Features that users expect", "Features that surprise and delight users, exceeding expectations", "Mandatory requirements", "Non-functional requirements"],
    answer: 1,
    explanation: "Delighters in the Kano model are unexpected features that generate high satisfaction."
  },
  {
    id: "dt-m2-q71",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which method helps visualize pain points & opportunities on a grid?",
    options: ["Opportunity Solution Tree", "Empathy Map", "Journey Map", "Stakeholder Map"],
    answer: 0,
    explanation: "Opportunity Solution Trees link outcomes, user opportunities (pain points), and solution ideas visually."
  },
  {
    id: "dt-m2-q72",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which is a benefit of Cross-functional Teams in design thinking?",
    options: ["Slower decisions", "Multiple perspectives leading to richer solutions", "Less collaboration", "Ignoring user data"],
    answer: 1,
    explanation: "Cross-functional teams combine engineering, design, and business perspectives."
  },
  {
    id: "dt-m2-q73",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "What does Dot Voting do?",
    options: ["Creates wireframe", "Prioritizes ideas quickly by giving votes (dots) to preferred ones", "Defines budget", "Builds prototype"],
    answer: 1,
    explanation: "Dot voting allows team members to democratically prioritize options using sticky dots."
  },
  {
    id: "dt-m2-q74",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which principle is core to design thinking mindset?",
    options: ["Technology-centric approach", "Human-centered & iterative approach", "Avoiding empathy", "Linear process only"],
    answer: 1,
    explanation: "Human-centricity and iterative learning are the core pillars of Design Thinking."
  },
  {
    id: "dt-m2-q75",
    module: "Practice Set 2",
    section: "Advanced UX & Methods",
    question: "Which diagram shows interaction between user and system step by step?",
    options: ["Service Blueprint", "Fishbone Diagram", "Mind Map", "SWOT"],
    answer: 0,
    explanation: "A Service Blueprint maps frontstage user touchpoints alongside backstage system processes."
  },
  {
    id: "dt-m2-q76",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Critical Incident Technique?",
    options: ["Collecting stories of specific significant user experiences", "Budget estimation", "Gantt charting", "Prototype building"],
    answer: 0,
    explanation: "Critical Incident Technique gathers detailed memorable events to uncover critical failure or success patterns."
  },
  {
    id: "dt-m2-q77",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Delphi Method?",
    options: ["Group forecasting technique using anonymous expert opinions", "Prototype testing", "Empathy interview", "Persona creation"],
    answer: 0,
    explanation: "The Delphi method collects structured expert judgments anonymously over iterative rounds."
  },
  {
    id: "dt-m2-q78",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which of these is NOT an ideation technique?",
    options: ["Brainstorming", "SCAMPER", "Mind Mapping", "Gantt Chart"],
    answer: 3,
    explanation: "A Gantt Chart is a project schedule timeline tool, not an ideation technique."
  },
  {
    id: "dt-m2-q79",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Shadowing?",
    options: ["Following a user silently to observe behaviour", "Copying competitor", "Drawing wireframes", "Writing code"],
    answer: 0,
    explanation: "Shadowing involves discreetly following a user during their normal routines to observe authentic behaviors."
  },
  {
    id: "dt-m2-q80",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which stage focuses on synthesizing insights from empathy work?",
    options: ["Empathize", "Define", "Ideate", "Prototype"],
    answer: 1,
    explanation: "The Define stage synthesizes observations into key insights and problem statements."
  },
  {
    id: "dt-m2-q81",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What does Low-Fidelity Wireframe represent?",
    options: ["Rough sketch of layout & flow without visual detail", "Final polished UI design", "A journey map", "Database schema"],
    answer: 0,
    explanation: "Low-fidelity wireframes focus on visual layout hierarchy and navigation without polished graphics."
  },
  {
    id: "dt-m2-q82",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which is true about Bias towards Action?",
    options: ["Prefer doing & testing over lengthy discussions", "Prefer only theory", "Prefer delaying until sure", "Avoid prototyping"],
    answer: 0,
    explanation: "Bias towards action prioritizes building quick prototypes to learn from doing."
  },
  {
    id: "dt-m2-q83",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Timeboxing?",
    options: ["Allocating fixed time for activity to encourage focus & speed", "Ignoring deadlines", "Postponing tasks", "Testing final product only"],
    answer: 0,
    explanation: "Timeboxing sets strict maximum durations for tasks to enforce momentum and prevent over-engineering."
  },
  {
    id: "dt-m2-q84",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Pain Point?",
    options: ["User frustration or problem that needs solving", "Profit point", "Market share", "Competitor advantage"],
    answer: 0,
    explanation: "A pain point is a specific persistent problem or inconvenience experienced by target users."
  },
  {
    id: "dt-m2-q85",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What does Human Factors study?",
    options: ["Only marketing trends", "Interaction between humans and systems to improve usability & safety", "Competitor pricing", "Legal compliance"],
    answer: 1,
    explanation: "Human factors ergonomics studies how human psychological and physical abilities interact with tools and environments."
  },
  {
    id: "dt-m2-q86",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which tool is used to visualize importance vs difficulty of ideas?",
    options: ["Impact-Effort Matrix", "Journey Map", "Affinity Map", "Persona"],
    answer: 0,
    explanation: "Impact-Effort matrices evaluate ideas by balancing strategic impact against implementation difficulty."
  },
  {
    id: "dt-m2-q87",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Divergent Thinking Goal?",
    options: ["Generate wide range of ideas", "Narrow down to one choice", "Test final prototype", "Create budget"],
    answer: 0,
    explanation: "Divergent thinking aims to generate as many diverse ideas as possible."
  },
  {
    id: "dt-m2-q88",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which prototype type uses only words to describe concept?",
    options: ["Role Play", "Concept Sketch", "Paper Prototype", "Verbal Prototype"],
    answer: 3,
    explanation: "A verbal prototype uses spoken or written narratives to explain how a solution operates."
  },
  {
    id: "dt-m2-q89",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Extreme User Interview?",
    options: ["Interviewing average users", "Interviewing users with extreme needs/behaviours to get insights", "Ignoring users", "Asking yes/no questions only"],
    answer: 1,
    explanation: "Extreme users (power users or non-users) amplify needs and highlight key design boundaries."
  },
  {
    id: "dt-m2-q90",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which of these is a User Research Deliverable?",
    options: ["Persona", "Budget sheet", "Database schema", "UML diagram"],
    answer: 0,
    explanation: "Personas synthesize raw user research into clear human profiles."
  },
  {
    id: "dt-m2-q91",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What does Iteration Cycle usually include?",
    options: ["Prototype → Test → Learn → Refine", "Launch → Market → Sell", "Build → Ignore → Launch", "Plan → Wait → Deliver"],
    answer: 0,
    explanation: "The standard iteration loop flows: Prototype -> Test -> Learn -> Refine."
  },
  {
    id: "dt-m2-q92",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Empathy Interview?",
    options: ["Structured conversation to deeply understand user’s experience", "Interview about budget", "Job interview", "Legal deposition"],
    answer: 0,
    explanation: "An empathy interview explores open-ended stories to uncover emotions, beliefs, and values."
  },
  {
    id: "dt-m2-q93",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Problem Statement used for?",
    options: ["Describes business model", "Defines challenge clearly to guide ideation", "Lists competitors", "Sets deadlines"],
    answer: 1,
    explanation: "A problem statement grounds ideation on a well-defined human challenge."
  },
  {
    id: "dt-m2-q94",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What does Fail Forward mean?",
    options: ["Fear failure", "Learn from failures to move closer to success", "Avoid experimenting", "Repeat mistakes"],
    answer: 1,
    explanation: "Failing forward converts mistakes into constructive learning experiences that propel design progress."
  },
  {
    id: "dt-m2-q95",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which is an example of Immersion?",
    options: ["Designer uses the product/service like a real user", "Only online survey", "Copy competitor ad", "Focus on sales"],
    answer: 0,
    explanation: "Immersion actively places designers into the user environment to experience things directly."
  },
  {
    id: "dt-m2-q96",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Service Design focus?",
    options: ["Only physical product design", "Holistic design of interactions, touchpoints, people, processes", "Only backend code", "Ignore user experience"],
    answer: 1,
    explanation: "Service design orchestrates people, infrastructure, and communication touchpoints to deliver seamless experiences."
  },
  {
    id: "dt-m2-q97",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Empathy Gap?",
    options: ["Misunderstanding user’s feelings/needs", "Financial gap", "Market share difference", "Time delay in testing"],
    answer: 0,
    explanation: "An empathy gap occurs when designers fail to appreciate how user emotions and states drive behavior."
  },
  {
    id: "dt-m2-q98",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "Which of these is NOT a benefit of rapid prototyping?",
    options: ["Early user feedback", "Reduced risk", "Higher development cost at start", "Faster learning"],
    answer: 2,
    explanation: "Rapid prototyping REDUCES initial development costs by catching flaws before heavy engineering."
  },
  {
    id: "dt-m2-q99",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is Lofi prototype?",
    options: ["Low-fidelity, simple, quick to build prototype", "High quality final product", "Coding prototype", "Production-ready design"],
    answer: 0,
    explanation: "Lofi prototypes are rough, low-fidelity mockups designed for fast testing."
  },
  {
    id: "dt-m2-q100",
    module: "Practice Set 2",
    section: "Deep Practice",
    question: "What is User-Centric Success Metric?",
    options: ["Only revenue growth", "Measurement of how well design meets user goals/needs", "Market expansion", "Competitor market share"],
    answer: 1,
    explanation: "User-centric metrics measure usability, user task completion, net promoter score, and user goal achievement."
  },

  // ==========================================
  // MODULE 3: Karmic Design Thinking & TRIZ (40 Qs)
  // ==========================================
  {
    id: "dt-m3-q1",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "What is a mnemonic to remember the stages of Karmic Design Thinking?",
    options: ["EAST", "BEST", "DMAIC", "EDIPT"],
    answer: 0,
    explanation: "EAST stands for Empathize, Analyze, Solve, Test in Karmic Design Thinking framework."
  },
  {
    id: "dt-m3-q2",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "How is Karmic Design Thinking different from IDEO or Stanford's model of Design Thinking?",
    options: ["4 stages instead of 5", "Philosophical instead of scientific principles", "Heart instead of brain", "Monday instead of Tuesday"],
    answer: 0,
    explanation: "Karmic Design Thinking compresses the 5 d.school stages into 4 distinct stages: Empathize, Analyze, Solve, Test (EAST)."
  },
  {
    id: "dt-m3-q3",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "Why did Curio fail in his attempt at his presentation to the customer?",
    options: ["He hadn't followed a systematic process to understand the requirements", "He wanted a shortcut to success, but there are no shortcuts in the world", "His customer was not a stable person", "He had too many assumptions in his presentation"],
    answer: 0,
    explanation: "Curio failed because he relied on unvalidated assumptions instead of systematically understanding customer requirements."
  },
  {
    id: "dt-m3-q4",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "Eggomobile is an example of a product designed for:",
    options: ["Customers who are very different from us", "People who want the cake and eat it too", "Engineers who can imagine the future", "Students to learn creativity in a classroom"],
    answer: 0,
    explanation: "The Eggomobile case study illustrates designing for target users with completely different physical and mental contexts."
  },
  {
    id: "dt-m3-q5",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "What is common between what was said 2500 years ago and this course?",
    options: ["The same human-centred philosophy spans millennia", "Human needs, aspirations and desires are the same across millennia", "Politics, education, sports, and literature all came from millennia ago", "Being famous meant saying something that everyone could relate to"],
    answer: 0,
    explanation: "Ancient Buddhist philosophies and modern Design Thinking share the fundamental human-centered goal of addressing human suffering and needs."
  },
  {
    id: "dt-m3-q6",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "Design Thinking starts with:",
    options: ["Sticky notes", "Sketching and prototyping with craft materials", "Understanding of human needs", "Identifying solutions to a problem"],
    answer: 2,
    explanation: "Every genuine design thinking initiative begins with understanding human needs."
  },
  {
    id: "dt-m3-q7",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "Which of the below firms is associated the most with Design Thinking?",
    options: ["IHM", "Interaction Design Foundation", "International Design Foundation", "I-PAC"],
    answer: 1,
    explanation: "Interaction Design Foundation (IxDF) is widely recognized for global design education and research."
  },
  {
    id: "dt-m3-q8",
    module: "Karmic Design Thinking",
    section: "EAST & Frameworks",
    question: "The customer journey map allows you to think about the steps or milestones of a process.",
    options: ["True", "False"],
    answer: 0,
    explanation: "True. Journey mapping visualizes milestones, emotional states, and touchpoints step by step."
  },
  {
    id: "dt-m3-q9",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which of the following is to be followed if we are to empathize with users?",
    options: ["Leave our assumptions and experiences behind when making observations", "Collect data from a small group of subjects on a broad range of topics", "Use our insights into one's experience and preferences", "Check education, employment history, and other activities of the user"],
    answer: 0,
    explanation: "True empathy requires shedding personal biases and observing users with a beginner's mind."
  },
  {
    id: "dt-m3-q10",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Design thinking is a ____ method of solving problems.",
    options: ["Learning-based", "Systematic", "Topsy-turvy", "Anarchic"],
    answer: 1,
    explanation: "Design thinking provides a structured, systematic methodology for approaching complex problems."
  },
  {
    id: "dt-m3-q11",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which organization coined the concept and term of Multi-Whys?",
    options: ["Tesla", "Tata", "Toyota", "Toblerone"],
    answer: 2,
    explanation: "Toyota Motor Corporation developed the 5-Whys root cause analysis technique for the Toyota Production System."
  },
  {
    id: "dt-m3-q12",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which sequence would a wise Design Thinking Expert most likely follow?",
    options: [
      "Multi-Why Analysis → Identifying Conflicts of Interest → Solving the problem",
      "Identifying Conflicts of Interest → Selecting a How-Might-We Statement → Multi-Why Analysis",
      "Test Running → Seeking Feedback → Running Multi-Why Analysis",
      "Create EMV Model → Apply Multi-Why → Conflict of Interest → Prototyping"
    ],
    answer: 0,
    explanation: "Analyze root causes via Multi-Why, pinpoint underlying Conflicts of Interest, and then engineer targeted solutions."
  },
  {
    id: "dt-m3-q13",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which of the following would qualify as a Conflict of Interest?",
    options: [
      "Supportive family with obedient children",
      "Rebellious children want expensive music festivals while family struggles financially",
      "Rebellious children applying for jobs to support their families",
      "Children want to be music artists while the family wants them to be doctors"
    ],
    answer: 1,
    explanation: "A conflict of interest arises when competing desires or requirements clash between stakeholders."
  },
  {
    id: "dt-m3-q14",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "According to Dr. Bala Ramadurai, how should Conflict of Interest be dealt with?",
    options: ["By implementing the EMV Model", "By finding loopholes in the problem", "By implementing the ENV Model", "By avoiding it"],
    answer: 2,
    explanation: "The ENV (Element-Value-Name) model systematically breaks down conflicts into contradictory parameters to resolve them."
  },
  {
    id: "dt-m3-q15",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which Multi-Why question does NOT fit when analyzing a specific individual's health issue?",
    options: ["Why is she falling sick?", "Why is she eating improper food?", "Why does poverty exist?", "Why can’t she afford healthy food?"],
    answer: 2,
    explanation: "'Why does poverty exist?' is too broad and macro-economic; Multi-Why questions must remain focused on the user's specific context."
  },
  {
    id: "dt-m3-q16",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "When we analyze the problem from both perspectives (customer and provider), which tool are we using?",
    options: ["Conflict Of Interest", "Bone of Contention", "Argument of Understanding", "Difference of Opinion"],
    answer: 0,
    explanation: "Analyzing opposing stakeholder perspectives identifies core Conflicts of Interest."
  },
  {
    id: "dt-m3-q17",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Spot the odd one out in Analyze phase:",
    options: ["Multi-Why Analysis", "Conflict of Interest", "How-Might-We", "Solution generation"],
    answer: 3,
    explanation: "Solution generation belongs to the 'Solve' phase, whereas Multi-Why, Conflict of Interest, and HMW belong to 'Analyze'."
  },
  {
    id: "dt-m3-q18",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which factor does NOT affect the number of levels for Multi-Why analysis?",
    options: ["Natural phenomenon limits", "Mood of the subject", "Domain expertise", "Administrative limitations"],
    answer: 1,
    explanation: "The mood of the subject should not dictate objective root-cause depth analysis."
  },
  {
    id: "dt-m3-q19",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Which of the following enables a systematic analysis approach?",
    options: ["Interviews", "Customer Journey Mapping", "Identifying Conflicts of Interest", "Multi-Why Analysis"],
    answer: 3,
    explanation: "Multi-Why Analysis structures root cause discovery step by step."
  },
  {
    id: "dt-m3-q20",
    module: "Karmic Design Thinking",
    section: "Empathy & Analysis",
    question: "Portos' tailor's problem in Karmic Design Thinking was:",
    options: ["Tailor not adept at making fashionable clothes", "Portos wanted exact fitting clothes, but tailor was not allowed to touch him", "Portos needed stain-free clothes", "Tailor had to stitch clothes for many women"],
    answer: 1,
    explanation: "The classic contradiction: Portos needed precise tailor measurements, but the tailor was prohibited from touching noblemen."
  },
  {
    id: "dt-m3-q21",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "The most important characteristic of design thinkers is:",
    options: ["Financial skills", "Sales skills", "People skills", "Arithmetic skills"],
    answer: 2,
    explanation: "Empathy and interpersonal communication (people skills) form the core of design thinking."
  },
  {
    id: "dt-m3-q22",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "Example of TRIZ Inventive Principle of Preliminary Action:",
    options: ["Sterilization of instruments before surgery", "Make a diamond tool out of diamonds", "Cool inner part instead of heating outer", "Mountain & Muhammad proverb"],
    answer: 0,
    explanation: "Preliminary Action performs required changes before an operation is needed (e.g. sterilizing surgical tools prior to surgery)."
  },
  {
    id: "dt-m3-q23",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "Inventive Principle of Beforehand Cushioning means:",
    options: ["Identify end users and their expectations", "Prepare emergency means beforehand", "Do it in advance", "Create systematic approach"],
    answer: 1,
    explanation: "Beforehand Cushioning prepares emergency measures in advance to compensate for low reliability or potential failure."
  },
  {
    id: "dt-m3-q24",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "In Karmic Design Thinking, which methodology gives a very useful experience?",
    options: ["Algorithm of Inventive Problem Solving (ARIZ/TRIZ)", "Creative Problem Solving", "Six Thinking Hats", "Analytic Reading Inventory Solution"],
    answer: 0,
    explanation: "ARIZ (Algorithm of Inventive Problem Solving) systematically resolves engineering contradictions."
  },
  {
    id: "dt-m3-q25",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "The heart of TRIZ is composed of:",
    options: ["Silent brainstorming & Other way round", "Inventive principles & Innovation algorithm", "Just in time & Traditional logic", "Contradictions & Inventive principles"],
    answer: 3,
    explanation: "TRIZ focuses on discovering technical/physical contradictions and resolving them using 40 Inventive Principles."
  },
  {
    id: "dt-m3-q26",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "Chocolate packaging solutions in design thinking should withstand:",
    options: ["Temperature changes, be lightweight & affordable, maintain 75°F", "Only high speed impact", "Underwater pressure", "Vacuum seals"],
    answer: 0,
    explanation: "Effective chocolate packaging resolves thermal insulation, cost, and physical protection contradictions."
  },
  {
    id: "dt-m3-q27",
    module: "Karmic Design Thinking",
    section: "TRIZ & Principles",
    question: "Inventive principle used to solve worn-out tyres problem in aircraft:",
    options: ["Thermal expansion", "Pneumatics and hydraulics", "Prior action", "Other way round (Inversion)"],
    answer: 3,
    explanation: "Using the 'Other Way Round' principle spins the wheels prior to touchdown to match ground speed, reversing relative friction."
  },
  {
    id: "dt-m3-q28",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "Solve is considered to be the ________ phase in Design Thinking.",
    options: ["Free-flowing", "Convergent", "Congruent", "Divergent"],
    answer: 3,
    explanation: "The Solve phase expands possibilities by exploring inventive principles and multi-perspective solutions."
  },
  {
    id: "dt-m3-q29",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "While generating solutions in Solve phase, we should:",
    options: ["Focus on one iteration", "Always check back if it solves customer problem & addresses both sides of conflict", "Jump into building quickly without validation", "Ignore provider needs"],
    answer: 1,
    explanation: "Solutions must address both the user's pain point and resolve the underlying conflict."
  },
  {
    id: "dt-m3-q30",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "TRIZ is the Theory of Inventive Problem Solving created by Genrich Altshuller.",
    options: ["True", "False"],
    answer: 0,
    explanation: "True. TRIZ is the Russian acronym for 'Teoriya Resheniya Izobreatatelskikh Zadatch'."
  },
  {
    id: "dt-m3-q31",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "When should a design thinker work towards making a prototype?",
    options: ["After conflicts of interest", "After customer journey mapping", "After feeling satisfied with EAS stages", "After applying TRIZ"],
    answer: 2,
    explanation: "Prototyping happens once satisfaction with Empathize, Analyze, and Solve insights is established."
  },
  {
    id: "dt-m3-q32",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "What materials qualify for prototyping?",
    options: ["Clothes", "Cardboards", "Softwares and Screenshots", "All of the above"],
    answer: 3,
    explanation: "Anything physical, digital, or role-played that makes an idea tangible qualifies for prototyping."
  },
  {
    id: "dt-m3-q33",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "What is the correct way to treat a prototype?",
    options: ["Mass-produce", "Test with a group and get feedback", "Keep in lab until problem resurfaces", "Test yourself then launch"],
    answer: 1,
    explanation: "Prototypes are meant to be tested with real users to gather feedback."
  },
  {
    id: "dt-m3-q34",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "Correct order of activities in Test Stage:",
    options: ["Launch → Market response → Alter", "Approve → Launch → Advertise", "Prototype → Feedback → Change → Launch", "Hype → Launch → Earn profits"],
    answer: 2,
    explanation: "The lifecycle progresses: Prototype -> User Feedback -> Design Iteration (Change) -> Final Launch."
  },
  {
    id: "dt-m3-q35",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "True or False: You should not go back to E, A or S after reaching Test Stage.",
    options: ["True", "False"],
    answer: 1,
    explanation: "False! Design thinking is non-linear; test feedback often requires jumping back to Empathize, Analyze, or Solve."
  },
  {
    id: "dt-m3-q36",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "Test is considered to be a ________ phase in design thinking.",
    options: ["Divergent", "Convergent", "Open-ended", "Open-source"],
    answer: 1,
    explanation: "Test is convergent because it narrows choices based on empirical evidence and user feedback."
  },
  {
    id: "dt-m3-q37",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "While testing a prototype, what should you NOT do?",
    options: ["Let users compare alternatives", "Ask users to talk through experience", "Explain at length what prototype does", "Show, don’t tell"],
    answer: 2,
    explanation: "Never over-explain your prototype. Follow the 'Show, don't tell' rule and let users experience it naturally."
  },
  {
    id: "dt-m3-q38",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "Wrong way of setting a target customer:",
    options: ["Check competition", "Analyze product/service", "Analyze demographics", "Assume market based on team opinion"],
    answer: 3,
    explanation: "Assuming target customers based solely on internal team opinion introduces fatal bias."
  },
  {
    id: "dt-m3-q39",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "If prototype succeeds in test run, will it guarantee success in market?",
    options: ["Yes", "No", "Highly likely but not guaranteed", "Cannot know"],
    answer: 2,
    explanation: "Successful testing increases probability of success significantly, but market conditions still introduce variables."
  },
  {
    id: "dt-m3-q40",
    module: "Karmic Design Thinking",
    section: "Solve & Test Stages",
    question: "Which Buddhist Four Noble Truths concept is mapped to the Test/Path phase in Design Thinking?",
    options: ["Nirodha", "Samudaya", "Marga", "Dukkh"],
    answer: 2,
    explanation: "Marga represents the path leading to cessation of suffering, mapped to testing and deploying the solution."
  }
];
