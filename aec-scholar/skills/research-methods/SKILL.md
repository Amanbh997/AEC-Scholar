---
name: research-methods
description: >-
  Research design and methodology across quantitative, qualitative and mixed methods, with the methods most
  used in AEC: surveys/questionnaires, case studies, Delphi, design science research (DSR), action research,
  experiments, simulation & modeling studies, building monitoring/field studies, structural equation
  modeling (SEM), agent-based & discrete-event simulation, and multi-criteria decision analysis. Use when
  the user is designing a study, choosing a method, defining research questions/hypotheses, planning
  sampling or validity/reliability, or critiquing a methodology.
---

# Research Methods for AEC — Design Guide

Use this to choose and justify a method, and to make designs rigorous and defensible. AEC research is
methodologically pluralistic (engineering experiments to social-science surveys to design science) —
match method to question, then enforce that method's validity standards.

## 1. From question to design
- **Formulate the question** with a framework:
  - **PICO/PICOC** (intervention/effect): Population, Intervention, Comparison, Outcome (, Context).
  - **PCC** (scoping): Population, Concept, Context.
  - **SPIDER** (qualitative): Sample, Phenomenon of Interest, Design, Evaluation, Research type.
  - **FINER** test (is the question Feasible, Interesting, Novel, Ethical, Relevant?).
- **Classify the aim:** exploratory / descriptive / explanatory / predictive / design-and-evaluate.
- **Pick the paradigm honestly:** positivist (measure/test), interpretivist (understand/meaning),
  pragmatist (mixed, problem-driven), design science (build & evaluate an artifact).

## 2. Method families & when to use them (AEC-flavored)
### Quantitative
- **Survey / questionnaire** — perceptions, adoption, practices at scale. Design: validated/established
  scales where possible, pilot test, Likert design, avoid double-barreled/leading items. Report sampling
  frame, response rate, non-response bias check. Common analysis: descriptive, factor analysis (EFA/CFA),
  reliability (Cronbach's α / composite reliability), regression, **SEM/PLS-SEM** (popular in AEC for
  adoption & performance models — report measurement + structural model, convergent/discriminant validity,
  fit indices; mind sample-size rules).
- **Experiment / quasi-experiment** — causal claims (e.g., VR safety training vs control; material tests).
  Control variables, randomization where possible, define IV/DV, power analysis for sample size, report
  effect sizes + CIs (not just p-values).
- **Field measurement / monitoring study** — instrument a building/site (energy, comfort, productivity,
  SHM). Define metrics, sensor calibration, measurement uncertainty, data QA/cleaning, period & seasonality.
- **Secondary data / archival** — cost/schedule/permit/energy datasets; document provenance & cleaning.

### Qualitative
- **Case study** (Yin / Eisenhardt) — the AEC workhorse for projects/organizations. Single vs multiple
  case; embedded units; **define the case & boundaries**; triangulate sources (interviews, documents,
  observation, site data); use a case-study protocol & database for reliability; build a chain of evidence.
- **Interviews** (semi-structured) — sampling (purposive/theoretical), saturation, interview guide,
  recording/transcription, **thematic analysis** (Braun & Clarke) or grounded theory (open/axial/selective
  coding); report coding scheme & coder agreement; use NVivo/ATLAS.ti/Dedoose.
- **Ethnography / observation** — practice studies on site.
- **Document/content analysis** — contracts, specs, policies, standards.

### Mixed methods (very common & valued in AEC)
- Designs: **convergent** (quant + qual in parallel, compare), **explanatory sequential** (quant → qual to
  explain), **exploratory sequential** (qual → build instrument → quant). State the design, the integration
  point, and **why** mixing adds value (don't just bolt interviews onto a survey).

### Design Science Research (DSR) — central to BIM/tool/method papers
- Cycle (Hevner; Peffers DSRM): identify problem → define objectives → **design & develop artifact**
  (framework, tool, algorithm, ontology, model) → **demonstrate** → **evaluate** (case, experiment, expert
  panel, simulation) → communicate. The contribution is the artifact **plus** rigorous evaluation —
  demand the evaluation; a tool with only a toy demo is a common weak AEC paper.

### Delphi method — expert consensus (e.g., ranking risks, KPIs, future scenarios)
- Multi-round anonymous expert survey with controlled feedback to convergence. Report: expert panel
  selection & size, rounds, consensus criterion (e.g., IQR, % agreement, Kendall's W), attrition.

### Simulation & modeling studies (energy, structural, DES, ABM)
- **Building performance simulation** — declare tool & version, weather data, model assumptions,
  **calibration** against measured data + uncertainty/sensitivity analysis (Morris/Sobol); beware the
  performance gap; report inputs for reproducibility.
- **Discrete-event simulation (DES)** — construction operations/logistics; verify & validate the model,
  warm-up, replications, confidence intervals.
- **Agent-based modeling (ABM)** — occupant/worker behavior, markets; report ODD protocol (Overview,
  Design concepts, Details), calibration & validation, sensitivity analysis.
- **Optimization studies** — define objectives/constraints/decision variables, algorithm + parameters,
  convergence evidence, baseline comparison, Pareto analysis for multi-objective.

### Multi-Criteria Decision Analysis (MCDM)
- AHP/ANP, TOPSIS, PROMETHEE, fuzzy variants for selection/ranking (materials, suppliers, delivery methods).
  Report criteria derivation, weighting method, consistency (AHP CR < 0.1), and sensitivity analysis.

## 3. Sampling
- Probability (random, stratified, cluster) vs non-probability (purposive, snowball, convenience —
  acknowledge limits). State the sampling frame, size justification (power analysis for quant; saturation
  for qual; rules-of-thumb for SEM e.g. ratio to indicators), and inclusion/exclusion.

## 4. Validity, reliability & rigor
- **Quantitative:** internal validity (confounds), external validity (generalization — AEC's chronic
  weakness; one building/one project rarely generalizes — say so), construct validity (measure what you
  claim), reliability (consistency); control for common-method bias in single-source surveys.
- **Qualitative (Lincoln & Guba trustworthiness):** credibility (triangulation, member checking),
  transferability (thick description), dependability (audit trail), confirmability (reflexivity).
- **Simulation:** verification (model built right) vs validation (right model — vs empirical data);
  uncertainty & sensitivity analysis are mandatory for credibility.
- **Reproducibility:** share data, code, model files where ethics permit (see `research-ethics-integrity`).

## 5. Ethics gate (always check)
Human subjects (interviews/surveys/experiments/wearables) → informed consent, IRB/ethics approval, data
protection (GDPR), anonymization. Site data → confidentiality/NDA. Declare conflicts and funding.

## 6. Method-selection heuristic
- "How widespread / what perceptions?" → **survey**.
- "Why/how in context?" → **case study / interviews**.
- "Does X cause/improve Y?" → **experiment** (or strong quasi-experiment).
- "Build a new tool/method and show it works" → **design science** + evaluation.
- "What will/should the field prioritize?" → **Delphi**.
- "How does the system behave under conditions we can't field-test?" → **simulation** (validated).
- "Rank options under multiple criteria" → **MCDM**.
- "Both numbers and meaning" → **mixed methods** (state the design & integration).
Always pair the choice with its **specific validity checklist** above.
