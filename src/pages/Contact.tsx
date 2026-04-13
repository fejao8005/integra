import React, { useEffect, useState } from 'react';
import ImageWithFade from '../components/ImageWithFade';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 min-h-screen bg-integra-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24">

          {/* Left Column */}
          <div className="lg:col-span-6">
            <RevealOnScroll>
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-5 md:mb-6">Contato</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.08] tracking-wide text-integra-black mb-6 md:mb-8">
                Vamos<br />
                iniciar uma<br />
                <span className="text-integra-gold">conversa?</span>
              </h1>
              <p className="text-integra-gray text-base leading-relaxed max-w-md mb-12 md:mb-16">
                Todo espa&ccedil;o excepcional come&ccedil;a com uma vis&atilde;o. Compartilhe a sua conosco e juntos criaremos um ambiente que ressoa com sua hist&oacute;ria.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="mb-10 md:mb-12">
                <p className="text-[10px] tracking-[0.2em] text-integra-gray uppercase mb-3 md:mb-4">Direto</p>
                <a href="mailto:mara@integraateliedeinteriores.com.br" className="text-lg md:text-xl font-sans text-integra-black block mb-1.5 hover:text-integra-gold-dark transition-colors duration-300">
                  mara@integraateliedeinteriores.com.br
                </a>
                <a href="tel:+5511943400222" className="text-integra-gray text-base hover:text-integra-black transition-colors duration-300">
                  11 94340-0222
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="mb-12 md:mb-16">
                <p className="text-[10px] tracking-[0.2em] text-integra-gray uppercase mb-3 md:mb-4">Conecte-se</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://instagram.com/Integraatelierdeinteriores"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-integra-black hover:text-integra-gold-dark transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>@Integraatelierdeinteriores</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <ImageWithFade
                src="/projetos/projeto-06.jpeg"
                alt="Detalhe de Interior"
                aspectRatio="aspect-[4/5]"
                className="max-w-sm"
              />
            </RevealOnScroll>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-6">
            <RevealOnScroll delay={150}>
              <div className="bg-integra-section p-8 sm:p-10 md:p-14 lg:p-16">
                {submitted && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 text-sm animate-fade-in">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-integra-gray/30 py-2 text-sm text-integra-black focus:outline-none focus:border-integra-gold-dark transition-colors duration-300 peer placeholder-transparent"
                        placeholder="Nome Completo"
                        required
                      />
                      <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] tracking-[0.15em] text-integra-gray uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-integra-gold-dark peer-focus:tracking-[0.15em]">
                        Nome Completo
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-integra-gray/30 py-2 text-sm text-integra-black focus:outline-none focus:border-integra-gold-dark transition-colors duration-300 peer placeholder-transparent"
                        placeholder="Email"
                        required
                      />
                      <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] tracking-[0.15em] text-integra-gray uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-integra-gold-dark peer-focus:tracking-[0.15em]">
                        Email
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-integra-gray/30 py-2 text-sm text-integra-black focus:outline-none focus:border-integra-gold-dark transition-colors duration-300 peer placeholder-transparent"
                        placeholder="Telefone"
                      />
                      <label htmlFor="phone" className="absolute left-0 -top-4 text-[10px] tracking-[0.15em] text-integra-gray uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-integra-gold-dark peer-focus:tracking-[0.15em]">
                        Telefone
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-integra-gray/30 py-2 text-sm text-integra-black focus:outline-none focus:border-integra-gold-dark transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Selecione</option>
                        <option value="residencial">Projeto Residencial</option>
                        <option value="comercial">Projeto Comercial</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="curadoria">Curadoria</option>
                      </select>
                      <label htmlFor="interest" className="absolute left-0 -top-4 text-[10px] tracking-[0.15em] text-integra-gray uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-integra-gold-dark peer-focus:tracking-[0.15em]">
                        Interesse
                      </label>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-integra-gray">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-6">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-integra-gray/30 py-2 text-sm text-integra-black focus:outline-none focus:border-integra-gold-dark transition-colors duration-300 peer placeholder-transparent resize-none"
                      placeholder="Mensagem"
                      required
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 top-6 text-[10px] tracking-[0.15em] text-integra-gray uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-10 peer-focus:top-6 peer-focus:text-[10px] peer-focus:text-integra-gold-dark peer-focus:tracking-[0.15em]">
                      Mensagem
                    </label>
                  </div>

                  <div className="flex items-center gap-5 md:gap-6 pt-6 md:pt-8">
                    <button
                      type="submit"
                      className="btn-premium bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
                    >
                      Enviar Mensagem
                    </button>
                    <p className="text-[10px] text-integra-gray max-w-[180px] leading-relaxed">
                      Respondemos novos contatos em at&eacute; 2 dias &uacute;teis.
                    </p>
                  </div>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Bottom Info */}
        <RevealOnScroll delay={200}>
          <div className="mt-24 md:mt-32 pt-14 md:pt-16 border-t border-integra-beige/30 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-3 md:mb-4">Email</p>
              <a href="mailto:mara@integraateliedeinteriores.com.br" className="text-integra-black font-sans hover:text-integra-gold-dark transition-colors duration-300 text-base">
                mara@integraateliedeinteriores.com.br
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-3 md:mb-4">Telefone</p>
              <a href="tel:+5511943400222" className="text-integra-black font-sans hover:text-integra-gold-dark transition-colors duration-300 text-base">
                11 94340-0222
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-integra-gold uppercase mb-3 md:mb-4">Instagram</p>
              <a href="https://instagram.com/Integraatelierdeinteriores" target="_blank" rel="noopener noreferrer" className="text-integra-black font-sans hover:text-integra-gold-dark transition-colors duration-300 text-base">
                @Integraatelierdeinteriores
              </a>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
