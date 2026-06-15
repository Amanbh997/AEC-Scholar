---
description: Build a research project plan — phases, milestones, timeline and a Gantt chart (Mermaid).
argument-hint: <project scope + duration (e.g. 36-month PhD)>
allowed-tools: Read, Write, Edit
---

Build a research project plan for: **$ARGUMENTS**

Use the **research-strategist** agent (and `research-methods`, `thesis-dissertation` where relevant).

1. **Decompose the work** into phases/work packages with a logical arc (e.g. literature & protocol → study 1
   → study 2 → integration → writing → submission/viva). Map each to its objective/RQ.

2. **Milestones & deliverables.** Define concrete milestones (protocol approved, ethics granted, data
   collected, paper 1 submitted, etc.) and deliverables per phase.

3. **Timeline.** Lay out a realistic schedule for the stated duration. **Build slack for AEC-specific risks**
   — site/data access delays, seasonal monitoring windows, ethics approval lead time, equipment/lab queues,
   and peer-review turnaround.

4. **Render a Gantt chart as Mermaid** so it displays inline, e.g.:
   ```mermaid
   gantt
     title Research Plan
     dateFormat YYYY-MM
     section Foundation
       Literature review & protocol   :a1, 2026-09, 4M
       Ethics approval                :a2, after a1, 2M
     section Study 1
       Data collection                :b1, after a2, 5M
       Analysis & paper 1             :b2, after b1, 4M
     section Integration & writing
       Synthesis & thesis             :c1, 2028-06, 6M
   ```
   (Use the user's real start date and durations; ask if unknown rather than inventing.)

5. **Risk register.** A short table of key risks, likelihood/impact, and mitigations.

6. **Dependencies & critical path.** Note what blocks what, and where delays cascade.

Deliver the plan + Gantt + risk register, and offer to track per-paper/per-WP status over time.
