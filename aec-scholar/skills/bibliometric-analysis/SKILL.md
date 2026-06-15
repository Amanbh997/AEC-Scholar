---
name: bibliometric-analysis
description: >-
  Methodology for bibliometric and scientometric analysis of a research field — co-citation, bibliographic
  coupling, co-word/keyword co-occurrence, co-authorship and collaboration networks, performance analysis
  (productivity, citations), and science mapping with VOSviewer, CiteSpace, Bibliometrix/biblioshiny (R),
  Litmaps or OpenAlex/Scopus data. Use when the user wants to quantitatively map the structure, evolution
  or key actors of an AEC (or other) research field, or to complement a systematic review with metrics.
---

# Bibliometric & Scientometric Analysis — Method Guide

Bibliometrics quantitatively maps a field's structure and evolution. In AEC it is widely used to frame
review papers. Used well it is rigorous; used badly it is "descriptive statistics dressed as insight" —
push for interpretation, not just colourful network pictures.

## 1. Two complementary analysis families
**Performance analysis** (productivity & impact): publications per year, most-productive/most-cited authors,
institutions, countries, journals; citation counts; h/g-index; Bradford's law (core journals); Lotka's law
(author productivity).
**Science mapping** (structure & dynamics):
- **Co-citation** (of references/authors/journals) → intellectual base / foundational works.
- **Bibliographic coupling** (shared references) → current research fronts / active clusters.
- **Co-word / keyword co-occurrence** → conceptual/thematic structure & trends.
- **Co-authorship** → social/collaboration structure (authors, institutions, countries).
- **Thematic evolution / overlay timelines** → how themes rise, merge, fade (CiteSpace bursts; Bibliometrix
  thematic map quadrants: motor / niche / emerging-declining / basic themes).

## 2. Workflow
1. **Define scope & query** (same rigor as a systematic search — see `systematic-review`). Bibliometrics
   is only as good as the export. Document the database, exact query, filters, and **export date**.
2. **Choose ONE primary database for the structured analysis** (Scopus or Web of Science) because citation/
   reference metadata is not mergeable cleanly across them; you may report coverage from both. OpenAlex/
   Dimensions are open alternatives. Note coverage limits (conferences, books, non-English under-indexed).
3. **Export full records + cited references** (Scopus: CSV/RIS/BibTeX with references; WoS: tab-delimited/
   plain text "Full Record and Cited References").
4. **Clean the data** — this is where credibility is won or lost:
   - Disambiguate author names (initials collisions), unify institution/country variants.
   - Merge keyword synonyms & spelling variants (BIM / "building information modeling" / "building
     information modelling"; "life cycle assessment" / LCA) via a **thesaurus file** (VOSviewer supports one).
   - Remove stop-words / overly generic terms.
5. **Analyze** with a tool (below). Choose the analysis to the question — don't run all of them by reflex.
6. **Interpret** — name and explain clusters, link to the narrative, identify gaps and a research agenda.
   Validate clusters against domain knowledge (`aec-domains`); a cluster the field wouldn't recognize is a
   data-cleaning artifact.

## 3. Tools
| Tool | Best for | Notes |
|------|----------|-------|
| **VOSviewer** | Co-occurrence, co-citation, coupling, co-authorship maps; clean visuals | Free; uses association strength; supports thesaurus; great for figures |
| **CiteSpace** | Temporal dynamics, **burst detection**, structural variation, pivotal nodes | Free (Java); steep learning curve; strong for evolution & emerging trends |
| **Bibliometrix / biblioshiny** (R) | Full pipeline incl. performance analysis, three-fields plot, thematic map/evolution, Lotka/Bradford | Open, reproducible, scriptable; biblioshiny = GUI |
| **OpenAlex / pyalex / litstudy / metaknowledge** | Programmatic, open, no subscription | Reproducible pipelines; good for transparency |
| **Litmaps / Connected Papers / ResearchRabbit** | Visual citation discovery & snowballing | Discovery aids, not formal analysis |
| **Gephi** | Custom network layout/metrics | When you need bespoke graph analytics |

## 4. Reporting standards
- Follow guidance from Donthu et al. (2021) and Aria & Cuccurullo (Bibliometrix). For the review wrapper,
  combine with PRISMA flow (see `systematic-review`).
- **Report:** database, query string, filters, time span, export date, record count, software + version,
  cleaning steps (thesaurus decisions), parameters (min. occurrence thresholds, clustering resolution),
  and units (full vs fractional counting).
- **State thresholds explicitly** (e.g., "keywords with ≥5 occurrences"; "authors with ≥3 documents") —
  these drive every figure and must be reproducible.

## 5. Metrics & laws cheat-sheet
- **Bradford's law** — few core journals hold most papers (justifies core-source selection).
- **Lotka's law** — author productivity is highly skewed (few prolific authors).
- **Price's law** — ~half of papers come from √N of authors.
- **h-index / g-index** — productivity+impact; age- and field-biased.
- **Total/average citations per item, citing articles, FWCI** — impact; field-normalize when comparing.
- **Total Link Strength (VOSviewer)** — node connectedness in the map.
- **Betweenness centrality / burstness (CiteSpace)** — pivotal & surging nodes.

## 6. Interpreting the science map (turn pictures into findings)
- **Co-citation clusters** = the field's intellectual foundations → write the "theoretical roots."
- **Coupling/keyword clusters** = current fronts → write "active research streams."
- **Sparse links between clusters** = fragmentation / integration opportunity → a **gap**.
- **Recent keyword bursts / emerging-theme quadrant** = trends to position new work against.
- **Peripheral isolated nodes** = niche or nascent topics → potential novelty space.
- **Country/institution networks** = collaboration gaps, under-represented regions (a legitimate AEC gap).

## 7. Pitfalls to flag
- Merging Scopus + WoS citation data naively (double counting, mismatched references).
- No data cleaning → inflated/duplicated authors & keyword noise → meaningless clusters.
- Treating cluster colors as conclusions without interpretation.
- Equating citation count with quality (DORA caution).
- Ignoring database coverage bias (English, journal-over-conference, recent-over-old).
- Over-reading small networks; report sensitivity to thresholds.
