# Independent Job Search Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Present the bilingual job-search message in its own section before Current Focus.

**Architecture:** Add a static section and navigation anchor in `index.html`, keep its bilingual copy in a dedicated `jobSearch` field, and render it through the existing locale switch in `assets/site.js`.

**Tech Stack:** HTML, JavaScript, Bash smoke tests

---

### Task 1: Add and verify the independent section

**Files:**
- Modify: `tests/smoke.sh`
- Modify: `index.html`
- Modify: `assets/site-data.js`
- Modify: `assets/site.js`

1. Add smoke assertions for the section, navigation target, dedicated data field, and renderer.
2. Run `npm test` and confirm the new assertion fails because the section is missing.
3. Add the section, localized labels and content, and locale-aware rendering.
4. Add the email to the localized job-search copy and to the first profile link with an envelope emoji and `mailto:` target.
5. Run `npm test` and `git diff --check`; expect both to succeed.
