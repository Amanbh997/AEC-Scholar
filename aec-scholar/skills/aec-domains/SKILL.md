---
name: aec-domains
description: >-
  Authoritative taxonomy and current state-of-the-art of academic research subfields in Architecture,
  Engineering & Construction (AEC). Use whenever a task involves AEC research topics, scoping a study,
  classifying literature, identifying research gaps, choosing keywords, or needing domain-accurate
  terminology and concepts for BIM, building performance/energy, construction management, computational
  and generative design, structural/civil engineering, sustainability and LCA, digital twins, construction
  robotics/automation, AI/computer-vision in construction, reality capture, safety, MEP, offsite/DfMA,
  smart cities/urban informatics, or facility management.
---

# AEC Research Domains — Knowledge Base

This skill encodes the landscape of AEC academic research so outputs are field-credible. Use it to
classify topics, pick precise terminology, build keyword sets, and locate where a study sits in the field.

## How to use this skill
- When a topic is named, **map it to one or more subfields below** and adopt the canonical vocabulary.
- For literature searches, **harvest the synonyms/keywords** listed per subfield (AEC terminology is
  fragmented — the same idea has many names).
- For gap-finding, **cross subfields** (most novel AEC work is at intersections, e.g. *BIM × LCA*,
  *computer vision × safety*, *generative design × embodied carbon*).
- Never overstate maturity. Flag where evidence is thin, where claims are hype-driven (a real problem in
  AEC tech papers), and where field validation is lacking.

---

## 1. BIM & Building Information Modeling
**Core concepts:** semantic building models, object-oriented parametric modeling, model federation,
Levels of Development (LOD), Level of Information Need (ISO 19650), model checking / rule-based validation,
clash detection, model view definitions (MVDs).
**openBIM & interoperability:** IFC (ISO 16739), IDS (Information Delivery Specification), BCF (BIM
Collaboration Format), bSDD (buildingSMART Data Dictionary), COBie, CityGML/CityJSON (urban), IFC-to-graph,
Linked Building Data (LBD), BOT ontology, semantic web / RDF / SPARQL for BIM.
**Dimensions:** 3D (geometry), 4D (schedule), 5D (cost), 6D (sustainability/energy), 7D (FM/operations).
**Process & adoption:** BIM maturity models, BIM Execution Plans (BEP), CDE (common data environment),
ISO 19650 information management, BIM-FM handover, national BIM mandates, BIM ROI, sociotechnical adoption.
**Keywords/synonyms:** building information model(l)ing, IFC, openBIM, model-based, digital construction,
information management, semantic enrichment, scan-to-BIM, BIM-GIS integration.

## 2. Building Performance & Energy
**Core:** building energy simulation (BES), whole-building energy modeling, dynamic thermal simulation,
co-simulation, model calibration & uncertainty quantification, the performance gap (predicted vs measured),
energy signature, measurement & verification (IPMVP).
**Tools commonly cited:** EnergyPlus, DOE-2, IDA ICE, TRNSYS, IES-VE, DesignBuilder, OpenStudio, Modelica/
Spawn-of-EnergyPlus, Ladybug/Honeybee (Grasshopper), Radiance (daylight), CONTAM (airflow), CFD (Flumes/
OpenFOAM/ANSYS) for natural ventilation & urban microclimate.
**Topics:** thermal comfort (PMV/PPD, adaptive comfort EN 16798/ASHRAE 55), indoor environmental quality
(IEQ), daylighting & glare (DGP, sDA/ASE per LEED), occupant behavior modeling (stochastic, agent-based),
HVAC modeling & control, model predictive control (MPC), demand response & grid-interactive efficient
buildings (GEB), nearly/net-zero energy buildings (nZEB/NZEB), retrofit optimization, building stock /
urban building energy modeling (UBEM).
**Keywords:** energy performance, thermal comfort, daylight, HVAC, occupant behaviour, calibration,
performance gap, nZEB, retrofit, demand flexibility.

## 3. Construction Management & Economics
**Planning & control:** Critical Path Method (CPM), Program Evaluation and Review Technique (PERT),
Last Planner System (LPS) & lean construction, location-based scheduling / line-of-balance / Takt planning,
earned value management (EVM), schedule/cost overrun analysis, delay analysis (forensic).
**Cost & productivity:** parametric & data-driven cost estimation, labor productivity measurement,
learning curves, work sampling, bid/tender analysis, contingency & risk pricing.
**Risk & decision:** Monte Carlo risk analysis, Bayesian networks, AHP/ANP & MCDM (TOPSIS, PROMETHEE,
fuzzy methods), real options, dispute & claims.
**Delivery & contracts:** Design-Bid-Build, Design-Build, CM-at-Risk, Integrated Project Delivery (IPD),
alliancing, public–private partnerships (PPP/P3), relational vs transactional contracting, incentive
mechanisms, procurement.
**Lean & production:** Toyota/lean principles in construction, takt time, pull planning, waste (muda),
Last Planner, value stream mapping, location-based management.
**Keywords:** scheduling, cost estimation, productivity, lean construction, risk management, project
delivery, procurement, claims, MCDM.

## 4. Computational & Generative Design
**Parametric:** Grasshopper/Rhino, Dynamo/Revit, visual programming, associative geometry, design space
exploration.
**Generative & optimization:** form-finding, topology optimization, multi-objective optimization (NSGA-II/III,
Pareto fronts), surrogate/metamodels (Kriging, ANN, Gaussian process), simulation-based optimization,
performance-driven design, shape grammars, space planning & automated layout, generative adversarial /
diffusion models for design, design automation.
**Fabrication link:** file-to-factory, robotic fabrication, computational craft, mass customization, DfMA.
**Keywords:** parametric design, generative design, design optimization, multi-objective optimization,
performance-based design, surrogate model, topology optimization.

## 5. Structural & Civil Engineering (research-side)
**Analysis:** finite element method (FEM), nonlinear & dynamic analysis, performance-based (seismic)
design, fragility & resilience, reliability-based design, isogeometric analysis.
**Monitoring:** structural health monitoring (SHM), sensor networks, modal analysis, damage detection,
digital-twin-based monitoring, vibration-based methods, fiber-optic/strain sensing.
**Materials:** UHPC, engineered cementitious composites, geopolymers/low-carbon concrete, mass timber/CLT,
FRP, self-healing concrete, 3D-printable concrete rheology.
**Keywords:** finite element, seismic, structural health monitoring, damage detection, resilience,
reliability, low-carbon concrete, mass timber.

## 6. Sustainability, LCA & Circular Economy
**Assessment:** Life Cycle Assessment (LCA, ISO 14040/14044), whole-life carbon (EN 15978), embodied vs
operational carbon, Environmental Product Declarations (EPD, EN 15804), Life Cycle Cost (LCC), dynamic LCA,
consequential vs attributional LCA, biogenic carbon accounting.
**Rating systems:** LEED, BREEAM, DGNB, WELL, Living Building Challenge, Green Star, Level(s) (EU).
**Circularity:** Design for Disassembly (DfD), material passports, reuse, urban mining, circular economy
indicators, demolition vs deconstruction.
**Decarbonization:** net-zero/whole-life carbon targets, RICS & RIBA carbon methodologies, embodied
carbon benchmarking, material efficiency, carbon-aware design.
**Keywords:** life cycle assessment, embodied carbon, whole-life carbon, EPD, circular economy, net zero,
design for disassembly, material passport.

## 7. Digital Twins, IoT & Smart Buildings/Cities
**Concepts:** digital twin (vs BIM vs digital shadow — be precise: bidirectional real-time sync is the
discriminator), cyber-physical systems, sensor fusion, real-time data integration, ontologies (Brick
Schema, SAREF, RealEstateCore), edge/cloud architectures.
**Urban:** urban digital twins, CityGML/3D City Models, urban informatics, mobility, urban heat island,
GIS analytics, citizen sensing, geospatial data.
**Keywords:** digital twin, cyber-physical, IoT, Brick schema, smart building, urban digital twin,
geospatial.

## 8. Construction Automation, Robotics & Additive Manufacturing
**Topics:** construction robotics (on-site & prefab), bricklaying/rebar/welding robots, additive
manufacturing (3D concrete printing — extrusion & particle-bed), drones/UAV for survey & inspection,
autonomous/teleoperated earthmoving, exoskeletons, human–robot collaboration, automated progress tracking.
**Keywords:** construction robotics, automation, 3D concrete printing, additive manufacturing, UAV,
exoskeleton, autonomous construction.

## 9. AI / Machine Learning / Computer Vision in AEC
**Vision:** automated progress monitoring (4D as-planned vs as-built), defect/crack detection, object &
worker detection, scene understanding, semantic segmentation of point clouds, PPE compliance.
**NLP/LLM:** contract & specification analysis, automated compliance checking, requirement extraction,
construction-domain LLMs, code/standard question answering.
**Predictive:** cost/schedule prediction, safety risk prediction, energy forecasting, predictive
maintenance, defect prediction; methods: CNN, transformers, GNN (over IFC/graph data), reinforcement
learning (control, scheduling), physics-informed ML.
**Caution:** AEC ML papers frequently over-claim and under-validate (small datasets, no external
validation, weak baselines). Demand dataset description, baselines, and generalization evidence.
**Keywords:** deep learning, computer vision, convolutional neural network, point cloud, defect detection,
progress monitoring, automated compliance checking, machine learning.

## 10. Reality Capture & Geospatial
**Topics:** terrestrial/mobile laser scanning (LiDAR), photogrammetry/SfM, point cloud processing &
registration, scan-to-BIM / scan-vs-BIM, semantic segmentation, SLAM, mobile mapping, as-built
documentation, Heritage BIM (HBIM).
**Keywords:** point cloud, laser scanning, LiDAR, photogrammetry, scan-to-BIM, SLAM, HBIM, reality capture.

## 11. Construction Safety & Workforce
**Topics:** hazard recognition, safety climate/culture, leading vs lagging indicators, wearable sensors &
physiological monitoring, computer-vision safety monitoring, near-miss reporting, prevention through design
(PtD), ergonomics & musculoskeletal disorders, mental health, workforce shortage & training (VR/AR safety
training).
**Keywords:** construction safety, hazard, safety climate, wearables, prevention through design, ergonomics.

## 12. MEP, Building Services & FM
**Topics:** MEP coordination & clash resolution, automated routing, HVAC design optimization, building
controls/BMS, commissioning & fault detection & diagnostics (FDD), facility management & maintenance,
asset information management, condition assessment.
**Keywords:** MEP coordination, clash detection, fault detection and diagnostics, facility management,
asset management, commissioning.

## 13. Offsite, Modular & DfMA
**Topics:** Design for Manufacture and Assembly (DfMA), prefabrication, volumetric/modular construction,
panelized systems, supply chain & logistics, productivity vs traditional, mass customization, platform
design / platform-based housing.
**Keywords:** offsite construction, modular, prefabrication, DfMA, industrialized construction, MMC
(modern methods of construction).

## 14. Immersive Tech (VR/AR/MR/XR) in AEC
**Topics:** design review in VR, AR for on-site assembly/inspection, MR for layout, safety & operations
training, stakeholder engagement, presence & usability evaluation.
**Keywords:** virtual reality, augmented reality, mixed reality, extended reality, immersive, design review.

---

## Cross-cutting "intersection" gap zones (where novelty concentrates)
- BIM × LCA / embodied carbon (early-design carbon feedback)
- Computer vision × safety / progress / productivity
- Digital twin × structural/energy operation (closed-loop control)
- Generative design × performance & carbon (multi-objective, carbon-aware)
- LLMs × compliance checking / contracts / specifications
- Reality capture × FM / heritage / deviation analysis
- Robotics/AM × structural & material design (print-path-aware design)
- Offsite/DfMA × supply chain digitalization
- Equity / occupant wellbeing × performance (sociotechnical, often under-studied)

## Standing cautions for AEC research writing
- **Define maturity honestly:** "digital twin" and "AI" are over-applied; insist on the discriminating
  feature (e.g., bidirectional real-time coupling for a true twin).
- **Generalizability is the field's weak spot:** single case studies and one-building simulations dominate.
  Note external validity limits explicitly.
- **Standards anchor credibility:** cite the relevant ISO/EN/ASCE/ASHRAE standard rather than vague claims
  (see the `aec-standards-codes` skill).
- **Industry fragmentation matters:** practice adoption, not just technical feasibility, is a legitimate
  and valued contribution in AEC venues.
