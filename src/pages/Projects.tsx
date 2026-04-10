import React, { useEffect } from 'react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';

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
              <p className="text-integra-gray text-[13px] leading-relaxed">
                Cada projeto desenvolvido pelo Integra Atelier parte de um princ&iacute;pio essencial: n&atilde;o existem solu&ccedil;&otilde;es prontas &mdash; existem hist&oacute;rias &uacute;nicas.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Introducao */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-integra-gray text-[13px] leading-relaxed mb-5">
              Com um olhar atento ao estilo de vida, &agrave;s necessidades e aos desejos de cada cliente, os projetos s&atilde;o constru&iacute;dos de forma personalizada, equilibrando est&eacute;tica, funcionalidade e identidade.
            </p>
            <p className="text-integra-black text-[13px] font-medium tracking-wide">
              O resultado s&atilde;o espa&ccedil;os sofisticados, com linguagem contempor&acirc;nea, pensados para proporcionar conforto, pertencimento e uma experi&ecirc;ncia est&eacute;tica marcante.
            </p>
          </div>
        </RevealOnScroll>

      </div>

      {/* Residencial */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Categoria</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Projetos Residenciais</h2>
              </div>
              <p className="text-integra-gray text-[13px] max-w-md md:text-right">Projetos completos para transformar sua casa em um lar que reflete quem voc&ecirc; &eacute;.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.09 (1).jpeg"
                    alt="Projeto Residencial 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Resid&ecirc;ncia Contempor&acirc;nea</h3>
                <p className="text-integra-gray text-[11px]">S&atilde;o Paulo, SP</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.09 (2).jpeg"
                    alt="Projeto Residencial 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Apartamento Minimalista</h3>
                <p className="text-integra-gray text-[11px]">S&atilde;o Paulo, SP</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.10.jpeg"
                    alt="Projeto Residencial 3"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Casa de Campo</h3>
                <p className="text-integra-gray text-[11px]">Interior de SP</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Comercial */}
      <section className="py-16 md:py-20 bg-integra-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Categoria</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Projetos Comerciais</h2>
              </div>
              <p className="text-integra-gray text-[13px] max-w-md md:text-right">Espa&ccedil;os que inspiram e potencializam resultados nos neg&oacute;cios.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.10 (1).jpeg"
                    alt="Projeto Comercial 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Escrit&oacute;rio Corporativo</h3>
                <p className="text-integra-gray text-[11px]">S&atilde;o Paulo, SP</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.10 (2).jpeg"
                    alt="Projeto Comercial 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Cl&iacute;nica Est&eacute;tica</h3>
                <p className="text-integra-gray text-[11px]">S&atilde;o Paulo, SP</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.10 (3).jpeg"
                    alt="Projeto Comercial 3"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Restaurante Boutique</h3>
                <p className="text-integra-gray text-[11px]">S&atilde;o Paulo, SP</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Consultorias */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Servi&ccedil;o</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Consultorias Personalizadas</h2>
              </div>
              <p className="text-integra-gray text-[13px] max-w-md md:text-right">Orienta&ccedil;&atilde;o especializada para transformar seu espa&ccedil;o com dire&ccedil;&atilde;o criativa.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.11.jpeg"
                    alt="Consultoria 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Consultoria de Cores</h3>
                <p className="text-integra-gray text-[11px]">Paleta personalizada para seu ambiente</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.11 (1).jpeg"
                    alt="Consultoria 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Consultoria de Layout</h3>
                <p className="text-integra-gray text-[11px]">Otimiza&ccedil;&atilde;o de espa&ccedil;os e funcionalidade</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Curadoria */}
      <section className="py-16 md:py-20 bg-integra-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-12 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-1.5 md:mb-2">Servi&ccedil;o</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Curadoria de Mobili&aacute;rio e Objetos</h2>
              </div>
              <p className="text-integra-gray text-[13px] max-w-md md:text-right">Sele&ccedil;&atilde;o criteriosa de pe&ccedil;as que d&atilde;o personalidade ao seu espa&ccedil;o.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.12.jpeg"
                    alt="Curadoria 1"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Mobili&aacute;rio Autoral</h3>
                <p className="text-integra-gray text-[11px]">Pe&ccedil;as selecionadas de designers renomados</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.12 (1).jpeg"
                    alt="Curadoria 2"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Objetos Decorativos</h3>
                <p className="text-integra-gray text-[11px]">Detalhes que fazem a diferen&ccedil;a</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="group">
                <div className="mb-4">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.12 (2).jpeg"
                    alt="Curadoria 3"
                    aspectRatio="aspect-[4/3]"
                    className="overflow-hidden"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-sans text-integra-black">Ilumina&ccedil;&atilde;o</h3>
                <p className="text-integra-gray text-[11px]">Pe&ccedil;as que transformam ambientes</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Galeria Extra - Projetos Adicionais */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-3 md:mb-4">Galeria</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Mais Projetos</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealOnScroll delay={0}>
              <ImageWithFade
                src="/projetos/WhatsApp Image 2026-04-08 at 09.17.13.jpeg"
                alt="Projeto Galeria 1"
                aspectRatio="aspect-[16/10]"
                className="overflow-hidden"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <ImageWithFade
                src="/projetos/WhatsApp Image 2026-04-08 at 09.17.13 (1).jpeg"
                alt="Projeto Galeria 2"
                aspectRatio="aspect-[16/10]"
                className="overflow-hidden"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            <RevealOnScroll delay={0}>
              <ImageWithFade
                src="/projetos/WhatsApp Image 2026-04-08 at 09.17.13 (2).jpeg"
                alt="Projeto Galeria 3"
                aspectRatio="aspect-[4/3]"
                className="overflow-hidden"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <ImageWithFade
                src="/projetos/WhatsApp Image 2026-04-08 at 09.17.11 (2).jpeg"
                alt="Projeto Galeria 4"
                aspectRatio="aspect-[4/3]"
                className="overflow-hidden"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <ImageWithFade
                src="/projetos/WhatsApp Image 2026-04-08 at 09.17.11 (3).jpeg"
                alt="Projeto Galeria 5"
                aspectRatio="aspect-[4/3]"
                className="overflow-hidden"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
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
            <p className="text-integra-gray text-[13px] leading-relaxed mb-8 md:mb-10">
              Cada espa&ccedil;o deve ser &uacute;nico, assim como quem o habita. Vamos criar o seu?
            </p>
            <a
              href="/contact"
              className="btn-premium inline-block bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
            >
              Solicite um Or&ccedil;amento
            </a>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
