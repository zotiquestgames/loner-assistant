/**
 * Dungeoneer Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'dungeoneer-adventure',
    name: 'Dungeoneer Adventure Tables',
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
        ['Relic Hunter', 'Lost Scout', 'Dungeon Scholar', 'Cavern Nomad', 'Trapspringer', 'Shadow Seeker'],
        ['Forsaken Knight', 'Arcane Cartographer', 'Ruin Stalker', 'Vault Breaker', 'Silent Wanderer', 'Beast Whisperer'],
        ['Wandering Scribe', 'Fallen Noble', 'Cursed Explorer', 'Exiled Scout', 'Depth Walker', 'Relic Purifier'],
        ['Stone Speaker', 'Obsidian Thief', 'Rune Carver', 'Lightbearer', 'Forgotten Hero', 'Grave Robber'],
        ['Torch Warden', 'Lorekeeper', 'Gloom Warden', 'Runebound Mage', 'Shadow Delver', 'Whispering Soul'],
        ['Ironbound Scout', 'Tomb Raider', 'Chasm Leaper', 'Map Weaver', 'Trap Disabler', 'Ancient Seeker'],
      ]
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Keen Observer', 'Quick Reflexes', 'Silent Step', 'Puzzle Solver', 'Trap Disarmer', 'Torch Handler'],
        ['Ancient Decoder', 'Path Finder', 'Stone Reader', 'Cartography', 'Beast Tracker', 'Rope Master'],
        ['Relic Identifier', 'Treasure Sniffer', 'Light Bringer', 'Shadow Blending', 'Tunnel Scout', 'Lever Finder'],
        ['Climber', 'Echo Listener', 'Map Forger', 'Mechanism Reader', 'Whisper Reader', 'Dust Survivor'],
        ['Vault Unlocker', 'Focused Delver', 'Breath Holder', 'Trap Spotter', 'Rune Decipherer', 'Quick Thinker'],
        ['Supply Tracker', 'Quiet Listener', 'Lorekeeper', 'Sturdy Climber', 'Direction Sense', 'Rune Bounder'],
      ]
    },
    frailties: {
      id: 'frailties',
      name: 'Frailties',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Weak Grip', 'Torch Dependent', 'Fear of Heights', 'Claustrophobic', 'Haunted Mind', 'Short Tempered'],
        ['Echo Phobia', 'Distracted', 'Worn Equipment', 'Slow Recovery', 'Over-Curiosity', 'Persistent Cold'],
        ['Curse-Bound', 'Superstitious', 'Obsession Driven', 'Mistrustful', 'Faint-hearted', 'Ill Omened'],
        ['Fragile Bones', 'Old Injuries', 'Weak Ankles', 'Light Sensitive', 'Paranoid', 'Stiff Muscles'],
        ['Low Stamina', 'Slow Reflexes', 'Hasty Decisions', 'No Sense of Direction', 'Overconfident', 'Deep Fear'],
        ['Unsteady Hands', 'Persistent Nightmares', 'Shaky Grip', 'Ghostly Hallucinations', 'Fear of Darkness', 'Shivering Cold'],
      ]
    },
    gear: {
      id: 'gear',
      name: 'Gear',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Torch', 'Healing Herbs', 'Silent Oil', 'Rope Bundle', 'Grappling Hook', 'Rune Compass'],
        ['Rations', 'Rusted Blade', 'Enchanted Glowstone', 'Canteen (Water Supply)', 'Lockpicks', 'Flint and Steel'],
        ['Lantern', 'Bone Carvings', 'Sturdy Boots', 'Magic Chalk', 'Mirror (Polished Metal)', 'Explorer\'s Cloak'],
        ['Warding Charms', 'Lantern with Spare Oil', 'Pitons and Hammer', 'Bandages', 'Beast Trap', 'Weighted Net'],
        ['Iron Spikes', 'Crystal Lens', 'Map Case (Empty)', 'Spellbook Fragment', 'Ancient Map Fragment', 'Chalk Sticks'],
        ['Climbing Gear', 'Flint and Steel', 'Healing Herbs', 'Rusted Blade', 'Rope Bundle', 'Silent Oil'],
      ]
    },
    female_names: {
      id: 'female_names',
      name: 'Female Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Elara', 'Miren', 'Kaela', 'Solis', 'Yvanna', 'Dorrin'],
        ['Thalia', 'Irina', 'Nerys', 'Caris', 'Sylvie', 'Enwen'],
        ['Leora', 'Vanya', 'Aris', 'Thea', 'Kaeris', 'Lorin'],
        ['Selene', 'Alara', 'Evina', 'Morwen', 'Lilith', 'Brina'],
        ['Aeris', 'Rhea', 'Valla', 'Taryn', 'Erynn', 'Nessa'],
        ['Fenna', 'Myra', 'Drina', 'Illa', 'Seris', 'Brenna'],
      ]
    },
    male_names: {
      id: 'male_names',
      name: 'Male Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Kieran', 'Alric', 'Sorin', 'Toren', 'Malrik', 'Evron'],
        ['Riven', 'Doran', 'Balen', 'Faelan', 'Corwin', 'Varek'],
        ['Erynd', 'Halric', 'Kael', 'Therin', 'Volen', 'Draven'],
        ['Morric', 'Varis', 'Talric', 'Sten', 'Brael', 'Oryn'],
        ['Rurik', 'Lorian', 'Eran', 'Varnak', 'Theros', 'Cyric'],
        ['Soren', 'Brynn', 'Valen', 'Erren', 'Oren', 'Padrik'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Duskbane', 'Hollowstep', 'Lightforge', 'Shadowveil', 'Greystone', 'Wraithfall'],
        ['Windthorn', 'Ironshade', 'Brightmore', 'Ravenmoor', 'Firebrand', 'Ashenwood'],
        ['Coldglen', 'Stonehollow', 'Ironspike', 'Moonglow', 'Daggerfall', 'Redthorn'],
        ['Grimrock', 'Nightstone', 'Windrake', 'Hollowforge', 'Wraithwood', 'Frosthelm'],
        ['Stonereach', 'Thornblade', 'Shadowcrest', 'Greythorn', 'Emberholt', 'Deepwell'],
        ['Duskhollow', 'Blackbranch', 'Hollowmere', 'Darkmoor', 'Silverhelm', 'Stormwatch'],
      ]
    },
    nicknames: {
      id: 'nicknames',
      name: 'Nicknames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Silent', 'Stonefoot', 'Shadowblade', 'Quickfang', 'Deepwalker', 'Lightbearer'],
        ['Swiftfinger', 'Bloodrune', 'Holloweye', 'Lost One', 'Darkstalker', 'Ghoststep'],
        ['Skullcarver', 'Spellbound', 'Runechaser', 'Ashborn', 'Veilwalker', 'Tombwhisper'],
        ['Relicbane', 'Lightstep', 'Wraithcall', 'Mistseeker', 'Daggerhand', 'Whisperfang'],
        ['Gravefinder', 'Vault Rat', 'Shroud', 'Frostburn', 'Ironjaw', 'Lorewarden'],
        ['Tombrat', 'Nightcaller', 'Flicker', 'Rusteye', 'Coldshadow', 'Lifebringer'],
      ]
    },
    stress_tags: {
      id: 'stress_tags',
      name: 'Stress Tags',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Frayed Nerves', 'Trembling Hands', 'Racing Heart', 'Shallow Breathing', 'Echoing Voices', 'Haunted Dreams'],
        ['Paranoid Thoughts', 'Stifled Panic', 'Shaking Limbs', 'Cold Sweat', 'Dazed Focus', 'Unsteady Balance'],
        ['Short Temper', 'Distracted Mind', 'Sudden Outburst', 'Tunnel Vision', 'Jittery Movement', 'Overwhelming Fear'],
        ['Loss of Words', 'Fatigue Fog', 'Fractured Focus', 'Reluctant Steps', 'Restless Energy', 'Heavy Breathing'],
        ['Memory Lapses', 'Claustrophobic', 'Overactive Imagination', 'Startled Reflex', 'Whispers of Doubt', 'Irrational Fear'],
        ['Dreadful Silence', 'Emotional Collapse', 'Crushing Guilt', 'Sleep Deprivation', 'Shaking Resolve', 'Panic Attack'],
      ]
    },
    fatigue_tags: {
      id: 'fatigue_tags',
      name: 'Fatigue Tags',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Heavy Limbs', 'Sore Muscles', 'Aching Back', 'Blurred Vision', 'Stiff Joints', 'Slow Reactions'],
        ['Weary Steps', 'Unsteady Hands', 'Labored Breathing', 'Numb Fingers', 'Light-Headed', 'Weak Grip'],
        ['Dull Reflexes', 'Dragging Feet', 'Fatigued Focus', 'Muscle Cramps', 'Exhausted Mind', 'Sluggish Speech'],
        ['Fading Stamina', 'Trembling Knees', 'Burning Lungs', 'Hazy Thoughts', 'Shaky Steps', 'Cold Shivers'],
        ['Nodding Off', 'Cracked Lips', 'Dry Throat', 'Uncontrolled Yawns', 'Stumbling Stride', 'Foggy Awareness'],
        ['Shallow Breaths', 'Dead Weight', 'Strained Eyes', 'Nerve Pain', 'Drained Energy', 'Overwhelmed Body'],
      ]
    }
  }
};
