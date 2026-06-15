---
description: Prepare a conference submission — extended abstract, full paper, or talk — for an AEC venue.
argument-hint: <topic / paper> [--type abstract|paper|talk] [venue]
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

Prepare a conference submission for: **$ARGUMENTS**

Use the **academic-writer** agent, with `academic-writing`, `presentation-poster`, `aec-journals`
(for venues like ISARC, CIB W78, ASCE CRC, EG-ICE, eCAADe, IBPSA) and `aec-domains`.

Detect the `--type` (default: infer from context):

- **Extended abstract** — a tight, self-contained mini-paper: problem, gap, method, key (real) results,
  contribution, within the venue's word/page limit. Concrete, no padding.

- **Full conference paper** — IMRaD scaled to the venue's page limit; lead with the contribution, keep
  methods reproducible but concise, figure-led results. Note that AEC conference papers (ISARC etc.) are
  often archival and citable — treat with the same rigor as a short journal paper.

- **Talk** — build the presentation: narrative (hook → gap → approach → key results → so-what → takeaway),
  slide-by-slide outline with point-first headlines, timing to the exact slot, anticipated Q&A + backup
  slides (see `presentation-poster`).

For any type:
- Confirm/flag the **target venue's** format, length and deadline (tell the user to verify on the venue site;
  don't assert dates).
- Keep all results truthful to the work; insert `[CITATION NEEDED]` rather than inventing references.
- Offer follow-ons: `/aec-scholar:poster`, `/aec-scholar:title-keywords`, `/aec-scholar:figure`.
