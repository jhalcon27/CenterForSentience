export const ui = {
  en: {
    nav: {
      research: 'Research',
      reports: 'Reports',
      about: 'About',
      resources: 'Resources',
      support: 'Support'
    },
    footer: {
      brand: 'Center for Sentience Research',
      hq: 'Headquartered in Zurich, Switzerland',
      legal: 'Registered gGmbH (Pending)'
    }
  },
  de: {
    nav: {
      research: 'Forschung',
      reports: 'Berichte',
      about: 'Über uns',
      resources: 'Ressourcen',
      support: 'Unterstützen'
    },
    footer: {
      brand: 'Center for Sentience Research',
      hq: 'Hauptsitz in Zürich, Schweiz',
      legal: 'Eingetragene gGmbH (In Gründung)'
    }
  },
  es: {
    nav: {
      research: 'Investigación',
      reports: 'Informes',
      about: 'Acerca de',
      resources: 'Recursos',
      support: 'Apoyar'
    },
    footer: {
      brand: 'Center for Sentience Research',
      hq: 'Sede en Zúrich, Suiza',
      legal: 'gGmbH registrada (Pendiente)'
    }
  },
  fr: {
    nav: {
      research: 'Recherche',
      reports: 'Rapports',
      about: 'À propos',
      resources: 'Ressources',
      support: 'Soutenir'
    },
    footer: {
      brand: 'Center for Sentience Research',
      hq: 'Siège à Zurich, Suisse',
      legal: 'gGmbH enregistrée (En attente)'
    }
  },
  zh: {
    nav: {
      research: '研究',
      reports: '报告',
      about: '关于',
      resources: '资源',
      support: '支持'
    },
    footer: {
      brand: '意识研究中心',
      hq: '总部位于瑞士苏黎世',
      legal: '注册 gGmbH（待定）'
    }
  },
  ja: {
    nav: {
      research: '研究',
      reports: 'レポート',
      about: '当センターについて',
      resources: 'リソース',
      support: '支援'
    },
    footer: {
      brand: '意識研究センター',
      hq: '本社：スイス、チューリッヒ',
      legal: '登録済み gGmbH（保留中）'
    }
  }
} as const;

export function t(lang: string) {
  return ui[lang as keyof typeof ui] ?? ui.en;
}
