---
description: Recommend target journals/conferences for an AEC manuscript, with fit rationale.
argument-hint: <paste abstract / topic + method + contribution>
---

Recommend publication venues for: **$ARGUMENTS**

Use the **aec-domain-expert** agent and the `aec-journals` skill.

1. **Characterize the manuscript.** Topic + subfield (`aec-domains`), method/contribution type (technical
   method vs empirical/management vs performance/energy vs review), intended audience (methodological /
   practitioner / policy), and the authors' ambition/career stage if stated.

2. **Recommend venues.** Provide a **primary recommendation + 2–3 alternates** spanning ambition levels.
   For each, give: the venue name and publisher/society, why it fits (scope match to the manuscript), the
   audience, typical selectivity, and whether it's the right "altitude". Map technical-method work to
   Automation in Construction / Advanced Engineering Informatics / J. Computing in Civil Eng.; management/
   empirical to JCEM / Construction Management & Economics / ECAM; performance/energy to Energy and Buildings
   / Building and Environment; reviews to high-impact review-friendly venues; and note relevant conferences
   (ISARC, CIB W78, ASCE CRC, IBPSA) where appropriate.

3. **Practical factors.** Note open-access options/APCs, typical turnaround, and any scope caveats — and
   **tell the user to verify current scope, impact metrics, APC and policy on the publisher's site** (these
   change yearly; don't state them as fixed).

4. **Fit check & next steps.** Briefly assess whether the manuscript is ready for the primary target or
   needs strengthening first, and offer a pre-submission **peer review** (`/aec-scholar:peer-review`).

**Integrity:** don't fabricate impact factors or acceptance rates; describe relative standing qualitatively
and direct the user to authoritative current sources (JCR/CiteScore/Scopus).
