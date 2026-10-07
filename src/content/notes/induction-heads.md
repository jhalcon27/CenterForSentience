---
title: "Induction heads"
date: 2026-10-06
summary: "A reproduction of the induction-head circuit from Olsson et al. (2022) and its link to in-context learning."
originalPaper:
  title: "In-context Learning and Induction Heads"
  authors: "Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, Nova DasSarma, Tom Henighan, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, Tom Conerly, Dawn Drain, Deep Ganguli, Zac Hatfield-Dodds, Danny Hernandez, Scott Johnston, Andy Jones, Jackson Kernion, Liane Lovitt, Kamal Ndousse, Dario Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish, Chris Olah"
  year: 2022
  url: "https://arxiv.org/abs/2209.11895"
codeUrl: "https://github.com/jhalcon27/induction-heads-reproduction"
tag: "Reproduction"
status: "in-progress"
draft: true
---

## Claim tested

Induction heads (two-attention-head circuits) are the primary mechanism driving in-context learning across transformer language models.

## Setup

- **Model:** [Model checkpoint, e.g. 2-layer toy model / pythia-70m]
- **Libraries:** transformer_lens, torch
- **Compute:** [Hardware environment, e.g. local Apple Silicon / single GPU]

Started 2026-10-01.

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
