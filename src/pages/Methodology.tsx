import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Methodology() {
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
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-5 md:mb-6">Metodologia</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.08] tracking-wide text-integra-black">
                Nosso<br />
                Processo
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-start pt-3 md:pt-4">
              <p className="text-integra-gray text-[13px] leading-relaxed max-w-sm">
                O processo do Integra Atelier &eacute; estruturado para garantir clareza, seguran&ccedil;a e um resultado alinhado &agrave;s expectativas do cliente.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Steps Grid */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* Step 01 */}
            <RevealOnScroll delay={0}>
              <div>
                <div className="mb-6 md:mb-8">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.10 (2).jpeg"
                    alt="Escuta e Entendimento"
                    aspectRatio="aspect-[3/4]"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-sans font-light text-integra-gold flex-shrink-0">01</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-sans text-integra-black mb-3 md:mb-4 tracking-wide">Escuta e<br />Entendimento</h3>
                    <p className="text-integra-gray text-[13px] leading-relaxed">
                      Tudo come&ccedil;a com um briefing detalhado, onde s&atilde;o explorados h&aacute;bitos, necessidades, refer&ecirc;ncias e estilo de vida.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 02 */}
            <RevealOnScroll delay={120}>
              <div className="lg:mt-16 xl:mt-28">
                <div className="mb-6 md:mb-8">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.11 (1).jpeg"
                    alt="Conceito e Direcao Criativa"
                    aspectRatio="aspect-[4/5]"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-sans font-light text-integra-gold flex-shrink-0">02</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-sans text-integra-black mb-3 md:mb-4 tracking-wide">Conceito e Dire&ccedil;&atilde;o<br />Criativa</h3>
                    <p className="text-integra-gray text-[13px] leading-relaxed">
                      A partir dessas informa&ccedil;&otilde;es, &eacute; desenvolvido um conceito que orienta toda a linguagem est&eacute;tica do projeto.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 03 */}
            <RevealOnScroll delay={240}>
              <div className="lg:mt-8 xl:mt-16">
                <div className="mb-6 md:mb-8">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.12 (1).jpeg"
                    alt="Desenvolvimento do Projeto"
                    aspectRatio="aspect-[3/4]"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-sans font-light text-integra-gold flex-shrink-0">03</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-sans text-integra-black mb-3 md:mb-4 tracking-wide">Desenvolvimento<br />do Projeto</h3>
                    <p className="text-integra-gray text-[13px] leading-relaxed">
                      S&atilde;o definidas solu&ccedil;&otilde;es que integram funcionalidade, est&eacute;tica e identidade, com aten&ccedil;&atilde;o minuciosa aos detalhes.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 04 */}
            <RevealOnScroll delay={360}>
              <div className="lg:mt-16 xl:mt-32">
                <div className="mb-6 md:mb-8">
                  <ImageWithFade
                    src="/projetos/WhatsApp Image 2026-04-08 at 09.17.13 (1).jpeg"
                    alt="Acompanhamento"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-sans font-light text-integra-gold flex-shrink-0">04</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-sans text-integra-black mb-3 md:mb-4 tracking-wide">Acompanhamento</h3>
                    <p className="text-integra-gray text-[13px] leading-relaxed">
                      O atelier acompanha a execu&ccedil;&atilde;o para garantir que o resultado final respeite o conceito proposto.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-integra-bg text-center border-t border-integra-beige/30">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-6">
            <div className="w-12 h-12 border border-integra-gold rounded-full flex items-center justify-center mx-auto mb-7 md:mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-integra-gold">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light text-integra-black mb-7 md:mb-8 tracking-wide">
              Uma Jornada Guiada por Confian&ccedil;a
            </h2>
            <p className="text-integra-gray text-[13px] leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto">
              Mais do que um processo t&eacute;cnico, trata-se de uma jornada guiada por confian&ccedil;a, alinhamento e sensibilidade.
            </p>
            <Link
              to="/contact"
              className="text-[10.5px] tracking-[0.15em] text-integra-black uppercase border-b border-integra-black pb-1 hover:text-integra-gold-dark hover:border-integra-gold-dark transition-colors duration-300 link-animated"
            >
              Inicie uma Conversa
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
