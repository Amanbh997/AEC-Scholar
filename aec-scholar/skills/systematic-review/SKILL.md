---
name: systematic-review
description: >-
  Methodology for rigorous literature reviews — systematic literature reviews (SLR), scoping reviews,
  PRISMA 2020 and PRISMA-ScR reporting, search-protocol design, inclusion/exclusion criteria, screening,
  quality/risk-of-bias appraisal, data extraction and PRISMA flow diagrams. Use whenever the user is
  planning, conducting, reporting or critiquing a literature review (systematic, scoping, rapid, umbrella,
  or bibliometric review) in AEC or adjacent engineering fields.
---

# Systematic & Scoping Literature Reviews — Method Guide

This skill provides the protocol, reporting standards and templates for transparent, reproducible reviews.
AEC reviewers are increasingly held to PRISMA-grade transparency; apply it.

## 1. Choose the right review type
| Type | Question | Appraisal | Output |
|------|----------|-----------|--------|
| **Systematic (SLR)** | Focused, answerable | Formal quality/risk-of-bias | Synthesized evidence answer |
| **Scoping** | Broad "what exists/what's the extent" | Usually none (or light) | Map of the field (use PRISMA-ScR) |
| **Rapid** | Time-constrained decision | Streamlined | Pragmatic synthesis (state shortcuts) |
| **Umbrella** | Review of reviews | Appraise included reviews (AMSTAR-2) | Higher-order synthesis |
| **Bibliometric/Scientometric** | Structure/trends of a field | n/a | Quantitative field map (see `bibliometric-analysis`) |
| **Narrative/Critical** | Argument/theory building | Selective | Conceptual contribution |

> In AEC, a **mixed "systematic + bibliometric"** review is common and well-received: bibliometrics for
> macro-structure + qualitative synthesis for depth.

## 2. Protocol first (write it before searching)
Define and record up front (and ideally register — PROSPERO for health-adjacent; OSF/Open Science Framework
for engineering):
- **Objective & research questions** (use PICO/PICOC, SPIDER, or PCC for scoping — see `research-methods`).
- **Eligibility criteria** — population/context, intervention/technology, comparator, outcomes, study types,
  language, time window, publication type (peer-reviewed only? include conference proceedings? — in AEC,
  ISARC/CIB W78 proceedings are often legitimately included; justify).
- **Information sources** — databases (≥2 indexed, e.g. Scopus + Web of Science), plus snowballing and grey
  literature if relevant.
- **Search strategy** — full Boolean string per database (report verbatim), fields searched (title/abstract/
  keywords), filters, and the **exact date run**.
- **Selection process** — number of screeners, independent double-screening, conflict resolution, tool
  (Covidence/Rayyan/spreadsheet), inter-rater agreement (Cohen's κ).
- **Data items** — extraction fields.
- **Synthesis method** — narrative/thematic/meta-analysis/vote-counting (state which and why).
- **Risk of bias / quality appraisal** — instrument chosen.

## 3. Search-string design (AEC-aware)
- Build **concept blocks** joined by AND; within a block, synonyms joined by OR.
- Use **truncation** (`construct*` → construction/constructing) and **phrase quotes** ("digital twin").
- Account for **AEC terminology fragmentation** — harvest synonyms from the `aec-domains` skill
  (e.g. BIM = "building information model*" OR "openBIM" OR "IFC").
- Example skeleton (adapt per database syntax):
  `( "digital twin*" ) AND ( construction OR "built environment" OR building* OR infrastructure )
   AND ( safety OR hazard* OR "risk monitoring" )`
- Record **per-source hit counts** the day you run it; searches are not reproducible later without this.

## 4. Screening workflow
1. **De-duplicate** across sources (report duplicates removed).
2. **Title/abstract screening** against eligibility (double-screen; record excluded counts).
3. **Full-text screening** (record exclusions **with reasons** — PRISMA requires reason counts).
4. **Snowballing** — backward (references) + forward (citing articles, via Scopus/Google Scholar) on the
   included set; re-screen new finds.
5. Track every number for the **PRISMA flow diagram**.

## 5. PRISMA 2020 flow diagram (counts to capture)
```
IDENTIFICATION
  Records identified:  database(s) n = __ (list per source), registers n = __
  Records removed before screening: duplicates __, ineligible (automation) __, other __
SCREENING
  Records screened (title/abstract) n = __  →  excluded n = __
  Reports sought for retrieval n = __        →  not retrieved n = __
  Reports assessed for eligibility n = __    →  excluded n = __ (by reason: r1 __, r2 __, ...)
  [Other methods] Records from websites/citation searching/snowballing n = __ → assessed __ → excluded __
INCLUDED
  Studies included in review n = __  (reports n = __)
```
Render as Mermaid (see `/aec-scholar:prisma`) or use the official PRISMA2020 R package / flow generator.

## 6. PRISMA 2020 checklist (27 items, abbreviated)
Title (1) identifies as systematic review · Abstract (2) structured · Introduction: rationale (3),
objectives (4) · Methods: eligibility (5), information sources (6), search strategy (7), selection process
(8), data collection process (9), data items (10), risk-of-bias (11), effect measures (12), synthesis
methods (13), reporting-bias assessment (14), certainty assessment (15) · Results: study selection +
flow (16), study characteristics (17), risk of bias (18), individual results (19), syntheses (20),
reporting biases (21), certainty (22) · Discussion (23) · Other: registration/protocol (24), support/
funding (25), competing interests (26), data/code availability (27).
**PRISMA-ScR** (scoping) replaces appraisal/synthesis-of-effects items with charting/mapping items.

## 7. Quality / risk-of-bias appraisal (pick by study type)
- **Quantitative/empirical engineering:** custom criteria or MMAT (Mixed Methods Appraisal Tool).
- **Surveys/cross-sectional:** AXIS tool.
- **Qualitative:** CASP qualitative checklist.
- **Reviews (for umbrella):** AMSTAR-2.
- **Modeling/simulation studies (AEC-specific weak spot):** appraise — validation against measured data?
  uncertainty quantified? assumptions stated? reproducible inputs? baseline/benchmark? generalizability?
- Report appraisal transparently; **do not silently drop** low-quality studies — show and discuss them.

## 8. Data extraction template (adapt)
`ID | Author(s) | Year | Venue | Country/region | Aim/RQ | AEC subfield | Method | Data/case | Sample/scale |
Technology/tool | Key findings | Reported limitations | Validation type | Quality rating | Notes`

## 9. Synthesis
- **Thematic synthesis** (most common in AEC): code findings → group into themes → narrative per theme.
- **Framework synthesis**: map findings onto an a-priori framework (e.g., a maturity model).
- **Meta-analysis**: only when outcomes are commensurable & quantitatively reported (rare in AEC; check
  heterogeneity, report I², forest plot). Don't force it.
- **Always** include: temporal trends, geographic spread, method distribution, identified gaps, and a
  research agenda — these are what AEC reviewers reward.

## 10. Common pitfalls to flag
- Single database only; no snowballing → recall too low.
- Search string not reported verbatim or no run-date → not reproducible.
- Exclusion reasons not counted → fails PRISMA item 16.
- No appraisal of modeling/simulation rigor → over-trusting unvalidated tech papers.
- "Themes" that are just topic labels, not analytic synthesis.
- Claiming "systematic" while doing a narrative review — name the method honestly.
