import type { SiteContent } from "@/content/types";

export const trContent: SiteContent = {
  locale: "tr",
  languageName: "Türkçe",
  brand: "Konselit",
  header: {
    nav: [
      { label: "Ana Sayfa", href: "#anasayfa" },
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "Projeler", href: "#projeler" },
      { label: "Yaklaşım", href: "#yaklasim" },
      { label: "İletişim", href: "#iletisim" },
    ],
    menuLabel: "Menüyü aç veya kapat",
  },
  languageSwitcher: {
    label: "Dil seçimi",
  },
  themeToggle: {
    lightLabel: "Açık temaya geç",
    darkLabel: "Koyu temaya geç",
  },
  hero: {
    eyebrow: "Konselit",
    title: "Fikirleri güçlü dijital ürünlere dönüştürüyoruz.",
    description: "Tasarım, yazılım ve ürün odağında modern dijital deneyimler geliştiriyoruz.",
    primaryButton: { label: "Projeler", href: "#projeler" },
    secondaryButton: { label: "İletişim", href: "#iletisim" },
    visual: {
      cards: ["Ürün", "Tasarım", "Kod"],
      eyebrow: "Launch Ready",
      title: "Konselit sistemi",
      year: "2026",
      rows: [
        { title: "Strateji", description: "Net kapsam ve ürün yönü" },
        { title: "Arayüz", description: "Premium ve hızlı deneyim" },
        { title: "Geliştirme", description: "Yayına hazır teknik temel" },
      ],
      stats: [
        { value: "8", label: "öne çıkan proje" },
        { value: "1M+", label: "ulaşılan kullanıcı", accent: true },
      ],
    },
  },
  about: {
    label: "Hakkımızda",
    title: "Konselit ne yapar?",
    paragraphs: [
      "Konselit; tasarım, yazılım ve ürün yaklaşımını bir araya getirerek modern dijital deneyimler geliştirir. Mobil uygulamalar, yaratıcı yazılım projeleri ve ürün odaklı arayüzler üzerinde çalışır.",
      "Her projede sade, güçlü ve uzun ömürlü bir yapı kurmayı hedefleriz. Bizim için iyi bir ürün sadece şık görünmekle değil, sağlam çalışmakla da anlam kazanır.",
    ],
    features: [
      {
        title: "Ürün Odaklı",
        description:
          "Her projeye yalnızca teknik bir iş olarak değil, gerçek bir ürün yaklaşımıyla bakarız. Kullanım, sürdürülebilirlik ve bütünlük bizim için önemlidir.",
      },
      {
        title: "Tasarım Duyarlılığı",
        description:
          "Görsel kaliteyi sadece estetik olarak değil, deneyimin bir parçası olarak ele alırız. Temiz, anlaşılır ve güçlü arayüzler kurmayı hedefleriz.",
      },
      {
        title: "Hızlı ve Esnek Geliştirme",
        description:
          "Fikirden uygulamaya giden süreçte hızlı hareket eder, ihtiyaçlara göre esnek çözümler üretiriz. Geliştirme sürecini pratik ama sağlam bir yapıda ilerletiriz.",
      },
    ],
  },
  projectsSection: {
    label: "Projeler",
    title: "Farklı alanlarda çalışan, aynı kalite çizgisinde ürünler.",
    description:
      "Mobil uygulamalardan BIM ve mühendislik araçlarına uzanan projelerde ürün, tasarım ve teknik derinliği birlikte ele alıyoruz.",
  },
  projects: [
    {
      title: "V Vehicles",
      category: "Mobil Uygulama",
      description:
        "1M+ indirmeye ulaşan V Vehicles, GTA evrenindeki araçları keşfetmek, incelemek ve düzenli şekilde takip etmek için geliştirilen mobil uygulamadır. Zamanla geniş bir kullanıcı kitlesine ulaşan bu proje, en bilinen işlerimizden biri haline geldi.",
      tone: "gold",
      layout: "large",
      logoSrc: "/assets/project-logos/vvehicles.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gta",
      appStoreUrl: "https://apps.apple.com/us/app/v-vehicles/id6737740399",
    },
    {
      title: "V Vehicles 2",
      category: "Mobil Uygulama",
      description:
        "V Garage güncellemesi ve eklenen 119 garage desteğiyle birlikte geliştirilen yeni nesil V Vehicles deneyimi. Kullanıcıların araç koleksiyonlarını daha düzenli, daha kapsamlı ve daha kişisel şekilde yönetmesini hedefleyen bu sürüm, seriyi daha güçlü bir yapıya taşır.",
      tone: "sand",
      layout: "small",
      logoSrc: "/assets/project-logos/vvehicles2.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gta2",
    },
    {
      title: "Game Advisor",
      category: "Mobil Uygulama",
      description:
        "Game Advisor, oyun dünyasını daha düzenli, daha erişilebilir ve daha keyifli hale getirmek için tasarlanan bir mobil deneyimdir. Oyun keşfi, içerik takibi ve sade arayüz yaklaşımını bir araya getirerek kullanıcıya dağılmadan gezebileceği daha rafine bir oyun alanı sunar.",
      tone: "red",
      layout: "small",
      logoSrc: "/assets/project-logos/game-advisor.svg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.siorre.gameadvisor",
    },
    {
      title: "MCP–Revit",
      category: "BIM / AI / Yazılım Aracı",
      description:
        "80.000 satırdan fazla koddan oluşan MCP–Revit, doğal dil ile Revit arasında kontrollü, denetlenebilir ve güçlü bir etkileşim kurmayı amaçlayan gelişmiş bir sistemdir. BIM, otomasyon ve yapay zekâyı aynı yapıda buluşturan bu proje, teknik derinliği en yüksek çalışmalarımızdan biridir.",
      tone: "technical",
      layout: "large",
    },
    {
      title: "Wally AI",
      category: "Mobil Uygulama",
      description:
        "Wally AI, özenle üretilmiş duvar kâğıtlarını ve binlerce farklı görsel seçeneği bir araya getiren modern bir mobil deneyim sunar. Çeşitlilik, görsel kalite ve kişisel kullanım hissi odağında kurgulanan bu uygulama, ekran görünümünü daha güçlü ve daha karakterli hale getirmeyi amaçlar.",
      tone: "sand",
      layout: "standard",
      logoSrc: "/assets/project-logos/wally-ai.svg",
    },
    {
      title: "YTÜ Beton Kano Website",
      category: "Website",
      description:
        "YTÜ Beton Kano takımı için hazırlanan modern ve yönetilebilir web sitesi. Takımın kimliğini, projelerini ve güncel içeriklerini daha güçlü bir dijital yapıyla sunmayı amaçlar.",
      tone: "warm",
      layout: "standard",
    },
    {
      title: "BlackRed Elevations",
      category: "Mobil Uygulama",
      description:
        "Karayolu ve demiryolu mühendisliğinde kullanılan profil ve kot işlemlerini daha pratik hale getirmek için geliştirilen özel bir mobil uygulama. Teknik doğruluk ve kullanım kolaylığını bir araya getirerek mühendislik çizim süreçlerinde daha verimli bir çalışma akışı sunmayı hedefler.",
      tone: "red",
      layout: "standard",
      logoSrc: "/assets/project-logos/blackred-elevations.svg",
    },
    {
      title: "AutoCAD C# Plugin",
      category: "Eklenti / Mühendislik Yazılımı",
      description:
        "Kullanıcı girdileriyle kütle diyagramı, enkesit ve benzeri teknik çizimleri üretebilen AutoCAD tabanlı C# eklentisi. Tekrarlayan mühendislik işlemlerini hızlandırmak, hata payını azaltmak ve proje üretim sürecini daha verimli hale getirmek için geliştirildi.",
      tone: "technical",
      layout: "standard",
    },
    {
      title: "LoL Champion Tracker",
      category: "Mobil Uygulama",
      description:
        "League of Legends oyuncuları için şampiyon takibini daha düzenli ve erişilebilir hale getirmek amacıyla geliştirilen mobil uygulama. Oyun verisini sade bir yapıda sunarak kullanıcıya daha pratik bir takip deneyimi sağlamayı hedefler.",
      tone: "warm",
      layout: "standard",
      logoSrc: "/assets/project-logos/lol-champion-tracker.svg",
    },
    {
      title: "PUBG Stats App",
      category: "Mobil Uygulama",
      description:
        "PUBG oyuncularının güncel istatistiklerini daha hızlı ve anlaşılır şekilde takip edebilmesi için geliştirilen mobil uygulama. Performans verilerini sade bir arayüzle bir araya getirerek daha temiz bir kullanıcı deneyimi sunmayı amaçlar.",
      tone: "technical",
      layout: "standard",
      logoSrc: "/assets/project-logos/pubg-stats-app.svg",
    },
  ],
  process: {
    label: "Yaklaşım",
    title: "Nasıl çalışıyoruz?",
    description:
      "Süreci net, üretken ve sürdürülebilir tutarız. Her adımda ürünün gerçek kullanımını ve uzun vadeli yapısını düşünürüz.",
    steps: [
      {
        step: "01",
        title: "Fikir",
        description:
          "Her proje, ihtiyacı ve amacı doğru anlamakla başlar. Önce ne yapılacağını değil, neden yapılacağını netleştiririz.",
      },
      {
        step: "02",
        title: "Tasarım",
        description:
          "Yapının görünümünü ve kullanım deneyimini birlikte düşünürüz. Sade, anlaşılır ve güçlü bir arayüz dili kurmayı hedefleriz.",
      },
      {
        step: "03",
        title: "Geliştirme",
        description:
          "Tasarımı çalışan bir ürüne dönüştürürken hız, esneklik ve sağlamlık arasında doğru dengeyi kurarız.",
      },
      {
        step: "04",
        title: "Yayın ve İyileştirme",
        description:
          "Ürün yayına çıktıktan sonra da süreci bitmiş saymayız. Geri bildirimlerle yapıyı güçlendirir, gerektiğinde geliştirmeye devam ederiz.",
      },
    ],
  },
  founders: {
    label: "Kurucular",
    title: "Kurucular",
    people: [
      { name: "Ahmet Said Acer", role: "Co-Founder · İnşaat Mühendisi" },
      { name: "Ahmet Enes Gümüş", role: "Co-Founder · Bilgisayar Mühendisi" },
    ],
  },
  contact: {
    label: "İletişim",
    title: "Yeni bir şey üretmek istiyorsanız, konuşalım.",
    description:
      "Üzerinde çalıştığınız bir fikir, geliştirmek istediğiniz bir ürün ya da birlikte şekillendirebileceğimiz bir proje varsa bize ulaşabilirsiniz.",
    links: [
      { label: "Mail", href: "mailto:hello@konselit.com" },
      { label: "GitHub", href: "https://github.com/KonselitStudio" },
    ],
  },
  footer: {
    brand: "Konselit",
    description: "Tasarım, yazılım ve ürün odağında modern dijital deneyimler.",
    copyright: "© 2026 Konselit Studio. Tüm hakları saklıdır.",
  },
};
