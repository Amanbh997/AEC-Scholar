---
name: aec-standards-codes
description: >-
  Reference to the key standards, codes, schemas and frameworks that anchor credibility in AEC research —
  BIM/information management (ISO 19650, IFC/ISO 16739, IDS, COBie, CityGML), sustainability/LCA (ISO 14040/
  14044, EN 15978/15804, ISO 14067), energy & comfort (ASHRAE 55/90.1, EN 16798, EPBD), structural
  (Eurocodes, ASCE 7, ACI, AISC), and quality/management frameworks. Use when a task needs an authoritative
  standard to cite, correct standard numbering, or grounding of a technical claim in a recognized norm.
---

# AEC Standards, Codes & Schemas — Reference

Citing the right standard signals domain credibility and grounds claims. **Verify the current edition/year
before citing — standards are revised; cite the specific version (e.g., `ISO 19650-1:2018`).** This is a
pointer list, not legal/engineering advice; the user must confirm applicability and currency.

## 1. BIM & information management
- **ISO 19650** series — organization & digitization of information about buildings/civil works using BIM.
  Parts: -1 (concepts & principles), -2 (delivery phase), -3 (operational phase), -4 (information exchange),
  -5 (security-minded approach). Supersedes the UK **PAS 1192** series.
- **ISO 16739 (IFC)** — Industry Foundation Classes, the open data schema for BIM (buildingSMART). "IFC4",
  "IFC4.3" (infrastructure) are common versions.
- **buildingSMART standards:** **IDS** (Information Delivery Specification — machine-readable requirements),
  **BCF** (BIM Collaboration Format), **MVD** (Model View Definitions), **bSDD** (data dictionary),
  **IFC** + **IDM** (ISO 29481, Information Delivery Manual).
- **COBie** — Construction Operations Building information exchange (handover to FM).
- **ISO 12006-2 / -3** — building construction information classification framework (basis for
  **Uniclass**, **OmniClass**).
- **LOD/LOIN** — Level of Development (BIMForum) / Level of Information Need (**EN 17412-1**).
- **CityGML / CityJSON** (OGC) — semantic 3D city models; **LandInfra/InfraGML** for infrastructure.

## 2. Sustainability, LCA & carbon
- **ISO 14040 / 14044** — Life Cycle Assessment principles & requirements.
- **EN 15978** — assessment of environmental performance of buildings (whole-building LCA; defines life-
  cycle stages **A1–A5, B1–B7, C1–C4, D**).
- **EN 15804** — core rules for **Environmental Product Declarations (EPD)** of construction products.
- **ISO 14025** — Type III environmental declarations (EPD framework).
- **ISO 14067** — carbon footprint of products; **ISO 14064** — GHG accounting (organizational/project).
- **ISO 21930** — sustainability of construction works / EPD of products.
- **RICS Whole Life Carbon Assessment** & **RIBA 2030 Climate Challenge**, **LETI** guidance — practitioner
  methodologies/benchmarks for embodied & whole-life carbon.
- **Level(s)** (EU common framework for sustainability of buildings).
- Rating systems (frameworks, not ISO): **LEED, BREEAM, DGNB, WELL, Living Building Challenge, Green Star**.

## 3. Energy & indoor environment
- **ASHRAE 90.1** — energy standard for buildings (except low-rise residential); **ASHRAE 55** — thermal
  comfort; **ASHRAE 62.1/62.2** — ventilation/IAQ; **ASHRAE 140** — test for BES software validation;
  **ASHRAE Guideline 14** + **IPMVP** — measurement & verification of energy savings.
- **EN 16798** (replaces EN 15251) — indoor environmental input parameters; **EN ISO 7730** — PMV/PPD
  thermal comfort; **EN 16247** — energy audits.
- **EPBD** (EU Energy Performance of Buildings Directive) — policy driver for EPCs/nZEB.
- **CIBSE** guides (UK) — building services design references.

## 4. Structural & civil
- **Eurocodes** EN 1990–1999 (EN 1990 basis of design; EN 1991 actions; EN 1992 concrete; EN 1993 steel;
  EN 1994 composite; EN 1995 timber; EN 1996 masonry; EN 1997 geotechnical; EN 1998 seismic; EN 1999 alu).
- **ASCE 7** — minimum design loads; **ACI 318** — concrete; **AISC 360** — steel (US).
- **ISO 2394** — general principles on reliability for structures; **fib Model Code** — concrete structures.

## 5. Quality, safety & management frameworks
- **ISO 9001** (quality management), **ISO 45001** (occupational H&S), **ISO 14001** (environmental
  management), **ISO 31000** (risk management), **ISO 55000** (asset management), **ISO 56002** (innovation).
- **ISO 21500 / 21502** & **PMBOK** — project management.

## 6. Data, geospatial & interoperability
- **OGC** standards (CityGML, IFC-alignment, WFS/WMS, IndoorGML), **ISO 19100** geographic information
  series, **INSPIRE** (EU spatial data), **W3C** Linked Data (RDF/OWL/SPARQL) for **Linked Building Data**
  (BOT, IFCOWL, SAREF, Brick Schema, RealEstateCore for smart buildings/twins).

## 7. How to cite a standard (and not get it wrong)
- Format: **Body + number-part:year — Title** (e.g., `ISO 19650-1:2018 — Organization and digitization of
  information about buildings and civil engineering works, including building information modelling (BIM) —
  Part 1: Concepts and principles`).
- Confirm: latest **edition/year**, correct **part**, national adoption (e.g., **BS EN**, **NS-EN**, **DIN
  EN**), and whether superseded/withdrawn.
- In a reference list, treat as `@misc`/standard type (see `citation-formats`).

## 8. Usage notes
- Use standards to ground claims ("per EN 15978 life-cycle stages A1–A3…") instead of vague assertions.
- Distinguish **mandatory codes** (legal, jurisdiction-specific building codes) from **voluntary standards**
  and **rating systems** (frameworks). Don't imply legal force where there is none.
- Jurisdiction matters: Eurocodes (EU/UK with National Annexes) vs ASCE/ACI/AISC/IBC (US) vs national codes
  elsewhere — state the context.
- When unsure of the current version, **say so and direct the user to ISO/CEN/ASCE/ASHRAE/buildingSMART**
  rather than guessing a year.
