---
description: Design a publication-quality figure or diagram and generate reproducible code (or TikZ/Mermaid).
argument-hint: <what you want to show + describe the data/message>
allowed-tools: Read, Write, Edit
---

Design a figure for: **$ARGUMENTS**

Use the **figure-designer** agent and the `scientific-figures` skill.

1. **Clarify the message & data.** What is the single point this figure must make, and what data/structure
   underlies it (distribution, comparison, relationship, trend, composition, multi-objective trade-off,
   network, or a workflow/system diagram)?

2. **Recommend the chart/diagram type** for that message + data, and say what to avoid (e.g. no pie, no dual
   axes, no truncated bars, no 3D).

3. **Specify honest, accessible encoding** — zero-baseline bars, shown uncertainty (state what error bars
   mean), labelled axes with units, colour-blind-safe palette (Okabe–Ito/viridis) + redundant shape/
   linestyle, vector output, legible fonts at print scale.

4. **Generate reproducible source:**
   - Data plots → runnable **matplotlib/seaborn** or **ggplot2** code (with accessible rcParams/theme and
     `savefig`/`ggsave` to PDF), using clearly marked **placeholder data** if the user hasn't supplied real
     data.
   - Diagrams (workflow, architecture, BIM/data pipeline, concept map) → **Mermaid** (renders inline) or
     **TikZ/Graphviz** source.

5. **Draft the caption** (self-contained: what it shows, n, what error bars denote) and run a quick
   **accessibility/print check**.

Never invent or "beautify" data points or fabricate a plotted result; mark placeholders and tell the user
exactly what to plug in.
