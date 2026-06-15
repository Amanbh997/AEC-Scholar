---
description: Generate a PRISMA 2020 flow diagram (Mermaid) and checklist for a systematic/scoping review.
argument-hint: [paste your screening counts, or describe the review]
---

Generate PRISMA 2020 reporting artifacts for the user's review. Use the `systematic-review` skill.

Context / counts provided: **$ARGUMENTS**

1. **Collect the counts.** If the user gave numbers, use them. Otherwise ask for (or template) the required
   figures: records identified per database (list each), duplicates removed, records screened and excluded,
   reports sought/retrieved/not-retrieved, reports assessed and excluded **with reasons + counts**, records
   from other methods (snowballing/websites), and final studies included.

2. **Render the flow diagram as Mermaid** (so it displays in the terminal/markdown). Use the PRISMA 2020
   structure: Identification → Screening → Included, with a parallel "other methods" branch if applicable.
   Example skeleton to fill:
   ```mermaid
   flowchart TD
     A[Records identified:\nScopus n=__, WoS n=__] --> B[Duplicates removed n=__]
     B --> C[Records screened n=__]
     C -->|Excluded n=__| X1[ ]
     C --> D[Reports sought for retrieval n=__]
     D -->|Not retrieved n=__| X2[ ]
     D --> E[Reports assessed for eligibility n=__]
     E -->|Excluded n=__:\nreason1 n=__, reason2 n=__| X3[ ]
     E --> F[Studies included n=__]
     G[Other methods:\nsnowballing n=__] --> E
   ```
   Also offer the official **PRISMA2020 R package** / flow-diagram generator as an alternative for the
   publication-ready figure.

3. **Produce the PRISMA 2020 checklist** (27 items) as a table mapping each item to where it is reported in
   the manuscript (section/page), so the user can submit it as supplementary material. Use **PRISMA-ScR** if
   the review is a scoping review.

4. **Sanity-check** the numbers add up (identified − duplicates = screened; screened − excluded = assessed;
   etc.) and flag any inconsistency.

**Integrity:** never invent counts. If numbers are missing, leave clearly marked placeholders for the user
to fill, and do not present a fabricated flow as complete.
