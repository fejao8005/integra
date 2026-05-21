import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';

const WHATSAPP_URL = 'https://wa.me/5511943400222';

import { MessageCircle, Sparkles, PencilRuler, ClipboardCheck } from 'lucide-react';

const IconEscuta = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <MessageCircle size={68} strokeWidth={0.75} />
  </div>
);
const IconConceito = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <Sparkles size={68} strokeWidth={0.75} />
  </div>
);
const IconDesenvolvimento = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <PencilRuler size={68} strokeWidth={0.75} />
  </div>
);
const IconAcompanhamento = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <ClipboardCheck size={68} strokeWidth={0.75} />
  </div>
);

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-futura font-light leading-[1.08] tracking-wide text-integra-black">
                Nosso<br />
                Processo
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-start pt-3 md:pt-4">
              <p className="text-integra-gray text-base leading-relaxed max-w-sm">
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
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 md:mb-8 text-integra-gold">
                  <IconEscuta />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-futura font-light text-integra-gold mb-3 md:mb-4">01</span>
                  <h3 className="text-lg md:text-xl font-futura text-integra-black mb-3 md:mb-4 tracking-wide">Escuta e<br />Entendimento</h3>
                  <p className="text-integra-gray text-base leading-relaxed">
                    Tudo come&ccedil;a com um briefing detalhado, onde s&atilde;o explorados h&aacute;bitos, necessidades, refer&ecirc;ncias e estilo de vida.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 02 */}
            <RevealOnScroll delay={120}>
              <div className="lg:mt-16 xl:mt-28 flex flex-col items-center text-center">
                <div className="mb-6 md:mb-8 text-integra-gold">
                  <IconConceito />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-futura font-light text-integra-gold mb-3 md:mb-4">02</span>
                  <h3 className="text-lg md:text-xl font-futura text-integra-black mb-3 md:mb-4 tracking-wide">Conceito e Dire&ccedil;&atilde;o<br />Criativa</h3>
                  <p className="text-integra-gray text-base leading-relaxed">
                    A partir dessas informa&ccedil;&otilde;es, &eacute; desenvolvido um conceito que orienta toda a linguagem est&eacute;tica do projeto.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 03 */}
            <RevealOnScroll delay={240}>
              <div className="lg:mt-8 xl:mt-16 flex flex-col items-center text-center">
                <div className="mb-6 md:mb-8 text-integra-gold">
                  <IconDesenvolvimento />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-futura font-light text-integra-gold mb-3 md:mb-4">03</span>
                  <h3 className="text-lg md:text-xl font-futura text-integra-black mb-3 md:mb-4 tracking-wide">Desenvolvimento<br />do Projeto</h3>
                  <p className="text-integra-gray text-base leading-relaxed">
                    S&atilde;o definidas solu&ccedil;&otilde;es que integram funcionalidade, est&eacute;tica e identidade, com aten&ccedil;&atilde;o minuciosa aos detalhes.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 04 */}
            <RevealOnScroll delay={360}>
              <div className="lg:mt-16 xl:mt-32 flex flex-col items-center text-center">
                <div className="mb-6 md:mb-8 text-integra-gold">
                  <IconAcompanhamento />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-futura font-light text-integra-gold mb-3 md:mb-4">04</span>
                  <h3 className="text-lg md:text-xl font-futura text-integra-black mb-3 md:mb-4 tracking-wide">Acompanhamento</h3>
                  <p className="text-integra-gray text-base leading-relaxed">
                    O atelier acompanha a execu&ccedil;&atilde;o para garantir que o resultado final respeite o conceito proposto.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-integra-section text-center border-t border-integra-beige/30">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-futura font-light text-integra-black mb-7 md:mb-8 tracking-wide">
              Uma Jornada Guiada por Confian&ccedil;a
            </h2>
            <p className="text-integra-gray text-base leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto">
              Mais do que um processo t&eacute;cnico, trata-se de uma jornada guiada por confian&ccedil;a, alinhamento e sensibilidade.
            </p>
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10.5px] tracking-[0.15em] text-integra-black uppercase border-b border-integra-black pb-1 hover:text-integra-gold-dark hover:border-integra-gold-dark transition-colors duration-300 link-animated"
            >
              Inicie uma Conversa
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}