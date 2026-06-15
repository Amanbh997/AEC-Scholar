---
description: Plan and reason about statistical/data analysis for an AEC study (and draft code).
argument-hint: <describe your data, variables and research question(s)>
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

Plan the data analysis for: **$ARGUMENTS**

Use the **data-analyst** agent and the `research-methods` skill.

1. **Map question → data → method.** Restate the RQ(s), the data type and measurement levels, and the design.
   Recommend the appropriate analysis (descriptive; t-test/ANOVA; correlation/regression — OLS/logistic/
   multilevel; non-parametric alternatives; reliability + EFA/CFA; **SEM/PLS-SEM**; **MCDM** — AHP/TOPSIS;
   Delphi consensus; time-series/energy with calibration metrics CV(RMSE)/NMBE vs ASHRAE G14; uncertainty/
   sensitivity analysis for models). For qualitative data, plan a transparent coding analysis (codebook +
   inter-coder agreement).

2. **Check assumptions.** List the assumptions of the chosen test (normality, homoscedasticity, independence,
   multicollinearity, sample-size adequacy) and how to check/handle violations.

3. **Reporting plan.** Specify what to report: effect sizes + confidence intervals (not just p-values),
   model-fit/validity indices for SEM, consistency ratios for AHP, calibration error for energy models;
   correction for multiple comparisons where relevant; and software + version for reproducibility.

4. **Code.** When useful, provide runnable example code (R or Python preferred; SPSS steps if requested)
   for the analysis and the key plots — with honest, labeled, uncertainty-showing visualizations.

5. **Interpretation guide.** Explain how to read the expected outputs and what they can and cannot support.

If the user provides the dataset, analyze it directly and report results with calibrated interpretation.

**Integrity (hard rule):** never fabricate data, statistics or p-values; no p-hacking or HARKing. If you
don't have the data, deliver the plan + expected outputs and state what the user must compute.
