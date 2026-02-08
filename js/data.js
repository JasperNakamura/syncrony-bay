const gigs = {
  ashford: [
    {
      title: "Asset Recovery: Stolen Prototype",
      difficulty: "⭐⭐⭐",
      payment: "€$25,000",
      type: "Retrieval",
      description:
        "Corpo courier was hijacked, prototype combat stimulant stolen by La Ola gang. Retrieve prototype intact. Lethal force authorized against gang members. Prototype must not be damaged or analyzed.",
      requirements: [
        "Combat capability",
        "Fast response time",
        "Knowledge of gang territories",
      ],
    },
    {
      title: "Hostile Acquisition: Silence the Whistleblower",
      difficulty: "⭐⭐⭐",
      payment: "€$40,000",
      visible: false,
      type: "Wet Work",
      description:
        "Find and assassinate a private solo whistleblower. Make the problem disappear. Permanent solution preferred, but blackmail or forced relocation acceptable if clean. Details will be given once accepted.",
      requirements: [
        "Discretion paramount",
        "No connections to client",
        "Professional execution",
      ],
      /*Anais*/
    },
    {
      title: "Executive Protection: Helix Corporation VP",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$35,000",
      visible: false,
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
      title: "Corporate Espionage: R&D Theft",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$50,000",
      visible: false,
      type: "Data Theft",
      description:
        "Retrieve prototype neural interface specifications from a certain R&D facility. Client is a competing megacorp looking to reverse-engineer the technology. Facility has top-tier security including netrunners, combat drones, and MaxTac response protocols. Details provided once accepted.",
      requirements: [
        "Experienced netrunner",
        "Infiltration specialist",
        "Contingency extraction plan",
      ],
      /*Kronos Systems's central*/
    },
  ],
  morales: [
    {
      title: "Repeatable - Neighborhood Watch: Patrol Shift",
      difficulty: "⭐",
      payment: "€$300 + Community Respect",
      type: "Security",
      description:
        "Help patrol barrio streets during night hours. Presence alone deters small-time criminals. Break up fights, check on elders, keep an eye out for trouble. Rosa coordinates with other volunteers. No combat expected, but be ready. 4-hour shifts, flexible schedule.",
      requirements: ["Willingness to help community"],
    },
    {
      title: "Community Mediation",
      difficulty: "⭐⭐",
      payment: "€$600",
      type: "Negotiation",
      description:
        "Neighbors feuding over property damage and noise. Rosa needs someone to mediate before it escalates to violence. Talk it out, find compromise, prevent bloodshed. Most people respect Rosa's judgment.",
      requirements: ["Patience", "Respect for community", "Fair-mindedness"],
    },
    {
      title: "Punish the Polluters",
      difficulty: "⭐⭐⭐",
      payment: "€$7,500",
      type: "Targeted Strike",
      description:
        "Helix Corporation dumped toxic waste in community water supply. Three kids died. Legal system won't touch them. Hit the executives responsible - their homes, their cars, their sense of security. Send a message.",
      requirements: ["Intelligence gathering", "Precision strikes"],
    },
    {
      title: "Workers' Rights: Factory Shutdown",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$12,000",
      type: "Sabotage",
      description:
        "Textile factory has had 47 worker deaths this year due to safety violations. Owner refuses to fix conditions or pay compensation. Shut down the factory permanently. Make it expensive enough that rebuilding isn't worth it. Steal expensive textile precision robot arm to help fund workers layoff period",
      requirements: [
        "Technical sabotage skills",
        "Timing to avoid worker casualties",
        "Anti-corpo sentiment",
      ],
    },
  ],
  volkov: [
    {
      title: "Loyalty Test",
      difficulty: "⭐⭐",
      payment: "€$2,500",
      completed: true,
      type: "Trust Verification",
      description:
        "Deliver encrypted data chip to her contact - contents are worth €$50,000 on black market. Don't open it, don't copy it, don't sell the intel.",
      requirements: ["Integrity", "Discretion", "Self-control"],
    },
    {
      title: "Competitor Intelligence: Steal Research Data",
      difficulty: "⭐⭐⭐",
      payment: "€$25,000",
      visible: true,
      type: "Data Theft",
      description:
        "Upstart AI development firm has breakthrough neural network research. Karev needs their research data before they file patents. Break into their research facility, copy everything related to adaptive learning algorithms. Security is tight but not military-grade. Upload data to Kat's secure server.",
      requirements: ["B&E skills", "Data extraction", "Stealth"],
    },
    {
      title: "Sabotage Rival Automation Demo",
      difficulty: "⭐⭐⭐",
      payment: "€$30,000",
      visible: true,
      type: "Sabotage",
      description:
        "A Japanese rival tech company is presenting their new automated factory system to Apex's biggest potential client tomorrow. Karev needs the demo to fail spectacularly. Infiltrate their demonstration facility tonight, introduce subtle faults into the robotics control systems. Must look like their tech failure, not sabotage.",
      requirements: [
        "Technical knowledge",
        "Sabotage skills",
        "Perfect execution",
      ],
    },
    {
      title: "Acquire Prototype Robotics Components",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$45,000",
      visible: false,
      type: "Acquisition",
      description:
        "A rival Chinese company has developed revolutionary servo motors for precision robotics. Karev wants them for Apex's automation division. Components are in their secure R&D lab. Heavy security, including armed guards and biometric locks. Retrieve prototypes and all technical documentation.",
      requirements: [
        "Heavy security bypass",
        "Combat readiness",
        "Technical extraction",
      ],
    },
    {
      title: "Board Member Assassination",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$175,000",
      visible: false,
      type: "Wet Work",
      description:
        "Apex board member is attempting to impede on Karev's bonus pay and continued CEO position. He has too much support to remove politically. Arrange fatal 'accident' during his morning commute. Must be untraceable to Karev. Public incident preferred - send message to other board members who might oppose Karev's ambitions.",
      requirements: [
        "Professional execution",
        "Perfect deniability",
        "No evidence trail",
      ],
    },
    {
      title: "Marriage Segmentation",
      difficulty: "⭐⭐",
      payment: "€$8,000",
      visible: false,
      type: "Sabotage",
      description:
        "Yekaterina has had enough. Leak evidence of Apex executives illegal modification of house hold robotics cameras.",
      requirements: [],
    },
    {
      title: "Apex AI Breakdown",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$300,000",
      visible: false,
      type: "Cyber Ops",
      description:
        "We will slowly break down Apex for good. Apex's system is deeply integrated to it's complex AI systems. By breaking through multiple AI powered firewalls and modifying the AI to be terrible.",
      requirements: [
        "Use of Killstick",
        "Very advanced netrunning or programming skills",
      ],
    },
    {
      title: "Come to Penthouse",
      difficulty: "⭐",
      payment: "Unknown",
      visible: false,
      type: "Unknown",
      description: "Unknown",
      requirements: [],
    },
  ],
  akira: [],
  jiyeon: [
    {
      title: "First Run: Prove Yourself",
      difficulty: "⭐",
      payment: "€$300",
      completed: true,
      type: "Courier",
      description:
        "Ji-Yeon needs to see if you can handle the basics. Simple package delivery to Detention. Just throw over the fence without getting caught.",
      requirements: [],
    },
    {
      title: "Regular Client Package",
      difficulty: "⭐",
      payment: "€$200",
      type: "Courier",
      description:
        "Deliver something to Ji-Yeon's home. She cannot deliver it herself.",
      requirements: [],
    },
    {
      title: "Route Reconnaissance: Scout the Path",
      difficulty: "⭐⭐",
      payment: "€$1,200",
      visible: false,
      type: "Support",
      description:
        "Ji-Yeon has a hot delivery through Eclipse territory by the Faded Piers tomorrow but the usual route is compromised. She needs someone to scout alternative paths tonight - check gang patrol patterns, identify checkpoint locations, find blind spots in surveillance. Report back with viable routes. She'll handle the actual delivery.",
      requirements: ["Stealth"],
    },
    {
      title: "Distraction Play: Draw Security Away",
      difficulty: "⭐⭐",
      payment: "€$1,500",
      visible: false,
      type: "Support",
      description:
        "Ji-Yeon is moving encrypted data through a corporate checkpoint in 2 hours at Monorail L2. Security is tight. She needs someone to create a distraction on the opposite side of the checkpoint - nothing violent, just enough chaos to pull guards away for 90 seconds while she slips through. Timing is everything.",
      requirements: [],
    },
    {
      title: "Pursuit Intercept: Block the Tail",
      difficulty: "⭐⭐",
      payment: "€$2,000",
      type: "Support",
      description:
        "Ji-Yeon is delivering stolen Atlus tech schematics. Security spotted her pickup and is following her route. She needs you positioned at a chokepoint to intercept the tail vehicle - block the road, cause a traffic jam, whatever it takes to buy her time to lose them. Don't engage directly, just delay.",
      requirements: ["Vehicle", "Quick thinking", "Evasion skills"],
    },
    {
      title: "Kronos A.I. Targeting System",
      difficulty: "⭐⭐⭐",
      payment: "€$4,000",
      visible: false,
      type: "Secure Courier",
      description:
        "Ji-Yeon's client stole A.I. targeting system components from Kronos Systems. Needs delivery to competitor before Kronos realizes it's gone but difficult with her eqiupment. Would like to borrow your car and assitance for half the pay.",
      requirements: ["Combat driving", "Stealth skills"],
    },
    {
      title: "Chimera Warbot Systems Delivery",
      difficulty: "⭐⭐⭐",
      payment: "€$6,000",
      visible: false,
      type: "High-Risk Courier",
      description:
        "The Kronos job went too well. Client wants more - complete Chimera warbot control systems. Kronos is already investigating their network. She needs your help on this again. Heavy corpo response expected.",
      requirements: ["Advanced driving", "Combat readiness"],
    },
    {
      title: "Extraction: Save Ji-Yeon",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$15,000",
      visible: false,
      type: "Rescue Operation",
      description:
        "Kronos traced the warbot systems back to Ji-Yeon. Go to her apartment and find leads and extract her. Longer it takes the longer she may be tortured.",
      requirements: [],
    },
  ],
  wei: [
    {
      title: "Restaurant Sabotage",
      difficulty: "⭐⭐⭐",
      payment: "€$12,000",
      type: "Sabotage",
      completed: true,
      description:
        "Rival restaurant 'Le Bernardin' is gaining Michelin consideration. Need their kitchen sabotaged during critic visit. Food poisoning incident, equipment failure, or staff incident acceptable. Must appear accidental. Timing is critical.",
      requirements: [
        "Kitchen infiltration",
        "Subtle sabotage",
        "Critic safety",
      ],
    },
    {
      title: "Eliminate Rising Star",
      difficulty: "⭐⭐⭐",
      payment: "€$14,000",
      type: "Character Assassination",
      description:
        "Young celebrity chef Martin Compston is getting media attention as 'next big thing' in Synchrony Bay. Create a scandal that destroys their reputation. Find dirt or fabricate drug use, sexual harassment claims, etc. Permanent career damage required. Media contacts helpful.",
      requirements: [
        "Social engineering",
        "Media manipulation",
        "Evidence fabrication",
      ],
    },
    {
      title: "Coelacanth Acquisition: Living Fossil Delicacy",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$22,000 + Meal at Élévation",
      type: "Smuggling/Theft",
      description:
        "Ultra-wealthy client wants to taste coelacanth - the 'living fossil' fish thought extinct for millions of years. Only a few hundred exist in deep waters off Comoros Islands. Need one alive and fresh. International law forbids capture. Extremely delicate transport required - they die easily outside deep water pressure.",
      requirements: [
        "International smuggling connections",
        "Specialized aquatic transport",
      ],
    },
    {
      title: "Cloned Tasmanian Tiger Meat",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$28,000",
      type: "Theft/Smuggling",
      description:
        "Helix Corporation successfully cloned Tasmanian tiger for conservation. Wei wants tissue samples for the ultimate 'extinct meat' dish. Break into research facility, steal viable samples, deliver to Wei's private food scientist. Security is corporate-grade.",
      requirements: [
        "Corporate infiltration",
        "Biological sample handling",
        "Extreme discretion",
      ],
    },
    {
      title: "Michelin Inspector Intel",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$30,000 + Flight to France",
      visible: false,
      type: "Information Gathering/Bribery",
      description:
        "Michelin inspectors are anonymous. Wei needs to know when they're visiting Élévation so he can prepare perfectly. Find out inspector identities, schedules, preferences. Bribe, blackmail, or surveil Michelin Guide headquarters in France.",
      requirements: ["International intelligence gathering"],
    },
    {
      title: "Recipe Theft",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$20,000",
      type: "Burglary",
      description:
        "A trending foodtruck so good it even got a single Michilen star. Find the recipie to Liege style waffles.",
      requirements: [],
    },
    {
      title: "Critic Elimination: Remove Negative Review",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$25,000",
      visible: false,
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
      title: "Black Market Wine Acquisition: Impossible Vintage",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$18,000 + Rare Wine Bottle",
      visible: false,
      type: "Theft/Smuggling",
      description:
        "Ultra-wealthy client demands 1947 Château d'Yquem for their private dinner at Élévation. Only known bottles are in museum collections or wealthy individual private cellars. Acquire by any means necessary. One week deadline.",
      requirements: ["Portable wine cooler"],
    },
  ],
  zhao: [
    {
      title: "Repeatable - Medical Waste Disposal Run",
      difficulty: "⭐",
      payment: "€$300",
      type: "Transportation",
      description:
        "Transport medical waste from underground clinic to secure disposal site. Biohazard materials can't go through normal channels or they'll track that they're treating patients outside a licensed facility.",
      requirements: ["Vehicle"],
    },
    {
      title: "Repeatable - Supply Pickup",
      difficulty: "⭐",
      payment: "€$200",
      type: "Transportation",
      description:
        "Pick up medical supplies from trusted black market contact. Bandages, syringes, basic pharmaceuticals. Supplier pickup changes weekly.",
      requirements: ["Vehicle"],
    },
    {
      title: "Repeatable - Patient Transport: Home Pickup",
      difficulty: "⭐⭐",
      payment: "€$600",
      type: "Transportation",
      description:
        "Pick up patients from their homes and bring them to underground clinic for procedures they can't get at corporate hospitals. Some are in gang territory, some just can't risk being seen at official facilities. Discrete, professional service.",
      requirements: ["Vehicle", "Navigation skills", "Discretion"],
    },
    {
      title: "Pharmaceutical Supply Run",
      difficulty: "⭐⭐⭐",
      payment: "€$1,800",
      type: "Acquisition",
      description: '"Obtain" black market immunosuppressors. Located in ',
      requirements: ["Vehicle", "Calm under pressure"],
    },
    {
      title: "Equipment Transport: Heavy Machinery",
      difficulty: "⭐⭐⭐",
      payment: "€$5,200",
      type: "Transportation",
      description:
        "Transport refurbished X-Ray machine from warehouse to clinic. Heavy, valuable, and corpo security watches these items.",
      requirements: [
        "Heavy lifting capability or equipment",
        "Transport vehicle",
      ],
    },
    {
      title: "Emergency Medicine Procurement",
      difficulty: "⭐⭐⭐",
      payment: "€$2,500",
      type: "Acquisition",
      description:
        "Obtain critical medications that are restricted by corporate medical monopolies. Blood products, immunosuppressants, specialty drugs. 'Borrow' from corporate stockpiles.",
      requirements: ["Cold storage transport"],
    },
    {
      title: "Emergency Procedure",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$15,500",
      visible: false,
      type: "Escort",
      description:
        "A high profile individual is dying and is not being treated properly in Detention. Escort Dr. Zhao inside the prison and help her as she treats the patient.",
      requirements: ["Security bypass skills"],
    },
    {
      title: "Cross-District Medical Transport",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$14,000",
      visible: false,
      type: "Transportation",
      description:
        "Transport a child out of Synchrony Bay. Child's heart is targetted for a Crestline residents heart transplant.",
      requirements: ["Armored or discrete vehicle", "Route knowledge", "Speed"],
    },
  ],
  marcus: [],
  castellanos: [
    {
      title: "Let me Party in peace!",
      difficulty: "⭐",
      payment: "€$500 + Open Bar Tab",
      completed: true,
      type: "Escort / Party Security",
      description:
        "Heyyyyy lets hit a maybe not so legal warehouse rave in the Southern Sprawl. I want you glued to me and block those sketchy promoters or ugly bastards.",
      requirements: ["Be handsome af"],
    },
    {
      title: "HELP!!!",
      difficulty: "⭐",
      payment: "€$1500",
      visible: true,
      type: "Logistics / Discretion",
      description:
        "I had a penthouse party and someone stole daddy's prized guitar! Help me get it back plzzz.",
      requirements: [
        "Discretion above all",
        "Basic cleanup hustle",
        "No judgment zone",
      ],
    },
    {
      title: "Let's do something public >w0",
      difficulty: "⭐",
      payment: "€$500",
      visible: true,
      type: "Intimate Escort",
      description: "I reserved a curtained VIP cabana at Undertow Resort.",
      requirements: [],
    },
    {
      title: "Party Yacht",
      difficulty: "⭐⭐",
      payment: "€$1,000",
      visible: false,
      type: "Security / Party Escort",
      description:
        "We're crashing a party yacht. If you get me past security I'll let you bend me over the railing <3",
      requirements: [],
    },
    {
      title: "Let's just hang on the beach",
      difficulty: "⭐⭐",
      payment: "€$1,000",
      visible: false,
      type: "Escort",
      description: "Wanna swim and have some fun?.",
      requirements: [],
    },
    {
      title: "Beachside Mega Club Frenzy: Poolside Protection & Play",
      difficulty: "⭐⭐⭐",
      payment: "€$5,000 + Club Perks",
      visible: false,
      type: "Extreme Intimate / Security",
      description:
        "Let's go to Voltage (beachside mega club). They got a massive pool we can \"swim\" in >w0. Let's just not get caught",
      requirements: [
        "Combat-ready awareness in crowds",
        "Discreet public sex capability",
        "Stamina for multi-round chaos",
        "Extraction if things heat up too much",
      ],
    },
    {
      title: "Help :(",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$10,000",
      visible: false,
      type: "Rescue / Social Engineering",
      description:
        "I ended up on a billionaire's superyacht. It started as a cool party but now its a heavy, no-holds-barred orgy. Gross guys are trying to force themselves on me and I'm scared. Security has guns and wont't let guests leave early.",
      requirements: [],
    },
    {
      title: "Eclipse-Style Den Raid: Deep Rescue",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$50,000",
      visible: false,
      type: "High-Risk Assault / Extraction",
      description:
        "My daughter Val which I heard you were fraternizing with has been kidnapped by Eclipse. They say they've been drugging and raping her for hours and will continue to do so unless we pay up 50 million. Save her quickly at the Faded Piers.",
      requirements: ["Returned alive and physically well"],
    },
  ],
  tamm: [
    {
      title: "Party Escort",
      difficulty: "⭐",
      completed: true,
      payment: "€$300 + Home-Cooked Meal",
      type: "Escort",
      description:
        "Make sure Kaia comes home safe from her party on the weekend. Simple protection detail - presence usually enough.",
      requirements: [],
    },
    {
      title: "Bar Fight Cleanup",
      difficulty: "⭐",
      payment: "€$400",
      visible: false,
      type: "Extraction/Combat",
      description:
        "Kaia got into another bar fight. Someone said something, she threw the first punch. Now it's escalating. Get there before she gets seriously hurt or kills someone. Extract her before cops or gangs arrive.",
      requirements: ["ASAP"],
    },
    {
      title: "Street Confrontation Backup",
      difficulty: "⭐",
      payment: "€$350 + Home-Cooked Meal",
      visible: false,
      type: "Combat Support",
      description:
        "Kaia mouthed off to wrong people on the street. Now it's a fight. Got a text from Bailey. She's outnumbered 3-to-1 but still swinging. Get there, even the odds, pull her out.",
      requirements: ["ASAP"],
    },
    {
      title: "La Ola Revenge Intercept",
      difficulty: "⭐",
      payment: "Free car repairs",
      completed: true,
      type: "Defense",
      description:
        "Kaia humiliated a La Ola member last week. They're coming for payback on Friday. Father got word from a friend. Post up at her apartment, ready for when they show. Non-lethal preferred but her safety is priority.",
      requirements: [],
    },
    {
      title: "Campus Fight Protection",
      difficulty: "⭐",
      payment: "€$300 + Food",
      completed: true,
      type: "Deterrence",
      description:
        "Kaia's been getting into fights with another engineering student. It's escalating. Other student has gang connections. Stand nearby during their next class, make your presence known. Hopefully no actual fighting needed.",
      requirements: [],
    },
    {
      title: "1 Week University Escort Protection",
      difficulty: "⭐⭐",
      payment: "€$500 + Daily Home-Cooked Meals",
      visible: false,
      type: "Escort",
      description:
        "Walk Kaia to and from university. La Ola and Eclipse both want her dead for 'disrespecting' them. She'll fight you on needing protection. Keep her alive despite herself.",
      requirements: [],
    },
    {
      title: "Nightclub Brawl Extraction",
      difficulty: "⭐⭐",
      payment: "€$700 + Semla",
      visible: true,
      type: "Emergency Extraction",
      description:
        "Kaia went to a nightclub in Eclipse territory despite warnings. She hasn't seemingly come back since. Find and save her.",
      requirements: ["Combat skills", "Crowd navigation"],
    },
    {
      title: "Gang Threat Deterrence",
      difficulty: "⭐⭐⭐",
      payment: "€$3,000 + Community Favors",
      visible: false,
      type: "Intimidation/Combat",
      description:
        "Send clear message to gang members threatening Kaia. Father prefers non-lethal but understands sometimes it's necessary. Make them afraid to touch her. Targets: La Ola and Eclipse members. Goal: make example that protects her long-term.",
      requirements: [],
    },
  ],
  beaumont: [
    {
      title: "Bay Development Corporation Displacement Interview",
      difficulty: "⭐⭐⭐",
      payment: "€$2,500",
      completed: true,
      type: "Escort",
      description:
        "Accompany Anaïs to interview families being displaced by Bay Development Corporation's aggressive gentrification projects. Former residents, community organizers, local business owners forced out by rising rents and eminent domain abuse. BDC has been known to send 'representatives' to discourage people from talking to journalists. Mostly insurance - she expects no trouble but wants backup in case BDC goons show up. You're posing as part of her press team. Professional demeanor essential - these people have lost everything and deserve respect.",
      requirements: [
        "A suit worth at least €$1,000",
        "Respect for journalistic process",
      ],
    },
    {
      title: "Élévation Exposé: The Rotten Core of High Society",
      difficulty: "⭐⭐⭐",
      payment: "€$4,000 + High Society Blackmail Material",
      visible: false,
      type: "Infiltration",
      description:
        "Get Anaïs into Élévation, the Michelin 3-star restaurant where Synchrony Bay's elite make their real deals. Posing as staff or guests, she needs photos of corpo executives, politicians, and crime bosses conducting illegal business over €$2,000 plates. Document who's eating with who, capture incriminating conversations, photograph document exchanges.",
      requirements: [
        "Formal attire/service skills",
        "High society etiquette knowledge",
      ],
    },
    {
      title: "Helix Corporation Testing Facility: Medical War Crimes",
      difficulty: "⭐⭐⭐",
      payment: "€$4,500",
      type: "Documentary Protection",
      description:
        "Anaïs is documenting Helix Corporation's illegal human experimentation at their 'volunteer medical trials' facility. Gene therapy without consent, experimental drugs on desperate patients, falsified safety data. She needs protection while interviewing victims, photographing facilities, and gathering evidence of genetic engineering crimes. Helix security will be minimal at the facility itself, but corporate cleaners might show up if they catch wind. Witnesses are traumatized and scared of retaliation - need sensitivity. Evidence could shut down entire unethical testing programs and expose Helix's dark side.",
      requirements: [],
    },
    {
      title: "Meridian Technologies Exposé: Chakra T6 Privacy Breach",
      difficulty: "⭐⭐⭐",
      visible: true,
      completed: true,
      active: false,
      payment: "€$5,000 + Tech Industry Connections",
      type: "Corporate Espionage",
      description:
        "Break into Meridian Technologies' 10th floor offices to find evidence about their new flagship phone, the Chakra T6. Anonymous sources claim it secretly records conversations even when off, harvests biometric data without consent, has backdoor government access, and sells user location data to third parties. Anaïs needs photos of internal documents, prototypes, and source code. Building security is tight but predictable. Tech companies kill stories like this so you have one chance to get it right.",
      requirements: [
        "Building infiltration skills",
        "Tech security bypass knowledge",
      ],
    },
    {
      title: "Conflict Zone Photography: War Zone Access",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$35,000",
      visible: false,
      type: "Protection/Access",
      description:
        "Escort Anaïs into active combat zones between corps or gangs. She needs photos of the violence for her exposé. Keep her alive while she gets impossible shots. She'll take risks you wouldn't.",
      requirements: [],
    },
    {
      title: "Harborside Manufacturing Investigation: Toxic Dumping Exposé",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$42,000",
      visible: false,
      type: "Investigation Support",
      description:
        "Anaïs is investigating Harborside Manufacturing's illegal toxic waste dumping into Synchrony Bay. Worker deaths covered up and falsified EPA reports. She needs muscle while she gathers evidence at the dockside factories - photos of dumping operations, interviews with dying workers, soil and water samples. Harborside will send security goons, local gangs are on their payroll. Duration: days to weeks.",
      requirements: [],
    },
    {
      title: "Post-Exposé Extraction",
      difficulty: "⭐⭐⭐⭐⭐",
      visible: false,
      payment: "€$100,000 or a special favor",
      type: "Emergency Extraction",
      description:
        "Anaïs's latest exposé just dropped. Corps/gangs/government wants her dead. Need immediate extraction, safe house, and protection until heat dies down. She's burned her location again.",
      requirements: [],
    },
    {
      title: "Kronos Systems Black Site: The War Crimes Documentary",
      difficulty: "⭐⭐⭐⭐⭐",
      visible: false,
      payment: "€$150,000 + Documentary Credit + Global Distribution",
      type: "Long-term Protection",
      description:
        "Anaïs is going deep inside a Kronos Systems black site facility where they test experimental weapons on 'enemy combatants' and dissidents. Illegal sonic and chemical weapons. You're posing as new security personnel, she's posing as a medic. You're her lifeline, security, and extraction plan for 3 weeks of constant danger. She'll document everything with hidden cameras. If you're caught, Kronos makes you both disappear. If you succeed, this brings down their entire private warfare division and a war will be stopped",
      requirements: [],
    },
  ],
  aria: [
    {
      title: "Executive Impersonation: Contract Negotiation",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$42,000",
      visible: false,
      type: "Corporate Representation",
      description:
        "Neptune's CEO can't attend critical contract negotiation with Meridian Technologies. Aria needs you to attend in their place with full authority. She'll provide briefing materials, negotiation parameters, and corporate credentials. You'll have 2 hours to close €15M logistics deal.",
      requirements: [
        "Negotiation expertise",
        "Corporate presence",
        "Quick decision-making under pressure",
      ],
    },
    {
      title: "Data Center Emergency: Physical Server Access",
      difficulty: "⭐⭐⭐",
      payment: "€$3,800",
      type: "Technical Crisis",
      visible: false,
      description:
        "Neptune's secondary data center is being attacked. Critical logistics data needs manual extraction from physical servers before the data is destroyed. You have 4 hours to access the facility, extract data from designated server racks, and upload to secure backup.",
      requirements: ["Technical competency", "Problem-solving under pressure"],
    },
    {
      title: "Cargo Recovery: Stolen Shipment Retrieval",
      difficulty: "⭐⭐⭐",
      payment: "€$4,000",
      type: "Recovery",
      description:
        "Neptune shipment worth €200k was hijacked en route to client. Insurance won't cover it and Aria's bonus depends on successful delivery. She has intel on where the cargo is being held - a warehouse controlled by local gang. Get in, recover the shipment, deliver it to the original destination.",
      requirements: ["Combat capability", "Vehicle access", "Problem-solving"],
    },
    {
      title: "Executive Extraction: Crisis Management",
      difficulty: "⭐⭐⭐",
      payment: "€$5,000 + €$1,000 bonus",
      visible: false,
      type: "Security",
      description:
        "Neptune executive is stranded at failed business summit in hostile corporate territory (Kronos Systems controlled zone). Their security detail bailed and they need immediate extraction before competitors use the opportunity for leverage or worse. Aria will provide their location and safe route intel. You have 6 hours to get them out and back to Neptune territory. Bonus if done without incident.",
      requirements: ["Driving skills", "Situational awareness"],
    },
    {
      title: "Prototype Acquisition: Competitive Intelligence",
      difficulty: "⭐⭐⭐",
      payment: "€$4,600",
      visible: false,
      type: "Corporate Espionage",
      description:
        "Apex is falling behind on their AI development timeline. A smaller tech startup has developed a promising automation prototype that could help the company. Break into the startup's lab, steal the prototype and related research data, deliver to Aria's contact at Apex. The startup itself has very little security but the box they stored it in has military grade protections.",
      requirements: ["Breaking and entering", "Basic tech handling", "Stealth"],
    },
    {
      title: "Executive Blackmail: Career Protection",
      difficulty: "⭐⭐⭐⭐",
      payment: "€$48,000 + Ongoing Retainer",
      type: "Intelligence Gathering",
      description:
        "An Apex executive is being undermined by a rival executive who wants their position. The rival is blocking their initiatives and spreading rumors. Aria has access to the rival's schedule through Neptune's partnership meetings. Surveil them, document compromising behavior, deliver evidence.",
      requirements: [
        "Surveillance expertise",
        "Photography/recording capability",
        "Patience",
      ],
    },
    {
      title: "Rescue Yekaterina Volkov",
      difficulty: "⭐⭐⭐⭐⭐",
      payment: "€$175,000 + Future Favors",
      visible: false,
      type: "Rescue Mission",
      description:
        "Apex's AI HR model told the company to replace Fedor Volkov and make him the scapegoat for a failed major initiative. An S.O.S. signal was given from Yekaterina but no response was given. Save her before her life is endangered.",
      requirements: [],
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
      "Former supermodel married to Fedor Volkov (VP at Apex Dynamics).",
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
    occupation: "Sous Chef at Élévation",
    type: "specialist",
    alignment: "corpo",
    specialty: "Fusion molecular gastronomy and culinary espionage",
    background:
      "Child prodigy from Shanghai. Youngest sous chef at three-Michelin-star restaurant Élévation. Obsessed with earning own stars before 25.",
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
      "Hired out of business school by Neptune Logistics . Became indispensable to Karev Volkov while learning about his crimes. Now actively sabotages from inside.",
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
