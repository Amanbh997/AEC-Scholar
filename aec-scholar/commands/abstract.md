---
description: Write or refine a concrete, structured abstract for an AEC manuscript.
argument-hint: <paste the manuscript / key points, and target word limit>
allowed-tools: Read, Write, Edit
---

Write or refine an abstract for: **$ARGUMENTS**

Use the **academic-writer** agent and the `academic-writing` skill.

1. **Gather the essentials** from the manuscript/points: context & problem, the specific gap/objective, the
   method, the **key concrete results** (numbers beat adjectives), and the contribution/implication.

2. **Draft the abstract** to the target length (default 150–250 words; honor the venue limit if given), in
   the venue's structure (structured headings vs single paragraph). Ensure it is **self-contained**: no
   citations, no undefined acronyms, and nothing that isn't in the paper.

3. **Make it concrete.** Replace vague claims with specifics ("improved accuracy" → "improved detection F1
   from 0.74 to 0.88"). Lead with the problem, land on the contribution.

4. **Provide a short critique** of the draft (or the user's existing abstract): is the gap clear? is the
   contribution explicit? are results concrete? does it over-claim? Then give the polished version.

5. Offer to also generate a **graphical-abstract outline**, **highlights** (3–5 bullet points, ≤85 chars
   each — Elsevier style), and a **plain-language summary** if the venue asks for them.

**Integrity:** the abstract must accurately represent the paper. Do not state results the manuscript doesn't
contain; if key numbers are missing, ask for them or mark placeholders.
