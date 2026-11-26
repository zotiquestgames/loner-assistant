# Changelog

All notable changes to Loner Assistant are documented here.

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

### Changed

- Adventure Maker / Get Inspired table content corrected to match 4e exactly
  (Opposition, Actions, Things Variants B/C, Verb/Adjective/Noun grids).
- `CLAUDE.md` / `README.md` repointed from the old `loner-en.md` rulebook to
  the new `loner-4e.md`.

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
