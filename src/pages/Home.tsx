import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';

const WHATSAPP_URL = 'https://wa.me/5511943400222';

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

export default function Home() {
  const location = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 800], [0, -120]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full pt-40 md:pt-52 pb-28 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 z-10">
            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05] tracking-[0.01em] text-integra-black mb-6 md:mb-8"
            >
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block">Integra</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block text-integra-gold italic">Atelier</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={titleLine} className="block">de Interiores</motion.span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
              className="text-integra-gray max-w-sm text-sm md:text-[13px] leading-relaxed"
            >
              Projetos que traduzem identidade, estilo de vida e forma de viver.
            </motion.p>
          </div>
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ y: heroImageY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="parallax-container"
            >
              <ImageWithFade
                src="/projetos/projeto-03.jpeg"
                alt="Projeto Integra Atelier"
                aspectRatio="aspect-[3/4] md:aspect-[4/5]"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frase de Impacto */}
      <section className="bg-integra-section py-28 md:py-36">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-integra-black leading-tight tracking-[0.01em]">
              "Mais do que decorar, criamos espa&ccedil;os que traduzem quem voc&ecirc; &eacute;."
            </h2>
          </div>
        </RevealOnScroll>
      </section>

      {/* Introducao */}
      <section className="py-28 md:py-36 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed mb-5">
              Criar um ambiente vai al&eacute;m da est&eacute;tica. &Eacute; sobre entender quem vive nele, como vive e o que deseja sentir ao chegar em casa.
            </p>
            <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed mb-5">
              Sob a dire&ccedil;&atilde;o de Mara Meloni, o Integra Atelier nasce com o prop&oacute;sito de desenvolver projetos personalizados, que unem sofistica&ccedil;&atilde;o, funcionalidade e autenticidade. Cada detalhe &eacute; pensado para criar espa&ccedil;os que acolhem, impressionam e permanecem atemporais.
            </p>
            <p className="text-integra-black text-sm md:text-[13px] font-medium tracking-wide">
              Aqui, o design n&atilde;o segue tend&ecirc;ncias &mdash; ele revela hist&oacute;rias.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Tipos de Projeto */}
      <section className="bg-integra-section py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-4">Nossos Servi&ccedil;os</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-integra-black tracking-[0.01em]">Tipos de Projeto</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Residencial */}
            <RevealOnScroll delay={0}>
              <Link to="/projects" className="group block">
                <div className="mb-5">
                  <ImageWithFade
                    src="/projetos/projeto-01.jpeg"
                    alt="Projetos Residenciais"
                    aspectRatio="aspect-[3/4]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-sans text-integra-black mb-1.5 group-hover:text-integra-gold-dark transition-colors duration-300">Residencial</h3>
                <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed">Projetos completos para sua casa</p>
              </Link>
            </RevealOnScroll>

            {/* Comercial */}
            <RevealOnScroll delay={100}>
              <Link to="/projects" className="group block">
                <div className="mb-5">
                  <ImageWithFade
                    src="/projetos/projeto-08.jpeg"
                    alt="Projetos Comerciais"
                    aspectRatio="aspect-[3/4]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-sans text-integra-black mb-1.5 group-hover:text-integra-gold-dark transition-colors duration-300">Comercial</h3>
                <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed">Espa&ccedil;os que inspiram neg&oacute;cios</p>
              </Link>
            </RevealOnScroll>

            {/* Consultorias */}
            <RevealOnScroll delay={200}>
              <Link to="/projects" className="group block">
                <div className="mb-5">
                  <ImageWithFade
                    src="/projetos/projeto-13.jpeg"
                    alt="Consultorias Personalizadas"
                    aspectRatio="aspect-[3/4]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-sans text-integra-black mb-1.5 group-hover:text-integra-gold-dark transition-colors duration-300">Consultorias</h3>
                <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed">Orienta&ccedil;&atilde;o especializada</p>
              </Link>
            </RevealOnScroll>

            {/* Curadoria */}
            <RevealOnScroll delay={300}>
              <Link to="/projects" className="group block">
                <div className="mb-5">
                  <ImageWithFade
                    src="/projetos/projeto-18.jpeg"
                    alt="Curadoria de Mobiliário"
                    aspectRatio="aspect-[3/4]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-sans text-integra-black mb-1.5 group-hover:text-integra-gold-dark transition-colors duration-300">Curadoria</h3>
                <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed">Mobili&aacute;rio e objetos selecionados</p>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Bio da Mara */}
      <section className="py-28 md:py-36 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-4">Fundadora</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-integra-black mb-6 md:mb-8 tracking-[0.01em]">Mara Meloni</h2>
              <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed mb-5">
                Mara Meloni &eacute; designer de interiores e fundadora do Integra Atelier de Interiores. Sua trajet&oacute;ria profissional &eacute; marcada pela transi&ccedil;&atilde;o de carreira durante a pandemia, quando decidiu transformar um interesse antigo em prop&oacute;sito.
              </p>
              <p className="text-integra-gray text-sm md:text-[13px] leading-relaxed mb-6 md:mb-8">
                Com forma&ccedil;&atilde;o t&eacute;cnica em Design de Interiores e gradua&ccedil;&atilde;o em andamento, Mara est&aacute; em constante aprimoramento por meio de cursos, mostras e eventos do setor.
              </p>
              <Link to="/about" className="text-[10.5px] tracking-[0.15em] text-integra-black uppercase border-b border-integra-black pb-1 hover:text-integra-gold-dark hover:border-integra-gold-dark transition-colors duration-300 link-animated">
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
      <section className="bg-integra-black text-white py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-4">Por que nos escolher</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-[0.01em]">Nossos Diferenciais</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <RevealOnScroll delay={0}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Projetos Personalizados</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Cada projeto &eacute; &uacute;nico, desenvolvido sob medida para atender &agrave;s suas necessidades e estilo de vida.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Olhar Sens&iacute;vel</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Sofistica&ccedil;&atilde;o aliada &agrave; sensibilidade para criar ambientes que acolhem e inspiram.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Atendimento Exclusivo</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Acompanhamento pr&oacute;ximo e dedicado do in&iacute;cio ao fim do projeto.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Est&eacute;tica Atemporal</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Eleg&acirc;ncia contempor&acirc;nea que transcende tend&ecirc;ncias passageiras.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={320}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Identidade Real</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Tradu&ccedil;&atilde;o aut&ecirc;ntica da personalidade e do estilo de vida de cada cliente.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="border-t border-white/15 pt-7">
                <h4 className="text-[11px] md:text-[10px] tracking-[0.18em] uppercase mb-3 text-integra-gold">Acompanhamento Total</h4>
                <p className="text-white/70 text-sm md:text-[13px] leading-relaxed">Supervis&atilde;o completa desde o conceito at&eacute; a execu&ccedil;&atilde;o final.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-integra-bg text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-integra-black mb-6 md:mb-8 tracking-[0.01em]">Comece seu projeto.</h2>
            <p className="text-integra-gray text-sm md:text-[13px] mb-10 md:mb-12">
              O Integra Atelier atende clientes que buscam mais do que um projeto &mdash; buscam um espa&ccedil;o que represente quem s&atilde;o.
            </p>
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
            >
              Entre em Contato
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
