import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (904) 764-67-45";
const PHONE_HREF = "tel:+79047646745";
const ADDRESS = "Казань, ул. Хайдара Бигичева, 4";

const HERO_IMG = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/files/255d861e-b0b7-4dca-b3f2-94cb0f1d5014.jpg";
const SUBMIT_URL = "https://functions.poehali.dev/7066643f-210d-493e-b06f-d7cb99742537";

const services = [
  {
    icon: "Mic",
    title: "Коррекция звукопроизношения",
    desc: "Комплексная работа по постановке и автоматизации звуков с параллельным развитием речевой системы. Артикуляционная гимнастика, постановка звука, автоматизация в слогах, словах, фразах. Нейропсихологический подход и игровые технологии.",
    duration: "Занятие — 40 минут",
  },
  {
    icon: "Baby",
    title: "Запуск речи (с 2,5 лет)",
    desc: "Программа активации речевой системы ребёнка. Индивидуальный план работы составляется по итогам диагностики с учётом особенностей сенсорного развития, моторики и понимания речи. Нейроподход, современные игровые пособия, стимуляция речевой активности.",
    duration: "Занятие — 40 минут",
  },
  {
    icon: "Hand",
    title: "Логопедический массаж",
    desc: "Нормализация мышечного тонуса артикуляционного аппарата. Эффективен при дизартрии, нарушениях тонуса мышц языка и губ. Улучшает подвижность органов артикуляции и подготавливает мышцы к постановке звуков. Проводится вручную и с логопедическими зондами.",
    duration: "Курс — 10 сеансов по 30 минут",
  },
  {
    icon: "Brain",
    title: "Нейрокоррекция (с 3 лет)",
    desc: "Занятия активизируют межполушарное взаимодействие, развивают внимание, память и саморегуляцию, улучшают поведение и повышают готовность мозга к обучению. Усиливают эффективность логопедической работы.",
    duration: "",
  },
  {
    icon: "GraduationCap",
    title: "Нейрокоррекция (с 7 лет)",
    desc: "Помощь детям с трудностями школьного обучения: дисграфия, дислексия, трудности концентрации. Улучшают письмо и чтение, повышают скорость обработки информации, развивают устойчивость внимания и навыки самоконтроля.",
    duration: "",
  },
  {
    icon: "Activity",
    title: "Мозжечковая стимуляция",
    desc: "Активизация работы мозжечка — структуры, отвечающей за координацию, речь, внимание и обучение. Для дошкольников: запуск речи и готовность к школе. Для школьников: скорость чтения и письма, успеваемость.",
    duration: "Курс — 15 занятий, 3–5 раз в неделю",
  },
  {
    icon: "PenTool",
    title: "Каллиграфия",
    desc: "Интенсивный курс коррекции и формирования красивого разборчивого почерка. Правильная посадка и постановка руки, графомоторный навык, нажим и ритм письма. Современные методики, интерактивные технологии и специализированные прописи.",
    duration: "Курс — 24 занятия",
  },
  {
    icon: "MessageSquare",
    title: "Коррекция заикания",
    desc: "В центре работает логопед-заиколог. Нормализация темпа и ритма речи, снижение речевого напряжения, формирование плавной речи, работа с дыханием и голосом, психологическая поддержка. Ранняя помощь значительно повышает эффективность.",
    duration: "",
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
  { q: "Что такое мозжечковая стимуляция?", a: "Специализированный курс активизации работы мозжечка — структуры мозга, отвечающей за речь, координацию, внимание и обучение. Курс 15 занятий, 3–5 раз в неделю. Помогает как дошкольникам, так и школьникам." },
  { q: "Занимаетесь ли вы со взрослыми?", a: "Да. В центре работает логопед-заиколог, который помогает взрослым при заикании, нарушениях темпа и ритма речи. Также доступен курс каллиграфии для школьников." },
];

const reviews = [
  { name: "Наталья К.", text: "Привели сына в 4 года — почти не говорил. За полгода занятий в «Даре речи» прогресс просто колоссальный! Специалист — настоящий профессионал.", stars: 5 },
  { name: "Дмитрий Р.", text: "Записались на нейрокоррекцию после того, как у сына начались проблемы в школе с чтением. Результат заметили уже через 2 месяца. Очень рекомендую.", stars: 5 },
  { name: "Светлана М.", text: "Дочке 6 лет, готовились к школе. Логопед помогла не только с речью, но и с уверенностью в себе. Рекомендую всем!", stars: 5 },
  { name: "Ирина Г.", text: "Занимаемся второй год. Специалист находит подход к любому ребёнку, занятия проходят в игровой форме — дети идут с удовольствием.", stars: 5 },
];

type FormData = { name: string; phone: string; service: string; age: string; comment: string };

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", phone: "", service: "", age: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", phone: "", service: "", age: "", comment: "" });
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openModal = () => { setModalOpen(true); setSubmitted(false); };

  const navLinks: [string, string][] = [
    ["hero","Главная"],["services","Услуги"],["why","Почему мы"],["about","О центре"],["reviews","Отзывы"],["faq","Вопросы"],["contacts","Контакты"]
  ];

  return (
    <div className="font-golos bg-[#F9F5F0] text-[#2A1F15] min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5F0]/95 backdrop-blur-sm border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Дар речи"
              className="h-10 w-auto"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) fallback.classList.remove("hidden");
              }}
            />
            <span className="hidden font-cormorant text-2xl font-bold text-[#7A3B20] tracking-wide">Дар речи</span>
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5C4033]">
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#7A3B20] transition-colors">{label}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="text-sm font-semibold text-[#7A3B20] hover:text-[#5C2D12]">{PHONE}</a>
            <button onClick={openModal} className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105">
              Записаться
            </button>
          </div>
          <button className="md:hidden text-[#7A3B20]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#F9F5F0] border-t border-[#E8DDD0] px-4 py-4 flex flex-col gap-4">
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-[#5C4033] font-medium hover:text-[#7A3B20]">{label}</button>
            ))}
            <button onClick={() => { openModal(); setMenuOpen(false); }} className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-3 rounded-full font-semibold">
              Записаться онлайн
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Нейрологопедический центр Дар речи" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1F15]/85 via-[#2A1F15]/55 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#F9F5F0]/20 backdrop-blur-sm border border-[#F9F5F0]/30 text-[#F9F5F0] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={14} />
              {ADDRESS}
            </div>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9F5F0] leading-tight mb-6">
              Нейрологопедический<br />
              <span className="italic text-[#E8C99A]">центр «Дар речи»</span>
            </h1>
            <p className="text-[#E8DDD0] text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Квалифицированная помощь детям с трудностями речевого развития, поведения и обучения с 2016 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openModal} className="bg-[#7A3B20] text-[#F9F5F0] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105 shadow-lg">
                Записаться на диагностику
              </button>
              <button onClick={() => scrollTo("services")} className="bg-[#F9F5F0]/15 backdrop-blur-sm border border-[#F9F5F0]/50 text-[#F9F5F0] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#F9F5F0]/25 transition-all">
                Наши направления
              </button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              {[["с 2016","работаем"],["10+ лет","опыт специалистов"],["500+","довольных семей"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-bold text-[#E8C99A]">{num}</div>
                  <div className="text-[#E8DDD0] text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Направления работы</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Наши услуги</h2>
            <p className="mt-4 text-[#5C4033] text-lg max-w-2xl mx-auto">Системная, комплексная помощь ребёнку — не просто устранение симптома, а работа с причиной</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-white border border-[#E8DDD0] rounded-2xl p-5 hover:border-[#7A3B20] hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-11 h-11 bg-[#F5EDE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7A3B20] transition-colors flex-shrink-0">
                  <Icon name={s.icon} size={20} className="text-[#7A3B20] group-hover:text-[#F9F5F0] transition-colors" />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-[#2A1F15] mb-2">{s.title}</h3>
                <p className="text-[#7A6055] text-sm leading-relaxed flex-1">{s.desc}</p>
                {s.duration && (
                  <div className="mt-3 text-xs font-semibold text-[#7A3B20] bg-[#F5EDE4] px-3 py-1 rounded-full inline-block self-start">
                    {s.duration}
                  </div>
                )}
                <button onClick={openModal} className="mt-4 text-xs text-[#7A3B20] font-semibold hover:underline text-left">
                  Записаться →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 bg-[#F0E8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Наши преимущества</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
                <div className="w-12 h-12 bg-[#7A3B20] rounded-xl flex items-center justify-center mb-4">
                  <Icon name={w.icon} size={22} className="text-[#F9F5F0]" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#2A1F15] mb-2">{w.title}</h3>
                <p className="text-[#7A6055] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">О центре</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15] mb-6">
                Нейрологопедический<br /><span className="italic text-[#7A3B20]">центр «Дар речи»</span>
              </h2>
              <div className="space-y-4 text-[#5C4033] leading-relaxed">
                <p>Центр основан в 2016 году с целью оказания квалифицированной помощи детям с трудностями речевого развития, поведения и обучения.</p>
                <p>Мы работаем с детьми, которым требуется профессиональная поддержка в формировании речи, высших психических функций, навыков саморегуляции и успешной подготовки к школе.</p>
                <p>В центре ведут приём опытные специалисты: <strong className="text-[#2A1F15]">логопеды-дефектологи</strong> и <strong className="text-[#2A1F15]">нейропсихологи</strong>. Стаж работы специалистов — более 10 лет. Команда регулярно проходит повышение квалификации, обучается современным методикам и внедряет эффективные нейропсихологические подходы.</p>
                <p className="font-semibold text-[#2A1F15]">Наша задача — не просто устранить отдельный симптом, а выстроить системную, комплексную помощь ребёнку.</p>
              </div>
              <button onClick={openModal} className="mt-8 bg-[#7A3B20] text-[#F9F5F0] px-8 py-4 rounded-full font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105">
                Записаться на диагностику
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "с 2016", label: "Год основания" },
                { num: "10+", label: "Лет опыта специалистов" },
                { num: "8", label: "Направлений работы" },
                { num: "500+", label: "Довольных семей" },
              ].map((item) => (
                <div key={item.label} className="bg-[#F0E8DE] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-[#E8DDD0]">
                  <div className="font-cormorant text-4xl font-bold text-[#7A3B20]">{item.num}</div>
                  <div className="text-[#5C4033] text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#7A3B20]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#F9F5F0] mb-4">Бесплатная консультация по телефону</h2>
          <p className="text-[#E8C99A] text-lg mb-8">Позвоните нам — ответим на все вопросы и подберём специалиста</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={PHONE_HREF} className="bg-[#F9F5F0] text-[#7A3B20] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8DDD0] transition-all hover:scale-105">
              {PHONE}
            </a>
            <button onClick={openModal} className="bg-[#5C2D12] text-[#F9F5F0] px-8 py-4 rounded-full font-semibold hover:bg-[#3D1D0A] transition-all hover:scale-105">
              Записаться онлайн
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Нам доверяют</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Отзывы семей</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-[#E8DDD0] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">{[...Array(r.stars)].map((_, j) => <span key={j} className="text-[#E8B84B] text-sm">★</span>)}</div>
                <p className="text-[#5C4033] text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#F5EDE4] rounded-full flex items-center justify-center text-[#7A3B20] font-bold text-sm">{r.name[0]}</div>
                  <span className="font-semibold text-[#2A1F15] text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#F0E8DE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Часто спрашивают</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Вопросы и ответы</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-[#2A1F15] pr-4">{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#7A3B20] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#5C4033] leading-relaxed border-t border-[#F0E8DE] pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Мы рядом</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              {[
                { icon: "MapPin", label: "Адрес", value: ADDRESS },
                { icon: "Phone", label: "Телефон", value: PHONE },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб: 9:00–17:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#7A3B20] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-[#F9F5F0]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#A8927E] font-semibold uppercase tracking-wide">{c.label}</div>
                    <div className="text-[#2A1F15] font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button onClick={openModal} className="bg-[#7A3B20] text-[#F9F5F0] px-8 py-4 rounded-full font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105">
                  Записаться на диагностику
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DDD0] h-80">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=49.224767%2C55.784157&z=16&mode=search&text=%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C%2C+%D1%83%D0%BB.+%D0%A5%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%B0+%D0%91%D0%B8%D0%B3%D0%B8%D1%87%D0%B5%D0%B2%D0%B0%2C+4"
                width="100%" height="100%" frameBorder="0" title="Карта" className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A1F15] text-[#E8DDD0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-2xl font-bold text-[#E8C99A]">Дар речи</div>
          <p className="text-sm text-[#A8927E] text-center">© 2026 Нейрологопедический центр «Дар речи». {ADDRESS}</p>
          <button onClick={openModal} className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C2D12] transition-all">
            Записаться
          </button>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setModalOpen(false); setSubmitted(false); }} />
          <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="bg-[#7A3B20] px-6 py-5 flex items-center justify-between sticky top-0 z-10">
              <div>
                <h3 className="font-cormorant text-2xl font-bold text-[#F9F5F0]">Записаться на приём</h3>
                <p className="text-[#E8C99A] text-sm">Ответим в течение 30 минут</p>
              </div>
              <button onClick={() => { setModalOpen(false); setSubmitted(false); }} className="text-[#F9F5F0]/70 hover:text-[#F9F5F0]">
                <Icon name="X" size={22} />
              </button>
            </div>
            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F5EDE4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-[#7A3B20]" />
                </div>
                <h4 className="font-cormorant text-2xl font-bold text-[#2A1F15] mb-2">Заявка принята!</h4>
                <p className="text-[#5C4033]">Мы свяжемся с вами в ближайшее время и подберём удобное время.</p>
                <button onClick={() => { setModalOpen(false); setSubmitted(false); }} className="mt-6 bg-[#7A3B20] text-[#F9F5F0] px-8 py-3 rounded-full font-semibold hover:bg-[#5C2D12] transition-all">
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Ваше имя *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Иван Иванов" className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Телефон *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+7 (___) ___-__-__" className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Услуга</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors bg-white">
                    <option value="">Выберите направление</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Возраст ребёнка</label>
                  <input value={form.age} onChange={e => setForm({...form, age: e.target.value})} placeholder="Например: 5 лет" className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Комментарий</label>
                  <textarea value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} placeholder="Расскажите коротко о запросе..." rows={3} className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="w-full bg-[#7A3B20] text-[#F9F5F0] py-4 rounded-xl font-bold text-base hover:bg-[#5C2D12] transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Отправляем..." : "Отправить заявку"}
                </button>
                <p className="text-center text-xs text-[#A8927E]">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
          </div>
        </div>
      )}

      <button onClick={openModal} className="fixed bottom-6 right-6 z-40 bg-[#7A3B20] text-[#F9F5F0] w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-[#5C2D12] transition-all hover:scale-110 md:hidden">
        <Icon name="CalendarDays" size={22} />
      </button>
    </div>
  );
}