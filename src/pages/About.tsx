import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';

const WHATSAPP_URL = 'https://wa.me/5511943400222';

export default function About() {
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
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-5 md:mb-6">Quem Somos</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.08] tracking-wide text-integra-black">
                Integra<br />
                Atelier de<br />
                Interiores
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-integra-gray text-base leading-relaxed">
                Um est&uacute;dio especializado em projetos residenciais de alto padr&atilde;o, que valoriza a personaliza&ccedil;&atilde;o, a escuta e a constru&ccedil;&atilde;o de espa&ccedil;os com identidade.
              </p>
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* Visao e Proposito */}
      <section className="bg-integra-section py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <RevealOnScroll>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black tracking-wide">Vis&atilde;o &amp; Prop&oacute;sito</h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="max-w-md">
                <p className="text-integra-gray text-base leading-relaxed mb-7">
                  Decorar um espa&ccedil;o &eacute; traduzir emo&ccedil;&otilde;es, mem&oacute;rias e identidade em forma de ambiente. Um projeto bem pensado transforma a rotina, melhora o bem-estar e cria uma nova forma de viver os espa&ccedil;os.
                </p>
                <p className="text-integra-black text-base font-medium tracking-wide">
                  O prop&oacute;sito do Integra Atelier &eacute; criar ambientes que n&atilde;o apenas encantam &mdash; mas que fazem sentido, acolhem e permanecem.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Fundadora */}
      <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-5 md:mb-6">Fundadora</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-light text-integra-black mb-12 md:mb-16 tracking-wide">Mara Meloni</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <RevealOnScroll>
              <div>
                <p className="text-integra-gray text-base leading-relaxed mb-5">
                  Mara Meloni &eacute; designer de interiores e fundadora do Integra Atelier de Interiores. Sua trajet&oacute;ria profissional &eacute; marcada pela transi&ccedil;&atilde;o de carreira durante a pandemia, quando decidiu transformar um interesse antigo em prop&oacute;sito.
                </p>
                <p className="text-integra-gray text-base leading-relaxed mb-5">
                  O ponto de virada aconteceu ao projetar o pr&oacute;prio apartamento &mdash; um projeto que despertou reconhecimento e consolidou sua decis&atilde;o de atuar na &aacute;rea.
                </p>
                <p className="text-integra-gray text-base leading-relaxed">
                  Com forma&ccedil;&atilde;o t&eacute;cnica em Design de Interiores e gradua&ccedil;&atilde;o em andamento, Mara est&aacute; em constante aprimoramento por meio de cursos, mostras e eventos do setor.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-integra-gray text-base leading-relaxed mb-7">
                    Seu estilo &eacute; contempor&acirc;neo, sofisticado e atemporal, com forte presen&ccedil;a de materiais nobres, texturas refinadas e uma paleta equilibrada.
                  </p>
                  <p className="text-integra-black text-base font-medium tracking-wide mb-10 md:mb-12">
                    Mais do que est&eacute;tica, seu trabalho busca traduzir a identidade e o estilo de vida de cada cliente em ambientes que unem conforto, eleg&acirc;ncia e funcionalidade.
                  </p>
                </div>
                <div>
                  <Link to="/projects" className="text-[10px] tracking-[0.15em] text-integra-black uppercase border-b border-integra-black pb-1 hover:text-integra-gold-dark hover:border-integra-gold-dark transition-colors duration-300 link-animated">
                    Ver Projetos
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
        <RevealOnScroll>
          <ImageWithFade
            src="/projetos/projeto-02.jpeg"
            alt="Projeto Integra Atelier"
            aspectRatio="aspect-[16/9]"
          />
        </RevealOnScroll>
      </section>

      {/* Diferenciais */}
      <section className="bg-integra-section py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <RevealOnScroll>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-integra-black mb-12 md:mb-16 tracking-wide">Diferenciais do Atelier</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <RevealOnScroll delay={0}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Projetos 100% Personalizados</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Cada projeto &eacute; &uacute;nico, desenvolvido sob medida para atender &agrave;s necessidades, desejos e estilo de vida de cada cliente.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Olhar Sens&iacute;vel</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Sofistica&ccedil;&atilde;o aliada &agrave; sensibilidade para criar ambientes que acolhem, impressionam e permanecem atemporais.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Atendimento Exclusivo</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Acompanhamento pr&oacute;ximo e dedicado do in&iacute;cio ao fim do projeto, garantindo uma experi&ecirc;ncia &uacute;nica.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Est&eacute;tica Atemporal</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Eleg&acirc;ncia contempor&acirc;nea que transcende tend&ecirc;ncias passageiras, criando espa&ccedil;os que permanecem relevantes.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={320}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Identidade Real</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Tradu&ccedil;&atilde;o aut&ecirc;ntica da personalidade e do estilo de vida de cada cliente em cada detalhe do projeto.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div>
                <h4 className="text-[10px] tracking-[0.18em] uppercase text-integra-gold mb-3">Acompanhamento Total</h4>
                <p className="text-integra-gray text-base leading-relaxed">
                  Supervis&atilde;o completa desde o conceito at&eacute; a execu&ccedil;&atilde;o final, garantindo a fidelidade do projeto.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-20 md:py-28 bg-integra-black text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light leading-tight tracking-wide mb-7 md:mb-8">
              O Integra Atelier atende clientes que buscam mais do que um projeto &mdash; buscam um espa&ccedil;o que represente quem s&atilde;o.
            </h2>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-integra-bg text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-integra-black mb-10 md:mb-12 tracking-[0.01em]">Inicie a Conversa.</h2>
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-9 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
            >
              Solicite uma Consultoria
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
