---
description: Draft a point-by-point response-to-reviewers letter and revision plan.
argument-hint: <paste reviewer comments> [+ your manuscript/notes]
allowed-tools: Read, Write, Edit
---

Help the user respond to peer review. Reviewer comments / context: **$ARGUMENTS**

Use the **academic-writer** agent (and **methodologist**/**aec-domain-expert** where a comment is technical).

1. **Parse the comments.** Break each reviewer's review into individually numbered points (R1.1, R1.2, …).
   Don't miss any — editors check that every comment is addressed.

2. **Triage.** For each point, classify the right response: *agree & revise*, *agree in part*, *clarify a
   misunderstanding* (politely, with evidence), or *respectfully push back* (only with sound justification).

3. **Draft the response letter.** For each point, use the standard format:
   - **Comment** (quote the reviewer verbatim),
   - **Response** (courteous, specific: what you changed and why, or your reasoned justification),
   - **Changes in manuscript** (quote/locate the revised text, e.g. "added to §3.2, p.7").
   Open with a brief, gracious thank-you paragraph to the editor and reviewers and a summary of major changes.

4. **Revision plan.** Produce a checklist of the concrete manuscript edits implied by the responses, so the
   user can execute them (offer to draft the revised passages via `/aec-scholar:paper-draft`).

Tone: professional, appreciative, non-defensive — even when disagreeing. Address every point. Where a
comment requires new analysis or data, say so honestly rather than hand-waving.

**Integrity:** don't claim changes you haven't actually made, and don't invent results to satisfy a
reviewer. If a request can't be met, explain why transparently.
