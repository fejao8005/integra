import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';

const WHATSAPP_URL = 'https://wa.me/5511943400222';

const HERO_IMAGES = [
  '/projetos/projeto-01.jpeg',
  '/projetos/projeto-02.jpeg',
  '/projetos/projeto-03.jpeg',
  '/projetos/projeto-04.jpeg',
  '/projetos/projeto-05.jpeg',
];

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const titleLine = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] overflow-hidden bg-[#d5d1c7]">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentIndex]}
            alt={`Projeto ${currentIndex + 1}`}
            className="w-full h-full object-cover kenburns"
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-screen lg:min-h-[800px]">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Text Content */}
          <div className="bg-[#ebe9e4] lg:w-5/12 xl:w-4/12 flex flex-col justify-center pt-32 pb-16 lg:pt-40 lg:pb-0 px-6 md:px-10 lg:px-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
              className="font-futura text-integra-gray max-w-sm text-[20px] leading-relaxed mb-6 md:mb-8 tracking-[0.02em]"
            >
              Projetos que traduzem identidade, estilo de vida e forma de viver.
            </motion.p>
            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-futura font-light leading-[1.05] tracking-[0.03em] text-integra-black uppercase"
            >
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block text-integra-gold-dark">Integra</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block text-integra-black">Atelier de</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block text-integra-black">Interiores</motion.span>
              </span>
            </motion.h1>
          </div>

          {/* Right Side - Full Screen Carousel */}
          <div className="lg:flex-1 lg:w-7/12 xl:w-8/12 min-h-[400px] lg:min-h-screen">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Frase de Impacto */}
      <section className="bg-integra-beige py-28 md:py-36">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-futura text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-integra-black leading-tight tracking-[0.01em]">
              "Mais do que decorar, criamos espa&ccedil;os que traduzem quem voc&ecirc; &eacute;."
            </h2>
          </div>
        </RevealOnScroll>
      </section>

      {/* Introducao */}
      <section className="bg-[#ebe9e4] py-28 md:py-36">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-integra-gray text-[20px] leading-relaxed mb-5">
              Criar um ambiente vai al&eacute;m da est&eacute;tica. &Eacute; sobre entender quem vive nele, como vive e o que deseja sentir ao chegar em casa.
            </p>
            <p className="text-integra-gray text-[20px] leading-relaxed mb-5">
              Sob a dire&ccedil;&atilde;o de Mara Meloni, o Integra Atelier nasce com o prop&oacute;sito de desenvolver projetos personalizados, que unem sofistica&ccedil;&atilde;o, funcionalidade e autenticidade. Cada detalhe &eacute; pensado para criar espa&ccedil;os que acolhem, impressionam e permanecem atemporais.
            </p>
            <p className="text-integra-black text-[20px] font-medium tracking-wide">
              Aqui, o design n&atilde;o segue tend&ecirc;ncias &mdash; ele revela hist&oacute;rias.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Projetos */}
      <section className="bg-integra-section pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="w-full h-px bg-integra-gray-light/40 mb-10 md:mb-14" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-futura font-light text-integra-black tracking-[0.02em] mb-10 md:mb-14 text-center">Projetos</h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="max-w-xl mx-auto">
              <Link to="/projects/perdizes-01" className="group block text-center">
                <div className="overflow-hidden mb-5">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.13 (2).jpeg"
                    alt="Perdizes 01"
                    aspectRatio="aspect-[4/3]"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-sans text-integra-black group-hover:text-integra-black-dark transition-colors duration-300">Perdizes 01</h3>
                <p className="text-integra-gray text-base">Projeto residencial</p>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bio da Mara */}
      <section className="py-28 md:py-36 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.2em] text-integra-black uppercase mb-4">Fundadora</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-futura font-light text-integra-black mb-6 md:mb-8 tracking-[0.01em]">Mara Meloni</h2>
              <p className="text-integra-gray text-base leading-relaxed mb-6 md:mb-8">
                Mara Meloni &eacute; arquiteta de interiores e fundadora do Integra Atelier de Interiores. Sua trajet&oacute;ria profissional &eacute; marcada pela transi&ccedil;&atilde;o de carreira durante a pandemia, quando decidiu transformar um interesse antigo em prop&oacute;sito.
              </p>
              <Link to="/about" className="text-[10.5px] tracking-[0.15em] text-integra-black uppercase border-b border-integra-black pb-1 hover:text-integra-black-dark hover:border-integra-gold-dark transition-colors duration-300 link-animated">
                Conhe&ccedil;a mais
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <ImageWithFade
              src="/projetos/projeto-04.jpeg"
              alt="Mara Meloni - Fundadora"
              aspectRatio="aspect-[3/4]"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-integra-beige text-integra-black py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-[10px] tracking-[0.2em] text-integra-black uppercase mb-4">Por que nos escolher</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-futura font-light tracking-[0.01em]">Nossos Diferenciais</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <RevealOnScroll delay={0}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Projetos Personalizados</h4>
                <p className="text-integra-gray text-base leading-relaxed">Cada projeto &eacute; &uacute;nico, desenvolvido sob medida para atender &agrave;s suas necessidades e estilo de vida.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Olhar Sens&iacute;vel</h4>
                <p className="text-integra-gray text-base leading-relaxed">Sofistica&ccedil;&atilde;o aliada &agrave; sensibilidade para criar ambientes que acolhem e inspiram.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Atendimento Exclusivo</h4>
                <p className="text-integra-gray text-base leading-relaxed">Acompanhamento pr&oacute;ximo e dedicado do in&iacute;cio ao fim do projeto.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Est&eacute;tica Atemporal</h4>
                <p className="text-integra-gray text-base leading-relaxed">Eleg&acirc;ncia contempor&acirc;nea que transcende tend&ecirc;ncias passageiras.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={320}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Identidade Real</h4>
                <p className="text-integra-gray text-base leading-relaxed">Tradu&ccedil;&atilde;o aut&ecirc;ntica da personalidade e do estilo de vida de cada cliente.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="border-t border-integra-gray/20 pt-7">
                <h4 className="text-base md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-black">Acompanhamento Total</h4>
                <p className="text-integra-gray text-base leading-relaxed">Supervis&atilde;o completa desde o conceito at&eacute; a execu&ccedil;&atilde;o final.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-integra-bg text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-futura font-light text-integra-black mb-6 md:mb-8 tracking-[0.01em]">Comece seu projeto.</h2>
            <p className="text-integra-gray text-base mb-10 md:mb-12">
              O Integra Atelier atende clientes que buscam mais do que um projeto &mdash; buscam um espa&ccedil;o que represente quem s&atilde;o.
            </p>
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block bg-integra-gold-light hover:bg-[#c49a5f] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-light/20"
            >
              Entre em Contato
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
