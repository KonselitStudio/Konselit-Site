import type { SiteContent } from "@/content/types";

export const enContent: SiteContent = {
  locale: "en",
  languageName: "English",
  brand: "Konselit",
  header: {
    nav: [
      { label: "Home", href: "#anasayfa" },
      { label: "About", href: "#hakkimizda" },
      { label: "Projects", href: "#projeler" },
      { label: "Approach", href: "#yaklasim" },
      { label: "Contact", href: "#iletisim" },
    ],
    menuLabel: "Open or close menu",
  },
  languageSwitcher: {
    label: "Language",
  },
  themeToggle: {
    lightLabel: "Switch to light theme",
    darkLabel: "Switch to dark theme",
  },
  hero: {
    eyebrow: "Konselit",
    title: "We build strong digital products.",
    description: "We create modern digital experiences with a focus on design, software, and product thinking.",
    primaryButton: { label: "Projects", href: "#projeler" },
    secondaryButton: { label: "Contact", href: "#iletisim" },
    visual: {
      cards: ["Product", "Design", "Code"],
      eyebrow: "Launch Ready",
      title: "Konselit system",
      year: "2026",
      rows: [
        { title: "Strategy", description: "Clear scope and product direction" },
        { title: "Interface", description: "Premium and fast experience" },
        { title: "Development", description: "A launch-ready technical base" },
      ],
      stats: [
        { value: "8", label: "featured projects" },
        { value: "1M+", label: "users reached", accent: true },
      ],
    },
  },
  about: {
    label: "About",
    title: "What does Konselit do?",
    paragraphs: [
      "Konselit brings design, software, and product thinking together to create modern digital experiences. We work on mobile apps, creative software projects, and product-focused interfaces.",
      "In every project, we aim to build something simple, strong, and long-lasting. For us, a good product is not only about looking refined; it also needs to work reliably.",
    ],
    features: [
      {
        title: "Product-Focused",
        description:
          "We treat every project as a real product, not just a technical task. Usability, sustainability, and cohesion matter to us.",
      },
      {
        title: "Design Sensibility",
        description:
          "We see visual quality as part of the experience, not just decoration. Our goal is to create clean, clear, and confident interfaces.",
      },
      {
        title: "Fast and Flexible Development",
        description:
          "We move quickly from idea to application and adapt to changing needs with practical, solid development workflows.",
      },
    ],
  },
  projectsSection: {
    label: "Projects",
    title: "Products across different fields, built with the same quality bar.",
    description:
      "From mobile apps to BIM and engineering tools, we combine product thinking, design quality, and technical depth.",
  },
  projects: [
    {
      title: "V Vehicles",
      category: "Mobile App",
      description:
        "V Vehicles is a mobile app built to explore, review, and keep track of vehicles in the GTA universe. Reaching 1M+ downloads and a large user base over time, it became one of our most recognized projects.",
      tone: "gold",
      layout: "large",
      logoSrc: "/assets/project-logos/vvehicles.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gta",
      appStoreUrl: "https://apps.apple.com/us/app/v-vehicles/id6737740399",
    },
    {
      title: "V Vehicles 2",
      category: "Mobile App",
      description:
        "A next-generation V Vehicles experience shaped around the V Garage update and support for 119 garages. This version helps users manage their vehicle collections in a more organized, comprehensive, and personal way.",
      tone: "sand",
      layout: "small",
      logoSrc: "/assets/project-logos/vvehicles2.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gta2",
    },
    {
      title: "Game Advisor",
      category: "Mobile App",
      description:
        "Game Advisor is a mobile experience designed to make the gaming world more organized, accessible, and enjoyable. It brings game discovery, content tracking, and a clean interface together in a more focused space.",
      tone: "red",
      layout: "small",
      logoSrc: "/assets/project-logos/game-advisor.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gameadvisor",
    },
    {
      title: "MCP–Revit",
      category: "BIM / AI / Software Tool",
      description:
        "MCP–Revit is an advanced system of more than 80,000 lines of code, designed to create a controlled, auditable, and powerful bridge between natural language and Revit. It brings BIM, automation, and AI into one technically deep structure.",
      tone: "technical",
      layout: "large",
    },
    {
      title: "Wally AI",
      category: "Mobile App",
      description:
        "Wally AI offers a modern mobile experience that brings curated wallpapers and thousands of visual options together. Built around variety, visual quality, and personal expression, it helps screens feel stronger and more distinctive.",
      tone: "sand",
      layout: "standard",
      logoSrc: "/assets/project-logos/wally-ai.svg",
    },
    {
      title: "YTÜ Beton Kano Website",
      category: "Website",
      description:
        "A modern and manageable website built for the YTÜ Concrete Canoe team. It presents the team identity, projects, and updates through a stronger digital structure.",
      tone: "warm",
      layout: "standard",
    },
    {
      title: "BlackRed Elevations",
      category: "Mobile App",
      description:
        "A specialized mobile app for making profile and elevation workflows in road and railway engineering more practical. It combines technical accuracy with ease of use to support a more efficient engineering drawing process.",
      tone: "red",
      layout: "standard",
      logoSrc: "/assets/project-logos/blackred-elevations.svg",
    },
    {
      title: "AutoCAD C# Plugin",
      category: "Plugin / Engineering Software",
      description:
        "An AutoCAD-based C# plugin that can generate mass diagrams, cross sections, and similar technical drawings from user inputs. It was built to speed up repetitive engineering tasks, reduce errors, and improve production workflows.",
      tone: "technical",
      layout: "standard",
    },
    {
      title: "LoL Champion Tracker",
      category: "Mobile App",
      description:
        "A mobile app built to make champion tracking more organized and accessible for League of Legends players. It presents game data in a simple structure and aims to give users a more practical tracking experience.",
      tone: "warm",
      layout: "standard",
      logoSrc: "/assets/project-logos/lol-champion-tracker.svg",
    },
    {
      title: "PUBG Stats App",
      category: "Mobile App",
      description:
        "A mobile app designed to help PUBG players follow their latest stats faster and more clearly. It brings performance data together through a clean interface for a more focused user experience.",
      tone: "technical",
      layout: "standard",
      logoSrc: "/assets/project-logos/pubg-stats-app.svg",
    },
  ],
  process: {
    label: "Approach",
    title: "How do we work?",
    description:
      "We keep the process clear, productive, and sustainable. At every step, we consider real-world use and the long-term structure of the product.",
    steps: [
      {
        step: "01",
        title: "Idea",
        description:
          "Every project starts with understanding the need and the purpose. We clarify why it should exist before deciding what to build.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We think about structure, visual direction, and usability together. The goal is a simple, clear, and strong interface language.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "As we turn design into a working product, we balance speed, flexibility, and technical reliability.",
      },
      {
        step: "04",
        title: "Launch and Improve",
        description:
          "The process does not end at launch. We strengthen the product through feedback and continue improving it when needed.",
      },
    ],
  },
  founders: {
    label: "Founders",
    title: "Founders",
    people: [
      { name: "Ahmet Said Acer", role: "Co-Founder · Civil Engineer" },
      { name: "Ahmet Enes Gümüş", role: "Co-Founder · Computer Engineer" },
    ],
  },
  contact: {
    label: "Contact",
    title: "If you want to build something new, let’s talk.",
    description:
      "If you have an idea, a product you want to develop, or a project we can shape together, you can reach out to us.",
    links: [
      { label: "Mail", href: "mailto:hello@konselit.com" },
      { label: "GitHub", href: "https://github.com/KonselitStudio" },
    ],
  },
  footer: {
    brand: "Konselit",
    description: "Modern digital experiences across design, software, and product thinking.",
    copyright: "© 2026 Konselit Studio. All rights reserved.",
  },
};
