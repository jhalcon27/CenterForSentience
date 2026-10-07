# Research notes

Short, English-only write-ups listed under "Research Notes" at the bottom of
`/reports/` (and its localized variants), each rendered at
`/reports/notes/<slug>/`. The slug is the file name without `.md`/`.mdx`.

Files starting with `_` (like this one) are ignored by the collection.

## Adding a note

1. Create `src/content/notes/<slug>.md`.
2. Fill in the frontmatter (schema in `src/content/config.ts`):

```yaml
---
title: "Note title"                  # required
date: 2026-10-07                     # required, YYYY-MM-DD; list is sorted newest first
summary: "One or two sentences."     # required, shown in the /reports/ list
originalPaper:                       # optional
  title: "Original paper title"
  authors: "First Author, Second Author"
  year: 2024
  url: "https://arxiv.org/abs/..."
codeUrl: "https://github.com/..."    # optional
tag: "Reproduction"                  # optional small label
status: "in-progress"                # optional: "in-progress" | "complete"; only "in-progress" shows a label
draft: true                          # optional, defaults to false
---
```

3. Write the body. The template below is a recommendation, not a requirement.
4. Run `npm run build` and check `/reports/` and `/reports/notes/<slug>/`.

Drafts (`draft: true`) are left out of production builds: no page is generated
and they do not appear in the list. They are visible under `npm run dev`.

## Recommended body template

```markdown
## Claim tested

The specific claim from the original work being tested.

## Setup

- **Model:**
- **Libraries:**
- **Compute:**

## Results

What was run and what came out. A "paper vs. mine" table works well here.

## Deviations

Where the setup or the results differ from the original, and why.

## Takeaways

What this changes or confirms, and next steps.
```
