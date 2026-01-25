// ==================== DISTRICT DATA ====================

const districts = {
  "northern-outskirts": {
    name: "NORTHERN OUTSKIRTS",
    description: "The forgotten edge of Synchrony Bay. Once planned as luxury suburbs, now a wasteland of half-finished developments and squatter camps. Corps abandoned these projects decades ago when the profit margins didn't pan out. Now it's home to those who want to disappear.",
    features: [
      "Abandoned construction sites turned settlements",
      "No official infrastructure or services",
      "Nomad camps and off-grid communities",
      "Smuggling routes to and from the city",
      "Zero corpo or police presence",
      "Air quality: Surprisingly clean (no industry)"
    ],
  },
  
  "el-barrio-bajo": {
    name: "EL BARRIO BAJO",
    description: "The beating heart of Synchrony Bay's working class. Hab-Stack 01 and 02 tower above everything - concrete monoliths housing thousands in cramped micro-apartments. Street level is The Strip: a neon-lit maze of shops, street vendors, and survival. The Meridian Exchange handles gray-market goods, while Atlas Hospital struggles to care for those who can't afford corpo clinics. The Ripperdoc keeps people functional with black-market cyberware. This is where people live, work, and die without ever escaping.",
    features: [
      "Hab-Stack 01 & 02: Massive residential towers (50+ floors each)",
      "The Strip: Shopping district and street markets",
      "Meridian Exchange: Gray-market trading hub",
      "Atlas Hospital: Understaffed public hospital",
      "Ripperdoc clinics (unlicensed but necessary)",
      "Air quality: Poor, industrial runoff and smog"
    ],
  },
  
  "beachside": {
    name: "BEACHSIDE MEGA-CLUBS",
    description: "Where the rich come to pretend they're alive. Massive nightclubs built on reinforced piers extending into Synchrony Bay. Chrome and neon palaces where corpo executives, celebrities, and trust fund kids burn money while the city burns. Security is military-grade, prices are astronomical, and everyone's desperately trying to fill the void inside. The music is loud enough to drown out conscience.",
    features: [
      "Exclusive mega-clubs (Chrome Siren, Voltage, Undertow)",
      "Private beach access (heavily guarded)",
      "Celebrity sightings and influencer parties",
      "Designer drug trade (clean and expensive)",
      "Direct yacht access from Yacht Docks",
      "Air quality: Filtered perfection with a hint of ocean spray"
    ],
  },
  
  "neon-central": {
    name: "NEON CENTRAL",
    description: "The entertainment district where reality becomes negotiable. VR Parlors offer escapes into digital dreams - some people haven't logged out in months. Zenith Hub is the media empire's regional headquarters, pumping out propaganda and entertainment 24/7. Grid Node 7 keeps the data flowing while Monorail L3 shuttles workers, dreamers, and those running from something. At night, the neon is blinding. During the day, you see the cracks.",
    features: [
      "VR Parlors: Virtual reality arcades and addiction dens",
      "Zenith Hub: Zenith Media Group regional HQ",
      "Grid Node 7: Electrical Grid",
      "Monorail L3: Express line to northern districts",
      "Adult entertainment and braindance studios",
      "Air quality: Recycled and slightly chemical"
    ],
  },
  
  "crestline": {
    name: "CRESTLINE",
    description: "High-end residential district for those who've made it but haven't made it to the Corpo District yet. Secure apartment complexes, private security patrols, and the illusion of safety. Upper management, successful fixers, and minor celebrities call this home. Clean streets, maintained parks, and the desperate need to prove you belong. One bad quarter and you're moving to El Barrio Bajo.",
    features: [
      "Luxury apartment complexes",
      "24/7 private security patrols",
      "Boutique shopping and restaurants",
      "Maintained green spaces (rare in Synchrony Bay)",
      "Gated community access control",
      "Air quality: Filtered, approaching corpo standards"
    ],
  },
  
  "midtown": {
    name: "MIDTOWN",
    description: "The commercial heart where the city pretends to be legitimate. Office towers house regional branches of megacorps, banks process dirty money, and shopping districts cater to those with steady paychecks. During business hours, it's all suits and false smiles. After dark, it transforms - the gray markets open, the real deals happen, and you see what Synchrony Bay actually runs on. Connected directly to Transit Hub via underground passages.",
    features: [
      "Commercial office towers",
      "Banking and financial district",
      "Major shopping centers",
      "Day/night economy split (legal/gray market)",
      "Underground connections to Transit Hub",
      "Air quality: Acceptable with filter mask"
    ],
  },
  
  "corpo-district": {
    name: "CORPO DISTRICT",
    description: "The gleaming towers where Synchrony Bay's real rulers reside. Kronos Systems, Helix Corporation, Cascade Energy - the megacorps that own everything, including you. Sky-bridges connect the towers so executives never have to touch street level. Drone security patrols every second. Élévation restaurant serves three-Michelin-star meals to those who decide which neighborhoods get demolished. Every decision made here destroys lives. They call it business.",
    features: [
      "Megacorp headquarters (Kronos, Helix, Cascade)",
      "Sky-bridge network (executive-only access)",
      "Drone security swarms operating 24/7",
      "Élévation: Three-Michelin-star restaurant",
      "Penthouse residences above 80th floor",
      "Air quality: Pristine, triple-filtered systems"
    ],
  },
  
  "transit-hub": {
    name: "TRANSIT HUB",
    description: "The nervous system of Synchrony Bay. Maglev trains, monorail lines, bus terminals, and the highway access all converge here in controlled chaos. Fifty thousand people pass through daily - workers commuting to jobs they hate, couriers running packages, and those desperately trying to leave. Heavy police presence keeps the desperation from boiling over. Popular spot for dead drops and 'accidental' meetings. The bathrooms have seen more deals than the stock exchange.",
    features: [
      "Maglev train central terminus",
      "Monorail L1, L2, L3 interchange",
      "Regional bus terminal",
      "Highway access ramps",
      "24/7 operation with heavy police presence",
      "Underground market level (officially doesn't exist)"
    ],
  },
  
  "yacht-docks": {
    name: "YACHT DOCKS",
    description: "Where floating mansions worth more than entire neighborhoods sit unused. Ultra-luxury yachts line the docks, each one a status symbol for owners who might visit twice a year. Armed private security ensures the poor don't get too close. Some yachts haven't moved in a decade - just trophies rotting in turquoise water. Occasionally one disappears in the night. Insurance fraud or theft? Nobody asks too many questions.",
    features: [
      "Ultra-luxury yacht moorage (100+ berths)",
      "Private armed security (ex-military)",
      "Direct water access to Beachside Mega-Clubs",
      "Helicopter landing pads",
      "Smuggling route (for those brave or stupid enough)",
      "Air quality: Sea breeze, pristine"
    ],
  },
  
  "detention": {
    name: "DETENTION CENTER",
    description: "Synchrony Bay's largest prison complex. Officially called 'Rehabilitation and Correctional Facility 7.' Everyone just calls it Detention. Overcrowded by 300%, gang-controlled cell blocks, and guards who are just as criminal as the inmates. The Plaza outside serves as a demilitarized zone where gangs meet to negotiate - or start wars. Family members wait outside daily, hoping for visits that never come. Private prison contractors profit while people rot.",
    features: [
      "Overcrowded mega-prison (30,000+ inmates)",
      "Gang-controlled cell blocks (6th Street, Valentinos, Maelstrom)",
      "The Plaza: Neutral meeting ground outside prison",
      "Minimal guard control inside",
      "Private prison contractor operated",
      "Air quality: Smog, despair, and resignation"
    ],
  },
  
  "southern-sprawl": {
    name: "THE SOUTHERN SPRAWL",
    description: "Industrial wasteland stretching south like a concrete cancer. Endless warehouses, factories, and horizontal low-rise worker housing blocks. Long Beach style - flat, sprawling, and soul-crushing. Workers live in the shadow of the machines they serve, breathing toxic air and working until they break. Monorail L1 shuttles them to jobs elsewhere. The highway carries trucks 24/7. This is where products are made and people are consumed.",
    features: [
      "Massive warehouse districts (shipping/storage)",
      "Manufacturing and industrial facilities",
      "Low-rise worker housing blocks (4-6 stories)",
      "Monorail L1: Worker transport line",
      "Highway: 24/7 commercial truck traffic",
      "Air quality: Toxic without respirator"
    ],
  },
  
  "faded-piers": {
    name: "FADED PIERS",
    description: "Rusted skeletal remains of Synchrony Bay's fishing industry past. These piers once supported thriving communities. Now they're collapsing monuments to economic abandonment, held together by rust and stubbornness. Squatter communities live in the ruins. Smugglers use them for drops. The oil rigs offshore still pump profits, but none of it comes back here. At night, you can hear the piers groaning, ready to collapse into the contaminated water.",
    features: [
      "Abandoned pier infrastructure (20+ piers)",
      "Squatter communities in ruins",
      "Smuggling drop-off points",
      "Connection to offshore oil rigs",
      "Zero law enforcement presence",
      "Air quality: Salt air mixed with oil fumes"
    ],
  },
  
  "oil-rigs": {
    name: "OFFSHORE OIL RIGS",
    description: "Massive platforms visible from shore, sucking oil from the seabed to feed Cascade Energy's profits. Workers live on-site for 28-day rotations - imprisoned on floating metal islands. Safety regulations are suggestions. Accidents happen weekly. Bodies disappear. The environmental damage is catastrophic but legal bribes keep inspectors away. The rigs operate 24/7, burning the ocean for quarterly earnings reports.",
    features: [
      "Active oil extraction platforms (12 rigs)",
      "On-site worker housing (prison-like conditions)",
      "Catastrophic safety record",
      "Regular 'accidents' and environmental spills",
      "Private security force (armed)",
      "Helicopter-only access"
    ],
  },
  
  "docks": {
    name: "THE DOCKS",
    description: "Commercial shipping port where Synchrony Bay's lifeblood flows in and out. Container ships arrive daily carrying everything from legal goods to human cargo. Longshoremen work brutal shifts for poverty wages while dockside gangs skim their percentage. Port authority is paid to be blind. Everything from weapons to slaves passes through here. The shipping containers know more secrets than the confessionals.",
    features: [
      "Major commercial shipping port",
      "Container storage yards (thousands of containers)",
      "Longshoreman unions (weak and bought)",
      "Gang-controlled smuggling operations",
      "Corrupt port authority",
      "Air quality: Diesel fumes and salt air"
    ],
  },
  
  "dross-yards": {
    name: "DROSS YARDS",
    description: "Where Synchrony Bay's waste goes to die - and where the desperate go to survive. Mountains of toxic electronic waste, industrial refuse, and things that shouldn't exist tower three stories high. Scavenger communities pick through corporate garbage for anything valuable. Corps dump illegal waste at night. The ground is poisoned. The water is poisoned. The air is poisoned. But people still live here because they have nowhere else to go.",
    features: [
      "Toxic waste disposal (illegal dumping)",
      "Electronic waste mountains (e-waste)",
      "Scavenger communities",
      "Industrial scrap yards",
      "Severe ground and water contamination",
      "Air quality: Hazmat suit strongly recommended"
    ],
  },
  
  "black-clinics": {
    name: "BLACK CLINICS",
    description: "Underground medical facilities scattered throughout the southern industrial zone. Unlicensed doctors treat everything from gunshot wounds to botched cyberware installations. No questions asked, no records kept, payment in cash or favors. Some doctors are heroes providing care to those the system abandoned. Others are butchers who should have their licenses revoked - if they ever had them. Walk in injured, hope you walk out alive.",
    features: [
      "Unlicensed medical facilities (20+ known locations)",
      "Cyberware installation/removal/repair",
      "Trauma care (no questions, no police reports)",
      "Cash or favor-based payment",
      "Quality varies wildly (buyer beware)",
      "Safe houses for the wounded and wanted"
    ],
  }
};