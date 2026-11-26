# Changelog

All notable changes to Loner Assistant are documented here.

## Unreleased

### Added

- **Mech Requiem Get Inspired flavor**, now readable from the book (loner
  PR 50 gave its Verbs, Adjectives and Nouns table titles).
- **Six more Geared Towards Loner supplements**: Celtic Fantasy,
  Dungeoneer, Mech Requiem, Prime Time Hero, Rocketpunk and Spacer, with
  their random tables and, where the book has them, Get Inspired flavors.
  Dungeoneer, Mech Requiem, Prime Time Hero, Rocketpunk and Spacer are in
  the character generator (18 supplements in all).
- **Character generator for every Geared Towards Loner supplement.**
  Concepts, Skills, Frailties, Gear and the name tables of 12 more
  supplements (Arabian Nights, Cog & Compass, Cozy Fantasy, Cthulhu,
  Galaxy Drifter, Legends of Camelot, Paranormal Files, Pulp Adventures,
  Pulp Heroes, Savage Blades of Xylandra, Steel and Sorcery, Urban
  Fantasy), regenerated from their SRD texts; before, only Kwaidan had
  them. The Threads of Saga gets its name tables; its six Origins need
  their own generator. Tables added along the way: Nicknames, vehicle and
  companion traits, and the D66 tables the earlier import missed.
- **Optional modules per campaign.** A "Modules" button in the Current
  Campaign panel switches Leverage, Challenge Tracks, Status Track,
  Cinematic Action, and Time Travel on or off. Switched-off modules hide
  their panels and stop prompting (no "Bank as Leverage", no Status Track
  prompt after a defeat). The 4th Edition modules start on; the
  supplement modules start off.

### Changed

- `md_to_table.py` reads Loner 4e sources as they are: character tables
  under "### Character Traits" and "### Names" go to the character
  generator; a table with the same name as an earlier one (Spacecraft
  Traits > Concepts) is kept under its own id instead of replacing it;
  tables copied from the core rules and tables that are not full D66
  grids are left out and listed; `CACHE_VERSION` is bumped once per run;
  `--name` sets the supplement name when the file name does not give it.
  Only Concepts, Skills, Frailties, Gear and the first and family name
  tables get `category: 'character'`; Nicknames and similar stay random
  tables. A hand-written data file is left unchanged instead of being
  merged into (the old merge corrupted it).
- Module panels use shared CSS classes instead of inline styles, so
  they follow the light and dark themes consistently.
- Dice emoji removed from buttons in favor of text labels ("Generate",
  "Reroll", "Regenerate All").

### Fixed

- Pulp Heroes: removed "Document Types", a half-empty grid that is no
  longer in the book.
- The character generator lists only supplements with all four trait
  tables; Celtic Fantasy and The Threads of Saga (characters from
  Origins) keep their Concepts and names as random tables, which were
  unreachable before.
- A supplement with one Names table for everyone (Spacer) gives the
  generator a first name.
- **Horizontal scrolling on mid-size screens.** The navigation bar was
  wider than the viewport between tablet and full desktop width; it now
  compacts and, if needed, wraps. The mobile menu no longer hides the
  theme toggle.
- Checkboxes and radio buttons inside forms were stretched to full width
  and pushed their labels aside.

## v2.4.0 — 2026-11-26

### Added

- **Cinematic Action** (optional module, new Play panel):
  - *Action Points*: 3 per conflict or chase. Gain Advantage (respecting
    the dice cap: it cancels Disadvantage, and adds nothing on top of
    Advantage), Cancel a Failure (reroll the last Oracle or chase No),
    Avoid a Consequence, Do the Impossible (with its narrative price), and
    Push Yourself once per session.
  - *Chases*: the three-question framework with the optional Distant /
    Close / Caught track. Action Point Advantage guarantees one step;
    Do the Impossible puts you at Distant.
  - *Intensity*: Low / Medium / High per scene, shifted by Twists, with
    no more than three High scenes in a row.
- **Time Travel** (optional module from *The Path Not Taken*, new Play
  panel), kept per campaign:
  - *Time Loop*: Checkpoints, Loop Counter, Persist List, Wear & Tear on
    every reset, Push Ahead, the reset ritual, and the Breakthrough /
    Acceptance / Consumed endings.
  - *Time Leap*: Fixed Points, Leap Nodes with the three divergence
    questions and Temporal Drift, Paradox Stress and the Paradox Entity,
    timeline collapse with the Fallout table, Prime timeline and Paradox
    Resolution. Checkpoints inside a leap (C#@L#) are supported.
  - *Time-Web*: the timeline drawn as a graph, with node notes, tags,
    and the supplement's Oracle prompts.
- **Custom table templates**: "Start from a template" offers the *World
  Builder's Guide* D66 Random Encounters and Story Twists templates.

### Changed

- User Manual and Help panels cover the new modules and templates.
- Footer copyright updated to 2021-2026.

### Fixed

- **Service worker updates could cache stale files.** Precaching now
  bypasses the browser's HTTP cache, so a new version never stores an
  old copy of a changed file.

## v2.3.0 — 2026-11-26

### Added

- **Loner 4th Edition support.** Adopts the procedures and optional modules
  from the 4th Edition rulebook (`loner-4e.md`), replacing the previous
  2nd/3rd-edition-era mechanics.
- **Scene structure**: Framing a Scene (Where/Who/What), Closing a Scene
  (resolved/blocked/abandoned + oracle fallback), and an expanded two-step
  Meanwhile procedure.
- **Relationships**: in-play NPC relationship-tag quick-actions.
- **Dead Ends**: a fixed oracle question with branching guidance and
  consecutive-attempt tracking.
- **Twist Intensity**: contextual guidance on the twist result.
- **Three new optional modules** — Challenge Tracks, Leverage, and Status
  Track — each with its own DB schema (bumped to v4) and UI panel, wired
  into the Oracle and Conflict flows.
- **The Living World**: a post-adventure review wizard on the Campaigns view
  for updating NPCs, Locations, and Threads.
- **"Build the Setup" premise table** (5W+H) in the Adventure Maker / Get
  Inspired tables.
- **Tables from three Loner supplements**, rollable from Adventure Tables:
  - *Character Emulator*: NPC Concept, Agenda, Disposition (Stance ×
    Awareness), Voice, Faction Concept, and Cast Twists.
  - *Character Builder's Guide*: the seven Lifepath tables, What They Want,
    the three Relationship Arc tables, Memory Triggers, False Memory, and
    the four Interpersonal Scene Frames.
  - *The Path Not Taken*: Time Twist Effects.
- **Cast List fields on NPCs** (*Character Emulator*): Agenda, Disposition,
  Voice, and Last Seen, plus a Faction flag. Concept, Agenda, Disposition,
  and Voice each have a Roll button for Quick-Build (Concept rolls on the
  Faction Concept table for factions).
- **Faction Beats**: after a Scene Transition (or from the Meanwhile prompt
  when an organization holds power), roll whether a faction advances its
  Agenda, at most once per transition. The result goes in its Last Seen;
  equal dice count toward the Twist as usual.
- **Cast Twists**: when a Twist fires on a roll about an NPC, roll the Cast
  Twists table from the Twist panel instead of the standard Twist.
- **Lifepath fragments and Marks** (*Character Builder's Guide*) on the
  character sheet, with Identity Checkpoint prompts. The Character Generator
  rolls a Lifepath fragment for new PCs.

### Changed

- Adventure Maker / Get Inspired table content corrected to match 4e exactly
  (Opposition, Actions, Things Variants B/C, Verb/Adjective/Noun grids).
- `CLAUDE.md` / `README.md` repointed from the old `loner-en.md` rulebook to
  the new `loner-4e.md`.
- **In-app User Manual updated** for 4th Edition play (scene framing and
  closing, Scene Transition and Meanwhile, Dead Ends, the optional
  modules, Relationships, The Living World, Build the Setup) and the new
  supplement tools. Its Scene section no longer describes the old
  Expected/Altered/Interrupted roll, and Get Inspired is now described as
  Verb + Adjective + Noun.
- **Help panels ("?") updated** to match: new Play entries (Scene Frame,
  Dead End, Scene Transition, Leverage & Challenge Tracks), The Living
  World on Campaigns, Lifepath & Marks on Characters, and Quick-Build and
  Factions on NPCs. Entries describing fields and filters the app doesn't
  have (character Background/Tags, Friendly/Hostile/Complex relationships)
  now describe the actual forms.

### Fixed

- Undefined `--info` / `--bg-primary` CSS variables.
- An unescaped NPC tag list.
- An inconsistent status badge on campaign cards.
- **Doubled oracle rolls of 4-4/5-5/6-6 in a Conflict** were scored as
  critical hits/failures (3 damage) instead of complications (1 damage) -
  an equal roll is always "Yes, but..." regardless of the dice values.
- **"No, but..." Dead End results** never triggered their softer guidance
  text; every soft dead end was treated as a hard one.
- **Luck no longer carries over between Conflicts.** It now resets to full
  on the character's sheet, not just in memory, when a Conflict ends.
- **The Living World now handles NPCs who are gone.** The NPC "Update"
  prompt lets you remove individual relationship tags or mark an NPC as
  gone/permanently inaccessible, which clears their tags from active play
  while keeping a record in their notes.
- **Closing a Scene's oracle fallback** ("Has this scene run its course?")
  now interprets its own result: a Yes of any kind closes the scene and
  rolls the Scene Transition automatically; a No leaves the scene open.
- **Leverage can now prevent a Challenge Track box from being erased.**
  Erasing a box while Leverage is held offers to spend it instead, so the
  result becomes No, but... and no box is lost.

## v2.2.0 — 2026-07-23

### Added

- **Character Generator.** Roll a full character from a supplement's character
  tables: name (Female / Male / Any), concept, two skills, a frailty, and two
  pieces of gear (the Loner starting loadout). Each line can be rerolled
  individually, or the whole character regenerated. Pick the source supplement
  from the modal. Save as a **PC** (pre-fills the character sheet) or an **NPC**
  (creates an NPC and drops a summary into the session notes). Available from
  the Characters view, the NPCs view (opens straight into NPC mode), and the
  Play page's Active Character panel.
- **Character tables for the Kwaidan supplement** (concepts, skills, frailties,
  gear, and gendered name/surname tables), authored in markdown and converted
  with `md_to_table.py`.
- **Frailty and Gear on the Play page** — shown in the Active Character panel so
  you don't have to open the full sheet to see or update them.

### Changed

- **NPC sheets now conform to the character sheet.** NPCs carry the same core
  Loner traits — concept, skills, frailty, gear — plus an NPC relationship and a
  free-form Notes field, with skills/gear shown as chips. Older/imported NPCs
  that only had a description and tags still display correctly.
- **`md_to_table.py` reworked.** Parses multi-section markdown
  (`## Character Traits` / `## Names` / `## Adventure Tables`), routes each table
  to the right category (character / random-tables / get-inspired), reuses an
  existing supplement's id when the target file is already registered (so
  character tables land in the *same* supplement), and **merges** into an
  existing file instead of overwriting — tables not present in the markdown are
  preserved.

### Fixed

- **Twist counter now persists across sessions.** It is tracked per campaign
  (a story-wide tension gauge) instead of per session, so switching or starting
  a new session no longer resets it to zero.

## v2.1.0

- Baseline: campaigns, sessions, tag-based character sheets, Oracle & dice,
  twist counter, NPCs / locations / threads / events, rich-text session notes,
  Adventure Maker, Get Inspired, random tables and supplements, offline-first
  PWA.
