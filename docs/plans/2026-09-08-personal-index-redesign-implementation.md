# Personal Index Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the two-poster portfolio with a concise technical personal homepage and separate engineering/research résumé routes.

**Architecture:** Keep the existing dependency-free static site and shared `assets/site-data.js` content source. Replace the existing route markup and CSS theme; add two print-friendly résumé routes and compatibility pages for the previous URLs.

**Tech Stack:** HTML5, CSS custom properties, vanilla JavaScript, Bash smoke checks, Python static server.

---

### Task 1: Establish the new routes and navigation shell

**Files:**
- Create: `resume-engineering/index.html`
- Create: `resume-research/index.html`
- Modify: `index.html`
- Modify: `engineering/index.html`
- Modify: `research/index.html`
- Modify: `tests/smoke.sh`

**Step 1: Write failing route assertions**

Require both résumé pages, the labels “工程简历” and “研究简历”, and a home navigation link in each route.

**Step 2: Run the check**

Run: `bash tests/smoke.sh`

Expected: FAIL because the résumé routes do not exist.

**Step 3: Implement semantic route shells**

Replace the split-panel home with one identity-first page. Create the two résumé pages with an accessible header and print title. Make the old engineering/research pages forward readers to the new corresponding résumé route without JavaScript-only navigation.

**Step 4: Run the check**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add index.html engineering/index.html research/index.html resume-engineering/index.html resume-research/index.html tests/smoke.sh
git commit -m "feat: add personal index routes"
```

### Task 2: Replace inflated copy with factual public content

**Files:**
- Modify: `assets/site-data.js`
- Modify: `assets/site.js`
- Modify: `index.html`
- Modify: `resume-engineering/index.html`
- Modify: `resume-research/index.html`
- Modify: `tests/smoke.sh`

**Step 1: Write failing content assertions**

Require home sections for “正在做”, “精选项目”, “论文与研究”, “最新输出”, the GitHub/blog/Bilibili links, and the two CV audiences.

**Step 2: Run the check**

Run: `bash tests/smoke.sh`

Expected: FAIL before the updated content regions exist.

**Step 3: Implement concise data and renderers**

Use one-sentence factual introductions, project descriptions with public links, formal publication links where available, and company-safe duty summaries. Remove slogan-like hero text and unsupported metrics. Render the homepage as a chronological personal index and render distinct content order in each résumé.

**Step 4: Run the check**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add assets/site-data.js assets/site.js index.html resume-engineering/index.html resume-research/index.html tests/smoke.sh
git commit -m "feat: add evidence-led personal index content"
```

### Task 3: Apply the restrained creator-homepage visual system

**Files:**
- Modify: `assets/site.css`
- Modify: `index.html`
- Modify: `resume-engineering/index.html`
- Modify: `resume-research/index.html`
- Modify: `tests/smoke.sh`

**Step 1: Write failing style assertions**

Require a desktop side navigation rule, a mobile breakpoint, keyboard focus styling, print styles, and a single accent color variable.

**Step 2: Run the check**

Run: `bash tests/smoke.sh`

Expected: FAIL before these rules are present.

**Step 3: Implement the style system**

Use near-white background, dark text, muted blue-green accents, a compact fixed left rail on desktop, readable single-column main content, reserved whitespace, and low-motion hover states. Add `@media print` so résumé pages print cleanly without navigation or external chrome.

**Step 4: Run the check**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add assets/site.css index.html resume-engineering/index.html resume-research/index.html tests/smoke.sh
git commit -m "feat: redesign portfolio as technical personal index"
```

### Task 4: Validate local routes and update deployment instructions

**Files:**
- Modify: `README.md`
- Modify: `tests/smoke.sh`

**Step 1: Write failing documentation assertions**

Require the README to list the homepage and both new résumé URLs.

**Step 2: Run the check**

Run: `bash tests/smoke.sh`

Expected: FAIL before the route documentation is updated.

**Step 3: Update the README**

Document local preview and the new URL map. Preserve the existing GitHub Pages instructions and public-information boundary.

**Step 4: Verify routes**

Run: `bash tests/smoke.sh && python3 -m http.server 4173 --directory .`

Expected: smoke check PASS; `/`, `/resume-engineering/`, `/resume-research/`, `/engineering/`, and `/research/` return 200 when requested.

**Step 5: Commit**

```bash
git add README.md tests/smoke.sh
git commit -m "docs: document personal index routes"
```
