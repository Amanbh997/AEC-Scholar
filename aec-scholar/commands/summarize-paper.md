---
description: Produce a structured summary and critical appraisal of an academic paper.
argument-hint: <paper file/path/DOI/URL or pasted text>
allowed-tools: Read, WebSearch, WebFetch
---

Summarize and critically appraise the paper: **$ARGUMENTS**

If a file path is given, read it. If a DOI/URL is given, fetch what is publicly available (abstract/metadata)
and be explicit about what you could and could not access — **do not invent content you have not read.** If
text is pasted, use it directly.

Produce a structured appraisal (use `academic-writing` and `research-methods`; ground domain judgments in
`aec-domains`):

1. **Citation line** — authors, year, title, venue (formatted; offer full style via `cite`).
2. **Problem & gap** — what problem and gap the paper addresses.
3. **Aim / RQs / hypotheses.**
4. **Method** — design, data/sample, tools, analysis (be specific).
5. **Key findings** — the concrete results (with numbers where stated).
6. **Contribution** — what's genuinely new.
7. **Critical appraisal** — strengths and, candidly, weaknesses: validity, sample/generalizability,
   validation of any model/tool, statistics/effect sizes, over-claiming, reproducibility. For AEC tech
   papers, scrutinize validation and external validity specifically.
8. **Relevance note** — how it relates to the user's stated topic (if any) and which of their RQs it informs.
9. **One-line TL;DR.**

Keep it faithful and proportionate to what the source actually says. If only the abstract was available,
label the summary as abstract-based and flag what needs the full text to confirm.
