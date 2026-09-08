# Bilingual Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a complete Chinese/English switcher to the single portfolio homepage without duplicating page markup.

**Architecture:** Put localized content and UI labels in one `content` object keyed by `zh` and `en`. Keep `index.html` structural, annotate its fixed text targets with ids, and let `assets/site.js` select and render the active locale. The URL query (`?lang=en`) takes priority over a saved browser preference; switching updates both the URL and preference.

**Tech Stack:** Static HTML, browser-native ES modules, Tailwind CSS v4, Bash smoke checks.

---

### Task 1: Define bilingual content and labels

**Files:**
- Modify: `assets/site-data.js`
- Test: `tests/smoke.sh`

**Step 1: Write the failing check**

Require exported Chinese and English content plus a visible English switch target.

**Step 2: Run the check to verify it fails**

Run: `bash tests/smoke.sh`

Expected: FAIL because bilingual data does not yet exist.

**Step 3: Implement the localized data model**

Replace duplicated/unused `experience` content with a locale-keyed profile, UI copy, timeline, projects, publications, articles, and external-link labels. Preserve existing URLs and the approved Chinese content.

**Step 4: Run the check to verify it passes**

Run: `bash tests/smoke.sh`

Expected: PASS after rendering support is complete.

### Task 2: Render and switch locale in one page

**Files:**
- Modify: `index.html`
- Modify: `assets/site.js`
- Test: `tests/smoke.sh`

**Step 1: Add deterministic targets**

Give every fixed Chinese label an id and add one accessible language-toggle button in the existing top-right toolbar.

**Step 2: Implement locale selection**

Use `?lang=en` when present, otherwise a stored preference, otherwise Chinese. On selection, update all text, `document.title`, meta description, `html[lang]`, URL, and browser preference.

**Step 3: Verify behavior**

Run: `npm run build:css && bash tests/smoke.sh`.

Expected: PASS.

### Task 3: Browser acceptance check

**Files:**
- No source changes expected.

**Step 1: Open the local homepage with `?lang=en`**

Confirm English navigation, timeline, project copy, and publication cards are present.

**Step 2: Toggle back to Chinese**

Confirm URL and page language switch to Chinese while keeping the current section anchor.

**Step 3: Check diffs**

Run: `git diff --check`.

Expected: no whitespace errors.
