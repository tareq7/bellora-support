/**
 * Bellora Theme — Official Support & Developer Portal
 * Interactive Logic: Bilingual i18n (AR/EN), FAQ Accordion, Ticket Builder
 */

const translations = {
  ar: {
    langBtn: "English",
    siteTitle: "بلّورا (Bellora) — مركز الدعم الفني والمطور المعتمد لثيم سلة",
    brandBadge: "ثيم سلة معتمد",
    navChannels: "قنوات الدعم",
    navTicket: "تذكرة سريعة",
    navFaq: "الأسئلة الشائعة",
    navAbout: "عن المطور",
    navDocs: "دليل الاستخدام",
    navCta: "محادثة مباشرة",
    
    heroBadge: "مركز الدعم الفني لتجار سلة",
    heroTitle: "مركز الدعم الفني لثيم بلّورا (Bellora)",
    heroSubtitle: "قنوات مساعدة تقنية معتمدة لتثبيت الثيم، ضبط الإعدادات، تهيئة النماذج ثلاثية الأبعاد (3D & WebGL)، ومعالجة الاستفسارات التشغيلية لمتاجر سلة.",
    heroWaBtn: "تواصل معنا عبر واتساب",
    heroDocsBtn: "دليل إعداد الثيم",
    statResponseTime: "< ساعتين",
    statResponseDesc: "متوسط الرد في أوقات العمل",
    statTwilight: "Twilight 2.14+",
    statTwilightDesc: "متوافق مع معايير محرك سلة",
    stat3D: "WebGL & AR",
    stat3DDesc: "دعم النماذج ثلاثية الأبعاد",
    statSla: "تحديثات دورية",
    statSlaDesc: "صيانة دورية وتوافق مستمر",

    channelsTag: "قنوات التواصل المعتمدة",
    channelsTitle: "خيارات الدعم الفني والاستفسارات",
    channelsDesc: "قنوات مخصصة لتلقي طلبات المساعدة الفنية والتقارير البرمجية وفق اتفاقيات مستوى الخدمة (SLA).",
    
    chWaTitle: "الدعم الفني عبر واتساب",
    chWaDesc: "للمتابعة السريعة، استفسارات التهيئة الأولية، وتوجيه المشكلات التقنية المباشرة.",
    chWaSla: "خلال ساعات العمل (9:00 ص – 10:00 م بتوقيت مكة)",
    chWaAction: "فتح محادثة واتساب",

    chMailTitle: "البريد الإلكتروني المعتمد",
    chMailDesc: "لطلبات الدعم المفصلة، إرفاق ملفات النماذج ثلاثية الأبعاد، واستفسارات التخصيص الخاصة.",
    chMailSla: "خلال 24 ساعة كحد أقصى (SLA)",
    chMailAction: "info@ssp-1.com",

    chPhoneTitle: "الهاتف المباشر",
    chPhoneDesc: "للتواصل الصوتي المباشر في الحالات التشغيلية العاجلة واستفسارات إطلاق المتجر.",
    chPhoneSla: "متاح خلال أوقات العمل الرسمية",
    chPhoneAction: "+966 55 678 6362",

    chDocsTitle: "التوثيق والدليل الفني",
    chDocsDesc: "شرح مفصل ومصور لتهيئة السلايدر، إعداد النماذج ثلاثية الأبعاد، وتخصيص الألوان وأنماط العرض.",
    chDocsSla: "توثيق إلكتروني متاح دائماً",
    chDocsAction: "تصفح دليل الاستخدام",

    ticketTag: "إنشاء تذكرة دعم",
    ticketTitle: "تسجيل تذكرة دعم فني",
    ticketDesc: "أدخل بيانات المتجر وطبيعة الاستفسار لإنشاء تقرير فني منظم وتوجيهه مباشرة عبر واتساب أو البريد الإلكتروني.",
    labelStoreName: "اسم المتجر في سلة *",
    phStoreName: "مثال: متجر الأناقة",
    labelStoreUrl: "رابط المتجر في سلة (Domain) *",
    phStoreUrl: "مثال: store.salla.sa أو yourdomain.com",
    labelContact: "رقم الجوال أو البريد الإلكتروني للتواصل *",
    phContact: "مثال: 055xxxxxxx أو email@example.com",
    labelCategory: "نوع المشكلة أو الطلب *",
    catInstall: "تثبيت وتفعيل الثيم",
    cat3D: "إعداد النماذج ثلاثية الأبعاد (GLB/GLTF)",
    catDesign: "تخصيص الألوان والتصميم والخطوط",
    catBug: "الإبلاغ عن خطأ برمجي (Bug)",
    catOther: "استفسار أو طلب عام",
    labelDesc: "تفاصيل الطلب أو المشكلة *",
    phDesc: "اشرح المشكلة بالتفصيل، وأي روابط أو لقطات شاشة مساعدة...",
    btnSendWa: "إرسال التقرير عبر واتساب",
    btnSendMail: "إرسال التقرير عبر البريد الإلكتروني",

    faqTag: "الأسئلة الشائعة",
    faqTitle: "الأسئلة التقنية المتكررة",
    faqDesc: "إيضاحات فنية حول التثبيت والتحديثات ونطاق الدعم الفني لثيم بلّورا.",

    faq1Q: "كيف أقوم بتفعيل ثيم بلّورا على متجري بعد شرائه؟",
    faq1A: "بمجرد شراء الثيم من متجر ثيمات سلة، توجه إلى لوحة تحكم متجرك -> تخصيص المتجر -> الثيمات. ستجد بلّورا متاحاً في ثيماتك، انقر على 'تطبيق الثيم' ثم 'تخصيص' للبدء في ضبط الألوان والواجهة.",

    faq2Q: "كيف أقوم بإضافة نماذج 3D للمنتجات وللسلايدر الرئيسي؟",
    faq2A: "يدعم ثيم بلّورا ملفات GLB و GLTF خفيفة الحجم. يمكنك رفع الملف على رابط مباشر يدعم CORS أو عبر مكتبة الوسائط ووضعه في خانة رابط 3D المخصص في خيارات تخصيص الثيم أو حقل النموذج ثلاثي الأبعاد المدمج بسلة. ستظهر الموديلات تلقائياً مع خيار العرض بالواقع المعزز (AR).",

    faq3Q: "هل الثيم متوافق مع الوضع الليلي (Dark Mode) والهواتف الذكية؟",
    faq3A: "نعم، الثيم مبني وفق معايير التصميم المتجاوب (Mobile-First)، ويدعم التبديل التلقائي أو اليدوي للوضع الداكن (Dark Mode) استناداً إلى تفضيلات نظام تشغيل المستخدم، مع الحفاظ على معايير سرعة الاستجابة.",

    faq4Q: "كيف تصلني التحديثات والتحسينات المستقبلية للثيم؟",
    faq4A: "تصل جميع التحديثات الأمنية، وتحديثات التوافق مع منصة سلة، والميزات الجديدة تلقائياً عبر لوحة تحكم سلة دون الحاجة لإعادة ضبط إعدادات متجرك.",

    faq5Q: "ما هي حدود الدعم الفني المجاني المشمول مع الثيم؟",
    faq5A: "يشمل الدعم الفني معالجة الأخطاء البرمجية (Bugs) الناتجة عن الكود المصدري للثيم، وتقديم الإرشادات التقنية لضبط الإعدادات القياسية وتهيئة النماذج ثلاثية الأبعاد. لا يشمل الدعم الفني المجاني أعمال التطوير المخصصة خارج نطاق واجهات الثيم المعتمدة.",

    aboutTag: "استوديو التطوير",
    aboutBadge: "شريك تطوير معتمد في منصة سلة",
    aboutName: "مؤسسة الإبداعات الذكية (Smart Solutions Provider - SSP)",
    aboutRole: "فريق هندسة وتطوير واجهات سلة المعتمدة",
    aboutText: "فريق هندسي متخصص في تطوير واجهات المتاجر وتطبيقات منظومة سلة. نركز على بناء حلول برمجية مستقرة وعالية الكفاءة متوافقة تماماً مع معايير محرك Twilight وأحدث مواصفات الويب القياسية.",
    feat1: "تطوير متوافق مع محرك Twilight 2.14 وتقنيات WebGL",
    feat2: "التزام بمعايير أمان سلة وحماية بيانات المتاجر",
    feat3: "صيانة دورية وتحديثات مستمرة لضمان التوافقية",
    feat4: "بنية برمجية مهيأة لتسريع التحميل وتحسين مؤشرات الأداء (Core Web Vitals)",

    footerDesc: "ثيم بلّورا (Bellora) — واجهة متجر سلة بنظام تصميم زجاجي وعرض تفاعلي ثلاثي الأبعاد.",
    footerSupport: "الدعم والمساعدة",
    footerWa: "الدعم الفني عبر واتساب",
    footerTheme: "ثيم بلّورا على متجر سلة",
    footerLegal: "الروابط الرسمية",
    footerCopy: "© 2026 مؤسسة الإبداعات الذكية (SSP). جميع الحقوق محفوظة.",
    footerPartnerNote: "ثيم معتمد ومصمم خصيصاً لمنصة سلة (Salla.sa)"
  },
  en: {
    langBtn: "العربية",
    siteTitle: "Bellora — Technical Support & Documentation for Salla Theme",
    brandBadge: "Official Salla Theme",
    navChannels: "Support Channels",
    navTicket: "Quick Ticket",
    navFaq: "FAQ",
    navAbout: "About Developer",
    navDocs: "User Guide",
    navCta: "Live Chat",
    
    heroBadge: "Official Merchant Support Portal for Salla",
    heroTitle: "Technical Support for Bellora Salla Theme",
    heroSubtitle: "Official technical assistance for theme installation, configuration, 3D model (WebGL) setup, and operational inquiries for Salla merchants.",
    heroWaBtn: "Chat on WhatsApp",
    heroDocsBtn: "Theme Guide & Setup",
    statResponseTime: "< 2 Hours",
    statResponseDesc: "Average response during business hours",
    statTwilight: "Twilight 2.14+",
    statTwilightDesc: "Compliant with Salla engine standards",
    stat3D: "WebGL & AR",
    stat3DDesc: "3D and WebGL support",
    statSla: "Regular Updates",
    statSlaDesc: "Ongoing maintenance and compatibility",

    channelsTag: "Support Channels",
    channelsTitle: "Technical Support Options",
    channelsDesc: "Dedicated channels for technical inquiries and issue reports according to service guidelines.",
    
    chWaTitle: "WhatsApp Technical Support",
    chWaDesc: "For operational inquiries, initial setup guidance, and direct technical tracking.",
    chWaSla: "During business hours (9 AM – 10 PM KSA)",
    chWaAction: "Open WhatsApp Chat",

    chMailTitle: "Official Helpdesk Email",
    chMailDesc: "For detailed technical reports, 3D file attachments, and configuration reviews.",
    chMailSla: "Within 24 business hours",
    chMailAction: "info@ssp-1.com",

    chPhoneTitle: "Direct Phone",
    chPhoneDesc: "For urgent operational inquiries and store launch support.",
    chPhoneSla: "Available during official business hours",
    chPhoneAction: "+966 55 678 6362",

    chDocsTitle: "Technical Documentation",
    chDocsDesc: "Detailed documentation for slider setup, 3D model parameters, colors, and display modes.",
    chDocsSla: "Online documentation available 24/7",
    chDocsAction: "Browse User Guide",

    ticketTag: "Create Support Ticket",
    ticketTitle: "Submit Technical Support Ticket",
    ticketDesc: "Enter your store details and inquiry to generate a structured technical report sent via WhatsApp or Email.",
    labelStoreName: "Salla Store Name *",
    phStoreName: "e.g., Luxury Boutique",
    labelStoreUrl: "Salla Store URL (Domain) *",
    phStoreUrl: "e.g., store.salla.sa or yourdomain.com",
    labelContact: "Your Phone Number or Email *",
    phContact: "e.g., +966 55 xxx xxxx or merchant@domain.com",
    labelCategory: "Inquiry Category *",
    catInstall: "Theme Installation & Activation",
    cat3D: "3D Models Setup (GLB/GLTF)",
    catDesign: "Design, Colors & Font Customization",
    catBug: "Bug or Technical Glitch Report",
    catOther: "General Inquiry / Feedback",
    labelDesc: "Issue Description & Details *",
    phDesc: "Please describe what you are experiencing with any relevant links...",
    btnSendWa: "Send via WhatsApp",
    btnSendMail: "Send via Email",

    faqTag: "Merchant FAQ",
    faqTitle: "Technical FAQ",
    faqDesc: "Technical clarifications regarding installation, updates, and support scope for Bellora.",

    faq1Q: "How do I activate Bellora on my Salla store after purchase?",
    faq1A: "Once acquired from the Salla Theme Marketplace, go to your Salla Dashboard -> Store Customization -> Themes. You will find Bellora ready in your purchased themes list. Click 'Apply Theme' then 'Customize' to configure your storefront.",

    faq2Q: "How do I add 3D GLB/GLTF models to products and the homepage slider?",
    faq2A: "Bellora supports standard lightweight GLB/GLTF files. You can upload them to a direct CORS-enabled storage or through Salla's media/product image 3D field. When configured, 3D interactive controls and Augmented Reality (AR) options appear automatically.",

    faq3Q: "Is Bellora fully responsive and compatible with Smart Dark Mode?",
    faq3A: "Yes. Bellora is built following mobile-first responsive standards and supports automatic or manual dark mode switching according to user system preferences, maintaining fast page response.",

    faq4Q: "How are future theme updates delivered?",
    faq4A: "All bug fixes, Salla Twilight engine updates, and new feature releases are automatically delivered through your Salla store admin dashboard without overwriting your configured settings.",

    faq5Q: "What is covered under official theme support?",
    faq5A: "Support covers resolving bugs arising from the theme codebase and technical guidance for standard settings and 3D configuration. Bespoke custom software development outside standard theme interfaces is not included in standard support.",

    aboutTag: "Engineering & Studio",
    aboutBadge: "Certified Salla Development Partner",
    aboutName: "Smart Solutions Provider (SSP)",
    aboutRole: "Certified Salla Theme Engineering Team",
    aboutText: "An engineering team specializing in e-commerce storefronts and Salla platform applications. We build reliable, high-performance software strictly compliant with Twilight engine standards and modern web specifications.",
    feat1: "Development aligned with Twilight 2.14 & WebGL standards",
    feat2: "Compliance with Salla security and data privacy standards",
    feat3: "Ongoing maintenance and regular compatibility updates",
    feat4: "Optimized architecture for Core Web Vitals and load performance",

    footerDesc: "Bellora — Salla storefront theme featuring a modern glass design system and interactive 3D presentation.",
    footerSupport: "Help & Support",
    footerWa: "WhatsApp Support",
    footerTheme: "Bellora on Salla Marketplace",
    footerLegal: "Official Links",
    footerCopy: "© 2026 Smart Solutions Provider (SSP). All rights reserved.",
    footerPartnerNote: "Certified Theme developed specifically for Salla.sa"
  }
};

let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const dict = translations[lang];
  document.title = dict.siteTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.dataset.bdi === 'true') {
        el.innerHTML = `<bdi class="phone-dir" dir="ltr">${dict[key]}</bdi>`;
      } else {
        el.textContent = dict[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.textContent = dict.langBtn;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize from the document locale without browser persistence.
  const initialLang = document.documentElement.lang === 'en' ? 'en' : 'ar';
  setLanguage(initialLang);

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Ticket Form Handler
  const waBtn = document.getElementById('sendWaBtn');
  const mailBtn = document.getElementById('sendMailBtn');

  function getFormData() {
    const storeName = document.getElementById('ticketStoreName')?.value.trim() || '';
    const storeUrl = document.getElementById('ticketStoreUrl')?.value.trim() || '';
    const contact = document.getElementById('ticketContact')?.value.trim() || '';
    const categorySelect = document.getElementById('ticketCategory');
    const category = categorySelect?.options[categorySelect.selectedIndex]?.text || '';
    const description = document.getElementById('ticketDesc')?.value.trim() || '';

    if (!storeName || !contact || !description) {
      alert(currentLang === 'ar' 
        ? 'يرجى ملء اسم المتجر، وسيلة التواصل، وشرح المشكلة.' 
        : 'Please fill in the store name, contact info, and description.');
      return null;
    }

    return { storeName, storeUrl, contact, category, description };
  }

  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const message = currentLang === 'ar'
        ? `السلام عليكم ورحمة الله وبركاته،\nطلب دعم فني لثيم بلّورا (Bellora):\n\n• اسم المتجر: ${data.storeName}\n• رابط المتجر: ${data.storeUrl || 'غير محدد'}\n• وسيلة التواصل: ${data.contact}\n• نوع المشكلة: ${data.category}\n\n• التفاصيل:\n${data.description}\n\nشكراً لكم.`
        : `Hello,\nBellora Salla Theme Support Request:\n\n• Store Name: ${data.storeName}\n• Store URL: ${data.storeUrl || 'N/A'}\n• Contact: ${data.contact}\n• Category: ${data.category}\n\n• Details:\n${data.description}\n\nThank you.`;

      const waUrl = `https://wa.me/966556786362?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (mailBtn) {
    mailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const subject = `[Bellora Support] ${data.category} - ${data.storeName}`;
      const body = currentLang === 'ar'
        ? `طلب دعم فني لثيم بلّورا:\n\nاسم المتجر: ${data.storeName}\nرابط المتجر: ${data.storeUrl || 'غير محدد'}\nوسيلة التواصل: ${data.contact}\nنوع المشكلة: ${data.category}\n\nتفاصيل المشكلة:\n${data.description}\n`
        : `Bellora Theme Support Request:\n\nStore Name: ${data.storeName}\nStore URL: ${data.storeUrl || 'N/A'}\nContact: ${data.contact}\nCategory: ${data.category}\n\nDetails:\n${data.description}\n`;

      const mailUrl = `mailto:info@ssp-1.com?cc=najetareqz@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailUrl;
    });
  }
});
