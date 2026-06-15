---
description: Design an academic conference poster (content, layout, and a readable single takeaway).
argument-hint: <paper/topic> [--format better-poster|classic]
allowed-tools: Read, Write, Edit
---

Design a conference poster for: **$ARGUMENTS**

Use the **figure-designer** and **academic-writer** agents and the `presentation-poster` + `scientific-figures`
skills.

1. **Find the single takeaway.** Distil the work to one plain-language main finding (the "billboard"). State
   it as a full sentence a passer-by grasps in under a minute.

2. **Choose the layout.** Default to the **"better poster"** format (big central finding + supporting side
   columns + small detail "ammo bar"); use **classic** column layout if the user/venue requires it
   (Intro & gap → Methods → Results → Conclusions → key refs + QR).

3. **Draft the content** for each section — concise, figure-led, minimal text. Specify the **hero figure**
   and any supporting visuals (design them via `/aec-scholar:figure`).

4. **Design spec.** Recommend: visual hierarchy and reading order, title/body font sizes legible at print
   scale, a colour-blind-safe consistent palette, vector graphics, generous white space, a **QR code** to
   the paper/preprint/data, and author/ORCID/contact. Note the printed poster size (e.g. A0 portrait/landscape).

5. **Deliver** a section-by-section content draft + a layout sketch (describe the grid) the user can build in
   PowerPoint/Affinity/Inkscape/LaTeX (tikzposter/beamerposter).

Keep all results truthful to the work — never invent data or findings for visual impact.
