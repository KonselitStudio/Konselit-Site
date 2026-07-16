export type Locale = "tr" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectTone = "gold" | "sand" | "warm" | "red" | "technical";
export type ProjectLayout = "large" | "small" | "standard";

export type SiteContent = {
  locale: Locale;
  languageName: string;
  brand: string;
  header: {
    nav: NavItem[];
    menuLabel: string;
  };
  languageSwitcher: {
    label: string;
  };
  themeToggle: {
    lightLabel: string;
    darkLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: NavItem;
    secondaryButton: NavItem;
    visual: {
      cards: string[];
      eyebrow: string;
      title: string;
      year: string;
      rows: Array<{
        title: string;
        description: string;
      }>;
      stats: Array<{
        value: string;
        label: string;
        accent?: boolean;
      }>;
    };
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  projectsSection: {
    label: string;
    title: string;
    description: string;
  };
  projects: Array<{
    title: string;
    category: string;
    description: string;
    tone: ProjectTone;
    layout?: ProjectLayout;
    logoSrc?: string;
    playStoreUrl?: string;
    appStoreUrl?: string;
  }>;
  process: {
    label: string;
    title: string;
    description: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  founders: {
    label: string;
    title: string;
    people: Array<{
      name: string;
      role: string;
    }>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    links: NavItem[];
  };
  footer: {
    brand: string;
    description: string;
    copyright: string;
  };
};
