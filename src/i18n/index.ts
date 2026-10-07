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
    'nav.reproductions': 'Reproductions',
    'nav.research': 'Research',
    'nav.reports': 'Working papers',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zurich, Switzerland',
    'footer.copyright': '© 2026 Jhonatan Serna · Write-ups CC BY 4.0 · Code MIT',
  },
  de: {
    'nav.reproductions': 'Reproduktionen',
    'nav.research': 'Forschung',
    'nav.reports': 'Arbeitspapiere',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zürich, Schweiz',
    'footer.copyright': '© 2026 Jhonatan Serna · Texte CC BY 4.0 · Code MIT',
  },
  es: {
    'nav.reproductions': 'Reproducciones',
    'nav.research': 'Investigación',
    'nav.reports': 'Documentos de trabajo',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zúrich, Suiza',
    'footer.copyright': '© 2026 Jhonatan Serna · Textos CC BY 4.0 · Código MIT',
  },
  fr: {
    'nav.reproductions': 'Reproductions',
    'nav.research': 'Recherche',
    'nav.reports': 'Documents de travail',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'footer.org': 'Center for Sentience Research',
    'footer.hq': 'Zurich, Suisse',
    'footer.copyright': '© 2026 Jhonatan Serna · Textes CC BY 4.0 · Code MIT',
  },
  zh: {
    'nav.reproductions': '复现',
    'nav.research': '研究',
    'nav.reports': '工作论文',
    'nav.about': '关于',
    'nav.contact': '联系我们',
    'footer.org': '感知研究中心',
    'footer.hq': '瑞士苏黎世',
    'footer.copyright': '© 2026 Jhonatan Serna · 文本 CC BY 4.0 · 代码 MIT',
  },
  ja: {
    'nav.reproductions': '再現',
    'nav.research': '研究',
    'nav.reports': 'ワーキングペーパー',
    'nav.about': '概要',
    'nav.contact': 'お問い合わせ',
    'footer.org': '意識研究センター',
    'footer.hq': 'スイス、チューリッヒ',
    'footer.copyright': '© 2026 Jhonatan Serna · 論文 CC BY 4.0 · コード MIT',
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)?.[key] ?? ui[defaultLang][key];
  }
}
