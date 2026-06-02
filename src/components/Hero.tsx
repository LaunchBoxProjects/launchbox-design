'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';
import Script from 'next/script';
import SplineBox from '@/components/3D/SplineBox';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = heroRef.current?.querySelectorAll('[data-line]');
      
      lines?.forEach((line, lineIndex) => {
        const split = new SplitText(line, { type: 'chars' });
        const center = (split.chars.length - 1) / 2;
        
        const sorted = [...split.chars].sort((a, b) => {
          const distA = Math.abs(split.chars.indexOf(a) - center);
          const distB = Math.abs(split.chars.indexOf(b) - center);
          return distA - distB;
        });

        gsap.from(sorted, {
          opacity: 0,
          yPercent: 60,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.04,
          delay: lineIndex * 0.15 + 0.2,
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const border = '1px solid var(--lb-semantic-color-border-default)';

  return (
    <div ref={heroRef}>
      <Container>
        <div
          className="hero-columns"
          style={{
            display: 'flex',
            borderBottom: border,
          }}
        >

          {/* Left column — type */}
          <div style={{
            flex: '1 1 50%',
            padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px)',
          }}>
            <div
              data-line="0"
              style={{
                fontFamily: 'var(--font-afacad)',
                fontSize: 'clamp(60px, 11vw, 190px)',
                fontWeight: '600',
                lineHeight: '0.92',
                textTransform: 'uppercase',
                color: 'var(--lb-semantic-color-text-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              LAUNCH
            </div>
            <div
              data-line="1"
              style={{
                fontFamily: 'var(--font-afacad)',
                fontSize: 'clamp(60px, 11vw, 190px)',
                fontWeight: '600',
                lineHeight: '0.92',
                textTransform: 'uppercase',
                color: 'var(--lb-semantic-color-text-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              LIKE YOU
            </div>
            <div
              data-line="2"
              style={{
                fontFamily: 'var(--font-afacad)',
                fontSize: 'clamp(60px, 11vw, 190px)',
                fontWeight: '600',
                lineHeight: '0.92',
                textTransform: 'uppercase',
                color: 'var(--lb-semantic-color-text-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              MEAN IT.
            </div>
          </div>

          {/* Right column — Spline + manifesto */}
          <div style={{
            flex: '0 1 50%',
            padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: 'clamp(16px, 3vw, 32px)',
          }}>
            <SplineBox size="100%" />
            <Body size="small">
              {"Nobody cares about your brand if you don't. Nobody cares about brands and products that are like all the other ones. Nobody cares about brands that don't stand for anything. You aren't building for nobody. You're building for somebody."}
            </Body>
          </div>

        </div>{/* end flex row */}

        {/* Button row */}
        <div
          className="hero-button-row"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
          }}
        >
          <div style={{
            flex: '1 1 50%',
            padding: '20px clamp(16px, 3%, 48px)',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Body size="small">
              Brand and design systems for early-stage startups.
            </Body>
          </div>
          <div style={{ flex: '1 0 50%', display: 'flex' }}>
            <a
              href="#pricing"
              style={{
                width: '100%',
                backgroundColor: 'var(--lb-semantic-color-action-default)',
                color: 'var(--lb-semantic-color-text-inverse)',
                fontFamily: 'var(--font-albert-sans)',
                fontSize: '16px',
                fontWeight: '400',
                padding: '20px 24px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Plans &amp; Pricing
            </a>
          </div>
        </div>

      </Container>

      {/* Video section */}
      <Container>
        <div style={{
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 0, // Explicitly override any corner radius
        }}>
          <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
          <Script src="https://fast.wistia.com/embed/0zs6dabbwt.js" strategy="afterInteractive" />
          {/* @ts-ignore */}
          <wistia-player
            media-id="0zs6dabbwt"
            aspect="1.7777777777777777"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
             borderRadius: '0px !important', // Ensure player itself also has square corners
       
            }}
          />
        </div>
      </Container>

    </div>
  );
}