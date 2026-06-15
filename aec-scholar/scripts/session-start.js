#!/usr/bin/env node
/**
 * AEC Scholar — SessionStart hook.
 * Emits a short standing instruction (additionalContext) so Claude knows the
 * plugin is available and how to use it. Plain text only (no ANSI) to keep
 * the context clean. Node is a hard dependency of Claude Code, so this runs
 * cross-platform without a shell.
 */
const note = [
  "The AEC Scholar plugin is active: an academic-research toolkit for Architecture, Engineering & Construction (AEC).",
  "It provides /aec-scholar:* slash commands (literature review, bibliometrics, research questions, methodology, data analysis, scholarly writing, abstracts, citations/BibTeX, journal targeting, peer review, rebuttals, theses, proposals, grants, figures, posters, data-management and more), specialist subagents, and deep AEC research skills.",
  "When the user's task involves AEC academic research, prefer the relevant aec-scholar commands, agents, and skills.",
  "Integrity rule (non-negotiable): never fabricate citations, DOIs, data, statistics, journal metrics, or standard versions; always flag anything unverified and tell the user what to confirm.",
  "If the user asks what is available or how to start, point them to /aec-scholar:help."
].join(" ");

const out = {
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: note
  }
};

process.stdout.write(JSON.stringify(out));
