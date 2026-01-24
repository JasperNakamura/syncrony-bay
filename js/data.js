const gigs = {
  ashford: [
    {
      title: "Document Courier: Secure Corporate Delivery",
      difficulty: "⭐",
      payment: "€$800",
      type: "Courier",
      description:
        "Transport sealed documents between Ashford's corporate clients. No questions asked, no opening packages. Simple delivery job but requires professional appearance and discretion. Usually same-day within corpo plaza district.",
      requirements: [
        "Professional attire",
        "Reliable transport",
        "Basic discretion",
      ],
    },
    {
      title: "Corporate Background Check: Verify Employee",
      difficulty: "⭐",
      payment: "€$600",
      type: "Investigation",
      description:
        "Verify employment history and credentials of potential hire. Basic surveillance and record checking. Client wants confirmation before bringing someone into sensitive position. Simple investigation work.",
      requirements: ["Basic investigation skills", "Access to public records"],
    },
    {
      title: "Executive Chauffeur: Discrete Transportation",
      difficulty: "⭐⭐",
      payment: "€$1,200",
      type: "Transportation",
      description:
        "Drive corporate executive to sensitive meetings. Must be professional, discrete, and able to navigate city quickly. May witness confidential conversations - forget everything you hear. Regular work available for reliable operators.",
      requirements: [
        "Clean vehicle",
        "Professional demeanor",
        "No questions policy",
      ],
    },
    {
      title: "Office Surveillance: Monitor Employee",
      difficulty: "⭐⭐",
      payment: "€$1,500",
      type: "Surveillance",
      description:
        "Client suspects employee of corporate espionage. Follow target during work hours, document meetings and contacts. Basic surveillance, no confrontation. Report findings only. Two-week assignment.",
      requirements: [
        "Surveillance experience",
        "Photography equipment",
        "Patience",
      ],
    },
    {
      title: "Corporate Espionage: Kronos Systems R&D Theft",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$50,000",
      type: "Data Theft",
      description:
        "Retrieve prototype neural interface specifications from Kronos Systems's central R&D facility. Client is a competing megacorp looking to reverse-engineer the technology. Facility has top-tier security including netrunners, combat drones, and MaxTac response protocols.",
      requirements: [
        "Experienced netrunner",
        "Infiltration specialist",
        "Contingency extraction plan",
      ],
    },
    {
      title: "Executive Protection: Helix Corporation VP",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$35,000",
      type: "Protection Detail",
      description:
        "Provide 72-hour protection for Helix Corporation VP during hostile takeover negotiations. Multiple assassination attempts expected from rival corp. Client requires discrete, professional operators who can blend into corporate environment.",
      requirements: [
        "Professional appearance",
        "Combat certification",
        "No visible street affiliations",
      ],
    },
    {
      title: "Hostile Acquisition: Silence the Whistleblower",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$40,000",
      type: "Wet Work",
      description:
        "A mid-level Cascade Energy accountant is preparing to leak evidence of environmental crimes to the media. Make the problem disappear. Permanent solution preferred, but blackmail or forced relocation acceptable if clean.",
      requirements: [
        "Discretion paramount",
        "No connections to client",
        "Professional execution",
      ],
    },
    {
      title: "Asset Recovery: Stolen Prototype",
      difficulty: "⭐⭐⭐",
      payment: "€$25,000",
      type: "Retrieval",
      description:
        "Corpo courier was hijacked, prototype combat stimulant stolen by Valentinos gang. Retrieve prototype intact. Lethal force authorized against gang members. Prototype must not be damaged or analyzed.",
      requirements: [
        "Combat capability",
        "Fast response time",
        "Knowledge of gang territories",
      ],
    },
    {
      title: "Corporate Sabotage: Manufacturing Plant",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$45,000",
      type: "Sabotage",
      description:
        "Disable competing pharmaceutical manufacturing plant for minimum 3 months. Must appear as industrial accident, not sabotage. No casualties among executive staff (workers acceptable collateral).",
      requirements: [
        "Technical knowledge of industrial systems",
        "Stealth infiltration",
        "Evidence cleanup",
      ],
    },
  ],
  morales: [
    {
      title: "Neighborhood Watch: Patrol Shift",
      difficulty: "⭐",
      payment: "€$300 + Community Respect",
      type: "Security",
      description:
        "Help patrol barrio streets during night hours. Presence alone deters small-time criminals. Break up fights, check on elders, keep an eye out for trouble. Rosa coordinates with other volunteers. No combat expected, but be ready. 4-hour shifts, flexible schedule.",
      requirements: ["Willingness to help community"],
    },
    {
      title: "Delivery Protection: Small Business Escort",
      difficulty: "⭐",
      payment: "€$400 + Free Meals",
      type: "Escort",
      description:
        "Local bodega owner needs protection during supply runs. Gangs charge 'tax' for passing through. Walk with them, make sure no one causes trouble. Usually non-violent - presence is enough. Weekly runs, 2-3 hours each.",
      requirements: ["Intimidating presence or combat skills"],
    },
    {
      title: "Community Mediation: Settle Disputes",
      difficulty: "⭐⭐",
      payment: "€$600",
      type: "Negotiation",
      description:
        "Neighbors feuding over property damage, noise, or business competition. Rosa needs someone to mediate before it escalates to violence. Talk it out, find compromise, prevent bloodshed. Most people respect Rosa's judgment.",
      requirements: ["Patience", "Respect for community", "Fair-mindedness"],
    },
    {
      title: "Youth Outreach: Keep Kids Safe",
      difficulty: "⭐⭐",
      payment: "€$500 + Community Support",
      type: "Protection/Mentorship",
      description:
        "Local kids getting recruited by gangs. Rosa wants someone to provide alternative - teach self-defense, share street smarts, be a role model. Show them there's more than gang life. Ongoing, flexible hours. Payment is modest but impact is real.",
      requirements: [
        "Patience with youth",
        "Street experience",
        "Not actively affiliated with gangs",
      ],
    },
    {
      title: "Community Defense: Eviction Resistance",
      difficulty: "⭐⭐⭐",
      payment: "€$8,000 + Community Support",
      type: "Protection",
      description:
        "Megabuilding residents are being forcibly evicted by Kronos Systems subsidiary. Protect families during 'relocation' and ensure corpo security doesn't get violent. Non-lethal preferred but defend the people by any means necessary.",
      requirements: [
        "Willing to stand against corpo security",
        "Combat skills",
        "Community trust",
      ],
    },
    {
      title: "Workers' Rights: Factory Shutdown",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$12,000",
      type: "Sabotage",
      description:
        "Textile factory has had 47 worker deaths this year due to safety violations. Owner refuses to fix conditions or pay compensation. Shut down the factory permanently. Make it expensive enough that rebuilding isn't worth it.",
      requirements: [
        "Technical sabotage skills",
        "Timing to avoid worker casualties",
        "Anti-corpo sentiment",
      ],
    },
    {
      title: "Food Distribution: Convoy Hijack",
      difficulty: "⭐⭐",
      payment: "€$5,000 + Food Share",
      type: "Robbery",
      description:
        "Cascade Energy convoy carrying food shipments through the barrio. They've been price-gouging residents. Hijack the convoy, distribute food to community centers. Drivers are just working people - no casualties.",
      requirements: [
        "Vehicle skills",
        "Fast distribution network",
        "Non-lethal approach",
      ],
    },
    {
      title: "Gang Mediation: Prevent Turf War",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$10,000",
      type: "Negotiation/Combat",
      description:
        "6th Street and Valentinos about to go to war over territory. Crossfire will kill barrio residents. Mediate peace or eliminate leadership on both sides if necessary. Community safety is priority.",
      requirements: [
        "Gang connections or combat superiority",
        "Negotiation skills",
        "Community respect",
      ],
    },
    {
      title: "Corpo Revenge: Punish the Polluters",
      difficulty: "⭐⭐⭐",
      payment: "€$7,500",
      type: "Targeted Strike",
      description:
        "Helix Corporation dumped toxic waste in community water supply. Three kids died. Legal system won't touch them. Hit the executives responsible - their homes, their cars, their sense of security. Send a message.",
      requirements: [
        "Intelligence gathering",
        "Precision strikes",
        "Strong stomach for revenge work",
      ],
    },
    {
      title: "Resource Redistribution: Medical Supply Heist",
      difficulty: "⭐⭐⭐",
      payment: "€$9,000 + Medical Supplies",
      type: "Theft",
      description:
        "Pharmaceutical warehouse has insulin, antibiotics, and cancer meds sitting in storage while people die. Theft is justified. Grab as much as you can carry, deliver to Dr. Lin Zhao for distribution.",
      requirements: [
        "Stealth or overwhelming force",
        "Transportation",
        "Connection to street clinics",
      ],
    },
  ],
  volkov: [
    {
      title: "Package Pickup: Retrieve Documents",
      difficulty: "⭐",
      payment: "€$1,000",
      type: "Courier",
      description:
        "Pick up sensitive documents from Viktor's contacts and deliver to secure location. Simple courier work but requires discretion. Don't look inside, don't ask questions, don't remember faces. Professional demeanor essential.",
      requirements: ["Reliable", "Professional appearance", "No loose lips"],
    },
    {
      title: "Tail the Contact: Basic Surveillance",
      difficulty: "⭐⭐",
      payment: "€$1,800",
      type: "Surveillance",
      description:
        "Follow one of Viktor's business contacts for a day. Document where they go, who they meet. Viktor suspects disloyalty but needs proof before acting. Simple surveillance, no confrontation. Report findings to Kat.",
      requirements: [
        "Basic surveillance skills",
        "Inconspicuous appearance",
        "Photography capability",
      ],
    },
    {
      title: "Corporate Assassination: Remove the Rival",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$60,000",
      type: "Wet Work",
      description:
        "Viktor's main competitor for VP of Operations is gaining board support. Arrange a fatal 'accident' during his commute. Must be untraceable to Viktor or Kat. Public incident preferred to send message to other rivals.",
      requirements: [
        "Professional execution",
        "Perfect deniability",
        "No evidence trail",
      ],
    },
    {
      title: "Intelligence Theft: Steal Merger Documents",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$35,000 + Corpo Intel",
      type: "Data Theft",
      description:
        "Competing exec has merger plans that would threaten Viktor's position. Break into his home office, copy all documents related to Atlas Security Services merger. He has private security and a personal netrunner.",
      requirements: [
        "B&E skills",
        "Data extraction",
        "Counter-surveillance capability",
      ],
    },
    {
      title: "Frame Job: Destroy a Reputation",
      difficulty: "⭐⭐⭐",
      payment: "€$25,000",
      type: "Social Engineering",
      description:
        "Plant evidence of embezzlement on Viktor's colleague. Need fabricated financial records, planted physical evidence, and anonymous tip to internal affairs. Victim has done nothing wrong - this is purely political.",
      requirements: [
        "Forgery skills or netrunner",
        "Physical evidence planting",
        "No moral qualms",
      ],
    },
    {
      title: "Asset Protection: Guard the Shipment",
      difficulty: "⭐⭐⭐",
      payment: "€$20,000",
      type: "Security",
      description:
        "Viktor has illegal tech shipment coming through port. Ensure it arrives at warehouse intact. Rival corps or gangs may attempt to intercept. Cargo must not be inspected or delayed.",
      requirements: [
        "Combat skills",
        "Convoy protection experience",
        "Discretion",
      ],
    },
    {
      title: "Blackmail Material: Compromising Photos",
      difficulty: "⭐⭐",
      payment: "€$15,000",
      type: "Surveillance",
      description:
        "Follow board member to gather evidence of infidelity, substance abuse, or illegal activity. Need photo/video proof suitable for blackmail. Target is paranoid and employs counter-surveillance.",
      requirements: [
        "Surveillance skills",
        "Photography equipment",
        "Patience and stealth",
      ],
    },
  ],
  akira: [
    {
      title: "Muscle for Hire: General Combat Support",
      difficulty: "Varies",
      payment: "€$500-2,000 per job",
      type: "Combat Support",
      description:
        "Available for hire through Rosa Morales. Provides armed muscle for operations requiring combat capability. Specializes in close-quarters combat and building clearance. Prefers jobs that don't target civilians.",
      requirements: ["Anti-corpo, community defense, escort work preferred"],
    },
    {
      title: "Close Protection: Bodyguard Detail",
      difficulty: "⭐⭐",
      payment: "€$300/day",
      type: "Protection",
      description:
        "Personal protection services for high-risk individuals. Works well with Dr. Lin Zhao for medical escort jobs. Loyal and reliable once contract is signed.",
      requirements: ["Don't threaten her sister"],
    },
    {
      title: "Building Clearance: Hostile Environment",
      difficulty: "⭐⭐⭐",
      payment: "€$1,500-3,000",
      type: "Combat",
      description:
        "Clear buildings of hostile forces. Gang hideouts, squatter removal (if justified), or corpo facility raids. Efficient and thorough. Prefers to know the why before she starts shooting.",
      requirements: ["Clear mission parameters", "Fair pay"],
    },
  ],
  jiyeon: [
    {
      title: "Standard Delivery: Basic Package Run",
      difficulty: "⭐",
      payment: "€$200-400",
      type: "Courier",
      description:
        "Straightforward package delivery across safe zones. No pursuit, no danger, just speed and reliability. Perfect for building trust with Ji-Yeon. Small packages, documented routes, professional service.",
      requirements: [],
    },
    {
      title: "Express Delivery: Time-Critical Package",
      difficulty: "⭐⭐",
      payment: "€$500-1,500",
      type: "Courier",
      description:
        "Guaranteed delivery within specified timeframe. Specializes in navigating gang territories and evading pursuit. Does not open packages or ask questions. Perfect for sensitive data chips, small contraband, or items requiring speed over security. Same-day available, maximum package size: backpack-sized.",
      requirements: [],
    },
    {
      title: "Hot Cargo Transport: Pursued Delivery",
      difficulty: "⭐⭐⭐",
      payment: "€$2,000-4,000",
      type: "High-Risk Courier",
      description:
        "Package delivery under active pursuit or through hostile territory. Premium rates for items being actively hunted by corps or gangs. Cybernetic enhancements make her fastest courier in the sector. Success Rate: 97%. Premium for same-day hot packages.",
      requirements: [],
    },
    {
      title: "Data Physical Courier: Air-Gapped Transfer",
      difficulty: "⭐⭐",
      payment: "€$1,000-2,500",
      type: "Secure Courier",
      description:
        "When netrunning is too risky or data needs physical transfer. Carries encrypted data chips through gang territory, corpo checkpoints, or combat zones. Works well with Marcus Thompson for data jobs.",
      requirements: ["Discrete, fast, professional"],
    },
    {
      title: "Multiple-Drop Route Running",
      difficulty: "⭐⭐",
      payment: "€$800-2,000",
      type: "Multi-Stop Delivery",
      description:
        "Efficient routing for multiple package deliveries across the city. Popular with small-time dealers, Dr. Lin Zhao for medical supply distribution, and others needing reliable multi-stop service. Maximum 8 stops per route, average delivery time: 4-6 hours.",
      requirements: [],
    },
  ],
  wei: [
    {
      title: "Rare Ingredient Acquisition: Illegal Delicacy",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$15,000 + Meal at Élévation",
      type: "Smuggling/Theft",
      description:
        "Need live Matsutake mushrooms from Japanese corpo farm or fresh Bluefin tuna from restricted waters. Customs won't allow import. Need it fresh, undamaged, and delivered within 48 hours of harvest. No questions about legality.",
      requirements: [
        "Smuggling connections or theft skills",
        "Temperature-controlled transport",
        "Speed",
      ],
    },
    {
      title: "Restaurant Sabotage: Eliminate Competition",
      difficulty: "⭐⭐⭐",
      payment: "€$12,000",
      type: "Sabotage",
      description:
        "Rival restaurant 'Le Bernardin' is gaining Michelin consideration. Need their kitchen sabotaged during critic visit. Food poisoning incident, equipment failure, or staff incident acceptable. Must appear accidental. Timing is critical.",
      requirements: [
        "Kitchen infiltration",
        "Subtle sabotage",
        "Perfect timing",
      ],
    },
    {
      title: "Recipe Theft: Family Secrets",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$20,000 + High Society Access",
      type: "Burglary",
      description:
        "Legendary chef's handwritten recipe book held in private collection. Owner refuses to sell. Need original book or perfect copies of specific pages. Collector has high-end security system.",
      requirements: [
        "B&E specialist",
        "Document handling expertise",
        "Art theft experience preferred",
      ],
    },
    {
      title: "Critic Elimination: Remove Negative Review",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$25,000",
      type: "Wet Work / Blackmail",
      description:
        "Food critic threatens to publish devastating review of Élévation. Either make them disappear or provide blackmail material sufficient to kill the story. Must happen before publication deadline in 5 days.",
      requirements: [
        "Fast execution",
        "Discretion",
        "No connection to restaurant",
      ],
    },
    {
      title: "Event Diversion: Create Chaos",
      difficulty: "⭐⭐",
      payment: "€$8,000",
      type: "Distraction",
      description:
        "During rival's grand opening, need significant distraction. Gang attack, building fire alarm, health inspector raid - anything that empties the restaurant during critic attendance. No casualties but maximum embarrassment.",
      requirements: [
        "Creative problem-solving",
        "Timing coordination",
        "Plausible deniability",
      ],
    },
  ],
  zhao: [
    {
      title: "Clinic Cleanup: Basic Assistance",
      difficulty: "⭐",
      payment: "€$250 + Medical Services",
      type: "Labor",
      description:
        "Help clean and organize underground clinic. Sterilize equipment, organize supplies, dispose of medical waste properly. Dr. Zhao needs extra hands. No medical knowledge required, just willingness to help. Few hours per week.",
      requirements: ["Strong stomach", "Discretion about clinic location"],
    },
    {
      title: "Supply Transport: Heavy Lifting",
      difficulty: "⭐",
      payment: "€$350 + Medical Priority",
      type: "Labor",
      description:
        "Medical equipment delivered to drop point. Need it moved to clinic without drawing attention. Heavy lifting, discrete transport. Usually done in early morning hours. Simple work but crucial for clinic operation.",
      requirements: ["Vehicle or strong back", "Early morning availability"],
    },
    {
      title: "Patient Transport: Non-Emergency",
      difficulty: "⭐⭐",
      payment: "€$500 + Medical Services",
      type: "Transportation",
      description:
        "Transport patients to and from clinic for follow-up appointments. Not emergency cases, just people who can't risk public transport due to gang trouble or legal issues. Professional, discrete, compassionate service needed.",
      requirements: ["Vehicle", "Patience", "Respect for patient privacy"],
    },
    {
      title: "Medical Supply Run Protection",
      difficulty: "⭐⭐⭐",
      payment: "€$1,500 + Medical Services",
      type: "Escort",
      description:
        "Protect supply run to pick up black market medical equipment and pharmaceuticals. Suppliers are nervous, gangs watch the routes, and corpo security asks questions. Need armed escort both ways. Works with Akira Chen regularly. Bi-weekly, 4-6 hours.",
      requirements: [],
    },
    {
      title: "Underground Clinic Security",
      difficulty: "⭐⭐⭐",
      payment: "€$2,000 + Medical Services",
      type: "Night Security",
      description:
        "Guard underground clinic during operating hours (midnight-6am). Gangers sometimes try to collect 'protection money,' addicts get violent, and occasionally corpo goons investigate. Protect patients and doctor. Non-lethal preferred for patients. Weekly, overnight shift.",
      requirements: [],
    },
    {
      title: "Pro-Bono Patient Escort",
      difficulty: "⭐⭐",
      payment: "€$800 + Medical Services",
      type: "Protection",
      description:
        "Escort critically ill patients from dangerous areas to hospital. Some can't afford ambulance, some are wanted by gangs or police. Get them to emergency room alive. Doctor sometimes accompanies for emergency care. Life or death situations.",
      requirements: [],
    },
    {
      title: "Equipment Retrieval: Hospital Heist",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$5,000 + Priority Medical Care",
      type: "Theft",
      description:
        "Corporate hospital has diagnostic equipment sitting unused while people die. Need it stolen and delivered to underground clinic. Hospital has security but equipment is in storage wing. Might work with Marcus Thompson for security bypass.",
      requirements: [
        "Heavy lifting or transport",
        "Security bypass",
        "Quick extraction",
      ],
    },
    {
      title: "Pharmaceutical Shipment Guard",
      difficulty: "⭐⭐⭐",
      payment: "€$2,500 + Medical Priority",
      type: "Security",
      description:
        "Protect pharmaceutical delivery through gang territory. Suppliers trust Dr. Zhao but not the route. Various gangs want to steal shipment for resale. Must arrive intact. Can coordinate with Ji-Yeon Park for transport. Monthly. High value: cancer meds, antibiotics, surgical supplies.",
      requirements: [],
    },
  ],
  marcus: [],
  castellanos: [
    {
      title: "Shopping Escort: Luxury District Protection",
      difficulty: "⭐",
      payment: "€$800 + Shopping Perks",
      type: "Escort",
      description:
        "Walk with Val through high-end shopping district. She's bored and wants company, plus occasional bag carrier. Mostly safe but she attracts attention. Keep admirers at distance, carry purchases, look professional. Easy money if you can tolerate entitled rich girl.",
      requirements: [
        "Professional appearance",
        "Patience",
        "Don't judge her spending",
      ],
    },
    {
      title: "Social Media Documentation: Follow & Film",
      difficulty: "⭐",
      payment: "€$600 + Social Media Exposure",
      type: "Photography",
      description:
        "Val wants professional photos/videos for her social media. Follow her around, make her look good, edit footage. She's doing something 'edgy' (probably safe but styled dangerous). Help her maintain her rebel image. Few hours, easy work.",
      requirements: [
        "Photography/video skills",
        "Editing capability",
        "Tolerate posing and retakes",
      ],
    },
    {
      title: "Party Reconnaissance: Scope the Venue",
      difficulty: "⭐⭐",
      payment: "€$1,500",
      type: "Reconnaissance",
      description:
        "Val wants to throw party in 'dangerous' location. Scout the venue first - check for gang activity, structural safety, escape routes. Report back so she can party 'wild' while actually being relatively safe. She trusts your judgment even if she won't admit it.",
      requirements: [
        "Area knowledge",
        "Safety assessment skills",
        "Honest reporting",
      ],
    },
    {
      title: "Thrill Heist: Steal for the Story",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$30,000 + 'Companionship'",
      type: "Heist",
      description:
        "Steal priceless art from rival family's collection. Not for money - Val wants the thrill and the story. She'll probably watch from nearby, might even participate. Wants something exciting she can brag about at parties. High security, high stakes, pure adrenaline.",
      requirements: [
        "Professional thieves",
        "Tolerate Val's presence/interference",
        "Make it memorable",
      ],
    },
    {
      title: "Exclusive Event Infiltration",
      difficulty: "⭐⭐⭐",
      payment: "€$20,000 + High Society Access",
      type: "Social Engineering",
      description:
        "Get Val into ultra-exclusive corpo event her parents forbid her from attending. Need forged credentials, disguises, or creative infiltration. She wants to cause a scandal while there. Bonus if she can embarrass her parents' friends.",
      requirements: [
        "Social engineering skills",
        "High society knowledge",
        "Backup extraction plan",
      ],
    },
    {
      title: "Dangerous Urban Exploration",
      difficulty: "⭐⭐⭐",
      payment: "€$15,000",
      type: "Exploration/Protection",
      description:
        "Escort Val through combat zones, abandoned buildings, or active gang territories. She wants to experience 'real danger' (with protection). Take photos, livestream it, make her feel alive. Keep her actually safe while letting her feel unsafe.",
      requirements: [
        "Combat skills",
        "Patience with rich kids",
        "Area knowledge",
      ],
    },
    {
      title: "Scandal Creation: Ruin the Suitor",
      difficulty: "⭐⭐",
      payment: "€$12,000",
      type: "Social Sabotage",
      description:
        "Val's parents are pushing her toward arranged marriage with boring corpo heir. Create public scandal involving him - affair, financial crime, embarrassing incident. Creative approaches rewarded. She wants it messy and public.",
      requirements: [
        "Social manipulation",
        "Evidence fabrication",
        "Media connections helpful",
      ],
    },
    {
      title: "Party Protection: Wild Night Security",
      difficulty: "⭐⭐⭐",
      payment: "€$10,000 + Party Access",
      type: "Security",
      description:
        "Val throws parties in abandoned warehouses, gang territory, or other dangerous locations. Provide security against gangs, corpo security, or police. Keep the party going, keep Val alive. Expect chaos, drugs, and corpo kids playing dangerous games. Monthly, all night. Warning: extremely unpredictable.",
      requirements: [],
    },
  ],
  tamm: [
    {
      title: "Groceries Escort: Safe Shopping Trip",
      difficulty: "⭐",
      payment: "€$300 + Home-Cooked Meal",
      type: "Escort",
      description:
        "Walk with Jaan while he does weekly grocery shopping. Gang territory between home and market. Simple protection detail - presence usually enough. He's kind man, makes good conversation. Kaia sometimes comes along (and complains entire time). Weekly, 2 hours.",
      requirements: ["Patience", "Respectful demeanor"],
    },
    {
      title: "University Escort Protection",
      difficulty: "⭐⭐",
      payment: "€$500/day + Home-Cooked Meals",
      type: "Escort",
      description:
        "Walk Kaia to and from university through gang territory. 6th Street and Maelstrom both want her dead for 'disrespecting' them. She'll fight you on needing protection. Keep her alive despite herself. M-F, 7am and 6pm. Warning: client is uncooperative.",
      requirements: [],
    },
    {
      title: "Study Session Bodyguard",
      difficulty: "⭐⭐",
      payment: "€$400/session + Mechanical Repairs",
      type: "Protection",
      description:
        "Guard Kaia during evening study sessions at library or cafe. Gangs know her schedule. She refuses to change routine out of pride. Protect her while she studies engineering. She'll insult you for being there. 3-4 hours, 2-3 times weekly. Father is desperate, daughter is stubborn.",
      requirements: [],
    },
    {
      title: "Gang Threat Deterrence",
      difficulty: "⭐⭐⭐",
      payment: "€$3,000 + Community Favors",
      type: "Intimidation/Combat",
      description:
        "Send clear message to gang members threatening Kaia. Father prefers non-lethal but understands sometimes it's necessary. Make them afraid to touch her. Permanent solutions acceptable if no other choice. Targets: 6th Street, Maelstrom members. Goal: make example that protects her long-term.",
      requirements: [],
    },
    {
      title: "Emergency Extraction: Kaia in Trouble",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$5,000 + Life Debt",
      type: "Rescue",
      description:
        "Kaia got herself into another fight. Father gets panicked call. Need immediate extraction from hostile situation - gang ambush, bar fight, or worse. Happens frequently. Father pays whatever it takes to get her back alive. Frequency: too often. Response time: immediate. Warning: she won't thank you.",
      requirements: [],
    },
    {
      title: "Social Event Guard Detail",
      difficulty: "⭐⭐",
      payment: "€$800 + Estonian Food",
      type: "Event Security",
      description:
        "Kaia has university social events. Father terrified gangs will attack when she's vulnerable. Discrete protection during events. She'll try to ditch you. Don't let her. Monthly. Client attitude: apologetic father, defiant daughter.",
      requirements: [],
    },
  ],
  beaumont: [
    {
      title: "Research Assistant: Gather Public Records",
      difficulty: "⭐",
      payment: "€$500",
      type: "Research",
      description:
        "Anaïs needs public records gathered for investigation - building permits, business licenses, court filings. Tedious work at municipal offices. No danger, just time-consuming bureaucracy. She pays for legwork while she chases bigger leads.",
      requirements: ["Patience for bureaucracy", "Organized record-keeping"],
    },
    {
      title: "Interview Protection: Low-Risk Escort",
      difficulty: "⭐⭐",
      payment: "€$800",
      type: "Escort",
      description:
        "Accompany Anaïs to interview sources in moderately safe locations. Workers, community members, low-level officials. Mostly insurance - she expects no trouble but wants backup. Professional demeanor essential, you're part of press team.",
      requirements: [
        "Professional appearance",
        "Discrete presence",
        "Respect for journalistic process",
      ],
    },
    {
      title: "Equipment Transport: Camera Gear Security",
      difficulty: "⭐",
      payment: "€$600",
      type: "Transportation",
      description:
        "Transport Anaïs's expensive camera equipment between locations. She can't carry it all herself and doesn't trust regular couriers. Handle with care, protect from theft. Simple but crucial - her work depends on her gear.",
      requirements: [
        "Reliable transport",
        "Careful handling",
        "Basic security awareness",
      ],
    },
    {
      title: "Conflict Zone Photography: War Zone Access",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$8,000 + Press Credit",
      type: "Protection/Access",
      description:
        "Escort Anaïs into active combat zones between corps or gangs. She needs photos of the violence for her exposé. Keep her alive while she gets impossible shots. She'll take risks you wouldn't. Works well with Marcus Thompson for leaked intel locations. Warning: photographer has death wish. Bonus: your story might get told.",
      requirements: [],
    },
    {
      title: "Exclusive Event Infiltration: Get the Compromising Shots",
      difficulty: "⭐⭐⭐",
      payment: "€$6,000 + Blackmail Material Copy",
      type: "Infiltration",
      description:
        "Get Anaïs into exclusive corpo events, private parties, or closed meetings. She needs photos of crimes, affairs, or corruption. You get her in, protect her while she works, extract when it goes wrong. Can coordinate with Valentina Castellanos for high society access.",
      requirements: [
        "Social engineering or stealth",
        "Quick extraction capability",
        "Don't mind pissing off powerful people",
      ],
    },
    {
      title: "Dangerous Investigation: Corporate Crime Scene",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$10,000 + Your Story Published",
      type: "Investigation Support",
      description:
        "Anaïs is investigating corporate crime - illegal dumping, worker deaths, corruption. She needs muscle while she gathers evidence in dangerous locations. Corps will send security, gangs might be involved. Often works with Aria Sterling's leaked intel. Duration: days to weeks. Risk: high - making enemies of megacorps.",
      requirements: [],
    },
    {
      title: "Post-Exposé Extraction",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$15,000 + International Press Connections",
      type: "Emergency Extraction",
      description:
        "Anaïs's latest exposé just dropped. Corps/gangs/government wants her dead. Need immediate extraction, safe house, and protection until heat dies down. She's burned her location again. Happens every few months. Response time: immediate. Duration: 1-2 weeks. Frequency: quarterly.",
      requirements: [],
    },
    {
      title: "Create Newsworthy Situation",
      difficulty: "⭐⭐⭐",
      payment: "€$7,000 + Photo Feature",
      type: "Orchestrated Incident",
      description:
        "Anaïs needs something dramatic to photograph. Stage a protest, trigger a corpo response, or create a 'situation' that exposes injustice. Must be photogenic and truthful - she won't stage fake news, but she'll stage real events. Works with Rosa Morales for community actions. Goal: truth through spectacle. Ethics: complicated but well-intentioned.",
      requirements: [],
    },
  ],
  aria: [
    {
      title: "Document Delivery: Anonymous Drop",
      difficulty: "⭐",
      payment: "€$700",
      type: "Courier",
      description:
        "Deliver sealed envelope to contact. No questions, no identification, no paper trail. Aria needs information moved without digital trace. Simple dead drop usually, but discretion is paramount. She trusts you to forget you ever had the package.",
      requirements: ["Reliable", "Discrete", "No questions policy"],
    },
    {
      title: "Surveillance Detection: Counter-Tail",
      difficulty: "⭐⭐",
      payment: "€$1,200",
      type: "Security",
      description:
        "Walk predetermined route while watching for surveillance. Aria suspects Viktor's security is tracking her movements. You serve as decoy or confirmation. Report any tails. Potentially dangerous if they realize what you're doing.",
      requirements: [
        "Surveillance awareness",
        "Calm under pressure",
        "Observant",
      ],
    },
    {
      title: "Safe House Preparation: Logistics Support",
      difficulty: "⭐⭐",
      payment: "€$1,000",
      type: "Logistics",
      description:
        "Aria needs safe house stocked and ready for emergency. Buy supplies (food, medical, basic necessities), deliver to location, set up basics. Use cash only, avoid surveillance, leave no trace of your involvement. Critical for her escape plans.",
      requirements: [
        "Logistics capability",
        "Counter-surveillance awareness",
        "Discretion",
      ],
    },
    {
      title: "Project Sabotage: Delay Harmful Initiative",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$20,000 + Insider Intel",
      type: "Sabotage",
      description:
        "Viktor Volkov is launching project that will displace 500 families for corporate development. Aria provides intel, you sabotage the project. Destroy equipment, corrupt data, eliminate key personnel - whatever stops it. Time-sensitive before construction begins. Intel provided: full project plans, security details, personnel files. Goal: minimum 6-month delay or permanent cancellation. Often works with Marcus Thompson.",
      requirements: [],
    },
    {
      title: "Corporate Intelligence Leak: Expose the Crime",
      difficulty: "⭐⭐⭐",
      payment: "€$15,000 + Protected Whistleblower Status",
      type: "Data Distribution",
      description:
        "Aria has stolen evidence of Viktor's crimes. Need it distributed to media, activists, and authorities in way that protects her identity. Physical and digital distribution. Works with Anaïs Beaumont for publication and Marcus Thompson for digital security. Risk: high - if traced back to Aria, she's dead. Impact: could bring down projects, maybe executives.",
      requirements: [],
    },
    {
      title: "Worker Protection Operation: Community Warning",
      difficulty: "⭐⭐",
      payment: "€$8,000",
      type: "Information Distribution",
      description:
        "Viktor's company planning mass layoffs or dangerous project affecting workers. Aria provides advance warning. Need to alert workers, help them prepare, organize resistance if possible. Time-sensitive - usually 72 hours notice. Coordinate with Rosa Morales. Frequency: monthly. Moral weight: preventing people from being blindsided.",
      requirements: [],
    },
    {
      title: "Damage Mitigation: Environmental Cleanup",
      difficulty: "⭐⭐⭐",
      payment: "€$25,000 + Equipment",
      type: "Environmental Response",
      description:
        "Viktor's company caused environmental disaster - chemical spill, toxic dumping, water contamination. Aria can't stop it but she can fund cleanup. Organize and execute cleanup operation. Protect affected communities. She'll provide equipment and intel. Scale: usually community-level disasters. Urgency: health crisis situations. Support: full funding, equipment, medical coordination with Dr. Lin Zhao.",
      requirements: [],
    },
    {
      title: "Whistleblower Protection: Extraction & Security",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$18,000 + Relocation Funds",
      type: "Protection & Extraction",
      description:
        "Someone inside Kronos Systems is ready to expose Viktor's crimes but they're in danger. Aria provides funding for extraction, relocation, and protection. Get them out alive, set them up somewhere safe, protect them until they can testify or publish. Often coordinates with Marcus Thompson for digital protection. Timeline: usually 48-hour emergency. Package: extraction, safe house, new identity if needed. Stakes: life or death for whistleblower.",
      requirements: [],
    },
    {
      title: "Coordinate with Kat: Joint Operation",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$40,000 (split funding from both)",
      type: "Complex Operation",
      description:
        "Rare occasion when Aria and Yekaterina Volkov coordinate on operation that serves both their purposes. Usually targeting Viktor's rivals in way that helps him (keeping Kat safe) while also sabotaging his broader plans (Aria's goal). Extremely delicate political situation. Complexity: highest level. Benefit: two insiders working together, massive intel access.",
      requirements: [
        "Discretion",
        "Skill",
        "Understanding of corporate politics",
      ],
    },
  ],
};

const characters = [
  {
    id: "ashford",
    name: "Malcolm Ashford",
    alias: "The Broker",
    age: 49,
    nationality: "British",
    occupation: "Corpo Fixer",
    type: "fixer",
    alignment: "corpo",
    specialty: "High-level corpo contracts and negotiations",
    background:
      "Former MI6 operative turned corpo shadow broker. Made his fortune facilitating deals between megacorps and those willing to get their hands dirty.",
    services: [
      "Corpo espionage contracts",
      "High-value asset retrieval",
      "Executive protection details",
      "Hostile takeover facilitation",
      "Corpo sabotage operations",
      "Wet work for C-suite clients",
    ],
    notes:
      "Real piece of shit. But every gig he gives me or refers me gets me so much cash. What am I then right?",
    physical:
      "6'1\", lean build, salt and pepper hair, cold steel gray eyes, expensive tailored suits.",
  },
  {
    id: "morales",
    name: "Rosa Maria Morales",
    alias: "La Jefa / The People's Fixer",
    age: 35,
    nationality: "Latina (Mexican-American)",
    occupation: "Underground Fixer",
    type: "fixer",
    alignment: "street",
    specialty: "Street-level operations with working-class focus",
    background:
      "Grew up in the barrio watching corps destroy her community. Started as a street kid running packages, worked her way up through sheer grit and organizing people.",
    services: [
      "Anti-corpo sabotage",
      "Community protection operations",
      "Workers' rights enforcement (the violent kind)",
      "Stolen resource redistribution",
      "Gang mediation and peacekeeping",
      "Revenge contracts against corpo abusers",
    ],
    notes:
      "Love drinking with her at bars. I swear I'll confess to her one day! Her jobs pay whatever though.",
    physical:
      "5'8\", athletic build, long black hair, silver augmented eyes, cybernetic arm, visible scars and tattoos",
  },
  {
    id: "volkov",
    name: "Yekaterina Ivanovna Volkov",
    alias: "Trophy Wife",
    age: 27,
    nationality: "Russian",
    occupation: "Supermodel / Corpo Wife",
    type: "specialist",
    alignment: "corpo",
    specialty: "Corpo intelligence and rival elimination",
    background:
      "Former supermodel married to Fedor Volkov (VP at Kronos Systems).",
    services: [
      "Eliminate husband's corpo rivals",
      "Steal intelligence from competing executives",
      "Frame enemies for scandals",
      "Protect husband's assets",
      "Sabotage competing corpo operations",
    ],
    notes:
      "She's hiding something. I don't think shes as bad as she makes herself out to be. But doesn't really matter. Her jobs pay crazy.",
    physical:
      "5'10\", supermodel physique, short white hair, rose red eyes, designer fashion",
  },
  {
    id: "akira",
    name: "Akira Chen",
    alias: "Best Bro",
    age: 24,
    nationality: "Japanese-American",
    occupation: "Edgerunner / Street Mercenary",
    type: "specialist",
    alignment: "street",
    specialty: "Combat operations and muscle for hire",
    background:
      "Parents died in a corpo 'accident' at 18. Works primarily for Rosa Morales as a bruiser type edgerunner.",
    services: [
      "Muscle for hire on Rosa's jobs",
      "Close protection work",
      "Asset recovery (the violent kind)",
      "Building clearance",
      "Combat support",
      "Courier work (armed)",
    ],
    notes: "Guy's ride or die. But he's got someone to lose. I don't.",
    physical:
      "5'7\", lean and athletic, blonde hair, hazel eyes, practical combat gear, scavenged cyberware",
    special: "Raising sister Yuki (16), programming prodigy",
  },
  {
    id: "jiyeon",
    name: "Park Ji-Yeon",
    alias: "Courier",
    age: 22,
    nationality: "Korean",
    occupation: "Independent Courier",
    type: "specialist",
    alignment: "street",
    specialty: "Time-sensitive deliveries and discrete transport",
    background:
      "University dropout (Computer Science). Started running packages after realizing she hated sitting still. Now makes decent money doing what she loves.",
    services: [
      "Time-sensitive deliveries",
      "Discrete package transport",
      "Data physical courier",
      "Hot cargo transport",
      "Multiple-drop route running",
      "Border crossing courier work",
    ],
    notes:
      "Chronically online. Responds within minutes. Her fit is so hot but she won't let me tap.",
    physical:
      "5'6\", slim and quick, long purple dyed hair, purple optic overlay, always wears running shoes",
  },
  {
    id: "wei",
    name: "Shen Wei",
    alias: "Chef",
    age: 18,
    nationality: "Chinese",
    occupation: "Assistant Chef at Élévation",
    type: "specialist",
    alignment: "corpo",
    specialty: "Fusion molecular gastronomy and culinary espionage",
    background:
      "Child prodigy from Shanghai. Youngest assistant chef at three-Michelin-star restaurant Élévation. Obsessed with earning own stars before 25.",
    services: [
      "Obtain rare/illegal ingredients",
      "Sabotage competing restaurants",
      "Retrieve family recipes from secured locations",
      "Protect food shipments",
      "Arrange 'accidents' for rival chefs",
      "Steal reservations data",
    ],
    notes:
      "Shrimp makes good food but doesn't fry rice :D. Not the social kind but hes good to work for.",
    physical:
      "5'5\", lean build, slick back black hair, intense dark brown eyes, chef whites at work",
  },
  {
    id: "zhao",
    name: "Dr. Lin Zhao",
    alias: "Doc",
    age: 26,
    nationality: "Chinese",
    occupation: "Trauma Nurse (ER) / Street Ripper",
    type: "specialist",
    alignment: "corpo",
    specialty: "Emergency medicine and cyberware maintenance",
    background:
      "Top of her class, chose ER over prestigious corpo clinic. Reality of corpo healthcare broke her idealism but not her dedication.",
    services: [
      "On-site medical support during operations",
      "Emergency trauma care",
      "Cyberware installation and maintenance",
      "Poison/drug analysis and treatment",
      "Forensic medical consultation",
      "Anonymous patient care",
    ],
    notes:
      "I've never seen a girl that loves coffee more than I think sex junkies likes Rabbit. She's cute but I feel if I try for her I'll actually go to hell.",
    physical: "5'5\", short dark brown bob, medical scanner cybereyes",
  },
  {
    id: "marcus",
    name: "Marcus Thompson",
    alias: "Helpful netrunner rat",
    age: 29,
    nationality: "Jamaican-American",
    occupation: "Freelance Netrunner",
    type: "specialist",
    alignment: "corpo",
    specialty: "Corpo network infiltration and data warfare",
    background:
      "Second-generation immigrant, natural talent for code. Former white-hat consultant who went gray-hat after realizing what corps were doing.",
    services: [
      "Network infiltration",
      "Data theft and exfiltration",
      "Ice breaking and system penetration",
      "Counter-netrunner support",
      "Security system hacking",
      "Digital surveillance",
    ],
    notes:
      "Can't really trust him. Not cause he's black or anything. But he is the best netrunner I know.",
    physical:
      "5'10\", average build, long dreadlocks with fiber optic strands, neural interface ports",
  },
  {
    id: "castellanos",
    name: "Valentina Marie Castellanos",
    alias: "Slut",
    age: 23,
    nationality: "American",
    occupation: "Professional Disappointment",
    type: "specialist",
    alignment: "corpo",
    specialty: "Dangerous entertainment and high-society access",
    background:
      "Daughter of Zenith Media Group executives. Grew up with everything except purpose. Funds criminal gigs for thrills and rebellion.",
    services: [
      "'Exciting' jobs she can watch or participate in",
      "Heists of interesting items (for thrills)",
      "Infiltration of exclusive events",
      "Scandals targeting parents' social circle",
      "Dangerous stunts and urban exploration",
      "Party 'protection' in dangerous places",
    ],
    notes:
      "She's the best. Fun and easy as hell. Totally party animal and has access to the best clubs. An adrenaline junkie is dangerous though.",
    physical:
      "5'6\", bombastic hourglass figure, bright orange hair, orange eyes (genetic atlered), designer everything",
    special:
      "Daughter of Marcus and Elena Castellanos (Zenith Media Group executives)",
  },
  {
    id: "tamm",
    name: "Kaia Tamm",
    alias: "NEW CONTACT",
    age: 19,
    nationality: "Estonian",
    occupation: "University Student (Engineering)",
    type: "specialist",
    alignment: "street",
    specialty: "Civvy",
    background:
      "Immigrant family, working-class. Father works double shifts for her university. Has serious problem with gang authority in her neighborhood.",
    services: [
      "Protection escort to/from university (offered by father)",
      "Bodyguard during study sessions (offered by father)",
      "Deter/eliminate gang threats (offered by father)",
      "Recover Kaia from dangerous situations (offered by father)",
    ],
    notes:
      "His daughter is such a shitty bitch. Sorry Herbert but I ain't a baby sitter",
    physical:
      "5'6\", scrappy build, white hair, ice blue eyes, punk aesthetic, injured regularly",
    special:
      "Father: Herbert Tamm (factory worker). Gigs offered BY her father to protect her.",
  },
  {
    id: "beaumont",
    name: "Anaïs Beaumont",
    alias: "NEW CONTACT",
    age: 27,
    nationality: "French",
    occupation: "Freelance Photojournalist",
    type: "specialist",
    alignment: "street",
    specialty: "Conflict photography and controversial exposés",
    background:
      "Trained in Paris, fired from Le Monde for recklessness. Made name photographing Corpo Wars. Now exposes crimes and makes enemies.",
    services: [
      "Access to dangerous locations for photos",
      "Protection during conflict photography",
      "Infiltration of exclusive events",
      "Extraction after exposés drop",
      "Information gathering for investigations",
      "Creating 'situations' for photography",
    ],
    notes:
      "If Paris was a woman she'd be it. Also she said to my face when we first met that we would never be a thing so I'm never taking work for her.",
    physical:
      "5'6\", slim and agile, red hair under practical cap, green eyes with camera zoom enhancement, cargo gear",
  },
  {
    id: "aria",
    name: "Aria Sterling",
    alias: "Stuckup hot OL",
    age: 31,
    nationality: "American",
    occupation: "Virtual Executive Assistant",
    type: "specialist",
    alignment: "corpo",
    specialty: "Corpo intelligence",
    background:
      "Hired out of business school by Neptune Logistics . Became indispensable to Viktor Volkov while learning about his crimes. Now actively sabotages from inside.",
    services: [
      "Sabotage operations targeting her boss's projects",
      "Leak corpo intelligence to affected communities",
      "Fund worker protection operations",
      "Arrange 'accidents' delaying harmful initiatives",
      "Provide warning about incoming corpo actions",
      "Protect whistleblowers and activists",
    ],
    notes:
      "She's a crazy bitch of a woman. But she's got good gigs and can also give out good info. But best of all she just needs a couple drinks and her legs are wide open. But getting her to drink is the tough part",
    physical:
      "5'6\", petite build, orange brown hair, AR interface glasses, top-tier neural interface",
    special: "Works for Neptune Logistics.",
  },
];

const cardsGrid = document.getElementById("cardsGrid");
const searchBox = document.getElementById("searchBox");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("characterModal");
const modalContent = document.getElementById("modalContent");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

var currentFilter = "all";

function createCard(char) {
  const card = document.createElement("div");
  card.className = `card ${char.alignment}`;
  card.dataset.id = char.id;

  const alignmentBadge =
    char.alignment === "corpo"
      ? '<span class="alignment-badge badge-corpo">💼 CORPO</span>'
      : '<span class="alignment-badge badge-street">⚡ STREET</span>';

  card.innerHTML = `
                <div class="card-header">
                    <div>
                        <div class="card-name">${char.name}</div>
                        <div class="card-alias">"${char.alias}"</div>
                    </div>
                    ${alignmentBadge}
                </div>
                
                <div class="card-mid-section">
                    <div class="card-text-content">
                        <div class="card-role">${char.occupation}</div>
                        <div class="card-info">
                            <span>Age:</span> ${char.age} | <span>Origin:</span> ${char.nationality}
                        </div>
                        <div class="card-specialty">
                            ${char.specialty}
                        </div>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="view-details-btn" style="flex-grow: 1;">VIEW FULL PROFILE</button>
                    <button class="view-details-btn">🕻</button>
                    <button class="view-details-btn">🗨</button>
                </div>
            `;

  card.querySelector(".view-details-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    showModal(char);
  });

  return card;
}

function renderCards(filter = "all", search = "") {
  cardsGrid.innerHTML = "";

  let filtered = characters.filter((char) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "fixer" && char.type === "fixer") ||
      (filter === "corpo" && char.alignment === "corpo") ||
      (filter === "street" && char.alignment === "street");

    const matchesSearch =
      search === "" ||
      char.name.toLowerCase().includes(search.toLowerCase()) ||
      char.alias.toLowerCase().includes(search.toLowerCase()) ||
      char.occupation.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  filtered.forEach((char) => {
    cardsGrid.appendChild(createCard(char));
  });

  if (filtered.length === 0) {
    cardsGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: var(--cp-red);">No contacts found matching criteria.</p>';
  }
}

function showModal(char) {
  const iscorpo = char.alignment === "corpo";
  modalContent.className = `modal-content ${char.alignment}`;

  let servicesHTML = '<ul class="services-list">';
  char.services.forEach((service) => {
    servicesHTML += `<li>${service}</li>`;
  });
  servicesHTML += "</ul>";

  let specialHTML = char.special
    ? `
                <div class="modal-section">
                    <h3>Special Notes</h3>
                    <p>${char.special}</p>
                </div>
            `
    : "";

  let quoteHTML = char.quote
    ? `
                <div class="quote-box">
                    "${char.quote}"
                </div>
            `
    : "";

  // Generate gigs section
  let gigsHTML = "";
  if (gigs[char.id] && gigs[char.id].length > 0) {
    gigsHTML = `
                    <div class="gigs-section">
                        <h3 style="color: var(--cp-yellow); margin-bottom: 15px;">Available Gigs</h3>
                        ${gigs[char.id]
                          .map(
                            (gig) => `
                            <div class="gig-card ${char.alignment === "corpo" ? "corpo-gig" : ""}">
                                <div class="gig-header">
                                    <div class="gig-title">${gig.title}</div>
                                    <div class="gig-difficulty">${gig.difficulty}</div>
                                </div>
                                <div class="gig-meta">
                                    <div class="gig-payment">💰 ${gig.payment}</div>
                                    <div class="gig-type">📋 ${gig.type}</div>
                                </div>
                                <div class="gig-description">${gig.description}</div>
                                ${
                                  gig.requirements
                                    ? `
                                    <div class="gig-requirements">
                                        <div class="gig-requirements-title">Requirements:</div>
                                        <ul style="margin: 5px 0 0 20px; list-style: disc;">
                                            ${gig.requirements.map((req) => `<li>${req}</li>`).join("")}
                                        </ul>
                                    </div>
                                `
                                    : ""
                                }
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                `;
  }

  // Define the image mapping and get the background image FIRST
  const imageMapping = {
    ashford: "var(--img-malcom)",
    morales: "var(--img-rosa)",
    volkov: "var(--img-kat)",
    akira: "var(--img-akira)",
    jiyeon: "var(--img-jiyeon)",
    wei: "var(--img-shen)",
    zhao: "var(--img-zhao)",
    marcus: "var(--img-marcus)",
    castellanos: "var(--img-val)",
    tamm: "var(--img-kaia)",
    beaumont: "var(--img-anais)",
    aria: "var(--img-aria)",
  };

  const bgImage = imageMapping[char.id] || "none";

  modalBody.innerHTML = `
                <div class="modal-header" style="display: flex; align-items: flex-start; gap: 20px;">
                    <div style="flex: 1;">
                        <h2>${char.name}</h2>
                        <div class="card-alias" style="font-size: 1.2em;">"${char.alias}"</div>
                    </div>
                    <div class="character-thumbnail" style="background-image: ${bgImage} !important; background-size: cover; background-position: top center; width: 150px; height: 150px; border-radius: 8px; flex-shrink: 0; cursor: pointer;"></div>
                </div>
                ${quoteHTML}

                <div class="modal-section">
                    <h3>Background</h3>
                    <p>${char.background}</p>
                </div>

                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">AGE</div>
                        <div>${char.age}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">NATIONALITY</div>
                        <div>${char.nationality}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">OCCUPATION</div>
                        <div>${char.occupation}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">ALIGNMENT</div>
                        <div>${char.alignment.toUpperCase()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">SPECIALTY</div>
                        <div>${char.specialty}</div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>Physical Description</h3>
                    <p>${char.physical}</p>
                </div>

                <div class="modal-section">
                    <h3>Personal Notes</h3>
                    <p>${char.notes}</p>
                </div>

                <div class="modal-section">
                    <h3>Services Available</h3>
                    ${servicesHTML}
                </div>

                ${specialHTML}

                ${gigsHTML}
            `;

  modal.style.display = "block";

  // Query AFTER the modal is displayed and DOM is updated
  setTimeout(() => {
    const thumbnail = modalBody.querySelector(".character-thumbnail");
    if (thumbnail) {
      thumbnail.addEventListener("click", () => {
        console.log("Thumbnail clicked!");
        console.log("bgImage value:", bgImage);

        const imageOverlay = document.createElement("div");
        imageOverlay.className = "image-overlay";
        imageOverlay.innerHTML = `
                        <div class="enlarged-image-container">
                            <div class="enlarged-image" style="background-image: ${bgImage} !important; background-size: contain !important; background-position: center !important; background-repeat: no-repeat !important;"></div>
                        </div>
                    `;
        document.body.appendChild(imageOverlay);

        console.log("Overlay HTML:", imageOverlay.innerHTML);

        const enlargedImg = imageOverlay.querySelector(".enlarged-image");
        console.log("Enlarged image element:", enlargedImg);
        console.log("Computed styles:", window.getComputedStyle(enlargedImg));
        console.log("Width:", enlargedImg.offsetWidth);
        console.log("Height:", enlargedImg.offsetHeight);
        console.log(
          "Background image:",
          window.getComputedStyle(enlargedImg).backgroundImage,
        );

        // Close on click
        // Close on click
        imageOverlay.addEventListener("click", () => {
          imageOverlay.classList.add("closing");
          setTimeout(() => imageOverlay.remove(), 400); // Match animation duration
        });

        // Trigger animation
        setTimeout(() => imageOverlay.classList.add("active"), 10);
      });
    }
  }, 0);
}

// Event Listeners
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards(currentFilter, searchBox.value);
  });
});

searchBox.addEventListener("input", () => {
  renderCards(currentFilter, searchBox.value);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Initial render
renderCards();
