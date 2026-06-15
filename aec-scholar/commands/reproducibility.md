---
description: Build a reproducibility & open-science checklist for an AEC study (data + code + models).
argument-hint: <describe your study, data, tools and code>
allowed-tools: Read, Write, Edit, Glob, Grep
---

Make the study reproducible: **$ARGUMENTS**

Use the `open-science-reproducibility` and `aec-datasets-tools` skills (+ `research-methods` for
model validation).

Produce a tailored reproducibility plan and checklist:

1. **Data** — repository choice (Zenodo/OSF/Figshare/Dataverse) with a DOI, metadata + data dictionary,
   license, and an honest access decision (open vs controlled, with the reason). Flag anything blocked by
   consent/GDPR/IP/confidentiality.

2. **Code & environment** — version control (Git) + tagged release, environment capture
   (`requirements.txt`/`environment.yml`/`renv`/lockfile or Docker/Binder), literate analysis (Quarto/Jupyter/
   R Markdown), a README mapping scripts → each figure/table, and a Zenodo-archived release with a citable DOI.

3. **Models (AEC-specific)** — share simulation inputs where IP permits (e.g. EnergyPlus IDF + EPW,
   OpenSees/FEM inputs, Grasshopper definitions), document assumptions/boundary conditions/solver + **versions**,
   and report **calibration/validation** vs measured data with **uncertainty/sensitivity** analysis.

4. **Pre-registration / preprint** — advise whether preregistration or a registered report fits (confirmatory
   work) and a preprint route (engrXiv/arXiv) consistent with the target journal's policy.

5. **Statements** — draft the **data & code availability statement** and a software/data citation list
   (`citation-formats`), plus an AI-use disclosure if applicable.

Deliver the plan as an actionable checklist (☐ items). If you can see the user's project files, audit what's
present vs missing. Never label a workflow reproducible if it isn't, and never recommend sharing data that
breaches consent/IP/confidentiality.
