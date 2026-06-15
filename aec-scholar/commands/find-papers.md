---
description: Build database search strings and find real, verifiable papers on an AEC topic.
argument-hint: <topic or question> [--databases scopus,wos,...]
allowed-tools: WebSearch, WebFetch, Read, Write
---

Help the user discover literature on: **$ARGUMENTS**

Use the `aec-domains` skill for synonym-rich terminology and the `aec-journals` skill to choose databases.

Do the following:

1. **Concept analysis.** Break the topic into 2–4 concept blocks and list synonyms/variants for each
   (accounting for AEC terminology fragmentation, e.g. BIM ↔ "building information model*").

2. **Search strings.** Produce copy-pasteable Boolean strings tailored to each requested database
   (default: Scopus + Web of Science; add Google Scholar/Semantic Scholar/OpenAlex for recall). Use correct
   field tags, truncation and phrase quoting per database. Suggest sensible filters (years, document type,
   subject area) and recommend backward/forward snowballing.

3. **Find real sources.** Using web search, locate **actual, verifiable** papers (with title, authors, year,
   venue and DOI where available). Prefer the leading AEC venues from `aec-journals`. For each, give a
   one-line relevance note. Clearly separate sources you verified from suggested search avenues you did not.

4. **Hand-off.** Offer to format the found references (any style) via the **citation-manager** agent / `cite`
   command, or to feed them into `/aec-scholar:lit-review`.

**Integrity:** never fabricate a paper, author, venue or DOI. If you cannot confirm a source exists, do not
present it as real — say what to search instead. State that the user should verify each item against the
DOI/publisher page.
