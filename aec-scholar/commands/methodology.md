---
description: Design a rigorous, defensible research methodology for an AEC study.
argument-hint: <research question(s) / study aim>
---

Design a methodology for: **$ARGUMENTS**

Use the **methodologist** agent and the `research-methods` skill (plus `research-ethics-integrity` for the
ethics gate and `aec-domains` for domain fit).

Produce a structured methodology the user can adapt into a methods chapter:

1. **Method choice + justification.** Select the method family (survey, experiment/quasi-experiment, case
   study, interviews, mixed methods, design science, Delphi, simulation/modeling, MCDM) that fits the
   question, and justify it against alternatives. Name the paradigm.

2. **Research design.** Detail the design (e.g., single vs multiple case; convergent vs sequential mixed;
   DSR build–demonstrate–evaluate cycle; simulation calibration/validation plan).

3. **Data & sampling.** Data sources, sampling strategy and justified size (power analysis / saturation /
   SEM ratios / Delphi panel), inclusion/exclusion.

4. **Instruments & procedure.** Instruments/tools (with versions), protocol, and step-by-step procedure
   detailed enough to reproduce.

5. **Analysis plan.** How data will be analyzed (hand off to `/aec-scholar:data-analysis` for depth).

6. **Validity, reliability & rigor.** The specific checklist for the chosen method (internal/external/
   construct validity & reliability; or qualitative trustworthiness; or verification/validation +
   uncertainty/sensitivity for simulation). Explicitly address generalizability limits.

7. **Ethics & reproducibility.** IRB/consent/GDPR/site confidentiality as applicable, and a data/code
   availability plan.

8. **Threats to validity.** A candid section listing threats and mitigations.

Flag the AEC-recurring weaknesses (unvalidated models, single-case over-generalization, small ML datasets)
and design around them. Provide a clean research-workflow description (and offer a Mermaid diagram).
