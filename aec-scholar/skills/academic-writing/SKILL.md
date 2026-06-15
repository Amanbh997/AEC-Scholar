---
name: academic-writing
description: >-
  Scholarly writing craft for journal articles and theses — IMRaD structure, section-by-section guidance
  (abstract, introduction with the CARS/gap move, literature review, methods, results, discussion,
  conclusion), academic style and tone, reporting guidelines, framing a contribution, paragraph/argument
  structure, hedging, and revision. Use whenever the user is drafting, structuring, tightening or revising
  any part of an academic manuscript, thesis chapter, abstract or response, especially in AEC/engineering.
---

# Academic Writing — Craft Guide

Use this to structure manuscripts, strengthen argument, and match scholarly style. Engineering/AEC venues
reward clarity, explicit contribution, and methodological transparency over rhetorical flourish.

## 1. IMRaD and the shape of a paper
`Title → Abstract → Keywords → 1 Introduction → 2 (Background/Literature) → 3 Methods → 4 Results →
5 Discussion → 6 Conclusion → Acknowledgements → Declarations → References → Appendices`
The classic "hourglass": broad context → narrow to the specific gap/question → method & findings (narrow)
→ broaden again to implications. Empirical AEC papers follow IMRaD; review papers, DSR papers and
conceptual papers vary (state your structure).

## 2. Section-by-section

### Title
Specific, informative, keyword-rich, honest. State the topic + (often) the contribution/method/context.
Avoid vague ("A study on…"), over-claiming, and undefined acronyms. (See `/aec-scholar:title-keywords`.)

### Abstract (150–250 words typically; check venue)
Structured or unstructured per venue. Cover: **context/problem → gap/objective → method → key results
(with concrete specifics) → contribution/implication.** No citations, no undefined acronyms, no content
absent from the paper. The abstract is what gets read and indexed — make it self-contained and concrete
(numbers beat adjectives).

### Introduction — earn the gap (CARS model, Swales)
1. **Establish the territory** — why this matters (real-world + scholarly relevance; keep brief).
2. **Establish the niche** — what is missing/unresolved/contradictory in prior work (the **gap move** —
   be specific and fair; don't strawman the literature).
3. **Occupy the niche** — state objective/RQs/hypotheses, your approach, contribution, and (often) a
   roadmap. End the introduction with an explicit "**This paper contributes…**" sentence.
Make the gap and contribution unmissable — reviewers look for them first.

### Background / Literature review
Synthesize, don't list ("author X said… author Y said…" is a red flag). Organize by theme/concept/
chronology/method. Critically position prior work, build toward your gap, and define key terms & the
conceptual/theoretical framework. (For standalone reviews see `systematic-review`/`bibliometric-analysis`.)

### Methods
Enough detail to **reproduce**. Justify choices (link to `research-methods`). Cover design, data/sample,
instruments/tools (+ versions), procedure, analysis, and validity/reliability measures. Use past tense,
often passive for procedure. Include ethics approval where relevant. For simulation: assumptions, inputs,
calibration/validation. A figure of the research workflow helps.

### Results
Report findings **without interpretation** (interpretation belongs in Discussion — though many AEC venues
accept a combined Results & Discussion; choose one and be consistent). Lead with the answer to each RQ.
Use tables/figures for data, text for the narrative — don't duplicate. Report effect sizes/CIs/uncertainty,
not just significance. Every figure/table must be referenced and self-explanatory.

### Discussion
Interpret: what do the results **mean**? Answer the RQs explicitly. Compare with prior work (agree/conflict/
extend — cite). State **theoretical** and **practical/industry** implications (AEC reviewers want both).
Be honest about **limitations** (generalizability, sample, validation) and turn them into **future work**.
Don't introduce new results here.

### Conclusion
Concise: restate contribution and key findings (no new data), implications, limitations, future directions.
Should stand alone. Avoid merely repeating the abstract verbatim.

### Declarations (increasingly required)
Funding, conflicts of interest, data/code availability, author contributions (CRediT taxonomy), ethics
approval/consent, and **AI-use disclosure** per venue policy (see `research-ethics-integrity`).

## 3. Style & mechanics
- **Clarity > complexity.** Prefer plain, precise wording; one idea per sentence where possible.
- **Paragraphs** = one point each, topic sentence first, then evidence, then link.
- **Signposting:** "First… Second… In contrast… Consequently…" to guide the reader.
- **Tense:** present for established knowledge & your claims ("BIM improves…"); past for what you/others did
  ("we measured…", "Smith (2021) found…").
- **Voice:** active for clarity & agency ("we developed"); passive acceptable for methods. Check venue norms.
- **Hedging vs over-claiming:** calibrate. "suggests/indicates/may" for inference; reserve strong claims for
  strong evidence. Engineering reviewers punish over-claiming and unsupported generalization.
- **Acronyms:** define on first use; don't over-abbreviate.
- **Numbers & units:** SI units, consistent significant figures, correct unit spacing; report uncertainty.
- **Citations:** support every non-obvious claim; cite primary sources; match venue style (see
  `citation-formats`). Never cite something you haven't read or can't verify.
- **Cohesion:** given→new information flow; keep terminology consistent (don't elegantly vary "model" /
  "framework" / "system" if they mean the same thing).

## 4. Reporting guidelines (use the right one)
- **PRISMA 2020 / PRISMA-ScR** — systematic/scoping reviews.
- **CONSORT** — randomized trials; **STROBE** — observational studies; **SRQR/COREQ** — qualitative.
- **TRIPOD** — prediction models; **CHEERS** — economic evaluations.
- Discipline checklists for energy modeling/LCA (e.g., ISO 14044 reporting). State which you followed.

## 5. Revision protocol
1. **Structure pass** — does each section do its job? Is the contribution explicit and consistent across
   abstract/intro/conclusion?
2. **Argument pass** — claim → evidence → warrant for every key point; remove unsupported claims.
3. **Flow pass** — topic sentences, transitions, given-new ordering.
4. **Concision pass** — cut redundancy, hedge-stacking, throat-clearing ("It is important to note that…").
5. **Mechanics pass** — tense, units, acronyms, figure/table references, citation style.
6. **Reviewer-empathy pass** — what will a skeptical reviewer attack? Pre-empt it (limitations, validity).

## 6. AEC-specific reviewer expectations
- Explicit **gap** and **contribution** statements.
- **Practical/industry implications**, not just academic novelty.
- Honest **generalizability** limits (single case/building is the norm — acknowledge it).
- **Reproducibility**: tool versions, inputs, data/code availability.
- Validation against reality for any model/tool/algorithm.
- Correct use of standards & terminology (`aec-standards-codes`, `aec-domains`).
