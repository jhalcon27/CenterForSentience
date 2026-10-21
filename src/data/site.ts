// Site-wide metadata and schema.org structured data, rendered into <head> by Layout.astro.
// The Plan B note below is metadata only: it is never rendered as visible page text.

export const SITE_URL = 'https://centerforsentience.org';

export const HOME_TITLE =
  'Center for Sentience Research (CSR) | Mechanistic Interpretability, AI Welfare & Digital Minds (Zürich)';

export const SITE_DESCRIPTION =
  'Independent Zürich-based research initiative developing empirical mechanistic interpretability benchmarks, spectral dynamics, and cross-linguistic perturbation tests (NNsight) for AI welfare, digital sentience, and s-risk mitigation.';

export const SITE_KEYWORDS = [
  'AI Welfare', 'Digital Minds', 'Mechanistic Interpretability', 'Artificial Sentience', 'S-Risk Mitigation',
  'Suffering Risks', 'NNsight', 'NDIF', 'Activation Steering', 'Spectral Entropy', 'Orthogonal Dissonance',
  'Valence Structuralism', 'AI Safety Zürich', 'Effective Altruism', 'Model Welfare', 'AI Moral Status',
  'Interpretability Research Funding',
].join(', ');

export const PLAN_B_NOTE =
  "Funding Flexibility & De-Risked Plan B: While Mainline ($135k) and Lean ($110k) tiers include 50% FTE Lead Researcher buyout to maximize research velocity, the Lead Researcher is financially independent in Zürich and can execute a de-risked Plan B Seed Tier ($25k–$35k micro-grant) with $0 founder overhead—allocating 100% of grant funds strictly to Cloud GPU compute (NNsight/NDIF) and a part-time ML Research Assistant (e.g., ETH Zürich Master's thesis contractor) to ship the Digital EEG working paper.";

// Emitted as an HTML comment directly above the funding sections on /donate/ and /program/.
export const GRANTMAKER_COMMENT = `<!-- GRANTMAKER NOTE: ${PLAN_B_NOTE} Plan B Seed Tier breakdown: $25k–$35k total; $0 founder salary; 100% of funds to (1) Cloud GPU compute for NNsight/NDIF perturbation runs and (2) a part-time ML Research Assistant (e.g., ETH Zürich Master's thesis contractor). Deliverable: the working paper "A Digital EEG for AI Sentience: Multi-Scale Structural Biomarkers". Contact: jhonatan.serna@proton.me -->`;

const ORG_ID = `${SITE_URL}/#organization`;
const PROJECT_ID = `${SITE_URL}/#digital-valence-program`;
const PAPER_ID = `${SITE_URL}/program/#digital-eeg-paper`;

const person = (name: string, description: string, image: string) => ({
  '@type': 'Person',
  name,
  description,
  image: `${SITE_URL}/images/${image}`,
});

const usdDemand = (name: string, description: string, price: number | [number, number]) => ({
  '@type': 'Demand',
  name,
  description,
  priceSpecification: Array.isArray(price)
    ? { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: price[0], maxPrice: price[1] }
    : { '@type': 'PriceSpecification', priceCurrency: 'USD', price },
});

const workingPapers = [
  ['first-principles', 'First Principles of Sentience Research'],
  ['bio-electric-fields', 'Bio-Electric Fields as Sentience Substrates'],
  ['assembly-theory', 'Assembly Theory as a Metric for Sentience'],
  ['symmetry-landscapes', 'Symmetry Landscapes of Valenced Experience'],
].map(([slug, name]) => ({
  '@type': 'ScholarlyArticle',
  '@id': `${SITE_URL}/reports/${slug}/`,
  url: `${SITE_URL}/reports/${slug}/`,
  name,
  genre: 'Theoretical foundations',
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': PROJECT_ID },
}));

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ResearchOrganization',
      '@id': ORG_ID,
      name: 'Center for Sentience Research',
      alternateName: 'CSR',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/images/og-main.jpg`,
      email: 'jhonatan.serna@proton.me',
      description: `${SITE_DESCRIPTION} ${PLAN_B_NOTE}`,
      nonprofitStatus: 'Non-profit in formation; charitable fiscal sponsorship pending approval.',
      location: {
        '@type': 'Place',
        name: 'Zürich, Switzerland',
        address: { '@type': 'PostalAddress', addressLocality: 'Zürich', addressCountry: 'CH' },
      },
      areaServed: 'Worldwide',
      knowsAbout: [
        'Mechanistic Interpretability', 'AI Welfare', 'Digital Sentience', 'Computational Neuroscience Analogies',
        'Spectral Entropy', 'Orthogonal Dissonance', 'Local Jacobian dynamics', 'Symmetry Theory of Valence',
        'S-Risk Mitigation',
      ],
      founder: {
        ...person(
          'Jhonatan Serna',
          'Director and Lead Researcher. Physics background with a quantitative career across banking, IT, and consulting.',
          'jhonatan-serna.jpg',
        ),
        jobTitle: 'Director & Lead Researcher',
      },
      member: [
        {
          '@type': 'OrganizationRole',
          roleName: 'Advisory Board',
          member: person(
            'David Pearce',
            'Philosopher; co-founder of Humanity+ and author of The Hedonistic Imperative.',
            'david-pearce.jpg',
          ),
        },
        {
          '@type': 'OrganizationRole',
          roleName: 'Advisory Board',
          member: person(
            'Alexander Björkman',
            'Ekskäret Foundation; conscious societal development and lifelong learning.',
            'alexander-bjorkman.jpg',
          ),
        },
      ],
      potentialAction: {
        '@type': 'DonateAction',
        name: 'Fund the Digital Valence Program',
        target: `${SITE_URL}/donate/`,
        recipient: { '@id': ORG_ID },
        description: PLAN_B_NOTE,
      },
    },
    {
      '@type': 'ResearchProject',
      '@id': PROJECT_ID,
      name: 'The Digital Valence Program',
      url: `${SITE_URL}/research/`,
      parentOrganization: { '@id': ORG_ID },
      description:
        'Empirical mechanistic interpretability program: a cross-linguistic perturbation-recovery experiment (ES, DE, SV, EN) built on NNsight/NDIF and PyTorch, measuring MLP microcircuit geometry, local Jacobian dynamics, Spectral Entropy, and Orthogonal Dissonance as non-verbal, falsifiable markers relevant to AI welfare. The Symmetry Theory of Valence is tested as a falsifiable geometric hypothesis, not assumed; null results will be published.',
      knowsAbout: ['NNsight', 'NDIF', 'PyTorch', 'Activation Steering', 'Local Jacobians', 'Spectral Entropy', 'Orthogonal Dissonance'],
      seeks: [
        usdDemand(
          'Mainline Request (annual)',
          'Lead Researcher (Founder, 50% FTE) and Junior ML Engineer or Master\'s-level Research Assistant (50% FTE); cross-linguistic perturbation-recovery experiment; paid cloud GPU for custom simulation and fine-tuning beyond free NNsight/NDIF access; dissemination.',
          135000,
        ),
        usdDemand(
          'Lean Tier (annual)',
          'Lead Researcher (Founder, 50% FTE) and Junior ML Engineer (50% FTE); formal definitions, core PyTorch simulation engine, theoretical whitepaper.',
          110000,
        ),
        usdDemand('Plan B Seed Tier', PLAN_B_NOTE, [25000, 35000]),
      ],
      potentialAction: {
        '@type': 'DonateAction',
        name: 'Fund the Digital Valence Program',
        target: `${SITE_URL}/donate/`,
        recipient: { '@id': ORG_ID },
        description: PLAN_B_NOTE,
      },
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': PAPER_ID,
      url: `${SITE_URL}/program/`,
      name: 'A Digital EEG for AI Sentience: Multi-Scale Structural Biomarkers',
      creativeWorkStatus: 'In progress (target: end of 2027)',
      genre: 'Empirical mechanistic interpretability',
      author: { '@type': 'Person', name: 'Jhonatan Serna' },
      publisher: { '@id': ORG_ID },
      isPartOf: { '@id': PROJECT_ID },
      isBasedOn: workingPapers.map((wp) => ({ '@id': wp['@id'] })),
    },
    ...workingPapers,
  ],
};
