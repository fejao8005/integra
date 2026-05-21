import React, { useEffect } from 'react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

const PERDIZES01_IMAGES = [
  '/projetos/projeto-01.jpeg',
  '/projetos/projeto-02.jpeg',
  '/projetos/projeto-03.jpeg',
  '/projetos/projeto-04.jpeg',
  '/projetos/projeto-05.jpeg',
  '/projetos/projeto-06.jpeg',
  '/projetos/projeto-07.jpeg',
  '/projetos/projeto-08.jpeg',
  '/projetos/projeto-09.jpeg',
  '/projetos/projeto-10.jpeg',
  '/projetos/projeto-11.jpeg',
  '/projetos/projeto-12.jpeg',
  '/projetos/projeto-13.jpeg',
  '/projetos/projeto-14.jpeg',
  '/projetos/projeto-15.jpeg',
  '/projetos/projeto-16.jpeg',
  '/projetos/projeto-17.jpeg',
  '/projetos/projeto-18.jpeg',
  '/projetos/projeto-19.jpeg',
  '/projetos/projeto-20.jpeg',
  '/projetos/projeto-21.jpeg',
];

export default function ProjectPerdizes01() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-integra-bg">
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-4">Projeto</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-futura font-light leading-[1.08] tracking-wide text-integra-black mb-4">
                Perdizes 01
              </h1>
              <p className="text-integra-gray text-base md:text-lg max-w-2xl">
                Projeto residencial completo em Perdizes, São Paulo. Cada ambiente foi pensado para refletir o estilo de vida e personalidade dos clientes.
              </p>
            </div>
          </RevealOnScroll>

          {/* Featured Image */}
          <RevealOnScroll delay={100}>
            <div className="mb-12 md:mb-16">
              <ImageWithFade
                src="/projetos/projeto-01.jpeg"
                alt="Perdizes 01 - Foto Principal"
                aspectRatio="aspect-[16/9]"
                className="overflow-hidden"
                imgClassName=""
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PERDIZES01_IMAGES.slice(1).map((src, index) => (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="overflow-hidden">
                    <ImageWithFade
                      src={src}
                      alt={`Perdizes 01 - Foto ${index + 2}`}
                      aspectRatio="aspect-[4/3]"
                      className="overflow-hidden"
                      imgClassName="hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-integra-beige text-center border-t border-integra-section">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-futura font-light text-integra-black mb-7 md:mb-8 tracking-wide">
              Quer um projeto assim?
            </h2>
            <p className="text-integra-gray text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Cada espa&ccedil;o deve ser &uacute;nico, assim como quem o habita. Vamos criar o seu?
            </p>
            <Link
              to="/contact"
              className="inline-block bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
            >
              Solicite um Or&ccedil;amento
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}