---
name: open-science-reproducibility
description: >-
  Open science and reproducibility practice for AEC research — FAIR data, data repositories and DOIs, data
  management plans (DMP), code/computational reproducibility (version control, environments, containers),
  preprints, preregistration and registered reports, open access, and data/code availability statements. Use
  when the user is planning data management, sharing data/code, writing a DMP or availability statement, or
  making a study reproducible.
---

# Open Science & Reproducibility — Practice Guide

Reproducibility is a credibility multiplier and increasingly a funder/journal requirement. AEC's reliance on
simulations, bespoke datasets and proprietary tools makes this especially important — and often neglected.

## 1. FAIR data principles
- **Findable** — deposit with a persistent identifier (**DOI**) and rich metadata; index it.
- **Accessible** — retrievable via a standard protocol; state access conditions (open vs controlled).
- **Interoperable** — use standard formats/vocabularies (open formats, documented schemas; for built-env
  data consider IFC, CityGML, standard CSV + data dictionary).
- **Reusable** — clear **license**, provenance, and enough documentation to reuse correctly.
> FAIR ≠ "open": sensitive/proprietary data (site, personal, commercial) can be FAIR yet access-controlled.

## 2. Data repositories
- **General:** Zenodo (CERN; DOIs, GitHub integration), Figshare, Dryad, OSF, Harvard Dataverse.
- **Institutional** repositories; **domain** repositories where they exist.
- Choose one that issues a **DOI**, supports your license, and offers versioning. Avoid sharing data only as
  "available on request" — it usually isn't.

## 3. Data Management Plan (DMP)
Plan early (many funders require it at proposal stage). Cover: what data are collected/generated; formats &
volume; metadata & documentation standards; storage, backup & security during the project; legal/ethical
constraints (consent, GDPR, IP, confidentiality); what will be shared, when, where, and under which license;
long-term preservation; and roles/responsibilities. Tools: **DMPonline / DMPTool / Argos**.

## 4. Computational reproducibility (code & analysis)
- **Version control** everything (Git); tag the exact commit/release used for the paper.
- **Capture the environment:** `requirements.txt`/`environment.yml` (conda), `renv` (R), lockfiles; or a
  **Docker/Apptainer** container or **Binder** for one-click reproduction.
- **Literate analysis:** Jupyter, **Quarto**/R Markdown so results, figures and tables regenerate from data.
- **Pin versions** of tools, libraries, solvers and (for energy work) weather files — results shift between
  versions.
- Provide a **README** with exact run instructions and a mapping from scripts → figures/tables in the paper.
- Archive a **release** of the code with a DOI (Zenodo–GitHub integration) and cite it.

## 5. Reproducibility for simulation/modeling studies (AEC-critical)
- Share model input files (e.g., EnergyPlus IDF + EPW, OpenSees/FEM input, Grasshopper definitions) where IP
  permits; document all assumptions, boundary conditions, and solver settings.
- Report **calibration/validation** against measured data and **uncertainty/sensitivity** analysis — a model
  that can't be reproduced or validated is not credible (see `research-methods`).

## 6. Preprints, preregistration & registered reports
- **Preprints:** engrXiv, arXiv (some EESS/CS), SSRN, OSF Preprints — establish priority and open access;
  **check the target journal's preprint policy** first.
- **Preregistration** — register hypotheses, design and analysis plan before data collection (OSF, AsPredicted)
  to curb HARKing/p-hacking for confirmatory work.
- **Registered Reports** — peer review of the protocol before results; in-principle acceptance reduces
  publication bias. Growing in engineering venues.

## 7. Open access (see `aec-journals`)
- Gold/Green/Diamond/Hybrid OA; deposit accepted manuscripts in a repository (Green) even when publishing
  closed. Comply with funder/Plan S mandates; use available transformative agreements.

## 8. Data & code availability statements (now standard)
Write an explicit statement, e.g.:
- *"The data and analysis code supporting this study are openly available in Zenodo at <DOI>, under <license>."*
- *"Restricted data: the building-monitoring dataset cannot be shared publicly due to a confidentiality
  agreement with the building owner; aggregated data are available from the corresponding author on
  reasonable request."*
State the truth — don't promise sharing you won't honor.

## 9. Credit & licensing
- License data (e.g., **CC BY**) and code (e.g., **MIT/Apache-2.0/BSD**, or GPL if required) explicitly.
- Add a **CITATION.cff** so others cite your software/data correctly; cite the datasets and tools **you** used
  (`citation-formats`, `aec-datasets-tools`).
- Disclose AI-tool use per venue policy (`research-ethics-integrity`).

## 10. Integrity link
Reproducibility is an integrity practice: it lets others verify, not just trust. Never present a workflow as
reproducible if it isn't, and never share data in a way that breaches consent, GDPR, IP or confidentiality.
