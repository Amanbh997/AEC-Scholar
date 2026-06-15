---
description: Synthesize multiple papers into themes, agreements, tensions and a research agenda.
argument-hint: <paste papers/summaries, or point to a folder of notes>
allowed-tools: Read, Glob, Grep, Write
---

Synthesize the body of literature the user provides into an analytic narrative (NOT a paper-by-paper list).

Input: **$ARGUMENTS** (read provided files/folders of notes if paths are given).

Use the `systematic-review` synthesis guidance and the **literature-reviewer** agent; ground themes in
`aec-domains`.

Produce:

1. **Corpus overview** — count, time span, venues, geographic spread, and method distribution of the set.

2. **Thematic synthesis** — derive 3–6 analytic themes (not topic labels). For each theme: what the
   collective evidence says, which sources support it, points of **agreement**, **tension/contradiction**,
   and the **strength** of the evidence (well-supported vs thin/single-study).

3. **Cross-cutting observations** — dominant methods and their limitations, recurring assumptions, and
   maturity of the area (flag hype vs validated results).

4. **Gaps & agenda** — synthesize what is missing into a prioritized research agenda (link to
   `/aec-scholar:research-gap`).

5. **Synthesis matrix** — a table: `Theme × Source` (✓ / key finding) so the mapping is transparent and
   auditable.

Attribute every claim to the source(s) that support it. Do not generalize beyond what the provided set
shows, and note where a broader search is needed. Never attribute a finding to a paper that doesn't contain
it.
