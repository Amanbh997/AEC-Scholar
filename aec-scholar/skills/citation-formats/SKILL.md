---
name: citation-formats
description: >-
  Reference and in-text citation formatting across the styles used in AEC and engineering — APA 7th,
  IEEE, ASCE, Chicago (notes & author-date), Harvard, Vancouver/ICMJE — plus BibTeX/BibLaTeX entry types
  and fields, DOIs, and reference-manager (Zotero/Mendeley/EndNote) practice. Use whenever the user needs
  to format, convert, check or generate citations, build a bibliography, or fix a reference list.
---

# Citation Formats — Reference

Format references correctly and consistently for AEC/engineering venues. **Always match the target venue's
required style; when unknown, ask or default to the publisher's author guidelines.** Never invent a DOI,
author, year, or page range — if a detail is unknown, leave a clearly marked placeholder for the user to
verify against the source.

## 1. Style selection by venue family
- **ASCE journals** → **ASCE author–date** style.
- **Elsevier AEC journals** (Automation in Construction, Energy and Buildings, etc.) → usually **numbered**
  (Elsevier "num" / Vancouver-like) or APA-like depending on journal — check the specific journal.
- **IEEE venues** → **IEEE numbered**.
- **Taylor & Francis / Emerald (management venues)** → often **APA** or **Harvard**.
- **Springer** → journal-specific (often a "Basic"/numbered or APA-like style).
- When in doubt, use the journal's downloadable **EndNote/CSL style** or **BibTeX `.bst`** file.

## 2. Quick patterns (journal article)

**APA 7th (author–date):**
In-text: `(Smith & Lee, 2021)` or `Smith and Lee (2021)`; 3+ authors → `(Smith et al., 2021)`.
Reference:
`Smith, A. B., & Lee, C. D. (2021). Title of the article in sentence case. Journal Name in Title Case,
12(3), 145–168. https://doi.org/10.xxxx/xxxx`

**IEEE (numbered):**
In-text: `… as shown in [3].`
Reference:
`[3] A. B. Smith and C. D. Lee, "Title of the article," Journal Name Abbrev., vol. 12, no. 3, pp. 145–168,
2021, doi: 10.xxxx/xxxx.`

**ASCE (author–date):**
In-text: `(Smith and Lee 2021)`.
Reference:
`Smith, A. B., and C. D. Lee. 2021. "Title of the article." J. Constr. Eng. Manage. 12 (3): 145–168.
https://doi.org/10.xxxx/xxxx.`
(ASCE uses official journal abbreviations, issue in parentheses, colon before page range.)

**Chicago author–date:**
`Smith, Alan B., and Carol D. Lee. 2021. "Title of the Article." Journal Name 12 (3): 145–68.`

**Harvard (generic):**
`Smith, A.B. and Lee, C.D. (2021) 'Title of the article', Journal Name, 12(3), pp. 145–168.`

**Vancouver/ICMJE (numbered):**
`1. Smith AB, Lee CD. Title of the article. Journal Name. 2021;12(3):145-68.`

> Differences that trip people up: **case** (APA/ASCE sentence-case article titles; Chicago/IEEE often
> title-case), **author count cutoffs** for "et al.", **journal-name abbreviation** (IEEE/ASCE/Vancouver
> abbreviate; APA spells out), **DOI format** (APA wants full `https://doi.org/…` URL).

## 3. Common source types (what fields you need)
- **Journal article:** authors, year, title, journal, volume, issue, pages, DOI.
- **Conference paper (key in AEC):** authors, year, title, *proceedings/conference name*, location, dates,
  publisher/organizer, pages or paper no. (e.g., ISARC, CIB W78, ASCE CRC).
- **Book / chapter:** authors/editors, year, title, edition, publisher, place, (chapter pages).
- **Thesis:** author, year, title, degree, institution.
- **Standard:** body + number + year + title (e.g., `ISO 19650-1:2018`) — see `aec-standards-codes`.
- **Report / grey literature:** organization as author, year, title, report no., publisher/URL.
- **Dataset / software:** author, year, title, version, repository/DOI (cite these — increasingly expected).
- **Webpage:** author/organization, year, title, URL, access date (only when no better source exists).

## 4. BibTeX / BibLaTeX
Common entry types: `@article`, `@inproceedings`/`@conference`, `@book`, `@incollection`, `@phdthesis`/
`@mastersthesis`, `@techreport`, `@misc` (datasets/software/standards), `@online`.

Example:
```bibtex
@article{smith2021digitaltwin,
  author  = {Smith, Alan B. and Lee, Carol D.},
  title   = {A digital twin framework for construction safety monitoring},
  journal = {Automation in Construction},
  year    = {2021},
  volume  = {12},
  number  = {3},
  pages   = {145--168},
  doi     = {10.1016/j.autcon.2021.xxxxx}
}
@inproceedings{lee2022vision,
  author    = {Lee, Carol D. and Park, Jin},
  title     = {Vision-based progress monitoring on modular sites},
  booktitle = {Proc. 39th Int. Symp. on Automation and Robotics in Construction (ISARC)},
  year      = {2022},
  pages     = {201--208},
  address   = {Bogot{\'a}, Colombia},
  doi       = {10.22260/ISARC2022/xxxx}
}
```
**BibTeX hygiene:** unique keys (`authorYEARkeyword`); protect capitals/acronyms with braces
(`{BIM}`, `{LCA}`) so styles don't lowercase them; use `--` for page ranges; keep DOIs bare (no URL prefix
in the `doi` field); prefer `@inproceedings` over `@misc` for conference papers. (See `/aec-scholar:bibtex`.)

## 5. DOIs & identifiers
- Prefer DOIs over URLs (persistent). Format per style (APA: full URL; BibTeX: bare in `doi`).
- Other IDs: ISBN (books), ISSN (journals), ORCID (authors), arXiv ID (preprints), accession numbers.
- Resolve/verify a DOI at `https://doi.org/<doi>`. **Never fabricate a DOI** — omit and flag if unknown.

## 6. Reference managers (practical advice)
- **Zotero** (free, open, browser connector, great for web capture) · **Mendeley** · **EndNote** (institutional).
- Use a manager to: collect with one click, dedupe, attach PDFs, and **auto-format** via CSL styles; sync a
  group library for co-authors.
- For LaTeX: export **BibTeX/BibLaTeX**; for Word: use the manager's plugin + CSL style.
- **Always proof the output** — managers import dirty metadata (wrong case, missing issue, author-as-org
  errors). Trust but verify against the source.

## 7. Integrity guardrails (hard rules)
- Cite only sources you (or the user) have actually accessed and that exist.
- Don't pad reference lists or coercively self-cite.
- Preserve correct attribution; quote precisely with page numbers.
- When generating a reference from partial info, **mark every uncertain field** and instruct the user to
  verify on the publisher/DOI page. (See `research-ethics-integrity`.)
