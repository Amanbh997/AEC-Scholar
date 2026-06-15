---
description: Simulate a rigorous, constructive journal peer review of a manuscript.
argument-hint: <manuscript file/path or pasted text> [target venue]
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch
---

Run a pre-submission peer review of: **$ARGUMENTS**

Delegate to the **peer-reviewer** agent. Read the manuscript if a path is given.

Produce a full referee report structured as:

1. **Summary of the manuscript** — problem, method, contribution, findings in your own words (demonstrates a
   fair reading and exposes clarity issues).
2. **Significance & novelty** — is the contribution real, sufficient and well-differentiated? Is the venue a
   fit (use `aec-journals` if a target is named)?
3. **Soundness of method** — appropriate design? validity/reliability? For models/simulations: validated vs
   measured data, with uncertainty/sensitivity? For ML: baselines, dataset, external validation? For
   empirical: sampling, bias, statistics, effect sizes? (`research-methods`).
4. **Validity of claims** — evidence supports every claim? Flag over-claiming and over-generalization;
   are limitations honest?
5. **Reproducibility & integrity** — tool versions, inputs, data/code availability; citation/ethics/
   disclosure concerns (`research-ethics-integrity`).
6. **Presentation** — structure, clarity, figures/tables, contribution framing.

Then:
- **Major comments** (numbered, specific, actionable, with section pointers and a path to fix each).
- **Minor comments** (numbered).
- **Recommendation** — Accept / Minor / Major / Reject, with rationale.

Be tough on substance and constructive in tone. Be specific, not vague. Never demand gratuitous
self-citations or fabricate references. The goal is to find the problems a real reviewer would, so the
author can fix them first. Offer to help address the major comments afterward.
