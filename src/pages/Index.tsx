import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (904) 764-67-45";
const PHONE_HREF = "tel:+79047646745";
const ADDRESS = "Казань, ул. Хайдара Бигичева, 4";

const LOGO_URL = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/19947fc7-5f68-441b-ab10-4e8dd26e909c.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/bucket/5ac79c32-937f-4d06-9e23-2c00e74e49f8.jpg";
const SUBMIT_URL = "https://functions.poehali.dev/7066643f-210d-493e-b06f-d7cb99742537";

const WA_URL = "https://wa.me/79047646745?text=Сайта%0AЗдравствуйте!+Меня+заинтересовало+ваше+предложение";
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

  const navLinks: [string, string][] = [
    ["hero","Главная"],["services","Услуги"],["why","Почему мы"],["about","О центре"],["reviews","Отзывы"],["faq","Вопросы"],["contacts","Контакты"]
  ];

  return (
    <div className="font-golos bg-white text-[#1a1a1a] min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5d119] shadow-md">
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
          <img src={ABOUT_IMG} alt="Нейрологопедический центр Дар речи" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={14} />
              {ADDRESS}
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
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Наши услуги</h2>
            <p className="mt-4 text-[#555] text-lg max-w-2xl mx-auto">Системная, комплексная помощь ребёнку — не просто устранение симптома, а работа с причиной</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-white border-2 border-[#f5d119]/40 rounded-2xl p-5 hover:border-[#f5d119] hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6eb42d] transition-colors flex-shrink-0">
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed flex-1">{s.desc}</p>
                {s.duration && (
                  <div className="mt-3 text-xs font-semibold text-[#1a1a1a] bg-[#f5d119]/30 px-3 py-1 rounded-full inline-block self-start">
                    {s.duration}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 bg-[#f5f5f5]">
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#6eb42d] font-semibold text-sm uppercase tracking-widest mb-3">О центре</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
                Нейрологопедический<br /><span className="italic text-[#f5d119]">центр «Дар речи»</span>
              </h2>
              <div className="space-y-4 text-[#444] leading-relaxed">
                <p>Центр основан в 2016 году с целью оказания квалифицированной помощи детям с трудностями речевого развития, поведения и обучения.</p>
                <p>Мы работаем с детьми, которым требуется профессиональная поддержка в формировании речи, высших психических функций, навыков саморегуляции и успешной подготовки к школе.</p>
                <p>В центре ведут приём опытные специалисты: <strong className="text-[#1a1a1a]">логопеды-дефектологи</strong> и <strong className="text-[#1a1a1a]">нейропсихологи</strong>. Стаж работы специалистов — более 10 лет. Команда регулярно проходит повышение квалификации, обучается современным методикам и внедряет эффективные нейропсихологические подходы.</p>
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
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">Бесплатная консультация</h2>
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
              {[
                { icon: "MapPin", label: "Адрес", value: ADDRESS },
                { icon: "Phone", label: "Телефон", value: PHONE },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб: 9:00–17:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#f5d119] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999] font-semibold uppercase tracking-wide">{c.label}</div>
                    <div className="text-[#1a1a1a] font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
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
          <p className="text-sm text-gray-400 text-center">© 2026 Нейрологопедический центр «Дар речи». {ADDRESS}</p>
          <SocialButtons />
        </div>
      </footer>
    </div>
  );
}
