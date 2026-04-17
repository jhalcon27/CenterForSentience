export const languages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
  ja: '日本語'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.research': 'Research',
    'nav.reports': 'Reports',
    'nav.about': 'About',
    'nav.donate': 'Support the Mission',
    'hero.title': 'Modeling the physical foundations of awareness',
    'hero.subtitle': 'The Center for Sentience Research (CSR) is an independent non-profit based in Switzerland. We bridge physics, neuroscience, and philosophy to understand how sentience arises across all substrates.',
    'pillars.substrate.title': 'Substrate Neutrality',
    'pillars.substrate.desc': 'We investigate sentience as a fundamental physical property that can emerge in biological cells, neural networks, or exotic physical states.',
    'footer.headquarters': 'Headquartered in Zurich, Switzerland'
  },
  de: {
    'nav.research': 'Forschung',
    'nav.reports': 'Berichte',
    'nav.about': 'Über uns',
    'nav.donate': 'Mission unterstützen',
    'hero.title': 'Modellierung der physikalischen Grundlagen des Bewusstseins',
    'hero.subtitle': 'Das Center for Sentience Research (CSR) ist eine unabhängige gemeinnützige Organisation mit Sitz in der Schweiz.',
    'pillars.substrate.title': 'Substratneutralität',
    'pillars.substrate.desc': 'Wir untersuchen Empfindungsfähigkeit als fundamentale physikalische Eigenschaft.',
    'footer.headquarters': 'Hauptsitz in Zürich, Schweiz'
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
