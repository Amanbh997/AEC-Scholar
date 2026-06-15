---
description: Show the AEC Scholar welcome banner and the full command menu.
argument-hint: [optional: a topic to jump straight into]
---

Display the AEC Scholar welcome to the user. Print the banner below **inside a fenced code block exactly as
written** (preserve the ASCII art), then show the categorized command menu, then offer to begin.

If the user passed an argument (`$ARGUMENTS`), after showing the menu, suggest the 2–3 most relevant commands
for that topic and offer to start one immediately.

````
 █████╗ ███████╗ ██████╗   ███████╗ ██████╗██╗  ██╗ ██████╗ ██╗      █████╗ ██████╗
██╔══██╗██╔════╝██╔════╝   ██╔════╝██╔════╝██║  ██║██╔═══██╗██║     ██╔══██╗██╔══██╗
███████║█████╗  ██║        ███████╗██║     ███████║██║   ██║██║     ███████║██████╔╝
██╔══██║██╔══╝  ██║        ╚════██║██║     ██╔══██║██║   ██║██║     ██╔══██║██╔══██╗
██║  ██║███████╗╚██████╗   ███████║╚██████╗██║  ██║╚██████╔╝███████╗██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
        Academic Research Toolkit for Architecture · Engineering · Construction
                          ────────────────────────────────
                     idea → review → design → analysis → write → publish
````

Then render this menu (keep the grouping):

**① Discover & review**
`find-papers` · `lit-review` · `bibliometric` · `snowball` · `prisma` · `summarize-paper` · `synthesize` · `concept-map` · `glossary`

**② Frame & design**
`research-gap` · `research-question` · `methodology` · `data-analysis` · `research-plan` · `dmp` · `ethics-application` · `reproducibility`

**③ Write**
`paper-draft` · `abstract` · `title-keywords` · `figure` · `plain-summary` · `thesis` · `proposal` · `conference` · `poster`

**④ Cite & manage**
`cite` · `bibtex` · `coauthor-credit`

**⑤ Publish & defend**
`journal-match` · `cover-letter` · `peer-review` · `respond-reviewers` · `viva` · `grant-proposal`

Also mention:
- **Subagents** (Claude delegates automatically): literature-reviewer, aec-domain-expert, methodologist,
  academic-writer, peer-reviewer, data-analyst, citation-manager, research-strategist, grant-writer,
  figure-designer.
- **Output style:** run `/output-style aec-academic` for a scholarly working voice.
- **Integrity:** AEC Scholar never fabricates citations, DOIs, data or metrics — it flags what you must verify.

Close by inviting the user to name a topic or pick a command (e.g.
`/aec-scholar:lit-review digital twins for bridge maintenance`).
