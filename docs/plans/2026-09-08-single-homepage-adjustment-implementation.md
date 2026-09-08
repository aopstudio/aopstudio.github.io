# Single Homepage Adjustment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Consolidate engineering and research résumé content into one concise personal homepage and reduce the desktop side rail.

**Architecture:** Reuse the existing data module and homepage renderer. Insert work experience into the homepage content flow, replace standalone résumé routes with migration pages, and narrow the CSS grid rail.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, Bash smoke checks.

---

### Task 1: Integrate content into the homepage

**Files:**
- Modify: `index.html`
- Modify: `assets/site.js`
- Modify: `tests/smoke.sh`

**Step 1:** Require “工作经历” and the experience render target in the smoke check; run `bash tests/smoke.sh` and expect failure.

**Step 2:** Add the experience section between current focus and selected projects; remove both résumé links from the left rail.

**Step 3:** Run `bash tests/smoke.sh` and expect PASS; commit the content change.

### Task 2: Retire standalone résumé presentation and narrow the rail

**Files:**
- Modify: `resume-engineering/index.html`
- Modify: `resume-research/index.html`
- Modify: `assets/site.css`
- Modify: `tests/smoke.sh`

**Step 1:** Require migration-page text and the `--rail-width` CSS token; run `bash tests/smoke.sh` and expect failure.

**Step 2:** Make both résumé routes migration pages pointing home; add a 210px desktop rail token and use it in the homepage grid.

**Step 3:** Run `bash tests/smoke.sh` and expect PASS; commit the route and style change.

### Task 3: Update documentation and validate routes

**Files:**
- Modify: `README.md`
- Modify: `tests/smoke.sh`

**Step 1:** Require README wording that explains the single homepage; run `bash tests/smoke.sh` and expect failure.

**Step 2:** Update page map and run `bash tests/smoke.sh`; request each local route and confirm HTTP 200; commit.
