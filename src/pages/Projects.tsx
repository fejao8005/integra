import React, { useEffect } from 'react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-integra-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16">

        {/* Hero */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24">
            <div className="lg:col-span-8">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-5 md:mb-6">Portf&oacute;lio</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.08] tracking-wide text-integra-black">
                Nossos<br />
                Projetos
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-integra-gray text-base leading-relaxed">
                Cada projeto desenvolvido pelo Integra Atelier parte de um princ&iacute;pio essencial: n&atilde;o existem solu&ccedil;&otilde;es prontas &mdash; existem hist&oacute;rias &uacute;nicas.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Introducao */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-integra-gray text-base leading-relaxed mb-5">
              Com um olhar atento ao estilo de vida, &agrave;s necessidades e aos desejos de cada cliente, os projetos s&atilde;o constru&iacute;dos de forma personalizada, equilibrando est&eacute;tica, funcionalidade e identidade.
            </p>
            <p className="text-integra-black text-base font-medium tracking-wide">
              O resultado s&atilde;o espa&ccedil;os sofisticados, com linguagem contempor&acirc;nea, pensados para proporcionar conforto, pertencimento e uma experi&ecirc;ncia est&eacute;tica marcante.
            </p>
          </div>
        </RevealOnScroll>

      </div>

      {/* Projeto Destacado - Perdizes 01 */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <Link to="/projects/perdizes-01" className="group block">
              <div className="relative overflow-hidden">
                <ImageWithFade
                  src="/projetos/projeto-01.jpeg"
                  alt="Perdizes 01"
                  aspectRatio="aspect-[16/9]"
                  className="overflow-hidden"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-integra-black/20 group-hover:bg-integra-black/10 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <p className="text-[10px] tracking-[0.2em] text-white uppercase mb-2 md:mb-3">Projeto em Destaque</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-futura font-light text-white tracking-wide">
                    Perdizes 01
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mt-2 md:mt-3 max-w-md">
                    Clique para ver o projeto completo
                  </p>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Consultorias */}
      <section className="py-16 md:py-20 bg-integra-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Servi&ccedil;o</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Consultorias Personalizadas</h2>
              </div>
              <p className="text-integra-gray text-base max-w-md md:text-right">Orienta&ccedil;&atilde;o especializada para transformar seu espa&ccedil;o com dire&ccedil;&atilde;o criativa.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/projeto-13.jpeg"
                    alt="Consultoria 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Consultoria de Cores</h3>
                <p className="text-integra-gray text-base">Paleta personalizada para seu ambiente</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/projeto-09.jpeg"
                    alt="Consultoria 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Consultoria de Layout</h3>
                <p className="text-integra-gray text-base">Otimiza&ccedil;&atilde;o de espa&ccedil;os e funcionalidade</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Curadoria */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Servi&ccedil;o</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Curadoria de Mobili&aacute;rio e Objetos</h2>
              </div>
              <p className="text-integra-gray text-base max-w-md md:text-right">Sele&ccedil;&atilde;o criteriosa de pe&ccedil;as que d&atilde;o personalidade ao seu espa&ccedil;o.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/projeto-18.jpeg"
                    alt="Curadoria 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Mobili&aacute;rio Autoral</h3>
                <p className="text-integra-gray text-base">Pe&ccedil;as selecionadas de designers renomados</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/projeto-14.jpeg"
                    alt="Curadoria 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Objetos Decorativos</h3>
                <p className="text-integra-gray text-base">Detalhes que fazem a diferen&ccedil;a</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/projeto-15.jpeg"
                    alt="Curadoria 3"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Ilumina&ccedil;&atilde;o</h3>
                <p className="text-integra-gray text-base">Pe&ccedil;as que transformam ambientes</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-integra-bg text-center border-t border-integra-beige/30">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light text-integra-black mb-7 md:mb-8 tracking-wide">
              Quer um projeto assim?
            </h2>
            <p className="text-integra-gray text-base leading-relaxed mb-8 md:mb-10">
              Cada espa&ccedil;o deve ser &uacute;nico, assim como quem o habita. Vamos criar o seu?
            </p>
            <a
              href="/contact"
              className="btn-premium inline-block bg-integra-gold-light hover:bg-[#c49a5f] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-light/20"
            >
              Solicite um Or&ccedil;amento
            </a>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}