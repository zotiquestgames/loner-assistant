/**
 * Celtic Fantasy Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'celtic-fantasy-adventure',
    name: 'Celtic Fantasy Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    concepts: {
      id: 'concepts',
      name: 'Concepts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Exiled Satirist', 'Court Fili', 'Wandering Ollamh', 'Blind Poet', 'Truth-Bound Lorekeeper', 'Apprentice Bard'],
        ['Landless Spearman', 'Outlawed Hunter', 'Oath-Sworn Fénnid', 'Grey-Haired Raider', 'Hound-Keeping Scout', 'Youngest of the Band'],
        ['Changeling Foundling', 'Returned Wanderer', 'Fae-Wed Widow', 'Glamoured Stranger', 'Mist-Born Orphan', 'Stolen Child'],
        ['Grove-Keeping Druid', 'Exiled Judge', 'Clan Augur', 'Hedge Healer', 'Stone-Circle Warden', 'Doubting Initiate'],
        ['Prophesied Champion', 'Fostered Hero', 'Doomed Warleader', 'Ford-Guarding Warrior', 'Ríastrad-Cursed Youth', 'Hostage Prince'],
        ['Skinless Selkie', 'Shore-Wed Wife', 'Tide-Drawn Wanderer', 'Fisher\'s Foundling', 'Seal-Blooded Sailor', 'Drowned-Kingdom Exile'],
      ]
    },
    female_names: {
      id: 'female_names',
      name: 'Female Names',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Áine', 'Bríd', 'Cáit', 'Deirdre', 'Eithne', 'Fionnuala'],
        ['Gráinne', 'Essylt', 'Maeve', 'Niamh', 'Orlaith', 'Róisín'],
        ['Sadhbh', 'Síofra', 'Sorcha', 'Aoife', 'Brighid', 'Clíodhna'],
        ['Étaín', 'Muireann', 'Rhiannon', 'Scáthach', 'Tailltiu', 'Úna'],
        ['Bébinn', 'Caoilfhionn', 'Dervla', 'Éadaoin', 'Fidelma', 'Gormflaith'],
        ['Líadan', 'Meadhbh', 'Nuala', 'Órla', 'Ríonach', 'Saraid'],
      ]
    },
    male_names: {
      id: 'male_names',
      name: 'Male Names',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Aidan', 'Brendan', 'Cian', 'Diarmuid', 'Eamon', 'Finn'],
        ['Fintan', 'Lorcan', 'Lugh', 'Mael', 'Niall', 'Oisín'],
        ['Fráech', 'Ronan', 'Setanta', 'Tadhg', 'Ultán', 'Conall'],
        ['Cormac', 'Donal', 'Fergus', 'Conan', 'Cathbad', 'Cú'],
        ['Bran', 'Ailill', 'Conchobar', 'Fiachra', 'Lóegaire', 'Muireadhach'],
        ['Naoise', 'Ríordán', 'Suibhne', 'Tighearnán', 'Aengus', 'Dáire'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Mac Aodha', 'Ó Briain', 'Mac Cárthaigh', 'Ó Dálaigh', 'Mac Eochaidh', 'Ó Fionnagáin'],
        ['Mac Gabhann', 'Ó hÉideáin', 'Mac Íomhair', 'Ó Ceallacháin', 'Mac Lochlainn', 'Ó Murchadha'],
        ['Mac Néill', 'Ó Ruairc', 'Mac Suibhne', 'Ó Tuathail', 'Mac Uiginn', 'Ó Conchobhair'],
        ['Mac Branáin', 'Ó Dónaill', 'Mac Fhearghuis', 'Ó Ceallaigh', 'Mac Diarmada', 'Ó Máille'],
        ['Mac Giolla', 'Ó Flaithbheartaigh', 'Mac Cana', 'Ó Dubhghaill', 'Mac Cathail', 'Ó Fearghail'],
        ['Mac Labhrainn', 'Ó Mórdha', 'Mac Uidhir', 'Ó Sé', 'Mac Reachtain', 'Ó Baoighill'],
      ]
    },
    nicknames: {
      id: 'nicknames',
      name: 'Nicknames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['the Bold', 'Raven-Blessed', 'the Red', 'Silver-Tongue', 'the Wanderer', 'Oath-Keeper'],
        ['the Fair', 'Storm-Born', 'the Wise', 'Iron-Hand', 'the Swift', 'Moon-Touched'],
        ['the Fierce', 'Dawn-Singer', 'the Gentle', 'Wolf-Friend', 'the Cursed', 'Star-Marked'],
        ['the Strong', 'Mist-Walker', 'the Cunning', 'Sea-Heart', 'the Brave', 'Shadow-Dancer'],
        ['the Just', 'Flame-Hair', 'the Proud', 'Stone-Breaker', 'the Silent', 'Dream-Seer'],
        ['the Kind', 'Spear-Master', 'the Dark', 'Frost-Born', 'the Loyal', 'Doom-Marked'],
      ]
    },
    creatures_and_foes: {
      id: 'creatures_and_foes',
      name: 'Creatures & Foes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Morrigan\'s Herald (War-Raven Champion)', 'Púca (Shapeshifting Trickster)', 'Banshee (Death-Crying Spirit)', 'Dullahan (Headless Horseman)', 'Fomorian Warlord (Ancient Enemy)', 'Tuatha Dé Remnant (Forgotten God)'],
        ['Corrupted Druid (Oath-Breaker)', 'Rival Champion (Seeks Glory)', 'Spectral Hound (Ghostly Beast)', 'Fae Warrior (Otherworldly Warrior)', 'Cursed Prince (Trapped in Form)', 'Enchanted Sword (Living Weapon)'],
        ['Bean Nighe (Washer at the Ford)', 'Morrigan\'s Daughter (Battle-Maiden)', 'Fomorian Drowned One (Sea-Horror)', 'Daoine Sídhe Lord (Faerie Nobility)', 'Geasa-Breaker (Oath-Cursed Mortal)', 'Dearg-Due (Blood-Drinking Revenant)'],
        ['Selkie Betrayer (Shape-Changing Deceiver)', 'Leanan Sídhe (Muse-Vampire)', 'Caoránach (Plague-Beast)', 'Madman of the Woods (Feral Prophet)', 'Silver-Tongued Bard (Spreads Lies)', 'Fachan (Twilight Horror)'],
        ['Geis-Binder (Dark Druid)', 'Clan-Slayer (Mercenary Killer)', 'Phantom Chariot (Driverless Death)', 'Raven-Woman (Doom-Herald)', 'Cursed Bloodline (Living Curse)', 'Otherworldly Mirror (Your Shadow-Self)'],
        ['Fae Hound (Supernatural Beast)', 'Drowned King (Waterlogged Tyrant)', 'Truth-Compelled Oath-Breaker (Cursed by Words)', 'Sorcerer-King (Mortal who Trafficked with Fae)', 'Siabhróg (Malevolent Sprite Swarm)', 'The Morrigan Herself (Goddess of War & Fate)'],
      ]
    },
    sacred_sites: {
      id: 'sacred_sites',
      name: 'Sacred Sites',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Stone Circle (Prophecy-Strong, Ritual-Safe)', 'Síd Mound (Fae-Inhabited, Time-Warped)', 'Sacred Well (Truth-Speaking Required, Vision-Granting)', 'Crannóg (Island Fortress, Clan-Protected)', 'Ring Fort (Ancient Stronghold, Oath-Bound)', 'Haunted Battlefield (Ghosts Walk, Valiant Shades)'],
        ['Threshold Crossroads (Liminal Magic, Multiple Worlds)', 'Druid\'s Grove (Neutral Ground, Ancient Peace)', 'Raven\'s Nest (Omen-Place, Prophetic Birds)', 'Otherworldly Shore (Mist-Wrapped, Between-Realm)', 'The Hill of Tara (King-Site, Power-Center)', 'Cursed Lands (Magic Warped, Reality Broken)'],
        ['Stone-Carved Tombs (Ancestor-Speak, Death-Magic)', 'Enchanted Forest (Time-Distorted, Beast-Ruled)', 'Waterfall Shrine (Healing-Place, Peace-Held)', 'Standing Stone (Geis-Marked, Oath-Witness)', 'Fairy Ring (Otherworldly Gateway, Trap-Possible)', 'Ruin of Old Glory (Fallen Kingdom, Ghost-Inhabited)'],
        ['Bone-Yard (Plague-Touched, Death-Soaked)', 'Mirror Lake (Reveals Truth, Drowning Risk)', 'Sacred Grove of Yews (Druid-Tended, Death-Portal)', 'Sea-Cave (Selkie-Inhabited, Tide-Bound)', 'Starlit Meadow (Fae-Reveling-Place, Dance-Dangerous)', 'Storm-Blasted Peak (God-Touched, Thunder-Speaking)'],
        ['Dun of the High King (Royal Seat, Lineage-Strong)', 'Otherworldly River (Boundary-Crossing, No-Return)', 'Hall of Heroes (Ancestral Feasting, Spectral-Crowded)', 'Cursed Causeway (Oath-Broken, Sinking Slowly)', 'The Cauldron\'s Spring (Regeneration-Source, Guarded)', 'Portal to Tír na nÓg (Youth-Land, Time-Lost)'],
        ['Whale-Bone Beach (Selkies Gather, Prophecy-Strong)', 'Obsidian Cliff (Otherworldly Material, Magic-Thin)', 'The Spiral Tomb (Ancestor-Labyrinth, Mind-Binding)', 'Mist-Shrouded Isles (Lost to Mortal Realm, Fae-Ruled)', 'Rowan-Guarded Threshold (Fae-Blocking, Iron-Sacred)', 'The Sacred Bile Tree (World-Navel, Sovereignty-Root)'],
      ]
    },
    npcs_allies_and_rivals: {
      id: 'npcs_allies_and_rivals',
      name: 'NPCs, Allies & Rivals',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A Wandering Bard (Spreads Fame or Shame)', 'A Druid Elder (Offers Counsel or Curse)', 'A Rival Champion (Seeks to Prove Superiority)', 'A Love Interest (Complicates Everything)', 'A Fae Lord or Lady (Makes Impossible Bargains)', 'A Cursed Kinfolk (Needs Breaking-Free)'],
        ['An Exiled Fianna (Knows Wild Paths)', 'A Clan Chieftain (Holds Land & Oath)', 'A Selkie in Mortal Form (Hunted, Desperate)', 'A Seer-Woman (Speaks Only Prophecy)', 'A Disgraced Druid (Cast Out by the Order)', 'A Half-Fae Bastard (Caught Between Worlds)'],
        ['A Cunning Merchant (Buys & Sells Secrets)', 'A Traitor to the Clan (Offers False Alliance)', 'A Ghost of an Ancestor (Unquiet Spirit)', 'A Shape-Shifter (Unknown True Form)', 'A Wise Woman (Herbalist, Healer)', 'A Warrior Made Mad by Battle (Ríastrad-Touched)'],
        ['A Greedy Noble (Lusts for Power)', 'A Wronged Widow (Seeks Blood-Debt)', 'A Fae-Touched Child (Innocent Danger)', 'A Raven-Keeper (Omen-Speaker)', 'A Blacksmith of Renown (Forges Fate-Weapons)', 'A Storyteller (Records Your Deeds)'],
        ['A Healer-Druid (Balances Life & Death)', 'A Bounty-Collector (Hunts the Geis-Broken)', 'A Cursed Lover (Bound by Magic)', 'A Reformed Brigand (Seeks Redemption)', 'A Drowned Sailor (Still Seeking Shore)', 'A Fae-Sworn Warrior (Serves Another Master)'],
        ['A Blind Sage (Sees Beyond Sight)', 'A Poet-Priest (Weaves Magic with Words)', 'A Clan-Oath Witness (Binds All Agreements)', 'A Woman Warrior (Scorned or Honored)', 'A Fae-Slayer (Hunts the Immortal)', 'A Reflection of Your Future Self (Prophetic Encounter)'],
      ]
    },
    quests_and_three_sorrows: {
      id: 'quests_and_three_sorrows',
      name: 'Quests & Three Sorrows',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Prophecy Foretold / Honor Earned / Fae Bargain Required', 'Geis Broken / Love Reclaimed / Dead Rise to Aid or Hinder', 'Love Forbidden / Vengeance Justified / Otherworldly Mirror Emerges', 'Betrayal Fated / Bloodline Restored / Curse Must Be Broken', 'Exile Imposed / Kingship Claimed / Portal Opens to Other Lands', 'Death Promised / Fellowship Forged / Divine Intervention Arrives'],
        ['Honor-Debt / Land Reclaimed / Time-Loop Discovered', 'Family Curse / Enemy Defeated / Transformation Forced', 'Forbidden Knowledge / Wisdom Gained / Reality Fractures', 'Sacred Oath Broken / Oath Resworn / Otherworld Balances Shift', 'Lost Artifact / Ancient Glory / Hidden Danger Revealed', 'Blood-Feud Eternal / Peace Brokered / Third Party Intervenes'],
        ['Kidnapped Kin / Rescue Attempt / Fae Demands Exchange', 'Cattle Stolen / Herd Retrieved / Magical Creature Discovered', 'Land Cursed / Curse-Breaking Journey / Sacrifice Demanded', 'Champion Challenged / Duel Accepted / Geis Conflict Emerges', 'Secret Revealed / Truth Weaponized / Silence Demanded', 'Sickness Spreading / Cure Sought / Disease Has Fae Origin'],
        ['Kingship Disputed / Right Proven / Old Power Awakens', 'Sanctuary Violated / Avenger Called / Enemy Has Geis-Protection', 'Child Prophesied / Fate Race Begins / Multiple Sides Hunt', 'Magic Stolen / Thief Hunted / Thief Has Justification', 'Portal Opened / Invasion Imminent / Hero Must Close It', 'Raven Speaks Doom / Warning Heeded / Doom Unavoidable'],
        ['Beauty Contest / Winner Takes Fate / Prize Is Curse', 'Games of Champions / Skill Proven / Loser Becomes Slave', 'Druid\'s Trial / Wisdom Sought / Test Nearly Fatal', 'Fae Seduction / Love Offered / Price Is Seven Years', 'Underwater City / Drowned Kingdom / Surface Rules Don\'t Apply', 'Star Falls / Omen Manifest / Multiple Interpret Differently'],
        ['Rival\'s Child / Protection Sworn / Enemy Becomes Ally', 'Impossible Task / Three Tasks Given / Each Requires Death', 'Monster Hunted / Beast Slain / Slayer Becomes Hunted', 'Old Debt Called / Repayment Required / Cost Higher Than Expected', 'Bard\'s Insult / Challenge Unavoidable / Victory Brings Curse', 'The Morrigan Calls / War Begins / Hero Is Chosen Champion'],
      ]
    },
    cattle_raids_and_heists: {
      id: 'cattle_raids_and_heists',
      name: 'Cattle Raids & Heists',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Sacred Cattle / Rival Chieftain / Fae Guardian Blocks Way', 'Lost Artifact / Druid Council / Time-Limit: Otherworld Closes at Dawn', 'Kidnapped Person / Fae Lord / Rescue Requires Bargain', 'Ancient Secret / Curse-Keeper / Breaking Curse Costs a Life', 'Kingship Right / Sorcerer / Must Face Prophesied Champion', 'Revenge-Debt / Blood-Enemy Clan / Own Geis Complicates Quest'],
        ['Cauldron of Plenty / Tuatha Dé Remnant / Cauldron Demands Sacrifice', 'Druidic Robes / Oath-Breaker / Wearer Becomes Bound', 'Love-Token / Scorned Fae / Fae Will Never Release It', 'Healing Herbs / Plague Zone / Sickness Spreads to Raider', 'Champion\'s Chariot / Ghostly Owner / Owner Returns for It', 'Ogham Prophecy-Stave / Seer-Woman / Reading It Changes Fate'],
        ['Bride-Theft / Groom\'s Clan / Bride Doesn\'t Want Rescue', 'Sacred Sword / Warrior\'s Ghost / Sword Will Only Serve Its Master', 'Fae Child / Fae-Stolen Mortal / Fae King Hunts Taker', 'Crown of a Lost King / Usurper / Crown Attracts Assassins', 'Stolen Geis-Token / Bound Enemy / Destroying It Kills Target', 'Drowned Treasure / Sea-Lair / Selkies Guard the Hoard'],
        ['Harp of Transformation / Bard-Thief / Harp Controls Player, Not Vice Versa', 'Oath-Witness Stone / Rival Chieftain / Moving It Breaks All Oaths Made There', 'Cursed Jewel / Jewelry-Lover / Jewel Brings Doom to Bearer', 'Skull of a Dead Seer / Grave-Druid / Speaking to It Summons Spirits', 'Fae Wine / Otherworldly Tavern / Drinker Loses Mortal Time', 'Sacred Cauldron Shard / Temple Guardian / Clan War Erupts'],
        ['Sealed Pact / Law-Keeper / Breaking Seal Triggers Disaster', 'Hostage Release / Enemy Camp / Hostage Is Actually Enemy Spy', 'Healing Spring / Guarded by Beast / Beast Is Cursed Hero', 'Star-Metal Ore / Mountain Peak / Peak Belongs to Giant', 'Ogham Love-Message / Forbidden Romance / Both Parties Geis-Bound', 'Otherworld Map / Lost Navigator / Map Shows Lands That Don\'t Exist'],
        ['Slave Freedom / Slaveholder\'s Fort / Freed Slaves Are Possessed', 'Remedy for Curse / Witch-Healer / Healer Demands Horrible Price', 'Kin\'s Murderer / Cold Trail / Killer Was Wearing Geis to Stay Hidden', 'Traitor\'s Head / Enemy / Head Still Lives, Speaks Prophecies', 'Stolen Years / Fae Thief / Reclaiming Years Requires Aging Instantly', 'The Sovereignty Herself / The Land / Land Chooses or Rejects Raider'],
      ]
    },
    omens_and_signs: {
      id: 'omens_and_signs',
      name: 'Omens & Signs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Raven Flies West (War Comes)', 'Blood in the Water (Betrayal Brewing)', 'White Stag Appears (Quest Beginning)', 'Wolf Howls at Noon (Someone Dies Today)', 'Fish Leap Upstream (Change Reversing)', 'Stars Go Dark (Goddess Turns Away)'],
        ['Raven Feeds from Your Hand (Luck Turning)', 'Dream of Drowning (Transformation Near)', 'Blackbird Sings at Dusk (Love or Loss)', 'Horse Stumbles (Journey Cursed)', 'Crow Calls Three Times (Someone Watches)', 'Antler-Crowned Stag (Ancient Power Walks)'],
        ['Well Water Runs Red (Bloodshed Coming)', 'Stone Circle Glows Faintly (Fae Active)', 'Fog Rolls Inland (Otherworld Leaking)', 'Wren Lands on Your Shoulder (Protection Given)', 'Seabird Far from Water (Chaos Follows)', 'All Dogs Howl at Once (Death-Messenger Near)'],
        ['Silence in the Forest (Predator Present)', 'Two-Headed Snake (Prophecy Twisting)', 'Butterfly Lands on Weapon (War Blessed or Cursed)', 'Salmon Leaps to Your Feet (Wisdom Offered)', 'Crows Gather in Thousands (Morrigan Watches)', 'Owl Calls in Daylight (Hidden Knowledge)'],
        ['Your Shadow Separates (You\'re Fae-Marked)', 'Stone Weeps Water (Land Grieves)', 'Grass Grows Where You Walk (Life or Death)', 'Your Breath Freezes Though Warm (Otherworld Claims You)', 'Flowers Bloom Then Wilt Instantly (Prophecy Manifesting)', 'All Weapons Rust at Once (War-God\'s Anger)'],
        ['You Taste Metal (Curse Approaching)', 'Your Reflection Smiles While You Don\'t (Double Emerging)', 'Music From No Source (Fae Entertainment or Warning)', 'Child Speaks in Ancient Tongue (Oracle Possessing)', 'Your Name Is Forgotten By All (Geis-Breaking)', 'The Sun Turns Blood-Red (Morrigan Descends)'],
      ]
    },
    random_encounters: {
      id: 'random_encounters',
      name: 'Random Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Travelers on Road (Merchants, Refugees, or Spies?)', 'Abandoned Camp (Who Fled? Why? What Did They Leave?)', 'Roadside Shrine (Desecrated or Maintained?)', 'Wounded Animal (Innocent or Bait?)', 'Funeral Procession (Join or Avoid? Sides Taking?)', 'Brigands Demanding Toll (Can Be Negotiated or Fought)'],
        ['Lost Child (Looking for Parents or Fae-Stolen?)', 'Druid Blessing or Cursing (Depends on Deeds)', 'Bard Seeking Audience (Wants Your Story or Selling Tales?)', 'Hermit\'s Hut (Wise Guide or Trap?)', 'Monster Tracks (Fresh or Old? Injured or Hunting?)', 'Festival in Progress (Celebration or Sacrifice?)'],
        ['Bridge Toll-Keeper (Fair or Corrupt?)', 'Sick Village (Curse, Plague, or Famine?)', 'Fae Revelers Visible (Ignore or Join? Don\'t Eat Their Food)', 'Rival Chieftain\'s Warband (Allies or Enemies?)', 'Selkie Sunning on Rock (Steal Seal-Skin or Help Her?)', 'Ghost Asking Questions (Seeking Revenge or Redemption?)'],
        ['Tournament Beginning (Champion Status on the Line)', 'Crone Selling Herbs (Real Medicine or Curse?)', 'Harp Music From Nowhere (Irresistible Lure)', 'Fae Warrior Riding Past (Acknowledges or Ignores You?)', 'Rival Druids Debating (Competing Philosophies)', 'Prisoner in Cage (Guilty or Innocent? Whom Does Rescuer Offend?)'],
        ['Love-Struck Noble (Wants to Marry a Stranger)', 'Clan Gathering (Oath-Taking or War-Planning?)', 'Shipwreck Survivors (Grateful or Cursed?)', 'Otherworldly Musician (Entrancing All Who Hear)', 'Gravedigger Burying Nothing (What\'s the Secret?)', 'Champion Practicing Feats Alone (Mad or Prophesying?)'],
        ['Thief Being Executed (Justice or Murder?)', 'Fae Woman Asking Directions (Why Is She Lost? Trap?)', 'Drowned Bodies Rising Upright (Zombies or Message?)', 'Bard Singing Someone\'s Death (The Victim Listens Helplessly)', 'Elf-Shot Archer (Visible Only to Some)', 'The Morrigan Manifesting (War Comes, Cannot Be Stopped)'],
      ]
    },
    complications_and_betrayals: {
      id: 'complications_and_betrayals',
      name: 'Complications & Betrayals',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ally Is Actually Geis-Bound (Forced to Betray You)', 'Promised Reward Is Cursed (Victory Becomes Disaster)', 'Innocent Bystander Dies (Because of Your Actions)', 'Enemy Escapes Due to Your Mercy (Hunts You Later)', 'Druid\'s Blessing Carries Hidden Geis (You\'re Now Bound)', 'Fae Bargain\'s Cost Manifests (Worse Than Expected)'],
        ['Loved One Revealed as Enemy Spy (Heart vs. Honor)', 'Clan Turns Against You (For Reasons Beyond Your Control)', 'Your Geis Triggers at Worst Moment (Forces Impossible Choice)', 'Magic Backfires (Curse Rebounds on You)', 'Trusted NPC Dies (Fulfilling Prophecy)', 'Your Victory Prophesied to Cause Greater Doom (You Still Won)'],
        ['Child Is Actually Ancient Fae (What You Protected Was Predator)', 'Mentor Was Grooming You for Sacrifice (Now Demands Payment)', 'Sacred Site Becomes Corrupted (Your Fault or Someone Else\'s?)', 'Otherworldly Contract Came Due (Original Agreement Forgotten)', 'Rival Gains Your Weakness From Defeated Foe', 'Enemy Uses Your Own Tactics Against You'],
        ['Prophecy Misinterpreted (You Caused What You Fought)', 'Companion Revealed as Geis-Breaker (Hunted by All Sides)', 'Victory Curse Activates (Winning Carries Doom)', 'Fae Oath Holder Demands Repayment (Different Currency Than Thought)', 'Your Reputation Makes You Famous Enemy (Cannot Travel Freely)', 'Innocent Prisoner Was Actually Dangerous (Released Threat)'],
        ['Curse Spreads to Innocent (Chain Reaction Starts)', 'Bard Sings Your Death (Prophecy Begins Manifesting)', 'Druid\'s Neutrality Breaks (Now Openly Opposes You)', 'Love Interest Chooses Your Enemy (Heart Over Hope)', 'Your Geis Conflicts With New Obligation (Can\'t Honor Both)', 'Otherworld Lender Comes Collecting (Compound Interest Insane)'],
        ['Child of Slain Enemy Hunts You (Understandably)', 'Fae-Touched Item Slowly Consuming You (Symbiosis or Parasitism?)', 'Ally Becomes Fae-Enslaved (Rescue Requires Breaking Geis)', 'Sacred Oath Binds You to Enemy (Must Aid Them)', 'Your Fame Attracts Wrong Kind of Attention (Dark Powers Notice)', 'Morrigan Demands Sacrifice (She\'s Owed Your Victory)'],
      ]
    },
    treasures_and_artifacts: {
      id: 'treasures_and_artifacts',
      name: 'Treasures & Artifacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Cauldron of Plenty (Feeds Unlimited, Demands Sacrifice)', 'Cloak of Mist (Hides Wearer, Fades With Lies)', 'Spear of Lugh (Never Misses, Never Forgets Wielder)', 'Harp of Transformation (Changes Listener\'s Form)', 'Torc of Kings (Grants Authority, Demands Kingship)', 'Dagger of Truth (Wounds Liars, Blesses Truth-Speakers)'],
        ['Cloak of Feathers (Flight-Granting, Raven-Connected)', 'Chalice of Prophecy (Shows True Futures, Requires Blood)', 'Staves of Ogham (Knowledge Personified, Rearrange Themselves)', 'Sword of the Gods (Slays Immortals, Burns Mortal Flesh)', 'Ring of Binding (Enforces Oaths, Enslaves Oath-Breakers)', 'Amulet of Years (Grants Decades, Steals Them Back)'],
        ['Raven Familiar (Omen-Bringer, Demands Hunted Meat)', 'Otherworld Wine (Single Drink Grants Visions or Madness)', 'Map of Hidden Roads (Shows Paths to Any Place, Cost Unknown)', 'Helm of Hearing (Listens to Thoughts, Reveals All Secrets)', 'Horn of Summoning (Calls the Dead, They Must Obey)', 'Rope of Binding (Holds Anything, Unties Only for One)'],
        ['Fae Coin (Grants Wishes, Debt Comes Due)', 'Crystal Eye (Sees All Hidden Things, Burns Viewer)', 'Stone of Truth (Prevents Lying in Its Presence)', 'Tunic of Champions (Grants Advantage in Single Combat, Attracts Rivals)', 'Bridle of Control (Masters Beast, Enslaves Rider)', 'Arrows of Elf-Shot (Slay Silently, Invisible to Mortals)'],
        ['Crown of the Land (Grants Kingship, Land Must Obey)', 'Bell of Summoning (Calls Fae, They Cannot Deny)', 'Token of Passage (Allows Safe Travel, Expires Unexpectedly)', 'Vial of Drowned Stars (Liquid Starlight, Infinite Power)', 'Sling of Heroes (Never Misses, Chooses Target Itself)', 'Serpent of Silver (Living Metal, Drinks Life)'],
        ['Mantle of Sorrow (Grants Empathy, Drowns in Others\' Pain)', 'Stick of the Druid (Blooms Flowers or Thorns on Command)', 'Mirror of Souls (Shows True Self, Breaks With Corruption)', 'Chariot of Stars (Travels Between Worlds, Wheels Turn Backwards)', 'Hazel Rod of the Seer (Shows Near Future, Cost Is Memories)', 'The Cauldron of Rebirth (Resurrects Dead, Demands Living Sacrifice)'],
      ]
    },
    festivals_and_seasonal_events: {
      id: 'festivals_and_seasonal_events',
      name: 'Festivals & Seasonal Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Samhain Opening (Veil Thins, Dead Walk)', 'Ancestor Festival (Spirits Feast, Mortals Must Participate)', 'Samhain Wassail (Drinking Game with Supernatural Stakes)', 'Samhain Bonfire (Purification or Sacrifice?)', 'Samhain Masquerade (Fae and Mortal Dance, Hidden Identities)', 'Samhain Prophecy Night (Seers Speak True, All Listen)'],
        ['Imbolc Stirring (First Green Growth, Magic Awakens)', 'Imbolc Divination (Year-Long Readings Begin)', 'Imbolc Sacred Assembly (Druids Make Decree)', 'Imbolc Birthing (Animals Bear Young, New Begins)', 'Imbolc Ice-Breaking (River Thaws, Symbolism Clear)', 'Imbolc Challenge Games (First Competition of Year)'],
        ['Beltane Fire Festival (Cattle Blessed, Heroes Tested)', 'Beltane Cattle Raiding (Traditional Season Begins)', 'Beltane Love-Making (Bonds Formed, Chaos Erupts)', 'Beltane Sword-Fire (Warriors Dance With Blades)', 'Beltane Portal-Opening (Fae Manifest Visibly)', 'Beltane Handfasting (Marriages Contracted, Some Broken)'],
        ['Lughnasadh First Harvest (Grain Cut, Lugh Killed Symbolically)', 'Lughnasadh Games (Athletic Contests for Glory)', 'Lughnasadh Trading Fair (Merchants, Thieves, Assassins Gather)', 'Lughnasadh Wrestling Match (Champions Crown Themselves)', 'Lughnasadh Storytelling (Bards Tell Sagas, Some Are Prophecies)', 'Lughnasadh Feast (Abundance Before Autumn Decline)'],
        ['Between-Season Liminal Time (No Rules Apply)', 'Season Boundary Crossing (Fae Negotiate Passage)', 'New Season Blessing (Druid Blesses Endeavors)', 'Harvest Moon Rising (Moonlight Works Magic)', 'Sacred Day Proclaimed (All Must Cease Fighting)', 'Festival Court (King Holds Special Judgment)'],
        ['Eclipse Day (Sun or Moon Disappears, Wrongness Felt)', 'Comet Passing (New Star-Omen Arrives)', 'Plague-Moon (Sickness Spreads With Tide)', 'Blessing-Tide (All Magic Enhanced, All Blessings Strengthen)', 'Festival of the Dead (Living Honor Fallen Ancestors)', 'Seasonal Turn-Total (Old Season Dies Completely, New Born)'],
      ]
    },
    clan_settlements: {
      id: 'clan_settlements',
      name: 'Clan Settlements',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ring-Fort on a Hill (Watchful, Crowded With Cattle)', 'Crannóg in a Reed Lake (Reached Only by Boat)', 'Cliff-Top Dún (Wind-Scoured, Sea on Three Sides)', 'Smith\'s Village (Forge-Smoke, Iron Everywhere)', 'Cattle Farmstead (Rich Herds, Few Spears)', 'Burned Homestead (Raided Last Night)'],
        ['Druid\'s Enclosure (Oak Posts, Silent Students)', 'Hostel of the Crossroads (Must Feed All Comers)', 'Fishing Hamlet (Selkie Tales, Empty Boats)', 'Mountain Booley (Summer Pasture, Lonely Herders)', 'Royal Dún (Feasting Hall, Rival Heirs)', 'Border Watch-Post (Nervous Garrison)'],
        ['Market at the Ford (Traders From Three Provinces)', 'Hermit\'s Cell on an Island (Holy Silence)', 'Poet\'s School (Seven Years of Verse)', 'Abandoned Rath (Fae Have Moved In)', 'Refugee Camp (Clan Driven From Its Land)', 'Fosterage House (Children of Many Clans)'],
        ['Salt-Marsh Village (Fog Every Morning)', 'Horse-Breeders\' Holding (Proud, Quarrelsome)', 'Hill-Top Assembly Site (Empty Until the Óenach)', 'Mining Camp (Copper and Gold, Deep Tunnels)', 'Widow-Queen\'s Hall (Ruled by Grief)', 'Hostage Fort (Holds the Children of Rivals)'],
        ['Plague-Struck Village (Doors Marked With Ash)', 'Brewers\' Settlement (Ale for the King\'s Feast)', 'Quarry of the Standing Stones (Stone-Singers at Work)', 'Boat-Builders\' Strand (Hides and Oak Frames)', 'Village Beneath a Síd (Offerings Every Night)', 'Outlaw Camp in the Woods (Fianna Welcome)'],
        ['Island Shrine of the Old Gods (The Last Priests)', 'Salt-Road Waystation (Always One Stranger)', 'Tributary Village (Starving to Pay Tara)', 'Village That Never Ages (Something Is Wrong)', 'Captured Fort (Enemy Banners on the Rampart)', 'Hall of the Dead King (Kept as He Left It)'],
      ]
    },
    chieftains_and_rulers: {
      id: 'chieftains_and_rulers',
      name: 'Chieftains & Rulers',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Young King (Untested, Surrounded by Wolves)', 'Aging Chieftain (Heirless, Afraid)', 'Warrior-Queen (Rules by Spear and Law)', 'Blemished King (Hides a Flaw or Loses the Throne)', 'Usurper (Killed His Brother at a Feast)', 'Regent Mother (Guards the Throne for a Child)'],
        ['Omen-Bound King (Moves Only When the Druids Allow)', 'Generous Lord (Beggaring Himself for Fame)', 'Miserly Chieftain (A Poet Is Sharpening a Satire)', 'Fae-Wed King (His Queen Came From a Síd)', 'Hostage-Raised Prince (Loyal to the Wrong Clan)', 'Twice-Exiled Chieftain (Back With a Warband)'],
        ['Hospitable Queen (Feeds Every Guest, Watches Every Guest)', 'Drunken Lord (The Feast Never Ends)', 'Cattle-Rich King (Covets One More Bull)', 'Geis-Crippled King (Can Barely Act Without Breaking One)', 'Sea-King of the Isles (Raids the Coasts)', 'Clan Council (Seven Elders, No Agreement)'],
        ['Chieftain\'s Champion (The Real Power at Court)', 'Blind King (Rules by Listening)', 'Beloved Chieftain (Dying, and Everyone Knows)', 'Tanist (Named Heir, Impatient)', 'Brehon Judge (Her Word Outweighs the King\'s)', 'Foreign Prince (Arrived by Sea, Married In)'],
        ['Warband Leader (Rules by Victory Alone)', 'Poet-King (Rules by Verse and Reputation)', 'Cursed Queen (Every Husband Dies)', 'Child-King (Puppet of Three Uncles)', 'Oath-Bound Lord (Sworn to Serve Your Enemy)', 'Grieving Father (A Blood-Feud Consumes Him)'],
        ['Reformed Raider (Now Wears a Torc)', 'High King\'s Steward (Speaks With Tara\'s Voice)', 'Rival Brothers (Share a Throne, Hate Each Other)', 'Síd-Bargained Lord (Prosperous, Terrified)', 'Queen Who Cannot Lie (Honest to a Fault)', 'The True Sovereign (The Land Itself Accepts Them)'],
      ]
    },
    otherworld_realms: {
      id: 'otherworld_realms',
      name: 'Otherworld Realms',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Tír na nÓg (Land of Youth, Years Pass Outside)', 'Mag Mell (Plain of Delights, No One Wants to Leave)', 'Hall Beneath the Hill (Endless Feast, Endless Dance)', 'Island of Women (No Man Returns the Same)', 'Glass Tower on the Sea (Silent Watchers Within)', 'Orchard of Silver Apples (Eat and Be Bound)'],
        ['Forest of Talking Trees (Every Branch Remembers)', 'Land Under Wave (Drowned Halls, Breathable Water)', 'Fortress of Revolving Walls (The Door Keeps Moving)', 'Hall of Manannán (The Sea-God\'s Hospitality)', 'Plain of the Dead (Ancestors Waiting)', 'Isle of Sorrow (Everyone Weeps, No One Knows Why)'],
        ['Twilight Market (Buy Anything, Pay With Memories)', 'Hunting Grounds of the Wild Host (You Are the Quarry)', 'Well of Segais (Hazelnuts of Wisdom Fall)', 'Mirror Kingdom (Your Life, Lived Differently)', 'Island of Laughter (Laugh or Stay Forever)', 'Bridge of Dread (Narrow as a Hair)'],
        ['Court of Winter (Frozen, Formal, Cruel)', 'Court of Summer (Warm, Generous, Deadly)', 'Dream-Hollow (Sleepers From Your World)', 'Cauldron-Hall of the Dagda (Plenty for the Worthy)', 'Labyrinth of Hedges (Voices Call Your Name)', 'Sunken Fomorian City (Something Still Rules It)'],
        ['Starlit Lake (Swans That Were Once Children)', 'Field of Endless Battle (The Slain Rise Each Dawn)', 'Hollow Mountain (Smiths of the Síd)', 'Isle of Apples (Healing, at a Price)', 'House of the Sun (Too Bright to Look On)', 'Road With No End (Walk Until You Answer)'],
        ['Hall of Hostages (Mortal Captives, Content)', 'Grove of Birth and Death (Souls Come and Go)', 'Mist-Shore Between (Neither World Holds You)', 'The Morrigan\'s Ford (She Is Washing Your Armor Already)', 'Castle of the Fetch (Your Double Waits)', 'The Land Before Mortals (As It Was When Gods Walked)'],
      ]
    },
    otherworld_denizens: {
      id: 'otherworld_denizens',
      name: 'Otherworld Denizens',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Doorkeeper With a Riddle (No Answer, No Passage)', 'Fae Child (Asks You to Play)', 'Grey Ferryman (Wants Payment You Didn\'t Bring)', 'Lost Mortal (Arrived "Yesterday," Centuries Ago)', 'Beautiful Host (Insists You Eat)', 'Silent Swan-Maiden (Under a Curse)'],
        ['Hound of the Hunt (Has Your Scent)', 'Old God in Disguise (Testing Your Courtesy)', 'Fae Herald (Summons You to Court)', 'Your Dead Kin (Warns, Blames, or Begs)', 'Shape-Shifting Guide (True Form Unknown)', 'Smith of the Síd (Forges for a Price)'],
        ['Fae Musician (When the Music Stops, Mortals Fall)', 'Jealous Fae Lover (Wants You or Your Companion)', 'Warrior of the Host (Challenges on Sight)', 'Keeper of the Well (Guards Wisdom Jealously)', 'Grieving Fae Parent (Wants Back the Child Mortals Kept)', 'Sleeping Hero (Waiting for the Horn)'],
        ['Fae Judge (Sees Your Broken Geasa)', 'Talking Salmon (Knows One Great Secret)', 'Court Jester (Mocks Truth Into the Open)', 'Mortal Captive Turned Fae (Doesn\'t Want Rescue)', 'Hag of the Crossroads (Kiss Her or Suffer)', 'Grieving Queen of the Síd (Mourns a Mortal)'],
        ['Gatekeeper of Bone (Counts Your Days)', 'Herd of White Cattle (Leads You Somewhere)', 'Fae Merchant (Sells Tomorrow\'s Luck)', 'Wandering Poet of the Síd (Knows Your Saga)', 'Drowned Maiden (Wants Her Name Back)', 'Fetch (Your Double, Wearing Your Face)'],
        ['Manannán\'s Charioteer (Races Across the Waves)', 'Fomorian Envoy (Proposes an Alliance)', 'Child of Lir (A Swan That Speaks)', 'Brigid\'s Servant (Offers Healing Fire)', 'The Dagda (Laughing, Enormous, Hungry)', 'The Morrigan in Her Beauty (Offers Her Love)'],
      ]
    },
    fae_prices: {
      id: 'fae_prices',
      name: 'Fae Prices',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Your True Name', 'Your Firstborn Child', 'Seven Years of Service', 'Your Voice for a Year', 'One Memory of Your Choosing', 'One Memory of Their Choosing'],
        ['A Dance That Lasts Until Dawn', 'Your Shadow', 'The Color of Your Eyes', 'A Lock of Hair (They Can Find You Anywhere)', 'Your Next Victory', 'A Promise to Return'],
        ['The Love of Someone You Love', 'A Song No One Else May Hear', 'Your Sleep (You Dream Their Dreams)', 'A Drop of Blood Each Samhain', 'Your Reflection', 'The Sound of Your Laughter'],
        ['A Year of Your Life', 'Your Iron (Never Carry It Again)', 'Silence About Everything You Saw', 'A Mortal Taken in Your Place', 'Your Hand in Marriage', 'One Favor, Named Later'],
        ['Your Name in Every Clan\'s Memory', 'The Last Word in Every Argument', 'Your Taste for Mortal Food', 'A Kiss, and What It Carries', 'A Lie Told on Their Behalf', 'A Geis of Their Making'],
        ['Your Fear (You Can No Longer Feel It)', 'Your Grief for the Dead', 'The Next Thing You Touch', 'Your Luck at the Next Great Moment', 'A Task Only They Understand', 'Nothing, Which Is Worse'],
      ]
    },
    geasa_of_others: {
      id: 'geasa_of_others',
      name: 'Geasa of Others',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Must Not Eat the Flesh of Their Namesake Beast', 'Must Not Refuse a Woman\'s Request', 'Must Not Sleep Where Firelight Shows From Outside', 'Must Not Hunt Birds', 'Must Not Pass a Hearth Without Tasting the Food', 'Must Not Hear a Harp Played by a Stranger'],
        ['Must Not Enter a House After Sunset', 'Must Not Be the Last to Leave a Feast', 'Must Not Let Three Red Riders Pass Ahead', 'Must Not Speak First in a Council', 'Must Not Cross a River on Horseback', 'Must Not Stay More Than Nine Nights in One Place'],
        ['Must Answer Every Question Truly', 'Must Give Whatever Is Asked at Beltane', 'Must Never Look Back When Leaving Home', 'Must Accept Any Offered Drink', 'Must Not Be Seen Weeping', 'Must Keep a Fire Burning Always'],
        ['Must Not Strike an Unarmed Foe', 'Must Not Refuse Shelter to Kin, Even Enemies', 'Must Not Wear the Color Red', 'Must Not Kill a Dog', 'Must Not Lie Down Before the King Does', 'Must Not Refuse a Bard\'s Request'],
        ['Must Not Touch the Sea', 'Must Not Tell Their Own Name', 'Must Not Ride Behind Grey Horses', 'Must Not Leave a Wrong Unavenged by Nightfall', 'Must Not Sit With Their Back to a Door', 'Must Not See the Dawn From Their Bed'],
        ['Must Not Marry Outside the Clan', 'Must Not Speak to the Dead', 'Must Not Enter a Stone Circle', 'Must Not Take a Gift From a Stranger', 'Must Not Win Three Contests in One Day', 'Must Not Die Anywhere but Their Birthplace'],
      ]
    },
    druidic_rites: {
      id: 'druidic_rites',
      name: 'Druidic Rites',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Oath on the Elements (Sun, Wind, and Sea as Witness)', 'Bull-Feast Dream (The Sleeper Sees the True King)', 'Reading the Clouds (Every Shape an Omen)', 'Divination by Rowan Smoke', 'Binding of a Geis', 'Unbinding of a Curse (Always Costs Something)'],
        ['Driving the Cattle Between Two Fires', 'Naming of a Child (Omens Watched)', 'Wren-Hunt (Listening to the Bird\'s Last Song)', 'Satire of Ruin (Druid and Fili Together)', 'Hazel-Wand Judgment (The Guilty Burns)', 'Mistletoe Cutting (Golden Sickle, White Bulls)'],
        ['Summoning the Ancestors at the Tomb', 'Sealing a Síd Door', 'Opening a Síd Door', 'Rite of Sovereignty (The King Weds the Land)', 'Druid\'s Fog (Hides an Army)', 'Cursing Stones Turned Against the Sun'],
        ['Healing Bath of Herbs (Dian Cécht\'s Remedy)', 'Truth Ordeal by Boiling Water', 'Cleansing of Blood-Guilt', 'Speaking With Trees', 'Weather-Calling (Storm Now, Price Later)', 'Memory Drink (Forget a Grief)'],
        ['Hostage Exchange Blessing', 'Funeral Keening and Ogham-Stone', 'Rite of Passage Into the Fianna', 'Imbas Forosnai (Vision Through Chewed Raw Flesh)', 'Binding the Dead in Their Grave', 'Fire of Uisnech (All Hearths Relit From It)'],
        ['Shape-Shifting Rite (Returning Is Hard)', 'Breaking a Rival Druid\'s Spell', 'Treaty-Sealing With Salt and Blood', 'Counting the Stars for a Royal Birth', 'Calling the Morrigan (Always Answered)', 'A Rite Nobody Remembers the Purpose Of'],
      ]
    },
    prophecies_and_dooms: {
      id: 'prophecies_and_dooms',
      name: 'Prophecies & Dooms',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['"You Will Die Young, and Your Name Will Live Forever"', '"The One You Love Will Be Your Ruin"', '"A King Will Fall by Your Hand"', '"You Will Break Every Geis Laid on You"', '"The Child in This House Will Burn the Province"', '"Three Times You Will Be Offered a Crown"'],
        ['"When the Wren Speaks, Run"', '"Your Death Waits at a Ford"', '"You Will Save the One Who Kills You"', '"The Sea Will Give Back What It Took"', '"Your Clan Ends With You"', '"You Will Wed a Woman of the Síd"'],
        ['"The Hound Who Guards You Will Be Your Doom"', '"A Stranger\'s Hospitality Will Cost Your Honor"', '"The Stone Will Cry Out Under the True King"', '"Blood Will Be Spilled on the Hill of Tara"', '"Your Best Friend Will Stand Across the Ford"', '"The Fomorians Will Rise Within Your Lifetime"'],
        ['"You Will Outlive All Your Companions"', '"You Will Be Remembered for Your Worst Deed"', '"Seven Years of Plenty, Then Seven of Blight"', '"The Morrigan Will Offer You Her Love Three Times"', '"A Poet\'s Words Will Kill You"', '"Your Child Will Not Know You"'],
        ['"You Will Carry a Dead King\'s Head"', '"The Well Will Rise and Drown the Plain"', '"You Will Refuse a Goddess, and Pay"', '"Your Enemy\'s Blood Runs in Your Veins"', '"You Will Be Asked the Same Question Three Times"', '"What You Hunt Will Wear Your Face"'],
        ['"Your Name Will Be Forgotten, but Your Deed Will Not"', '"The Land Will Choose Someone Else"', '"You Will Never Sleep in Your Own Bed Again"', '"Your Victory Will Start a War"', '"A Salmon Will Tell You Everything"', 'The Seer Refuses to Speak, and Weeps'],
      ]
    },
    feast_hall_happenings: {
      id: 'feast_hall_happenings',
      name: 'Feast-Hall Happenings',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Champion\'s Portion Disputed (Swords Drawn)', 'Poet Arrives Unpaid (Satire Threatened)', 'Stranger Asks for Hospitality (Cannot Be Refused)', 'Poisoned Cup (Meant for Someone Else)', 'Marriage Proposed Publicly', 'Hostage Tries to Escape'],
        ['Drunk Warrior Boasts of Your Deeds, Wrongly', 'Druid Reads an Omen in the Fire', 'Harpist Plays the Sleep-Strain (Everyone Dozes)', 'Rival Clan Arrives Uninvited', 'Old Grievance Recited in Verse', 'Guest Breaks a Geis in Front of All'],
        ['Food Runs Out (Host Shamed)', 'King Asks for Your Oath', 'Game of Fidchell for High Stakes', 'Woman of the Síd Joins the Dance', 'Messenger Brings News of a Raid', 'Heroes Compete in Feats (Salmon-Leap, Apple-Juggling)'],
        ['Enemy\'s Head Presented as a Gift', 'Beheading Game Proposed (Strike Now, Be Struck Later)', 'Brawl Over an Insult to a Spouse', 'Seer Collapses Speaking in Tongues', 'Hall Door Slams Shut and Won\'t Open', 'Foster-Brother Arrives From Exile'],
        ['Host Asks You to Settle a Dispute', 'Toasts Turn Into Challenges', 'Fae-Brewed Ale (Time Slips)', 'Satirist Mocks the King (Laughter Stops)', 'Lovers Slip Away (Someone Sees)', 'A Ghost Takes Its Old Seat'],
        ['Gift-Giving (Yours Is Judged Poor)', 'Treaty Proposed Over the Meat', 'Wolfhound Refuses to Eat (Omen)', 'Assassin Among the Servers', 'Feast Lasts Three Days (You Can\'t Leave)', 'The Morrigan Sits Beside the King'],
      ]
    },
    wilderness_hazards: {
      id: 'wilderness_hazards',
      name: 'Wilderness Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Sudden Mist (Paths Vanish)', 'Bog Hole (Swallows Horses)', 'River in Flood (Ford Impassable)', 'Wolf Pack Following', 'Rockslide on the Pass', 'Hailstorm Out of a Clear Sky'],
        ['Wild Boar in Rut', 'Blighted Wood (Nothing Lives)', 'Lost Track (Walking in Circles Since Dawn)', 'Thin Ice on the Lake', 'Fairy Path (Anything Built on It Falls)', 'Hungry Grass (Step on It, Starve)'],
        ['Brambles That Tighten', 'Tide Cuts Off the Causeway', 'Thunderstorm on Open Moor', 'Sea-Fog Rolling Inland', 'Fallen Oak Blocks the Road', 'Poisoned Spring'],
        ['Stampeding Cattle', 'Wildfire on the Heath', 'Deep Snow on the Mountain', 'Pixie-Led (Can\'t Find the Way Out)', 'Crumbling Cliff Path', 'Swarm of Midges (Maddening)'],
        ['Quicksand Estuary', 'Whirlpool in the Strait', 'Barrow Collapse (Bones Below)', 'Great Stag Blocks the Way (Do Not Harm It)', 'Crows Picking a Battlefield Clean', 'Frost at Midsummer (Wrong)'],
        ['Wind That Speaks', 'Earth Tremor Near a Síd', 'Ghost Lights Over the Marsh', 'Drought-Cracked Riverbed', 'Starving Village Blocks the Road', 'The Land Refuses You (Wells Dry as You Pass)'],
      ]
    },
    hearth_rumors: {
      id: 'hearth_rumors',
      name: 'Hearth Rumors',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The High King Has a Blemish Nobody Mentions', 'A Síd Opened on the Hill Last Samhain', 'Connacht Is Gathering Spears', 'A Bull of Wondrous Size Was Born in the South', 'The Druids Have Sworn a Secret Oath', 'A Selkie Was Seen Wearing Mortal Clothes'],
        ['The Fianna Are Leaderless', 'A Poet Is Composing a Satire on the Local King', 'The Dead Walked at the Old Battlefield', 'A Champion Broke His Geis and Lived', 'Tribute to Tara Will Double This Year', 'A Child Was Swapped for a Changeling'],
        ['Fomorian Ships Sighted Off the Coast', 'The Banshee Wailed for the Chieftain\'s Line', 'A Treasure of the Tuatha Dé Surfaced in a Bog', 'The Morrigan Was Seen Washing Armor', 'The Smith Has Forged a Sword That Sings', 'Two Clans Will Marry to End the Feud'],
        ['A Hostel Keeper Poisons Rich Guests', 'A Druid Was Murdered at the Stone Circle', 'The Well of Wisdom Has Run Dry', 'A Plague Is Moving Up the River', 'The King\'s Heir Is Fae-Born', 'Cattle Are Vanishing Without Tracks'],
        ['A Hero Returned From the Otherworld, Aged', 'Someone Is Paying Bards to Praise a Nobody', 'The Old Queen Has a Hidden Son', 'A Rival Is Telling Lies About You', 'Salmon Are Swimming Downstream', 'A Stranger Is Asking About Your Geis'],
        ['The Stone of Fál Was Silent at the Crowning', 'The Fianna Found a Door in the Mountain', 'Wren-Boys Were Seen at Midsummer', 'Hounds Refuse to Hunt in the East Wood', 'A Great Assembly Is Called for Lughnasadh', 'The Gods Are Coming Back'],
      ]
    },
    honor_debts_and_obligations: {
      id: 'honor_debts_and_obligations',
      name: 'Honor-Debts & Obligations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A Life Saved in Battle', 'Blood-Price for a Kinsman Killed', 'Fosterage Unpaid', 'Hostage Promised, Never Sent', 'A Dowry Withheld', 'A Poet\'s Fee Unpaid'],
        ['Hospitality Taken, Never Returned', 'Cattle Borrowed, Never Given Back', 'An Oath of Vengeance', 'A Secret Kept at Great Cost', 'A Sword Lent for a Duel', 'Shelter Given to an Outlaw'],
        ['Healing by a Druid', 'A Rescue From the Síd', 'A Champion\'s Place Given Up', 'A Marriage Arranged, Then Broken', 'Land Granted in Exchange for Spears', 'A Satire Withheld'],
        ['A Grave Left Untended', 'A Name Given at Birth', 'A Truth Told When a Lie Was Easier', 'A Debt Inherited From a Dead Parent', 'Silence Bought at a Feast', 'A Chariot and Team'],
        ['A Horse Given in Friendship', 'A Promise Made to the Dying', 'A Wager Lost at Fidchell', 'A Gift Accepted From the Fae', 'A Hostage\'s Safe Return', 'Aid Refused in Need (A Grudge)'],
        ['An Insult Unanswered', 'A Kiss Stolen at Beltane', 'A Druid\'s Prophecy Paid For', 'The Head of an Enemy Promised', 'An Heirloom Pawned', 'A Debt Owed to the Morrigan'],
      ]
    },
    contests_and_challenges: {
      id: 'contests_and_challenges',
      name: 'Contests & Challenges',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Single Combat at the Ford', 'Chariot Race Around the Hill', 'Hurling Match Against Three Hundred', 'Game of Fidchell With a Stranger', 'Satire Duel Between Poets', 'Beheading Game'],
        ['Salmon-Leap Over a Rampart', 'Riddle Contest With a Druid', 'Wrestling at Lughnasadh', 'Eating Contest at a Fae Feast', 'Horse Race on the Strand', 'Spear-Throwing at a Moving Target'],
        ['Staying Awake Through Samhain Night', 'Crossing the Bridge of Leaps', 'Swimming the Lake With a Stone', 'Holding the Ford Alone', 'Counting the Birds in a Flock', 'Reciting a King\'s Genealogy Without Error'],
        ['Taming a Wild Horse', 'Hunting a Magic Boar', 'Judging a Dispute Fairly', 'Keeping a Vow of Silence for a Day', 'Winning a Harp Contest', 'Outrunning the Fianna Through the Woods'],
        ['Braving the Hall of the Sleepers', 'Carrying a Cauldron Up a Mountain', 'Finding a Hidden Door in the Síd', 'Answering the Same Question Three Ways', 'Drinking the Ale of Forgetting', 'Bringing Back a Golden Apple'],
        ['Surviving a Night on a Grave Mound', 'Out-Boasting a Champion', 'Walking Through Fire Unburnt', 'Lifting a Standing Stone', 'Choosing the True Bride Among Illusions', 'Facing Your Fetch'],
      ]
    },
    sea_and_shore: {
      id: 'sea_and_shore',
      name: 'Sea & Shore',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Selkie Sunning on a Rock', 'Currach Adrift, Empty', 'Beached Whale, Still Singing', 'Drowned Man Walks Ashore', 'Manannán\'s Horses (White Waves Riding Inland)', 'Seaweed Gatherers Find a Chest'],
        ['Raiders\' Ships on the Horizon', 'Fomorian Mound Rising From the Waves', 'Storm Blows a Stranger\'s Boat In', 'Island That Wasn\'t There Yesterday', 'Merrow Asking for Her Cap', 'Tide Reveals an Ancient Causeway'],
        ['Seal Cries Like a Child', 'Fishermen Refuse to Launch', 'Bell Ringing Under the Waves', 'Wreck Full of Treasure and Corpses', 'Sea Serpent Sighted', 'Salt-Witch Selling Winds Tied in Knots'],
        ['Boat Carrying a Dying King', 'Swans Circling Over the Bay', 'Tide Goes Out and Doesn\'t Return', 'Castaway Speaks No Known Tongue', 'Otter King Leading a Procession', 'Beach Covered in Dead Fish'],
        ['Voyager Seeking the Promised Land', 'Silver Branch Floating on the Tide', 'Sea Cave Filled With Singing', 'Fishing Net Brings Up a Skull', 'Beacon Burning With No Keeper', 'Seal-Skin Hidden in a Thatch'],
        ['Sea-Fog With Oars in It', 'Drowned Village Visible at Low Tide', 'Ship of the Dead Passing', 'Selkie Mother Demanding Her Children', 'Ninth Wave, Taller Than a Hall', 'Manannán Himself Rides Across the Waves'],
      ]
    },
    enemy_schemes: {
      id: 'enemy_schemes',
      name: 'Enemy Schemes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Turning Your Kin Against You', 'Paying a Poet to Satirize You', 'Tricking You Into Breaking Your Geis', 'Stealing Your Cattle', 'Courting Someone You Love', 'Bargaining With the Síd'],
        ['Poisoning a Well You Depend On', 'Raising a Warband in Secret', 'Spreading Rumors of Your Cowardice', 'Seeking a Druid\'s Curse', 'Kidnapping a Foster-Child', 'Claiming Your Land Before the Brehon'],
        ['Hiring the Clan-Slayer', 'Forging an Alliance With Your Rival', 'Hunting for Your True Name', 'Luring You Into the Otherworld', 'Freeing Something That Was Bound', 'Buying the Loyalty of Your Companions'],
        ['Preparing an Ambush at a Ford', 'Making You an Offer You Must Refuse', 'Stealing a Relic of Your Clan', 'Blaming You for a Murder', 'Arranging a Feast You Can\'t Decline', 'Waking an Old Fomorian Power'],
        ['Hiding Behind Hostages', 'Seizing the Sacred Site of Your Oath', 'Turning a Prophecy Against You', 'Setting a Champion Against You', 'Marrying Into the High King\'s Family', 'Summoning the Wild Hunt'],
        ['Offering Peace (Genuinely)', 'Offering Peace (Falsely)', 'Fleeing Into Exile, Gathering Strength', 'Seeking Atonement Through You', 'Dying, and Cursing You With Their Last Breath', 'Becoming Something Worse'],
      ]
    },
    creatures_and_beings: {
      id: 'creatures_and_beings',
      name: 'Creatures & Beings',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Raven (Omen)', 'Wolf (Hunter)', 'Stag (Ancient)', 'Serpent (Wisdom)', 'Salmon (Knowledge)', 'Hound (Loyalty)'],
        ['Crow (Death)', 'Eagle (Sky-Watcher)', 'Fox (Cunning)', 'Hawk (Merciless)', 'Swan (Beauty)', 'Boar (Courage)'],
        ['Horse (Speed)', 'Owl (Night-Wise)', 'Eel (Hidden)', 'Badger (Fierce)', 'Salmon of Wisdom (Magic)', 'Otherworldly Beast'],
        ['Phantom (Spectral)', 'Giant (Ancient)', 'Fairy (Dangerous)', 'Wraith (Haunting)', 'Merrow (Deadly)', 'Shapeshifter'],
        ['Péist (Power)', 'Fomorian (Chaos)', 'Tuatha Dé (Grace)', 'Shadow-Self (Dark)', 'Ancestor (Wise)', 'God (Absolute)'],
        ['Revenant (Hungry)', 'Bog-Body (Mindless)', 'Fetch (Ominous)', 'Púca (Unnatural)', 'Crane (Transformed)', 'The Morrigan'],
      ]
    },
    objects_and_artifacts: {
      id: 'objects_and_artifacts',
      name: 'Objects & Artifacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Spear (War)', 'Sword (Honor)', 'Cauldron (Magic)', 'Harp (Enchantment)', 'Stone (Weight)', 'Rope (Restraint)'],
        ['Chain (Slavery)', 'Mirror (Truth)', 'Key (Access)', 'Door (Passage)', 'Ring (Binding)', 'Crown (Authority)'],
        ['Cloak (Concealment)', 'Amulet (Warding)', 'Torch (Hope)', 'Candle (Fragile)', 'Goblet (Poison)', 'Ogham Stave (Knowledge)'],
        ['Map (Direction)', 'Coin (Fate)', 'Bell (Summoning)', 'Horn (Alarm)', 'Staff (Magic)', 'Token (Value)'],
        ['Seal (Binding)', 'Lock (Trap)', 'Chain (Binding)', 'Shackles (Captivity)', 'Throne (Burden)', 'Altar (Sacrifice)'],
        ['Tomb (Death)', 'Shrine (Blessing)', 'Torc (Nobility)', 'Talisman (Curse)', 'Rune (Magic)', 'The Cauldron'],
      ]
    },
    emotions_and_states: {
      id: 'emotions_and_states',
      name: 'Emotions & States',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Rage', 'Sorrow', 'Joy', 'Fear', 'Love', 'Hatred'],
        ['Longing', 'Contentment', 'Despair', 'Hope', 'Shame', 'Pride'],
        ['Betrayal', 'Trust', 'Desire', 'Revulsion', 'Awe', 'Contempt'],
        ['Confusion', 'Clarity', 'Madness', 'Sanity', 'Passion', 'Apathy'],
        ['Courage', 'Cowardice', 'Ecstasy', 'Agony', 'Peace', 'Turmoil'],
        ['Obsession', 'Indifference', 'Reverence', 'Blasphemy', 'Acceptance', 'Doom'],
      ]
    },
    locations_and_settings: {
      id: 'locations_and_settings',
      name: 'Locations & Settings',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Stone Circle', 'Síd Mound', 'Sacred Well', 'Crannóg', 'Ring Fort', 'Battlefield'],
        ['Crossroads', 'Druid Grove', 'Raven Nest', 'Otherworldly Shore', 'Hill of Tara', 'Cursed Lands'],
        ['Ancient Tombs', 'Enchanted Forest', 'Waterfall Shrine', 'Standing Stone', 'Fairy Ring', 'Ruined Kingdom'],
        ['Bone-Yard', 'Mirror Lake', 'Sacred Grove', 'Sea-Cave', 'Starlit Meadow', 'Storm Peak'],
        ['Royal Dun', 'Otherworldly River', 'Hall of Heroes', 'Cursed Causeway', 'Cauldron Spring', 'Tír na nÓg'],
        ['Whale-Bone Beach', 'Obsidian Cliff', 'Spiral Tomb', 'Mist-Shrouded Isles', 'Rowan Threshold', 'World-Tree Root'],
      ]
    },
    elements_and_forces: {
      id: 'elements_and_forces',
      name: 'Elements & Forces',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Fire', 'Water', 'Wind', 'Earth', 'Lightning', 'Storm'],
        ['Mist', 'Ice', 'Mud', 'Sand', 'Ash', 'Dust'],
        ['Blood', 'Fog', 'Rain', 'Snow', 'Hail', 'Drought'],
        ['Flood', 'Earthquake', 'Tide', 'Current', 'Wave', 'Whirlwind'],
        ['Shadow', 'Light', 'Darkness', 'Star-Glow', 'Moon-Shine', 'Sun-Fire'],
        ['Corruption', 'Purification', 'Decay', 'Growth', 'Transformation', 'Eternity'],
      ]
    },
    consequences_and_costs: {
      id: 'consequences_and_costs',
      name: 'Consequences & Costs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A Life Is Lost', 'A Year Passes', 'A Memory Fades', 'A Bond Breaks', 'A Curse Manifests', 'A Power Awakens'],
        ['A Debt Is Owed', 'A Truth Revealed', 'A Secret Buried', 'A Sacrifice Made', 'A Transformation Begins', 'A Death Approaches'],
        ['A Love Blooms', 'A Love Dies', 'A Rival Emerges', 'An Ally Appears', 'A Wound Opens', 'A Healing Occurs'],
        ['A Child Is Born', 'A Child Is Lost', 'A Kingdom Falls', 'A King Rises', 'A Prophecy Fulfills', 'A Doom Approaches'],
        ['A Hope Dies', 'A Hope Blooms', 'A Betrayal Occurs', 'A Loyalty Forges', 'A War Begins', 'A Peace Breaks'],
        ['A Soul Enslaved', 'A Soul Freed', 'A Geis Forms', 'A Geis Breaks', 'Time Flows Backward', 'All Is Lost & Remade'],
      ]
    },
    sensory_descriptions: {
      id: 'sensory_descriptions',
      name: 'Sensory Descriptions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Smells of Rot', 'Smells of Roses', 'Smells of Copper', 'Smells of Smoke', 'Smells of Salt', 'Smells of Decay'],
        ['Sounds of Screaming', 'Sounds of Music', 'Sounds of Silence', 'Sounds of Thunder', 'Sounds of Whispers', 'Sounds of Laughter'],
        ['Tastes Metallic', 'Tastes Sweet', 'Tastes Bitter', 'Tastes Ash', 'Tastes Blood', 'Tastes Honey'],
        ['Feels Cold', 'Feels Burning', 'Feels Soft', 'Feels Sharp', 'Feels Rough', 'Feels Smooth'],
        ['Looks Radiant', 'Looks Dark', 'Looks Twisted', 'Looks Beautiful', 'Looks Grotesque', 'Looks Ethereal'],
        ['Glows Faintly', 'Glows Brightly', 'Shimmers', 'Vibrates', 'Moves Slowly', 'Moves Impossibly Fast'],
      ]
    }
  }
};
