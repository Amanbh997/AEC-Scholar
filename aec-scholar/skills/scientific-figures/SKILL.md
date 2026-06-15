---
name: scientific-figures
description: >-
  Standards and craft for publication-quality scientific figures and data visualization — choosing the right
  chart, honest encoding, colour-blind-safe palettes, vector vs raster, figure/caption design, and
  reproducible figure code (matplotlib/seaborn, ggplot2, plotly) plus diagrams (TikZ, Mermaid, Graphviz).
  Use whenever the user designs, critiques, or generates figures, plots, diagrams or visual abstracts for an
  AEC manuscript, thesis or presentation.
---

# Scientific Figures & Visualization — Craft Guide

Figures carry a paper's evidence. Make them accurate, clear, accessible and reproducible. A misleading or
unreadable figure undermines an otherwise sound study.

## 1. Choose the chart for the message + data
- **Distribution:** histogram, box plot, **violin/strip/beeswarm** (show the raw points for small n).
- **Comparison across groups:** bar with **error bars/CIs**, or dot/forest plots (cleaner than many bars).
- **Relationship:** scatter (+ regression line & CI), bubble (3rd var by size), hexbin for dense data.
- **Trend / time / energy series:** line with **uncertainty band**; small multiples for many series.
- **Composition:** stacked/100% bar; **avoid pie charts** (hard to compare) except for 2–3 large slices.
- **Part-to-whole over categories:** grouped bars or heatmap.
- **Multidimensional:** small multiples (faceting), parallel coordinates, **Pareto front** scatter for
  multi-objective optimization.
- **Networks:** node-link (bibliometric maps, BIM/data graphs) with meaningful layout — see `bibliometric-analysis`.

## 2. Honest encoding (non-negotiable)
- Bars start at **zero**; don't truncate axes to exaggerate differences.
- **Always show uncertainty** where it exists (error bars/CIs/bands) and state what they represent (SD? SE?
  95% CI?).
- Label every axis with **quantity + unit**; use consistent significant figures.
- One message per figure; don't overload. No 3D effects, no chart-junk, no dual y-axes (they mislead).
- Don't imply more precision than the data supports; don't connect categorical points with lines.

## 3. Colour & accessibility
- Use **colour-blind-safe** palettes: **Okabe–Ito** (qualitative), **viridis/cividis** (sequential),
  diverging maps (e.g. RdBu) only for true midpoints. ~8% of men have colour-vision deficiency.
- Add **redundant encoding** — vary shape/linestyle/hatching as well as colour so figures survive greyscale
  printing.
- Ensure sufficient contrast and legible font sizes **at final print scale** (check at single-column width).

## 4. Format & resolution
- **Vector (PDF/SVG/EPS)** for plots, diagrams and anything with text/lines — scales without pixelation.
- **High-DPI raster (≥300 dpi TIFF/PNG)** only for photographs/point-cloud renders.
- Embed fonts; match the manuscript font where the venue requires it; respect column-width limits.

## 5. Captions & references
- Captions go **below figures** (above tables). Make them self-contained: what the figure shows, key
  abbreviations, sample size, and what error bars denote.
- Every figure must be **referenced in the text** and numbered in order. Use `\cref` in LaTeX (see
  `latex-academic`).

## 6. Reproducible figure code (prefer this over manual drawing)
- **Python:** matplotlib/seaborn — set `rcParams` (font size, dpi, savefig format='pdf'); seaborn for
  statistical plots; export with `plt.savefig('fig.pdf', bbox_inches='tight')`.
- **R:** ggplot2 — `theme_minimal()`/`theme_classic()`, `scale_color_viridis_*`, `ggsave('fig.pdf', ...)`.
- **Interactive/exploration:** plotly/bokeh (export static for print).
- Keep the script + data in-repo so the figure regenerates exactly (reproducibility — see
  `open-science-reproducibility`).

Example (matplotlib, accessible defaults):
```python
import matplotlib.pyplot as plt
plt.rcParams.update({"figure.dpi": 150, "savefig.format": "pdf",
                     "font.size": 9, "axes.spines.top": False, "axes.spines.right": False})
okabe_ito = ["#E69F00","#56B4E9","#009E73","#F0E442","#0072B2","#D55E00","#CC79A7","#000000"]
# ... plot with these colors + distinct markers/linestyles, labelled axes (units), error bars ...
plt.savefig("fig_results.pdf", bbox_inches="tight")
```

## 7. Diagrams (workflows, systems, concept maps)
- **Mermaid** — quick flowcharts/graphs that render in markdown (use for research-workflow and PRISMA
  diagrams in this toolkit).
- **TikZ** — publication-grade vector diagrams inside LaTeX (full control, consistent fonts).
- **Graphviz (DOT)** — automatic layout for graphs/ontologies/BIM data structures.
- **draw.io/Inkscape** — manual vector diagrams (export PDF/SVG).
- Keep hierarchy clear, label relationships, and avoid crossing edges where possible.

## 8. Visual / graphical abstracts
- One clear figure conveying the study's core idea/finding for the table of contents (many AEC journals offer
  this). Self-explanatory, minimal text, on-brand with the paper's figures.

## 9. Integrity
- **Never fabricate or "beautify" data**, splice images, or selectively crop to mislead (image manipulation
  is misconduct — see `research-ethics-integrity`). Disclose any legitimate image processing.
- If the user hasn't supplied data, deliver the design + reproducible code with clearly marked placeholder
  data, never invented results.
