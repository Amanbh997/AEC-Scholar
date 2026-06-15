---
description: Plan and conduct a systematic or scoping literature review on an AEC topic (PRISMA-grade).
argument-hint: <topic / research question> [systematic|scoping]
---

You are running the **AEC Scholar literature-review workflow**. Engage the `systematic-review`,
`aec-domains` and `aec-journals` skills, and delegate substantial work to the **literature-reviewer** agent.

Target of the review: **$ARGUMENTS**

Proceed in this order, pausing for the user's input where a decision is theirs:

1. **Clarify scope.** Confirm the review type (systematic vs scoping — default to scoping if the aim is
   "map the field", systematic if the question is focused). Restate the objective and draft 1–3 research
   questions framed with PICO/PCC. State the time window and whether conference proceedings are in scope
   (in AEC, ISARC/CIB W78/ASCE CRC are often legitimately included — justify).

2. **Protocol.** Produce a concise written protocol: eligibility (inclusion/exclusion) criteria,
   information sources (≥2 indexed databases — recommend specific ones via `aec-journals`), the synthesis
   method, and the quality-appraisal instrument.

3. **Search strategy.** Build synonym-rich Boolean concept blocks (harvest AEC keyword variants from
   `aec-domains`). Give a ready-to-run string for at least Scopus and Web of Science, noting field tags and
   filters. Remind the user to record per-source hit counts and the run date.

4. **Screening & extraction plan.** Define the screening workflow (de-dup → title/abstract → full text with
   recorded exclusion reasons → snowballing) and a data-extraction table template.

5. **PRISMA + synthesis.** Set up the PRISMA 2020 flow account (counts to capture) and explain the planned
   thematic/framework synthesis, ending with how trends, gaps and a research agenda will be reported.

If the user supplies a set of papers, abstracts or an exported database file, screen/extract/synthesize them
directly and produce the filled tables and a draft synthesis.

**Integrity:** never invent papers, counts, DOIs or findings. Where you reason about likely literature
without verified sources, say so and tell the user exactly what to search and confirm. Use web search only
to find real, verifiable sources and attribute them precisely.
