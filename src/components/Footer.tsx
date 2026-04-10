import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-integra-section py-16 md:py-20 border-t border-integra-beige/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand & Description */}
          <div className="md:col-span-5">
            <Logo />
            <p className="text-integra-gray text-[11px] tracking-wider leading-relaxed max-w-xs mt-6">
              Projetos que traduzem identidade, estilo de vida e forma de viver.
            </p>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[9.5px] font-medium tracking-[0.2em] mb-5 uppercase text-integra-gray">
              Conecte-se
            </h4>
            <ul className="space-y-3 text-[11px] tracking-wider text-integra-gray uppercase">
              <li>
                <a
                  href="https://instagram.com/Integraatelierdeinteriores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-integra-gold-dark transition-colors duration-300 link-animated inline-block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-integra-gold-dark transition-colors duration-300 link-animated inline-block"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiries */}
          <div className="md:col-span-2">
            <h4 className="text-[9.5px] font-medium tracking-[0.2em] mb-5 uppercase text-integra-gray">
              Contato
            </h4>
            <ul className="space-y-3 text-[11px] tracking-wider text-integra-gray uppercase">
              <li>
                <a
                  href="mailto:mara@integraateliedeinteriores.com.br"
                  className="hover:text-integra-gold-dark transition-colors duration-300 link-animated inline-block"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511943400222"
                  className="hover:text-integra-gold-dark transition-colors duration-300 link-animated inline-block"
                >
                  11 94340-0222
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:col-span-3 text-right hidden md:flex flex-col justify-end">
            <p className="text-[9.5px] tracking-[0.15em] text-integra-gray uppercase leading-relaxed">
              &copy; {new Date().getFullYear()} Integra Atelier de Interiores.<br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="mt-14 pt-8 border-t border-integra-beige/30 md:hidden">
          <p className="text-[9.5px] tracking-[0.15em] text-integra-gray uppercase leading-relaxed text-center">
            &copy; {new Date().getFullYear()} Integra Atelier de Interiores.<br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
