import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Quem Somos', path: '/about' },
    { name: 'Metodologia', path: '/methodology' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-integra-bg/95 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[12.5px] tracking-[0.08em] transition-colors duration-300 py-1 ${isActive(link.path)
                    ? 'text-integra-black'
                    : 'text-integra-gray hover:text-integra-black'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-gold animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-block bg-integra-gold-dark hover:bg-[#a87220] text-white text-[10.5px] tracking-[0.15em] uppercase px-7 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-dark/20"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-integra-black focus:outline-none p-2 -mr-2 transition-colors duration-300 hover:text-integra-gold-dark"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-integra-bg z-40 animate-fade-in"
          style={{ top: 0 }}
        >
          <div className="flex justify-between items-center px-6 py-6 border-b border-integra-beige/30">
            <Logo />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-integra-black focus:outline-none p-2 transition-colors duration-300 hover:text-integra-gold-dark"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(100vh-73px)] gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-light tracking-wide transition-colors duration-300 ${isActive(link.path)
                    ? 'text-integra-black'
                    : 'text-integra-gray hover:text-integra-black'
                  }`}
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.08}s both`,
                }}
              >
                {link.name}
              </Link>
            ))}
            <div
              className="pt-8"
              style={{
                animation: 'fade-in-up 0.5s ease-out 0.35s both',
              }}
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block bg-integra-gold-dark text-white text-[10.5px] tracking-[0.15em] uppercase px-8 py-3 transition-colors duration-300"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
