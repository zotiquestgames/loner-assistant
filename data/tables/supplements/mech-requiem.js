/**
 * Mech Requiem Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'mech-requiem-adventure',
    name: 'Mech Requiem Adventure Tables',
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
        ['Mech Pilot', 'Field Medic', 'Rebel Spy', 'War Correspondent', 'Drone Operator', 'Political Envoy'],
        ['Combat Engineer', 'Smuggler', 'Corporate Agent', 'Propaganda Officer', 'Scavenger', 'Mercenary Leader'],
        ['Black Market Dealer', 'Survivalist', 'Intelligence Analyst', 'Diplomat', 'Cyber Hacker', 'Resistance Fighter'],
        ['Research Scientist', 'Urban Explorer', 'Guerrilla Fighter', 'Logistics Coordinator', 'Bounty Hunter', 'Environmental Activist'],
        ['AI Specialist', 'Mech Technician', 'Espionage Operative', 'Weapons Developer', 'Negotiator', 'Security Officer'],
        ['Bioengineer', 'Historian', 'Ethical Hacker', 'Peacekeeper Force Member', 'Sniper', 'Refugee Leader'],
      ]
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Urban Warfare', 'Emergency First Aid', 'Stealth Operations', 'High-Stakes Negotiation', 'Electronic Warfare', 'Sniper Precision'],
        ['Mech Repair', 'Black Market Networking', 'Psychological Warfare', 'Explosives Handling', 'Advanced Piloting', 'Cyber Defense'],
        ['Terrain Scouting', 'Biochemical Survival', 'Cryptographic Coding', 'Aerial Recon', 'Underwater Combat', 'Hostage Negotiation'],
        ['Propaganda Crafting', 'Smuggling Routes', 'Tech Salvaging', 'Arms Trading', 'Drone Synchronization', 'Crowd Control'],
        ['Resource Allocation', 'Advanced Hacking', 'Interrogation Techniques', 'Structural Engineering', 'Guerrilla Tactics', 'Psychological Profiling'],
        ['Environmental Reclamation', 'Historical Knowledge', 'Deep Cover Operations', 'Crisis Management', 'Precision Engineering', 'Advanced Meditech'],
      ]
    },
    frailties: {
      id: 'frailties',
      name: 'Frailties',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Paranoia', 'PTSD', 'Greed', 'Fear of Heights', 'Technophobia', 'Impulsiveness'],
        ['Chronic Pain', 'Old War Injury', 'Addictive Tendencies', 'Overcautious', 'Debt to a Crime Lord', 'Susceptible to Blackmail'],
        ['Trust Issues', 'Obsession with Revenge', 'Claustrophobia', 'Haunted by the Past', 'Overly Idealistic', 'Heat Intolerance'],
        ['Radiation Sickness', 'Prone to Illness', 'Ethical Dilemmas', 'Perfectionism', 'Insomnia', 'Allergy to Synthetic Materials'],
        ['Limited Social Skills', 'Family Obligations', 'High-Value Target', 'Poor People Skills', 'Vengeful', 'Compromised Security Clearance'],
        ['Vulnerable Loved Ones', 'Illegal Background', 'Suspected Traitor', 'Notorious Past', 'Burnout', 'Phobia of AI'],
      ]
    },
    gear: {
      id: 'gear',
      name: 'Gear',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Enhanced Combat Suit', 'Field Surgery Kit', 'Stealth Gear', 'Satellite Phone', 'Advanced Hacking Kit', 'Sniper Rifle'],
        ['EMP Grenades', 'Illegal Mods', 'Personal Drone', 'Armored Vest', 'Signal Jammer', 'Night Vision Goggles'],
        ['Portable Mech Repair Kit', 'Black Market Passcodes', 'Chemical Gas Mask', 'Explosive Charges', 'Counterintelligence Devices', 'Reinforced Exoskeleton'],
        ['High-Powered Binoculars', 'Smuggler\'s Cache', 'Environmental Biosuit', 'Subdermal Armor', 'Drone Control Unit', 'Tactical Shield'],
        ['Encryption Devices', 'Custom Weaponry', 'Emergency Beacon', 'Energy Shield Generator', 'Undercover ID', 'Long-Range Comms Device'],
        ['Resource Scanner', 'Antique Sidearm', 'Press Credentials', 'Biohazard Suit', 'Remote Access Tools', 'Advanced Surveillance Equipment'],
      ]
    },
    male_names: {
      id: 'male_names',
      name: 'Male Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Aiden', 'Blake', 'Connor', 'Dylan', 'Ethan', 'Felix'],
        ['Gavin', 'Hugo', 'Isaac', 'Jasper', 'Kyle', 'Logan'],
        ['Mason', 'Nolan', 'Oscar', 'Ryan', 'Shane', 'Trent'],
        ['Victor', 'Wyatt', 'Zane', 'Alex', 'Brett', 'Carter'],
        ['Devon', 'Finn', 'Grant', 'Heath', 'Jonas', 'Lance'],
        ['Mark', 'Neal', 'Owen', 'Reid', 'Seth', 'Theo'],
      ]
    },
    female_names: {
      id: 'female_names',
      name: 'Female Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Ava', 'Bella', 'Chloe', 'Daisy', 'Ella', 'Fiona'],
        ['Grace', 'Hazel', 'Iris', 'Jade', 'Kara', 'Lily'],
        ['Mia', 'Nora', 'Ruby', 'Sara', 'Tess', 'Zoe'],
        ['Lila', 'Nia', 'Quinn', 'Paige', 'Rose', 'Skye'],
        ['Claire', 'Emma', 'Faith', 'Hope', 'Ivy', 'June'],
        ['Kate', 'Leah', 'Maya', 'Nina', 'Olive', 'Piper'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Adams', 'Blake', 'Carter', 'Davis', 'Evans', 'Foster'],
        ['Grant', 'Harris', 'Jenkins', 'Keller', 'Lewis', 'Morgan'],
        ['Nelson', 'Parker', 'Quinn', 'Rogers', 'Sanders', 'Taylor'],
        ['Vaughn', 'Walker', 'Young', 'Bennett', 'Collins', 'Foster'],
        ['Green', 'Hall', 'Mason', 'Powell', 'Turner', 'Watson'],
        ['Brooks', 'Cooper', 'Dixon', 'Fisher', 'Grant', 'Hughes'],
      ]
    },
    nicknames: {
      id: 'nicknames',
      name: 'Nicknames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ace', 'Blade', 'Buzz', 'Dash', 'Hawk', 'Jinx'],
        ['Maverick', 'Tank', 'Viper', 'Wolf', 'Ghost', 'Nitro'],
        ['Flash', 'Rocket', 'Shadow', 'Storm', 'Blaze', 'Spike'],
        ['Bolt', 'Colt', 'Dagger', 'Falcon', 'Grit', 'Phantom'],
        ['Rook', 'Ranger', 'Scout', 'Stryker', 'Talon', 'Trigger'],
        ['Wraith', 'Zephyr', 'Arrow', 'Echo', 'Rebel', 'Swift'],
      ]
    },
    frames: {
      id: 'frames',
      name: 'Frames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Assault Vanguard', 'Recon Sentinel', 'Urban Pacifier', 'Heavy Demolisher', 'Tactical Infiltrator', 'Rapid Raider'],
        ['Stealth Hunter', 'Siege Breaker', 'Defense Guardian', 'Combat Engineer', 'Aerial Dominator', 'Amphibious Invader'],
        ['Arctic Explorer', 'Disaster Responder', 'Jungle Striker', 'Mountain Climber', 'Urban Rescuer', 'Subterranean Driller'],
        ['Hazardous Material Handler', 'Medical Support Unit', 'Supply Transporter', 'Electronic Warfare Specialist', 'Sniper Elite', 'Close Quarters Combatant'],
        ['Artillery Support', 'Anti-Aircraft Enforcer', 'Search and Rescue Operative', 'Environmental Recon', 'Fire Suppression Specialist', 'Orbital Drop Shock Trooper'],
        ['Riot Control Officer', 'Long-Range Scout', 'Cyber Defense Platform', 'Mobile Command Center', 'Underwater Saboteur', 'Space Operations Leader'],
      ]
    },
    systems: {
      id: 'systems',
      name: 'Systems',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Stealth Navigation', 'Precision Targeting', 'Rapid Deployment', 'Impact Shock Absorbers', 'Heavy Lift Capability', 'Advanced Optics'],
        ['Terrain Adaptation', 'High-Speed Maneuvering', 'Deep Sea Navigation', 'Heat Dissipation Systems', 'Energy Shielding', 'EMP Hardening'],
        ['Radar Jamming', 'Sonar Detection', 'Low-Light Vision', 'Magnetic Field Manipulation', 'Vertical Takeoff and Landing', 'Cryo-Stabilization'],
        ['Radiation Shielding', 'Infrared Tracking', 'Gravimetric Sensors', 'Hyper-Accurate Positioning', 'Drone Coordination', 'Hazard Detection'],
        ['Anti-Hacking Defenses', 'Kinetic Energy Recovery', 'Solar Energy Conversion', 'High-Altitude Operation', 'Long-Duration Life Support', 'Atmospheric Re-Entry Capable'],
        ['Quantum Computation', 'Force Field Projection', 'Nano-Repair Systems', 'Adaptive Camouflage', 'Biohazard Containment', 'Pulse-Detonation Propulsion'],
      ]
    },
    vulnerabilities: {
      id: 'vulnerabilities',
      name: 'Vulnerabilities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Overheats Quickly', 'Loud and Easily Detected', 'Slow Reactor Startup', 'Vulnerable to EMP Attacks', 'Poor Performance in Cold Climates', 'Limited Ammunition Capacity'],
        ['Requires Frequent Maintenance', 'Weak Underbelly', 'Susceptible to Cyber Attacks', 'Limited Visibility', 'Unshielded Sensor Arrays', 'Prone to Hydraulic Failure'],
        ['Fuel Inefficiency', 'Difficult to Repair', 'Heavy and Slow', 'Complicated Controls', 'High Radar Signature', 'Fragile Antenna'],
        ['Light Armor', 'Unstable in High Winds', 'Limited Operational Range', 'Poor Handling at High Speeds', 'Inefficient in Urban Terrain', 'Exposed Cockpit'],
        ['Dependent on Rare Fuel Source', 'High Electrical Draw', 'Prone to Overloading Circuits', 'Rigid Movement Mechanisms', 'Suboptimal in Water', 'Faulty Cooling Systems'],
        ['Delicate Propulsion Systems', 'Inadequate Sealing Against Contaminants', 'Vulnerable to Sonic Weapons', 'Weak Point at Joint Connections', 'Sensitive to Magnetic Fields', 'Low Tolerance to Radiation'],
      ]
    },
    armaments: {
      id: 'armaments',
      name: 'Armaments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Dual Rail Cannons', 'EMP Pulse Generators', 'Tear Gas Launchers', 'Cluster Missile Array', 'High-Energy Laser System', 'Chain Gun'],
        ['Plasma Rifle', 'Flamethrower', 'Sonic Blaster', 'Guided Torpedoes', 'Napalm Spreaders', 'Anti-Tank Missiles'],
        ['Railgun', 'Energy Sword', 'Particle Beam', 'Shockwave Bomb', 'Arc Thrower', 'Sticky Mines'],
        ['Incendiary Bombs', 'Cryogenic Spray', 'Acid Projector', 'Smart Bullets', 'Sniper Cannon', 'Airburst Rockets'],
        ['Graviton Pulser', 'Disruptor Beam', 'Gauss Rifle', 'Harpoon Gun', 'Net Launcher', 'Stasis Field Projector'],
        ['Quantum Disruptor', 'Molecular Cutter', 'Fusion Lance', 'Lightning Arc', 'Kinetic Burst Cannon', 'Drone Swarm Deployer'],
      ]
    },
    utilities: {
      id: 'utilities',
      name: 'Utilities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Reinforced Armor Plating', '360-Degree Surveillance Drones', 'Amphibious Conversion Kit', 'Auto-Repair Nanites', 'Invisibility Cloak', 'Advanced Ejection System'],
        ['Integrated Medical Station', 'Environmental Adaptation Kit', 'Signature Masking', 'Orbital Communication Relay', 'Multi-Terrain Treads', 'Emergency Shield Booster'],
        ['Olfactory Stealth Module', 'High-Gain Antennas', 'Satellite Uplink', 'Emergency Power Cells', 'Seismic Footsteps', 'Jetpack'],
        ['Retractable Blade', 'Auxiliary Power Unit', 'Cargo Storage Compartment', 'Deployable Barrier', 'Drone Recharging Station', 'Electromagnetic Pulse Shield'],
        ['Holographic Decoy Projector', 'Long-Range Scanner', 'Underwater Propulsion Module', 'AI Co-Pilot', 'Radiation Filtration System', 'Thermal Insulation'],
        ['Bio-Medical Scanner', 'Magnetic Grappling System', 'Chemical Sniffer', 'Weather Control Device', 'Emergency Beacon', 'Optical Cloak'],
      ]
    },
    table_1_military_and_political_intrigue: {
      id: 'table_1_military_and_political_intrigue',
      name: 'Table 1: Military and Political Intrigue',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Coup Attempt - Uncover a plot to overthrow a local leader dependent on your faction’s support.', 'Spy Network - Dismantle a spy network leaking critical mech tech to rivals.', 'Prisoner Exchange - Negotiate or sabotage a high-stakes prisoner exchange between factions.', 'Ambassador Assassination - Prevent the assassination of a key ambassador at a peace summit.', 'Treaty Violation - Investigate and expose a violation of international warfare treaties.', 'Border Dispute - Resolve a volatile dispute over resource-rich territory newly discovered.'],
        ['AI Uprising - Suppress or ally with an AI uprising seeking autonomy from human control.', 'Secret Weapons Test - Uncover the truth behind a secret weapons test in a neutral zone.', 'Diplomatic Marriage - Secure or disrupt a marriage meant to unite two warring factions.', 'Insurgent Uprising - Aid or quell an uprising by oppressed peoples in a mech production region.', 'Election Interference - Discover who is behind the interference in a critical democratic election.', 'Terrorist Threat - Thwart a plan to use stolen mechs in a major terrorist attack.'],
        ['Peacekeeper Corruption - Investigate corruption within the international peacekeeping forces.', 'War Crimes Tribunal - Protect a witness crucial to an international war crimes tribunal.', 'Nuclear Threat - De-escalate a situation where rogue elements threaten to use nuclear weapons.', 'Corporate Espionage - Track down corporate spies stealing mech designs for a rival company.', 'Ceasefire Negotiation - Facilitate or sabotage ceasefire negotiations between hostile nations.', 'Smuggling Ring - Bust a smuggling ring dealing in illegal mech parts and forbidden technologies.'],
        ['Refugee Crisis - Manage or assist in a crisis involving refugees displaced by mech warfare.', 'Resource Hoarding - Expose a scheme by a major power to hoard critical resources during a shortage.', 'Mutiny Within Ranks - Address a mutiny within your own ranks, driven by moral or ethical disputes.', 'Bioweapon Scare - Contain a bioweapon outbreak mistakenly released during a military skirmish.', 'Information Leak - Trace a leak that has exposed sensitive operational details to enemy factions.', 'Civil War - Navigate the complexities of a civil war where mechs play a central role.'],
        ['Historical Relics - Protect or capture ancient relics that hold strategic or symbolic importance.', 'VIP Protection - Secure the safety of a VIP who holds the key to stabilizing a volatile region.', 'Mech Arena Sabotage - Investigate sabotage in a mech arena that has geopolitical implications.', 'Illegal Experiments - Uncover illegal genetic experiments on soldiers to enhance mech operation.', 'Rebellion Support - Decide whether to support a rebellion against a tyrannical ruler exploiting mech technology.', 'Satellite Hijacking - Prevent the hijacking of military satellites crucial for mech navigation.'],
        ['Undercover Mission - Go undercover in a hostile nation to gather intelligence on mech advancements.', 'Hostage Crisis - Resolve a hostage crisis involving key military engineers in a besieged compound.', 'Defector Protection - Protect a defector who possesses critical information on enemy mechs.', 'Rogue Mech Hunter - Track down and neutralize a rogue mech that has gone haywire in a civilian area.', 'Technological Cold War - Engage in covert operations to gain an edge in a technological cold war.', 'Environmental Sabotage - Investigate environmental sabotage aimed at crippling mech fuel sources.'],
      ]
    },
    table_2_exploration_and_recovery_operations: {
      id: 'table_2_exploration_and_recovery_operations',
      name: 'Table 2: Exploration and Recovery Operations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Lost City Exploration - Explore a city abandoned after a catastrophic mech battle.', 'Artifact Recovery - Recover a powerful pre-war artifact that could change the balance of power.', 'Ghost Mech - Investigate sightings of a "ghost mech" appearing in war ruins across the continent.', 'Black Box Retrieval - Retrieve the black box from a downed mech before enemy forces locate it.', 'Relic Weapon - Secure an ancient weapon that has resurfaced, now highly effective against mechs.', 'Scientific Expedition - Protect a scientific expedition studying the effects of war on local ecosystems.'],
        ['Drone Swarm - Stop a swarm of combat drones that have malfunctioned and are attacking civilians.', 'Old Battlefield - Survey an old battlefield where new, valuable resources have been discovered.', 'Time Capsule - Locate and secure a time capsule believed to contain advanced pre-war technologies.', 'Forbidden Zone - Venture into a zone forbidden due to high radiation and uncover its secrets.', 'Escapees - Track down prisoners who have escaped from a remote penal colony using jury-rigged mechs.', 'Ancient Ruins - Explore ancient ruins that are rumored to be powered by unknown technology.'],
        ['Mech Graveyard - Salvage rare parts from a mech graveyard that is said to be haunted by fallen pilots.', 'Island Base - Reestablish contact with a remote island base that has gone silent after a storm.', 'Contaminated River - Clean up a river contaminated by mech waste, saving a region\'s water supply.', 'Cryogenics Vault - Discover a hidden vault with cryogenically frozen individuals from before the war.', 'Abandoned Lab - Investigate an abandoned lab where experimental mechs were developed.', 'Weapon Disarmament - Disarm a decommissioned mech that is threatening to explode in a populated area.'],
        ['Rescue Operation - Conduct a daring rescue operation for civilians trapped in a siege.', 'Supply Convoy - Secure a vital supply convoy passing through a region known for mech pirate attacks.', 'Wreckage Analysis - Analyze wreckage to trace the source of mech parts used in illegal modifications.', 'Forgotten Colony - Help a forgotten colony that was cut off during the war and now seeks aid.', 'Underwater Recovery - Recover important data from a mech that sank in deep waters during a battle.', 'Wildlife Preservation - Assist in preserving wildlife that has adapted unusually to post-war environments.'],
        ['Energy Crisis - Resolve an energy crisis by reclaiming a power plant taken over by mech insurgents.', 'Orbital Debris - Clear orbital debris threatening space operations, remnants of a destroyed mech satellite.', 'Cyber Hack - Trace a cyber hack back to its source, a facility using illegal AI to control mech operations.', 'Militia Disbandment - Disband a militia that has been terrorizing locals with a stolen mech.', 'Desert Crossing - Guide a caravan across a mech-war-scarred desert that\'s rife with unexploded ordnances.', 'Mountain Stronghold - Break a siege on a mountain stronghold where key personnel are trapped.'],
        ['Volcanic Activity - Investigate increased volcanic activity potentially triggered by deep-earth mining mechs.', 'Frozen Tundra - Retrieve samples from a tundra where an experimental mech has altered the ecosystem.', 'Bioweapon Cleanup - Clean up a region affected by a bioweapon that was accidentally released from a mech.', 'Secret Facility - Infiltrate a secret facility rumored to be developing a new type of stealth mech.', 'Catastrophe Simulation - Participate in a high-stakes simulation of a catastrophic mech malfunction.', 'Jungle Labs - Secure hidden labs in the jungle where illegal genetic experiments on mechs are conducted.'],
      ]
    }
  }
};
