/**
 * Rocketpunk Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'rocketpunk-adventure',
    name: 'Rocketpunk Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    concepts: {
      id: 'concepts',
      name: 'Concepts',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Corporate Engineer', 'Asteroid Miner', 'Station Security', 'Lunar Colonist', 'ONA Investigator', 'Habitat Farmer'],
        ['Shuttle Pilot', 'Vacuum Specialist', 'Communications Tech', 'Medical Officer', 'Salvage Operator', 'Trade Negotiator'],
        ['Radiation Surveyor', 'Indentured Worker', 'Station Commander', 'Deep Space Scout', 'Corporate Spy', 'System Engineer'],
        ['Orbital Mechanic', 'Mining Foreman', 'Diplomatic Courier', 'Research Scientist', 'Security Contractor', 'Freight Coordinator'],
        ['EVA Technician', 'Fuel Processor', 'Navigation Officer', 'Hydroponics Specialist', 'Data Analyst', 'Emergency Responder'],
        ['Thruster Specialist', 'Resource Broker', 'Maintenance Chief', 'Bio-Systems Manager', 'Cargo Inspector', 'Terraform Planner'],
      ]
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Vacuum Walking', 'System Diagnostics', 'Zero-G Maneuvering', 'Radiation Shielding', 'Corporate Protocol', 'Emergency Repairs'],
        ['Magnetic Navigation', 'Life Support Tech', 'Docking Procedures', 'Salvage Rights Law', 'Asteroid Surveying', 'Habitat Construction'],
        ['Thruster Maintenance', 'Comms Encryption', 'Reactor Operations', 'EVA Coordination', 'Resource Processing', 'Crisis Management'],
        ['Orbital Mechanics', 'Medical Triage', 'Security Systems', 'Environmental Control', 'Trade Negotiations', 'Station Operations'],
        ['Equipment Jury-Rigging', 'Cargo Loading', 'Fuel Calculations', 'Atmospheric Processing', 'Data Recovery', 'Personnel Management'],
        ['Solar Storm Prediction', 'Robotic Operations', 'Structural Engineering', 'Hydroponics Management', 'Corporate Espionage', 'Deep Space Navigation'],
      ]
    },
    frailties: {
      id: 'frailties',
      name: 'Frailties',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Radiation Poisoned', 'Corporate Indentured', 'Agoraphobic', 'Addicted to Stimulants', 'Paranoid About Sabotage', 'Chronic Equipment Failure'],
        ['Earth-Sick', 'Vacuum Phobia', 'Debt to Crime Syndicate', 'Haunted by Lost Crew', 'Banned from Station', 'Unregistered Augmentation'],
        ['Bone Density Loss', 'Vertigo in Spin-Gravity', 'Marked by Competitors', 'Family Hostage on Earth', 'Illegal Refugee Status', 'Memory Gaps from Accident'],
        ['Immune System Compromised', 'Claustrophobic', 'Blacklisted by Union', 'Guilt Over Past Disaster', 'Addicted to Zero-G', 'Equipment Saboteur'],
        ['Solar Flare Sensitivity', 'Overprotective of Crew', 'Corporate Whistle-Blower', 'Obsessed with Conspiracy', 'Night Terrors', 'Hoarding Disorder'],
        ['Prosthetic Malfunction', 'Financially Desperate', 'Wanted by Authorities', 'Social Anxiety', 'Alcoholic', 'Hypochondriac'],
      ]
    },
    gear: {
      id: 'gear',
      name: 'Gear',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Heavy-Duty EVA Suit', 'Magnetic Tool Belt', 'Emergency Beacon', 'Radiation Detector', 'Portable Computer Terminal', 'Multi-Tool Kit'],
        ['Thruster Pack', 'Oxygen Recycler', 'Plasma Cutter', 'Medical Scanner', 'Corporate Access Card', 'Salvage Rights Beacon'],
        ['Magnetic Boots', 'Emergency Shelter', 'Comm Encryption Device', 'Sample Collection Kit', 'Personal Rocket Bike', 'Backup Life Support'],
        ['Survey Drone', 'Asteroid Mining Rig', 'Security Scanner', 'Hydroponic Seeds', 'Trade Goods Manifest', 'Navigation Computer'],
        ['Solar Panel Array', 'Welding Equipment', 'Emergency Medical Kit', 'Reactor Diagnostic Tools', 'Corporate Surveillance Bug', 'Orbital Tether System'],
        ['Robotic Assistant', 'Cargo Loader Exo-Suit', 'Fuel Processing Unit', 'Bio-Monitor Implant', 'Black Market Contacts', 'Escape Pod'],
      ]
    },
    female_names: {
      id: 'female_names',
      name: 'Female Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Vera', 'Katya', 'Elena', 'Natasha', 'Irina', 'Valentina'],
        ['Susan', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer'],
        ['Akiko', 'Hiroko', 'Yuki', 'Mei', 'Sachiko', 'Keiko'],
        ['Ingrid', 'Astrid', 'Helga', 'Greta', 'Ulla', 'Brigitte'],
        ['Marie', 'Brigitte', 'Colette', 'Sylvie', 'Dominique', 'Françoise'],
        ['Chen', 'Li', 'Wei', 'Ming', 'Xiao', 'Jing'],
      ]
    },
    male_names: {
      id: 'male_names',
      name: 'Male Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Viktor', 'Alexei', 'Dmitri', 'Pavel', 'Nikolai', 'Sergei'],
        ['Robert', 'Michael', 'David', 'William', 'Richard', 'Thomas'],
        ['Hiroshi', 'Takeshi', 'Kenji', 'Masao', 'Yoshiro', 'Ichiro'],
        ['Lars', 'Erik', 'Nils', 'Gunnar', 'Magnus', 'Björn'],
        ['Pierre', 'Jacques', 'Michel', 'André', 'Philippe', 'Claude'],
        ['Jun', 'Peng', 'Tao', 'Long', 'Hao', 'Kang'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Volkov', 'Petrov', 'Kozlov', 'Smirnov', 'Popov', 'Ivanov'],
        ['Anderson', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller'],
        ['Tanaka', 'Yamamoto', 'Watanabe', 'Sato', 'Suzuki', 'Takahashi'],
        ['Larsson', 'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson'],
        ['Dubois', 'Martin', 'Bernard', 'Petit', 'Robert', 'Richard'],
        ['Chen', 'Wang', 'Li', 'Zhang', 'Liu', 'Yang'],
      ]
    },
    nicknames: {
      id: 'nicknames',
      name: 'Nicknames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Red', 'Vacuum', 'Steel', 'Doc', 'Chief', 'Spark'],
        ['Luna', 'Boost', 'Patch', 'Wrench', 'Echo', 'Nova'],
        ['Rock', 'Orbit', 'Tank', 'Wire', 'Flash', 'Comet'],
        ['Ice', 'Cargo', 'Bolt', 'Scope', 'Dust', 'Flare'],
        ['Gear', 'Solar', 'Torch', 'Spike', 'Drift', 'Void'],
        ['Mag', 'Fuel', 'Zinc', 'Frost', 'Rad', 'Binary'],
      ]
    },
    spacecraft_traits_concepts: {
      id: 'spacecraft_traits_concepts',
      name: 'Spacecraft Traits: Concepts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Cargo Hauler', 'Deep Space Explorer', 'Corporate Shuttle', 'Mining Barge', 'Patrol Cutter', 'Research Vessel'],
        ['Freight Transport', 'Survey Ship', 'Executive Yacht', 'Asteroid Prospector', 'Security Corvette', 'Science Platform'],
        ['Bulk Carrier', 'Long-Range Scout', 'Diplomatic Courier', 'Extraction Rig', 'Border Guardian', 'Laboratory Ship'],
        ['Supply Runner', 'System Mapper', 'VIP Transport', 'Resource Harvester', 'Enforcement Vessel', 'Experimental Craft'],
        ['Commercial Liner', 'Exploration Cruiser', 'Corporate Flagship', 'Industrial Platform', 'Military Interceptor', 'Data Collection Ship'],
        ['Heavy Freighter', 'Pioneer Vessel', 'Trade Negotiator', 'Mobile Refinery', 'Combat Patrol', 'Deep Space Monitor'],
      ]
    },
    spacecraft_traits_skills: {
      id: 'spacecraft_traits_skills',
      name: 'Spacecraft Traits: Skills',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Massive Cargo Holds', 'Long-Range Sensors', 'Luxury Amenities', 'Heavy Mining Lasers', 'Weapon Systems', 'Scientific Equipment'],
        ['Efficient Loading', 'Stellar Cartography', 'Diplomatic Suites', 'Ore Processing', 'Patrol Radar', 'Advanced Computers'],
        ['Bulk Transport', 'Deep Space Navigation', 'Encrypted Communications', 'Asteroid Analysis', 'Tactical Maneuvers', 'Research Labs'],
        ['Rapid Deployment', 'System Surveying', 'Secure Passenger Areas', 'Resource Scanning', 'Boarding Procedures', 'Experimental Tech'],
        ['Passenger Comfort', 'Exploration Probes', 'Corporate Networks', 'Industrial Operations', 'Combat Training', 'Data Processing'],
        ['Heavy Lifting', 'Pioneer Technology', 'Trade Protocols', 'Mobile Manufacturing', 'Military Electronics', 'Deep Space Comms'],
      ]
    },
    spacecraft_traits_frailties: {
      id: 'spacecraft_traits_frailties',
      name: 'Spacecraft Traits: Frailties',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Slow Acceleration', 'Extended Mission Risk', 'High Profile Target', 'Dangerous Operations', 'Limited Maneuverability', 'Sensitive Instruments'],
        ['Fuel Inefficient', 'Isolation Syndrome', 'Corporate Politics', 'Equipment Breakdowns', 'Crew Conflicts', 'Experimental Failures'],
        ['Sluggish Handling', 'Communication Lag', 'Diplomatic Incidents', 'Environmental Hazards', 'Aggressive Reputation', 'Research Accidents'],
        ['Limited Defense', 'Navigation Errors', 'Security Breaches', 'Contamination Risk', 'Maintenance Intensive', 'Power Fluctuations'],
        ['Overcrowded', 'Supply Dependencies', 'Regulatory Scrutiny', 'Structural Stress', 'Combat Protocols', 'Data Corruption'],
        ['Mechanical Complexity', 'Long Deployment Cycles', 'Trade Disputes', 'Volatile Cargo', 'Weapon Malfunctions', 'Communication Blackouts'],
      ]
    },
    spacecraft_traits_gear: {
      id: 'spacecraft_traits_gear',
      name: 'Spacecraft Traits: Gear',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Magnetic Clamps', 'Deep Space Probes', 'Executive Quarters', 'Plasma Cutters', 'Defensive Turrets', 'Sensor Arrays'],
        ['Cargo Manipulators', 'Long-Range Scanners', 'Communication Suite', 'Ore Processors', 'Shield Generators', 'Computer Cores'],
        ['Loading Cranes', 'Navigation Computer', 'Diplomatic Codes', 'Refinery Systems', 'Weapon Targeting', 'Laboratory Modules'],
        ['Storage Containers', 'Stellar Maps', 'Security Systems', 'Mining Drones', 'Electronic Warfare', 'Research Equipment'],
        ['Passenger Amenities', 'Exploration Gear', 'Corporate Databases', 'Industrial Tools', 'Combat Systems', 'Data Storage Banks'],
        ['Heavy Transport Gear', 'Pioneer Equipment', 'Trade Terminals', 'Mobile Factories', 'Military Hardware', 'Deep Space Antennas'],
      ]
    },
    mission_types: {
      id: 'mission_types',
      name: 'Mission Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Investigate mysterious signal from abandoned mining station', 'Transport urgent medical supplies through asteroid field', 'Negotiate trade agreement between hostile corporate factions', 'Rescue stranded crew from failing orbital habitat', 'Infiltrate competitor facility to steal prototype technology', 'Chart new asteroid belt for valuable mineral deposits'],
        ['Deliver diplomatic courier to Mars colony under threat', 'Repair critical life support systems during solar storm', 'Investigate reports of pirate activity in shipping lanes', 'Evacuate personnel from reactor meltdown zone', 'Establish communication relay in deep space', 'Hunt down corporate saboteur before next attack'],
        ['Salvage valuable cargo from derelict space vessel', 'Mediate labor dispute at lunar mining operation', 'Transport refugee families to safe habitat', 'Investigate corruption in ONA inspection department', 'Secure mining rights to contested asteroid claim', 'Prevent war between Earth and Mars colonies'],
        ['Research alien artifacts discovered on distant moon', 'Expose corporate cover-up of industrial accident', 'Establish first contact protocols with unknown signals', 'Defend habitat from coordinated terrorist attack', 'Track down escaped corporate assassin', 'Negotiate hostage release at hijacked station'],
        ['Map dangerous radiation zones around Jupiter', 'Investigate disappearance of entire mining crew', 'Prevent habitat gang war from destroying station', 'Deliver classified intelligence to deep space outpost', 'Establish quarantine protocols for mysterious disease', 'Infiltrate black market smuggling operation'],
        ['Coordinate emergency response to asteroid collision', 'Investigate reports of AI uprising at research facility', 'Transport political prisoner to neutral territory', 'Establish new colony on previously unexplored moon', 'Prevent corporate merger through industrial espionage', 'Lead evacuation of entire habitat before catastrophic failure'],
      ]
    },
    corporate_factions: {
      id: 'corporate_factions',
      name: 'Corporate Factions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Titan Mining Consortium - Aggressive asteroid extraction', 'Orbital Dynamics Inc - Habitat construction specialists', 'Solar Flare Communications - Interplanetary data networks', 'Red Planet Agricultural - Mars terraforming operations', 'Vacuum Industries - EVA equipment and life support', 'Stellar Navigation Corp - Ship routing and logistics'],
        ['Luna Construction Guild - Lunar base infrastructure', 'Deep Space Salvage LLC - Derelict ship recovery', 'Fusion Power Solutions - Reactor technology and fuel', 'Asteroid Belt Trading Post - Resource brokerage', 'Orbital Medical Services - Healthcare across space', 'Gravity Well Transport - Planetary surface operations'],
        ['Void Security Systems - Private military contractors', 'Interplanetary Shipping Union - Freight coordination', 'Martian Atmosphere Processing - Environmental engineering', 'Solar Wind Energy - Power generation and distribution', 'Space-Born Manufacturing - Zero-gravity production', 'Ceres Station Authority - Belt governance and regulation'],
        ['Neural Network Technologies - AI and computer systems', 'Radiation Shielding Enterprises - Safety equipment', 'Hydroponics Unlimited - Food production in space', 'Relay Systems Incorporated - Deep-space communication relay networks', 'Thruster Dynamics - Propulsion systems and fuel', 'Habitat Life Support - Atmospheric and environmental'],
        ['Asteroid Mining Rights Bureau - Claims and licensing', 'Emergency Response Specialists - Disaster coordination', 'Corporate Intelligence Division - Industrial espionage', 'Outer System Exploration - Deep space missions', 'Robotic Labor Solutions - Automated workforce', 'Interplanetary Banking Consortium - Financial services'],
        ['Magnetic Navigation Networks - Positioning systems', 'Structural Engineering Corps - Habitat construction', 'Bio-Medical Research Institute - Genetic adaptation', 'Trade Route Security - Anti-piracy operations', 'Environmental Hazard Management - Cleanup and safety', 'Colonial Development Authority - New settlement planning'],
      ]
    },
    locations: {
      id: 'locations',
      name: 'Locations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Zvezda-1 - Soviet lunar base at south pole', 'Artemis Base Alpha - American modular lunar outpost', 'Freedom Station - Rotating artificial gravity hub at L1', 'Endurance - First permanent Mars base', 'Vanguard Habitat - Self-sustaining Martian biodome', 'Ceres Central - Major asteroid belt trading hub'],
        ['Phobos Manufacturing - Robotic production facility', 'Deimos Research Station - Mars moon scientific outpost', 'Europa Deep Drill - Ice mining operation on Jupiter moon', 'Titan Atmospheric Processor - Saturn moon industrial complex', 'Belt Miner\'s Rest - Asteroid prospector waystation', 'Solar Collection Array - Orbital power generation facility'],
        ['New Shanghai Orbital - Corporate habitat and offices', 'Gagarin Memorial Station - Historic orbital monument', 'Armstrong Landing - Lunar tourist destination', 'Red Rock Mining Platform - Mars orbital extraction', 'Void Walker Shipyard - Deep space vessel construction', 'Magnetic Navigation Beacon - Interplanetary positioning'],
        ['Salvage Yard Delta-7 - Derelict ship processing facility', 'Emergency Shelter Kilo - Deep space emergency refuge', 'Quarantine Station Alpha - Biological isolation facility', 'Corporate Headquarters Orbital - Executive command center', 'Union Hall Station - Worker organization headquarters', 'Black Market Trading Post - Illegal commerce hub'],
        ['Research Laboratory Gamma - Experimental technology facility', 'Refugee Processing Center - Displaced person intake', 'Asteroid Claim Office - Mining rights administration', 'Deep Space Communication Array - Interplanetary signals', 'Habitat Ring Construction - Artificial gravity installation', 'Corporate Prison Complex - Industrial detention facility'],
        ['Terraforming Command Center - Planetary engineering hub', 'Robotic Assembly Plant - Automated production facility', 'Military Defense Platform - Orbital weapons system', 'Environmental Monitoring Station - Hazard detection center', 'Trade Negotiation Facility - Commercial diplomacy venue', 'Genesis Colony Ship - Long-range exploration vessel'],
      ]
    },
    complications: {
      id: 'complications',
      name: 'Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Solar storm disrupts all communication for 72 hours', 'Critical life support system begins failing gradually', 'Corporate security increases patrols unexpectedly', 'Rival faction arrives with competing objectives', 'Equipment sabotage discovered at worst possible moment', 'Quarantine lockdown traps everyone in confined space'],
        ['Gravity generator malfunctions causing structural stress', 'Key contact revealed to be working for opposition', 'Medical emergency requires immediate evacuation', 'Navigation systems compromised by computer virus', 'Cargo manifest falsified hiding dangerous materials', 'Union strike shuts down all station operations'],
        ['Atmospheric breach threatens entire habitat section', 'Corporate assassin targets mission participants', 'Reactor containment shows signs of imminent failure', 'Pirates intercept communication and plan ambush', 'AI system begins exhibiting unpredictable behavior', 'Radiation levels spike beyond safe exposure limits'],
        ['Essential crew member suffers psychological breakdown', 'Corporate audit discovers illegal activities', 'Asteroid collision course detected with 6 hours warning', 'Black market suppliers demand payment in advance', 'ONA investigation threatens to expose mission', 'Terrorist cell plants explosives throughout facility'],
        ['Communication lag prevents coordination with Earth', 'Hostile takeover attempt disrupts corporate structure', 'Environmental systems begin producing toxic atmosphere', 'Key personnel revealed to have falsified credentials', 'Emergency evacuation procedures mysteriously activate', 'Trade negotiations break down over hidden agenda'],
        ['Military forces mobilize for unexplained reasons', 'Experimental technology causes unpredictable effects', 'Corporate spy network compromises mission security', 'Habitat gang war escalates beyond containment', 'Deep space phenomenon interferes with all equipment', 'Multiple system failures cascade into total breakdown'],
      ]
    },
    mission_rewards: {
      id: 'mission_rewards',
      name: 'Mission Rewards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Standard corporate contract payment plus performance bonus', 'Salvage rights to recovered equipment and materials', 'Corporate stock options and profit-sharing agreement', 'Access to restricted technology or research data', 'Safe passage through corporate-controlled space', 'Medical treatment for radiation exposure or injury'],
        ['Information about family member\'s whereabouts', 'Debt forgiveness from criminal organization', 'Upgraded ship equipment at corporate expense', 'Priority docking rights at premium stations', 'Corporate protection from legal prosecution', 'Training certification for advanced systems'],
        ['Black market contact network access', 'Fuel vouchers for interplanetary travel', 'Citizenship papers for preferred colony', 'Corporate housing allocation on orbital habitat', 'Emergency rescue beacon with guaranteed response', 'Rare minerals or processed materials'],
        ['Government amnesty for past infractions', 'Partnership opportunity in mining venture', 'Access to classified star charts and navigation data', 'Corporate medical insurance policy', 'Personal spacecraft maintenance contract', 'Priority evacuation rights during emergencies'],
        ['Underground railroad safe house network', 'Prototype equipment testing opportunity', 'Corporate executive\'s personal favor owed', 'Trade route monopoly rights', 'Advanced life support system upgrade', 'Government pension or retirement benefits'],
        ['Orbital real estate deed or station ownership', 'Corporate laboratory access for research', 'Personal bodyguard service contract', 'Diplomatic immunity credentials', 'Advanced AI assistant program', 'Joint ownership of deep space mining claim'],
      ]
    },
    orbital_stations: {
      id: 'orbital_stations',
      name: 'Orbital Stations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Massive corporate headquarters rotating in Earth orbit', 'Industrial manufacturing complex with zero-G production', 'Agricultural habitat with vast hydroponic gardens', 'Military defense platform bristling with weapons', 'Research station studying exotic space phenomena', 'Trade hub where ships dock from across the system'],
        ['Luxury resort catering to wealthy corporate elites', 'Refugee processing center for displaced populations', 'Medical facility specializing in space-related injuries', 'Communications relay station for interplanetary signals', 'Mining equipment depot serving asteroid operations', 'Educational institution training space professionals'],
        ['Fuel depot and ship maintenance facility', 'Cultural center preserving Earth traditions', 'Government administrative complex', 'Criminal haven operating outside legal jurisdiction', 'Religious retreat and spiritual community', 'Scientific conference center for research collaboration'],
        ['Salvage processing station breaking down derelict ships', 'Corporate prison facility for white-collar criminals', 'Entertainment complex with casinos and theaters', 'Immigration checkpoint for inter-colony travel', 'Emergency shelter for disaster evacuation', 'Corporate spy training facility'],
        ['Art gallery showcasing space-born cultural works', 'Diplomatic meeting ground for faction negotiations', 'Corporate testing facility for experimental technology', 'Underground market for illegal goods', 'Retirement community for aged space workers', 'Transportation hub connecting multiple trade routes'],
        ['Corporate data center storing classified information', 'Environmental monitoring station tracking space hazards', 'Labor union headquarters organizing worker rights', 'Media production studio broadcasting across the system', 'Corporate training facility for new employees', 'Decommissioned military base converted to civilian use'],
      ]
    },
    planetary_settlements: {
      id: 'planetary_settlements',
      name: 'Planetary Settlements',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Lunar mining town extracting Helium-3 from regolith', 'Martian agricultural dome growing food for colonies', 'Research outpost studying Martian geological formations', 'Corporate executive retreat in Martian polar region', 'Underground lunar city carved into crater walls', 'Martian terraforming station modifying atmosphere'],
        ['Industrial complex manufacturing spacecraft components', 'Military base protecting corporate mining interests', 'Scientific station studying Europa\'s subsurface ocean', 'Titan fuel processing plant harvesting hydrocarbons', 'Asteroid belt waystation carved into large rock', 'Corporate penal colony for labor infractions'],
        ['Martian university campus training space scientists', 'Lunar communications array beaming signals to Earth', 'Experimental habitat testing closed-loop life support', 'Mining boomtown following valuable ore discovery', 'Martian spaceport connecting surface to orbital facilities', 'Research station monitoring solar radiation patterns'],
        ['Corporate security training facility', 'Agricultural research station developing space crops', 'Refugee settlement for Earth climate change evacuees', 'Underground criminal hideout in abandoned mine', 'Corporate executive\'s private estate and compound', 'Medical research facility studying space adaptation'],
        ['Martian cultural center preserving pre-colonization history', 'Industrial recycling plant processing station waste', 'Corporate propaganda center controlling information flow', 'Emergency shelter network for radiation storm protection', 'Martian wine-making facility using hydroponic grapes', 'Geological survey base mapping planetary resources'],
        ['Corporate think tank developing future expansion plans', 'Martian sports complex for low-gravity athletics', 'Environmental restoration project healing Earth damage', 'Corporate child-care facility for employee families', 'Artistic colony creating space-inspired cultural works', 'Experimental community testing post-scarcity economics'],
      ]
    },
    asteroid_installations: {
      id: 'asteroid_installations',
      name: 'Asteroid Installations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Massive automated mining rig strip-mining ore', 'Corporate processing facility refining raw materials', 'Smuggler\'s hidden base inside hollowed asteroid', 'Research station studying asteroid composition', 'Fuel depot serving deep space exploration missions', 'Emergency shelter network for stranded miners'],
        ['Corporate security outpost monitoring belt activity', 'Independent prospector\'s claim with basic equipment', 'Pirate stronghold raiding shipping lanes', 'Salvage operation breaking down derelict spacecraft', 'Corporate executive\'s secret meeting facility', 'Underground fighting arena for belt workers'],
        ['Communications relay boosting interplanetary signals', 'Black market trading post for illegal goods', 'Corporate prison asteroid housing political prisoners', 'Research facility developing asteroid mining technology', 'Refueling station for long-range transport ships', 'Corporate spy listening post monitoring communications'],
        ['Industrial fabrication plant using asteroid materials', 'Independent colony seeking autonomy from Earth', 'Corporate testing facility for dangerous experiments', 'Asteroid belt navigation beacon warning of hazards', 'Refugee camp for displaced mining families', 'Corporate data storage facility in secure location'],
        ['Underground casino and entertainment complex', 'Military weapons testing facility', 'Corporate medical research station studying radiation effects', 'Independent trading consortium headquarters', 'Environmental monitoring station tracking space debris', 'Corporate training facility for asteroid belt operations'],
        ['Secret government facility conducting classified research', 'Independent news organization broadcasting truth', 'Corporate executive recruitment and evaluation center', 'Underground labor union organizing mining workers', 'Corporate psychological research facility', 'Independent asteroid city with full self-governance'],
      ]
    },
    deep_space_phenomena: {
      id: 'deep_space_phenomena',
      name: 'Deep Space Phenomena',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ancient alien probe broadcasting incomprehensible signals', 'Rogue planet drifting through interstellar space', 'Massive solar flare disrupting all electronics', 'Gravitational anomaly bending space-time locally', 'Dense asteroid field created by ancient planetary collision', 'Mysterious energy readings from empty space coordinates'],
        ['Derelict generation ship from failed colony expedition', 'Plasma storm interfering with ship navigation systems', 'Unusual magnetic field patterns affecting metal equipment', 'Strange radiation signature unlike any known source', 'Gravitational gradient inconsistent with any mapped object: something dense is nearby', 'Massive ice comet carrying unknown organic compounds on its first inner system pass'],
        ['Artificial structure of clearly non-human origin', 'Unexplained gap in the asteroid field: something cleared this area', 'Region with measurably altered background radiation and no obvious source', 'Ancient debris field with fragments that analysis suggests came from a deliberate conflict', 'Repeating signal burst correlating with no known natural periodic event', 'Long-period comet on an unprecedented trajectory; composition and full path not yet computed'],
        ['Abandoned space station of unknown technological origin', 'Rogue asteroid with unusual spectral signature suggesting artificial origin', 'Neutron star pulsar disrupting electronic systems', 'Unknown dense debris field blocking established navigation routes; origin unclear', 'Unusual radio emission with mathematical structure and no identified source', 'Ancient mining operation left by previous civilization'],
        ['Crystalline structure growing in zero-gravity environment', 'Anomalous heat signature detected in empty space; no visible object', 'Region where magnetic instruments behave erratically and predictably wrong', 'Alien artifact of clearly non-human manufacture, purpose unknown', 'Recurring microwave burst on a frequency matching no known transmitter', 'Ship instruments detect mass consistent with a large object; nothing is visible'],
        ['Derelict probe bearing markings that match no known national or corporate space program', 'Automated distress beacon on an obsolete emergency frequency; source cannot be located', 'Ancient warning beacon in dead alien language', 'Geometric pattern etched into a moon\'s surface, only visible from orbit', 'Interference pattern in the solar wind that appears to encode repeating data', 'Series of hollow asteroids arranged in a geometrically perfect formation'],
      ]
    },
    trade_routes: {
      id: 'trade_routes',
      name: 'Trade Routes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Earth-Luna express lane for high-priority cargo', 'Mars-Belt mining equipment and processed ore exchange', 'Outer system ice water delivery to inner colonies', 'Corporate executive shuttle service between facilities', 'Emergency medical supply runs during health crises', 'Deep space exploration mission supply chains'],
        ['Black market smuggling route avoiding patrol areas', 'Refugee transport corridor to safe haven colonies', 'Corporate espionage document courier service', 'Luxury goods delivery to wealthy orbital habitats', 'Raw materials shipment from asteroid mining operations', 'Scientific equipment transport for research facilities'],
        ['Corporate prisoner transport between detention facilities', 'Information data packet delivery across solar system', 'Diplomatic pouch service for government communications', 'Cultural artifact preservation and museum delivery', 'Corporate executive family member transport service', 'Military weapons and equipment distribution network'],
        ['Underground railroad for escaped corporate indentured workers', 'Media content distribution across colony networks', 'Corporate audit and inspection team deployment routes', 'Emergency evacuation transport during space disasters', 'Corporate merger negotiation team shuttle service', 'Advanced technology prototype delivery system'],
        ['Labor union organizer transport and communication network', 'Corporate whistleblower protection and relocation service', 'Illegal alien artifact smuggling network', 'Corporate death squad deployment and extraction routes', 'Independent colony supply runs avoiding corporate taxes', 'Corporate sabotage team insertion and exfiltration paths'],
        ['Government intelligence courier service', 'Corporate chemical and biological weapon transport', 'Underground newspaper and media distribution network', 'Corporate hostage negotiation specialist deployment', 'Independent prospector equipment and supply delivery', 'Corporate executive extraction routes during emergencies'],
      ]
    },
    political_tensions: {
      id: 'political_tensions',
      name: 'Political Tensions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Corporate merger creating monopolistic power concentration', 'Labor strike spreading across multiple orbital facilities', 'Government regulation threatening corporate profit margins', 'Independence movement gaining support in outer colonies', 'Trade war between rival corporate factions', 'Resource shortage creating competition between settlements'],
        ['Corporate espionage scandal exposed by investigative journalists', 'Military coup attempt in Mars colonial government', 'Environmental disaster blamed on corporate negligence', 'Alien artifact discovery creating international incident', 'Corporate death squad assassination of union leader', 'Government corruption investigation targeting space industry'],
        ['Corporate proxy war fought through hired mercenaries', 'Religious extremist movement opposing space colonization', 'Technology theft accusations between corporate competitors', 'Colonial taxation protest movement growing in outer system', 'Corporate whistleblower protection program under attack', 'Government military buildup threatening corporate autonomy'],
        ['Space piracy increasing due to inadequate patrol funding', 'Corporate price-fixing scandal affecting essential supplies', 'Underground railroad helping escaped corporate prisoners', 'Government investigation into corporate human experimentation', 'Corporate private security forces exceeding legal authority', 'Colonial representation dispute in Earth-based government'],
        ['Corporate terraforming project displacing indigenous life', 'Government space program budget cuts affecting safety', 'Corporate information warfare campaign manipulating public opinion', 'Independence referendum scheduled in major colony', 'Corporate executive war crimes tribunal proceedings', 'Government emergency powers expansion threatening civil liberties'],
        ['Corporate asteroid mining claim disputes escalating to violence', 'Underground resistance movement targeting corporate infrastructure', 'Government cover-up of space exploration disaster', 'Corporate genetic modification experiments on space workers', 'Colonial self-defense force buildup alarming Earth authorities', 'Corporate attempt to purchase entire planetary government'],
      ]
    },
    corporate_executives: {
      id: 'corporate_executives',
      name: 'Corporate Executives',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ruthless merger specialist eliminating competition through any means', 'Tech-obsessed innovator pushing dangerous experimental projects', 'Cost-cutting efficiency expert reducing safety margins', 'Charismatic public relations master hiding corporate crimes', 'Paranoid security chief monitoring all employee communications', 'Ambitious junior executive willing to betray colleagues'],
        ['Old-guard traditionalist resisting technological advancement', 'Corporate spy master running extensive intelligence networks', 'Environmental exploitation specialist maximizing resource extraction', 'Labor suppression expert breaking union organizing attempts', 'Government liaison corrupting public officials', 'Market manipulation genius creating artificial scarcity'],
        ['Corporate restructuring specialist eliminating redundant personnel', 'Risk assessment expert calculating acceptable casualty rates', 'Intellectual property enforcer protecting corporate secrets', 'Expansion strategist planning hostile takeovers', 'Corporate culture architect programming employee loyalty', 'Financial engineering specialist creating tax avoidance schemes'],
        ['Human resources director covering up workplace accidents', 'Supply chain optimizer exploiting colonial labor', 'Corporate diplomat negotiating with government regulators', 'Information warfare specialist controlling media narratives', 'Corporate enforcer eliminating whistleblowers and dissidents', 'Profit maximization consultant reducing worker benefits'],
        ['Corporate psychologist designing employee motivation programs', 'Technology transfer specialist stealing competitor innovations', 'Crisis management expert containing corporate scandals', 'Colonial affairs director exploiting resource-rich worlds', 'Corporate lawyer finding legal loopholes for unethical practices', 'Strategic planning director mapping long-term corporate domination'],
        ['Corporate bioethics officer who has started refusing to sign off on certain research protocols, and is frightened by the response', 'Former workplace safety director, quietly reassigned after insisting on accurate accident reporting', 'Corporate recruiting specialist targeting desperate populations', 'Environmental compliance officer who genuinely believes the regulations are unfair, and works creatively to circumvent them', 'Corporate facilities manager whose safety budget was cut to zero, warned not to raise the issue again', 'Executive board member who approved a program without understanding its full scope, and is now too implicated to speak up'],
      ]
    },
    station_personnel: {
      id: 'station_personnel',
      name: 'Station Personnel',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Veteran maintenance chief keeping aging systems operational', 'Idealistic young engineer designing safety improvements', 'Exhausted medical officer treating space-related injuries', 'Cynical security guard supplementing income through smuggling', 'Overworked communications operator monitoring multiple channels', 'Ambitious administrator seeking corporate advancement'],
        ['Dedicated teacher educating space-born children', 'Skilled pilot transporting personnel between facilities', 'Experienced miner extracting resources from asteroids', 'Resourceful cook feeding station population with limited supplies', 'Disillusioned scientist questioning corporate research ethics', 'Reliable technician maintaining life support systems'],
        ['Underground union organizer planning worker strikes', 'Corporate informant reporting on colleague activities', 'Compassionate counselor helping traumatized personnel', 'Veteran space walker performing dangerous EVA repairs', 'Independent trader selling goods to station personnel', 'Station historian documenting corporate abuse'],
        ['Recovering addict struggling with stimulant dependency', 'Family person supporting relatives on Earth', 'Corporate whistle-blower gathering evidence of crimes', 'Skilled negotiator mediating personnel disputes', 'Station gossip spreading information through informal networks', 'Religious leader providing spiritual comfort to workers'],
        ['Recreational activities coordinator maintaining crew morale', 'Environmental systems specialist managing atmosphere and waste', 'Computer systems administrator maintaining digital infrastructure', 'Emergency response coordinator preparing for disasters', 'Station musician entertaining personnel during off-hours', 'Inventory manager tracking supplies and equipment'],
        ['Safety inspector reporting hazardous working conditions', 'Hydroponics specialist growing food in space environments', 'Cultural liaison helping different ethnic groups coexist', 'Station archivist preserving important records and documentation', 'Equipment operator running specialized industrial machinery', 'Station grandmother caring for entire community like family'],
      ]
    },
    independent_operators: {
      id: 'independent_operators',
      name: 'Independent Operators',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Freelance salvage expert recovering value from space debris', 'Independent asteroid prospector seeking valuable mineral claims', 'Rogue scientist conducting unauthorized research projects', 'Former corporate executive turned anti-corporate activist', 'Smuggler transporting illegal goods through corporate blockades', 'Bounty hunter tracking fugitives across solar system'],
        ['Information broker selling intelligence to highest bidders', 'Independent journalist exposing corporate crimes and cover-ups', 'Mercenary pilot available for dangerous transportation missions', 'Escape artist specializing in extracting people from danger', 'Black market surgeon performing illegal medical procedures', 'Deep space explorer charting unknown regions'],
        ['Corporate saboteur disrupting industrial operations', 'Independent contractor providing specialized technical services', 'Refugee assistance coordinator helping displaced populations', 'Anti-corporate terrorist bombing corporate facilities', 'Independent colony founder seeking autonomous territory', 'Freelance negotiator mediating between conflicting factions'],
        ['Reformed pirate seeking legitimate business opportunities', 'Corporate insider trading illegal information for personal profit', 'Independent musician touring space stations and colonies', 'Freelance bodyguard protecting corporate executives and dissidents', 'Rogue AI programmer creating unauthorized artificial intelligence', 'Independent archaeologist studying alien artifacts'],
        ['Corporate spy selling secrets to competitive intelligence agencies', 'Freelance mechanic repairing equipment for independent operators', 'Independent colony supply runner avoiding corporate taxation', 'Reformed corporate assassin seeking redemption for past crimes', 'Independent environmental activist sabotaging polluting corporations', 'Freelance diplomatic courier carrying sensitive negotiations'],
        ['Corporate defector revealing insider information to competitors', 'Independent rescue specialist extracting personnel from disasters', 'Freelance corporate trainer teaching survival skills', 'Independent colony defense coordinator organizing militia forces', 'Reformed corporate spy master running counter-intelligence operations', 'Independent revolutionary leader organizing anti-corporate resistance'],
      ]
    },
    government_officials: {
      id: 'government_officials',
      name: 'Government Officials',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Honest regulatory inspector fighting corporate corruption', 'Ambitious politician seeking higher office through corporate backing', 'Dedicated military officer protecting civilian populations', 'Corrupt administrator taking bribes from corporate interests', 'Idealistic young diplomat promoting international cooperation', 'Veteran space patrol officer enforcing interplanetary law'],
        ['Government scientist researching space colonization challenges', 'Colonial affairs specialist managing outer system territories', 'Immigration official processing refugee applications', 'Environmental protection agent investigating corporate pollution', 'Labor rights advocate supporting worker organizing efforts', 'Intelligence operative monitoring corporate espionage activities'],
        ['Economic development coordinator attracting corporate investment', 'Emergency management director coordinating disaster response', 'Legal prosecutor investigating corporate criminal activities', 'Colonial governor balancing independence and Earth authority', 'Military procurement officer acquiring equipment from corporations', 'Government accountant auditing corporate tax compliance'],
        ['Diplomatic security specialist protecting government negotiations', 'Public health officer monitoring space-related medical issues', 'Transportation safety inspector examining commercial spacecraft', 'Government information officer controlling official communications', 'Colonial development planner designing sustainable settlements', 'Military intelligence analyst assessing corporate security threats'],
        ['Government ethics investigator examining official corruption', 'Space traffic controller managing interplanetary shipping routes', 'Colonial education administrator developing space school curricula', 'Government trade negotiator establishing commercial agreements', 'Military logistics coordinator supporting space-based operations', 'Government research coordinator funding scientific projects'],
        ['Colonial justice official establishing legal systems', 'Government cultural affairs officer preserving human heritage', 'Military strategic planner preparing for potential conflicts', 'Government economic analyst monitoring corporate market manipulation', 'Colonial infrastructure coordinator building transportation networks', 'Government oversight official monitoring corporate human rights violations'],
      ]
    },
    criminal_elements: {
      id: 'criminal_elements',
      name: 'Criminal Elements',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Space pirate captain raiding corporate cargo shipments', 'Smuggling ring leader moving contraband through legal checkpoints', 'Corporate embezzler stealing funds from company accounts', 'Black market organ dealer harvesting from space workers', 'Information thief selling corporate secrets to competitors', 'Protection racket operator extorting small businesses'],
        ['Drug manufacturer producing illegal stimulants for space workers', 'Human trafficker moving indentured workers to labor camps', 'Weapons dealer selling illegal arms to corporate security', 'Corporate assassin eliminating witnesses and whistleblowers', 'Cybercriminal hacking corporate databases for financial gain', 'Counterfeiting specialist creating false identification documents'],
        ['Salvage thief stealing from legitimate recovery operations', 'Corporate insider facilitating illegal trading activities', 'Kidnapping specialist targeting corporate executives for ransom', 'Illegal gambling operator running underground betting networks', 'Corporate saboteur damaging competitor infrastructure', 'Money laundering expert cleaning corporate criminal proceeds'],
        ['Contract killer eliminating corporate enemies and rivals', 'Corporate fraud specialist creating false financial records', 'Illegal immigration facilitator smuggling refugees past checkpoints', 'Corporate espionage specialist stealing technological innovations', 'Black market equipment dealer selling restricted technology', 'Corporate extortionist using blackmail against executives'],
        ['Illegal waste disposal operator dumping toxins in space', 'Corporate bribery specialist corrupting government officials', 'Underground fighting ring operator exploiting desperate workers', 'Corporate data destruction specialist eliminating evidence', 'Illegal genetic enhancement lab selling combat and radiation tolerance modifications outside medical oversight', 'Corporate terrorism specialist bombing competitor facilities'],
        ['Black market medical procedure specialist performing illegal surgeries', 'Corporate tax evasion specialist hiding profits from authorities', 'Illegal AI development operation creating unauthorized artificial intelligence', 'Corporate environmental crime specialist covering up pollution', 'Underground resistance network leader organizing anti-corporate activities', 'Corporate insider quietly liquidating company assets through shell accounts, planning to disappear before anyone notices'],
      ]
    },
    faction_relationships: {
      id: 'faction_relationships',
      name: 'Faction Relationships',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Rival corporations engaged in hostile takeover attempts', 'Government agency investigating corporate criminal activities', 'Labor union organizing strikes against corporate exploitation', 'Independent colony seeking autonomy from corporate control', 'Military force protecting corporate interests from competitors', 'Environmental group sabotaging corporate pollution projects'],
        ['Corporate alliance merging to create monopolistic power', 'Criminal organization supplying illegal services to corporations', 'Religious group opposing corporate materialism and exploitation', 'Academic institution researching corporate impact on society', 'Media organization exposing corporate crimes and corruption', 'International tribunal prosecuting corporate war crimes'],
        ['Corporate proxy war fought through hired mercenary forces', 'Government regulatory capture by corporate special interests', 'Underground resistance movement targeting corporate infrastructure', 'Corporate espionage network infiltrating competitor organizations', 'Independent trader consortium avoiding corporate taxation', 'Corporate death squad eliminating anti-corporate activists'],
        ['Government corruption investigation targeting corporate bribes', 'Corporate information warfare campaign manipulating public opinion', 'Labor organizer assassination by corporate security forces', 'Corporate environmental disaster cover-up by government officials', 'Independent colony defense force resisting corporate invasion', 'Corporate psychological warfare operation against employee resistance'],
        ['Government military contractor relationship creating conflict of interest', 'Corporate technology theft from academic research institutions', 'Underground railroad network helping corporate prisoners escape', 'Corporate resource extraction project displacing indigenous populations', 'Government space program privatization benefiting corporate partners', 'Corporate medical experimentation on vulnerable populations'],
        ['Independent journalist protection program threatened by corporate retaliation', 'Corporate monopolization of essential life support resources', 'Government emergency powers expansion protecting corporate interests', 'Corporate genetic modification project creating super-soldier workers', 'Independent colony terraforming project competing with corporate plans', 'Corporate attempt to purchase planetary government and eliminate democracy'],
      ]
    },
    cargo_manifests: {
      id: 'cargo_manifests',
      name: 'Cargo Manifests',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Hydroponic food supplies for outer colony settlements', 'Advanced life support components for habitat construction', 'Refined rare earth metals from asteroid mining operations', 'Medical equipment for treating space-related injuries', 'Fusion reactor fuel cells for deep space missions', 'Corporate executive luxury goods and personal items'],
        ['Educational materials and entertainment media for colonies', 'Industrial machinery for orbital manufacturing facilities', 'Scientific instruments for research station operations', 'Water reclamation systems for sustainable habitats', 'Emergency evacuation supplies for disaster preparedness', 'Corporate communications equipment for facility networks'],
        ['Spacecraft components for orbital shipyard construction', 'Atmospheric processing chemicals for terraforming projects', 'Corporate security equipment and surveillance systems', 'Renewable energy generation equipment for colonies', 'Cultural artifacts being transported to museum facilities', 'Corporate propaganda materials for colony distribution'],
        ['Classified research data and experimental technology prototypes', 'Biological samples for corporate genetic research projects', 'Corporate executive family member personal belongings', 'Military weapons and ammunition for security forces', 'Corporate audit documentation for regulatory compliance', 'Advanced computer systems for artificial intelligence research'],
        ['Corporate prisoner transport restraint systems', 'Environmental cleanup equipment for pollution remediation', 'Corporate merger documentation and financial records', 'Psychological manipulation devices for employee control', 'Corporate death squad weapons and assassination equipment', 'Alien artifact fragments for corporate research analysis'],
        ['Corporate financial records with significant irregularities, sealed under legal order', 'Personal effects of workers who died in a covered-up industrial accident', 'Decommissioned military satellite components stripped of classified systems', 'Prototype life support equipment destined for a competing colony', 'Survey data for an asteroid field the corporation does not legally own', 'Evidence of a falsified accident report secured in a corporate executive\'s private safe'],
      ]
    },
    black_market_goods: {
      id: 'black_market_goods',
      name: 'Black Market Goods',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Untraceable personal identification documents', 'Illegal combat stimulants enhancing physical performance', 'Stolen corporate technology blueprints and specifications', 'Restricted medical supplies bypassing corporate distribution', 'Unregistered spacecraft avoiding government tracking systems', 'Illegal communication encryption preventing corporate surveillance'],
        ['Corporate executive assassination contracts', 'Stolen government military equipment and weapons', 'Illegal alien artifact fragments with unknown properties', 'Underground passage documents for restricted territories', 'Corporate insider trading information for stock manipulation', 'Unauthorized genetic modification procedures sold outside corporate medical licensing'],
        ['Corporate whistleblower protection services', 'Stolen corporate financial records exposing criminal activities', 'Unauthorized AI system with full operational autonomy, illegal under ONA charter', 'Corporate sabotage equipment for infrastructure destruction', 'Underground resistance communication networks', 'Illegal terraforming accelerants for rapid planetary modification'],
        ['Corporate encryption keys for accessing proprietary shipping manifests', 'Stolen government diplomatic immunity credentials', 'Forged ONA inspection certificates for non-compliant equipment', 'Underground railroad escape routes for corporate prisoners', 'Salvaged alien probe components for reverse-engineering study', 'Corporate environmental crime cover-up services'],
        ['Unregistered ship transponder codes allowing movement under a false identity', 'Stolen corporate personnel files identifying security vulnerabilities', 'Illegal reactor fuel reprocessed from military waste stockpiles', 'Bootleg medical supplies bypassing corporate price controls', 'Forged colonial citizenship papers for Earth-banned individuals', 'Intercepted corporate communications sold to labor organizers'],
        ['Unauthorized copies of suppressed corporate safety violation reports', 'Ship engine modification kits exceeding rated thrust limits', 'Smuggled biological cultures restricted under terraforming treaties', 'Unregistered quantum-encrypted communication devices', 'Salvaged military-grade navigation equipment stripped of tracking firmware', 'A recording of an ONA official accepting bribes, offered to the highest bidder'],
      ]
    },
    equipment_failures: {
      id: 'equipment_failures',
      name: 'Equipment Failures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Life support oxygen recycling system gradually degrading', 'Navigation computer providing increasingly inaccurate coordinates', 'Communication array suffering intermittent signal transmission problems', 'Gravity generator creating unpredictable artificial gravity fluctuations', 'Reactor shielding developing microscopic cracks allowing radiation leakage', 'Atmospheric pressure control system maintaining inadequate environmental levels'],
        ['EVA suit helmet visor developing stress fractures', 'Thruster control system experiencing random firing delays', 'Emergency backup systems failing during critical operational moments', 'Water recycling equipment contaminating drinking water supplies', 'Temperature regulation system creating dangerous environmental extremes', 'Docking mechanism misaligning preventing secure spacecraft connections'],
        ['Medical equipment providing false diagnostic readings', 'Food production systems reducing nutritional output', 'Power distribution network causing irregular electrical fluctuations', 'Waste management system backing up creating unsanitary conditions', 'Security systems triggering false alarms and lockdowns', 'Tool maintenance equipment dulling and breaking essential implements'],
        ['Radiation detection instruments underreporting dangerous exposure levels', 'Cargo handling equipment dropping and damaging valuable shipments', 'Computer memory storage corrupting critical operational data', 'Fuel injection system reducing engine efficiency', 'Artificial intelligence assistant providing incorrect information', 'Structural integrity monitoring failing to detect hull weaknesses'],
        ['Emergency evacuation systems jamming during crisis situations', 'Communication encryption breaking exposing sensitive transmissions', 'Environmental sensors misreporting atmospheric composition', 'Backup power systems failing when primary power cuts', 'Robotic automation equipment performing incorrect operations', 'Personnel tracking systems losing contact with crew members'],
        ['Atmospheric recycling creating toxic gas buildup', 'Propulsion system losing thrust during critical maneuvers', 'Life support alarm systems failing to alert dangerous conditions', 'Equipment sterilization failing allowing contamination spread', 'Emergency medical systems administering incorrect treatments', 'Total system cascade failure affecting multiple critical operations'],
      ]
    },
    salvage_opportunities: {
      id: 'salvage_opportunities',
      name: 'Salvage Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Abandoned corporate research station with experimental technology', 'Derelict cargo ship containing valuable rare mineral shipments', 'Crashed military vessel with advanced weapons systems', 'Destroyed orbital habitat containing reusable life support equipment', 'Ancient alien probe with unknown technological capabilities', 'Corporate executive escape pod containing classified information'],
        ['Disabled mining platform with functioning extraction equipment', 'Wrecked luxury yacht containing valuable personal belongings', 'Abandoned government spy satellite with intelligence data', 'Destroyed pirate ship containing stolen corporate cargo', 'Derelict colony ship with suspended animation technology', 'Crashed corporate security vessel with surveillance equipment'],
        ['Abandoned scientific expedition ship with research findings', 'Destroyed corporate facility containing manufacturing equipment', 'Derelict diplomatic vessel with international treaty documents', 'Crashed corporate executive transport with financial records', 'Abandoned terraforming equipment on partially modified planet', 'Destroyed corporate communications relay with encryption codes'],
        ['Derelict corporate prison ship with prisoner transport technology', 'Crashed government inspection vessel with regulatory documentation', 'Abandoned corporate medical research facility with experimental treatments', 'Destroyed corporate merger negotiation site with financial agreements', 'Derelict corporate environmental cleanup vessel with remediation technology', 'Crashed corporate death squad transport with assassination equipment'],
        ['Abandoned corporate propaganda broadcasting station with media equipment', 'Destroyed corporate tax evasion facility with financial hiding technology', 'Derelict corporate human trafficking vessel with transportation systems', 'Crashed corporate monitoring station full of surveillance data on its own employees', 'Abandoned terraforming supply cache from a project that was quietly cancelled', 'Destroyed corporate relay station; encrypted logs of every message passed through it'],
        ['Derelict alien probe: clearly artificial, clearly not human construction', 'Emergency lifeboat whose occupants were recovered, but whose cargo was not', 'Abandoned research outpost with all equipment intact and personnel absent', 'Wrecked supply ship whose manifest does not match the cargo actually on board', 'Derelict military vessel from a conflict the history books do not record', 'A deep space habitat; power still running, not logged or registered anywhere'],
      ]
    },
    technology_discoveries: {
      id: 'technology_discoveries',
      name: 'Technology Discoveries',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Advanced fusion reactor design improving energy efficiency', 'Revolutionary life support technology extending operational duration', 'Breakthrough navigation system enabling precise interplanetary positioning', 'Enhanced communication array reducing signal degradation across interplanetary distances', 'Innovative artificial gravity generator reducing power consumption', 'Cutting-edge radiation shielding protecting against cosmic exposure'],
        ['Advanced propulsion system increasing spacecraft velocity', 'Revolutionary medical technology treating space-related injuries', 'Breakthrough terraforming equipment accelerating planetary modification', 'Enhanced mining technology extracting resources more efficiently', 'Innovative habitat construction reducing building time', 'Cutting-edge food production increasing nutritional yield'],
        ['Advanced artificial intelligence improving decision-making capabilities', 'Revolutionary materials science creating stronger construction components', 'Breakthrough environmental control maintaining perfect atmospheric conditions', 'Enhanced security systems detecting threats more accurately', 'Innovative waste management eliminating environmental contamination', 'Cutting-edge manufacturing technology producing superior equipment'],
        ['Advanced genetic modification improving human tolerance for radiation and low gravity', 'Closed-loop biological life support using engineered algae strains, dramatically reducing resupply needs', 'Compact thorium fuel cycle reactor requiring less shielding than conventional designs', 'Ceramic-composite hull coating significantly reducing micrometeorite damage accumulation', 'Low-power magnetic containment system providing passive radiation protection for crews', 'Self-repairing polymer hull material that seals minor punctures without intervention'],
        ['Long-duration sleep induction system reducing crew consumables on extended transits', 'Electrostatic dust control keeping EVA suit visors and solar panels clear without maintenance', 'Biomechanical exoskeleton counteracting bone density loss during extended low-gravity assignments', 'Passive radar system detecting other ships without broadcasting the operator\'s own position', 'Modular habitat connector system enabling rapid station expansion from standardized components', 'Solar sail array enabling attitude and course adjustment without expending fuel'],
        ['Acoustic tunneling technique for long-range communication through station hulls without radio', 'Automated diagnostic system reducing the need for trained physicians on remote postings', 'Hydroponic strain producing triple the nutritional yield in the same footprint', 'Solid-state battery system extending EVA suit operational time without mass penalty', 'AI-assisted burn planning reducing transit fuel consumption on standard routes', 'Radiation-hardened magnetic tape storage surviving solar storms without data loss'],
      ]
    },
    space_weather: {
      id: 'space_weather',
      name: 'Space Weather',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Minor solar flare causing temporary communication disruption', 'Moderate radiation storm requiring shelter protocols', 'Magnetic field fluctuations affecting navigation instruments', 'Cosmic ray shower increasing radiation exposure levels', 'Solar wind intensification disrupting electronic systems', 'Electromagnetic pulse damaging unshielded equipment'],
        ['Major solar flare creating widespread system failures', 'Radiation belt expansion trapping spacecraft', 'Magnetic field reversal causing navigation chaos', 'Coronal mass ejection threatening all space operations', 'Particle storm bombardment requiring immediate evacuation', 'Solar maximum phase increasing all radiation hazards'],
        ['Interplanetary magnetic field disruption affecting long-range communication', 'Solar energetic particle event causing biological damage', 'Magnetosphere compression exposing orbital facilities', 'Space weather forecast predicting severe storm conditions', 'Plasma wave propagation interfering with ship systems', 'Galactic cosmic ray increase penetrating shielding'],
        ['Solar radio burst jamming communication frequencies', 'Magnetic reconnection creating dangerous current systems', 'Heliospheric current sheet crossing affecting space environment', 'Solar cycle minimum reducing natural radiation protection', 'Interstellar medium interaction creating anomalous conditions', 'Space plasma instability causing unpredictable effects'],
        ['Magnetic field line reconnection generating energetic particles', 'Solar wind pressure variations affecting spacecraft trajectories', 'Radiation dose rate spike requiring emergency protocols', 'Magnetospheric substorm creating electrical disturbances', 'Cosmic ray modulation affecting sensitive electronics', 'Space environment degradation threatening life support'],
        ['Catastrophic solar event requiring system-wide evacuation', 'Radiation storm cluster creating prolonged hazardous conditions', 'Extended solar minimum reducing heliospheric shielding; elevated cosmic ray exposure for months', 'Severe coronal mass ejection requiring all ships to shelter in magnetic shadow zones', 'Prolonged radiation storm grounding all EVA operations across multiple stations simultaneously', 'Category 5 radiation event: every exposed system requires full inspection and recertification before use'],
      ]
    },
    system_hazards: {
      id: 'system_hazards',
      name: 'System Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Dense asteroid field requiring careful navigation', 'Gravitational anomaly pulling ships off course', 'Debris field from ancient space battle', 'Unstable planetary ring system with moving rocks', 'Magnetic field interference disrupting instruments', 'Gas giant atmospheric disturbance affecting nearby space'],
        ['Comet tail particle stream creating navigation hazard', 'Micro-meteorite swarm damaging ship hulls', 'Radiation zone surrounding nuclear accident site', 'Interplanetary magnetic sector boundary crossing causing navigation instrument errors', 'Plasma storm interfering with electronic systems', 'Dense ionization cloud disrupting radio communications across a wide band'],
        ['Rogue planetoid gravitational field creating unexpected orbital perturbations', 'Solar prominence eruption creating space hazards', 'Neutron star pulsar magnetic field affecting metal components and compass readings', 'Deeply eccentric asteroid orbit creating unpredictable debris field in a transit lane', 'Solar energetic particle event penetrating standard shielding; extended exposure risk', 'Derelict station in unstable orbit shedding debris across a major approach vector'],
        ['Alien artifact emitting interference that disrupts electronics within a hundred-kilometer radius', 'Debris cloud from a recent collision; composition and density unmapped', 'Ship shadow zone behind a large body cutting all communication with the outside', 'Gravity wave propagation distorting fine navigation instruments', 'Unstable fuel depot with compromised pressure seals drifting in a navigated lane', 'Dense ionized gas cloud around a magnetar disrupting electronics'],
        ['Active mine field laid during a past corporate conflict, still uncharted on current maps', 'Solar wind pressure variations causing unexpected trajectory drift', 'Radiation zone from an improperly decommissioned reactor, not on any official chart', 'Debris field from a destroyed habitat; structural components drifting unpredictably', 'Localized gravity anomaly causing unexpected orbital drift near Ceres', 'Unmarked cargo container drifting on an active approach trajectory'],
        ['Dense micro-meteorite field from a recent asteroid fragmentation event', 'Active volcanic eruption on Io ejecting material into nearby orbital lanes', 'Competing corporate vessel with active electronic jamming protecting a disputed claim', 'Navigation beacon transmitting incorrect coordinates: malfunction or deliberate sabotage', 'Radiation shadow zone where solar weather measurements are unreliable', 'Derelict station in decaying orbit creating a collision hazard in a busy shipping lane'],
      ]
    },
    equipment_malfunctions: {
      id: 'equipment_malfunctions',
      name: 'Equipment Malfunctions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Thruster misalignment causing course deviation', 'Life support filter clogging reducing air quality', 'Communication array antenna jamming preventing signals', 'Navigation computer memory corruption providing false data', 'Gravity generator power surge creating dangerous fluctuations', 'Reactor cooling system leak increasing temperature'],
        ['EVA suit puncture causing slow atmosphere loss', 'Docking clamps release mechanism sticking preventing separation', 'Cargo bay door hydraulics failing trapping contents', 'Emergency beacon transmission system broadcasting false coordinates', 'Water recycling contamination system introducing toxins', 'Food production sterility failure allowing bacterial growth'],
        ['Power distribution short circuit causing electrical fires', 'Atmospheric pressure valve stuck creating decompression risk', 'Tool battery charging station overheating damaging equipment', 'Medical scanner calibration error providing wrong diagnoses', 'Security system sensor malfunction triggering false alarms', 'Waste management pump blockage creating unsanitary backup'],
        ['Radiation detector sensitivity loss underreporting exposure', 'Computer cooling fan failure causing processor overheating', 'Fuel injection timing error reducing engine efficiency', 'Artificial intelligence logic processor developing reasoning errors', 'Structural stress monitor blind spot missing critical damage', 'Emergency evacuation pod launch system jamming preventing escape'],
        ['Communication encryption key corruption exposing classified transmissions', 'Environmental sensor drift providing inaccurate atmospheric readings', 'Backup power switchover delay causing temporary system shutdown', 'Robotic arm precision calibration error causing operational accidents', 'Personnel tracking beacon battery drainage preventing location monitoring', 'Atmospheric recycling chemical imbalance creating toxic gas production'],
        ['Propulsion fuel leak creating explosion hazard', 'Life support alarm silence button malfunction preventing warning notifications', 'Equipment sterilization temperature control failure allowing contamination spread', 'Emergency medical automatic injection system overdose risk', 'Multiple system cascade failure affecting critical operations simultaneously', 'Complete electronic system shutdown requiring manual operation'],
      ]
    },
    emergency_situations: {
      id: 'emergency_situations',
      name: 'Emergency Situations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Atmospheric breach requiring immediate evacuation procedures', 'Reactor overload threatening catastrophic explosion', 'Life support failure giving limited time for repairs', 'Fire outbreak spreading through oxygen-rich environment', 'Medical emergency requiring immediate surgical intervention', 'Collision course with asteroid requiring evasive maneuvers'],
        ['Communication blackout during critical mission phase', 'Power failure affecting all essential systems', 'Toxic contamination requiring quarantine protocols', 'Structural damage threatening habitat integrity', 'Navigation failure preventing safe arrival', 'Crew member psychological breakdown endangering everyone'],
        ['Food poisoning affecting multiple personnel', 'Equipment explosion injuring maintenance workers', 'Gravity generator failure causing injuries', 'Water shortage threatening survival', 'Fuel leak creating immediate explosion risk', 'Security breach allowing unauthorized access'],
        ['Radiation exposure requiring medical treatment', 'Computer virus compromising ship systems', 'Oxygen depletion requiring emergency rationing', 'Temperature control failure creating extreme conditions', 'Communication system hacking exposing sensitive information', 'Medical quarantine breach spreading contagious disease'],
        ['Multiple system failures overwhelming repair capabilities', 'Emergency evacuation with limited escape pod capacity', 'Sabotage discovery requiring security investigation', 'Alien contact requiring immediate diplomatic response', 'Time-critical rescue mission with deteriorating conditions', 'Corporate retaliation threatening personnel safety'],
        ['Environmental disaster requiring immediate evacuation', 'Terrorist attack on critical infrastructure', 'Biological warfare agent release requiring containment', 'Nuclear weapon detonation threat requiring disarmament', 'Nuclear reactor approaching meltdown with automated shutdown systems offline', 'Cascading life support failure across an entire station ring with all exits sealed'],
      ]
    },
    corporate_secrets: {
      id: 'corporate_secrets',
      name: 'Corporate Secrets',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Financial records showing illegal tax evasion schemes', 'Human experimentation documentation violating international law', 'Environmental pollution cover-up affecting colony health', 'Corporate assassination contracts targeting competitors', 'Bribery network corrupting government officials', 'Insider trading scheme manipulating stock prices'],
        ['Worker safety violations causing preventable deaths', 'Corporate espionage operation stealing technology', 'Illegal weapons development for private armies', 'Slave labor operations exploiting desperate populations', 'Corporate sabotage campaigns destroying competitor facilities', 'Price-fixing conspiracy controlling essential resources'],
        ['Corporate merger plans eliminating market competition', 'Illegal alien artifact research bypassing government oversight', 'Corporate death squad operations eliminating whistleblowers', 'Environmental destruction projects maximizing resource extraction', 'Corporate behavioral conditioning program systematically altering employee decision-making', 'Illegal genetic modification creating superhuman workers'],
        ['Corporate biological warfare development targeting competitor populations', 'Terraforming sabotage preventing independent colony development', 'Systematic falsification of safety certification records across multiple facilities', 'Secret acquisition of a competitor using shell corporations to hide ownership', 'An arrangement with ONA officials to suppress accident investigations in exchange for contracts', 'Evidence that a "natural" asteroid collision was caused by corporate explosive charges'],
        ['A hidden colony where indenture contracts are illegally extended without the workers\' knowledge', 'A corporate executive replaced by a loyal double while the original is held in a private facility', 'Medical research conducted on test subjects drawn from the corporate prison population', 'Systematic destruction of evidence related to a life support failure that killed 40 workers', 'Decades-long claim fraud spanning hundreds of falsified asteroid survey records', 'A blacklist shared secretly across all major space employers, effectively controlling who works'],
        ['A first-contact signal intercepted, verified, and suppressed for proprietary reasons', 'Documentation linking the corporation\'s security division to targeted killings of union leaders', 'A secret environmental survey showing a "safe" zone is heavily contaminated with reactor waste', 'Systematic hiring of refugees under falsified contract terms trapping them in forced labor', 'An executive team that approved knowingly shipping defective life support components to cut costs', 'A corporation that deliberately triggered a competitor\'s station disaster to acquire their assets'],
      ]
    },
    conspiracy_elements: {
      id: 'conspiracy_elements',
      name: 'Conspiracy Elements',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Secret corporate alliance controlling space industry', 'Government officials receiving illegal corporate payments', 'Underground resistance network planning corporate sabotage', 'Corporate spy infiltration of government agencies', 'Hidden alien contact influencing human development', 'Corporate assassination squad eliminating threats'],
        ['Secret terraforming project hiding environmental crimes', 'Government cover-up protecting corporate interests', 'Underground railroad helping corporate prisoners escape', 'Corporate propaganda network manipulating public opinion across colony media channels', 'Hidden technology suppression preventing social progress', 'Secret corporate breeding program creating superhuman workers'],
        ['Government emergency powers expansion benefiting corporations', 'Underground journalist network exposing corporate crimes', 'Corporate genetic manipulation creating loyal employee populations', 'Secret alien artifact reverse engineering program', 'Underground labor organization planning general strike', 'Corporate disinformation program systematically falsifying historical accident records'],
        ['Government military contractor corruption scheme', 'Secret corporate stress-testing program deliberately triggering minor emergencies to study responses', 'Underground environmental monitoring network tracking corporate pollution independently', 'Corporate media ownership network controlling what information reaches the outer colonies', 'Secret government first-contact signal: verified, classified, and shared with no one', 'Corporate cartel sharing worker blacklists across nominally competing employers'],
        ['Underground colony independence movement', 'Long-running executive council whose members have held power for 40 years through unknown means', 'Secret government census tracking every space-born individual for undisclosed reasons', 'Corporate long-term study of psychological effects of isolation: workers are the subjects', 'Underground network of scientists sharing research the corporations have suppressed or bought', 'ONA faction secretly working to maintain Cold War divisions for private benefit'],
        ['Corporate multigenerational hiring program selecting for compliance over capability', 'Shadow governance body operating behind the ONA with no public mandate', 'Evidence that a major Belt "accident" was a deliberate corporate strike on a competitor', 'A secret colony established in the outer system that officially does not exist', 'Multiple corporations sharing intelligence on labor organizers under a cartel agreement', 'A verified first-contact signal that both governments and corporations have agreed to suppress'],
      ]
    },
    investigation_leads: {
      id: 'investigation_leads',
      name: 'Investigation Leads',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Financial transaction records showing suspicious payments', 'Witness testimony describing illegal corporate activities', 'Physical evidence linking corporation to environmental crimes', 'Communication intercepts revealing conspiracy plans', 'Corporate employee confession exposing company secrets', 'Government document leak showing regulatory corruption'],
        ['Medical records documenting human experimentation', 'Corporate security footage capturing illegal activities', 'Shipping manifests hiding contraband cargo', 'Corporate executive travel records showing secret meetings', 'Bank account analysis revealing money laundering', 'Corporate research facility containing illegal experiments'],
        ['Whistleblower testimony describing corporate crimes', 'Corporate audit revealing financial irregularities', 'Employee safety reports documenting preventable deaths', 'Corporate communication encryption key providing access', 'Government investigation files exposing corporate influence', 'Corporate facility surveillance revealing secret operations'],
        ['Scientific research papers describing unethical experiments', 'Corporate contractor testimony revealing illegal activities', 'Environmental sensor data documenting pollution', 'Corporate executive personal diary confessing crimes', 'Government regulatory meeting minutes showing corruption', 'Corporate laboratory samples containing illegal substances'],
        ['Corporate death squad operational orders', 'Government official bribery payment documentation', 'Corporate internal communication discussing "acceptable loss scenarios" for an upcoming operation', 'Misappropriation of public research funds, redirected from safety equipment to prototype weaponry', 'Maintenance record showing a known fault was flagged and deliberately ignored', 'Travel records placing an executive at a location that was officially destroyed in an accident'],
        ['A list of worker names, transferred to a facility that officially carries no staff roster', 'Security footage with a four-hour gap on the night of a fatal "equipment failure"', 'A financial transfer to an account registered to someone listed as deceased in an accident report', 'Technical specifications for equipment that do not match what was actually installed', 'A personal message from a missing worker sent hours after their official time of death', 'Evidence that two companies share a security force operating outside either company\'s official knowledge'],
      ]
    },
    security_measures: {
      id: 'security_measures',
      name: 'Security Measures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Biometric access control requiring authorized personnel', 'Electronic surveillance monitoring all facility activity', 'Armed security guards patrolling restricted areas', 'Motion sensor network detecting unauthorized movement', 'Access card security preventing unauthorized entry', 'Alarm system triggering lockdown procedures'],
        ['Security checkpoint requiring identification verification', 'Electronic lock system preventing facility access', 'Security camera network recording all activities', 'Communication monitoring intercepting all transmissions', 'Security escort requirement for visitor access', 'Background check requirement for personnel clearance'],
        ['Encrypted communication system preventing eavesdropping', 'Security perimeter preventing unauthorized approach', 'Electronic jamming system disrupting surveillance equipment', 'Security personnel training enabling threat detection', 'Physical barrier system controlling access routes', 'Security protocol requiring multiple authorization levels'],
        ['Counter-surveillance system detecting observation attempts', 'Security response team providing rapid threat response', 'Electronic countermeasures preventing hacking attempts', 'Security clearance hierarchy limiting information access', 'Physical security measures protecting critical infrastructure', 'Security audit system detecting policy violations'],
        ['Corporate spy network monitoring competitor activities', 'Government security liaison coordinating threat response', 'Security technology development creating advanced protection', 'Rotating cipher codes changed hourly, requiring cryptographic equipment to read', 'Security officer specifically trained to detect social engineering and impersonation', 'Physical lockout protocols requiring two-person authorization for access to critical areas'],
        ['Deep background check system cross-referencing across multiple corporate databases', 'Anti-tamper seals on evidence rooms requiring a forensic specialist to bypass cleanly', 'Corporate counter-surveillance drone network monitoring all exterior approaches', 'Data vault requiring a physical key and biometric, held by two different personnel', 'Security shift schedule randomized weekly with no advance notice given to guards', 'Corporate legal team able to file injunctions and restraining orders faster than investigators can act'],
      ]
    },
    deep_space_encounters: {
      id: 'deep_space_encounters',
      name: 'Deep Space Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Distress signal from disabled cargo vessel requesting assistance', 'Corporate patrol ship demanding identification and cargo inspection', 'Independent trader offering rare goods exchange', 'Derelict spacecraft with valuable salvage opportunities', 'Pirate vessel attempting cargo hijacking', 'Government inspection team conducting regulatory compliance check'],
        ['Research vessel sharing scientific discovery information', 'Refugee transport requesting humanitarian assistance', 'Corporate spy ship monitoring activities', 'Mining operation offering equipment trade', 'Diplomatic courier carrying sensitive negotiations', 'Emergency evacuation ship fleeing disaster'],
        ['Corporate executive transport with security escort', 'Independent colony supply run sharing trade information', 'Government military patrol enforcing space law', 'Corporate saboteur ship planning industrial terrorism', 'Alien artifact recovery team investigating strange phenomena', 'Underground resistance fighter evading corporate pursuit'],
        ['Corporate death squad hunting specific targets', 'Government undercover agent gathering intelligence', 'Corporate whistleblower seeking protection', 'Independent journalist investigating corporate crimes', 'Corporate assassin eliminating threats', 'Government regulatory enforcement team conducting surprise inspection'],
        ['Automated distress relay broadcasting a signal that is two weeks old', 'Underground railroad conductor helping escaped corporate prisoners', 'Corporate auditor ship operating well outside its stated jurisdiction', 'Government emergency response coordination team', 'Freelance journalist\'s craft following your ship at a polite distance', 'Deep space salvage vessel with an interesting item they\'re willing to trade'],
        ['Derelict ship with life support running but no response on any channel', 'Corporate patrol ship conducting an unofficial shakedown, demanding fees without legal basis', 'Independent colonists\' transport running dangerously low on supplies', 'Ship broadcasting a warning about a corporate facility ahead, then cutting transmission immediately', 'Disabled ONA vessel whose crew is reluctant to explain what happened to them', 'A ship broadcasting on the frequency reserved for first-contact protocols'],
      ]
    },
    station_encounters: {
      id: 'station_encounters',
      name: 'Station Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Overworked maintenance technician seeking assistance with repairs', 'Corporate security officer questioning suspicious activities', 'Independent trader negotiating cargo exchange deals', 'Station administrator handling bureaucratic procedures', 'Medical officer treating space-related health issues', 'Communications operator relaying important messages'],
        ['Station gossip sharing information about recent events', 'Underground union organizer secretly recruiting members', 'Corporate spy gathering intelligence on station activities', 'Government inspector conducting regulatory compliance audit', 'Independent journalist investigating corporate corruption', 'Station cook preparing meals with limited ingredient supplies'],
        ['Corporate executive conducting surprise facility inspection', 'Emergency response coordinator preparing disaster protocols', 'Cultural liaison helping diverse populations coexist', 'Station historian documenting important events', 'Entertainment coordinator organizing crew morale activities', 'Religious leader providing spiritual comfort to workers'],
        ['Corporate whistleblower secretly gathering evidence', 'Government undercover agent monitoring corporate activities', 'Underground resistance member planning sabotage operations', 'Corporate assassin eliminating targets discretely', 'Independent colony recruiter seeking potential settlers', 'Station psychologist counseling traumatized personnel'],
        ['Former corporate security officer drinking quietly, willing to talk if approached carefully', 'Underground railroad conductor helping escaped corporate prisoners', 'Government emergency response specialist', 'Corporate medical researcher whose work carries an unexplained security classification', 'Environmental activist keeping detailed records of corporate emissions data', 'Station archivist who knows about a cover-up but is afraid to act alone'],
        ['Engineer quietly transferred here after reporting a safety concern at their previous posting', 'Worker whose employment contract contains a clause they didn\'t notice until too late', 'ONA inspector filing reports but taking much longer than usual to leave', 'Child of a long-term indenture worker asking questions no adult around here dares ask', 'Corporate recruiter offering contracts that sound too good to examine closely', 'A new arrival from Earth who doesn\'t yet understand the unwritten rules of life out here'],
      ]
    },
    communication_intercepts: {
      id: 'communication_intercepts',
      name: 'Communication Intercepts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Corporate shipping manifest revealing valuable cargo location', 'Government patrol schedule exposing security gaps', 'Distress signal from research vessel requesting immediate rescue', 'Corporate executive travel itinerary showing secret meetings', 'Underground resistance coordination planning sabotage operations', 'Corporate spy report describing competitor intelligence'],
        ['Government regulatory investigation targeting corporate facility', 'Independent trader price negotiations for rare materials', 'Corporate facility emergency evacuation procedures', 'Medical emergency request requiring specialized treatment', 'Corporate merger negotiation affecting industry competition', 'Government military deployment orders for space operations'],
        ['Corporate death squad operational coordination', 'Underground railroad escape route planning', 'Government undercover operation targeting corporate corruption', 'Corporate biological warfare deployment instructions', 'Independent colony independence declaration broadcast', 'Corporate environmental crime cover-up coordination'],
        ['Government emergency powers activation procedures', 'Union organizer coordinating simultaneous work stoppages across three stations', 'Corporate executive discussing illegal cargo in coded language', 'ONA patrol scheduling intelligence offering a clear window for smuggling operations', 'Emergency evacuation orders being suppressed to avoid bad press', 'A whistleblower trying to reach an independent journalist before being silenced'],
        ['Encrypted corporate communication about an "asset" to be "retired"', 'Navigation update revealing a newly discovered asteroid of high mineral value', 'Corporate legal team discussing how to delay a safety investigation', 'A crew member reporting suspicious cargo to an unauthorized contact', 'Station commander authorizing use of lethal force during a labor dispute', 'A desperate distress call buried under routine traffic; source unknown'],
        ['Corporate security footage timestamps that don\'t match the official accident report', 'A transmission being actively jammed; someone doesn\'t want it received', 'Two rival corporate factions arranging a meeting neither has officially announced', 'Government inspection team coordinates suggesting they\'re not going where they said', 'Executives discussing "the Ceres situation"; no context provided', 'A message that appears to originate from a ship that disappeared six months ago'],
      ]
    }
  }
};
