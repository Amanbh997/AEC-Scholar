---
description: Build a precise glossary / terminology list of AEC concepts for a paper or thesis.
argument-hint: <topic area, or paste text to extract terms from>
allowed-tools: Read, Write, Edit
---

Build a glossary for: **$ARGUMENTS**

Use the **aec-domain-expert** agent and the `aec-domains` + `aec-standards-codes` skills.

1. **Collect the terms.** If text is provided, extract the domain terms, acronyms and abbreviations used. If a
   topic is given, list the key concepts a reader needs defined.

2. **Define each precisely** in canonical AEC terminology — concise, accurate, and disambiguated where the
   field is loose (e.g. distinguish *digital twin* vs *digital shadow* vs *BIM*; *embodied* vs *operational*
   carbon; *verification* vs *validation*; *LOD* meanings). Reference the governing standard where one exists
   (e.g. "per ISO 19650", "EN 15978 stages A1–A3").

3. **Expand acronyms** on first definition (BIM, IFC, LCA, EPD, nZEB, SHM, DfMA, MCDM, SEM, etc.) and keep
   them consistent.

4. **Format** as an alphabetical glossary table (`Term | Definition | Standard/Note`), suitable for a thesis
   front-matter glossary or a paper's nomenclature section. For LaTeX users, offer a `glossaries`-package
   version.

Keep definitions faithful to established usage; flag any term whose meaning is contested in the literature and
give the competing senses rather than picking one silently. Don't invent a definition for a term you can't
ground — say it needs a source.
