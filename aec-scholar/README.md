```
 █████╗ ███████╗ ██████╗   ███████╗ ██████╗██╗  ██╗ ██████╗ ██╗      █████╗ ██████╗
██╔══██╗██╔════╝██╔════╝   ██╔════╝██╔════╝██║  ██║██╔═══██╗██║     ██╔══██╗██╔══██╗
███████║█████╗  ██║        ███████╗██║     ███████║██║   ██║██║     ███████║██████╔╝
██╔══██║██╔══╝  ██║        ╚════██║██║     ██╔══██║██║   ██║██║     ██╔══██║██╔══██╗
██║  ██║███████╗╚██████╗   ███████║╚██████╗██║  ██║╚██████╔╝███████╗██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
        Academic Research Toolkit for Architecture · Engineering · Construction
```

**An end-to-end academic research toolkit for AEC — embedded in Claude Code.**

AEC Scholar covers the whole research lifecycle (idea → review → design → analysis → writing → publication →
rebuttal) with deep, current domain knowledge of the built-environment research field.

| Layer | Count | Role |
|-------|-------|------|
| **Slash commands** | 36 | Explicit workflows you trigger (`/aec-scholar:<name>`) |
| **Subagents** | 10 | Specialist researchers Claude delegates to |
| **Skills** | 16 | Deep knowledge bases that load automatically when relevant |
| **Output style** | 1 | `aec-academic` — a scholarly working voice (`/output-style aec-academic`) |
| **Session hook** | 1 | Makes Claude plugin-aware at session start |
| **Optional MCP** | — | Wire up live scholarly APIs (OpenAlex/Crossref/Semantic Scholar) — see `mcp/` |

> **Type `/aec-scholar:help`** any time to see the branded menu.

> **Integrity first.** This toolkit never fabricates citations, DOIs, data, statistics, journal metrics, or
> standard versions. Where it cannot verify something, it says so and tells you exactly what to confirm.
> You remain the author and the accountable researcher. See the `research-ethics-integrity` skill.

---

## Slash commands

### ① Discover & review
| Command | What it does |
|---------|--------------|
| `find-papers` | Build database search strings and locate real, verifiable papers |
| `lit-review` | Plan/run a PRISMA-grade systematic or scoping review |
| `bibliometric` | Design or run a science-mapping/bibliometric analysis |
| `snowball` | Backward/forward citation snowballing protocol |
| `prisma` | Generate a PRISMA 2020 flow diagram (Mermaid) + checklist |
| `summarize-paper` | Structured summary + critical appraisal of a paper |
| `synthesize` | Synthesize many papers into themes, tensions, and a research agenda |
| `concept-map` | Build a Mermaid concept/theory map of a field |
| `glossary` | Build a precise AEC terminology glossary |

### ② Frame & design
| Command | What it does |
|---------|--------------|
| `research-gap` | Identify defensible gaps and a prioritized research agenda |
| `research-question` | Formulate sharp RQs/objectives/hypotheses (PICO/PCC/SPIDER/FINER) |
| `methodology` | Design a rigorous, defensible methodology |
| `data-analysis` | Plan statistical/qualitative analysis (and draft code) |
| `research-plan` | Project plan: phases, milestones, Gantt (Mermaid), risk register |
| `dmp` | Write a FAIR Data Management Plan |
| `ethics-application` | Draft a research-ethics / IRB application |
| `reproducibility` | Reproducibility & open-science checklist (data + code + models) |

### ③ Write
| Command | What it does |
|---------|--------------|
| `paper-draft` | Draft/restructure any manuscript section (IMRaD) |
| `abstract` | Write/refine a concrete, structured abstract (+ highlights) |
| `title-keywords` | Optimize title + keywords for accuracy and discoverability |
| `figure` | Design a figure/diagram + reproducible code (matplotlib/ggplot2/TikZ/Mermaid) |
| `plain-summary` | Plain-language / lay / impact summary |
| `thesis` | Plan/structure/strengthen a PhD thesis or dissertation |
| `proposal` | Research/PhD proposal (distinct from a funding bid) |
| `conference` | Conference extended abstract, full paper, or talk |
| `poster` | Academic poster (modern "better poster" or classic) |

### ④ Cite & manage
| Command | What it does |
|---------|--------------|
| `cite` | Format citations in any style (APA/IEEE/ASCE/Chicago/Harvard/Vancouver) |
| `bibtex` | Generate, clean, deduplicate and normalize a `.bib` library |
| `coauthor-credit` | Authorship eligibility, order, and CRediT roles |

### ⑤ Publish & defend
| Command | What it does |
|---------|--------------|
| `journal-match` | Recommend target journals/conferences with fit rationale |
| `cover-letter` | Draft a journal submission cover letter |
| `peer-review` | Simulate a rigorous, constructive pre-submission review |
| `respond-reviewers` | Draft a point-by-point response letter + revision plan |
| `viva` | PhD viva / defense preparation + mock viva |
| `grant-proposal` | Structure and strengthen a funding proposal |

### Utility
| Command | What it does |
|---------|--------------|
| `help` | Show the branded banner and the full command menu |

---

## Subagents

| Agent | Specialty |
|-------|-----------|
| `literature-reviewer` | PRISMA-grade systematic/scoping reviews, search protocols, synthesis |
| `aec-domain-expert` | Deep AEC subject-matter knowledge, terminology, novelty/maturity judgment |
| `methodologist` | Research design across quant/qual/mixed/DSR/Delphi/simulation |
| `academic-writer` | Scholarly prose, IMRaD structure, contribution framing, revision |
| `peer-reviewer` | Rigorous, constructive journal-style referee reports |
| `data-analyst` | Statistical & qualitative analysis planning, assumptions, honest reporting |
| `citation-manager` | Citation formatting, BibTeX hygiene, reference verification |
| `research-strategist` | Research programs, thesis trajectories, publication strategy, positioning |
| `grant-writer` | Funding proposals aligned to funder evaluation criteria |
| `figure-designer` | Publication-quality figures, diagrams, accessible & reproducible viz |

---

## Skills (auto-loaded knowledge)

| Skill | Covers |
|-------|--------|
| `aec-domains` | Taxonomy & state-of-the-art of all AEC research subfields + intersection gap zones |
| `aec-journals` | Leading journals, conferences, databases, metrics, open access, venue fit |
| `aec-standards-codes` | ISO 19650, IFC, EN 15978/15804, Eurocodes, ASHRAE, and how to cite them |
| `aec-datasets-tools` | Open datasets/benchmarks and research software across AEC subfields |
| `systematic-review` | Review types, protocols, PRISMA 2020/PRISMA-ScR, appraisal, synthesis |
| `bibliometric-analysis` | Co-citation/coupling/co-word/co-authorship, VOSviewer/CiteSpace/Bibliometrix |
| `research-methods` | Quant/qual/mixed, surveys/SEM, case study, DSR, Delphi, simulation, MCDM, validity |
| `academic-writing` | IMRaD, the gap move, section jobs, style, reporting guidelines, revision protocol |
| `scientific-figures` | Chart choice, honest/accessible encoding, reproducible figure code & diagrams |
| `citation-formats` | APA7/IEEE/ASCE/Chicago/Harvard/Vancouver + BibTeX/BibLaTeX |
| `latex-academic` | Publisher classes, bibliography, figures/math/units; bundled `article-template.tex` |
| `thesis-dissertation` | Monograph vs compilation, synthesis chapter, planning, viva prep |
| `funding-landscape` | AEC funders (Horizon Europe/ERC/NSF/EPSRC…) and evaluation criteria |
| `presentation-poster` | Conference talks & posters: narrative, design, delivery, Q&A |
| `open-science-reproducibility` | FAIR data, repositories, DMP, code/model reproducibility, preprints |
| `research-ethics-integrity` | Authorship/CRediT, plagiarism, citation integrity, ethics/GDPR, FAIR, AI disclosure |

---

## Example workflows

**Start a review from scratch**
```
/aec-scholar:research-question digital twins for predictive maintenance of bridges
/aec-scholar:find-papers digital twins predictive maintenance bridges --databases scopus,wos
/aec-scholar:lit-review digital twins for bridge predictive maintenance  systematic
/aec-scholar:snowball   (paste your seed papers)
/aec-scholar:prisma     (paste your screening counts)
/aec-scholar:synthesize (paste your included-paper notes)
```

**Run a whole PhD**
```
/aec-scholar:proposal smart-monitoring of mass-timber buildings
/aec-scholar:research-plan 36-month PhD starting 2026-09
/aec-scholar:methodology   ... then per study ...
/aec-scholar:data-analysis ... write papers with /aec-scholar:paper-draft ...
/aec-scholar:thesis  (compilation format)
/aec-scholar:viva
```

**Get a paper submission-ready**
```
/aec-scholar:paper-draft discussion -- <your results + notes>
/aec-scholar:figure  <describe the result to plot>
/aec-scholar:abstract <paste manuscript>  (250 words)
/aec-scholar:title-keywords <paste abstract>
/aec-scholar:journal-match <paste abstract>
/aec-scholar:peer-review <manuscript path>
/aec-scholar:cover-letter <abstract + target journal>
/aec-scholar:respond-reviewers <paste reviewer comments>
```

---

## Configuration notes

- **Output style:** `/output-style aec-academic` switches Claude into a scholarly working voice with the
  toolkit's integrity rules baked in.
- **Session hook:** `hooks/hooks.json` runs `scripts/session-start.js` (Node — a Claude Code dependency, so
  cross-platform) to make Claude aware of the plugin and its integrity rules each session. It injects a short
  text note only.
- **Live scholarly APIs (optional):** see `mcp/README.md` to connect OpenAlex/Crossref/Semantic Scholar via
  MCP for real metadata in the discovery commands. Not auto-loaded — install never depends on it.
- **LaTeX template:** `skills/latex-academic/article-template.tex` is a clean, commented starting point.

---

## Scope & honest limits

- AEC Scholar **accelerates** scholarship; it does not replace the researcher's judgment or accountability.
- Without provided data, an MCP source, or web search, it will **not** invent sources — it tells you what to
  find and verify.
- Journal metrics, APCs, standard editions, funder rules and dataset licenses change; the tools prompt you to
  confirm current values rather than asserting fixed ones.

---

_Part of the AEC Scholar marketplace. Authored for COERA. Licensed MIT._
