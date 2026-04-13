import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Shield, Sparkles, Camera, Music, Wine, Smile, Clock, 
  MapPin, Navigation, Phone, ChevronDown, Check, Calendar, 
  Heart, Gift, ArrowRight, Star, Sparkle
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Accordion Item Component
const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left font-semibold text-lg hover:text-[#E2FF00] transition-colors"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[#E2FF00]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-5 text-gray-400 space-y-2 leading-relaxed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', guests: '1', wishes: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger rich confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0047FF', '#E2FF00', '#ffffff', '#ff007f']
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerConfetti();
  };

  const handleAddToCalendar = () => {
    const text = encodeURIComponent('День Рождения Маркуса (5 лет) 🎉');
    const dates = encodeURIComponent('20260510T110000/20260510T150000');
    const details = encodeURIComponent('Супергеройский праздник в стиле трансформеров! Ивента Лофт, СПб, Московский пр. 183–185.');
    const location = encodeURIComponent('Ивента Лофт, Московский пр. 183–185, Санкт-Петербург');
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`, '_blank');
  };

  return (
    <div className="bg-[#0A0A14] text-white overflow-x-hidden antialiased">
      {/* FIXED CTA AT BOTTOM */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#E2FF00] text-[#0A0A14] font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(226,255,0,0.5)] transition-all text-lg tracking-wide hover:shadow-[0_0_45px_rgba(226,255,0,0.8)]"
        >
          Присоединиться к празднику
          <Sparkle className="w-5 h-5 fill-current" />
        </motion.button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Layer with Overlay for extreme contrast */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Супергеройская фотозона" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A14]/40 via-[#0A0A14]/60 to-[#0A0A14]" />
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#0047FF] rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-[#E2FF00] rounded-full blur-[150px] opacity-30 animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center flex-grow text-center px-6 pt-24">
          {/* Subtle top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 text-sm tracking-widest uppercase font-semibold text-[#E2FF00]"
          >
            <Star className="w-4 h-4 text-[#E2FF00] fill-current" />
            Эксклюзивное приглашение
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-4 uppercase text-glow-neon"
          >
            Маркусу <span className="text-[#E2FF00]">5</span> лет
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-white/90 mb-10 tracking-wide"
          >
            Приглашаем разделить этот день с нами
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-xl mx-auto"
          >
            <div className="flex-1 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0047FF]/20 flex items-center justify-center flex-shrink-0 text-[#0047FF]">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Дата и время</p>
                <p className="text-lg font-bold">10 мая / 11:00</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex-1 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#E2FF00]/20 flex items-center justify-center flex-shrink-0 text-[#E2FF00]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Место проведения</p>
                <p className="text-lg font-bold">Ивента Лофт, СПб</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator down */}
        <div className="relative z-10 flex justify-center pb-8 animate-bounce">
          <ArrowDownIndicator />
        </div>
      </section>

      {/* 2. ЧТО БУДЕТ (Features & Visuals) */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0A0A14] via-[#0E0E1A] to-[#0A0A14]">
        {/* Glow detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047FF] opacity-10 blur-[200px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
              Что вас <span className="text-[#E2FF00]">ждет</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              Мощный супергеройский вайб, любимые герои и много драйва!
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Человек-паук', desc: 'Супергеройский экшен, паутина и мастер-класс по спасению мира' },
              { icon: Zap, title: 'Трансформеры', desc: 'Эффектное появление гигантских автоботов со спецэффектами' },
              { icon: Sparkles, title: 'Игры и конкурсы', desc: 'Интерактивные челленджи, полосы препятствий и море призов' },
              { icon: Camera, title: 'Фотозона + фотограф', desc: 'Стильные кадры на память и мгновенные эмоции в моменте' },
              { icon: Star, title: 'Крутое Шоу', desc: 'Яркая зрелищная программа, лазеры, конфетти и фокусы' },
              { icon: Music, title: 'Дискотека', desc: 'Лучшие треки, неон и танцы до упаду для всех возрастов' },
              { icon: Wine, title: 'Welcome-зона', desc: 'Шампанское для родителей, чтобы праздник удался у всех!' },
              { icon: Smile, title: 'Торт', desc: 'Эксклюзивный праздничный торт с любимыми героями' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(226,255,0,0.4)' }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all relative group overflow-hidden"
              >
                {/* Micro hover glow detail */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0047FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#E2FF00]/10 flex items-center justify-center text-[#E2FF00] mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner / Visual Spacer with Generated Show Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/images/show.jpg" 
          alt="Лазерное шоу на дне рождения" 
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A14] via-[#0A0A14]/60 to-[#0A0A14]" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className="text-3xl md:text-5xl font-black max-w-2xl text-white tracking-wider leading-tight">
            Окунитесь в атмосферу <span className="text-[#E2FF00]">энергии и веселья</span>
          </p>
        </div>
      </section>

      {/* 3. ПРОГРАММА (Compact Timeline) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
            Программа <span className="text-[#0047FF]">дня</span>
          </h2>
          <p className="text-gray-400 text-lg">Каждая минута продумана до мелочей</p>
        </div>

        <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-0 space-y-10">
          {[
            { time: '11:00', title: 'Сбор гостей', desc: 'Встречаемся, знакомимся, делаем первые стильные кадры на фотозоне.' },
            { time: '11:20', title: 'Фуршет', desc: 'Легкие закуски, напитки и приятное начало перед основным экшеном.' },
            { time: '11:45', title: 'Анимация', desc: 'Интерактивная игра и челленджи с Человеком-пауком.' },
            { time: '12:15', title: 'Трансформеры', desc: 'Грандиозное появление автоботов с эффектами и лазерами.' },
            { time: '13:00', title: 'Торт', desc: 'Загадываем желание и задуваем свечи на супергеройском торте.' },
            { time: '13:30', title: 'Шоу', desc: 'Захватывающее бумажное шоу и фокусы, в которых участвуют все!' },
            { time: '14:00', title: 'Дискотека', desc: 'Неон, классные танцевальные хиты и море драйва.' },
            { time: '15:00', title: 'Финал', desc: 'Объятия, фото на память и завершение основной программы.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Node Glow */}
              <div className="absolute -left-[42px] top-1.5 w-5 h-5 rounded-full bg-[#E2FF00] border-4 border-[#0A0A14] flex items-center justify-center shadow-[0_0_10px_rgba(226,255,0,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-2xl font-black text-[#E2FF00] tracking-wider w-24">
                  {item.time}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ЛОКАЦИЯ */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2FF00] opacity-[0.03] blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Info Side */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
              Локация и <span className="text-[#E2FF00]">время</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0047FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0047FF]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Ивента Лофт</h3>
                  <p className="text-gray-400 mt-1">Санкт-Петербург, Московский пр. 183–185</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E2FF00]/20 rounded-xl flex items-center justify-center flex-shrink-0 text-[#E2FF00]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">10 мая</h3>
                  <p className="text-gray-400 mt-1">11:00 – 15:00</p>
                </div>
              </div>
            </div>

            {/* Added a handy add-to-calendar action button */}
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-xl font-semibold transition-all"
            >
              <Calendar className="w-5 h-5" />
              Добавить в календарь
            </button>
          </div>

          {/* Picture of Hall / Map side */}
          <div className="flex-1 w-full relative">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative h-[400px]">
              {/* Show photo of the hall */}
              <img 
                src="/images/loft.jpg" 
                alt="Ивента Лофт - Фото Зала" 
                className="w-full h-full object-cover"
              />
              {/* Overlay with subtle map marker or styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-3 backdrop-blur-md bg-black/50 border border-white/20 rounded-2xl p-4 w-full">
                  <Navigation className="w-6 h-6 text-[#E2FF00]" />
                  <p className="text-sm font-semibold">Наш просторный стильный лофт готов к встрече гостей!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. КАК ДОБРАТЬСЯ (Accordion) */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-wider text-center">
          Как <span className="text-[#0047FF]">добраться</span>
        </h2>

        <div className="space-y-2">
          <AccordionItem title="🚗 Где припарковаться">
            <p>Удобная парковка доступна по адресам:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ул. Варшавская (вдоль жилого комплекса)</li>
              <li>Московский проспект (бесплатные и городские зоны)</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="🚶‍♂️ Как пройти в лофт">
            <p>Есть два удобных варианта прохода:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Через магазин «ВКУСТЕР» → прямо → лестница у аптеки.</li>
              <li>Через главную арку ЖК → сразу налево до входа в Ивента Лофт.</li>
            </ol>
          </AccordionItem>

          <AccordionItem title="📞 Контакты для связи">
            <p>Если заблудитесь или возникнут вопросы, мы всегда на связи:</p>
            <a 
              href="tel:+78127010080" 
              className="inline-flex items-center gap-2 text-[#E2FF00] font-bold text-xl mt-3 hover:underline"
            >
              <Phone className="w-5 h-5" />
              8 (812) 701-00-80
            </a>
          </AccordionItem>
        </div>
      </section>

      {/* 6. ВАЖНО (Details, Rules & Wishes) */}
      <section className="py-24 px-6 bg-gradient-to-t from-[#0047FF]/5 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-black uppercase tracking-wider">
            Важные <span className="text-[#E2FF00]">детали</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E2FF00]/10 rounded-full flex items-center justify-center text-[#E2FF00] mb-6">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Подарки</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Подарки — в конвертах 💌. Маркус копит на большую поездку к морю. Будем благодарны за вклад в его мечту!
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0047FF]/10 rounded-full flex items-center justify-center text-[#0047FF] mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Присутствие</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Главное — ваше присутствие ❤️. Мы хотим разделить этот праздник с самыми близкими и любимыми.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E2FF00]/10 rounded-full flex items-center justify-center text-[#E2FF00] mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">С собой</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Возьмите сменную обувь (для детей и взрослых) и самое лучшее настроение для крутых фото!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0047FF] opacity-10 blur-[150px]" />
        
        <div className="max-w-2xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-glow-neon">
            Ждем <span className="text-[#E2FF00]">вас!</span> 🎉
          </h2>

          <p className="text-xl text-gray-400">
            Давайте устроим для Маркуса самый незабываемый праздник!
          </p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#E2FF00] text-[#0A0A14] font-extrabold text-xl py-5 px-12 rounded-full shadow-[0_0_40px_rgba(226,255,0,0.6)] hover:shadow-[0_0_60px_rgba(226,255,0,0.9)] transition-all"
          >
            Присоединиться к празднику
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Маркусу 5 лет. Все права защищены. До встречи на празднике!</p>
      </footer>

      {/* RSVP MODAL FORM */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0D0D18] border border-white/10 rounded-3xl p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              {!isSubmitted ? (
                <div>
                  <h3 className="text-3xl font-black uppercase mb-2 tracking-wider">
                    Подтвердите <span className="text-[#E2FF00]">визит</span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Пожалуйста, сообщите нам о своем присутствии, чтобы мы подготовили все необходимое.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя и фамилия</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Например, Анна Иванова"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Количество гостей (с вами)</label>
                      <select 
                        value={formState.guests}
                        onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors"
                      >
                        <option value="1">1 человек</option>
                        <option value="2">2 человека</option>
                        <option value="3">3 человека</option>
                        <option value="4">4 человека</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Пожелания или комментарии (необязательно)</label>
                      <textarea 
                        rows={3}
                        value={formState.wishes}
                        onChange={(e) => setFormState({ ...formState, wishes: e.target.value })}
                        placeholder="Например, особенности питания или пожелания Маркусу"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#E2FF00] text-[#0A0A14] font-bold py-4 rounded-xl shadow-lg mt-6 hover:bg-[#c9e600] transition-colors text-lg"
                    >
                      Отправить подтверждение
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-20 h-20 bg-[#E2FF00]/10 border border-[#E2FF00] rounded-full flex items-center justify-center mx-auto text-[#E2FF00] mb-6 animate-bounce">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#E2FF00]">
                    Спасибо! Вы в списке 🎉
                  </h3>
                  <p className="text-gray-400">
                    Мы очень ждем вас на дне рождения Маркуса! Готовьте свои лучшие улыбки.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl mt-6 transition-colors"
                  >
                    Закрыть окно
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple floating arrow indicator
function ArrowDownIndicator() {
  return (
    <div className="w-10 h-16 rounded-full border-2 border-white/20 flex justify-center pt-2">
      <div className="w-2 h-2 rounded-full bg-[#E2FF00] animate-bounce" />
    </div>
  );
}
