---
name: latex-academic
description: >-
  Practical LaTeX for academic manuscripts and theses — document structure, the major publisher classes
  (Elsevier elsarticle, IEEEtran, ASCE, Springer svjour/sn-jnl, ACM), bibliography with BibTeX/BibLaTeX +
  natbib, figures/tables/subfigures, equations, cross-referencing, math/SI units, and Overleaf workflow.
  Use when the user writes, structures, debugs or formats a paper/thesis in LaTeX, sets up a journal
  submission template, or manages a .bib bibliography. A ready-to-adapt article template is bundled.
---

# Academic LaTeX — Working Guide

Use this to set up and troubleshoot LaTeX manuscripts for AEC/engineering venues. A starter template is in
`article-template.tex` next to this file (reference it with `${CLAUDE_PLUGIN_ROOT}` or copy it for the user).

## 1. Choose the right document class (match the venue)
- **Elsevier** (Automation in Construction, Energy and Buildings, etc.): `elsarticle` (`\documentclass[
  review,3p,times]{elsarticle}`; use `model5-names`/`elsarticle-num` bib styles).
- **IEEE**: `IEEEtran` (`\documentclass[journal]{IEEEtran}` or `[conference]`).
- **ASCE**: the `ascelike-new` class (`\documentclass[Journal]{ascelike-new}`), ASCE bib style.
- **Springer**: `sn-jnl` (Springer Nature) or legacy `svjour3`.
- **ACM**: `acmart`.
- **Generic/thesis**: `article`/`report`/`book` or institutional thesis class; `memoir`/`koma-script` for
  control.
> Download the venue's official template first; don't hand-roll formatting a class already provides.

## 2. Minimal structure
```latex
\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}      % (modern: use lualatex/xelatex + fontspec)
\usepackage[T1]{fontenc}
\usepackage{graphicx,booktabs,siunitx,amsmath,amssymb}
\usepackage[hidelinks]{hyperref}
\usepackage[capitalise]{cleveref}
\title{...}\author{...}\date{}
\begin{document}\maketitle
\begin{abstract}...\end{abstract}
\section{Introduction}...
\bibliographystyle{elsarticle-num}\bibliography{references}
\end{document}
```

## 3. Bibliography (two routes — don't mix)
- **BibTeX + natbib** (classic, what most publisher styles ship): `\usepackage[numbers]{natbib}` (or
  author-year), `\bibliographystyle{<style>.bst}`, `\bibliography{references}`; cite with `\citep{}`/`\citet{}`.
- **BibLaTeX + biber** (modern, flexible): `\usepackage[style=ieee,backend=biber]{biblatex}`,
  `\addbibresource{references.bib}`, cite with `\autocite{}`/`\textcite{}`, print with `\printbibliography`.
- Keep one `references.bib` (see `citation-formats` for entry hygiene: braces around acronyms `{BIM}`,
  `--` page ranges, bare `doi`). Compile order (BibTeX): `pdflatex → bibtex → pdflatex → pdflatex`.

## 4. Figures & tables (publication quality)
```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=.8\linewidth]{figs/workflow.pdf}  % vector PDF/EPS for diagrams
  \caption{Research workflow.}\label{fig:workflow}
\end{figure}
```
- Use **vector** (PDF/EPS/SVG→PDF) for diagrams/plots, high-DPI for photos. Refer with `\cref{fig:workflow}`.
- Tables: **`booktabs`** (`\toprule\midrule\bottomrule`) — no vertical rules. Caption **above** tables,
  **below** figures. `siunitx`'s `S` columns align numbers on the decimal.
- Subfigures: `subcaption` (`\begin{subfigure}`), not the obsolete `subfigure` package.

## 5. Math & units
- Equations: `equation`/`align` (amsmath); never use `eqnarray`. Reference with `\eqref{}`.
- **Units & quantities: `siunitx`** — `\qty{2.5}{\kilo\watt\hour\per\meter\squared}`, `\num{1.2e-3}`,
  `\SI` (legacy). Consistent significant figures; correct unit spacing handled automatically.
- Use `\(...\)` for inline math (not `$...$` in new code is fine too); define notation once.

## 6. Cross-referencing & good practice
- **`cleveref`** (`\cref`, `\Cref`) auto-prefixes "Fig./Table/Eq./Sec." and handles ranges — label
  everything (`fig:`, `tab:`, `eq:`, `sec:` prefixes) and never hardcode numbers.
- `hyperref` last (or per package-order rules; load `cleveref` after `hyperref`).
- One sentence per line in the source → cleaner `git diff` for collaboration.
- Comment out, don't delete, while drafting; use `\todo{}` (todonotes) for review notes.

## 7. Overleaf & collaboration
- Overleaf for real-time co-authoring; set the **compiler** (pdfLaTeX vs XeLaTeX/LuaLaTeX — the latter for
  custom fonts/Unicode) and **TeX Live version** to match the template.
- Use Git/Overleaf-Git integration for version control; keep `figs/` and `references.bib` in-repo.
- For large theses: `\input`/`\include` per chapter, `latexmk` for builds, `glossaries` for acronyms.

## 8. Troubleshooting quick hits
- "Undefined control sequence" → missing `\usepackage`.
- Citations show as `[?]` → run BibTeX/biber, then re-run LaTeX twice; check `.bib` key & style.
- "Overfull \hbox" → long URLs/words; use `\sloppy`, `microtype`, or `url`/`\url{}` line-breaking.
- Float placement chaos → use `[t]`/`[b]`, `\clearpage`, or the `placeins`/`\FloatBarrier` trick; don't fight
  it with `[H]` (float package) except sparingly.
- Wrong reference style → you're using the wrong `.bst`/biblatex `style`; match the venue.
- Unicode errors on pdfLaTeX → switch to LuaLaTeX/XeLaTeX or escape characters.

See `article-template.tex` (bundled) for a clean, commented starting point.
