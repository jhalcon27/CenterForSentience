# Reproductions Collection

This directory contains reproduction write-ups for mechanistic interpretability papers.

## How to Add a New Reproduction

1. Copy `induction-heads.md` or create `<slug>.md` in this directory.
2. Fill out the frontmatter schema:

```yaml
---
title: "Circuit / phenomenon title"
paper:
  title: "Original Paper Title"
  authors: "Authors list"
  year: 2024
  url: "https://arxiv.org/abs/..."
status: "in-progress" # "in-progress" | "done" | "abandoned"
started: 2026-10-06
updated: 2026-10-06
claim: "The exact, single empirical claim being reproduced"
setup:
  model: "Target model, e.g. pythia-70m"
  libraries:
    - "transformer_lens"
    - "torch"
  compute: "Hardware used, e.g. Apple Silicon M2"
code: "https://github.com/..." # optional
draft: true # keep true while in progress; set to false to publish
---
```

3. Structure the markdown body into the three standard sections:
   - `## Results` with a `### Paper vs. mine` comparison table
   - `## Deviations and surprises`
   - `## Takeaways`

4. When ready to publish:
   - Change `draft: false`.
   - Run `npm run build` to verify the page renders, appears on `/reproductions/`, and is included in the RSS feed (`/reproductions/rss.xml`).
