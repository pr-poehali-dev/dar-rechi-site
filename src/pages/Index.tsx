import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/files/255d861e-b0b7-4dca-b3f2-94cb0f1d5014.jpg";
const SPECIALIST_IMG = "https://cdn.poehali.dev/projects/a253dbde-22a7-419b-bfe3-94007fdd9f3b/files/54151f7a-d2e4-4028-a0ca-787e68e137dc.jpg";

const services = [
  { icon: "MessageCircle", title: "Логопедическая диагностика", desc: "Полное обследование речи ребёнка или взрослого, составление индивидуального плана занятий", price: "от 1 500 ₽" },
  { icon: "Baby", title: "Коррекция звукопроизношения", desc: "Постановка и автоматизация звуков, устранение дефектов речи у детей от 3 лет", price: "от 1 200 ₽" },
  { icon: "Brain", title: "Нейрологопедия", desc: "Работа с детьми с особенностями развития: ОНР, ЗПР, дизартрия, алалия, аутизм", price: "от 2 000 ₽" },
  { icon: "BookOpen", title: "Подготовка к школе", desc: "Развитие речи, фонематического слуха и навыков чтения у детей 5–7 лет", price: "от 1 200 ₽" },
  { icon: "Users", title: "Занятия для взрослых", desc: "Коррекция заикания, дикции, голоса. Подготовка к публичным выступлениям", price: "от 1 800 ₽" },
  { icon: "Video", title: "Онлайн-занятия", desc: "Все услуги студии в формате видеосвязи — удобно для занятых родителей", price: "от 1 000 ₽" },
];

const specialists = [
  { name: "Анна Сергеевна Кузнецова", role: "Логопед-дефектолог, нейрологопед", exp: "12 лет опыта", img: SPECIALIST_IMG },
  { name: "Марина Ильинична Петрова", role: "Логопед, специалист по дислексии", exp: "8 лет опыта", img: SPECIALIST_IMG },
  { name: "Екатерина Владимировна Смирнова", role: "Логопед, педагог-психолог", exp: "10 лет опыта", img: SPECIALIST_IMG },
];

const reviews = [
  { name: "Наталья К.", text: "Привели сына в 4 года — почти не говорил. За полгода занятий в «Даре речи» прогресс просто колоссальный! Анна Сергеевна — настоящий волшебник.", stars: 5 },
  { name: "Дмитрий Р.", text: "Сам проходил курс по работе с голосом и дикцией. Теперь выступаю перед аудиторией без страха. Отличные специалисты и уютная атмосфера.", stars: 5 },
  { name: "Светлана М.", text: "Дочке 6 лет, готовились к школе. Логопед помогла не только с речью, но и с уверенностью в себе. Рекомендую всем!", stars: 5 },
  { name: "Ирина Г.", text: "Занимаемся второй год. Марина Ильинична находит подход к любому ребёнку, занятия проходят в игровой форме — дети идут с удовольствием.", stars: 5 },
];

const faqs = [
  { q: "С какого возраста стоит обращаться к логопеду?", a: "Первичная консультация возможна уже с 1,5–2 лет, если есть вопросы по темпам речевого развития. Плановая диагностика — с 3 лет, перед школой обязательно в 5–6 лет." },
  { q: "Как долго длится курс занятий?", a: "Всё индивидуально. Обычно коррекция звукопроизношения занимает 3–6 месяцев при занятиях 2 раза в неделю. При более сложных нарушениях — от 6 месяцев до 1,5 лет." },
  { q: "Можно ли заниматься онлайн?", a: "Да, большинство наших занятий доступны в онлайн-формате. Исключение — диагностика грудных детей и работа с жеванием/глотанием." },
  { q: "Нужно ли направление от врача?", a: "Нет, направление не требуется. Вы можете записаться напрямую. При наличии медицинских документов (заключения невролога, ЛОРа) просьба взять их с собой." },
  { q: "Занимаетесь ли вы со взрослыми?", a: "Да! Мы работаем со взрослыми людьми: коррекция заикания, дикция, постановка голоса, восстановление речи после инсульта." },
  { q: "Сколько стоит первое занятие?", a: "Первичная диагностика стоит от 1 500 ₽ и длится 60 минут. По итогам вы получите письменное заключение и рекомендации." },
];

const blogPosts = [
  { tag: "Развитие речи", date: "15 февраля 2026", title: "Почему ребёнок молчит: 5 причин задержки речевого развития", excerpt: "Разбираем, когда молчание — норма, а когда стоит обратиться к специалисту. Ранняя диагностика решает всё.", readTime: "5 мин" },
  { tag: "Советы родителям", date: "3 марта 2026", title: "Игры дома: развиваем фонематический слух без скуки", excerpt: "10 простых игр, которые можно делать каждый день. Никаких карточек и зубрёжки — только удовольствие.", readTime: "7 мин" },
  { tag: "Школьное развитие", date: "1 марта 2026", title: "Дислексия: диагноз или особенность? Как помочь ребёнку читать", excerpt: "Мифы о дислексии, реальные методы коррекции и почему многие гениальные люди были дислексиками.", readTime: "8 мин" },
];

type FormData = { name: string; phone: string; service: string; age: string; comment: string };

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", phone: "", service: "", age: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-golos bg-[#F9F5F0] text-[#2A1F15] min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5F0]/95 backdrop-blur-sm border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="font-cormorant text-2xl font-bold text-[#7A3B20] tracking-wide">
            Дар речи
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C4033]">
            {[["hero","Главная"],["services","Услуги"],["about","О студии"],["reviews","Отзывы"],["faq","Вопросы и ответы"],["blog","Блог"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#7A3B20] transition-colors">{label}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+78432000000" className="text-sm font-semibold text-[#7A3B20] hover:text-[#5C2D12]">
              +7 (843) 200-00-00
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105"
            >
              Записаться
            </button>
          </div>
          <button className="md:hidden text-[#7A3B20]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#F9F5F0] border-t border-[#E8DDD0] px-4 py-4 flex flex-col gap-4">
            {[["hero","Главная"],["services","Услуги"],["about","О студии"],["reviews","Отзывы"],["faq","Вопросы и ответы"],["blog","Блог"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-[#5C4033] font-medium hover:text-[#7A3B20]">{label}</button>
            ))}
            <button onClick={() => { setModalOpen(true); setMenuOpen(false); }} className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-3 rounded-full font-semibold">
              Записаться онлайн
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Студия Дар речи" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1F15]/80 via-[#2A1F15]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#F9F5F0]/20 backdrop-blur-sm border border-[#F9F5F0]/30 text-[#F9F5F0] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={14} />
              Казань, ул. Баумана, 82
            </div>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F9F5F0] leading-tight mb-6">
              Логопедическая<br />
              <span className="italic text-[#E8C99A]">студия</span> Дар речи
            </h1>
            <p className="text-[#E8DDD0] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Помогаем детям и взрослым обрести красивую, чёткую речь. Диагностика, коррекция и развитие в уютной атмосфере заботы.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#7A3B20] text-[#F9F5F0] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#5C2D12] transition-all hover:scale-105 shadow-lg"
              >
                Записаться на приём
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="bg-[#F9F5F0]/15 backdrop-blur-sm border border-[#F9F5F0]/50 text-[#F9F5F0] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#F9F5F0]/25 transition-all"
              >
                Наши услуги
              </button>
            </div>
            <div className="flex flex-wrap gap-6 mt-12">
              {[["500+","довольных семей"],["15 лет","работаем"],["3","специалиста"]].map(([num, label]) => (
                <div key={label} className="text-center">
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
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Что мы предлагаем</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Наши услуги</h2>
            <p className="mt-4 text-[#5C4033] text-lg max-w-xl mx-auto">Индивидуальный подход к каждому — от первой диагностики до уверенной речи</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-white border border-[#E8DDD0] rounded-2xl p-6 hover:border-[#7A3B20] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#F5EDE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7A3B20] transition-colors">
                  <Icon name={s.icon} size={22} className="text-[#7A3B20] group-hover:text-[#F9F5F0] transition-colors" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#2A1F15] mb-2">{s.title}</h3>
                <p className="text-[#7A6055] text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#7A3B20] font-semibold text-sm">{s.price}</span>
                  <button onClick={() => setModalOpen(true)} className="text-xs text-[#7A3B20] font-semibold hover:underline">
                    Записаться →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-[#F0E8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">О нас</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15] mb-6">
                Студия, где<br /><span className="italic text-[#7A3B20]">речь расцветает</span>
              </h2>
              <p className="text-[#5C4033] text-lg leading-relaxed mb-6">
                «Дар речи» — это команда сертифицированных логопедов с многолетним опытом. Мы создали уютное пространство, где каждый ребёнок и взрослый чувствует себя комфортно и двигается к результату в своём темпе.
              </p>
              <p className="text-[#5C4033] leading-relaxed mb-8">
                Наш подход основан на доказательных методиках, игровых технологиях и искренней заботе. Мы не ставим диагнозы — мы ищем ресурсы и возможности вместе с каждой семьёй.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[["Индивидуальный подход","К каждому ребёнку"],["Игровые методики","Без стресса и давления"],["Обратная связь","Родители всегда в курсе"],["Постоянное обучение","Специалисты растут"]].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7A3B20] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#2A1F15] text-sm">{t}</div>
                      <div className="text-[#7A6055] text-xs">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl font-bold text-[#2A1F15] mb-6">Наши специалисты</h3>
              <div className="flex flex-col gap-4">
                {specialists.map((sp) => (
                  <div key={sp.name} className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-[#E8DDD0]">
                    <img src={sp.img} alt={sp.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#2A1F15] text-sm">{sp.name}</div>
                      <div className="text-[#7A6055] text-xs mb-1">{sp.role}</div>
                      <div className="inline-flex items-center gap-1 bg-[#F5EDE4] text-[#7A3B20] text-xs px-2 py-0.5 rounded-full font-medium">
                        <Icon name="Award" size={10} />
                        {sp.exp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#7A3B20]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#F9F5F0] mb-4">
            Бесплатная консультация по телефону
          </h2>
          <p className="text-[#E8C99A] text-lg mb-8">Позвоните нам — ответим на все вопросы и поможем выбрать специалиста</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+78432000000" className="bg-[#F9F5F0] text-[#7A3B20] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8DDD0] transition-all hover:scale-105">
              +7 (843) 200-00-00
            </a>
            <button onClick={() => setModalOpen(true)} className="bg-[#5C2D12] text-[#F9F5F0] px-8 py-4 rounded-full font-semibold hover:bg-[#3D1D0A] transition-all hover:scale-105">
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
                <div className="flex gap-1 mb-3">
                  {[...Array(r.stars)].map((_, i) => (
                    <span key={i} className="text-[#E8B84B] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#5C4033] text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#F5EDE4] rounded-full flex items-center justify-center text-[#7A3B20] font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <span className="font-semibold text-[#2A1F15] text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://yandex.ru/maps/org/dar_rechi/212005083058/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#7A3B20] text-[#7A3B20] px-6 py-3 rounded-full font-semibold hover:bg-[#7A3B20] hover:text-[#F9F5F0] transition-all"
            >
              <Icon name="ExternalLink" size={16} />
              Все отзывы на Яндекс Картах
            </a>
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
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#2A1F15] pr-4">{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#7A3B20] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#5C4033] leading-relaxed border-t border-[#F0E8DE] pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 bg-[#F9F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Полезные материалы</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Блог студии</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <article key={i} className="bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                <div className="h-48 bg-[#F5EDE4] flex items-center justify-center">
                  <Icon name="BookOpen" size={48} className="text-[#C9A07A]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#F5EDE4] text-[#7A3B20] text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                    <span className="text-[#A8927E] text-xs">{p.readTime}</span>
                  </div>
                  <h3 className="font-cormorant text-xl font-bold text-[#2A1F15] mb-2 group-hover:text-[#7A3B20] transition-colors">{p.title}</h3>
                  <p className="text-[#7A6055] text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="text-xs text-[#A8927E]">{p.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-[#F0E8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#7A3B20] font-semibold text-sm uppercase tracking-widest mb-3">Мы рядом</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2A1F15]">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              {[
                { icon: "MapPin", label: "Адрес", value: "Казань, ул. Баумана, 82, офис 14" },
                { icon: "Phone", label: "Телефон", value: "+7 (843) 200-00-00" },
                { icon: "Mail", label: "E-mail", value: "info@dar-rechi.ru" },
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
              <div className="flex items-center gap-3 mt-2">
                {[
                  { icon: "📱", label: "WhatsApp" },
                  { icon: "✈️", label: "Telegram" },
                  { icon: "📸", label: "ВКонтакте" },
                ].map((s) => (
                  <button key={s.label} className="flex items-center gap-2 bg-white border border-[#E8DDD0] text-[#5C4033] px-4 py-2 rounded-full text-sm font-medium hover:border-[#7A3B20] transition-all">
                    <span>{s.icon}</span> {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DDD0] h-80">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A&ll=49.224767%2C55.784157&z=16&mode=search&text=%D0%94%D0%B0%D1%80+%D1%80%D0%B5%D1%87%D0%B8+%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A1F15] text-[#E8DDD0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-2xl font-bold text-[#E8C99A]">Дар речи</div>
          <p className="text-sm text-[#A8927E] text-center">© 2026 Логопедическая студия «Дар речи». Казань</p>
          <button onClick={() => setModalOpen(true)} className="bg-[#7A3B20] text-[#F9F5F0] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C2D12] transition-all">
            Записаться
          </button>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setModalOpen(false); setSubmitted(false); }} />
          <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="bg-[#7A3B20] px-6 py-5 flex items-center justify-between">
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
                    <option value="">Выберите услугу</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Возраст ребёнка / «взрослый»</label>
                  <input value={form.age} onChange={e => setForm({...form, age: e.target.value})} placeholder="Например: 5 лет или взрослый" className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#7A6055] uppercase tracking-wide mb-1 block">Комментарий</label>
                  <textarea value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} placeholder="Расскажите коротко о запросе..." rows={3} className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#2A1F15] focus:outline-none focus:border-[#7A3B20] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#7A3B20] text-[#F9F5F0] py-4 rounded-xl font-bold text-base hover:bg-[#5C2D12] transition-all hover:scale-[1.02]">
                  Отправить заявку
                </button>
                <p className="text-center text-xs text-[#A8927E]">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FLOATING CTA */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#7A3B20] text-[#F9F5F0] w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-[#5C2D12] transition-all hover:scale-110 md:hidden"
      >
        <Icon name="CalendarDays" size={22} />
      </button>
    </div>
  );
}
