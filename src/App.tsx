import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Shield, Sparkles, Camera, Music, Wine, Clock, 
  MapPin, Navigation, Phone, ChevronDown, Check, Calendar, 
  Heart, Gift, ArrowRight
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
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E2FF00', '#0047FF', '#ffffff']
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerConfetti();
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormState({ name: '', guests: '1', wishes: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white font-sans overflow-x-hidden">
      {/* Fixed CTA Button */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#E2FF00] text-[#0A0A14] font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(226,255,0,0.5)] transition-all text-lg tracking-wide hover:shadow-[0_0_45px_rgba(226,255,0,0.8)]"
      >
        Присоединиться
        <ArrowRight className="w-5 h-5 fill-current" />
      </motion.button>

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
            <Calendar className="w-4 h-4 text-[#E2FF00] fill-current" />
            День рождения
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
            className="space-y-6 text-lg md:text-xl font-medium"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5 text-[#E2FF00]" />
                <span>10 мая</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Clock className="w-5 h-5 text-[#0047FF]" />
                <span>11:00</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <MapPin className="w-5 h-5 text-[#E2FF00]" />
                <span>Ивента Лофт, СПб</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 pb-12 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-[#E2FF00] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. ЧТО БУДЕТ (Cards) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
            Что <span className="text-[#E2FF00]">будет</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Человек-паук', desc: '' },
            { icon: Zap, title: 'Трансформеры', desc: '' },
            { icon: Sparkles, title: 'Игры и конкурсы', desc: '' },
            { icon: Camera, title: 'Фотозона + фотограф', desc: '' },
            { icon: Music, title: 'Шоу', desc: '' },
            { icon: Music, title: 'Дискотека', desc: '' },
            { icon: Wine, title: 'Шампанское для родителей', desc: '' },
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
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ПРОГРАММА (Compact Timeline) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
            Программа <span className="text-[#0047FF]">дня</span>
          </h2>
        </div>

        <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-0 space-y-10">
          {[
            { time: '11:00', title: 'Сбор гостей', desc: '' },
            { time: '11:20', title: 'Фуршет', desc: '' },
            { time: '11:45', title: 'Анимация', desc: '' },
            { time: '12:15', title: 'Трансформеры', desc: '' },
            { time: '13:00', title: 'Торт', desc: '' },
            { time: '13:30', title: 'Шоу', desc: '' },
            { time: '14:00', title: 'Дискотека', desc: '' },
            { time: '15:00', title: 'Финал', desc: '' },
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

              <div className="flex items-start gap-6">
                <div className="w-20 flex-shrink-0">
                  <div className="text-2xl font-black text-[#E2FF00]">{item.time}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
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
                  <div>
                    <div className="font-semibold">Ивента Лофт</div>
                    <div className="text-sm text-gray-300">Московский пр. 183–185</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. КАК ДОБРАТЬСЯ (Accordion) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
            Как <span className="text-[#0047FF]">добраться</span>
          </h2>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <AccordionItem title="Парковка">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E2FF00] rounded-full"></div>
                <span>Варшавская</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E2FF00] rounded-full"></div>
                <span>Московский пр.</span>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Проход">
            <div className="space-y-4">
              <div>
                <div className="font-medium mb-2">через ВКУСТЕР → прямо → лестница у аптеки</div>
              </div>
              <div>
                <div className="font-medium mb-2">через арку ЖК → налево</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Контакты">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#E2FF00]" />
              <span className="text-lg font-medium">8 (812) 701-00-80</span>
            </div>
          </AccordionItem>
        </div>
      </section>

      {/* 6. ВАЖНО */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
              Важная <span className="text-[#E2FF00]">информация</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0047FF]/20 rounded-xl flex items-center justify-center text-[#0047FF]">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Подарки</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Подарки — в конвертах 💌<br />
                Маркус копит на поездку к морю
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E2FF00]/20 rounded-xl flex items-center justify-center text-[#E2FF00]">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Главное</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Главное — ваше присутствие ❤️<br />
                С собой: сменка + хорошее настроение
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-wider"
          >
            Ждем вас 🎉
          </motion.h2>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E2FF00] text-[#0A0A14] font-bold py-5 px-12 rounded-full shadow-[0_0_40px_rgba(226,255,0,0.5)] transition-all text-xl tracking-wide hover:shadow-[0_0_60px_rgba(226,255,0,0.8)]"
          >
            Присоединиться
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>День рождения Маркуса • 10 мая • Ивента Лофт, СПб</p>
      </footer>

      {/* RSVP Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A0A14] border border-white/20 rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0047FF] rounded-full blur-[100px] opacity-30" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E2FF00] rounded-full blur-[100px] opacity-20" />

              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-2 text-center">Подтвердите участие</h3>
                  <p className="text-gray-400 text-center mb-8">Мы будем рады видеть вас на празднике!</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors"
                        placeholder="Имя и фамилия"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Количество гостей</label>
                      <select
                        value={formState.guests}
                        onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors"
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'гость' : 'гостя'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Пожелания (необязательно)</label>
                      <textarea
                        value={formState.wishes}
                        onChange={(e) => setFormState({ ...formState, wishes: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E2FF00] transition-colors min-h-[100px]"
                        placeholder="Ваши пожелания или вопросы..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#E2FF00] text-[#0A0A14] font-bold py-4 rounded-xl hover:bg-[#d4f000] transition-colors"
                    >
                      Подтвердить участие
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-[#E2FF00]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-[#E2FF00]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Спасибо!</h3>
                  <p className="text-gray-400">Мы ждем вас на празднике 10 мая!</p>
                </div>
              )}

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}