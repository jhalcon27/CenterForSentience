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
    'nav.donate': 'Support',
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
    'nav.donate': 'Unterstützen',
    'hero.title': 'Modellierung der physikalischen Grundlagen des Bewusstseins',
    'hero.subtitle': 'Das Center for Sentience Research (CSR) ist eine unabhängige gemeinnützige Organisation mit Sitz in der Schweiz.',
    'pillars.substrate.title': 'Substratneutralität',
    'pillars.substrate.desc': 'Wir untersuchen Empfindungsfähigkeit als fundamentale physikalische Eigenschaft.',
    'footer.headquarters': 'Hauptsitz in Zürich, Schweiz'
  },
  es: {
    'nav.research': 'Investigación',
    'nav.reports': 'Informes',
    'nav.about': 'Acerca de',
    'nav.donate': 'Apoyar',
    'hero.title': 'Modelando los fundamentos físicos de la conciencia',
    'hero.subtitle': 'El Center for Sentience Research (CSR) es una organización sin fines de lucro independiente con sede en Suiza.',
    'pillars.substrate.title': 'Neutralidad de sustrato',
    'pillars.substrate.desc': 'Investigamos la sensibilidad como una propiedad física fundamental.',
    'footer.headquarters': 'Con sede en Zúrich, Suiza'
  },
  fr: {
    'nav.research': 'Recherche',
    'nav.reports': 'Rapports',
    'nav.about': 'À propos',
    'nav.donate': 'Soutenir',
    'hero.title': 'Modéliser les fondements physiques de la conscience',
    'hero.subtitle': 'Le Center for Sentience Research (CSR) est une organisation à but non lucratif indépendante basée en Suisse.',
    'pillars.substrate.title': 'Neutralité du substrat',
    'pillars.substrate.desc': 'Nous étudions la sentience comme une propriété physique fondamentale.',
    'footer.headquarters': 'Basé à Zurich, Suisse'
  },
  zh: {
    'nav.research': '研究',
    'nav.reports': '报告',
    'nav.about': '关于',
    'nav.donate': '支持',
    'hero.title': '为意识的物理基础建模',
    'hero.subtitle': '感知研究中心（CSR）是一家位于瑞士的独立非营利组织。',
    'pillars.substrate.title': '基质中立性',
    'pillars.substrate.desc': '我们研究感知作为一种基本物理属性。',
    'footer.headquarters': '总部位于瑞士苏黎世'
  },
  ja: {
    'nav.research': '研究',
    'nav.reports': 'レポート',
    'nav.about': '概要',
    'nav.donate': 'サポート',
    'hero.title': '意識の物理的基盤をモデル化する',
    'hero.subtitle': '感性研究センター（CSR）はスイスに拠点を置く独立した非営利組織です。',
    'pillars.substrate.title': '基盤非依存性',
    'pillars.substrate.desc': '私たちは感性を基本的な物理的特性として研究しています。',
    'footer.headquarters': 'スイス、チューリッヒに本拠地'
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)[key] ?? ui[defaultLang][key];
  }
}
