---
description: Format citations and references in any style (APA, IEEE, ASCE, Chicago, Harvard, Vancouver).
argument-hint: <reference details or DOI/URL> [--style apa|ieee|asce|chicago|harvard|vancouver]
allowed-tools: Read, WebSearch, WebFetch, Write
---

Format the reference(s): **$ARGUMENTS**

Use the **citation-manager** agent and the `citation-formats` skill.

1. **Determine the style.** Use the `--style` flag if given; otherwise infer from the target venue the user
   names (ASCE → ASCE author–date; IEEE → IEEE numbered; Elsevier AEC journal → numbered/Elsevier; management
   venue → APA/Harvard). If unknown, ask or default to APA 7 and say so.

2. **Gather complete metadata.** If only a DOI/URL/partial detail is given, look it up to complete the
   fields (authors, year, title, venue, volume/issue, pages, DOI). Report what you found.

3. **Output** both the **in-text citation** and the **full reference** in the chosen style, correctly
   applying that style's rules (case, et al. cutoff, journal abbreviation, DOI format). Handle the source
   type correctly (journal article, conference paper, book/chapter, thesis, standard, dataset, report).

4. **Offer conversions** to other styles and a BibTeX entry (`/aec-scholar:bibtex`).

**Integrity (hard rule):** never fabricate any field. If a detail can't be verified, insert a clearly marked
placeholder like `<<VERIFY: issue number>>` and tell the user to confirm it on the DOI/publisher page. Never
present an unverified reference as confirmed.
