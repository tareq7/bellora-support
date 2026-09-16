/**
 * Bellora Theme — Official Support & Developer Portal
 * Interactive Logic: Bilingual i18n (AR/EN), FAQ Accordion, Ticket Builder
 */

const translations = {
  ar: {
    langBtn: "English",
    siteTitle: "بلّورا (Bellora) — مركز الدعم الفني والمطور المعتمد لثيم سلة",
    brandBadge: "قالب سلة معتمد",
    navChannels: "قنوات الدعم",
    navTicket: "تذكرة سريعة",
    navFaq: "الأسئلة الشائعة",
    navAbout: "عن المطور",
    navDocs: "التوثيق الرسمي",
    navCta: "محادثة مباشرة",
    
    heroBadge: "مركز الدعم الفني الرسمي لتجار سلة",
    heroTitle: "دعم فني فوري لقالب بلّورا (Bellora)",
    heroSubtitle: "نحن هنا لمساعدتك في تثبيت القالب، إعداد عروض 3D التفاعلية، وتخصيص تجربة التسوق الفاخرة لمتجرك بكل احترافية وسرعة.",
    heroWaBtn: "تواصل معنا عبر واتساب",
    heroDocsBtn: "دليل إعداد القالب",
    statResponseTime: "< ساعتين",
    statResponseDesc: "متوسط الرد في أوقات العمل",
    statTwilight: "Twilight 2.14+",
    statTwilightDesc: "متوافق بالكامل مع أحدث معايير سلة",
    stat3D: "WebGL & AR",
    stat3DDesc: "جاهز للواقع المعزز والثري دي",
    statSla: "100% مضمون",
    statSlaDesc: "دعم فني وتحديثات مستمرة",

    channelsTag: "وسائل التواصل المباشرة",
    channelsTitle: "اختر قناة الدعم المناسبة لك",
    channelsDesc: "فريقنا متواجد لخدمتك عبر قنوات متعددة لضمان استقرار وتميز متجرك.",
    
    chWaTitle: "الدعم المباشر عبر واتساب",
    chWaDesc: "للاستفسارات السريعة، المشاكل التقنية الطارئة، وإرشادات التخصيص الفورية مع فريق التطوير مباشرة.",
    chWaSla: "رد فوري (9 ص - 10 م بتوقيت مكة)",
    chWaAction: "فتح محادثة واتساب",

    chMailTitle: "البريد الإلكتروني المعتمد",
    chMailDesc: "لطلبات الدعم المفصلة، إرفاق ملفات النماذج ثلاثية الأبعاد، واستفسارات التخصيص الخاصة.",
    chMailSla: "خلال 24 ساعة كحد أقصى (SLA)",
    chMailAction: "info@ssp-1.com",

    chPhoneTitle: "الهاتف المباشر",
    chPhoneDesc: "للتواصل الهاتفي المباشر في الحالات العاجلة وطلبات المساعدة الفنية أثناء إطلاق المتجر.",
    chPhoneSla: "متاح خلال أوقات العمل الرسمية",
    chPhoneAction: "+966 55 678 6362",

    chDocsTitle: "التوثيق وكتيب الإرشادات",
    chDocsDesc: "شرح شامل ومصور لإعداد السلايدر الزجاجي، ضبط خيارات 3D، وتخصيص الألوان والوضع الداكن.",
    chDocsSla: "متاح على مدار الساعة",
    chDocsAction: "تصفح التوثيق الكامل",

    ticketTag: "إنشاء تذكرة دعم",
    ticketTitle: "طلب مساعدة فنية سريعة",
    ticketDesc: "املأ البيانات أدناه لإنشاء رسالة دعم منظمة وسيتم تحويلك مباشرة للواتساب أو البريد بضغطة واحدة.",
    labelStoreName: "اسم المتجر في سلة *",
    phStoreName: "مثال: متجر الأناقة",
    labelStoreUrl: "رابط المتجر في سلة (Domain) *",
    phStoreUrl: "مثال: store.salla.sa أو yourdomain.com",
    labelContact: "رقم الجوال أو البريد الإلكتروني للتواصل *",
    phContact: "مثال: 055xxxxxxx أو email@example.com",
    labelCategory: "نوع المشكلة أو الطلب *",
    catInstall: "تثبيت وتفعيل القالب",
    cat3D: "إعداد النماذج ثلاثية الأبعاد (GLB/GLTF)",
    catDesign: "تخصيص الألوان والتصميم والخطوط",
    catBug: "الإبلاغ عن خطأ برمجي (Bug)",
    catOther: "استفسار أو طلب عام",
    labelDesc: "تفاصيل الطلب أو المشكلة *",
    phDesc: "اشرح المشكلة بالتفصيل، وأي روابط أو لقطات شاشة مساعدة...",
    btnSendWa: "إرسال عبر واتساب 💬",
    btnSendMail: "إرسال عبر البريد الإلكتروني ✉️",

    faqTag: "الأسئلة الشائعة",
    faqTitle: "إجابات على أكثر أسئلة التجار شيوعاً",
    faqDesc: "كل ما تحتاج معرفته حول تثبيت، تحديث، ودعم قالب بلّورا لمتجرك في سلة.",

    faq1Q: "كيف أقوم بتفعيل قالب بلّورا على متجري بعد شرائه؟",
    faq1A: "بمجرد شراء القالب من متجر قوالب سلة، توجه إلى لوحة تحكم متجرك -> تخصيص المتجر -> القوالب. ستجد بلّورا متاحاً في قوالبك، انقر على 'تطبيق القالب' ثم 'تخصيص' للبدء في ضبط الألوان والواجهة.",

    faq2Q: "كيف أقوم بإضافة نماذج 3D للمنتجات وللسلايدر الرئيسي؟",
    faq2A: "يدعم قالب بلّورا ملفات GLB و GLTF خفيفة الحجم. يمكنك رفع الملف على رابط مباشر يدعم CORS أو عبر مكتبة الوسائط ووضعه في خانة رابط 3D المخصص في خيارات تخصيص القالب أو حقل النموذج ثلاثي الأبعاد المدمج بسلة. ستظهر الموديلات تلقائياً مع خيار العرض بالواقع المعزز (AR).",

    faq3Q: "هل القالب متوافق مع الوضع الليلي (Dark Mode) والهواتف الذكية؟",
    faq3A: "نعم 100%. تم بناء القالب ليكون متجاوباً تماماً (Mobile-First) مع تكيف ذكي مع الوضع الداكن تلقائياً وفق جهاز العميل، مع الحفاظ على جماليات الزجاج الشفاف وسرعة التصفح العالية.",

    faq4Q: "كيف تصلني التحديثات والتحسينات المستقبلية للقالب؟",
    faq4A: "تصل جميع التحديثات الأمنية، وتحديثات التوافق مع منصة سلة، والميزات الجديدة تلقائياً عبر لوحة تحكم سلة دون الحاجة لإعادة ضبط إعدادات متجرك.",

    faq5Q: "ما هي حدود الدعم الفني المجاني المشمول مع القالب؟",
    faq5A: "يشمل الدعم الفني المجاني حل أي أخطاء برمجية متعلقة بالقالب، المساعدة في ضبط الإعدادات الافتراضية، وتقديم الإرشادات الفنية لاستخدام مميزات 3D والتصميم الزجاجي. لطلبات التخصيص البرمجي المتقدم يمكنك مراسلتنا لترتيب ذلك.",

    aboutTag: "المطور والمؤسسة",
    aboutBadge: "شريك تطوير معتمد في منصة سلة",
    aboutName: "مؤسسة الإبداعات الذكية (Smart Solutions Provider - SSP)",
    aboutRole: "بإدارة المطور: طارق ناجي (Tareq Naji)",
    aboutText: "نحن استوديو متخصص في تطوير واجهات التجارة الإلكترونية الفاخرة وتطبيقات وحلول منصة سلة. نلتزم بتقديم تجارب تسوق رقمية استثنائية تجمع بين أعلى معايير الجمالية البصرية والسرعة الفائقة مع الالتزام الصارم بمعايير Twilight الرسمية.",
    feat1: "خبرة متقدمة في معايير Twilight 2.14 و WebGL",
    feat2: "التزام صارم بحماية البيانات ومعايير الأمان المعتمدة",
    feat3: "دعم فني مستمر وتحديثات متوافقة دورياً مع سلة",
    feat4: "حلول تقنية مبتكرة لزيادة معدلات التحويل للتاجر",

    footerDesc: "قالب بلّورا (Bellora) — واجهة متجر سلة الفاخرة بتقنيات العرض ثلاثي الأبعاد والتصميم الزجاجي المتطور.",
    footerSupport: "الدعم والمساعدة",
    footerLegal: "الروابط الرسمية",
    footerCopy: "© 2026 مؤسسة الإبداعات الذكية (SSP). جميع الحقوق محفوظة.",
    footerPartnerNote: "قالب معتمد ومصمم خصيصاً لمنصة سلة (Salla.sa)"
  },
  en: {
    langBtn: "العربية",
    siteTitle: "Bellora — Official Support & Developer Portal for Salla Theme",
    brandBadge: "Official Salla Theme",
    navChannels: "Support Channels",
    navTicket: "Quick Ticket",
    navFaq: "FAQ",
    navAbout: "About Developer",
    navDocs: "Official Docs",
    navCta: "Live Chat",
    
    heroBadge: "Official Merchant Support Portal for Salla",
    heroTitle: "Instant Technical Support for Bellora Theme",
    heroSubtitle: "We are here to help you configure, setup interactive 3D product showcases, and customize the luxury glassmorphism shopping experience for your store with speed and precision.",
    heroWaBtn: "Chat on WhatsApp",
    heroDocsBtn: "Theme Guide & Setup",
    statResponseTime: "< 2 Hours",
    statResponseDesc: "Average response during business hours",
    statTwilight: "Twilight 2.14+",
    statTwilightDesc: "Fully compliant with latest Salla standards",
    stat3D: "WebGL & AR",
    stat3DDesc: "Ready for interactive 3D and AR models",
    statSla: "100% Guaranteed",
    statSlaDesc: "Continuous updates and dedicated support",

    channelsTag: "Direct Contact Channels",
    channelsTitle: "Choose Your Preferred Support Channel",
    channelsDesc: "Our engineering team is available across multiple channels to ensure your store runs smoothly.",
    
    chWaTitle: "WhatsApp Instant Support",
    chWaDesc: "For rapid inquiries, urgent technical issues, and immediate styling assistance directly with the development team.",
    chWaSla: "Instant reply (9 AM – 10 PM KSA)",
    chWaAction: "Open WhatsApp Chat",

    chMailTitle: "Official Helpdesk Email",
    chMailDesc: "For detailed technical inquiries, attaching 3D assets, and custom design requests.",
    chMailSla: "Within 24 hours max (SLA committed)",
    chMailAction: "info@ssp-1.com",

    chPhoneTitle: "Direct Phone Call",
    chPhoneDesc: "For direct phone communication during store launches and urgent merchant onboarding.",
    chPhoneSla: "Available during official business hours",
    chPhoneAction: "+966 55 678 6362",

    chDocsTitle: "Documentation & Theme Manual",
    chDocsDesc: "Step-by-step guides for interactive glass sliders, 3D model requirements, colors, and dark mode.",
    chDocsSla: "Available 24/7 online",
    chDocsAction: "Browse Full Documentation",

    ticketTag: "Create Support Ticket",
    ticketTitle: "Fast Technical Assistance",
    ticketDesc: "Fill in the details below to generate a structured support ticket and dispatch it directly to WhatsApp or Email in 1 click.",
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
    btnSendWa: "Send via WhatsApp 💬",
    btnSendMail: "Send via Email ✉️",

    faqTag: "Merchant FAQ",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about installing, customizing, and updating Bellora on Salla.",

    faq1Q: "How do I activate Bellora on my Salla store after purchase?",
    faq1A: "Once acquired from the Salla Theme Marketplace, go to your Salla Dashboard -> Store Customization -> Themes. You will find Bellora ready in your purchased themes list. Click 'Apply Theme' then 'Customize' to configure your storefront.",

    faq2Q: "How do I add 3D GLB/GLTF models to products and the homepage slider?",
    faq2A: "Bellora supports standard lightweight GLB/GLTF files. You can upload them to a direct CORS-enabled storage or through Salla's media/product image 3D field. When configured, 3D interactive controls and Augmented Reality (AR) options appear automatically.",

    faq3Q: "Is Bellora fully responsive and compatible with Smart Dark Mode?",
    faq3A: "Yes, 100%. The theme is engineered mobile-first with adaptive dark mode that harmonizes with your customer's system settings while preserving the signature frosted-glass aesthetic and blazing performance.",

    faq4Q: "How are future theme updates delivered?",
    faq4A: "All bug fixes, Salla Twilight engine updates, and new feature releases are automatically delivered through your Salla store admin dashboard without overwriting your configured settings.",

    faq5Q: "What is covered under official theme support?",
    faq5A: "Free support includes resolving theme bugs, assistance with setting up native features, and technical guidance for 3D model integration. For bespoke custom development or third-party app integrations, contact us directly.",

    aboutTag: "Developer & Studio",
    aboutBadge: "Certified Salla Development Partner",
    aboutName: "Smart Solutions Provider (SSP)",
    aboutRole: "Lead Developer: Tareq Naji",
    aboutText: "We are an elite software studio specializing in high-end e-commerce storefronts, Twilight themes, and custom applications for the Salla ecosystem. We focus on craft, high conversion rates, and strict adherence to Salla performance guidelines.",
    feat1: "Deep expertise in Salla Twilight 2.14 & WebGL 3D",
    feat2: "Strict data privacy and certified security standards",
    feat3: "Proactive maintenance aligned with Salla platform roadmap",
    feat4: "Conversion-optimized layouts designed for Arab markets",

    footerDesc: "Bellora — The luxury Salla storefront theme featuring interactive 3D visualizations and frosted glass design.",
    footerSupport: "Help & Support",
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
      el.textContent = dict[key];
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

  localStorage.setItem('bellora_support_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language from storage or default to Arabic
  const savedLang = localStorage.getItem('bellora_support_lang') || 'ar';
  setLanguage(savedLang);

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
        ? `السلام عليكم ورحمة الله وبركاته،\nطلب دعم فني لقالب بلّورا (Bellora):\n\n• اسم المتجر: ${data.storeName}\n• رابط المتجر: ${data.storeUrl || 'غير محدد'}\n• وسيلة التواصل: ${data.contact}\n• نوع المشكلة: ${data.category}\n\n• التفاصيل:\n${data.description}\n\nشكراً لكم.`
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
        ? `طلب دعم فني لقالب بلّورا:\n\nاسم المتجر: ${data.storeName}\nرابط المتجر: ${data.storeUrl || 'غير محدد'}\nوسيلة التواصل: ${data.contact}\nنوع المشكلة: ${data.category}\n\nتفاصيل المشكلة:\n${data.description}\n`
        : `Bellora Theme Support Request:\n\nStore Name: ${data.storeName}\nStore URL: ${data.storeUrl || 'N/A'}\nContact: ${data.contact}\nCategory: ${data.category}\n\nDetails:\n${data.description}\n`;

      const mailUrl = `mailto:info@ssp-1.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailUrl;
    });
  }
});
