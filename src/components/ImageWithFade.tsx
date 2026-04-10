import React, { useState, useEffect, useRef } from 'react';

interface ImageWithFadeProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
}

export default function ImageWithFade({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  loading = 'lazy',
}: ImageWithFadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`${aspectRatio} overflow-hidden ${className}`}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          isInView ? 'scale-100' : 'scale-[1.03]'
        }`}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-integra-beige/50 animate-pulse" />
        )}
        <img
          src={isInView ? src : ''}
          alt={alt}
          loading={loading}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
