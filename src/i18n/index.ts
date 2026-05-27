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
    'nav.program': 'Program',
    'nav.reports': 'Reports',
    'nav.ecosystem': 'Ecosystem',
    'nav.about': 'About',
    'nav.donate': 'Support',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zurich, Switzerland',
    'footer.copyright': '© 2026 Center for Sentience Research. All rights reserved.',
  },
  de: {
    'nav.research': 'Forschung',
    'nav.reports': 'Berichte',
    'nav.ecosystem': 'Ökosystem',
    'nav.about': 'Über uns',
    'nav.donate': 'Unterstützen',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zürich, Schweiz',
    'footer.copyright': '© 2026 Center for Sentience Research. Alle Rechte vorbehalten.',
  },
  es: {
    'nav.research': 'Investigación',
    'nav.reports': 'Informes',
    'nav.ecosystem': 'Ecosistema',
    'nav.about': 'Acerca de',
    'nav.donate': 'Apoyar',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zúrich, Suiza',
    'footer.copyright': '© 2026 Center for Sentience Research. Todos los derechos reservados.',
  },
  fr: {
    'nav.research': 'Recherche',
    'nav.reports': 'Rapports',
    'nav.ecosystem': 'Écosystème',
    'nav.about': 'À propos',
    'nav.donate': 'Soutenir',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zurich, Suisse',
    'footer.copyright': '© 2026 Center for Sentience Research. Tous droits réservés.',
  },
  zh: {
    'nav.research': '研究',
    'nav.reports': '报告',
    'nav.ecosystem': '生态系统',
    'nav.about': '关于',
    'nav.donate': '支持',
    'footer.org': '感知研究中心',
    'footer.hq': '瑞士苏黎世',
    'footer.copyright': '© 2026 感知研究中心。保留所有权利。',
  },
  ja: {
    'nav.research': '研究',
    'nav.reports': 'レポート',
    'nav.ecosystem': 'エコシステム',
    'nav.about': '概要',
    'nav.donate': 'サポート',
    'footer.org': '意識研究センター',
    'footer.hq': 'スイス、チューリッヒ',
    'footer.copyright': '© 2026 意識研究センター。無断転載を禁じます。',
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)[key] ?? ui[defaultLang][key];
  }
}
