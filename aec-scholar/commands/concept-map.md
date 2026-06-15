---
description: Build a concept/theory map of an AEC research area (Mermaid) to structure thinking or a review.
argument-hint: <field/topic> [+ paste literature if available]
---

Build a concept map for: **$ARGUMENTS**

Use the **aec-domain-expert** agent and the `aec-domains` skill. If the user provided literature, ground the
map in it; otherwise build from the field's known structure and say the map is a scaffold to validate.

1. **Identify the building blocks.** The core concepts/constructs, sub-themes, methods, technologies,
   standards and outcomes relevant to the area — using canonical AEC terminology.

2. **Define relationships.** How the concepts relate (enables, measures, depends-on, is-a, applies-to,
   trades-off-against). Surface the **intersection zones** where novelty concentrates (e.g., BIM×LCA,
   vision×safety).

3. **Render as a Mermaid diagram** so it displays inline. Use a graph with labeled edges, e.g.:
   ```mermaid
   graph TD
     A[Core problem] --> B[Approach 1]
     A --> C[Approach 2]
     B -->|enables| D[Outcome]
     C -.intersection.-> B
   ```
   Group related nodes with subgraphs where helpful. Keep it readable (don't overcrowd; split into multiple
   maps if needed: a thematic map, a methods map, a standards map).

4. **Narrate the map.** A short walkthrough of the structure, the central tensions, the under-developed
   regions (candidate **gaps**), and how a study or review could be organized around it. Offer to convert it
   into a literature-review outline or a research-gap analysis.

Keep the structure faithful to how the field actually organizes itself; flag any node/relationship that is
your inference rather than established, and recommend validating the map against a real search.
