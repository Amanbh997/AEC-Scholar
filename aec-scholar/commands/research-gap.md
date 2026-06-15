---
description: Identify defensible research gaps and a research agenda in an AEC topic area.
argument-hint: <topic area> [+ paste key literature if available]
---

Identify research gaps for: **$ARGUMENTS**

Use the **aec-domain-expert** agent and the `aec-domains` skill. If the user pasted papers/abstracts or a
prior review, ground the analysis in them; otherwise reason from the field's known state and be explicit that
the user must validate against a real search.

Produce:

1. **State of the art (brief).** What is reasonably well established in this area.

2. **Gap taxonomy.** Classify candidate gaps by type:
   - *Evidence gaps* (contradictory or insufficient findings),
   - *Knowledge/theoretical gaps* (unexplained mechanisms, missing frameworks),
   - *Methodological gaps* (weak validation, single-case over-generalization, small/biased datasets — AEC's
     chronic weaknesses),
   - *Population/context gaps* (untested building types, regions, project scales, climates),
   - *Practical/implementation gaps* (technically shown but not adoption-tested),
   - *Intersection gaps* (cross-field combinations — e.g. BIM×LCA, vision×safety, generative design×embodied
     carbon, LLMs×compliance checking; pull from `aec-domains`).

3. **Prioritized agenda.** For the 3–5 most promising gaps, give: a sharp problem statement, why it matters
   (scholarly + industry), feasibility, likely method (link to `research-methods`), and a candidate venue
   (`aec-journals`). Favor defensible, under-crowded gaps over hype.

4. **Next step.** Offer to turn a chosen gap into research questions (`/aec-scholar:research-question`) or a
   methodology (`/aec-scholar:methodology`).

**Integrity:** distinguish gaps you can support from the literature versus hypotheses to verify. Don't claim
"no one has studied X" without basis — say "a targeted search is needed to confirm the gap" and specify it.
