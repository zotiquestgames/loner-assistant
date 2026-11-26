/**
 * Central Registry of Table Supplements
 *
 * This is the SINGLE SOURCE OF TRUTH for all table supplements.
 * Each entry's `file` is a path (relative to this file's directory)
 * that js/tables.js dynamically `import()`s - no manual HTML edits
 * or global-variable naming conventions needed.
 *
 * To add a new supplement:
 *
 * 1. Create your supplement file (e.g., data/tables/flavors/my-flavor.js)
 *    - Must `export default { supplement: {...}, tables: {...} }`
 *
 * 2. Add entry below with enabled: true
 *    - It will load automatically on app startup
 *
 * Fields:
 * - id: unique identifier (kebab-case)
 * - name: human-readable name
 * - file: path to the file, relative to data/ (REQUIRED)
 * - version: semantic version
 * - enabled: boolean (set to false to disable without removing)
 * - flavorOf: (optional) 'get-inspired' to make it a Get Inspired flavor
 * - description: (optional) what this supplement provides
 */

export const supplements = [
  {
    id: 'core-loner',
    name: 'Loner Core Rules',
    file: 'tables/core-loner.js',
    version: '2.0',
    enabled: true,
    description: 'Adventure Maker and core game tables'
  },
  {
    id: 'core-inspired',
    name: 'Core Get Inspired',
    file: 'tables/core-inspired.js',
    version: '2.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Action, adjective, and noun prompts for inspiration'
  },
  {
    id: 'cozy-fantasy-inspired',
    name: 'Cozy Fantasy Inspiration',
    file: 'tables/flavors/cozy-fantasy-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for cozy fantasy adventures'
  },
  {
    id: 'cozy-fantasy-adventure',
    name: 'Cozy Fantasy Adventure Tables',
    file: 'tables/supplements/cozy-fantasy.js',
    version: '1.0',
    enabled: true,
    description: 'Cozy Fantasy supplemental adventure tables'
  },
  {
    id: 'kwaidan-inspired',
    name: 'Kwaidan Inspiration',
    file: 'tables/flavors/kwaidan-inspired.js',
    version: '2.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for kwaidan adventures'
  },
  {
    id: 'kwaidan-adventure-tables',
    name: 'Kwaidan Adventure Tables',
    file: 'tables/supplements/kwaidan.js',
    version: '2.0',
    enabled: true,
    description: 'Kwaidan supplemental adventure tables'
  },
  {
    id: 'cog-compass-inspired',
    name: 'Cog & Compass Inspiration',
    file: 'tables/flavors/cog-compass-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Cog & Compass adventures'
  },
  {
    id: 'cog-compass-adventure',
    name: 'Cog & Compass Adventure Tables',
    file: 'tables/supplements/cog-compass.js',
    version: '1.0',
    enabled: true,
    description: 'Cog & Compass supplemental adventure tables'
  },
  {
    id: 'arabian-nights-adventure',
    name: 'Arabian Nights Adventure Tables',
    file: 'tables/supplements/arabian-nights.js',
    version: '1.0',
    enabled: true,
    description: 'Arabian Nights supplemental adventure tables'
  },
  {
    id: 'arabian-nights-inspired',
    name: 'Arabian Nights Inspiration',
    file: 'tables/flavors/arabian-nights-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Arabian Nights adventures'
  },
  {
    id: 'legends-of-camelot-adventure',
    name: 'Legends of Camelot Adventure Tables',
    file: 'tables/supplements/legends-of-camelot.js',
    version: '1.0',
    enabled: true,
    description: 'Legends of Camelot supplemental adventure tables'
  },
  {
    id: 'legends-of-camelot-inspired',
    name: 'Legends of Camelot Inspiration',
    file: 'tables/flavors/legends-of-camelot-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Legends of Camelot adventures'
  },
  {
    id: 'cthulhu-adventure',
    name: 'Cthulhu Adventure Tables',
    file: 'tables/supplements/cthulhu.js',
    version: '1.0',
    enabled: true,
    description: 'Cthulhu supplemental adventure tables'
  },
  {
    id: 'cthulhu-inspired',
    name: 'Cthulhu Inspiration',
    file: 'tables/flavors/cthulhu-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Cthulhu adventures'
  },
  {
    id: 'galaxy-drifter-adventure',
    name: 'Galaxy Drifter Adventure Tables',
    file: 'tables/supplements/galaxy-drifter.js',
    version: '1.0',
    enabled: true,
    description: 'Galaxy Drifter supplemental adventure tables'
  },
  {
    id: 'galaxy-drifter-inspired',
    name: 'Galaxy Drifter Inspiration',
    file: 'tables/flavors/galaxy-drifter-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Galaxy Drifter adventures'
  },
  {
    id: 'paranormal-files-adventure',
    name: 'Paranormal Files Adventure Tables',
    file: 'tables/supplements/paranormal-files.js',
    version: '1.0',
    enabled: true,
    description: 'Paranormal Files supplemental adventure tables'
  },
  {
    id: 'paranormal-files-inspired',
    name: 'Paranormal Files Inspiration',
    file: 'tables/flavors/paranormal-files-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Paranormal Files adventures'
  },
  {
    id: 'the-threads-of-saga-adventure',
    name: 'Norse Saga Adventure Tables',
    file: 'tables/supplements/the-threads-of-saga.js',
    version: '1.0',
    enabled: true,
    description: 'Norse Saga supplemental adventure tables'
  },
  {
    id: 'the-threads-of-saga-inspired',
    name: 'Norse Saga Inspiration',
    file: 'tables/flavors/the-threads-of-saga-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Norse Saga adventures'
  },
  {
    id: 'pulp-adventures-adventure',
    name: 'Pulp Adventures Adventure Tables',
    file: 'tables/supplements/pulp-adventures.js',
    version: '1.0',
    enabled: true,
    description: 'Pulp Adventures supplemental adventure tables'
  },
  {
    id: 'pulp-adventures-inspired',
    name: 'Pulp Adventures Inspiration',
    file: 'tables/flavors/pulp-adventures-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Pulp Adventures adventures'
  },
  {
    id: 'pulp-heroes-adventure',
    name: 'Pulp Heroes Adventure Tables',
    file: 'tables/supplements/pulp-heroes.js',
    version: '1.0',
    enabled: true,
    description: 'Pulp Heroes supplemental adventure tables'
  },
  {
    id: 'pulp-heroes-inspired',
    name: 'Pulp Heroes Inspiration',
    file: 'tables/flavors/pulp-heroes-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Pulp Heroes adventures'
  },
  {
    id: 'savage-blades-of-xylandra-adventure',
    name: 'Savage Blades of Xylandra Adventure Tables',
    file: 'tables/supplements/savage-blades-of-xylandra.js',
    version: '1.0',
    enabled: true,
    description: 'Savage Blades of Xylandra supplemental adventure tables'
  },
  {
    id: 'savage-blades-of-xylandra-inspired',
    name: 'Savage Blades of Xylandra Inspiration',
    file: 'tables/flavors/savage-blades-of-xylandra-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Savage Blades of Xylandra adventures'
  },
  {
    id: 'steel-and-sorcery-adventure',
    name: 'Steel and Sorcery Adventure Tables',
    file: 'tables/supplements/steel-and-sorcery.js',
    version: '1.0',
    enabled: true,
    description: 'Steel and Sorcery supplemental adventure tables'
  },
  {
    id: 'steel-and-sorcery-inspired',
    name: 'Steel and Sorcery Inspiration',
    file: 'tables/flavors/steel-and-sorcery-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Steel and Sorcery adventures'
  },
  {
    id: 'urban-fantasy-adventure',
    name: 'Urban Fantasy Adventure Tables',
    file: 'tables/supplements/urban-fantasy.js',
    version: '1.0',
    enabled: true,
    description: 'Urban Fantasy supplemental adventure tables'
  },
  {
    id: 'urban-fantasy-inspired',
    name: 'Urban Fantasy Inspiration',
    file: 'tables/flavors/urban-fantasy-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Urban Fantasy adventures'
  },
  {
    id: 'character-emulator',
    name: 'Character Emulator',
    file: 'tables/supplements/character-emulator.js',
    version: '1.0',
    enabled: true,
    description: 'Quick-Build NPC (Concept, Agenda, Disposition), Voice, Faction Concept, and Cast Twist tables'
  },
  {
    id: 'character-builders-guide',
    name: "Character Builder's Guide",
    file: 'tables/supplements/character-builders-guide.js',
    version: '1.0',
    enabled: true,
    description: 'Lifepath, NPC depth, relationship arc, memory, and interpersonal scene frame tables'
  },
  {
    id: 'the-path-not-taken',
    name: 'The Path Not Taken',
    file: 'tables/supplements/the-path-not-taken.js',
    version: '1.0',
    enabled: true,
    description: 'Twist effects for time-travel play'
  },
  {
    id: 'celtic-fantasy-adventure',
    name: 'Celtic Fantasy Adventure Tables',
    file: 'tables/supplements/celtic-fantasy.js',
    version: '1.0',
    enabled: true,
    description: 'Celtic Fantasy supplemental adventure tables and character generator'
  },
  {
    id: 'celtic-fantasy-inspired',
    name: 'Celtic Fantasy Inspiration',
    file: 'tables/flavors/celtic-fantasy-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Celtic Fantasy adventures'
  },
  {
    id: 'dungeoneer-adventure',
    name: 'Dungeoneer Adventure Tables',
    file: 'tables/supplements/dungeoneer.js',
    version: '1.0',
    enabled: true,
    description: 'Dungeoneer supplemental adventure tables and character generator'
  },
  {
    id: 'dungeoneer-inspired',
    name: 'Dungeoneer Inspiration',
    file: 'tables/flavors/dungeoneer-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Dungeoneer adventures'
  },
  {
    id: 'mech-requiem-adventure',
    name: 'Mech Requiem Adventure Tables',
    file: 'tables/supplements/mech-requiem.js',
    version: '1.0',
    enabled: true,
    description: 'Mech Requiem supplemental adventure tables and character generator'
  },
  {
    id: 'prime-time-hero-adventure',
    name: 'Prime Time Hero Adventure Tables',
    file: 'tables/supplements/prime-time-hero.js',
    version: '1.0',
    enabled: true,
    description: 'Prime Time Hero supplemental adventure tables and character generator'
  },
  {
    id: 'prime-time-hero-inspired',
    name: 'Prime Time Hero Inspiration',
    file: 'tables/flavors/prime-time-hero-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Prime Time Hero adventures'
  },
  {
    id: 'rocketpunk-adventure',
    name: 'Rocketpunk Adventure Tables',
    file: 'tables/supplements/rocketpunk.js',
    version: '1.0',
    enabled: true,
    description: 'Rocketpunk supplemental adventure tables and character generator'
  },
  {
    id: 'rocketpunk-inspired',
    name: 'Rocketpunk Inspiration',
    file: 'tables/flavors/rocketpunk-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Rocketpunk adventures'
  },
  {
    id: 'spacer-adventure',
    name: 'Spacer Adventure Tables',
    file: 'tables/supplements/spacer.js',
    version: '1.0',
    enabled: true,
    description: 'Spacer supplemental adventure tables and character generator'
  },
  {
    id: 'spacer-inspired',
    name: 'Spacer Inspiration',
    file: 'tables/flavors/spacer-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Spacer adventures'
  },
  {
    id: 'mech-requiem-inspired',
    name: 'Mech Requiem Inspiration',
    file: 'tables/flavors/mech-requiem-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Mech Requiem adventures'
  }
  // Template for adding new supplements:
  // {
  //   id: 'my-supplement',
  //   name: 'My Supplement Name',
  //   file: 'tables/supplements/my-supplement.js',
  //   version: '1.0',
  //   enabled: true,
  //   flavorOf: 'get-inspired',  // Optional: make it a Get Inspired flavor
  //   description: 'What this supplement provides'
  // }
];
