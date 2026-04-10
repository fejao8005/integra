import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  theme?: 'dark' | 'light';
}

export default function Logo({ variant = 'horizontal', theme = 'light' }: LogoProps) {
  const textColor = theme === 'dark' ? '#ffffff' : '#000000';
  const subtitleColor = theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#59595c';

  if (variant === 'vertical') {
    return (
      <Link to="/" className="flex flex-col items-center group">
        <svg viewBox="0 0 400 100" className="w-full max-w-[240px] md:max-w-[300px] transition-transform duration-500 group-hover:scale-[1.02]">
          {/* INTEGRA */}
          <text
            x="50%"
            y="38"
            textAnchor="middle"
            fontFamily="Jost, sans-serif"
            fontSize="42"
            fontWeight="400"
            letterSpacing="14"
            fill={textColor}
          >
            INTEGRA
          </text>
          {/* Linha dourada com ponto */}
          <line x1="20%" y1="52" x2="44%" y2="52" stroke="#deb77c" strokeWidth="1.2" />
          <circle cx="50%" cy="52" r="2.5" fill="#bf8229" />
          <line x1="56%" y1="52" x2="80%" y2="52" stroke="#eddbc3" strokeWidth="1.2" />
          {/* ATELIER DE INTERIORES */}
          <text
            x="50%"
            y="78"
            textAnchor="middle"
            fontFamily="Jost, sans-serif"
            fontSize="11"
            fontWeight="300"
            letterSpacing="7"
            fill={subtitleColor}
          >
            ATELIER DE INTERIORES
          </text>
        </svg>
      </Link>
    );
  }

  return (
    <Link to="/" className="inline-block group">
      <svg viewBox="0 0 400 80" className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-[1.02]">
        {/* INTEGRA */}
        <text
          x="50%"
          y="34"
          textAnchor="middle"
          fontFamily="Jost, sans-serif"
          fontSize="36"
          fontWeight="400"
          letterSpacing="13"
          fill={textColor}
        >
          INTEGRA
        </text>
        {/* Linha dourada com ponto */}
        <line x1="18%" y1="46" x2="44%" y2="46" stroke="#deb77c" strokeWidth="1.2" />
        <circle cx="50%" cy="46" r="2.2" fill="#bf8229" />
        <line x1="56%" y1="46" x2="82%" y2="46" stroke="#eddbc3" strokeWidth="1.2" />
        {/* ATELIER DE INTERIORES */}
        <text
          x="50%"
          y="66"
          textAnchor="middle"
          fontFamily="Jost, sans-serif"
          fontSize="10"
          fontWeight="300"
          letterSpacing="6"
          fill={subtitleColor}
        >
          ATELIER DE INTERIORES
        </text>
      </svg>
    </Link>
  );
}
