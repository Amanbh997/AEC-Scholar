# Optional: connect AEC Scholar to live scholarly APIs (MCP)

AEC Scholar works fully without any external services — it uses your provided files plus web search, and it
**never fabricates** sources. But you can make literature discovery far more powerful by connecting Claude
Code to live scholarly databases through **MCP (Model Context Protocol) servers**.

These are **optional** and **not auto-loaded** (so installing the plugin can never fail because a server is
missing). You opt in by adding a server to your own Claude Code config.

## Recommended free, no-auth sources for AEC research
| Source | Why it's good for AEC | Notes |
|--------|----------------------|-------|
| **OpenAlex** | Huge open index, citation graph, concepts, institutions; great recall | Free API, no key |
| **Crossref** | Authoritative DOIs & metadata for journal/conference works | Free API |
| **Semantic Scholar** | Citation graph, TLDRs, influential-citation signals | Free; optional key for higher limits |
| **arXiv / engrXiv (OSF)** | Preprints (some AEC/CS/EESS) | Free |
| **Europe PMC** | Some engineering-adjacent literature | Free |

> Coverage note: these indexes under-represent some AEC **conference proceedings** (ISARC, CIB W78) and
> books. Pair them with Scopus/Web of Science (institutional) and snowballing — see the `aec-journals` and
> `systematic-review` skills.

## How to add a server
Add an MCP server to Claude Code (user or project scope). Two common patterns:

```bash
# Example shape only — replace with an actual MCP server package/command you trust.
claude mcp add openalex -- npx -y <an-openalex-mcp-server-package>
claude mcp add crossref -- uvx <a-crossref-mcp-server-package>
```

Or add it to a project `.mcp.json` (see `academic-servers.example.json` in this folder for the JSON shape).

**Before installing any MCP server:** verify the package is real, maintained, and trustworthy (you are
granting it tool access). The example file uses placeholder package names precisely so it can't silently run
something unexpected — fill in a server you've vetted.

## Using it with AEC Scholar
Once a scholarly MCP server is connected, its search/fetch tools become available to the
`/aec-scholar:find-papers`, `/aec-scholar:lit-review`, `/aec-scholar:snowball` and `summarize-paper`
workflows and to the `literature-reviewer` / `citation-manager` agents — giving them real, verifiable
metadata to work from. The integrity rules still apply: **only real, retrieved sources**, always cite what
was actually returned, and verify against the DOI/publisher page.
