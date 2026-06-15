---
description: Design or run a bibliometric / science-mapping analysis of an AEC research field.
argument-hint: <field/topic> [--tool vosviewer|citespace|bibliometrix]
---

Run the **bibliometric analysis workflow** for: **$ARGUMENTS**

Engage the `bibliometric-analysis` skill (and `aec-journals`/`aec-domains` for grounding). Delegate
interpretation to the **aec-domain-expert** agent where domain validation is needed.

1. **Frame the question.** Is the goal performance analysis (productivity/impact), science mapping
   (structure/evolution), or both? State what the user wants to learn (foundations? fronts? trends?
   collaboration gaps?).

2. **Data acquisition protocol.** Recommend ONE primary database for the structured analysis (Scopus or
   Web of Science — explain why they shouldn't be merged for citation data) and an exact query + filters +
   export format (full records **with cited references**). Tell the user to record the export date and
   record count.

3. **Cleaning plan.** Specify the data-cleaning steps that make or break credibility: author/affiliation
   disambiguation and a keyword **thesaurus** (synonym merges — pull AEC variants from `aec-domains`).

4. **Analysis design.** Choose the analyses to the question: co-citation (intellectual base), bibliographic
   coupling (research fronts), keyword co-occurrence (themes/trends), co-authorship (collaboration), and
   thematic evolution/burst detection. Map each to the tool (VOSviewer / CiteSpace / Bibliometrix-biblioshiny)
   and give concrete steps and key parameters (min. occurrence thresholds, clustering resolution, counting
   method) — including reproducible R code for Bibliometrix when requested.

5. **Reporting & interpretation.** Specify exactly what to report for reproducibility (query, filters, dates,
   software+version, thresholds, cleaning) and how to turn each network into a written finding (name and
   explain clusters, identify fragmentation gaps, surface emerging themes, propose a research agenda).
   Validate clusters against domain knowledge — a cluster the field wouldn't recognize is a cleaning artifact.

If the user provides an exported dataset, analyze it directly (or give precise tool steps) and draft the
interpreted results section.

**Integrity:** never invent counts, clusters or metrics. Bibliometrics is only as good as the documented
export and cleaning — insist on transparency.
