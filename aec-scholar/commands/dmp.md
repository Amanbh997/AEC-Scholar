---
description: Write a FAIR Data Management Plan (DMP) for an AEC study or grant.
argument-hint: <project / data description> [funder if known]
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

Draft a Data Management Plan for: **$ARGUMENTS**

Use the `open-science-reproducibility` and `research-ethics-integrity` skills (and `aec-datasets-tools`).

Produce a structured DMP covering:

1. **Data summary** — what data will be collected/generated (e.g. building-monitoring sensor data, survey
   responses, BIM/IFC models, simulation inputs/outputs, point clouds, images), formats, expected volume,
   and whether reused data are involved.

2. **FAIR & documentation** — metadata standards and documentation (data dictionary, README), identifiers
   (DOIs), and standard/open formats and vocabularies (e.g. IFC, CityGML, documented CSV) for
   interoperability.

3. **Storage & security (active phase)** — where data live, backup, access control, and security for
   sensitive data (site, personal, commercial).

4. **Legal & ethical** — consent, GDPR/data protection, IP and **confidentiality** (construction cost/
   contract/owner data, worker video/wearables), and any NDAs. Note what this allows to be shared.

5. **Sharing & preservation** — what will be shared, when, where (repository with a DOI — Zenodo/OSF/
   Figshare/Dataverse), under which **license**, and long-term preservation. Justify any restricted data
   ("controlled access because…") rather than defaulting to "on request".

6. **Responsibilities & resources** — who manages the data and any costs.

7. **Data/code availability statement** — draft the statement for the eventual paper.

If a funder is named, align the structure to its DMP template (Horizon Europe / UKRI / NSF) and mention tools
(DMPonline/DMPTool/Argos) — and tell the user to verify the funder's current template. Keep every commitment
honest: don't promise to share data that consent/IP/confidentiality won't allow.
