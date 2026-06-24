'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Investor ready pitch deck',
  'Re-usable templates',
  'Mini-brand guide',
];

function BoxArrowIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeckButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        backgroundColor: 'var(--lb-semantic-color-action-default)',
        color: 'var(--lb-semantic-color-text-inverse)',
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        backgroundColor: 'var(--lb-semantic-color-surface-page)',
        color: 'var(--lb-semantic-color-text-primary)',
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  };

  return (
    <a
      ref={btnRef}
      href="https://cal.com/neilmcbean/30-min-chitchat"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: 'var(--lb-semantic-color-surface-page)',
        color: 'var(--lb-semantic-color-text-primary)',
        fontFamily: 'var(--font-libertinus-serif)',
        fontSize: 'clamp(18px, 2vw, 42px)',
        fontWeight: '400',
        padding: '16px 24px',
        border: 'none',
        cursor: 'pointer',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
      }}
    >
      Get decked out.
      <div ref={iconRef}>
        <BoxArrowIcon color="currentColor" />
      </div>
    </a>
  );
}

export default function DeckInABox() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const creamBorder = '1px solid var(--lb-semantic-color-text-inverse)';

  return (
    <Container>
      <div
        ref={sectionRef}
        className="deck-columns"
        style={{
          backgroundColor: 'var(--lb-semantic-color-action-default)',
          display: 'flex',
          minHeight: '280px',
        }}
      >
        {/* Left — DECK IN A BOX type */}
        <div
          ref={typeRef}
          style={{
            flex: '1 1 50%',
            padding: 'clamp(24px, 5vw, 60px) clamp(16px, 3%, 60px)',
            borderRight: creamBorder,
            display: 'flex',
            alignItems: 'center',
            padding: '10px 10px 10px 10px',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-ut-glorious)',
            fontWeight: '700',
            lineHeight: '0.8',
            textTransform: 'uppercase',
            color: 'var(--lb-semantic-color-text-inverse)',
            fontSize: 'clamp(120px, 14vw, 220px)',
            whiteSpace: 'nowrap',
          }}>
            DECK IN<br />A BOX
          </div>
        </div>

        {/* Right — features + price/CTA */}
        <div
          ref={rightRef}
          style={{
            flex: '1 1 50%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top — features */}
          <div style={{
            flex: 1,
            padding: 'clamp(24px, 4vw, 48px) clamp(16px, 3%, 48px)',
            borderBottom: creamBorder,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
          }}>
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-albert-sans)',
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  fontWeight: '400',
                  color: 'var(--lb-semantic-color-text-inverse)',
                  letterSpacing: '0.02em',
                }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Bottom — price + CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
            {/* Price */}
            <div style={{
              flex: 1,
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-ut-glorious)',
                fontSize: 'var(--lb-primitives-font-size-2xl)',
                fontWeight: '700',
                color: 'var(--lb-semantic-color-text-inverse)',
                lineHeight: '1',
              }}>
                $1999
              </div>
            </div>

            {/* CTA button */}
            <DeckButton />
          </div>
        </div>

      </div>
    </Container>
  );
}