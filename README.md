# AEC Scholar — Academic Research Toolkit for Architecture, Engineering & Construction

> A once-in-a-world, end-to-end research companion for AEC academics, embedded directly in Claude Code.

This repository is a **Claude Code plugin marketplace** that hosts the **AEC Scholar** plugin —
a comprehensive toolkit covering the entire academic research lifecycle, from first idea to published
paper and peer-review rebuttal, with deep, current domain knowledge of Architecture, Engineering & Construction.

---

## What's inside

`aec-scholar/` contains:

| Component | Count | Purpose |
|-----------|-------|---------|
| **Slash commands** | 36 | On-demand workflows you trigger explicitly (`/aec-scholar:lit-review`, `/aec-scholar:peer-review`, …) |
| **Subagents** | 10 | Specialist researchers Claude delegates to (literature reviewer, methodologist, peer reviewer, grant writer, figure designer, …) |
| **Skills** | 16 | Deep, auto-loaded knowledge bases (AEC domains, journals, datasets/tools, PRISMA, bibliometrics, methods, writing, figures, citations, LaTeX, thesis, funding, presentations, open science, ethics) |
| **Output style** | 1 | `aec-academic` — a scholarly working voice |
| **Session hook** | 1 | Makes Claude plugin-aware each session |
| **Optional MCP** | — | Wire up live scholarly APIs (OpenAlex/Crossref/Semantic Scholar) |

See [`aec-scholar/README.md`](aec-scholar/README.md) for the full command/agent/skill reference, or run
`/aec-scholar:help` after install for the branded menu.

---

## Installation

### Option A — Add as a marketplace (recommended)

From inside Claude Code:

```
/plugin marketplace add <path-or-git-url-of-this-repo>
/plugin install aec-scholar@aec-scholar-marketplace
```

If you have this repo cloned locally, point the marketplace at the local path:

```
/plugin marketplace add "C:\Users\AbhinavBhardwaj\OneDrive - COERA AS\Documents\Git\Academic research for AEC"
/plugin install aec-scholar
```

### Option B — Local development / direct load

Launch Claude Code with the plugin directory mounted:

```
claude --plugin-dir "./aec-scholar"
```

### Verify

```
/help
```

You should see the `aec-scholar:*` commands listed. Try:

```
/aec-scholar:lit-review digital twins for construction safety monitoring
```

---

## Quick start: a typical research workflow

| Stage | Command |
|-------|---------|
| 1. Frame the study | `/aec-scholar:research-question` → `/aec-scholar:research-gap` |
| 2. Find the evidence | `/aec-scholar:find-papers` → `/aec-scholar:lit-review` → `/aec-scholar:prisma` |
| 3. Understand the field | `/aec-scholar:bibliometric` → `/aec-scholar:concept-map` → `/aec-scholar:synthesize` |
| 4. Design the study | `/aec-scholar:methodology` → `/aec-scholar:data-analysis` |
| 5. Write it up | `/aec-scholar:paper-draft` → `/aec-scholar:abstract` → `/aec-scholar:title-keywords` |
| 6. Manage references | `/aec-scholar:cite` · `/aec-scholar:bibtex` |
| 7. Publish & defend | `/aec-scholar:journal-match` → `/aec-scholar:peer-review` → `/aec-scholar:respond-reviewers` |
| (funding) | `/aec-scholar:grant-proposal` · `/aec-scholar:summarize-paper` |

---

## Design principles

- **Domain-true.** AEC has its own journals, standards (ISO 19650, IFC, Eurocodes, EN 15978), methods
  (Delphi, design science, building simulation), and subfields. The skills encode this so outputs are
  field-credible, not generic "research advice."
- **Methodologically rigorous.** Reporting guidelines (PRISMA 2020, PRISMA-ScR) and reproducible search
  protocols are built in. The tools push you toward defensible, transparent method.
- **No fabricated scholarship.** The plugin never invents citations, DOIs, or quantitative findings.
  Where it cannot verify a real source it says so and tells you exactly what to confirm.
- **Composable.** Commands chain naturally; subagents and skills are reused across them.

---

## A note on integrity

This toolkit accelerates *your* scholarship; it does not replace it. It will draft, critique, structure
and organize — but you remain the author and the accountable researcher. Always verify every citation
against the primary source, disclose AI assistance per your venue's policy, and never present
machine-generated text or data as independently produced. See the bundled
**`research-ethics-integrity`** skill for venue-aligned guidance.

---

_Authored for COERA. Licensed MIT._
