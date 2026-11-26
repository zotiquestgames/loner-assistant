/**
 * Spacer Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'spacer-adventure',
    name: 'Spacer Adventure Tables',
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
        ['Brave Explorer', 'Cunning Smuggler', 'Mercenary Bounty', 'Exiled Aristocrat', 'Retired Military', 'Enigmatic Trader'],
        ['Rogue Mechanic', 'Aspiring Diplomat', 'Ambitious Miner', 'AI Specialist', 'Drifting Nomad', 'Tech Salvager'],
        ['Idealistic Rebel', 'Mysterious Guide', 'Famed Explorer', 'Obsessed Scholar', 'Ruthless Pirate', 'Galactic Outlaw'],
        ['Visionary Engineer', 'Star Cartographer', 'Bold Diplomat', 'Secretive Agent', 'Rogue Biologist', 'Lost Noble'],
        ['War-Hardened Pilot', 'Adventurous Courier', 'Undercover Spy', 'Relic Seeker', 'War Refugee', 'Curious Xenologist'],
        ['Veteran Navigator', 'Risk-Taking Gambler', 'Devout Missionary', 'Daring Test Pilot', 'Coldhearted Mercenary', 'Fortune Hunter'],
      ]
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Expert Pilot', 'Astrogation Pro', 'Combat Marksman', 'Holo-Interpreter', 'Quick Fixer', 'Deceptive Talker'],
        ['Alien Negotiator', 'Mechanic Savant', 'Silent Infiltrator', 'Data Hacker', 'Resource Finder', 'Quick Thinker'],
        ['Hazard Planner', 'Space Survivalist', 'Star Chart Reader', 'Inventive Thinker', 'Galactic Historian', 'Strategic Planner'],
        ['Gunner Specialist', 'Relic Identifier', 'Expert Smuggler', 'Risk Assessor', 'Alien Linguist', 'Ship Modder'],
        ['Combat Strategist', 'Ship Tactician', 'Fast Diplomat', 'Stealth Operator', 'Bold Explorer', 'System Analyst'],
        ['Trade Negotiator', 'Warp Engineer', 'Crash Specialist', 'Artifact Appraiser', 'Navigation Ace', 'Weapon Designer'],
      ]
    },
    frailties: {
      id: 'frailties',
      name: 'Frailties',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Reckless', 'Haunted by Past', 'Greedy', 'Socially Awkward', 'Impulsive', 'Cynical'],
        ['Overconfident', 'Fragile Health', 'Distrustful', 'Perfectionist', 'Paranoid', 'Nostalgic'],
        ['Overambitious', 'Hot Tempered', 'Lone Wolf', 'Guilt-Ridden', 'Superstitious', 'Fearful of Failure'],
        ['Addictive Personality', 'Crippled Morality', 'Clumsy', 'Ill-Fated', 'Unfocused', 'Cowardly'],
        ['Stubborn', 'Chronically Late', 'Self-Sabotaging', 'Disorganized', 'Emotionally Distant', 'Power-Hungry'],
        ['Naïve', 'Regretful', 'Haunted by Guilt', 'Obsessive', 'Secretive', 'Vindictive'],
      ]
    },
    gear: {
      id: 'gear',
      name: 'Gear',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Plasma Cutter', 'Holo-Chart Navigator', 'Blaster Pistol', 'Smuggler\'s Hold', 'Alien Translator', 'Repair Drone'],
        ['Sensor Array Booster', 'Portable Shield Gen', 'Prototype Scanner', 'Data Decryptor', 'Stealth Field Cloak', 'Survival Pack'],
        ['Hyperspace Fuel Tank', 'Starship Toolkit', 'Ancient Artifact', 'Custom Weapon', 'Medic Kit', 'Modified Ship Thrusters'],
        ['Personal AI Assistant', 'Cargo Lift Drone', 'Hidden Compartments', 'Emergency Breather', 'Scrapper\'s Pack', 'Personal Force Shield'],
        ['Advanced Repair Unit', 'Ion Disruptor Rifle', 'Plasma Gloves', 'Holographic Disguise', 'Energy Pack', 'Starlight Binoculars'],
        ['Signal Beacon', 'Cloaking Device', 'Rare Trading Goods', 'Gravity Stabilizer', 'Jetpack', 'Multitool Wand'],
      ]
    },
    names: {
      id: 'names',
      name: 'Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Kaelis', 'Vyrra', 'Zalen', 'Astrel', 'Cylra', 'Erasyn'],
        ['Nova', 'Lirien', 'Xandros', 'Eryth', 'Solyn', 'Zethar'],
        ['Quorra', 'Myrris', 'Rylos', 'Orana', 'Synra', 'Vyrex'],
        ['Aelith', 'Kryos', 'Lynara', 'Serith', 'Elyndra', 'Xarion'],
        ['Taryn', 'Lyraen', 'Calyx', 'Norys', 'Sythra', 'Velion'],
        ['Zelra', 'Orith', 'Kaelith', 'Syrien', 'Thalix', 'Vrynn'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Starlance', 'Voidweaver', 'Nebrask', 'Skyrunner', 'Darkreach', 'Solhaven'],
        ['Zenith', 'Starforge', 'Etherial', 'Voidcaller', 'Lightborne', 'Shadowspire'],
        ['Vortex', 'Nebulark', 'Exodian', 'Astralis', 'Skyfire', 'Halcyon'],
        ['Pulsar', 'Celestyn', 'Duskwarden', 'Riftwalker', 'Sunspar', 'Tempestwave'],
        ['Eclipse', 'Galvaris', 'Aeronark', 'Cryostar', 'Duskmere', 'Shadowborne'],
        ['Aetherial', 'Skynox', 'Starbound', 'Velorn', 'Solforge', 'Deepforge'],
      ]
    },
    species: {
      id: 'species',
      name: 'Species',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Human', 'Vexarin', 'Nexari', 'Astrelian', 'Erythar', 'Aetherian'],
        ['Crythian', 'Xenovian', 'Myralis', 'Solarin', 'Galvarian', 'Syntherian'],
        ['Celestian', 'Riftkin', 'Voidborne', 'Zynthar', 'Helion', 'Aerthian'],
        ['Starlun', 'Zolarith', 'Skylith', 'Exovian', 'Arcanian', 'Lytherin'],
        ['Nebulare', 'Starborn', 'Pulsari', 'Quorath', 'Astrael', 'Velarith'],
        ['Etherkin', 'Varion', 'Thalorian', 'Tempestral', 'Krythian', 'Xenarith'],
      ]
    },
    gear_and_equipment_table: {
      id: 'gear_and_equipment_table',
      name: 'Gear and Equipment Table',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Jetpack', 'Portable Oxygen Tank', 'Terrain Mapper', 'Plasma Cutter', 'Emergency Shelter', 'Rations Pack'],
        ['Phase Blaster', 'Energy Shield', 'Portable Repair Kit', 'Holo-Chart Navigator', 'Heat Regulator', 'Multitool'],
        ['Radiation Suit', 'Signal Beacon', 'Portable Shield Gen', 'Survival Pack', 'Gravity Anchor Boots', 'Ion Disruptor Rifle'],
        ['Data Decryptor', 'Recon Drone', 'Stealth Cloak', 'Emergency Breather', 'Medical Scanner', 'Tactical HUD'],
        ['Xenotech Translator', 'Climbing Harness', 'Cryo-Pack', 'Thermal Generator', 'EMP Grenade', 'Alien Artifact Scanner'],
        ['Hoverboard', 'Shielded Storage Unit', 'Sonic Disruptor', 'Holo-Cam Recorder', 'Energy Blade', 'Atmospheric Tester'],
      ]
    },
    starhips_traits_names: {
      id: 'starhips_traits_names',
      name: 'Starhips Traits: Names',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Starlight Shadow', 'Void Whisper', 'Nebula Voyager', 'Iron Phoenix', 'Quantum Echo', 'Celestial Warden'],
        ['Midnight Horizon', 'Eternal Flame', 'Crimson Hawk', 'Lunar Dagger', 'Radiant Path', 'Spectral Tempest'],
        ['Solar Wind', 'Silent Reaver', 'Obsidian Wing', 'Horizon Chaser', 'Ether Beacon', 'Nova Seeker'],
        ['Infinite Horizon', 'Gravity Blade', 'Sapphire Star', 'Echo\'s Legacy', 'Vortex Runner', 'Nightfall Specter'],
        ['Phantom Veil', 'Azure Arrow', 'Warp Harbinger', 'Starfall Saber', 'Polaris Arc', 'Cosmic Wanderer'],
        ['Ember Sentinel', 'Ghost Barricade', 'Titan’s Reach', 'Aether Drift', 'Radiant Blade', 'Voidborn Falcon'],
      ]
    },
    modules: {
      id: 'modules',
      name: 'Modules',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Basic Thrusters', 'Advanced Sensors', 'Hyperdrive Unit', 'Shield Generator', 'Cargo Bay', 'Fuel Tank'],
        ['Repair Drone Bay', 'Mining Laser', 'Smuggler’s Hold', 'Cloaking Device', 'Advanced Shielding', 'Auto-Turret System'],
        ['Long-Range Scanner', 'Tractor Beam', 'Science Lab', 'Medical Bay', 'Escape Pods', 'Combat-Grade Hull'],
        ['Energy Efficient Reactor', 'Advanced Navigation', 'Weapon Hardpoint', 'Boarding Pod', 'EMP Blaster', 'Refrigerated Cargo Hold'],
        ['Stealth Module', 'Interceptor Drones', 'Gravity Stabilizer', 'Energy Core Upgrade', 'Advanced Life Support', 'Cryo-Chamber'],
        ['Weapons Array', 'Heavy Armor Plating', 'Atmospheric Thrusters', 'Communication Relay', 'Tactical Display System', 'Drone Launch Bay'],
      ]
    },
    starhips_traits_frailties: {
      id: 'starhips_traits_frailties',
      name: 'Starhips Traits: Frailties',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Weak Structural Integrity', 'Underpowered Reactor', 'Faulty Navigation System', 'Prone to Overheating', 'Unreliable Hyperdrive', 'Slow Maneuverability'],
        ['Excessive Fuel Consumption', 'Poor Weaponry', 'Limited Cargo Space', 'Malfunctioning Shields', 'Outdated Technology', 'Inconsistent Sensors'],
        ['Noisy Engines', 'High Maintenance Costs', 'Unstable AI', 'Fragile Hull', 'Poor Atmospheric Capability', 'Vulnerable to EMPs'],
        ['Insufficient Crew Capacity', 'Intermittent Power Loss', 'No Defensive Systems', 'Heavy and Cumbersome', 'Short Range Communication', 'Erratic Autopilot'],
        ['Frequent Engine Misfires', 'Leaky Fuel Tanks', 'Weak Heat Regulation', 'Easily Detected', 'Low Combat Efficiency', 'Uncalibrated Weapons'],
        ['Incompatible Systems', 'Difficult to Upgrade', 'Fragile Internal Systems', 'No Escape Pods', 'Susceptible to Corrosion', 'Jam-Prone Weapons'],
      ]
    },
    reputation_tags_table: {
      id: 'reputation_tags_table',
      name: 'Reputation Tags Table',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Trusted Merchant', 'Dependable Trader', 'Faction Ally', 'Blacklisted Trader', 'Dubious Contact', 'Notorious Smuggler'],
        ['Ethical Broker', 'Honest Negotiator', 'Reliable Supplier', 'Suspicious Character', 'Greedy Opportunist', 'Risk-Taking Dealer'],
        ['Popular Trader', 'Preferred Partner', 'Loyal Servant', 'Unreliable Dealer', 'Exploitative Merchant', 'Illegal Goods Expert'],
        ['Benevolent Trader', 'Generous Merchant', 'Renowned Negotiator', 'Tax Avoider', 'Questionable Ethics', 'Known Contrabandist'],
        ['System Protector', 'Economic Savior', 'Respected Trader', 'Hated by Rivals', 'Ruthless Competitor', 'Disreputable Courier'],
        ['Legendary Broker', 'Wealthy Benefactor', 'Famous Entrepreneur', 'Untrusted Supplier', 'Dangerous Risk-Taker', 'Outlawed Trader'],
      ]
    },
    stars: {
      id: 'stars',
      name: 'Stars',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Achenor', 'Zha\'Rii', 'Kephos', 'N\'Ketra', 'Velkaris', 'Xanthel'],
        ['Esharin', 'Drayek', 'Oruloth', 'Threxil', 'Ulvora', 'Krellian'],
        ['Gorrin', 'Vaskari', 'Tzaleth', 'Rionyx', 'Haldrun', 'Myrenax'],
        ['Yvorka', 'Quelari', 'Zondar', 'Aruvel', 'Serken', 'Bhaznur'],
        ['Valtor', 'Ilydris', 'Teshkar', 'Kryndor', 'Khaelos', 'Phyrrion'],
        ['Elnath', 'Obareth', 'Syrak', 'Iridion', 'Maleth', 'Corvalex'],
      ]
    },
    planets: {
      id: 'planets',
      name: 'Planets',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Talexis', 'Dreva', 'Myrr', 'Olkara', 'Cintar', 'Fyssun'],
        ['Braxis', 'Kelari', 'Vuneth', 'Ashara', 'Jornis', 'Quivira'],
        ['Xephon', 'Turava', 'Malzor', 'Entra', 'Zael', 'Ghorin'],
        ['Lethros', 'Solentha', 'Nyskar', 'Belyra', 'Vecon', 'Joraxis'],
        ['Uveth', 'Daruun', 'Impara', 'Skorix', 'Kryta', 'Zhonar'],
        ['Arkanis', 'Ylvara', 'Mezeth', 'Tilion', 'Exova', 'Dereth'],
      ]
    },
    moons_and_asteroid_clusters: {
      id: 'moons_and_asteroid_clusters',
      name: 'Moons & Asteroid Clusters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Talvet\'s Ring', 'Cryn Belt', 'Drifthollow', 'Irna\'s Eye', 'Mavak Cradle', 'The Shale Coil'],
        ['Xharn\'s Crown', 'Koro Verge', 'Hollow Ember', 'Yiln Crust', 'Zaruun Chain', 'Lintari Coil'],
        ['Frostpin', 'Albor Blight', 'Theta Rocks', 'Vulcari Rim', 'Dros Crag', 'Gelt Shard'],
        ['Bramble Halo', 'Vakhan Field', 'Krelos Rim', 'Quarric Arc', 'Xydra Cloud', 'Emberreach'],
        ['Rion’s Dust', 'Lethen Drift', 'Kassandra’s Halo', 'Iron Vane', 'Mirix Maw', 'Zenth Cluster'],
        ['Rookfall', 'Tarn Maw', 'Voidglass', 'Nelma\'s Ring', 'Flayer Crest', 'Galder Ice'],
      ]
    },
    stations_and_installations_names: {
      id: 'stations_and_installations_names',
      name: 'Stations & Installations Names',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Relay K-47', 'Velth Prime', 'Port Cyan', 'Obrex Nexus', 'Navspire Gamma', 'Juno Array'],
        ['Ardent Bastion', 'Kerrin\'s Reach', 'Boreal Station', 'Nova Vane', 'Respite Anchor', 'Outpost Yarra'],
        ['Drixel Hub', 'Haven Shard', 'Blackport', 'Citadel 9', 'Glass Halo', 'Horath Spoke'],
        ['Echelon V', 'Kora Point', 'Tangent Relay', 'Wraith Base', 'Voidcall Node', 'Pax Ascendant'],
        ['Trinary Helm', 'Delphi Outpost', 'K\'Tal Foundry', 'Skell Station', 'Beacon Arus', 'Enclave Nox'],
        ['Zenith Arc', 'Zeek\'s Coil', 'Omega Refuge', 'Tristorm Yard', 'Silent Mooring', 'Station Myndra'],
      ]
    }
  }
};
