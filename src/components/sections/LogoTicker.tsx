'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Container from '@/components/layout/Container';

const logos = [
  { src: '/logos/umyum.png', alt: 'UMYUM', width: 180 },
  { src: '/logos/pika_logo.png', alt: 'Pika', width: 180 },
  { src: '/logos/Nike_logo.png', alt: 'Nike', width: 180 },
  { src: '/logos/samsung.png', alt: 'Samsung', width: 180 },
  { src: '/logos/Tohora.png', alt: 'Tohora', width: 180 },
  { src: '/logos/puma.png', alt: 'Puma', width: 180 },
];

export default function LogoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const allLogos = [...logos, ...logos];

  return (
    <Container>
      <div style={{
        height: '130px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={90}
                style={{
                  objectFit: 'contain',
                  opacity: 0.8,
                  filter: 'grayscale(100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}