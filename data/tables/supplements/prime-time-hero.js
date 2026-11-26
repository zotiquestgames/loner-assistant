/**
 * Prime Time Hero Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'prime-time-hero-adventure',
    name: 'Prime Time Hero Adventure Tables',
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
        ['Rogue CIA Agent', 'Hawaiian Private Eye', 'Freelance Problem Solver', 'International Courier', 'Vintage Car Restorer', 'Environmental Activist'],
        ['Former Special Forces', 'Tech Entrepreneur', 'Investigative Reporter', 'Resort Security Chief', 'Treasure Hunter', 'Corporate Whistleblower'],
        ['Retired Cat Burglar', 'Yacht Captain', 'Museum Curator', 'Hotel Detective', 'Stunt Pilot', 'Fashion Photographer'],
        ['Government Fixer', 'Beach Bum Philosopher', 'Scientific Consultant', 'Island Tour Guide', 'Race Car Driver', 'Documentary Filmmaker'],
        ['International Playboy', 'Marine Biologist', 'Art Recovery Expert', 'Wilderness Guide', 'Disgraced Network Anchor', 'Cultural Attaché'],
        ['Reformed Con Artist', 'Ex-Navy Chopper Pilot', 'Archaeological Advisor', 'Reckless Mountaineer', 'Classic Rock Roadie', 'Diplomatic Security'],
      ]
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Jury-Rigging Genius', 'Silver Tongue', 'Photographic Memory', 'Helicopter Pilot', 'Lockpicking Master', 'Martial Arts Expert'],
        ['Computer Whiz', 'Master of Disguise', 'Explosives Expert', 'Deep Sea Diver', 'Getaway Driver', 'Language Savant'],
        ['Wilderness Survival', 'Social Chameleon', 'Electronics Hacker', 'Yacht Navigation', 'Acrobatic Prowess', 'Cultural Insider'],
        ['Kitchen Chemist', 'Shadowing Unseen', 'Motorcycle Stunts', 'Bluffing Past Security', 'Art Authentication', 'Network of Contacts'],
        ['Tactical Planning', 'Wine Connoisseur', 'Safe Cracker', 'Sky Diving', 'Field Medic', 'Psychological Profiling'],
        ['Engineering Savvy', 'Casino Gambling', 'Mountaineering', 'Grease Monkey', 'Knows Every Loophole', 'Reads Dead Languages'],
      ]
    },
    frailties: {
      id: 'frailties',
      name: 'Frailties',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Wanted by CIA', 'Gambling Problem', 'Haunted by Past', 'Too Trusting', 'Afraid of Heights', 'Claustrophobic'],
        ['Can\'t Swim', 'Terrible Liar', 'Chronic Back Pain', 'Code of Honor', 'Fashion Obsessed', 'Technophobic'],
        ['Can\'t Resist a Dare', 'Overly Curious', 'Former Addiction', 'Protective of Innocents', 'Seasick', 'Owes the Agency a Favor'],
        ['Incurable Flirt', 'Owes the Mob', 'Guilt Complex', 'Won\'t Kill', 'Colorblind', 'Impulsive'],
        ['Afraid of Dogs', 'Poor Money Manager', 'Chronic Insomniac', 'Stubborn Pride', 'Old Flame in Every Port', 'Recognizable Face'],
        ['Bad Temper', 'Constantly Late', 'Superstitious', 'Too Competitive', 'Afraid of Flying', 'Workaholic'],
      ]
    },
    gear: {
      id: 'gear',
      name: 'Gear',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Talking Sports Car', 'Swiss Army Knife', 'Designer Sunglasses', 'Encrypted Radio', 'Vintage Motorcycle', 'Luggable Computer'],
        ['Helicopter', 'Scuba Gear', 'Tuxedo Collection', 'Car Phone', 'Yacht', 'Telephoto Camera'],
        ['Lockpick Set', 'Hang Glider', 'Chemical Lab Kit', 'Saxophone', 'Off-Road Vehicle', 'Art Forgery Tools'],
        ['Speedboat', 'Climbing Gear', 'Briefcase Tape Recorder', 'Ham Radio', 'Private Jet', 'Surveillance Van'],
        ['Duct Tape and Paperclips', 'Disguise Kit', 'Platinum Charge Card', 'Night Vision', 'Vintage Wardrobe', 'Wristwatch Communicator'],
        ['Hidden Safe House', 'Throwing Stars', 'Houseboat at the Marina', 'Mobile Laboratory', 'Classic Corvette', 'International Passports'],
      ]
    },
    female_names: {
      id: 'female_names',
      name: 'Female Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Jessica', 'Laura', 'Kelly', 'Dana', 'Sabrina', 'Pamela'],
        ['Tracy', 'Jennifer', 'Gina', 'Valerie', 'Toni', 'Rhonda'],
        ['Christine', 'Maddie', 'Angela', 'Bonnie', 'Lisa', 'Stephanie'],
        ['Carmen', 'Lupe', 'Nadia', 'Mei-Ling', 'Simone', 'Ilsa'],
        ['Erica', 'Dominique', 'Sasha', 'Fiona', 'Yolanda', 'Gabrielle'],
        ['Kimberly', 'Teri', 'Shelley', 'Rita', 'Marisol', 'Leilani'],
      ]
    },
    male_names: {
      id: 'male_names',
      name: 'Male Names',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Michael', 'Thomas', 'Rick', 'Jack', 'Frank', 'Dennis'],
        ['Gary', 'Steve', 'Tony', 'Brett', 'Lance', 'Chuck'],
        ['Ray', 'Vince', 'Danny', 'Murphy', 'Cody', 'Russ'],
        ['Ricardo', 'Kenji', 'Dimitri', 'Marco', 'Kalani', 'Andre'],
        ['Hans', 'Rafael', 'Sergei', 'Nigel', 'Etienne', 'Jamal'],
        ['Clay', 'Duncan', 'Harley', 'Reed', 'Wesley', 'Boone'],
      ]
    },
    surnames: {
      id: 'surnames',
      name: 'Surnames',
      category: 'character',
      rollType: '2d6',
      entries: [
        ['Sterling', 'Blackwood', 'Carmichael', 'DuBois', 'Kincaid', 'Fontaine'],
        ['Harrington', 'Delgado', 'Kellerman', 'Lancaster', 'Malone', 'Quinlan'],
        ['Nakamura', 'O\'Brien', 'Pemberton', 'Ravencroft', 'Santangelo', 'Thornton'],
        ['Kahale', 'Valentino', 'Whitmore', 'Brannigan', 'Castellano', 'Dunbar'],
        ['Yamamoto', 'Zimmerman', 'Beaumont', 'Crawford', 'Hollister', 'Reyes'],
        ['Everhart', 'Fitzgerald', 'Grimaldi', 'Hawthorne', 'McCready', 'Petrakis'],
      ]
    },
    nicknames: {
      id: 'nicknames',
      name: 'Nicknames',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ace', 'Blade', 'Cowboy', 'Doc', 'Dutch', 'Flash'],
        ['Ghost', 'Hawk', 'Hollywood', 'Ice', 'Jinx', 'Kid'],
        ['Lucky', 'Mad Dog', 'Maverick', 'Preacher', 'Ringo', 'Rocket'],
        ['Saint', 'Shadow', 'Slick', 'Sparky', 'Tex', 'Tiger'],
        ['Viper', 'Wheels', 'Whiz', 'Boomer', 'Bulldog', 'Chief'],
        ['Duke', 'Scooter', 'Sundance', 'Rebel', 'Hotshot', 'Smiley'],
      ]
    },
    case_generator: {
      id: 'case_generator',
      name: 'Case Generator',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A wealthy heiress receives death threats typed on a stolen embassy typewriter, days before her wedding', 'Corporate executives are being assassinated by a sniper using military-surplus night-vision gear', 'A defense scientist vanishes from a secure facility the night before a classified demonstration', 'Priceless artifacts are vanishing from museums, replaced overnight with flawless forgeries', 'A diplomat\'s daughter is kidnapped during a peace summit, ransom demanded in gold bullion', 'Environmental activists are being framed for a bombing they didn\'t plan'],
        ['A tech startup\'s prototype microchip is sabotaged the week before its televised unveiling', 'Surplus military weapons are turning up in criminal hands through a leak in the supply chain', 'A celebrity chef discovers poison in a shipment meant for their flagship restaurant', 'Archaeological dig sites are being dynamited the night before their findings go public', 'A pharmaceutical company is burying test results a week before a new drug hits pharmacy shelves', 'A string of international art auctions is laundering cartel money through inflated bids'],
        ['A private space program\'s rockets keep exploding on the pad, and sabotage is the leading theory', 'A luxury cruise liner is hijacked by a crew posing as its own entertainment staff', 'A fashion designer\'s Paris debut is threatened by a blackmailer with photographs from their past', 'An underground fighting ring is using kidnapped tourists as unwilling contestants', 'A casino owner is rigging the tables through dealers wired for sound', 'Temple relics are vanishing from three countries in a single month, the thefts too clean for coincidence'],
        ['A real estate mogul is strong-arming an entire block of holdouts off their land', 'Championship athletes are turning up drugged before the biggest events of the season', 'A media mogul\'s late-night broadcasts are hiding subliminal messages in the static', 'A shipment meant for famine relief is diverted and sold on the black market', 'A university is quietly selling diplomas to clients who\'ve never set foot on campus', 'Ancient burial sites are stripped bare overnight, the artifacts already halfway to a buyer'],
        ['A busy transportation hub is being used to smuggle people, not just cargo', 'A promising solar energy project is sabotaged the week its funding is finalized', 'A children\'s charity gala turns out to be a laundering front for something far worse', 'A professional league\'s championship game has been fixed by a betting syndicate', 'A major bank\'s computer system has been breached, and the intruder is still inside', 'A health spa\'s "miracle treatments" are covering up illegal medical experiments'],
        ['A popular resort town is quietly recruiting tourists into a criminal network', 'A publishing house is printing propaganda disguised as investigative journalism', 'A string of sold-out concerts is being used to move contraband through the crowd', 'A modeling agency\'s overseas "opportunities" are a front for trafficking', 'An insurance company is staging disasters to collect on policies it wrote itself', 'A dating service\'s client files are being used to blackmail its wealthiest members'],
      ]
    },
    location_generator: {
      id: 'location_generator',
      name: 'Location Generator',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A Caribbean resort with a bunker hidden beneath the tennis courts', 'A glass-tower corporate headquarters with a research floor that isn\'t on the directory', 'An abandoned Cold War listening post repurposed as a criminal hideout', 'A private island with archaeological ruins the owner won\'t let anyone photograph', 'A glamorous casino running its books through a back room nobody official has seen', 'An international airport with a smuggling route through the baggage carousel'],
        ['A mountain ski lodge fronting an arms deal in the boiler room', 'An offshore research platform running experiments no permit covers', 'A luxury yacht that never seems to actually dock anywhere', 'An art museum quietly swapping originals for forgeries after hours', 'An embassy running an intelligence operation its own ambassador doesn\'t know about', 'A television studio broadcasting more than the evening news'],
        ['A shopping mall with a black market running out of the service corridors', 'A university campus with a lab wing that isn\'t on any campus map', 'A private hospital wing performing treatments no board would approve', 'A fashion show whose runway lighting hides a dead drop', 'A stadium with games rigged by whoever controls the scoreboard operator', 'A monastery holding relics that were supposed to have been returned years ago'],
        ['An oil rig with a safe room no maintenance log accounts for', 'A safari park moving more than animals across its border checkpoint', 'A space center guarding satellite blueprints someone\'s already sold', 'A vineyard\'s cellar concealing a chemical lab behind the oldest barrels', 'An amusement park with a surveillance room hidden inside the fun house', 'A mining operation burying more than tailings in its back pit'],
        ['A cruise liner where the crew answer to someone other than the captain', 'A race track laundering money through the betting windows', 'A botanical garden\'s greenhouse growing something not in the catalog', 'An observatory whose dish points at more than the stars', 'An aquarium moving contraband through its water intake system', 'A concert hall wired for more than acoustics'],
        ['A beach resort\'s tour desk running more than excursions', 'An antique shop that\'s never once sold anything to a walk-in customer', 'A health club distributing more than protein shakes in the locker room', 'A library\'s rare book room holding files that were never meant to be public', 'A marina where the fastest boats never seem to be for rent', 'A warehouse district where three different operations share the same loading dock'],
      ]
    },
    npc_generator: {
      id: 'npc_generator',
      name: 'NPC Generator',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A corrupt businessman leveraging a hostile takeover to eliminate a rival', 'A former case officer selling Cold War secrets out of pure spite', 'A desperate parent following a ransom note\'s instructions to the letter', 'An idealistic reporter one source away from breaking a career-making story', 'An ambitious governor willing to kill for a shot at the nomination', 'A lonely widower millionaire being fleeced by a "financial advisor"'],
        ['A skilled forger churning out passports for anyone with cash', 'A reformed con artist trying to make amends for a decade of grifts', 'A brilliant researcher whose breakthrough was stolen by a rival lab', 'A jet-setting playboy sinking deeper into debt at every casino on the circuit', 'A hotel heiress who hired the hero and is hiding why she really needs protection', 'A talent agent building a career on talent that isn\'t his to exploit'],
        ['A defense contractor moving surplus weapons through a shell company', 'An environmental activist framed for a bombing after getting too close to the truth', 'A gallery owner moving masterpieces that were never legally for sale', 'A pharmaceutical researcher sitting on data that would end a bestselling drug', 'A retired stunt driver who owes the hero a favor and hates being reminded of it', 'An ambassador\'s spouse feeding secrets to a foreign handler'],
        ['A Silicon Valley wunderkind who lifted a rival\'s prototype wholesale', 'A fashion designer being blackmailed over a scandal from before the fame', 'An archaeologist quietly selling finds to a private collector before they\'re catalogued', 'A tenured professor running human trials no ethics board ever approved', 'A rookie cop who idolizes the hero and keeps turning up at the wrong moment', 'A nervous accountant who wants to talk, but only somewhere very public'],
        ['A client\'s jealous ex-partner, with a story nobody has thought to ask for', 'A shipping executive running narcotics through a legitimate freight line', 'A fisherman whose boat saw something the Coast Guard says never happened', 'A network anchor slipping propaganda into the evening broadcast', 'A claims investigator covering up the very fraud they were hired to expose', 'A resort operator exploiting the fishing village whose land it sits on'],
        ['A bank vice president laundering cash through a chain of shell accounts', 'An oil executive burying the results of an environmental disaster', 'A defense engineer selling satellite blueprints to the highest bidder', 'A food conglomerate executive tainting a competitor\'s product line', 'A widow who knows exactly what her late husband was mixed up in', 'A small-town sheriff: honest, outgunned, and out of patience'],
      ]
    },
    complication_generator: {
      id: 'complication_generator',
      name: 'Complication Generator',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Your cover identity doesn\'t hold up to a phone call the concierge makes', 'The person you\'re trying to save refuses to leave without an heirloom', 'Your contact was turned before the meeting even started', 'The local police captain is on the villain\'s payroll', 'Your gadget shorts out at the exact wrong moment', 'An innocent bystander wanders into the middle of the confrontation'],
        ['A sudden storm cuts off every road out of town', 'Your car dies on a stretch of highway with no phone booth in sight', 'Your radio goes to static the second you need backup', 'A trusted ally sells you out for a payoff', 'Your nemesis shows up uninvited to complicate an already bad night', 'The one piece of evidence that mattered burns in a very convenient fire'],
        ['You\'re framed for a crime with your fingerprints already on file', 'The deadline moves up by twelve hours without warning', 'A second car full of reinforcements pulls up behind the first', 'Your safe house address turns up in the wrong hands', 'A key witness clams up the moment the cameras start rolling', 'The person you rescued last week wants nothing more to do with you'],
        ['Your investigation lands on the front page before you\'re ready', 'A government suit orders you to stand down, effective immediately', 'The operation runs three times deeper than the case file suggested', 'Someone starts leaning on the people closest to you', 'The evidence trail leads somewhere you didn\'t want it to go', 'The place is guarded twice as heavily as the intel promised'],
        ['A planted story in tomorrow\'s paper torches your reputation', 'A flood, a fire, or a blackout throws the rescue plan into chaos', 'The target slips out through a route nobody scouted', 'Your accounts are frozen by someone with friends at the bank', 'A rival investigator starts working your case a step ahead of you', 'The one piece of gear you need is sitting in enemy hands'],
        ['Your extraction plan is compromised by someone on the inside', 'The target is moved to a location twice as secure', 'The border checkpoint closes without explanation, hours before you need it open', 'Your backup gets there five minutes after it would have mattered', 'The evidence you risked everything to collect turns out to be planted', 'A diplomatic incident threatens to shut the whole operation down'],
      ]
    },
    vehicle_encounter: {
      id: 'vehicle_encounter',
      name: 'Vehicle Encounter',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A rush-hour chase down Sunset Boulevard, one lane over from a runaway bus', 'A helicopter pursuit through a mountain pass barely wide enough for one rotor', 'A speedboat chase through the Venetian canals, gondoliers diving for cover', 'A motorcycle pursuit straight through a Marrakesh market, awnings and all', 'A sports car duel along the Pacific Coast Highway, one bad turn from the ocean', 'A jeep chase down a jungle logging road that ends at a washed-out bridge'],
        ['A dogfight between two crop dusters over a sugarcane plantation', 'A fistfight on the roof of a subway car as it pulls out of the station', 'A cable car stalled halfway up the mountain, with a sniper in the next car', 'A hovercraft pursuit across the Everglades, alligators optional', 'A jet ski chase between moored yachts in the middle of a regatta', 'A limousine boxed in by two black sedans on embassy row'],
        ['A stolen tank rolling out of a decommissioned army base, and only the hero in its way', 'An ultralight chase low over a tropical island, both pilots flying mostly on nerve', 'An armored car barreling down the freeway with the hero clinging to the back doors', 'A racing yacht pursuit straight into the teeth of a gale', 'A dune buggy chase across the sand toward a smuggler\'s airstrip', 'A hang glider escape from a mountaintop fortress, searchlights sweeping the sky'],
        ['A wrecking ball swung into the path of the villain\'s getaway car', 'A jet boat pursuit down a river that turns into rapids around the next bend', 'A vintage car rally where one of the entrants is carrying a bomb', 'A snowmobile chase across a frozen lake that\'s starting to crack', 'A tourist on a parasail caught between two speedboats', 'A hot air balloon drifting over the border with the hero and a defector aboard'],
        ['A fire engine commandeered to chase a truck full of stolen explosives', 'A cigarette boat run from Bimini to the Keys, with the Coast Guard closing in', 'An ATV chase through the wreckage of a closed-down amusement park', 'A seaplane taking off from a lagoon under rifle fire from the shore', 'An iceboat race across a frozen lake, with one competitor playing for keeps', 'A gondola lift sabotaged at the midpoint, with the hero in the wrong car'],
        ['A garbage truck used as a battering ram against a warehouse gate', 'A Mississippi paddle wheeler turned into a floating battlefield', 'A go-kart chase through a shopping mall after closing time', 'A gyrocopter escape from the roof of corporate headquarters', 'A monster truck rally covering a stolen goods exchange in the pits', 'A luxury RV converted into a rolling fortress, heading for the state line'],
      ]
    },
    gadget_inspiration: {
      id: 'gadget_inspiration',
      name: 'Gadget Inspiration',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A microwave oven, gutted and rewired into a short-range EMP', 'A car stereo retuned to jam every radio on the block', 'An air compressor and a length of PVC pipe, turned into a pneumatic launcher', 'A camera flash unit rigged to blind whoever opens the door', 'A disco fog machine, borrowed for instant cover', 'A junkyard electromagnet that yanks the gun out of a guard\'s hand'],
        ['A fire extinguisher emptied across the floor into a slick, foamy barrier', 'An elevator cable and a belt buckle, turned into a zip line', 'A kitchen timer wired up as a delayed trigger', 'A garden hose taped to a scuba regulator, making a snorkel long enough to reach the surface', 'A shaving mirror bouncing sunlight into a sniper\'s scope', 'Refrigerator coils rigged to ice over a doorway'],
        ['A PA system feedback loop loud enough to drop a room full of guards', 'A car jack wedging a closing blast door open', 'A vacuum cleaner run in reverse to inflate a life raft', 'A rooftop TV antenna boosting a walkie-talkie\'s range across the city', 'An air conditioning duct pumping out smoke to fake a fire alarm', 'A home gym\'s pulleys and cables rigged to lift something far too heavy'],
        ['A washing machine drum used as a shield', 'A smoke screen cooked up from a half-remembered chemistry class and the contents of a pool shed', 'A garage door opener reprogrammed to trigger the villain\'s own device', 'An aquarium pump siphoning the fuel out of the getaway car', 'A photocopier and a steady hand, producing a passable security badge', 'An intercom system rewired so the hero can listen to every room in the building'],
        ['A sprinkler system turned into a way to wash knockout gas out of the air', 'A treadmill belt pulled free and used to slide a heavy crate across the floor', 'A kitchen blender full of something the hero warns everyone not to try at home', 'A slide projector throwing the hero\'s silhouette on the far wall as a decoy', 'A dishwasher\'s pump turned into a high-pressure water cannon', 'A coffee maker\'s timer switch used to start something at exactly 3 a.m.'],
        ['A leaf blower clearing tear gas out of a hallway', 'Hot tub jets repurposed to push a diver through a flooded tunnel', 'A mechanic\'s creeper used to slide under a closing security door', 'A string of Christmas lights wired into an electrified tripwire', 'A barbecue grill\'s propane tank, a lighter, and a very quick exit', 'Ceiling fan blades bolted to a lawnmower engine, for one very short flight'],
      ]
    },
    cold_open_scenarios: {
      id: 'cold_open_scenarios',
      name: 'Cold Open Scenarios',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A motorcycle chase through narrow alleys ends with the hero airborne over a fruit cart', 'An explosion rips through a yacht\'s upper deck in the middle of a cocktail party', 'A figure in a tuxedo scales the embassy wall with a grappling hook and a bottle of champagne', 'A helicopter chases a stolen sports car across a neon-lit skyline', 'A sports car comes through the front window of a jewelry store, backwards', 'A scuba diver surfaces in a hotel swimming pool holding a waterproof briefcase'],
        ['A sniper\'s crosshairs settle on a penthouse window where a toast is being made', 'A hang glider lands on a corporate rooftop just as the CEO\'s helicopter touches down', 'A limousine is ambushed in the pickup lane at the international airport', 'A secret lab in the Alps goes up in a fireball, and one figure walks out of the smoke', 'A speedboat tears through a marina full of yachts with a pursuer close behind', 'An elevator drops twenty floors with the hero inside, then jolts to a stop'],
        ['A private jet makes an emergency landing on a two-lane desert highway', 'A cave dive turns up the conning tower of a submarine that shouldn\'t be there', 'A high-stakes poker game ends when the dealer pulls a gun', 'Armed men on skis chase the hero down a slope as an avalanche breaks above them', 'A Grand Prix practice lap turns into a shootout in the pit lane', 'A museum gala goes dark, and when the lights come back the centerpiece is gone'],
        ['The lights go out at a diplomatic reception, and a shot rings out in the dark', 'Two men fight on a construction crane forty stories above downtown', 'A meeting in a wine cellar ends when someone smells gas', 'A vintage car rally covers an arms deal at the halfway checkpoint', 'An astronomer spots something on the radar screen that\'s no meteor', 'A beach resort evacuates ahead of a hurricane, and one guest refuses to leave'],
        ['Masked men walk into a board meeting and take the whole room hostage', 'A foot chase through a subway tunnel, a maintenance train bearing down', 'A rooftop pursuit across tenement buildings, each gap wider than the last', 'A harbor warehouse fire exposes crates that aren\'t what the manifest says', 'A cable car full of tourists is seized halfway up the mountain', 'A model runs off the runway mid-show, straight past the hero, two bodyguards in pursuit'],
        ['A helicopter assault hits a penthouse meeting through the windows', 'A bridge collapses with the hero, and the only copy of the evidence, still on it', 'Hijackers take over an airport control tower at the busiest hour of the day', 'A dinner guest collapses at a mansion party, and the host calmly keeps serving', 'Alarms sound at a chemical plant upriver from a sleeping city', 'An embassy extraction goes wrong, and the hero\'s contact is left behind'],
      ]
    },
    episode_titles: {
      id: 'episode_titles',
      name: 'Episode Titles',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['"The Monaco Connection"', '"Dead Drop Dangerous"', '"Swiss Account Murder"', '"The Malibu Conspiracy"', '"Code Name: Paradise"', '"The Istanbul Express"'],
        ['"Diamonds Are Deadly"', '"Nobody Dies in Paradise"', '"Caribbean Death Trap"', '"The Tokyo Protocol"', '"Murder at 30,000 Feet"', '"The Berlin Gambit"'],
        ['"Silent Partners"', '"The Riviera Deception"', '"Tropical Storm Warning"', '"The London Underground"', '"Golden Gate Conspiracy"', '"Hot Wheels, Cold Cash"'],
        ['"Midnight in Miami"', '"The Vatican Papers"', '"Hawaiian Heat Wave"', '"Somebody\'s Watching"', '"Double Cross at Dawn"', '"Smoke and Mirrors"'],
        ['"Arctic Ice Conspiracy"', '"Kiss the Witness Goodbye"', '"Silicon Valley Secrets"', '"One Last Favor"', '"Cancun Cover-Up"', '"The Vienna Vendetta"'],
        ['"Brazilian Burnout"', '"The Geneva Convention"', '"Thai Triangle Trouble"', '"The Barcelona Betrayal"', '"Dead Air"', '"The Ultimate Deception"'],
      ]
    },
    cliffhanger_moments: {
      id: 'cliffhanger_moments',
      name: 'Cliffhanger Moments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The hero is locked in a sealed tank as seawater pours in', 'The bomb\'s red display hits thirty seconds, and there are two wires left', 'The hero\'s trusted partner steps out of the shadows, gun raised', 'The brakes are gone, and the road ends at a cliff', 'A file reveals the hero\'s own past was invented by the Agency', 'A dart in the neck, and the room starts to blur'],
        ['The elevator cable snaps with the hero still inside', 'A virus in the defense computer starts a launch countdown nobody can stop', 'The hero\'s love interest takes a phone call in fluent Russian', 'The plane\'s last engine coughs and dies over shark-infested water', 'The charges in the foundation start ticking, and the doors are chained shut', 'The villain offers a choice: the hostage or the escape plane, not both'],
        ['The parachute doesn\'t open', 'A containment door fails in the lab, and the alarms start screaming', 'The hero wakes strapped to a chair beneath a machine built to erase memories', 'The speedboat engine dies in the middle of a storm, miles from shore', 'A tape starts playing the hero\'s own voice confessing to something terrible', 'The nemesis, supposed to be dead, walks through the door smiling'],
        ['The floor drops away into a pit beneath the villain\'s study', 'The radio goes dead just as the hero calls for backup', 'The only evidence that clears an innocent is burning in the fireplace', 'The fuel gauge hits empty halfway through the chase', 'Photographs arrive that will end an ally\'s career unless the hero backs off', 'The submarine starts an emergency dive with the hero still aboard'],
        ['The hero\'s gun jams with three armed men closing in', 'The ice starts cracking under the hero\'s feet', 'A needle of truth serum, and the hero starts talking', 'The freezer door slams shut, and the thermostat starts dropping', 'A child wanders into the line of fire', 'The hero\'s air line is cut, fifty feet under the facility'],
        ['An earthquake hits in the middle of the ransom handoff', 'The hero\'s face appears on live television, cover blown', 'The rope starts fraying halfway down the cliff', 'The villain reveals the bomb is wired to the hero\'s own pulse', 'The villain\'s escape triggers an avalanche heading straight for the lodge', 'The hero wakes in a strange room with no memory of the last two days'],
      ]
    },
    plot_twist_generator: {
      id: 'plot_twist_generator',
      name: 'Plot Twist Generator',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The victim who hired the hero is the mastermind behind it all', 'The hero\'s government contact has been reporting to the other side', 'The stolen technology never worked; someone is selling a fake', 'The nemesis turns out to be the hero\'s presumed-dead parent', 'The rescue mission was a trap from the very first phone call', 'The innocent bystander is an undercover agent working the same case'],
        ['The real crime was committed by the hero\'s closest ally', 'The hero has been drugged for days without realizing it', 'The criminal organization is a government black operation', 'The hero\'s lost love is alive and working for the enemy', 'Every piece of evidence the hero collected was planted to be found', 'The hero\'s mechanic has been sabotaging the car for a price'],
        ['The whole case is a loyalty test set by the hero\'s own agency', 'The hero\'s memories of an old mission were put there by someone else', 'The villain\'s plan succeeds, and now the hero has to deal with the aftermath', 'The case is one small piece of a much bigger conspiracy', 'The missing person staged their own disappearance', 'The hero\'s backup team has been replaced by impostors'],
        ['The assassination target is the hero', 'Solving the case will expose something the hero did years ago', 'The culprit is the hero\'s double, surgically made to match', 'The mission briefing was fiction from start to finish', 'The person the hero came to rescue doesn\'t want to be rescued', 'The extraction point is already in enemy hands'],
        ['The villain\'s death was faked to throw off the pursuit', 'The hero\'s radio has been broadcasting every word to the villain', 'The stolen item was stolen from someone else first, years ago, by the \'victim\'', 'Someone has been committing crimes under the hero\'s name', 'Two villains are working the same angle, and they hate each other more than the hero', 'The whole town is a staged set, built to fool the hero'],
        ['The criminal is breaking the law to protect innocent people', 'The hero\'s equipment was built to fail at the crucial moment', 'The culprit is a member of the hero\'s own family', 'The villain is a fan of the hero and staged the whole case to meet them', 'The person being rescued has already escaped, and is now the one doing the hunting', 'The hero\'s own team has been working against them all along'],
      ]
    },
    climax_settings: {
      id: 'climax_settings',
      name: 'Climax Settings',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The deck of a luxury yacht in a violent storm at sea', 'A revolving restaurant at the top of a skyscraper, still turning', 'A research station on the rim of an active volcano', 'A missile silo with the launch countdown already running', 'An oil platform with the drilling floor on fire', 'A space shuttle cargo bay in low orbit'],
        ['The roof of a freight train crossing a mountain trestle', 'An undersea research station losing pressure one bulkhead at a time', 'A collapsing mine shaft with the air running out', 'An aircraft hangar in a thunderstorm, lightning hammering the tin roof', 'A carnival funhouse rigged with real traps', 'An ice hotel melting from sabotage, one wall at a time'],
        ['A casino vault in the middle of a robbery', 'A television studio during a live national broadcast', 'An opera house chandelier, high above a full audience', 'A packed stadium during the championship game', 'A cruise ship engine room in heavy seas', 'A cathedral bell tower during a society wedding'],
        ['A chemical plant with a tank leaking something green', 'An airport runway with a crippled airliner coming in to land', 'A roller coaster at full speed, with the villain in the front car', 'A hotel ballroom in the middle of a diplomatic reception', 'The arm of a construction crane high above the city', 'A submarine torpedo room during a crash dive'],
        ['An observatory dome opening onto a meteor shower', 'A wine cellar during an earthquake, bottles bursting on every rack', 'An ice rink during the hockey final', 'An art gallery during an exclusive auction', 'A lighthouse tower in the middle of a hurricane', 'A rail yard switching tower at rush hour'],
        ['A hospital operating theater with surgery underway', 'A radio telescope dish in the middle of a transmission', 'A glass conservatory filling with chemical fumes', 'A racetrack during the final laps', 'A clock tower mechanism room as midnight strikes', 'A penthouse pool party, forty floors up'],
      ]
    },
    epilogue_outcomes: {
      id: 'epilogue_outcomes',
      name: 'Epilogue Outcomes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A government official pins a medal on the hero, then quietly asks a favor', 'A sunset on the beach with the person the hero rescued', 'The hero drives off into the neon night as the theme music swells', 'The villain is led away in handcuffs, swearing revenge', 'The hero relaxes on a beach with a tropical drink, until the phone rings', 'A newspaper headline celebrates the hero and spells their name wrong'],
        ['A grateful client sends a gift far too expensive to accept', 'The villain falls into their own trap', 'The hero\'s car gets a slow-motion reveal in the morning light', 'The people the hero protected go back to their ordinary lives', 'The hero walks away from an explosion without looking back', 'The government covers up the whole incident, hero included'],
        ['The mayor hands the hero a key to the city', 'A romantic dinner is interrupted by a call about the next case', 'The hero\'s name starts turning up in foreign newspapers', 'A grateful family makes the hero an honorary member', 'The hero parks the exotic vehicle under a tarp until next time', 'Without its leader, the villain\'s organization falls apart'],
        ['A hidden note from someone the hero helped says thank you', 'Evidence everyone thought destroyed turns up in a safe-deposit box', 'The hero\'s example inspires a whole town to stand up for itself', 'A secret government agency offers the hero a job', 'The nemesis sends a grudging note of respect', 'A peace agreement gets signed because of what the hero uncovered'],
        ['A wealthy client leaves the hero something in their will', 'The villain, released years later, opens a soup kitchen', 'The hero\'s improvised gadget turns up in a mail-order catalog', 'A university the hero saved awards them an honorary degree', 'A missing person comes home to a family that never stopped waiting', 'The hero\'s vehicle comes back from the shop with a few new features'],
        ['A charity foundation is set up in the hero\'s name', 'A foreign government grants the hero a standing welcome', 'A former enemy calls to say they owe the hero one', 'An international incident never happens, and nobody knows why', 'A grateful corporation offers the hero an expense account with no ceiling', 'The hero heads for the horizon, already on the way to the next adventure'],
      ]
    },
    evidence_types: {
      id: 'evidence_types',
      name: 'Evidence Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A floppy disk labeled in someone else\'s handwriting, full of financial records', 'A Polaroid catching two people together who claim they\'ve never met', 'A handwritten note in a foreign language, coordinates circled twice', 'Chemical residue on a crate marked as "agricultural supplies"', 'A cassette that was recording when it shouldn\'t have been', 'A wine glass with a print that doesn\'t match anyone at the table'],
        ['Tire tracks from a car too expensive for this neighborhood', 'A scrap of designer fabric snagged on a chain-link fence', 'A radio frequency that keeps turning up on the same dial setting', 'An account number traced through three shell companies to one island bank', 'A key that doesn\'t fit any lock anyone will admit to owning', 'A blood sample with chemical markers no hospital lab can place'],
        ['An airline ticket stub for a flight that was never on the manifest', 'A hotel registration under a name that\'s spelled wrong on purpose', 'A shipping manifest listing cargo that doesn\'t match the crate weight', 'A phone number scrawled on a matchbook that traces to a dead line', 'Security footage with three seconds spliced clean out of the middle', 'A partial fingerprint lifted from a glass, matched to a file that was supposed to be sealed'],
        ['A coded message buried in a newspaper\'s classified section', 'An ammunition casing from a weapon that isn\'t sold on this continent', 'Medical records for a patient who checked in under a name that isn\'t theirs', 'An authentication certificate that proves the "original" is a fake', 'A geological survey with a page conspicuously missing', 'An excavation report that undercounts everything actually found on site'],
        ['An insurance policy naming a beneficiary nobody\'s ever heard of', 'An employment record for a company with no listed address', 'A visa with entry stamps for a border that was closed that week', 'Lab results proving a "clean" water supply is anything but', 'A service record with a mission redacted so heavily it\'s mostly black ink', 'A university transcript for classes that were never on the syllabus'],
        ['A customs declaration that lists a container\'s contents as machine parts', 'A prescription bottle for a drug that isn\'t approved for sale here', 'A property deed transferred the same week the owner went missing', 'A shortwave radio set tuned to a frequency nobody\'s supposed to use', 'A formula scrawled on a napkin, half-burned before anyone could stop it', 'A stack of photographs meant for one person\'s eyes only'],
      ]
    },
    information_sources: {
      id: 'information_sources',
      name: 'Information Sources',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The bartender who\'s poured drinks for every player in this town for a decade', 'The cab driver whose backseat has heard every deal in the city', 'The hotel concierge who can get a table, a passport, or a name', 'The retired case officer who swore he was done, and almost means it', 'The designer who dresses everyone worth knowing at the gala', 'The card dealer trained to notice a tell before the player does'],
        ['The yacht club commodore who\'s watched every boat in the marina for years', 'The gallery owner who knows exactly which "private collector" isn\'t real', 'The professor whose obscure specialty just became very relevant', 'The diplomatic courier one indiscreet drink away from talking', 'The mechanic who services cars for people who never ask about the bill', 'The personal trainer who hears more in the gym than any confessional'],
        ['The antique dealer who\'s moved more than one piece that wasn\'t for sale', 'The charter pilot who\'s flown to airstrips that aren\'t on any map', 'The jeweler who can tell a stone\'s origin, and its owner\'s story, on sight', 'The restaurant owner who seats every deal at the same corner table', 'The night guard who\'s noticed the same face pass through the exhibit twice', 'The travel agent who books itineraries that don\'t add up'],
        ['The photographer whose contact sheet has one frame too many', 'The archivist who still has the microfiche nobody thought to burn', 'The bank manager who flagged a transfer and then got told to forget it', 'The doorman who\'s seen every late-night visitor this building\'s ever had', 'The florist whose delivery van has a standing order for a very quiet address', 'The accountant who\'s cooked the books for one client too many'],
        ['The executive assistant who types every memo before it\'s supposed to exist', 'The caddy who\'s overheard more deals than any boardroom', 'The masseur at the spa who hears everything and repeats nothing, for a price', 'The chauffeur who\'s driven half the city somewhere they shouldn\'t have gone', 'The switchboard operator who logs every call whether she\'s told to or not', 'The office cleaner who empties wastebaskets nobody thought to shred'],
        ['The translator brought in for one meeting too sensitive to trust to anyone else', 'The claims investigator who found the fraud and got told to bury it', 'The customs officer who\'s seen the same crate pass through under three names', 'The real estate agent who\'s sold three properties to the same shell company', 'The systems technician who still has the access codes nobody revoked', 'The old associate looking for one clean job to make up for the others'],
      ]
    },
    red_herrings: {
      id: 'red_herrings',
      name: 'Red Herrings',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A parolee with a record who\'s actually gone straight', 'A dry cleaner\'s back room that looks a lot more suspicious than it is', 'A false name adopted for reasons that have nothing to do with this case', 'A matchbook planted at the scene to point the finger elsewhere', 'A decoy shipment moving in plain sight to cover the real one', 'A crime scene staged just convincingly enough to fool a first look'],
        ['A double agent feeding the hero exactly what they want to hear', 'A perfectly innocent late-night meeting that looks like anything but', 'A legal transaction dressed up to look like a payoff', 'A lookalike in the same trench coat, at the same hotel, on the same night', 'A witness who just happened to be standing in the wrong doorway', 'Forged paperwork built to sink someone who had nothing to do with it'],
        ['A rival outfit taking the blame for a job it never pulled', 'A faulty gauge throwing every reading off by exactly the wrong amount', 'A witness whose memory of the getaway car keeps changing', 'A second building on the same street mistaken for the real address', 'A blackmail victim acting suspicious for a reason that isn\'t the case at hand', 'A government operation that was never meant to be seen, let alone understood'],
        ['A false-flag job built specifically to frame someone else for it', 'A cleaning crew with keys to a place they have no idea is criminal', 'A conversation overheard through a wall, missing everything that gave it context', 'A cash withdrawal that looks like a payoff and is actually rent', 'An alibi that falls apart on paper, and holds up perfectly once the time zones are sorted', 'A face changed just enough by a surgeon\'s scalpel to throw off an old contact'],
        ['A courier forced into carrying something they never asked to carry', 'A legal but rotten deal that reads exactly like an illegal one', 'A gesture that means one thing here and something else entirely back home', 'A shopkeeper whose brother happens to run with the wrong crowd', 'A car accident staged just clean enough to bury a trail', 'A confession signed under pressure that doesn\'t match a single fact on record'],
        ['A courier who has no idea what they\'re actually carrying', 'A real emergency that just happens to look exactly like a cover story', 'A witness who\'s certain about the wrong car\'s make and color', 'A collector whose harmless hobby looks a lot like tradecraft from the outside', 'Forged papers that are almost, but not quite, good enough', 'A patsy set up so well they start to believe it themselves'],
      ]
    },
    breakthrough_moments: {
      id: 'breakthrough_moments',
      name: 'Breakthrough Moments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The villain lets a name slip that only the real culprit would know', 'A phone booth conversation runs three sentences too long', 'A lab report ties two "unrelated" cases to the same chemical signature', 'Surveillance film catches a face nobody expected in that room', 'A paper trail through three shell companies lands on the mastermind\'s desk', 'A former partner decides loyalty isn\'t worth what it used to be'],
        ['A pattern emerges once three separate incidents get pinned to the same corkboard', 'A garbled radio transmission names the next target, if you know how to listen', 'A fingerprint on file links a suspect to a scene nobody connected before', 'A stolen ledger opens a door nobody thought could be opened', 'A frightened witness finally decides silence isn\'t safer anymore', 'Two cases that never should have touched turn out to share a client'],
        ['Digging into the villain\'s past turns up a grudge that explains everything', 'A hidden camera catches the one meeting that was never supposed to exist', 'An appraiser\'s authentication proves the "masterpiece" is a fake', 'A chemical signature under the microscope matches a very specific source', 'A face across a crowded room turns out to be an old score, unsettled', 'A rescued hostage remembers more than their captors think they do'],
        ['The villain lets slip exactly where the evidence is hidden', 'Following the money through three shell corporations lands on the truth', 'An accent, a phrase, a turn of speech: something narrows down where the villain learned to talk', 'A weakness surfaces, the kind that comes from watching someone closely enough', 'A pattern in the schedule reveals exactly when the villain is most exposed', 'A personal diary, left behind in a moment of carelessness, says too much'],
        ['A member of the organization walks in ready to trade everything for immunity', 'A detail dismissed three scenes ago turns out to be the whole answer', 'A cover story collapses the moment someone checks a single date', 'The real motive surfaces, and it\'s smaller and sadder than anyone expected', 'A single piece of physical evidence puts the villain at the scene, no argument left', 'A meeting gets infiltrated clean, and everything said in that room becomes leverage'],
        ['A piece of the villain\'s own technology gets turned against them', 'A local case turns out to be one thread in something much larger', 'A desperate move to silence a witness backfires spectacularly', 'Stolen plans reveal exactly what happens next, and when', 'The villain\'s past victims find each other, and their stories finally line up', 'The case that seemed solved turns out to have been the wrong case all along'],
      ]
    },
    investigation_obstacles: {
      id: 'investigation_obstacles',
      name: 'Investigation Obstacles',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The one witness who saw everything is too frightened to say a word', 'The evidence locker catches fire the night before the hearing', 'A city official who owes the wrong people a favor blocks the paper trail', 'A threat lands on someone the hero actually cares about', 'A planted rumor sends the whole investigation down the wrong street', 'Clearance that should have been a formality gets pulled without explanation'],
        ['The one building that matters gets sealed off for an "emergency" that feels staged', 'The key suspect boards a flight to a country with no extradition treaty', 'A break-in leaves the file room stripped bare', 'A frame job puts the hero\'s own name on the case file', 'The only witness speaks a dialect nobody in a hundred miles can translate', 'A court order arrives, and it isn\'t on the hero\'s side'],
        ['A storm closes every road out before anyone can act on what they\'ve learned', 'Customs confiscates every piece of gear at the worst possible checkpoint', 'A staged crisis pulls every available resource in the wrong direction', 'The informant who had the answer turns up dead an hour before the meeting', 'Every phone line the hero uses is already being listened to', 'A diplomatic passport makes an untouchable suspect exactly that'],
        ['A "contamination scare" shuts the one lab that could run the test', 'A velvet rope and a badge keep the hero three feet from where they need to be', 'The one person with real answers has vanished into witness protection', 'A payoff turns a reliable contact cold overnight', 'A cut brake line turns a routine drive into the obstacle itself', 'A manufactured emergency across town pulls attention from the real crime'],
        ['The evidence that matters most sits behind a clearance nobody will grant', 'Frozen accounts turn a simple expense into a real problem', 'Someone\'s been using the hero\'s name to commit crimes of their own', 'A leak to the press turns a quiet investigation into a circus', 'An old mistake resurfaces at the worst possible moment', 'A border slams shut over a political crisis that has nothing to do with the case'],
        ['A rival investigator with a badge and no patience starts asking the same questions', 'Someone on the inside has been feeding the other side every move', 'This one has gotten personal, and it\'s starting to show', 'The clock runs out before all the pieces are actually in place', 'The hero\'s own methods land them on the wrong side of the law', 'The whole operation goes quiet the moment it senses it\'s being watched'],
      ]
    },
    witness_types: {
      id: 'witness_types',
      name: 'Witness Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['An elderly neighbor who saw everything through a lace curtain, and won\'t admit it', 'A child who knows exactly what happened and no way to say it out loud', 'The villain\'s own spouse, ready to talk in exchange for a plane ticket out', 'A night guard who looked the other way for a fee he now regrets', 'A tourist whose vacation photos accidentally caught the whole thing', 'A rival journalist sitting on the same story, unwilling to share a byline'],
        ['A former employee fired the week before everything went wrong', 'A tow-truck driver who hauled away a car that was never reported stolen', 'A maid who cleaned up after something she was told not to ask about', 'A mechanic who\'s serviced the getaway car three times this month', 'An accountant who found the second set of books and can\'t sleep since', 'An ER nurse who patched up a gunshot wound and filed no report'],
        ['A lifeguard who saw it all from the tower, and was told it was a drowning', 'A ham radio operator who picked up a transmission he wasn\'t meant to hear', 'A construction foreman who built a room that isn\'t on the blueprints', 'A flight attendant who served the suspect on a flight he says he never took', 'A bank teller who processed a transfer that made her hands shake', 'An appraiser who authenticated a piece she\'s now certain was stolen'],
        ['A programmer who wrote code for a client who never explained what it was for', 'A caterer who\'s served drinks at meetings that ended in raised voices', 'A nun who heard a confession she can\'t repeat and can\'t forget', 'A jeweler who recognized a stone he sold years ago under a different name', 'A paperboy whose route passes the house at 5:30 every morning', 'A drive-in projectionist who saw more through the booth window than on the screen'],
        ['A hospital orderly who moved a patient the records say was never admitted', 'A telephone repairman who was up the pole outside when it happened', 'A surfer who watched the boat go out with three people and come back with two', 'A street musician on the same corner every night, who noticed the same car every night', 'A garbage collector who found something in a dumpster and kept it', 'A dog walker with a fixed route and a very good memory for faces'],
        ['A museum guide who\'s noticed the same "tourist" circling the same case for days', 'A clerk who stamped a passport she\'s fairly sure wasn\'t genuine', 'A photo lab technician who developed a roll of film he can\'t stop thinking about', 'A schoolteacher whose student mentioned something she can\'t un-hear', 'A retired cop who\'s kept a case file the department closed too fast', 'A shopkeeper who\'s watched the same men meet in his back room for months'],
      ]
    },
    chase_complications: {
      id: 'chase_complications',
      name: 'Chase Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A construction site forces a detour through a maze of scaffolding', 'The drawbridge starts rising just as both cars reach it', 'Rush hour turns the freeway into an obstacle course', 'Road work squeezes the highway down to a single lane of cones', 'A thunderstorm drops visibility to a few car lengths', 'A police roadblock forces both cars down a side street'],
        ['The fuel light comes on with ten miles still to go', 'A tire blows out on a high-speed turn', 'The radio fills with static just when the hero needs directions', 'A school zone, and a crossing guard stepping into the road', 'The last ferry is already pulling away from the dock', 'A plane taxiing across the runway the hero is using as a road'],
        ['A motorcycle gang joins the chase, and nobody knows whose side they\'re on', 'A tour bus stalls on a narrow mountain road', 'The drawbridge jams halfway up', 'An ice storm turns the road into a skating rink', 'A parade blocks the only street out of town', 'A harbor crane swings its load across the pursuit path'],
        ['A herd of cattle wanders onto a rural highway', 'The railroad crossing gate comes down with no train in sight, and then the train appears', 'A street fair packs the road with pedestrians', 'A jackknifed fuel truck blocks every lane of the freeway', 'Fog rolls in off the ocean and swallows the coast road', 'The engine starts making a noise that means it won\'t last'],
        ['Bystanders force the hero to choose between speed and safety', 'Fire trucks racing to an unrelated emergency cut across the intersection', 'A flash flood has washed out the road ahead', 'The chase crosses into a restricted military zone', 'The setting sun blinds the hero on a westbound straightaway', 'An illegal street race is already using the road'],
        ['The harbor master raises every bridge at once', 'Runway construction forces the plane onto a taxiway', 'A carnival parade with floats the size of houses', 'An industrial accident closes the main road under a chemical cloud', 'The engine overheats, steam pouring out from under the hood', 'A crash up ahead: the hero can keep chasing or stop to pull someone out'],
      ]
    },
    combat_environments: {
      id: 'combat_environments',
      name: 'Combat Environments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A yacht deck in a storm, the rail the only thing between the fight and the sea', 'A casino floor, between rows of clanging slot machines', 'An art museum, where every missed punch lands on something priceless', 'A hotel kitchen full of knives, open flames, and boiling stockpots', 'A construction site with a bulldozer nobody\'s driving', 'An airport apron, jet engines spooling up on every side'],
        ['A shopping mall on the busiest Saturday before Christmas', 'An observatory, fighting around the base of a giant telescope', 'A wine cellar, a hundred years of vintages within arm\'s reach', 'An automatic car wash, spinning brushes and all', 'An ice rink during hockey practice, where nobody has steady footing', 'An aquarium\'s glass tunnel, sharks circling overhead'],
        ['A greenhouse full of exotic plants, some of them poisonous', 'A radio station during a live broadcast, every grunt going out on the air', 'A penthouse pool deck with glass walls on three sides', 'A factory assembly line that won\'t stop moving', 'A nightclub full of strobe lights and music too loud to shout over', 'A submarine engine room hissing with steam'],
        ['A ski lodge great room, the fireplace roaring', 'A carnival hall of mirrors, where nobody can tell who\'s real', 'A hospital operating theater with a patient still on the table', 'The pit lane of a race in progress', 'A television studio during a live taping, the audience applauding at all the wrong moments', 'A chemistry lab full of unlabeled glassware'],
        ['The inside of a clock tower, between turning gears', 'A subway platform at rush hour', 'The cargo hold of a plane in flight', 'A mine shaft held up by rotten beams', 'The stage of an opera house mid-performance', 'An oil platform deck, the sea churning far below'],
        ['A mission control room during a launch', 'An archaeological dig, fighting over something that mustn\'t be broken', 'An elevator shaft, between two moving cars', 'A jewelry store crisscrossed by alarm lasers', 'A martial arts tournament in front of a paying crowd', 'A revolving restaurant with a view of the whole city'],
      ]
    },
    escape_routes: {
      id: 'escape_routes',
      name: 'Escape Routes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A motorcycle through alleys too narrow for the pursuing car', 'A speedboat out through the marina channels', 'A helicopter lifting off the rooftop pad as the stairwell door bursts open', 'A zip line strung between two office towers', 'The maintenance tunnels under the building', 'A hot air balloon cut loose from a festival in the park'],
        ['A jet ski out across the harbor', 'A parasail launched off a coastal cliff', 'A cable car across a mountain valley', 'A subway tunnel, walking the maintenance catwalk', 'The storm drains under the city streets', 'A shipping container on a freighter about to sail'],
        ['A hang glider off the building\'s roof', 'Straight down a black-diamond ski run', 'A rubber raft down the river rapids', 'The arm of a construction crane, swung across to the next building', 'An underground parking garage with six exits', 'The service elevator down to the loading dock'],
        ['The ventilation ducts, one crawlspace at a time', 'A zigzag down a fire escape', 'A gondola lift over the ski resort', 'The roof of a theme park monorail', 'The roof of a moving subway train', 'A slide down a frozen waterfall'],
        ['A parachute jump from a cargo plane', 'A bungee cord off a suspension bridge', 'The water slide at the hotel pool complex', 'An old coal chute in an abandoned mine', 'The laundry chute in a luxury hotel', 'A plane ditched in the harbor, and a long swim to shore'],
        ['A siege catapult at a castle converted into a resort', 'A rocket sled on a desert test range', 'A toboggan run through the forest', 'An underground river through a limestone cave', 'A factory conveyor belt out to the loading bay', 'An ejector seat from a plane that isn\'t going to land'],
      ]
    },
    stunt_opportunities: {
      id: 'stunt_opportunities',
      name: 'Stunt Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Leaping from one moving truck to another on the freeway', 'Swinging across a gorge on a rope', 'Sliding under a security door a second before it seals', 'Diving through a plate-glass window and rolling to a stop unhurt', 'Riding the roof of a subway train as it enters a tunnel', 'Pole-vaulting over an electrified fence'],
        ['Jumping a motorcycle across the gap of an opening drawbridge', 'Leaping from an exploding building to a helicopter\'s landing skid', 'Skiing off a cliff edge and landing on the slope below', 'Swinging from a chandelier across a crowded ballroom', 'Sliding down a grand banister into a room full of guards', 'Jumping from a crane hook onto a rooftop'],
        ['Diving through a waterfall into a hidden cave', 'Leaping from a galloping horse onto a moving train', 'Parachuting onto the deck of a moving yacht', 'Going hand over hand along a power line', 'Jumping between elevator cars in a shaft', 'Leaping from a low-flying plane onto a mountainside snowfield'],
        ['Riding an avalanche down the mountain on skis', 'Jumping from a speedboat onto a seaplane\'s float as it takes off', 'Leaping a gap between rooftops that shouldn\'t be leapable', 'Swinging from a crane\'s hook into an open window', 'Running through a fireball and coming out the other side', 'Jumping from a hotel balcony into the pool five stories down'],
        ['A motorcycle jump through a ring of fire', 'A leap from a hovering helicopter onto an oil rig', 'Jumping between gondola cars over a canyon', 'Bailing out of a race car at full speed', 'Swinging across a river on a hanging vine', 'Launching off a building\'s roof with a hang glider strapped on'],
        ['Climbing from one airborne plane to another', 'Hopping across a lava field on cooling rocks', 'Jumping from a sinking yacht to a rescue helicopter\'s ladder', 'Swinging from a flagpole into an embassy window', 'Leaping between drifting ice floes', 'Hanging from the landing gear of a plane as it takes off'],
      ]
    },
    environmental_hazards: {
      id: 'environmental_hazards',
      name: 'Environmental Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A flash flood roaring down a dry desert canyon', 'An avalanche set off by the villain\'s explosives', 'A tropical storm with hurricane-force winds', 'A volcano waking up, lava cutting off the road', 'An earthquake bringing the building down', 'A forest fire racing up the hillside'],
        ['A toxic gas leak in a chemical plant', 'A radiation leak in a research lab', 'A chemical spill spreading a deadly fog over the valley', 'An electrical storm over a field full of metal towers', 'Quicksand on a jungle trail', 'A blizzard with zero visibility'],
        ['A landslide burying the mountain road', 'A tidal wave heading for the coast', 'A sandstorm sweeping across the desert', 'An ice storm turning every surface to glass', 'A mudslide after three days of rain', 'A sinkhole opening in the middle of a city street'],
        ['A geyser field where the ground itself is too hot to cross', 'Runoff from a chemical plant turning the rain acidic', 'Methane building up in a sealed tunnel', 'A solar flare scrambling every radio and computer', 'A magnetic storm sending compasses spinning', 'Smog trapped over the city by a temperature inversion'],
        ['A whirlpool in a narrow strait', 'A rockfall inside a mountain tunnel', 'Arctic permafrost giving way underfoot', 'A dust devil ripping across an open airstrip', 'A flash freeze glazing a mountain pass with ice', 'A waterspout spinning across the bay'],
        ['Ground fog so thick the hero can\'t see their own feet', 'Hail the size of golf balls', 'Lightning striking a fuel depot', 'A tornado touching down on the edge of town', 'A glacier calving into the fjord and sending a wave down the channel', 'Burning meteor fragments raining across the desert'],
      ]
    },
    last_minute_saves: {
      id: 'last_minute_saves',
      name: 'Last-Minute Saves',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The improvised gadget works exactly once, exactly when it\'s needed', 'The villain\'s own trap snaps shut on the villain', 'An ally arrives with reinforcements, just in time', 'An obscure fact from the hero\'s past turns out to be the key', 'The weather turns in the hero\'s favor', 'The hero finds the villain\'s weak spot and hits it'],
        ['The hero\'s reputation convinces a henchman to switch sides', 'Evidence planted an act ago finally turns up where it\'s needed', 'A modification to the hero\'s vehicle pays off at the last second', 'A bystander steps in to help when nobody expected it', 'The hero\'s refusal to compromise inspires someone else to act', 'A glitch in the villain\'s system works in the hero\'s favor'],
        ['The hero\'s crazy plan works against all odds', 'The villain\'s arrogance leads to one fatal mistake', 'The hero\'s stamina outlasts the villain\'s', 'A detail everyone ignored turns out to decide everything', 'The hero\'s network of contacts comes through all at once', 'Nature itself intervenes: a wave, a gust, a falling tree'],
        ['The hero\'s sacrifice gets everyone else moving', 'The villain\'s own people turn on their leader', 'The hero reads the villain perfectly', 'Broken equipment starts working again at the last possible moment', 'A split-second idea turns a defeat into a victory', 'The villain\'s plan has one flaw, and the hero finds it'],
        ['The hero\'s charm wins over the people pointing guns', 'Perfect timing: the hero is exactly where they need to be', 'Something the hero packed "just in case" turns out to be exactly the thing', 'The villain\'s attachment to someone becomes their undoing', 'The hero trusts someone, and the trust pays off', 'A small improvisation sets off a chain reaction'],
        ['The hero knows the building better than the people who own it', 'The villain underestimates the hero one time too many', 'The hero\'s stand brings a whole crowd over to their side', 'An ally everyone thought dead walks back in', 'The hero\'s name alone makes someone stand down', 'The hero takes a leap of faith, and lands it'],
      ]
    },
    social_events: {
      id: 'social_events',
      name: 'Social Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['An embassy reception with more attachés than actual diplomats', 'A charity gala where the wine costs more than the donations raised', 'An art auction with three bidders who never once look at the paintings', 'A fashion show where the real business happens backstage, not on the runway', 'A private wine tasting at a vineyard that never seems to sell to the public', 'A dinner celebrating a merger that half the room is furious about'],
        ['A museum opening where the guest list matters more than the exhibit', 'A university fundraiser stacked with names that don\'t fit an academic budget', 'A hospital charity ball thrown by a donor who\'s never set foot in the ward', 'An opera premiere where the real drama is in the boxes, not on stage', 'A country club tournament where the real game happens on the nineteenth hole', 'A yacht club regatta with boats too expensive to actually race hard'],
        ['A film festival premiere crawling with people who never watch the movies', 'A casino\'s grand opening, comped tables and all', 'A hotel\'s reopening party, complete with a ribbon nobody important actually cuts', 'A restaurant anniversary dinner where the owner knows everyone\'s usual order and secret', 'A political fundraiser with a suggested donation nobody actually suggests', 'A business conference\'s cocktail hour, where the real deals get made after the panels end'],
        ['A scientific symposium reception with more corporate sponsors than scientists', 'An archaeological society dinner arguing over a find that isn\'t officially public yet', 'A private viewing for antique dealers who all recognize each other\'s tells', 'A jewelry exhibition preview with a security detail bigger than the guest list', 'A concert intermission where half the lobby is doing business, not talking music', 'A dance competition\'s social hour, all small talk and bigger stakes'],
        ['A wedding reception for a family that never invites strangers, and somehow just did', 'A graduation reception where every proud parent seems to know each other already', 'A retirement party for an official who knows exactly where every body is buried', 'A birthday party thrown for a celebrity who barely shows up to their own event', 'An anniversary dinner at a restaurant that\'s never once taken a walk-in', 'A book launch for an author whose publisher seems awfully nervous tonight'],
        ['A tennis tournament\'s sponsor dinner, all handshakes and quiet leverage', 'A horse racing season opener where the real betting happens off the books', 'A sailing competition\'s awards ceremony, trophies and tension in equal measure', 'An aviation show\'s VIP reception, hangar doors open and guard down', 'A trade conference\'s evening mixer, name tags and loose tongues', 'A peace summit reception where the toasts are warmer than the actual talks'],
      ]
    },
    cover_identities: {
      id: 'cover_identities',
      name: 'Cover Identities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A wealthy collector shopping for a new acquisition', 'A consultant flown in from the head office to "review the numbers"', 'A documentary crew of one, camera bag and all', 'A late addition to an archaeological expedition roster', 'A researcher presenting at a conference that runs one day too long', 'A junior attaché from an embassy nobody bothers to double-check'],
        ['A banker with an accent that suggests offshore, not local', 'A photographer with a press pass for a magazine that\'s technically real', 'An expert brought in to evaluate a private wine collection', 'An insurance adjuster here to assess a very convenient claim', 'A journalist chasing a tech story that\'s suddenly very relevant', 'A visiting professor on sabbatical, notebook always in hand'],
        ['A developer scouting the property for "future opportunities"', 'A security consultant hired to find the very holes being exploited', 'A courier with a package that absolutely cannot wait', 'A philanthropist evaluating where the next donation should go', 'An agent here to sign a client nobody\'s heard of yet', 'A talent scout with a business card and nothing to back it up'],
        ['A dealer here to appraise a collection someone\'s eager to sell fast', 'A scientist conducting a study that conveniently requires full access', 'A travel writer here to review the place, notebook and all', 'A cultural attaché promoting an exchange program that doesn\'t quite exist', 'An advisor managing a portfolio that\'s suddenly gotten very interesting', 'A technical writer documenting a process no one else wants documented'],
        ['A trade representative here to discuss a shipment', 'A location scout here to consider the resort for a production', 'A planner here to walk through the venue for a very important wedding', 'A trainer hired for a client who happens to be exactly the right target', 'A broker here to show a very particular yacht to a very particular buyer', 'A charter pilot on standby for a client who hasn\'t shown yet'],
        ['An appraiser here to evaluate a stone that\'s suddenly changed hands', 'A salesperson demonstrating equipment nobody in the room actually ordered', 'A technician here to inspect a security system that\'s about to fail on cue', 'A consultant here to "upgrade" a system that\'s about to be compromised', 'A coordinator here to review the shipping logs, clipboard in hand', 'An assistant to someone important enough that nobody asks questions'],
      ]
    },
    conversation_hooks: {
      id: 'conversation_hooks',
      name: 'Conversation Hooks',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Drop the name of someone you both supposedly know', 'Admire the watch, the ring, the thing they clearly want noticed', 'Ask where that accent is from, and how long they\'ve been away', 'Bring up a place you both happen to have been', 'Ask for the one recommendation only a local would know', 'Compliment the one thing they\'re actually proud of'],
        ['Bring up the news story that\'s clearly been on their mind all night', 'Ask about the trip they just got back from, or the one they\'re planning', 'Say something sharp about the venue, and see if they agree', 'Float an investment that\'s just vague enough to sound real', 'Ask their opinion on tonight\'s real topic of conversation', 'Mention a problem they\'d be perfectly positioned to fix'],
        ['Compliment their taste, and watch how they take it', 'Ask how they know the host', 'Bring up a hobby you happen to share, or claim to', 'Comment on the weather, and see where the small talk goes from there', 'Ask how they got into their line of work', 'Mention a mutual friend who spoke very highly of them'],
        ['Ask for advice on a business matter you don\'t actually need help with', 'Point out a detail of the building only someone paying attention would notice', 'Bring up a recent shake-up in their industry', 'Ask a question that\'s a little too personal, and gauge the reaction', 'Congratulate them on something they didn\'t expect anyone to know about', 'Ask what\'s next on their calendar'],
        ['Ask what causes actually matter to them', 'Comment on the food, the drink, whatever\'s in reach', 'Bring up a recent purchase everyone\'s clearly been talking about', 'Ask where they went to school', 'Mention a security concern, and watch who tenses up', 'Bring up a sport or pastime you both claim to follow'],
        ['Ask their honest opinion of tonight\'s venue', 'Comment on a piece of jewelry that\'s clearly not costume', 'Ask what\'s new in their corner of the business', 'Ask about their plans for the holiday everyone\'s talking about', 'Mention a shared connection to an organization, real or invented', 'Ask what they really think about tonight\'s controversy'],
      ]
    },
    social_complications: {
      id: 'social_complications',
      name: 'Social Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A detail in the cover story doesn\'t line up with something the room already knows', 'A face from an old job crosses the room, and recognition dawns slowly', 'The credentials look perfect until someone actually calls the number on file', 'A slip of the tongue lets something classified out into casual conversation', 'A cultural misstep lands badly with exactly the wrong person', 'The accent slips for half a syllable, and someone was listening closely'],
        ['A supposed expert corners you to test the expertise you\'re claiming', 'A guard runs a face through the files, and the match comes back live', 'The charming conversation partner turns out to work for the other side', 'A hidden earpiece crackles at the exact wrong moment, in front of the wrong person', 'Someone clocks the same face circling the same hallway twice', 'The cover identity says one thing; the behavior underneath keeps saying another'],
        ['An innocent question lands somewhere the cover story can\'t reach', 'A security scan finds exactly the piece of gear that shouldn\'t be there', 'Someone calls out the wrong name across a crowded room, loud enough to turn heads', 'Someone starts asking pointed questions about where the money\'s actually coming from', 'A language slip makes the cover story sound rehearsed instead of real', 'The physical condition doesn\'t match the story: too fit, too scarred, too something'],
        ['Someone quietly makes a call to check the references being name-dropped', 'The knowledge on display is a little too specific to be a coincidence', 'Security footage from an hour ago puts the wrong face in the wrong place', 'The timing of an arrival is a beat too convenient for anyone paying attention', 'Someone notices the questions have stopped being small talk', 'An unexpected, pointed test threatens to blow the whole cover in one stroke'],
        ['A face from an old contact turns up in the last place expected', 'The gear on hand doesn\'t match the story being told about why it\'s needed', 'Someone clocks the way a body moves when it\'s been trained to fight', 'Two versions of the same story don\'t quite match once compared', 'A routine security check turns up documentation that doesn\'t hold up', 'A reaction to bad news is a beat too calm for someone with the claimed background'],
        ['The way a room gets read gives away training no cover story explains', 'Knowing the building\'s layout too well raises exactly the wrong question', 'A stray comment lets slip a level of combat experience that doesn\'t fit the resume', 'A piece of equipment traces straight back to a source it shouldn\'t', 'Someone recognizes the car, the watch, the gear, something that doesn\'t belong to the cover', 'A single small mistake is enough to trigger a full security sweep'],
      ]
    },
    blackmail_material: {
      id: 'blackmail_material',
      name: 'Blackmail Material',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A secret affair caught on a hidden Polaroid camera', 'Embezzled charity funds funneled through a shell company\'s telex account', 'A cocaine habit paid for with laundered casino chips', 'A six-figure gambling debt owed to a Miami loan shark', 'A diploma from a university that never existed, framed on the office wall', 'A falsified service record, complete with forged medals'],
        ['A silent partnership with a known cartel financier', 'A Swiss numbered account funding a shadow real estate empire', 'Stolen research published under their own name at a televised symposium', 'Bribes paid to a zoning board, tracked on carbon-copy receipts', 'Corporate secrets sold to a rival on a stolen floppy disk', 'Toxic waste dumped upriver, buried in a redacted filing'],
        ['A botched surgery covered up with a forged malpractice settlement', 'A forged masterpiece hanging in a museum\'s featured wing', 'Insider trading tipped off by a golf-course conversation', 'Safety inspections skipped to make a shipping deadline, three dead', 'A stolen identity built from a dead infant\'s birth certificate', 'A defection across the Iron Curtain, buried by the Agency'],
        ['Grant money spent on a beach house instead of the lab', 'A dig site looted, its artifacts sold to a private overseas collector', 'Human trials run without consent at an offshore clinic', 'A merger pushed through on cooked books and a rigged appraisal', 'A seat at an Ivy League school bought with a six-figure "gift"', 'A defense contract awarded after a briefcase changed hands'],
        ['A rare manuscript quietly lifted from a university archive', 'A colleague\'s breakthrough claimed at a televised press conference', 'A witness paid off in cash and a one-way ticket out of the country', 'A medical license bought under a dead doctor\'s name', 'Elderly investors\' life savings funneled into a fake bond fund', 'An adoption record rewritten to erase an inconvenient birth mother'],
        ['A historic site bulldozed the week before its landmark hearing', 'An insurance claim padded by faking storm damage', 'State secrets sold to a foreign attaché over a five-star dinner', 'A rival\'s patent lifted from an unlocked filing cabinet', 'Antiquities smuggled out in a diplomatic pouch', 'A new identity built after a staged car explosion on a coastal highway'],
      ]
    },
    alliance_opportunities: {
      id: 'alliance_opportunities',
      name: 'Alliance Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A reformed grifter trying to make up for a decade of cons', 'A government agent working the same case from the other side of it', 'A journalist with a source too dangerous to run without backup', 'A washed-up special forces veteran itching for one more job', 'A local detective fighting corruption in a department that hates her for it', 'A corporate whistleblower who needs protection more than praise'],
        ['A rival agency\'s operative who shares an enemy, for now', 'A victim\'s relative who won\'t stop until someone pays', 'An old enemy who owes a debt they\'d rather settle than carry', 'A local fixer who knows every back road and who to bribe on it', 'A hacker running a personal vendetta against the same network', 'An undercover operative from an allied service, working the same target'],
        ['An art expert who wants the stolen piece back more than any reward', 'A doctor treating the fallout, one patient at a time', 'A pilot or captain with a vehicle and a reason to help', 'A communications specialist who\'s already tapped the right line', 'An auditor following the money with a bloodhound\'s patience', 'An activist who\'s been building a case against the same company for years'],
        ['A researcher whose obscure specialty just became essential', 'A security guard with inside access and a grudge against management', 'A defector from the very organization being investigated', 'An aid worker with local contacts that took years to build', 'A lawyer who knows exactly which jurisdiction to exploit', 'An engineer with equipment nobody else in the room has'],
        ['A local fixture with social ties everywhere that matters', 'A charter pilot who\'s flown into worse places for less reason', 'A boat captain who knows every inlet the coast guard doesn\'t', 'A mountain guide who\'s crossed this terrain a hundred times', 'A linguist who can make sense of the one document that matters', 'An archaeologist who knows this site better than the people who dug it'],
        ['A diplomat willing to bend a rule or two for the right reason', 'An executive with resources to spare and a reason to spend them', 'A celebrity whose name opens doors nobody else can', 'A community leader whose word carries more weight than any badge', 'An informant with underworld ties and a price that isn\'t always money', 'A defector trading everything they know for a way out'],
      ]
    },
    high_tech_threats: {
      id: 'high_tech_threats',
      name: 'High-Tech Threats',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A laser grid guarding the vault, invisible without smoke', 'A computer virus eating the evidence files one by one', 'A spy satellite tracking the hero\'s car from orbit', 'An electronic lock system that seals every door at once', 'Security robots patrolling the corridors on a fixed schedule', 'A radio jammer blanking every frequency in the building'],
        ['A heat-seeking missile launcher aimed at the only road out', 'A ventilation system programmed to release toxic gas', 'Microphones in every room, feeding a bank of reel-to-reel recorders', 'Factory robots reprogrammed to attack anyone on the floor', 'A satellite weapon accurate enough to hit a single rooftop', 'A computer that can take over a car\'s electronics'],
        ['Voting machines rigged to shift the results by a few points', 'An automated trading program quietly stealing millions', 'A computer worm spreading from one mainframe to the next', 'A building lockdown that traps everyone inside with the villain', 'Radar-guided missiles covering the island airstrip', 'A hijacked building computer running the elevators, lights, and doors'],
        ['A bank transfer program moving funds faster than anyone can freeze them', 'An automated security system authorized to use lethal force', 'A computer simulation that predicts the hero\'s next move', 'A signal hidden in the late-night movie, said to control minds', 'A satellite dish intercepting every phone call in the region', 'A hacked traffic control system turning every light red'],
        ['A computer that rewrites people\'s records, and their identities with them', 'An automated factory turning out weapons with no one on the payroll', 'A computer program that spots the pattern in the hero\'s movements', 'Bugs hidden in household appliances, the toaster included', 'A satellite navigation system feeding false positions to a ship', 'A computer that can black out the city\'s power grid on command'],
        ['An electronic warfare van blinding a military base', 'An automated stock program triggering a market crash', 'A weather modification program seeding storms over a target', 'A radio transmitter that can reach into a pacemaker from across the street', 'A hijacked communications satellite rerouting broadcasts worldwide', 'A defense computer that has started making its own decisions'],
      ]
    },
    communication_methods: {
      id: 'communication_methods',
      name: 'Communication Methods',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Coded personal ads in the Sunday newspaper classifieds', 'A dead drop in a payphone booth\'s coin return slot', 'A shortwave numbers station broadcasting at 0300 hours', 'A voice-scrambled call from a car phone with a foot-long antenna', 'An encrypted message left on a computer bulletin board', 'A fax transmission routed through a hotel business center'],
        ['A carrier pigeon released from a rooftop dovecote', 'CB radio chatter on an unlisted trucker\'s channel', 'A microfiche slide hidden inside a hollowed-out paperback', 'A message relayed during a scheduled car phone call on the coastal highway', 'A telex printout delivered by a courier in a trench coat', 'Morse code flashed from a lighthouse at low tide'],
        ['A coded graffiti tag under a specific overpass', 'A cassette mixtape whose track order spells out a location', 'A flower order with a florist who knows the code', 'A dog-eared paperback, folded open to a chapter number', 'A song request phoned in to a late-night radio DJ', 'A photograph negative with a message burned into the film'],
        ['A cassette left in an answering machine\'s outgoing tray', 'A floppy disk swapped hand to hand at a video arcade', 'A tailored jacket\'s lining stitched with a hidden note', 'A pizza delivery order with a coded topping list', 'A postcard in invisible ink, developed under a hotel lamp', 'A gallery opening\'s guest list arranged to signal a meeting'],
        ['A ball game\'s radio broadcast with a coded play-by-play', 'A weather report\'s temperature readings standing in for numbers', 'A magazine classified ad with a symbol only the recipient recognizes', 'A department store window display rearranged overnight', 'A library due-date stamp indicating a drop time', 'A restaurant reservation booked under a name that isn\'t anyone\'s'],
        ['A parking garage ticket stub with numbers circled in pen', 'A hotel room service order specifying an impossible combination', 'A theater ticket bought for a show that\'s already sold out', 'A gym locker combination changed to spell a message', 'A church bulletin\'s hymn numbers standing in for coordinates', 'A lecture hall booked under a false class name'],
      ]
    },
    surveillance_systems: {
      id: 'surveillance_systems',
      name: 'Surveillance Systems',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['An analog CCTV camera feeding a bank of black-and-white monitors', 'A motion-triggered floodlight wired to a silent alarm', 'An infrared scope tracking body heat down a hotel corridor', 'Pressure-sensitive floor tiles wired to a guard\'s console', 'An invisible laser tripwire strung across a vault\'s access hall', 'A parabolic microphone aimed from a van across the street'],
        ['A hidden reel-to-reel recorder splicing the phone line', 'A camera disguised inside a potted plant, triggered by motion', 'A shortwave scanner sweeping known criminal frequencies', 'Seismic sensors buried beneath a garden path', 'A trained dog sniffing luggage for explosive residue', 'A biometric palm reader guarding a research wing'],
        ['A Cold War-era spy satellite repositioned over the coastline', 'A mainframe cross-referencing behavior patterns on punch cards', 'A wiretap recording every call onto a reel of magnetic tape', 'A postal inspector steaming open suspicious mail', 'A carbon-copy imprint machine logging every credit card purchase', 'A hotel switchboard operator paid to report certain guests'],
        ['An airport X-ray conveyor scanning every checked bag', 'A border checkpoint verifying stamps under a black light', 'A bank teller flagging withdrawals over a certain threshold', 'A rental car\'s odometer cross-checked against claimed mileage', 'A maître d\' keeping a private ledger of who dines with whom', 'A hospital admissions clerk on a criminal payroll'],
        ['A university registrar tipped to report a certain student\'s schedule', 'A background-check firm with a mole inside city hall', 'An insurance adjuster paid to flag a particular claim', 'A utility company noting unusual spikes in a building\'s power draw', 'A postal carrier reporting which addresses receive foreign mail', 'An airline gate agent alerted to a specific passenger manifest'],
        ['A hotel operator logging every long-distance call from a room', 'A pit boss watching a table through a one-way mirror', 'A mall security guard tracking the same face on three cameras', 'A parking attendant noting license plates in a leather ledger', 'A harbor master\'s logbook of every boat that ties up after dark', 'A country club\'s membership secretary flagging an unfamiliar guest'],
      ]
    },
    weather_and_environment: {
      id: 'weather_and_environment',
      name: 'Weather & Environment',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A tropical squall knocking out the resort\'s satellite dish mid-broadcast', 'Fog rolling off the harbor thick enough to swallow headlights', 'A hurricane bearing down as the last flight out taxis for the runway', 'Desert heat shimmering off the hood of a car with a dead radiator', 'A blizzard burying the mountain road an hour after the pass closes', 'A heat wave so long the whole city has stopped pretending to work'],
        ['A Santa Ana wind making everyone short-tempered and every spark dangerous', 'Cold drizzle that never quite becomes rain, all night long', 'Thin mountain air making every exertion twice as hard', 'Humidity thick enough to fog camera lenses and eyeglasses alike', 'A sudden cold snap freezing a marina\'s fuel lines solid', 'Crosswinds forcing a small plane to abort its landing twice'],
        ['A perfect blue afternoon, too bright to read a dashboard in', 'A drought cracking the earth around a reservoir\'s exposed dam wall', 'Monsoon rains washing out the only bridge back to town', 'Heat lightning silhouetting the villain\'s compound on the ridge', 'Sea fog rolling in just as the speedboat clears the breakwater', 'A full moon bright enough to drive without headlights'],
        ['Wildfire smoke turning the afternoon sky the color of rust', 'A king tide swallowing the only road off the island', 'Volcanic ash grounding every flight for two hundred miles', 'Smog so thick the skyline is gone by noon', 'A sudden pressure drop that has every old-timer predicting trouble', 'Crosswinds strong enough to peel a billboard off its frame'],
        ['The trade winds dying to a dead calm, every sail in the harbor going slack', 'Morning mist lying in the valley like milk, hiding the road', 'Rain on a tin roof loud enough to cover a gunshot', 'A sticky tropical night when nobody can sleep and everyone is outside', 'The first snow of the year, and every footprint a confession', 'A red sunset over the water that tourists photograph and pilots hate'],
        ['Steam rising off the streets after a summer storm', 'A desert wind carrying fine grit into every engine and every lens', 'A week of overcast so heavy the station\'s solar panels have gone dead', 'Spring thaw turning the dirt roads into mud that swallows tires', 'Bitter cold that kills car batteries overnight', 'An eclipse darkening the afternoon over the whole coast'],
      ]
    },
    cultural_details: {
      id: 'cultural_details',
      name: 'Cultural Details',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A saint\'s day parade shutting down the only road to the airport', 'No one at the ministry speaks English after the translator cancels', 'Every shop closes for the afternoon prayer, no exceptions', 'A photograph taken at the wrong shrine draws a hard stare and a warning', 'Street food that turns out to be hotter than advertised, and worse timing', 'A brass band drowning out every attempt at a quiet conversation'],
        ['The only currency exchange window closes at noon sharp, cash only', 'A wedding party expects every stranger to join the toast', 'Centuries-old stone walls make a rooftop approach the only option', 'A seating chart that reveals who actually holds power in the room', 'The town\'s one working telex line, shared by the whole district', 'A handwoven basket hiding a shortwave radio in plain sight'],
        ['A dialect thick enough that the phrasebook is useless', 'A twelve-hour time difference throwing off every rendezvous', 'A local superstition about the number on the hotel room door', 'A festival procession providing the perfect cover, and the perfect crowd', 'Direct questions read as an insult; everything goes through a go-between', 'An election rally clogging the streets the client swore would be quiet'],
        ['A spice market\'s smoke and noise masking every tail', 'A three-day hospitality custom that makes an early exit unthinkable', 'A guest house that only rents rooms to married couples', 'A border dispute making yesterday\'s map today\'s fiction', 'A folk remedy the local doctor swears by, over any modern treatment', 'A national holiday that closes every bank and ministry for three days'],
        ['A monsoon season that reroutes every scheduled flight', 'A trade guild that still settles disputes without police involvement', 'An heirloom nobody will explain the significance of', 'A one-room schoolhouse where everyone already knows everyone\'s business', 'A traveling theater troupe that\'s really a cover for something else', 'A traditional dress code that makes a hidden holster impossible to conceal'],
        ['A border town where three currencies and two languages trade hands hourly', 'A wedding custom that requires the groom\'s family to vanish for a night', 'A funeral procession that stops all traffic for an hour', 'A local football match drawing away every off-duty policeman', 'A hunting season that puts armed men in the hills for a week', 'A harvest festival that doubles the town\'s population overnight'],
      ]
    },
    period_details: {
      id: 'period_details',
      name: 'Period Details',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Neon signs reflecting in rain-slicked streets', 'Synthesizer music pumping from a car stereo', 'A mirror on a nightclub table, and a rolled-up hundred-dollar bill', 'A personal computer with a green phosphor screen and a floppy drive', 'A VHS tape of surveillance footage, labeled as an aerobics class', 'A car phone with a coiled cord and an antenna on the trunk'],
        ['A witness who can\'t hear the question over their Walkman', 'A video arcade used as neutral ground for a meet', 'A shopping mall fountain used as a dead drop', 'An answering machine blinking with one new message', 'A cable news bulletin breaking the story before the hero is ready', 'A CD player impressing everyone at the party'],
        ['A calculator watch with an alarm set for the handoff', 'A Polaroid developing in someone\'s hand, slowly revealing a face', 'A Rubik\'s Cube used to pass a coded message', 'MTV playing silently on every TV in the bar', 'An aerobics video playing in a rich widow\'s living room', 'A microwave oven that everyone\'s still a little afraid of'],
        ['A camcorder that happened to record the crime', 'An electronic organizer holding every contact the villain has', 'A LaserDisc player in a millionaire\'s screening room', 'A cordless phone that picks up the neighbors\' calls', 'A home video game console keeping the night guard busy', 'A boom box on a shoulder, loud enough to cover a break-in'],
        ['A suspect in a Members Only jacket', 'Feathered hair that doesn\'t move, even on a speedboat', 'A corporate raider in a power suit and red suspenders', 'Tracksuits worn to a business meeting', 'Designer jeans with a label everyone can read from across the room', 'Aviator sunglasses worn day and night, indoors and out'],
        ['Shoulder pads wide enough to block a doorway', 'Parachute pants on the kid who saw everything', 'A leather jacket with the sleeves pushed up', 'Neon clothing that makes quiet surveillance impossible', 'High-top sneakers as a status symbol', 'Hair so big it takes an hour and a can of spray'],
      ]
    }
  }
};
