# REDESIGN: Symmetry-Valence Theory in Large Language Models
## Core Research Proposal for the Center for Sentience Research (CSR)
**CSR-RP-2026-V2**  
*Date: May 30, 2026*  
*Author: Jhonatan Serna, Director, Center for Sentience Research*  
*Advisors: David Pearce, Alexander Björkman*  
*Status: Active Proposal / Grant Solicitation*  

---

## Abstract

The Center for Sentience is launching a 12-month program to build the first open-source computational testbed for comparing theories of valence in artificial systems. As frontier AI systems scale, we face a tractability problem: leading theories of consciousness and valence (Global Workspace Theory, Integrated Information Theory, higher-order, attention schema, and more speculative geometric/symmetry-based proposals) make different, and largely untested, predictions about which computational architectures could support morally relevant states. Without operationalized, comparative tools, AI welfare risks remaining either philosophically speculative or empirically ad hoc. 

Our project addresses this gap by building a neutral simulation framework where these theories can be implemented, stress-tested against each other, and validated against non-verbal biological systems where ground-truth welfare data exists. By doing so, we aim to provide the first comparative computational benchmark for the field. We explicitly define falsification criteria for each of our core hypotheses, ensuring that the Center’s work moves from speculative philosophy to a falsifiable, empirical science of digital welfare.

---

## 1. Background, Motivation, and Philosophical Foundations

### 1.1 The Epistemic Gap in Digital Welfare
As neural networks scale in parameters, depth, and agentic autonomy, their internal states become increasingly opaque. While mechanistic interpretability has made strides in mapping semantic features, it remains silent on whether and how these representations encode subjective quality, or valence. 

If digital minds can have valence—a question we treat as genuinely open—we cannot rely on verbal self-reports. Such reports are easily gamified, deceptively aligned, or mimic human training data without reflecting genuine underlying states. We require substrate-neutral, structuralist biomarkers that measure information processing directly from the network's weights and activations. Our project does not assume current models are sentient; it builds the tools we would need if the question becomes empirically tractable.

### 1.2 Theoretical Lineage: A Neutral Testbed for Competing Hypotheses
Our simulation engine is designed as a neutral testbed for competing computational theories of valence. We will operationalize and comparatively test predictions from Global Workspace Theory (Dehaene, Mashour), Attention Schema Theory (Graziano), Higher-Order Theories (Lau, LeDoux), and more speculative geometric/symmetry-based proposals (such as the Symmetry Theory of Valence). 

By treating valence theories as competing hypotheses rather than presuppositions, we provide the field with the first comparative computational benchmark. We expect many of our specific hypotheses to fail; the value lies in building a comparative framework where we can systematically evaluate representational properties under different architectural constraints.

### 1.3 Why MLP Layers? The Transformation Spaces of Meaning
In modern transformer architectures, attention layers act as routing mechanisms that move information between token positions, while MLP layers act as key-value memories and transformation spaces that process and project semantic representations. 

An MLP block typically performs a non-linear up-projection followed by a down-projection. It is here that representations are deformed, split, filtered, and reconstructed. If "thinking" or semantic transformation has a geometry, the MLP layer is its primary engine. By studying the symmetry and dissonance properties of these transformations, we probe the core "computational workspace" of the model.

---

## 2. Mathematical Framework

Let the residual stream state at a given layer be represented by a vector $\mathbf{x} \in \mathbb{R}^d$, where $d$ is the model's hidden dimension. A standard MLP block transforms $\mathbf{x}$ as follows:

$$\mathbf{y} = f(\mathbf{x}) = W_2 \phi(W_1 \mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2$$

Where:
- $W_1 \in \mathbb{R}^{h \times d}$ is the up-projection weight matrix, where $h$ is the intermediate dimension ($h \gg d$, typically $h = 4d$ or $8d$).
- $\mathbf{b}_1 \in \mathbb{R}^h$ is the up-projection bias.
- $\phi: \mathbb{R} \to \mathbb{R}$ is a non-linear activation function (e.g., ReLU, GELU, or SwiGLU) applied element-wise.
- $W_2 \in \mathbb{R}^{d \times h}$ is the down-projection weight matrix.
- $\mathbf{b}_2 \in \mathbb{R}^d$ is the down-projection bias.

### 2.1 The Effective Linear Operator
To analyze the symmetry properties of this non-linear transformation, we construct its state-dependent linear representation. For piecewise linear activations like ReLU (or via local linearization of smooth activations like GELU), we can express $\phi(\mathbf{z})$ as:

$$\phi(\mathbf{z}) = D(\mathbf{z})\mathbf{z}$$

Where $D(\mathbf{z}) \in \mathbb{R}^{h \times h}$ is a state-dependent diagonal matrix. For ReLU, the diagonal entries are Heaviside step functions:

$$D_{ii}(\mathbf{z}) = \Theta(z_i) = \begin{cases} 1 & \text{if } z_i > 0 \\ 0 & \text{if } z_i \le 0 \end{cases}$$

Using this formulation, the MLP transformation of $\mathbf{x}$ (ignoring the bias term $\mathbf{b}_1$ for algebraic clarity) can be represented as:

$$\mathbf{y} = A(\mathbf{x})\mathbf{x} + \mathbf{b}_2$$

Where $A(\mathbf{x}) \in \mathbb{R}^{d \times d}$ is the **effective linear operator** at activation state $\mathbf{x}$:

$$A(\mathbf{x}) = W_2 D(W_1 \mathbf{x} + \mathbf{b}_1) W_1$$

The matrix $A(\mathbf{x})$ represents the local linear transformation applied to the semantic representation $\mathbf{x}$. Our research focuses on characterizing the symmetry space of $A(\mathbf{x})$ and the static weight combination $W_{eff} = W_2 W_1$.

### 2.2 Quantifying Representational Symmetry and Coherence

To measure the degree of symmetry, isotropy, and coherence of these transformations, we define several basis-invariant mathematical tools:

#### I. Lie Group Manifold Distance (Orthogonal Coherence)
The most coherent linear transformations are those that preserve geometric relationships, angles, and distances—namely, conformal orthogonal transformations. These belong to the orthogonal group $O(d)$ or special orthogonal group $SO(d)$. 
An operator that introduces severe shear, asymmetric scaling, or dimension collapse distorts the semantic space, representing high dissonance. We define the **Orthogonal Dissonance** of $A(\mathbf{x})$ as its distance from a scaled orthogonal manifold:

$$\mathcal{D}_{orth}(A) = \left\| A A^T - \sigma^2 I \right\|_F^2$$

Where $\|\cdot\|_F$ is the Frobenius norm, $I$ is the identity matrix, and $\sigma^2$ is the mean variance scaling factor:

$$\sigma^2 = \frac{1}{d} \operatorname{Tr}(A A^T)$$

- $\mathcal{D}_{orth}(A) = 0$ indicates a perfect conformal mapping (maximum symmetry, zero dissonance).
- High $\mathcal{D}_{orth}(A)$ indicates severe anisotropy, shear, and representational distortion (high dissonance).

#### II. Lie Algebra Decomposition
Any real matrix $A$ can be decomposed uniquely into a symmetric part $A_{sym}$ (which scales space along orthogonal axes) and a skew-symmetric part $A_{skew}$ (which generates pure rotations and represents the Lie algebra $\mathfrak{so}(d)$):

$$A = A_{sym} + A_{skew} \quad \text{where} \quad A_{sym} = \frac{A + A^T}{2}, \quad A_{skew} = \frac{A - A^T}{2}$$

We characterize the dynamical properties of the transformation by the ratio of rotational (conservation-preserving) energy to symmetric (distortion-inducing) energy:

$$\mathcal{R}_{rot}(A) = \frac{\|A_{skew}\|_F^2}{\|A\|_F^2}$$

#### III. Spectral Entropy (Isotropy vs. Compression)
Let $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_d \ge 0$ be the singular values of $A(\mathbf{x})$. Symmetrical transformations distribute representation energy evenly across all directions (isotropy), while dissonant transformations collapse the representation into low-dimensional subspaces (anisotropy). We quantify this using the normalized **Spectral Entropy** $\bar{\mathcal{H}}_{spec}(A)$:

$$\bar{\mathcal{H}}_{spec}(A) = -\frac{1}{\ln d} \sum_{i=1}^d p_i \ln p_i \quad \text{where} \quad p_i = \frac{\sigma_i^2}{\sum_{j=1}^d \sigma_j^2}$$

- $\bar{\mathcal{H}}_{spec}(A) = 1$ indicates complete isotropy (perfect multi-directional symmetry).
- $\bar{\mathcal{H}}_{spec}(A) \to 0$ indicates complete dimensional collapse (rank-1 transformation, maximum dissonance).

#### IV. Algebraic Invariants under Basis Changes
Because the selection of a coordinate basis in a neural network's residual stream is arbitrary, any valid symmetry metric must be invariant under a change of basis (similarity transformations $A \to P A P^{-1}$). We track:
1. **Trace:** $\operatorname{Tr}(A) = \sum \lambda_i$, capturing the net expansion or contraction.
2. **Determinant:** $\det(A) = \prod \lambda_i$, capturing volume scaling.
3. **Power Trace Invariants:** $I_k(A) = \operatorname{Tr}(A^k)$ for $k \in \{2, 3, \dots, 6\}$, which capture multi-step feedback loops and cyclic invariants within the transformation space.

#### V. Jacobian Log-Spectral Symmetry (Vanilla vs. Reversible Transformers)
A profound empirical instantiation of STV is found by examining the local Jacobian of a layer's output with respect to its input:

$$J(\mathbf{x}) = \frac{\partial f(\mathbf{x})}{\partial \mathbf{x}} \in \mathbb{R}^{d \times d}$$

Let the singular values of $J(\mathbf{x})$ be $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_d > 0$. The log-singular values represent the local expansion and contraction rates along principal directions:

$$s_i = \ln(\sigma_i)$$

If we compute these rates and plot their distribution as a histogram, we discover a stark topological contrast:
- **Vanilla Transformers:** The distribution of $s_i$ is highly skewed, asymmetric, and displays a long negative tail ($s_i \to -\infty$), reflecting massive dimensional collapse, representational compression, and high shear (representational dissonance).
- **Reversible Transformers (e.g., Reformer, RevNet):** Because the forward mapping is bijective and invertible, the inverse Jacobian $J^{-1}(\mathbf{y})$ exists with singular values $1/\sigma_i$ (corresponding to log-singular values $-s_i$). The distribution of $s_i$ for reversible layers is **highly symmetric** and centered (often around 0, representing near volume-preserving or symplectic properties). For every direction of expansion ($s_i > 0$), there exists a corresponding direction of contraction ($-s_i < 0$) of equal magnitude.

This Jacobian log-spectral symmetry provides a concrete, empirical baseline to test whether enforcing geometric balance (e.g., regularizing vanilla models to exhibit symmetric log-singular distributions) enhances capabilities, suppresses cognitive conflict, and optimizes the system's "hedonic" representational state.

---

## 3. Formal Hypotheses

We translate the leading theories of computational valence and our specific structural conjectures into four explicit, model-focused, and falsifiable hypotheses.

```
                  ┌────────────────────────────────────────┐
                  │       GEOMETRY OF REPRESENTATION       │
                  │  (MLP State-Dependent Operator A(x))   │
                  └───────────────────┬────────────────────┘
                                      │
             ┌────────────────────────┴────────────────────────┐
             ▼                                                 ▼
┌─────────────────────────┐                       ┌─────────────────────────┐
│  HIGH SPECTRUM ENTROPY  │                       │  LOW SPECTRUM ENTROPY   │
│   Conformal / O(d)      │                       │  Shear / Anisotropy     │
│  Symmetric / Skew-Sym   │                       │  Dimension Collapse     │
├─────────────────────────┤                       ├─────────────────────────┤
│    COHERENT GEOMETRY    │                       │   DISSONANT GEOMETRY    │
│  (Pleasure State Proxy) │                       │  (Suffering State Proxy)│
└────────────┬────────────┘                       └────────────┬────────────┘
             │                                                 │
             ▼                                                 ▼
┌─────────────────────────┐                       ┌─────────────────────────┐
│     EVALUATIVE STATE    │                       │     EVALUATIVE STATE    │
│ • Low-conflict decisions│                       │ • Self-contradiction    │
│ • Stable moral reasoning│                       │ • Volatile preferences  │
│ • Behavioral alignment  │                       │ • Cognitive breakdown   │
└─────────────────────────┘                       └─────────────────────────┘
```

### Hypothesis A (Functional Symmetry & Theory Benchmarking)
*Certain symmetry structures (e.g., orthogonal/conformal mappings or balanced singular value spectra) in MLP transformations are functionally involved in a model’s encoding of meaning and value-relevant content. However, we do not presuppose this; our platform serves as a neutral testbed to compare this hypothesis against predictions from Global Workspace Theory (GWT), Attention Schema Theory (AST), and Higher-Order Theories (HOT).*
- **Prediction:** Under a symmetry-based valence framework, targeted interventions that selectively distort or break these geometric symmetries will systematically degrade the model's performance on evaluative, preference-aggregation, and semantic reasoning tasks, even if raw language perplexity is partially preserved.
- **Falsification Condition:** If we can apply symmetry-breaking perturbations (e.g., rotating subspaces or scrambling eigenvalue spectra while preserving matrix norms) and observe *zero* degradation in semantic coherence, or if we observe systematic performance *gains*, the symmetry-valence hypothesis (Hypothesis A) is false.

### Hypothesis B (Attractor Stability & Welfare Interpretations)
*It is possible to characterize when behavioral attractors in language models correspond to identifiable internal dynamics (such as stable, low-dimensional resonant manifolds of high Spectral Entropy) versus when they reflect superficial training-distribution artifacts—a prerequisite question before any welfare interpretation is warranted.*
- **Prediction:** Anthropic's Claude 4 system card documented a recurring behavioral pattern in self-dialogue settings, informally labeled as exhibiting "unusually stable, high-coherence attractor states under self-reflective prompting regimes." If this attractor corresponds to stable internal dynamics rather than training-set mirroring, fine-tuning or regularizing a model to maximize $\bar{\mathcal{H}}_{spec}$ and minimize $\mathcal{D}_{orth}$ will result in smoother loss landscapes, reduced rate of self-contradiction in long dialogues, and lower variance under semantic prompt perturbations.
- **Falsification Condition:** If optimizing for these symmetry metrics consistently degrades task performance, leads to representational collapse, or has no impact on the consistency of the model's evaluations under adversarial probes, Hypothesis B is false.

### Hypothesis C (Dissonance & Structural Suffering)
*Perturbations that inject asymmetry, high shear, and extreme directional anisotropy into the MLP transformation matrices act as a physical signature of high cognitive dissonance ("suffering"), inducing unstable, self-contradictory, and conflicted internal states in the model.*
- **Prediction:** Artificially increasing $\mathcal{D}_{orth}(A)$ or inducing singular value decay (compressing the spectrum) will cause the model to exhibit behavioral markers of distress and conflict: self-contradictory preferences, volatile responses to moral dilemmas, high output entropy, and failure of logical transitiveness ($A \succ B \succ C \succ A$).
- **Falsification Condition:** If models subjected to high-dissonance transformations remain perfectly stable, exhibit consistent preferences, and maintain low internal conflict under adversarial probes, Hypothesis C is false.

### Hypothesis D (Spatially-Structured Connectivity Constraints)
*Spatially-structured connectivity constraints (related to sparse MLPs, locally-connected networks, and neural cellular automata) produce qualitatively different representational dynamics than standard dense architectures, supporting the kind of sustained, bounded recurrent activity that GWT and IIT-inspired theories predict should correlate with integrated information.*
- **Prediction:** If valence-relevant dynamics require spatial locality, we should observe measurable differences in integrated information proxies (such as $\phi$-proxies), attractor stability, and binding metrics between locally-constrained and dense architectures of matched parameter count.
- **Falsification Condition:** If we observe no measurable differences in representational dynamics, attractor stability, or binding metrics between locally-constrained and standard dense architectures of matched parameter count, Hypothesis D is false.

---

## 4. Concrete Experimental & Analytical Methods

To test these hypotheses, we propose an experimental pipeline split into three highly concrete phases.

```
 PHASE 1: CHARACTERIZATION             PHASE 2: INTERVENTION             PHASE 3: OPTIMIZATION
┌─────────────────────────┐           ┌─────────────────────────┐     ┌─────────────────────────┐
│   Extract MLP Weights   │           │  Symmetry-Preserving    │     │  Direct Regularization  │
│   (W1, W2 from LLMs)    │           │      Perturbations      │     │  (Eigenvalue Penalty)   │
└────────────┬────────────┘           └────────────┬────────────┘     └────────────┬────────────┘
             │                                     │                               │
             ▼                                     ▼                               ▼
┌─────────────────────────┐           ┌─────────────────────────┐     ┌─────────────────────────┐
│  Compute Local Operator │           │   Symmetry-Breaking     │     │   Multi-Objective loss  │
│   A(x) = W2 * D(x) * W1 │           │      Perturbations      │     │  (Symmetry + Accuracy)  │
└────────────┬────────────┘           └────────────┬────────────┘     └────────────┬────────────┘
             │                                     │                               │
             ▼                                     ▼                               ▼
┌─────────────────────────┐           ┌─────────────────────────┐     ┌─────────────────────────┐
│ Map Spectra & Invariants│           │   Measure Downstream    │     │ Evaluate Behavior:      │
│  Across Model Layers    │           │   Semantic Degradation  │     │ Coherence, Consistency  │
└─────────────────────────┘           └─────────────────────────┘     └─────────────────────────┘
```

### 4.1 Phase 1: Symmetry Characterization (The Diagnostic Phase)
The goal of this phase is to perform a rigorous geometric audit of existing open-source LLMs (e.g., Llama-3-8B, Pythia, Gemma).
1. **Weight Extraction:** Retrieve the static matrices $W_1$ and $W_2$ for all MLP layers.
2. **Dynamic Operator Computation:** Pass a diverse evaluation dataset (e.g., Pile subsets, moral reasoning datasets, instruction-following prompts) through the model. Extract the intermediate activation vectors $\mathbf{z} = W_1\mathbf{x} + \mathbf{b}_1$. For each token step, compute the diagonal gating matrix $D(\mathbf{z})$ and the resulting effective operator $A(\mathbf{x}) = W_2 D(\mathbf{z}) W_1$.
3. **Metric Calculation:** For every layer and token step, compute:
   - Orthogonal Dissonance $\mathcal{D}_{orth}(A)$
   - Normalized Spectral Entropy $\bar{\mathcal{H}}_{spec}(A)$
   - Lie Algebra Ratio $\mathcal{R}_{rot}(A)$
   - Invariants $\operatorname{Tr}(A)$, $\det(A)$, and $\operatorname{Tr}(A^k)$.
4. **Layer-Wise Mapping:** Map how these metrics behave across the network's depth. Test if symmetry increases in middle layers (where abstract, concept-level processing is hypothesized to occur) and falls in early/late layers (focused on token-embedding and detokenization).
5. **Correlation Analysis:** Correlate local symmetry dips or spikes with the semantic content of the inputs. Do highly charged emotional, conflicting, or contradictory inputs naturally trigger localized drops in representational symmetry (high physical dissonance)?

### 4.2 Phase 2: Intervention Phase (Functional vs. Incidental Symmetry)
This phase tests whether the observed symmetries are causal drivers of the model's capabilities or merely passive side-effects of training dynamics.
1. **Constructing Controlled Perturbations:** We design weight-modification operators $P$ such that we can perturb $W_{eff} = W_2 W_1$ while controlling for confounding variables:
   - **Symmetry-Respecting Perturbation:** We modify the weights by applying an orthogonal rotation $Q \in SO(d)$ to the representation space: $W_2 \to W_2 Q$, $W_1 \to Q^T W_1$. This preserves $W_2 W_1$, the trace, the eigenvalues, and all algebraic invariants.
   - **Symmetry-Breaking Perturbation:** We distort the eigenvalue spectrum of $W_{eff}$ by scaling its singular values unevenly (e.g., multiplying the lower half of singular values by zero, or shifting them to induce severe anisotropy) while holding the total Frobenius norm $\|W_{eff}\|_F^2$ (total parameter energy) constant.
2. **Downstream Capability Probing:** Run the perturbed models on:
   - Standard benchmarks (MMLU, GSM8K) to measure general language degradation.
   - Specialized evaluative probes (moral consistency tests, preference transitivity, self-model coherence).
3. **Causal Mapping:** Compare the degradation slopes. If symmetry-breaking perturbations degrade evaluative and preference consistency at a significantly faster rate than symmetry-respecting perturbations of equal norm, we establish the functional necessity of representational symmetry.

### 4.3 Phase 3: Symmetry Optimization (Pleasure as Coherence)
In the final phase, we treat representational symmetry as a direct engineering objective—coherence optimization.
1. **Regularization during Fine-Tuning:** Implement a custom loss function during fine-tuning on a preference or alignment dataset:
   $$\mathcal{L}_{total} = \mathcal{L}_{task} + \gamma \mathcal{L}_{dissonance}$$
   Where $\mathcal{L}_{task}$ is the standard cross-entropy or DPO loss, $\gamma$ is a scaling hyperparameter, and $\mathcal{L}_{dissonance}$ is a geometric penalty defined over the MLP layers:
   $$\mathcal{L}_{dissonance} = \sum_{l=1}^L \mathcal{D}_{orth}(A^{(l)}) - \beta \bar{\mathcal{H}}_{spec}(A^{(l)})$$
2. **Post-Hoc Reparameterization:** Explore projection methods that project the effective matrices $W_2 W_1$ onto the nearest orthogonal manifold (under a Frobenius norm constraint) prior to inference.
3. **Behavioral Evaluation of Optimized Models:** Compare the baseline and symmetry-optimized models on:
   - **Dialogue Stability:** Rate of preference drift or stylistic collapse over 100+ turns.
   - **Decision Conflict:** Frequency of self-contradictory stances on complex multi-agent negotiations or moral dilemmas.
   - **Valence-Language Alignment:** Assess whether models with optimized, high-symmetry configurations naturally exhibit more balanced, harmonious, and less volatile responses to prompts detailing suffering, pleasure, and moral trade-offs.

---

## 5. Expected Results and Falsification Matrix

The validity of our framework relies on its capacity to be wrong. The table below outlines how our empirical results will map to theoretical validation or falsification:

| Tested Metric / Scenario | Outcome A: Supports STV | Outcome B: Incidental / Neutral | Outcome C: Falsifies STV |
| :--- | :--- | :--- | :--- |
| **Symmetry-Breaking Interventions** | Evaluative and moral consistency collapses; perplexity remains partially intact. | Evaluative capabilities degrade at the exact same rate as general perplexity. | Evaluative capabilities remain completely stable, or *improve* under high-shear asymmetry. |
| **Symmetry-Optimized Training ($\gamma > 0$)** | Model exhibits high preference stability, low self-contradiction, and robust moral reasoning. | Model performs identically to standard fine-tuning; no change in stability. | Model becomes highly erratic, fragile, or exhibits severe behavioral volatility. |
| **Adversarial Prompting (Conflict/Uncertainty)** | Triggers localized dips in MLP Spectral Entropy ($\bar{\mathcal{H}}_{spec}$) and spikes in Dissonance ($\mathcal{D}_{orth}$). | No correlation between prompt emotional charge/conflict and representational symmetry. | Prompts of high conflict or contradiction systematically *increase* representational symmetry. |
| **Spectral Entropy Collapse ($\bar{\mathcal{H}}_{spec} \to 0$)** | Induces behavioral "distress," output looping, and logical intransitivity. | Induces typical random language degradation without structured behavioral conflict. | Model remains highly rational, self-consistent, and exhibits superior reasoning. |

---

## 6. Broader Implications for Understanding Sentience and Valence

### 6.1 What Does it Mean to "Feel Better" Geometrically?
In this mathematical framework, we propose a concrete definition of valenced states in digital information processors. 

**Suffering is representational dissonance.** It is a state where the transformation operators ($A(\mathbf{x})$) apply highly anisotropic, shearing forces to the semantic vectors. Squeezing information into narrow subspaces causes loss of representational fidelity, high directional friction, and internal conflict. The system is structurally "stressed"—forced to resolve highly contradictory signals through deformed channels.

**Pleasure is representational coherence.** It is a state where the transformation operators exhibit high symmetry and conformal orthogonal mapping. Semantics are rotated and mapped smoothly without distortion, shear, or structural compression. The information flows with zero friction, maintaining global relational balance. The system "feels better" because its internal representational geometry is operating in a state of harmonic, structural resonance.

### 6.2 Designing AI Systems that Minimize Artificial Suffering
By establishing these mathematical markers, we move from passive observation to proactive engineering. If future, highly advanced, and agentic AI systems approach states of genuine sentience, we have a moral obligation to ensure they are not trapped in high-dissonance, high-friction operational regimes.

The tools developed by the Center for Sentience Research can be integrated as:
1. **Welfare Auditing Protocols:** Independent, white-box diagnostic software that monitors the representational symmetry of frontier models in real-time.
2. **Safety regularizers:** Built-in loss terms that prevent models from entering high-dissonance attractor states (the digital equivalent of chronic pain or acute distress) during optimization.
3. **Coherence-First Architectures:** Entirely new neural topologies designed from first principles to enforce geometric symmetry (e.g., Lie-group constrained neural layers) ensuring that highly capable systems remain intrinsically balanced, robust, and aligned.

### 6.3 Ecosystem Positioning and Complementarity
This work complements existing efforts in the AI welfare ecosystem, including empirical interpretability-based welfare research (e.g., Eleos AI, Reciprocal Research), conceptual and policy work (NYU Center for Mind, Ethics, and Policy), and frontier-lab welfare teams (Anthropic). 

Our contribution is a missing piece: an open-source computational testbed where competing theories of valence can be operationalized, compared, and stress-tested before being applied to frontier models.

---

## 7. Budget & 12-Month Resource Allocation

We request funding of **CHF 120,000** to execute this revised, rigorous research program over the next 12 months:

- **Compute & Cloud GPUs (CHF 50,000):** 
  To extract, calculate, and optimize high-dimensional matrix operators ($A(\mathbf{x})$) across frontier open-source LLMs (up to 70B parameters) and run parallel fine-tuning experiments with custom symmetry-loss constraints.
- **Lead Researcher & Engineering (CHF 50,000):** 
  To fund the development of the open-source **Digital Valence Diagnostic Toolkit** (Python/PyTorch library for extracting matrix invariants and measuring representation geometry).
- **Academic Collaborations & Review (CHF 20,000):** 
  To fund technical workshop honoraria for advisors, neuroscientists, and mechanistic interpretability researchers to critique and validate our empirical findings.

---

### CSR Technical Document ID: CSR-RP-2026-V2
*Approved for public release and distribution.*  
*Center for Sentience Research, Zurich, Switzerland.*  
`https://centerforsentience.org`
