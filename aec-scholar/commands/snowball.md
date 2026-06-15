---
description: Run a backward/forward citation snowballing protocol to expand a literature set.
argument-hint: <seed paper(s): titles/DOIs, or a file of references>
allowed-tools: Read, Write, WebSearch, WebFetch
---

Run citation snowballing from the seed set: **$ARGUMENTS**

Use the **literature-reviewer** agent and the `systematic-review` skill. Snowballing complements database
searches and is expected in rigorous AEC reviews.

1. **Confirm the seed set.** Identify the starting ("seed") papers (read a provided file if given). Good seeds
   are highly relevant, recent reviews or key primary studies.

2. **Backward snowballing** — examine each seed's **reference list** for relevant prior work. List candidate
   references with why each is relevant; screen against the review's inclusion criteria.

3. **Forward snowballing** — find papers that **cite** each seed (via Google Scholar "cited by", Scopus,
   Semantic Scholar, OpenAlex). List candidates with relevance and screen them.

4. **Iterate** — add newly included papers to the seed set and repeat until no new relevant papers appear
   (saturation). Track iterations.

5. **Document** — record per-seed counts found/screened/included and the total added by snowballing, so it
   slots into the PRISMA "other methods" branch (`/aec-scholar:prisma`). Maintain the running included list.

Using web search, return **real, verifiable** candidate papers (title, authors, year, venue, DOI where
available) with relevance notes — clearly separating verified finds from leads to check. **Never fabricate a
citing/cited paper.** Tell the user to confirm each against the source, and note that automated citation
indices are incomplete (especially for conference papers).
