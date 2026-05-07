import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Home, 
  Baby, 
  Sparkles, 
  MessageCircle,
  ChevronRight,
  Phone,
  Clock,
  Instagram
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    "https://drive.google.com/uc?export=view&id=1-acs4BIdPo7y6q10fb2WV3tiuTbcdteo",
    "https://drive.google.com/uc?export=view&id=1l9MA7TWeHw5CpQ2-ruMbQbd7h_FObPMY",
    "https://drive.google.com/uc?export=view&id=1ddnwbyMb1jPpSQuysRFculCtx7Q-U0Vz"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const whatsappLink = "https://wa.me/5585999999999?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20furo%20de%20orelha%20humanizado!";

  return (
    <div className="relative overflow-hidden bg-brand-offwhite text-brand-wine">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full px-6 lg:px-12 py-4 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <a href="#" className="flex items-center relative z-50 hover:opacity-80 transition-opacity">
          <img referrerPolicy="no-referrer" src="https://drive.google.com/uc?export=view&id=13h6AmI1Lz2197eaFEohoqaNLEr_04mWT" alt="Mommy Baby Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <span className="font-logo text-3xl md:text-4xl tracking-wide text-brand-accent -ml-2 md:-ml-3">Mommy Baby</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-brand-dusty">
          <a href="#servico" className="hover:text-brand-accent transition-colors">O Serviço</a>
          <a href="#como-funciona" className="hover:text-brand-accent transition-colors">Como Funciona</a>
          <a href="#especialista" className="hover:text-brand-accent transition-colors">Especialista</a>
          <a href="#depoimentos" className="hover:text-brand-accent transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-brand-accent transition-colors">Contato</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-brand-dusty"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 z-40 p-12"
            >
              <a href="#servico" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-brand-dark hover:text-brand-accent tracking-wide uppercase">O Serviço</a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-brand-dark hover:text-brand-accent tracking-wide uppercase">Como Funciona</a>
              <a href="#especialista" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-brand-dark hover:text-brand-accent tracking-wide uppercase">Especialista</a>
              <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-brand-dark hover:text-brand-accent tracking-wide uppercase">Depoimentos</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-brand-dark hover:text-brand-accent tracking-wide uppercase">Contato</a>
              <a href={whatsappLink} onClick={() => setIsMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="bg-brand-dusty text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase shadow-md mt-4">
                WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {isScrolled && !isMenuOpen && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#c08a93] text-white rounded-full shadow-lg hover:opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:block items-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
        {/* Desktop Slider Background */}
        <div className="hidden md:block absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Bebê com orelha furada"
            />
          </AnimatePresence>
          {/* Overlays to fade the image into the background color where the text is */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite via-brand-offwhite/90 to-brand-offwhite/20 lg:via-brand-offwhite/80 lg:to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-brand-dusty/10 mix-blend-multiply z-10 pointer-events-none"></div>
        </div>

        {/* Soft abstract background blobs */}
        <div className="hidden md:block absolute top-0 left-0 -ml-20 -mt-20 w-[60vw] h-[60vw] bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row w-full h-full flex-grow items-center">
          <div className="w-full lg:w-[55%] space-y-8 text-center md:text-left relative pt-8">
            
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-brand-dusty text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-dusty/10">
                Atendimento Domiciliar em Fortaleza
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-serif text-brand-dark mb-6">
                Furo de orelha <br />
                <span className="inline-flex items-center gap-4 italic font-normal text-brand-dusty">
                  humanizado
                  <Heart className="w-8 h-8 md:w-10 md:h-10 fill-current opacity-40 rotate-[15deg] shrink-0" />
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                Um momento delicado transformado em uma experiência tranquila, acolhedora e segura no conforto do seu lar.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-dusty text-white rounded-full font-semibold soft-shadow hover:bg-brand-accent hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                >
                  Agendar pelo WhatsApp
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <img src="https://drive.google.com/uc?export=view&id=1a6jN9BpJ5EwQrtHQDXyE86ZnNmsYIewI" alt="Baby" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200" />
                    <img src="https://drive.google.com/uc?export=view&id=1WWaClTv-J4SPKJ8pGeSM6XydUos89N4H" alt="Baby" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-brand-pale" />
                    <img src="https://drive.google.com/uc?export=view&id=1ZkBAcTyshz-FnKj1rXIDsS-hcEATKWT9" alt="Baby" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-brand-light" />
                  </div>
                  <div className="ml-4 text-xs font-semibold text-brand-dusty text-left leading-tight">+500 Bebês<br/>Felizes</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mobile Image Slider */}
          <div className="w-full md:hidden mt-10 mb-4 relative aspect-[4/5] rounded-[2rem] overflow-hidden soft-shadow bg-brand-pale">
            <div className="flex w-full h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
              {heroImages.map((src, idx) => (
                <img key={idx} src={src} className="w-full h-full object-cover shrink-0" alt={`Bebê com orelha furada ${idx + 1}`} />
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
              {heroImages.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${currentImage === idx ? 'bg-white' : 'bg-white/50'}`}></div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Infinite Marquee */}
      <div className="w-full bg-brand-light py-3 overflow-hidden flex relative z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap min-w-max text-brand-dusty uppercase tracking-[0.1em] text-xs font-semibold"
        >
          {/* Group 1 */}
          <div className="flex items-center gap-4 px-2">
            <span>Sem trauma</span>
            <span>•</span>
            <span>Com carinho</span>
            <span>•</span>
            <span>Acolhimento de verdade</span>
            <span>•</span>
            <span>Segurança para o seu bebê</span>
            <span>•</span>
            <span>Experiência tranquila</span>
            <span>•</span>
          </div>
          {/* Group 2 (Clone for infinite effect) */}
          <div className="flex items-center gap-4 px-2">
            <span>Sem trauma</span>
            <span>•</span>
            <span>Com carinho</span>
            <span>•</span>
            <span>Acolhimento de verdade</span>
            <span>•</span>
            <span>Segurança para o seu bebê</span>
            <span>•</span>
            <span>Experiência tranquila</span>
            <span>•</span>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* About Service Section */}
      <section id="servico" className="py-24 px-6 relative overflow-hidden bg-transparent">
        {/* Background Images */}
        <img 
          src="https://drive.google.com/uc?export=view&id=1rkS88_Rk5xD0qh2IC4tohWBHuF7mZ13e" 
          alt="" 
          className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 opacity-80 pointer-events-none"
        />
        <img 
          src="https://drive.google.com/uc?export=view&id=1kJLRipm7Ab4GQ1PFUoW0Mmp6NqdLPgAG" 
          alt="" 
          className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 opacity-80 pointer-events-none"
        />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-brand-dark">O que é o furo humanizado?</h2>
            <div className="w-16 h-px bg-brand-dusty/50 mx-auto mb-10"></div>
          </FadeIn>
          
          <div className="space-y-6 text-lg md:text-xl text-brand-muted font-light leading-relaxed max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <p>
                Não é apenas sobre colocar um brinco. É sobre <strong className="font-medium text-brand-dusty">respeitar o tempo e o bem-estar do seu bebê</strong>.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                O procedimento humanizado busca reduzir ao máximo a dor, o choro e a ansiedade da família. Utilizamos técnicas de acupuntura, pomada anestésica e ferramentas silenciosas, garantindo que o momento seja leve, especial e, acima de tudo, seguro.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Differentials */}
      <section id="diferenciais" className="py-24 px-6 relative bg-brand-pale/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "No Seu Conforto", desc: "Atendimento domiciliar em Fortaleza e região, para que o bebê se sinta seguro em seu próprio ambiente." },
              { icon: ShieldCheck, title: "Técnica Segura", desc: "Equipamentos silenciosos, esterilizados e específicos para a pele delicada do bebê." },
              { icon: Heart, title: "Sem Traumas", desc: "Uso de anestésico tópico e respeito ao limite do bebê durante todo o processo." },
              { icon: Baby, title: "Apoio à Família", desc: "Acolhemos a ansiedade dos pais, explicando cada etapa com clareza e empatia." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="glass-card p-8 rounded-[2rem] text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex items-center justify-center text-brand-dusty mb-6 group-hover:bg-brand-dusty group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-accent mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* About the Professional */}
      <section id="especialista" className="py-24 px-6 relative overflow-hidden bg-transparent">
        {/* Background Images */}
        <img 
          src="https://drive.google.com/uc?export=view&id=1U4Q_hRpQsCR2azLp5YVqtRJFPfkF9QWD" 
          alt="" 
          className="absolute top-0 left-0 w-72 md:w-96 lg:w-[32rem] opacity-80 pointer-events-none"
        />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeIn className="w-full md:w-1/2 flex justify-center">
              <div className="relative mt-12 md:mt-0 z-10">
                <div className="w-[320px] md:w-[400px] aspect-[4/5] bg-brand-pale organic-shape overflow-hidden soft-shadow relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dusty to-transparent opacity-20 z-10"></div>
                  <img 
                    src="https://drive.google.com/uc?export=view&id=1mJwUr8tsXUBdTeQqUZ6oXetngwFiqYep" 
                    alt="Milene Leite, Enfermeira" 
                    className="w-full h-full object-cover relative z-0"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-right-8 w-32 h-32 flex items-center justify-center text-center z-20">
                  <Heart strokeWidth={0} className="absolute inset-0 w-full h-full text-brand-dusty fill-current drop-shadow-md z-0" />
                  <span className="script-font text-3xl transform -rotate-12 text-white relative z-10 mt-[-10px] ml-[-5px]">Milene</span>
                </div>
              </div>
            </FadeIn>
            
            <div className="w-full md:w-1/2 space-y-6">
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-brand-dark">Quem vai cuidar do seu bebê</h2>
                <div className="w-16 h-px bg-brand-dusty/50 mb-8"></div>
              </FadeIn>
              
              <div className="space-y-4 text-brand-muted font-light text-lg">
                <FadeIn delay={0.3}>
                  <p>
                    Olá, eu sou <strong>Milene Leite</strong>. Sou enfermeira obstétrica com formação no Brasil e em Portugal, dedicada a cuidar de mães e bebês nos momentos mais sensíveis, com atendimento presencial em Fortaleza e região.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p>
                    Acredito fortemente que os primeiros cuidados e intervenções de um bebê devem ser envoltos de amor, paciência e extremo profissionalismo.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p>
                    Meu objetivo com o furo humanizado é entregar não apenas um serviço estético impecável, mas uma memória tranquila para a sua família.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.6} className="pt-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-dusty font-medium hover:text-brand-wine transition-colors border-b border-brand-dusty pb-1"
                >
                  Falar diretamente comigo
                  <ChevronRight className="w-4 h-4" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Process / How it works */}
      <section id="como-funciona" className="py-24 px-6 relative bg-brand-pale/20 text-center">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-16">Como funciona a nossa experiência?</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[40px] left-1/8 right-1/8 h-px bg-brand-dusty/20 z-0"></div>

            {[
              { step: "01", title: "Contato", desc: "Você nos chama pelo WhatsApp para tirar dúvidas." },
              { step: "02", title: "Agendamento", desc: "Marcamos o melhor dia e horário na sua rotina." },
              { step: "03", title: "O Grande Dia", desc: "Vou até sua casa, no ambiente mais seguro pro bebê." },
              { step: "04", title: "Acompanhamento", desc: "Oriento sobre os cuidados e acompanho a cicatrização." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="relative z-10 glass-card p-6 rounded-[2rem]">
                <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex flex-col items-center justify-center mb-6">
                  <span className="font-serif italic text-brand-accent text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Testimonials Slider */}
      <section id="depoimentos" className="py-24 px-0 bg-transparent overflow-hidden">
         <div className="container mx-auto max-w-6xl px-6 mb-16">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-brand-dark">O que as mamães dizem</h2>
                <div className="w-16 h-px bg-brand-dusty/50 mx-auto mb-6"></div>
                <p className="text-brand-muted font-light">A confiança de quem já viveu essa experiência com a Milene.</p>
              </div>
            </FadeIn>
         </div>

         {/* Infinite Testimonial Slider */}
         <div className="flex relative items-center">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-brand-offwhite to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-brand-offwhite to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
              className="flex gap-6 px-6 min-w-max"
            >
              {[
                { type: "whastapp", content: "Milene, obrigada por todo carinho! A Maria nem chorou, foi tão tranquilo. Vc é maravilhosa!", author: "Carolina M." },
                { type: "instagram", content: "Melhor escolha que fiz! Atendimento impecável e super humanizado. ✨", author: "Bruna S." },
                { type: "whastapp", content: "Amei o profissionalismo. O furo ficou perfeito e a recuperação foi ótima.", author: "Juliana R." },
                { type: "instagram", content: "Recomendo de olhos fechados para todas as mamães. Segurança total!", author: "Patrícia L." },
                { type: "whastapp", content: "Obrigada por tirar todas as minhas dúvidas e passar tanta calma.", author: "Fernanda G." },
                // Double the items for infinite loop
                { type: "whastapp", content: "Milene, obrigada por todo carinho! A Maria nem chorou, foi tão tranquilo. Vc é maravilhosa!", author: "Carolina M." },
                { type: "instagram", content: "Melhor escolha que fiz! Atendimento impecável e super humanizado. ✨", author: "Bruna S." },
                { type: "whastapp", content: "Amei o profissionalismo. O furo ficou perfeito e a recuperação foi ótima.", author: "Juliana R." },
                { type: "instagram", content: "Recomendo de olhos fechados para todas as mamães. Segurança total!", author: "Patrícia L." },
                { type: "whastapp", content: "Obrigada por tirar todas as minhas dúvidas e passar tanta calma.", author: "Fernanda G." },
              ].map((item, idx) => (
                <div key={idx} className="w-72 md:w-80 h-auto bg-white rounded-3xl p-6 soft-shadow border border-brand-light/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {item.type === "whastapp" ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-pink-600" />
                        </div>
                      )}
                      <span className="text-xs font-semibold text-brand-wine/40 uppercase tracking-widest">{item.type}</span>
                    </div>
                    <p className="text-brand-wine italic font-serif text-lg leading-relaxed mb-6">
                      "{item.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-brand-light pt-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center text-brand-dusty font-bold text-xs">
                      {item.author[0]}
                    </div>
                    <span className="text-sm font-medium text-brand-accent">{item.author}</span>
                  </div>
                </div>
              ))}
            </motion.div>
         </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Other Services */}
      <section className="py-24 px-6 bg-brand-light/30">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-brand-dark">Outros Cuidados</h2>
              <div className="w-16 h-px bg-brand-dusty/50 mx-auto mb-6"></div>
              <p className="text-brand-muted font-light max-w-2xl mx-auto">
                Além do furo humanizado, ofereço suporte integral para a saúde e bem-estar nos primeiros dias de vida da sua bebê.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="glass-card rounded-[2.5rem] overflow-hidden soft-shadow group flex flex-col h-full border border-brand-light/50">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dusty/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0"></div>
                  <img src="https://drive.google.com/uc?export=view&id=15b0a4JU2kolqQU0xt898oCm_4I6YGyO1" alt="Laserterapia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10 flex-grow flex flex-col bg-white/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-pale flex items-center justify-center text-brand-dusty shrink-0">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-dark">Laserterapia</h3>
                  </div>
                  <p className="text-brand-muted font-light leading-relaxed">
                    Tratamento moderno, indolor e seguro que auxilia na cicatrização rápida e redução de processos inflamatórios. Ideal para alívio de desconfortos, recuperação pós-furo e apoio ao bem-estar contínuo.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="glass-card rounded-[2.5rem] overflow-hidden soft-shadow group flex flex-col h-full border border-brand-light/50">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dusty/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0"></div>
                  <img src="https://drive.google.com/uc?export=view&id=1BwOrUJviNQw7rz4bZYauUlrPSryVnJ2c" alt="Cuidados de Enfermagem Domiciliar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10 flex-grow flex flex-col bg-white/40">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-brand-pale flex items-center justify-center text-brand-dusty shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-dark">Enfermagem Domiciliar</h3>
                  </div>
                  <p className="text-brand-muted font-light leading-relaxed">
                    Acompanhamento profissional no conforto e segurança do seu lar. Engloba apoio prático à família, avaliação da saúde do recém-nascido, orientações em amamentação e todo suporte necessário.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Final CTA */}
      <section id="contato" className="py-24 px-6 relative overflow-hidden bg-brand-pale text-center">
        {/* Background Images */}
        <img 
          src="https://drive.google.com/uc?export=view&id=1rkS88_Rk5xD0qh2IC4tohWBHuF7mZ13e" 
          alt="" 
          className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 opacity-80 pointer-events-none"
        />
        <img 
          src="https://drive.google.com/uc?export=view&id=1kJLRipm7Ab4GQ1PFUoW0Mmp6NqdLPgAG" 
          alt="" 
          className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 opacity-80 pointer-events-none"
        />
        
        <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-brand-dark mb-6 font-serif leading-tight">
              Pronta para viver esse momento com <span className="italic font-normal text-brand-dusty">tranquilidade</span>?
            </h2>
            <p className="text-lg md:text-xl text-brand-muted font-light mb-10 max-w-2xl mx-auto">
              Garanta uma experiência segura e cheia de afeto para a sua bebê no conforto do seu lar.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-dusty text-white rounded-full font-semibold soft-shadow hover:bg-brand-accent hover:-translate-y-1 transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Agendar agora pelo WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-brand-dusty w-full" />

      {/* Footer */}
      <footer className="bg-transparent pt-16 pb-8 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src="https://drive.google.com/uc?export=view&id=13h6AmI1Lz2197eaFEohoqaNLEr_04mWT" alt="Mommy Baby Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <div className="-ml-2 md:-ml-3">
              <span className="font-logo text-3xl md:text-4xl tracking-wide text-brand-accent block">Mommy Baby</span>
              <span className="text-xs text-brand-muted tracking-wide mt-1 block ml-3 md:ml-4">Atendimento em Fortaleza e região</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/mommybabyamor/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors text-sm uppercase tracking-wider font-semibold">
              Instagram
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors text-sm uppercase tracking-wider font-semibold">
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-brand-dusty/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#A6868B]">
          <p>© {new Date().getFullYear()} Mommy Baby Amor.</p>
          <div className="flex gap-8">
            <span className="hover:text-brand-accent transition-colors">Created by Maree Felix</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
