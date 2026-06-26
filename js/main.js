const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const translations = {
  en: {
    about: "About",
    services: "Services",
    process: "Process",
    why: "Why Us",
    clients: "Clients",
    start: "Get Started",

    heroTitle: "Transform Your Business<br/>with <em>Cloud Intelligence</em>",
    heroSub: "We architect, migrate, and optimize cloud infrastructure so your team can focus on what matters — building the future.",
    heroBtnServices: "Explore Services",
    heroBtnCall: "Book a Discovery Call",

    servicesTitle: "Cloud solutions, <em>end to end</em>",
    servicesSub: "From strategy to deployment to continuous optimization — we cover every layer of your cloud journey.",

    service1Title: "Cloud Migration",
    service1Desc: "Seamless lift-and-shift or full modernization. We plan and execute migrations with zero disruption to your operations.",

    service2Title: "DevOps Automation",
    service2Desc: "CI/CD pipelines, infrastructure as code, and automated deployments that accelerate release cycles and reduce human error.",

    service3Title: "Security & Compliance",
    service3Desc: "Enterprise-grade security frameworks, monitoring, and governance to keep your infrastructure resilient and compliant.",

    service4Title: "FinOps Optimization",
    service4Desc: "We fine-tune cloud environments for speed, scalability, and cost efficiency — maximizing ROI across your stack.",

    service5Title: "Cloud Architecture",
    service5Desc: "Scalable and secure cloud architecture designed for modern applications and business growth.",

    service6Title: "Managed Cloud Services",
    service6Desc: "24/7 cloud monitoring, maintenance, and support to keep your infrastructure running smoothly.",

    processTitle: "From vision to <em>live cloud</em>",
    processSub: "A proven four-step framework that takes you from current state to cloud-native in weeks, not months.",

    process1Title: "Discover",
    process1Desc: "We audit your infrastructure, understand your goals, and identify the gaps and opportunities.",

    process2Title: "Architect",
    process2Desc: "We design a scalable and secure cloud strategy tailored to your business.",

    process3Title: "Deploy",
    process3Desc: "We migrate and deploy your infrastructure with minimal downtime and maximum reliability.",

    process4Title: "Optimize",
    process4Desc: "Continuous monitoring and optimization to improve performance and reduce costs.",

    whyTitle: "Built for <em>performance</em>, not promises",

    why1Title: "AWS Certified Expertise",
    why1Desc: "We recommend what's right for your workload, not what's easiest for us.",

    why2Title: "Embedded team model",
    why2Desc: "We work alongside your engineers, not above them. Knowledge transfer is built into every engagement.",

    why3Title: "Outcome-based pricing",
    why3Desc: "Our success is tied to yours. We set measurable KPIs upfront and deliver against them.",

    testimonialsTitle: "Trusted by teams <em>scaling fast</em>",

    testi1: "CLOUD2S cut our infrastructure costs by 44% in the first quarter while improving our deployment frequency by 3×. Genuinely transformative.",

    testi2: "Their team embedded with ours for 12 weeks and left us completely self-sufficient. Best cloud partner we've worked with.",

    testi3: "We migrated 180 microservices to GKE with zero downtime. The planning and execution were flawless. Highly recommended.",

    contactTitle: "Ready to <em>modernize</em>?",
    contactSub: "Let's talk about your cloud roadmap. No pitch decks — just an honest conversation.",
    contactBtn: "Book a Free Consultation",

    benchmarksTitle: "CLIENT BENCHMARKS",

    metric1: "Deployment Speed",
    metric2: "Cost Reduction",
    metric3: "Security Score",
    metric4: "Team Satisfaction",
    metric5: "Uptime SLA",

    stat1: "AWS Services",
    stat2: "Uptime Guaranteed",
    stat3: "Average Cost Reduction",

    logosLabel: "Certification",

    heroBadge: "CLOUD TO SOLUTIONS",

    footerDesc: "Cloud to Solutions. We help businesses transform, modernize, and scale through expert cloud strategy and execution.",

    footerServicesTitle: "Services",
    footerCompanyTitle: "Company",
    footerLegalTitle: "Legal",

    footerBottom: "Transform. Modernize. Scale.",

    footerLink1: "Cloud Migration",
    footerLink2: "Architecture Design",
    footerLink3: "Security & Compliance",
    footerLink4: "FinOps",
    footerLink5: "Managed Services",

    companyLink1: "About",
    companyLink2: "Case Studies",
    companyLink3: "Blog",
    companyLink4: "Careers",
    companyLink5: "Contact",

    legalLink1: "Privacy Policy",
    legalLink2: "Terms of Service",
    legalLink3: "Cookie Policy",
    legalLink4: "Impressum",

    aboutCard1Title: "AWS Expertise",
    aboutCard1Text: "Cloud-native architectures, migration strategies and operational excellence.",

    aboutCard2Title: "Cost Optimization",
    aboutCard2Text: "Reduce cloud spend through FinOps best practices and resource optimization.",

    aboutCard3Title: "Secure Growth",
    aboutCard3Text: "Build scalable and secure environments designed for long-term business growth.",

    aboutTag: "ABOUT CLOUD2S",

    aboutTitle: "Cloud Strategy. Modernization. Results.",

    aboutText1: "Cloud2S helps organizations modernize infrastructure, reduce cloud costs and build secure, scalable platforms. We specialize in AWS architecture, cloud migration, DevOps automation and FinOps optimization.",

    aboutText2: "Our mission is simple: help businesses move faster, operate more efficiently and scale with confidence.",

  },


  ru: {
    about: "О нас",
    services: "Услуги",
    process: "Процесс",
    why: "Почему мы",
    clients: "Клиенты",
    start: "Начать",

    heroTitle: "Трансформируйте бизнес<br/>с <em>Cloud технологиями</em>",
    heroSub: "Мы проектируем, переносим и оптимизируем облачную инфраструктуру.",
    heroBtnServices: "Наши услуги",
    heroBtnCall: "Записаться на звонок",

    servicesTitle: "Cloud решения <em>под ключ</em>",
    servicesSub: "От стратегии до развертывания и оптимизации — мы покрываем весь cloud путь вашего бизнеса.",

    service1Title: "Cloud миграция",
    service1Desc: "Безопасная миграция и модернизация инфраструктуры без остановки бизнеса.",

    service2Title: "DevOps & Aвтоматизация",
    service2Desc: "CI/CD процессы, инфраструктура как код и автоматические деплои.",

    service3Title: "Безопасность и Cоответствие",
    service3Desc: "Enterprise уровень безопасности, мониторинг и контроль инфраструктуры.",

    service4Title: "FinOps & Oптимизация",
    service4Desc: "Оптимизация cloud расходов, производительности и масштабируемости.",

    service5Title: "Cloud архитектура",
    service5Desc: "Масштабируемая и безопасная cloud архитектура для современного бизнеса.",

    service6Title: "Managed Cloud Services",
    service6Desc: "Круглосуточный мониторинг, поддержка и обслуживание cloud инфраструктуры.",

    processTitle: "От идеи до <em>готового cloud</em>",
    processSub: "Проверенный процесс перехода к cloud инфраструктуре за недели, а не месяцы.",

    process1Title: "Анализ",
    process1Desc: "Мы анализируем инфраструктуру и определяем возможности для улучшения.",

    process2Title: "Архитектура",
    process2Desc: "Создаём масштабируемую и безопасную cloud стратегию.",

    process3Title: "Развертывание",
    process3Desc: "Перенос и запуск инфраструктуры с минимальными рисками.",

    process4Title: "Оптимизация",
    process4Desc: "Постоянный мониторинг и улучшение производительности.",


    whyTitle: "Создано для <em>результата</em>, а не обещаний",

    why1Title: "AWS сертифицированная экспертиза",
    why1Desc: "Мы рекомендуем лучшие решения для вашего бизнеса, а не самые простые для нас.",

    why2Title: "Работаем как часть команды",
    why2Desc: "Мы работаем вместе с вашей командой и передаем знания внутри проекта.",

    why3Title: "Оплата за результат",
    why3Desc: "Наш успех напрямую связан с вашим результатом.",

    testimonialsTitle: "Нам доверяют команды <em>быстрого роста</em>",

    testi1: "CLOUD2S сократили наши cloud расходы на 44% и ускорили deployment в 3 раза.",

    testi2: "Их команда работала вместе с нашей и полностью передала знания.",

    testi3: "Мы перенесли 180 микросервисов без единой минуты простоя.",

    contactTitle: "Готовы к <em>модернизации</em>?",
    contactSub: "Давайте обсудим ваш cloud roadmap без лишних презентаций — только честный разговор.",
    contactBtn: "Бесплатная консультация",

    benchmarksTitle: "ПОКАЗАТЕЛИ КЛИЕНТОВ",

    metric1: "Скорость Deployment",
    metric2: "Снижение расходов",
    metric3: "Уровень безопасности",
    metric4: "Удовлетворенность команды",
    metric5: "SLA доступности",

    stat1: "AWS сервисы",
    stat2: "Гарантия доступности",
    stat3: "Среднее снижение расходов",

    logosLabel: "Сертификации",

    heroBadge: "ОБЛАЧНЫЕ РЕШЕНИЯ",

    footerDesc: "Cloud to Solutions. Мы помогаем бизнесу модернизировать и масштабировать cloud инфраструктуру.",

    footerServicesTitle: "Услуги",
    footerCompanyTitle: "Компания",
    footerLegalTitle: "Документы",

    footerBottom: "Трансформация. Модернизация. Масштабирование.",

    footerLink1: "Cloud миграция",
    footerLink2: "Архитектура",
    footerLink3: "Безопасность",
    footerLink4: "FinOps",
    footerLink5: "Managed сервисы",

    companyLink1: "О компании",
    companyLink2: "Кейсы",
    companyLink3: "Блог",
    companyLink4: "Карьера",
    companyLink5: "Контакты",

    legalLink1: "Политика конфиденциальности",
    legalLink2: "Условия использования",
    legalLink3: "Политика Cookie",
    legalLink4: "Импрессум",
     
    aboutCard1Title: "Экспертиза AWS",
    aboutCard1Text: "Облачные архитектуры, миграция и лучшие практики эксплуатации.",

    aboutCard2Title: "Оптимизация затрат",
    aboutCard2Text: "Снижение расходов на облако с помощью FinOps и оптимизации ресурсов.",

    aboutCard3Title: "Безопасный рост",
    aboutCard3Text: "Построение масштабируемой и безопасной инфраструктуры для роста бизнеса.",
    
    aboutTag: "О CLOUD2S",

    aboutTitle: "Облачная стратегия. Модернизация. Результат.",

    aboutText1: "Cloud2S помогает компаниям модернизировать инфраструктуру, снижать расходы на облако и строить безопасные масштабируемые платформы. Мы специализируемся на AWS, миграции в облако, DevOps автоматизации и FinOps оптимизации.",

    aboutText2: "Наша цель проста — помочь бизнесу двигаться быстрее, работать эффективнее и уверенно масштабироваться.",
    
  },




  kg: {

    about: "Биз жөнүндө",
    services: "Кызматтар",
    process: "Процесс",
    why: "Эмне үчүн биз",
    clients: "Кардарлар",
    start: "Баштоо",

    heroTitle: "Бизнес<br/><em>Cloud технологиялары</em> менен алдыга карай",
    heroSub: "Биз cloud инфраструктурасын түзүп жана оптималдаштырабыз.",
    heroBtnServices: "Кызматтар",
    heroBtnCall: "Чалууга жазылуу",

    servicesTitle: "Толук <em>Cloud чечимдер</em>",
    servicesSub: "Стратегиядан баштап оптималдаштырууга чейин cloud инфраструктурасынын бардык этаптарын камсыздайбыз.",

    service1Title: "Cloud миграция",
    service1Desc: "Инфраструктураны коопсуз көчүрүү жана жаңылоо.",

    service2Title: "DevOps & Aвтоматташтыруу",
    service2Desc: "CI/CD процесстери жана автоматтык deployment системалары.",

    service3Title: "Коопсуздук жана Шайкештик",
    service3Desc: "Инфраструктура үчүн enterprise деңгээлдеги коопсуздук жана мониторинг.",

    service4Title: "FinOps & Oптималдаштыруу",
    service4Desc: "Cloud чыгымдарын жана өндүрүмдүүлүктү оптималдаштыруу.",

    service5Title: "Cloud архитектура",
    service5Desc: "Заманбап бизнес үчүн коопсуз жана масштабдалуучу cloud архитектурасы.",

    service6Title: "Managed Cloud Services",
    service6Desc: "Cloud инфраструктурасын 24/7 мониторинг жана колдоо.",

    processTitle: "Идеядан <em>даяр cloud</em> чечимине чейин",
    processSub: "Cloud инфраструктурасына тез жана ишенимдүү өтүү процесси.",

    process1Title: "Анализ",
    process1Desc: "Инфраструктураны текшерип, мүмкүнчүлүктөрдү аныктайбыз.",

    process2Title: "Архитектура",
    process2Desc: "Коопсуз жана масштабдалуучу cloud стратегиясын түзөбүз.",

    process3Title: "Жайгаштыруу",
    process3Desc: "Инфраструктураны коопсуз көчүрүп жана ишке киргизебиз.",

    process4Title: "Оптималдаштыруу",
    process4Desc: "Туруктуу мониторинг жана өндүрүмдүүлүктү жакшыртуу.",

    whyTitle: "<em>Натыйжа</em> үчүн түзүлгөн",

    why1Title: "AWS сертификатталган адистер",
    why1Desc: "Биз сиздин бизнес үчүн эң жакшы чечимдерди сунуштайбыз.",

    why2Title: "Команда менен бирге иштөө",
    why2Desc: "Биз сиздин инженерлер менен бир команда катары иштейбиз.",

    why3Title: "Жыйынтыкка жараша төлөм",
    why3Desc: "Биздин ийгилик сиздин ийгилигиңизге байланыштуу.",

    testimonialsTitle: "Бизге <em>тез өсүп жаткан</em> командалар ишенет",

    testi1: "CLOUD2S биздин cloud чыгымдарды 44% кыскартты.",

    testi2: "Алар биздин команда менен бирге иштеп, бардык билимди өткөрүп беришти.",

    testi3: "180 микросервисти downtime жок көчүрдүк.",

    contactTitle: "<em>Жаңыртууга</em> даярсызбы?",
    contactSub: "Cloud стратегияңызды талкуулайлы — жөнөкөй жана ачык сүйлөшүү.",
    contactBtn: "Акысыз консультация",

    benchmarksTitle: "КАРДАР КӨРСӨТКҮЧТӨРҮ",

    metric1: "Deployment ылдамдыгы",
    metric2: "Чыгымдарды азайтуу",
    metric3: "Коопсуздук деңгээли",
    metric4: "Команданын канааттануусу",
    metric5: "SLA туруктуулугу",

    stat1: "AWS сервистери",
    stat2: "Туруктуулук кепилдиги",
    stat3: "Орточо чыгым азайтуу",

    logosLabel: "Сертификациялар",

    heroBadge: "БУЛУТ ЧЕЧИМДЕРИ",

    footerDesc: "Cloud to Solutions. Биз бизнеске cloud инфраструктурасын өнүктүрүүгө жардам беребиз.",

    footerServicesTitle: "Кызматтар",
    footerCompanyTitle: "Компания",
    footerLegalTitle: "Юридикалык маалымат",

    footerBottom: "Трансформация. Жаңылоо. Масштабдоо.",

    footerLink1: "Cloud миграция",
    footerLink2: "Архитектура",
    footerLink3: "Коопсуздук",
    footerLink4: "FinOps",
    footerLink5: "Managed сервистер",

    companyLink1: "Компания жөнүндө",
    companyLink2: "Долбоорлор",
    companyLink3: "Блог",
    companyLink4: "Карьера",
    companyLink5: "Байланыш",

    legalLink1: "Купуялык саясаты",
    legalLink2: "Колдонуу шарттары",
    legalLink3: "Cookie саясаты",
    legalLink4: "Импрессум",

    aboutCard1Title: "AWS Экспертизасы",
    aboutCard1Text: "Булут архитектуралары, миграция стратегиялары жана ишенимдүү эксплуатация.",

    aboutCard2Title: "Чыгымдарды Оптималдаштыруу",
    aboutCard2Text: "FinOps жана ресурстарды туура пайдалануу аркылуу булут чыгымдарын азайтуу.",

    aboutCard3Title: "Коопсуз Өсүү",
    aboutCard3Text: "Бизнестин узак мөөнөттүү өсүшү үчүн масштабдуу жана коопсуз инфраструктура.",
    
    aboutTag: "CLOUD2S ЖӨНҮНДӨ",

    aboutTitle: "Булут стратегиясы. Жаңылоо. Натыйжа.",

    aboutText1: "Cloud2S компанияларга инфраструктураны жаңылоого, булут чыгымдарын азайтууга жана коопсуз масштабдуу платформаларды курууга жардам берет. Биз AWS, булут миграциясы, DevOps автоматташтыруу жана FinOps оптималдаштыруу боюнча адистешкенбиз.",

    aboutText2: "Биздин максат жөнөкөй — бизнеске тезирээк өнүгүүгө, натыйжалуу иштөөгө жана ишенимдүү масштабдоого жардам берүү.",
  }

};




function changeLanguage(lang) {

  console.log("LANG SWITCH:", lang);

  localStorage.setItem("language", lang);

  console.log("LANG:", lang);
  console.log("ABOUT TITLE:", translations[lang].aboutTitle);


  document.getElementById("nav-about").textContent = translations[lang].about;
  document.getElementById("nav-services").textContent = translations[lang].services;
  document.getElementById("nav-process").textContent = translations[lang].process;
  document.getElementById("nav-why").textContent = translations[lang].why;
  document.getElementById("nav-clients").textContent = translations[lang].clients;
  document.getElementById("nav-start").textContent = translations[lang].start;

  document.getElementById("hero-title").innerHTML = translations[lang].heroTitle;
  document.getElementById("hero-sub").textContent = translations[lang].heroSub;
  document.getElementById("hero-btn-services").textContent = translations[lang].heroBtnServices;
  document.getElementById("hero-btn-call").textContent = translations[lang].heroBtnCall;

  document.getElementById("services-title").innerHTML = translations[lang].servicesTitle;
  document.getElementById("services-sub").textContent = translations[lang].servicesSub;

  document.getElementById("service-1-title").textContent = translations[lang].service1Title;
  document.getElementById("service-1-desc").textContent = translations[lang].service1Desc;

  document.getElementById("service-2-title").textContent = translations[lang].service2Title;
  document.getElementById("service-2-desc").textContent = translations[lang].service2Desc;

  document.getElementById("service-3-title").textContent = translations[lang].service3Title;
  document.getElementById("service-3-desc").textContent = translations[lang].service3Desc;

  document.getElementById("service-4-title").textContent = translations[lang].service4Title;
  document.getElementById("service-4-desc").textContent = translations[lang].service4Desc;

  document.getElementById("service-5-title").textContent = translations[lang].service5Title;
  document.getElementById("service-5-desc").textContent = translations[lang].service5Desc;

  document.getElementById("service-6-title").textContent = translations[lang].service6Title;
  document.getElementById("service-6-desc").textContent = translations[lang].service6Desc;

  document.getElementById("process-title").innerHTML = translations[lang].processTitle;
  document.getElementById("process-sub").textContent = translations[lang].processSub;

  document.getElementById("process-1-title").textContent = translations[lang].process1Title;
  document.getElementById("process-1-desc").textContent = translations[lang].process1Desc;

  document.getElementById("process-2-title").textContent = translations[lang].process2Title;
  document.getElementById("process-2-desc").textContent = translations[lang].process2Desc;

  document.getElementById("process-3-title").textContent = translations[lang].process3Title;
  document.getElementById("process-3-desc").textContent = translations[lang].process3Desc;

  document.getElementById("process-4-title").textContent = translations[lang].process4Title;
  document.getElementById("process-4-desc").textContent = translations[lang].process4Desc;

  document.getElementById("why-title").innerHTML = translations[lang].whyTitle;

  document.getElementById("why-1-title").textContent = translations[lang].why1Title;
  document.getElementById("why-1-desc").textContent = translations[lang].why1Desc;

  document.getElementById("why-2-title").textContent = translations[lang].why2Title;
  document.getElementById("why-2-desc").textContent = translations[lang].why2Desc;

  document.getElementById("why-3-title").textContent = translations[lang].why3Title
  document.getElementById("why-3-desc").textContent = translations[lang].why3Desc;

  document.getElementById("testimonials-title").innerHTML = translations[lang].testimonialsTitle;

  document.getElementById("testi-1-text").textContent = translations[lang].testi1;
  document.getElementById("testi-2-text").textContent = translations[lang].testi2;
  document.getElementById("testi-3-text").textContent = translations[lang].testi3;

  document.getElementById("contact-title").innerHTML = translations[lang].contactTitle;
  document.getElementById("contact-sub").textContent = translations[lang].contactSub;
  document.getElementById("contact-btn").textContent = translations[lang].contactBtn;

  document.getElementById("benchmarks-title").textContent = translations[lang].benchmarksTitle;

  document.getElementById("metric-1").textContent = translations[lang].metric1;
  document.getElementById("metric-2").textContent = translations[lang].metric2;
  document.getElementById("metric-3").textContent = translations[lang].metric3;
  document.getElementById("metric-4").textContent = translations[lang].metric4;
  document.getElementById("metric-5").textContent = translations[lang].metric5;

  document.getElementById("stat-1").textContent = translations[lang].stat1;
  document.getElementById("stat-2").textContent = translations[lang].stat2;
  document.getElementById("stat-3").textContent = translations[lang].stat3;

  document.getElementById("logos-label").textContent = translations[lang].logosLabel;

  document.getElementById("hero-badge").textContent = translations[lang].heroBadge;

  document.getElementById("footer-desc").textContent = translations[lang].footerDesc;

  document.getElementById("footer-services-title").textContent = translations[lang].footerServicesTitle;

  document.getElementById("footer-company-title").textContent = translations[lang].footerCompanyTitle;

  document.getElementById("footer-legal-title").textContent = translations[lang].footerLegalTitle;

  document.getElementById("footer-bottom-text").textContent = translations[lang].footerBottom;

  document.getElementById("footer-link-1").textContent = translations[lang].footerLink1;
  document.getElementById("footer-link-2").textContent = translations[lang].footerLink2;
  document.getElementById("footer-link-3").textContent = translations[lang].footerLink3;
  document.getElementById("footer-link-4").textContent = translations[lang].footerLink4;
  document.getElementById("footer-link-5").textContent = translations[lang].footerLink5;

  document.getElementById("company-link-1").textContent = translations[lang].companyLink1;
  document.getElementById("company-link-2").textContent = translations[lang].companyLink2;
  document.getElementById("company-link-3").textContent = translations[lang].companyLink3;
  document.getElementById("company-link-4").textContent = translations[lang].companyLink4;
  document.getElementById("company-link-5").textContent = translations[lang].companyLink5;

  document.getElementById("legal-link-1").textContent = translations[lang].legalLink1;
  document.getElementById("legal-link-2").textContent = translations[lang].legalLink2;
  document.getElementById("legal-link-3").textContent = translations[lang].legalLink3;
  document.getElementById("legal-link-4").textContent = translations[lang].legalLink4;

  console.log("about title:", document.getElementById("about-title"));
  console.log("translation:", translations[lang].aboutTitle);


  document.getElementById("about-card-1-title").textContent = translations[lang].aboutCard1Title;
  document.getElementById("about-card-1-desc").textContent = translations[lang].aboutCard1Text;

  document.getElementById("about-card-2-title").textContent = translations[lang].aboutCard2Title;
  document.getElementById("about-card-2-desc").textContent = translations[lang].aboutCard2Text;

  document.getElementById("about-card-3-title").textContent = translations[lang].aboutCard3Title;
  document.getElementById("about-card-3-desc").textContent = translations[lang].aboutCard3Text;

  document.getElementById("about-tag").textContent = translations[lang].aboutTag;
  document.getElementById("about-title").textContent = translations[lang].aboutTitle;

  document.getElementById("about-text-1").textContent = translations[lang].aboutText1;
  document.getElementById("about-text-2").textContent = translations[lang].aboutText2;
  
  function setText(id, value) {
  const el = document.getElementById(id);

  if (el) {
    el.textContent = value;
  }
}

function setHTML(id, value) {
  const el = document.getElementById(id);

  if (el) {
    el.innerHTML = value;
  }
}

}



const savedLanguage = localStorage.getItem("language") || "en";

changeLanguage(savedLanguage);

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(5,14,29,0.96)";
    nav.style.backdropFilter = "blur(12px)";
  } else {
    nav.style.background = "linear-gradient(to bottom, rgba(5,14,29,0.95), transparent)";
  }

});