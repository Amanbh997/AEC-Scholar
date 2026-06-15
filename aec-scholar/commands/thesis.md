---
description: Plan, structure, or strengthen a PhD/research thesis or dissertation in AEC.
argument-hint: <thesis topic / stage / question>
allowed-tools: Read, Write, Edit, Grep, Glob
---

Help with the thesis/dissertation: **$ARGUMENTS**

Use the **research-strategist** and **academic-writer** agents and the `thesis-dissertation` skill (plus
`research-methods`, `academic-writing`).

Determine what the user needs and respond accordingly:

1. **Format & architecture.** If structuring: recommend monograph vs compilation ("stapled"/publication-
   based) — note this is institution-specific and tell them to confirm regulations. Then propose a chapter
   architecture. For a compilation, design the paper arc (e.g. review → framework/method → empirical
   validation → application) and the all-important **synthesis ("kappa")** chapter that makes the papers one
   contribution.

2. **The golden thread.** Help articulate one central aim and a small set of RQs that **every** chapter maps
   to, plus a consistent contribution statement for intro/synthesis/conclusion.

3. **Per-chapter guidance.** For the chapter the user is working on, apply its specific job (intro gap move;
   synthesis integration; methodology; results; discussion; conclusion).

4. **Planning.** Offer a back-planned timeline with milestones and per-paper status tracking (hand to
   `/aec-scholar:research-plan`), building slack for AEC fieldwork/data-access delays.

5. **Coherence & integrity check.** Flag drift in RQs/terminology, missing synthesis, over-claimed unified
   contribution, and authorship/copyright issues for republished papers (CRediT — see
   `/aec-scholar:coauthor-credit`).

Offer to proceed to viva preparation (`/aec-scholar:viva`) when the draft is mature.
