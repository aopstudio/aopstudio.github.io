# Personal Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a polished, two-audience, static personal portfolio that is ready for GitHub Pages.

**Architecture:** Three dependency-free HTML entry points share a single data module and stylesheet. A small JavaScript module renders repeatable cards from public, curated data and adds progressive scroll-reveal behavior; every core link remains usable without JavaScript.

**Tech Stack:** HTML5, CSS custom properties, vanilla JavaScript, Python standard-library static server for local checking.

---

### Task 1: Establish the static site shell

**Files:**
- Create: `index.html`
- Create: `engineering/index.html`
- Create: `research/index.html`
- Create: `404.html`
- Create: `assets/site.css`
- Create: `assets/site-data.js`
- Create: `assets/site.js`

**Step 1: Create a smoke-check script**

Create `tests/smoke.sh` that asserts the four HTML entry points, stylesheet, data module, and JavaScript module exist; asserts the engineering and research pages link to the shared stylesheet; and exits nonzero on a missing file.

**Step 2: Run the smoke check to verify it fails**

Run: `bash tests/smoke.sh`

Expected: FAIL because the static entry points do not yet exist.

**Step 3: Add semantic document shells**

Use `header`, `nav`, `main`, `section`, and `footer`, set Chinese language metadata, canonical-friendly relative paths, favicon-free metadata, and a no-JavaScript navigation fallback.

**Step 4: Run the smoke check to verify it passes**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add index.html engineering/index.html research/index.html 404.html assets tests/smoke.sh
git commit -m "feat: add portfolio site shell"
```

### Task 2: Add curated public content and two audience narratives

**Files:**
- Modify: `assets/site-data.js`
- Modify: `engineering/index.html`
- Modify: `research/index.html`
- Modify: `index.html`
- Modify: `tests/smoke.sh`

**Step 1: Extend the smoke test with content assertions**

Assert the output contains both audience labels, the GitHub profile, blog domain, Bilibili profile URL, WeChat account name, and the two primary publication years.

**Step 2: Run to verify failure**

Run: `bash tests/smoke.sh`

Expected: FAIL because curated content is not present.

**Step 3: Implement the public data module and content regions**

Centralize profile links, featured projects, articles, publications, research topics, education, and company-safe experience text. Render repeated cards in `assets/site.js`; keep a concise semantic HTML fallback for core identity and navigation. Do not introduce company-private details or unverified metrics.

**Step 4: Verify**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add assets/site-data.js assets/site.js index.html engineering/index.html research/index.html tests/smoke.sh
git commit -m "feat: add engineering and research portfolio content"
```

### Task 3: Implement the editorial visual system and responsive behavior

**Files:**
- Modify: `assets/site.css`
- Modify: `index.html`
- Modify: `engineering/index.html`
- Modify: `research/index.html`

**Step 1: Add static CSS checks**

Extend `tests/smoke.sh` to require a mobile media query, a `prefers-reduced-motion` rule, explicit focus styling, and CSS custom properties for the palette.

**Step 2: Run to verify failure**

Run: `bash tests/smoke.sh`

Expected: FAIL before the CSS system exists.

**Step 3: Implement the design**

Create warm-paper, ink, and vermilion variables; archive-grid backgrounds; distinct engineering/research variants; asymmetric entrance panels; accessible focus states; responsive single-column layout; and restrained reveal transitions that are disabled for reduced motion.

**Step 4: Verify**

Run: `bash tests/smoke.sh`

Expected: PASS.

**Step 5: Commit**

```bash
git add assets/site.css index.html engineering/index.html research/index.html tests/smoke.sh
git commit -m "feat: style editorial portfolio experience"
```

### Task 4: Document GitHub Pages deployment and complete local validation

**Files:**
- Create: `README.md`
- Create: `robots.txt`
- Modify: `tests/smoke.sh`

**Step 1: Add deployment-doc assertions**

Require the README to state GitHub Pages source selection and the Bilibili/profile links to remain valid in the rendered site.

**Step 2: Run to verify failure**

Run: `bash tests/smoke.sh`

Expected: FAIL because deployment documentation is missing.

**Step 3: Write setup instructions**

Document initializing a remote GitHub repository, pushing the already-local repository, selecting `main`/root in Pages, and optionally configuring `neusoftware.top` only if the user chooses to move its existing domain. Include a content update guide and a public-information boundary note.

**Step 4: Validate the final artifact**

Run: `bash tests/smoke.sh && python3 -m http.server 4173 --directory .`

Expected: smoke test PASS; pages load locally at `/`, `/engineering/`, and `/research/`. Perform desktop and mobile visual inspection before stopping the local server.

**Step 5: Commit**

```bash
git add README.md robots.txt tests/smoke.sh
git commit -m "docs: add GitHub Pages deployment guide"
```
