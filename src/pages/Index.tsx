import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (904) 764-67-45";
const PHONE_HREF = "tel:+79047646745";
const ADDRESS = "Казань, ул. Хайдара Бигичева, 4";
const ADDRESS_URL = "https://yandex.com/maps/org/dar_rechi/212005083058/?ll=49.224767%2C55.784157&z=16.68";

const LOGO_URL = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/19947fc7-5f68-441b-ab10-4e8dd26e909c.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/b867cc4d-a403-4672-999a-79e5d7095347.jpg";
const SUBMIT_URL = "https://functions.poehali.dev/7066643f-210d-493e-b06f-d7cb99742537";

const WA_URL = "https://wa.me/79047646745?text=Здравствуйте!+Меня+заинтересовало+ваше+предложение";
const TG_URL = "https://t.me/+79047646745";
const VK_URL = "https://vk.com/public167590662";

const SocialButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 shadow">
      <Icon name="MessageCircle" size={18} />
      WhatsApp
    </a>
    <a href={TG_URL} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#2AABEE] text-white px-5 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 shadow">
      <Icon name="Send" size={18} />
      Telegram
    </a>
    <a href={VK_URL} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#4C75A3] text-white px-5 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 shadow">
      <Icon name="Users" size={18} />
      ВКонтакте
    </a>
  </div>
);

const AddressLink = ({ className = "" }: { className?: string }) => (
  <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer"
    className={`hover:underline hover:text-[#6eb42d] transition-colors ${className}`}>
    {ADDRESS}
  </a>
);

type ServiceDetail = {
  icon: string;
  title: string;
  shortDesc: string;
  fullText: string[];
};

const services: ServiceDetail[] = [
  {
    icon: "Mic",
    title: "Коррекция звукопроизношения",
    shortDesc: "Комплексная работа по постановке и автоматизации звуков с параллельным развитием речевой системы ребёнка.",
    fullText: [
      "Комплексная работа по постановке и автоматизации звуков с параллельным развитием речевой системы ребёнка.",
      "Занятие включает:",
      "• артикуляционную гимнастику",
      "• постановку звука",
      "• автоматизацию в слогах, словах, фразах и речи",
      "• развитие связной речи",
      "• формирование грамматического строя речи",
      "Мы используем нейропсихологический подход, современные пособия и игровые технологии. Занятия проходят в игровой форме с включением подвижных упражнений для поддержания внимания и повышения эффективности работы.",
      "Продолжительность занятия — 40 минут.",
    ],
  },
  {
    icon: "Baby",
    title: "Запуск речи (с 2,5 лет)",
    shortDesc: "Программа направлена на активацию речевой системы ребёнка. Индивидуальный план по итогам диагностики.",
    fullText: [
      "Программа направлена на активацию речевой системы ребёнка.",
      "Каждый план работы составляется индивидуально и зависит от структуры нарушения, которая определяется на диагностике. Мы учитываем особенности сенсорного развития, моторики, понимания речи и эмоционально-волевой сферы ребёнка.",
      "В работе используются:",
      "• нейроподход",
      "• современные игровые пособия",
      "• методы стимуляции речевой активности",
      "Занятия способствуют появлению первых слов, расширению словарного запаса, формированию фразовой речи.",
      "Продолжительность занятия — 40 минут.",
    ],
  },
  {
    icon: "Hand",
    title: "Логопедический массаж",
    shortDesc: "Методика направлена на нормализацию мышечного тонуса артикуляционного аппарата.",
    fullText: [
      "Методика направлена на нормализацию мышечного тонуса артикуляционного аппарата.",
      "Особенно эффективен при:",
      "• дизартрии",
      "• нарушениях тонуса мышц языка и губ",
      "• слабости артикуляционной моторики",
      "Массаж:",
      "• улучшает подвижность органов артикуляции",
      "• подготавливает мышцы к постановке звуков",
      "• повышает эффективность логопедических занятий",
      "• улучшает чёткость и разборчивость речи",
      "Проводится вручную и с использованием специальных логопедических зондов.",
      "Курс — 10 сеансов по 30 минут.",
    ],
  },
  {
    icon: "Brain",
    title: "Нейрокоррекция (с 3 лет)",
    shortDesc: "Занятия активизируют межполушарное взаимодействие, развивают внимание, память и саморегуляцию.",
    fullText: [
      "Современная практика показывает, что при запуске речи и речевых нарушениях необходима комплексная работа.",
      "Нейрокоррекционные занятия:",
      "• активизируют межполушарное взаимодействие",
      "• развивают внимание, память и саморегуляцию",
      "• улучшают поведение",
      "• повышают готовность мозга к обучению",
      "Нейрозанятия усиливают эффективность логопедической работы и помогают ребёнку выйти на новый уровень развития.",
    ],
  },
  {
    icon: "GraduationCap",
    title: "Нейрокоррекция (с 7 лет)",
    shortDesc: "Помощь детям с трудностями школьного обучения: дисграфия, дислексия, трудности концентрации.",
    fullText: [
      "Направлена на помощь детям с трудностями школьного обучения.",
      "Показания:",
      "• дисграфия (нарушение письма)",
      "• дислексия (нарушение чтения)",
      "• трудности концентрации внимания",
      "• снижение учебной мотивации",
      "• проблемы с графомоторными навыками",
      "Занятия помогают:",
      "• улучшить письмо и чтение",
      "• повысить скорость обработки информации",
      "• развить устойчивость внимания",
      "• сформировать навыки самоконтроля",
      "• повысить уверенность ребёнка в школе",
    ],
  },
  {
    icon: "Activity",
    title: "Мозжечковая стимуляция",
    shortDesc: "Специализированный курс активизации работы мозжечка — структуры мозга, отвечающей за речь, внимание и обучение.",
    fullText: [
      "Специализированный курс, направленный на активизацию работы мозжечка — структуры мозга, отвечающей не только за координацию, но и за развитие речи, внимания, мышления и обучения.",
      "Программа помогает вывести ребёнка на качественно новый уровень развития.",
      "Для дошкольников:",
      "• улучшается координация движений",
      "• ускоряется запуск речи",
      "• повышается концентрация внимания",
      "• формируется готовность к школе",
      "Для школьников:",
      "• повышается скорость чтения и письма",
      "• улучшается успеваемость",
      "• развивается саморегуляция",
      "• снижается утомляемость",
      "Курс — 15 занятий. Рекомендуемая частота: 3–5 раз в неделю.",
    ],
  },
  {
    icon: "PenTool",
    title: "Каллиграфия",
    shortDesc: "Интенсивный курс коррекции и формирования красивого, разборчивого почерка.",
    fullText: [
      "Интенсивный курс коррекции и формирования красивого, разборчивого почерка.",
      "Программа включает 24 занятия, в ходе которых:",
      "• формируется правильная посадка и постановка руки",
      "• развивается графомоторный навык",
      "• корректируется нажим и ритм письма",
      "• вырабатывается аккуратный и стабильный почерк",
      "Используются современные методики, интерактивные технологии и специализированные прописи.",
      "Курс значительно повышает уверенность ребёнка в школе и снижает количество ошибок на письме.",
    ],
  },
  {
    icon: "MessageSquare",
    title: "Коррекция заикания",
    shortDesc: "В центре работает логопед-заиколог. Нормализация темпа и ритма речи, работа с дыханием и голосом.",
    fullText: [
      "В центре работает логопед-заиколог.",
      "Заикание чаще всего дебютирует в возрасте 3–4 лет. Очень важно не ждать, что «пройдёт само», а своевременно обратиться к квалифицированному специалисту.",
      "Работа направлена на:",
      "• нормализацию темпа и ритма речи",
      "• снижение речевого напряжения",
      "• формирование плавной речи",
      "• работу с дыханием и голосом",
      "• психологическую поддержку ребёнка",
      "Ранняя помощь значительно повышает эффективность коррекции.",
    ],
  },
];

const whyUs = [
  { icon: "Layers", title: "Комплексный нейроподход", desc: "Системный нейропсихологический подход, учитывающий особенности развития мозга ребёнка — для устойчивых результатов." },
  { icon: "Award", title: "Опытные специалисты", desc: "Логопеды-дефектологи и нейропсихологи с опытом более 10 лет. Регулярное обучение и повышение квалификации." },
  { icon: "FileText", title: "Индивидуальные программы", desc: "Диагностика перед началом занятий. Индивидуальный маршрут коррекции с учётом структуры нарушения и возраста ребёнка." },
  { icon: "Building2", title: "Комплексная помощь в одном месте", desc: "Логопед, нейропсихолог, логопедический массаж, мозжечковая стимуляция — всё в рамках одного центра." },
  { icon: "Gamepad2", title: "Игровой формат занятий", desc: "Работа через интерес и мотивацию ребёнка. Нейроигры, подвижные упражнения и интерактивные технологии." },
  { icon: "HeartHandshake", title: "Поддержка родителей", desc: "Сопровождаем на всех этапах: рекомендации, объяснение структуры нарушений и динамики развития ребёнка." },
];

const faqs = [
  { q: "С какого возраста стоит обращаться к логопеду?", a: "Первичная консультация возможна уже с 1,5–2 лет. Программа «Запуск речи» рассчитана на детей от 2,5 лет. Плановая диагностика — с 3 лет, перед школой обязательно в 5–6 лет." },
  { q: "Как долго длится курс занятий?", a: "Всё индивидуально. Длительность определяется по итогам диагностики с учётом структуры нарушения. Обычно коррекция звукопроизношения — 3–6 месяцев при занятиях 2 раза в неделю, при более сложных нарушениях — от 6 месяцев." },
  { q: "Нужно ли направление от врача?", a: "Нет, направление не требуется. Записывайтесь напрямую. При наличии медицинских документов (заключения невролога, ЛОРа) просьба взять их с собой." },
  { q: "Что такое нейрокоррекция и кому она нужна?", a: "Нейрокоррекционные занятия активизируют межполушарное взаимодействие, развивают внимание, память и саморегуляцию. Рекомендуются детям с задержкой речи, нарушениями поведения и трудностями школьного обучения (дисграфия, дислексия)." },
  { q: "Что такое мозжечковая стимуляция?", a: "Специализированный курс активизации работы мозжечка — структуры мозга, отвечающей за речь, координацию, внимание и обучение. Курс 15 занятий, 3–5 раз в неделю. Помогает дошкольникам и школьникам." },
];

const reviews = [
  { name: "Наталья К.", text: "Привели сына в 4 года — почти не говорил. За полгода занятий в «Даре речи» прогресс просто колоссальный! Специалист — настоящий профессионал.", stars: 5 },
  { name: "Дмитрий Р.", text: "Записались на нейрокоррекцию после того, как у сына начались проблемы в школе с чтением. Результат заметили уже через 2 месяца. Очень рекомендую.", stars: 5 },
  { name: "Светлана М.", text: "Дочке 6 лет, готовились к школе. Логопед помогла не только с речью, но и с уверенностью в себе. Рекомендую всем!", stars: 5 },
  { name: "Ирина Г.", text: "Занимаемся второй год. Специалист находит подход к любому ребёнку, занятия проходят в игровой форме — дети идут с удовольствием.", stars: 5 },
];

type GalleryItem = { url: string; label?: string };

const galleryItems: GalleryItem[] = [
  { url: "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/fb55e00a-d0fe-4c46-a2e4-e4fa63876ec2.png", label: "Нейрозанятия с малышами" },
  { url: "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/a00e6336-641d-41c1-9249-4f882525e348.png", label: "Нейрозанятия с 7 лет" },
  { url: "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/e60fb6d2-6f6e-4202-adc0-855caa0fe72a.png", label: "Коррекция звукопроизношения" },
  { url: "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/9230ced5-2b5d-4a1e-b22e-e31563f2210a.png", label: "Запуск речи" },
  { url: "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/b867cc4d-a403-4672-999a-79e5d7095347.jpg", label: "" },
];

function ServiceModal({ service, onClose }: { service: ServiceDetail; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f5d119] rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name={service.icon} size={18} className="text-[#1a1a1a]" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#1a1a1a]">{service.title}</h3>
          </div>
          <button onClick={onClose} className="ml-4 text-gray-400 hover:text-[#1a1a1a] transition-colors flex-shrink-0">
            <Icon name="X" size={22} />
          </button>
        </div>
        <div className="px-6 py-5 space-y-2">
          {service.fullText.map((line, i) => {
            const isBullet = line.startsWith("•");
            const isHeader = !isBullet && !line.startsWith("Продолж") && !line.startsWith("Курс") && i > 0 && line.endsWith(":");
            return (
              <p key={i} className={
                isBullet ? "text-[#555] text-sm pl-4" :
                isHeader ? "font-semibold text-[#1a1a1a] mt-3" :
                line.startsWith("Продолж") || line.startsWith("Курс") ? "text-sm font-semibold text-[#1a1a1a] bg-[#f5d119]/30 px-3 py-1 rounded-full inline-block mt-2" :
                "text-[#555] text-sm leading-relaxed"
              }>
                {line}
              </p>
            );
          })}
        </div>
        <div className="px-6 pb-6">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
}

function PhotoCarousel({ items }: { items: GalleryItem[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="relative select-none">
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[420px] sm:h-[520px]">
          {items.map((item, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <img src={item.url} alt={item.label || `Фото ${i + 1}`} className="w-full h-full object-cover" />
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
                  <span className="text-white font-semibold text-lg">{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
          <Icon name="ChevronLeft" size={20} className="text-[#1a1a1a]" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
          <Icon name="ChevronRight" size={20} className="text-[#1a1a1a]" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? "w-6 h-2.5 bg-[#f5d119]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#f5d119]/60"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks: [string, string][] = [
    ["hero","Главная"],["services","Услуги"],["why","Почему мы"],["about","О центре"],["reviews","Отзывы"],["faq","Вопросы"],["contacts","Контакты"]
  ];

  return (
    <div className="font-golos bg-white text-[#1a1a1a] min-h-screen overflow-x-hidden">
      {/* MODAL */}
      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f5d119] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Дар речи" className="h-11 w-auto object-contain rounded-lg" />
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#1a1a1a]">
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#6eb42d] transition-colors">{label}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="text-sm font-bold text-[#1a1a1a] hover:text-[#6eb42d]">{PHONE}</a>
          </div>
          <button className="md:hidden text-[#1a1a1a]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#f5d119] border-t border-[#e8c700] px-4 py-4 flex flex-col gap-4">
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-[#1a1a1a] font-semibold hover:text-[#6eb42d]">{label}</button>
            ))}
            <a href={PHONE_HREF} className="font-bold text-[#1a1a1a]">{PHONE}</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Нейрологопедический центр Дар речи" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={14} />
              <AddressLink className="text-white hover:text-[#f5d119]" />
            </div>
            <div className="mb-6">
              <img src={LOGO_URL} alt="Дар речи" className="h-24 w-auto object-contain rounded-xl drop-shadow-lg" />
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Нейрологопедический центр
            </h1>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Квалифицированная помощь детям с трудностями речевого развития, поведения и обучения с 2016 года.
            </p>
            <SocialButtons />
            <div className="flex flex-wrap gap-8 mt-10">
              {[["с 2016","работаем"],["10+ лет","опыт специалистов"],["500+","довольных семей"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-bold text-[#f5d119]">{num}</div>
                  <div className="text-white/80 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Направления работы</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a] uppercase tracking-wide">НАШИ УСЛУГИ</h2>
            <p className="mt-4 text-[#555] text-lg max-w-2xl mx-auto">Системная, комплексная помощь ребёнку — не просто устранение симптома, а работа с причиной</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-white border-2 border-[#f5d119]/40 rounded-2xl p-5 hover:border-[#f5d119] hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6eb42d] transition-colors flex-shrink-0">
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed flex-1">{s.shortDesc}</p>
                <button
                  onClick={() => setActiveService(s)}
                  className="mt-4 self-start text-sm font-semibold text-[#1a1a1a] bg-[#f5d119] hover:bg-[#6eb42d] hover:text-white px-4 py-2 rounded-full transition-all"
                >
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO CAROUSEL */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Наши занятия</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Как мы работаем</h2>
          </div>
          <PhotoCarousel items={galleryItems} />
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Наши преимущества</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => {
              const colors = ["bg-[#f5d119]","bg-[#6eb42d]","bg-[#4cbdc5]","bg-[#e62c53]","bg-[#f5d119]","bg-[#6eb42d]"];
              return (
                <div key={w.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className={`w-12 h-12 ${colors[i]} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={w.icon} size={22} className="text-white" />
                  </div>
                  <h3 className="font-cormorant text-xl font-bold text-[#1a1a1a] mb-2">{w.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">О центре</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
                Нейрологопедический<br /><span className="italic text-[#f5d119]">центр «Дар речи»</span>
              </h2>
              <div className="space-y-4 text-[#444] leading-relaxed">
                <p>Нейрологопедический центр «Дар речи» основан в 2016 году с целью оказания квалифицированной помощи детям с трудностями речевого развития, поведения и обучения.</p>
                <p>Мы работаем с детьми, которым требуется профессиональная поддержка в формировании речи, высших психических функций, навыков саморегуляции и успешной подготовки к школе.</p>
                <p>В центре ведут приём опытные специалисты: <strong className="text-[#1a1a1a]">логопеды-дефектологи</strong> и <strong className="text-[#1a1a1a]">нейропсихологи</strong>. Стаж работы специалистов — более 10 лет. Команда регулярно проходит повышение квалификации, обучается современным методикам и внедряет в работу эффективные нейропсихологические подходы.</p>
                <p className="font-semibold text-[#1a1a1a]">Наша задача — не просто устранить отдельный симптом, а выстроить системную, комплексную помощь ребёнку.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "с 2016", label: "Год основания" },
                { num: "10+", label: "Лет опыта специалистов" },
                { num: "8", label: "Направлений работы" },
                { num: "500+", label: "Довольных семей" },
              ].map((item, i) => {
                const bgs = ["bg-[#f5d119]","bg-[#6eb42d]","bg-[#4cbdc5]","bg-[#e62c53]"];
                return (
                  <div key={item.label} className={`${bgs[i]} rounded-2xl p-6 flex flex-col items-center justify-center text-center`}>
                    <div className="font-cormorant text-4xl font-bold text-white">{item.num}</div>
                    <div className="text-white/90 text-sm mt-1">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#f5d119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#333] text-lg mb-8">Свяжитесь с нами удобным способом — ответим на все вопросы и подберём специалиста</p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <SocialButtons />
          </div>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow">
            <Icon name="Phone" size={20} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Нам доверяют</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Отзывы семей</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#f9f9f9] border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">{[...Array(r.stars)].map((_, j) => <span key={j} className="text-[#f5d119] text-sm">★</span>)}</div>
                <p className="text-[#555] text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#f5d119] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold text-sm">{r.name[0]}</div>
                  <span className="font-semibold text-[#1a1a1a] text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Часто спрашивают</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Вопросы и ответы</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-[#1a1a1a] pr-4">{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#f5d119] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#555] leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">Мы рядом</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="text-xs text-[#999] font-semibold uppercase tracking-wide">Адрес</div>
                  <AddressLink className="text-[#1a1a1a] font-medium" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="text-xs text-[#999] font-semibold uppercase tracking-wide">Телефон</div>
                  <a href={PHONE_HREF} className="text-[#1a1a1a] font-medium hover:text-[#6eb42d] transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} className="text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="text-xs text-[#999] font-semibold uppercase tracking-wide">Режим работы</div>
                  <div className="text-[#1a1a1a] font-medium">Пн–Пт: 9:00–20:00, Сб: 9:00–17:00</div>
                </div>
              </div>
              <div className="mt-2">
                <SocialButtons />
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-80 shadow-sm">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=49.224767%2C55.784157&z=16&mode=search&text=%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C%2C+%D1%83%D0%BB.+%D0%A5%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%B0+%D0%91%D0%B8%D0%B3%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%2C+4"
                width="100%" height="100%" frameBorder="0" title="Карта" className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={LOGO_URL} alt="Дар речи" className="h-12 w-auto object-contain rounded-lg" />
          <p className="text-sm text-gray-400 text-center">
            © 2026 Нейрологопедический центр «Дар речи». <AddressLink className="text-gray-400 hover:text-[#f5d119]" />
          </p>
          <SocialButtons />
        </div>
      </footer>
    </div>
  );
}