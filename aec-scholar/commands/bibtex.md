---
description: Generate, clean, deduplicate and normalize a BibTeX/BibLaTeX library.
argument-hint: <references.bib path, or paste entries / reference details>
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

Work on the user's BibTeX/BibLaTeX: **$ARGUMENTS**

Use the **citation-manager** agent and the `citation-formats` skill. If a `.bib` path is given, read it.

Depending on the request:

**Generate** — turn reference details/DOIs into correct BibTeX entries. Choose the right entry type
(`@article`, `@inproceedings` for conference papers — important in AEC, `@book`, `@incollection`,
`@phdthesis`, `@techreport`, `@misc` for standards/datasets/software).

**Clean & normalize** an existing `.bib`:
- Generate consistent, unique keys (`authorYEARkeyword`).
- Brace-protect capitals/acronyms (`{BIM}`, `{LCA}`, `{IFC}`) so styles don't lowercase them.
- Fix page ranges to `--`, move DOIs into a bare `doi` field, normalize author and journal fields.
- **Deduplicate** entries (report duplicates merged).
- Flag **incomplete entries** (missing year/volume/pages/DOI) with inline `% TODO: verify` comments rather
  than guessing.

Output the cleaned `.bib` (write it to a file if the user wants) plus a short report of what changed and a
list of entries that still need the user to verify missing fields.

**Integrity:** never invent a DOI, author, year or page range. Mark unknowns for verification; do not
fabricate to make an entry look complete.
