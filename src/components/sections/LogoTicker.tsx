'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/layout/Container';

const logos = [
  'UMYUM',
  'NIKE',
  'SAMSUNG',
  'TOHORA',
  'PUMA',
  'ADOBE',
  'MGM',
  'BIO-RAD',
  'KELLOGGS',
];

export default function LogoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  // Double the logos to create seamless loop
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
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-afacad)',
                fontSize: '22px',
                fontWeight: '400',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--lb-semantic-color-text-primary)',
                flexShrink: 0,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}