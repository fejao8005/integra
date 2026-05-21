import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-[background,padding,box-shadow] duration-500 ${scrolled
          ? 'bg-integra-beige py-4 shadow-sm'
          : 'bg-integra-beige py-6'
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
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-block bg-integra-gold-light hover:bg-[#c49a5f] text-white text-[10.5px] tracking-[0.15em] uppercase px-7 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-integra-gold-light/20"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="md:hidden fixed inset-0 bg-integra-bg z-40"
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
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.08 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-light tracking-wide transition-colors duration-300 ${isActive(link.path)
                      ? 'text-integra-black'
                      : 'text-integra-gray hover:text-integra-black'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.35 }}
              className="pt-8"
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block bg-integra-gold-light text-white text-[10.5px] tracking-[0.15em] uppercase px-8 py-3 transition-colors duration-300"
              >
                Contato
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
