---
description: Draft or restructure a manuscript section (intro, methods, results, discussion, etc.).
argument-hint: <section name> -- <your notes/material>
allowed-tools: Read, Write, Edit
---

Draft or improve a manuscript section. Request: **$ARGUMENTS**

Use the **academic-writer** agent and the `academic-writing` skill (and `aec-domains`/`research-methods` for
domain and method accuracy).

1. **Identify the section** (Introduction, Background/Lit review, Methods, Results, Discussion, Conclusion,
   or a thesis chapter) and apply its specific job:
   - *Introduction:* CARS move — territory → niche/**gap** → occupy; end with an explicit "This paper
     contributes…".
   - *Background:* synthesize thematically, define the framework, build toward the gap.
   - *Methods:* reproducible detail + justification + validity/ethics.
   - *Results:* findings without interpretation; lead with the answer to each RQ; numbers + uncertainty.
   - *Discussion:* interpret, compare with prior work, theoretical + practical/industry implications,
     honest limitations → future work.
   - *Conclusion:* restate contribution & key findings, no new data.

2. **Draft from the user's material.** Use only the facts, data and sources the user provides. Where a claim
   needs a citation the user hasn't supplied, insert `[CITATION NEEDED: …]` rather than inventing one.

3. **Enforce style.** Clarity, claim→evidence→warrant, correct tense/voice, SI units with uncertainty,
   consistent terminology, defined acronyms, calibrated hedging (no over-claiming), and AEC reviewer
   expectations (explicit contribution, practical implications, generalizability limits, reproducibility).

4. **Return** the drafted section plus a brief note of (a) the key edits/choices and (b) every place the
   author must supply evidence, data, or a citation.

**Integrity:** never fabricate data, results, or references. You are drafting *the author's* argument from
*the author's* material — flag every gap that only they can fill.
