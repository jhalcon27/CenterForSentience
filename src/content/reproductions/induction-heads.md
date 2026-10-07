---
title: "Induction heads"
paper:
  title: "In-context Learning and Induction Heads"
  authors: "Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, Nova DasSarma, Tom Henighan, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, Tom Conerly, Dawn Drain, Deep Ganguli, Zac Hatfield-Dodds, Danny Hernandez, Scott Johnston, Andy Jones, Jackson Kernion, Liane Lovitt, Kamal Ndousse, Dario Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish, Chris Olah"
  year: 2022
  url: "https://arxiv.org/abs/2209.11895"
status: "in-progress"
started: 2026-10-01
updated: 2026-10-06
claim: "Induction heads (two-attention-head circuits) are the primary mechanism driving in-context learning across transformer language models."
setup:
  model: "[Model checkpoint, e.g. 2-layer toy model / pythia-70m]"
  libraries:
    - "transformer_lens"
    - "torch"
  compute: "[Hardware environment, e.g. local Apple Silicon / single GPU]"
code: "https://github.com/jhalcon27/induction-heads-reproduction"
draft: true
---

<!--
HOW TO ADD A NEW REPRODUCTION:
1. Create a new markdown file under src/content/reproductions/<slug>.md
2. Set frontmatter:
   - title: Name of mechanism or circuit
   - paper: { title, authors, year, url }
   - status: "in-progress" | "done" | "abandoned"
   - started: YYYY-MM-DD
   - updated: YYYY-MM-DD
   - claim: The specific empirical finding being tested
   - setup: { model, libraries: [...], compute }
   - code: Optional URL to repository or notebook
   - draft: true (set to false to publish in builds, lists, and RSS)
3. Maintain the three required body sections:
   - Results (including Paper vs. mine table)
   - Deviations and surprises
   - Takeaways
-->

## Results

[Placeholder: Describe experimental protocol and evaluation run once completed.]

### Paper vs. mine

| Metric / Property | Paper Reported | My Reproduction | Match? |
| --- | --- | --- | --- |
| Induction head score / circuit formation | [Placeholder] | [Placeholder] | [Pending] |
| Prefix repetition loss reduction | [Placeholder] | [Placeholder] | [Pending] |
| In-context learning slope change | [Placeholder] | [Placeholder] | [Pending] |

## Deviations and surprises

[Placeholder: Document any divergence in architecture, hyperparameters, unexpected attention patterns, or numerical differences.]

## Takeaways

[Placeholder: Document core takeaways, relevance for measuring internal model states, and next steps.]
