'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/layout/Container';
import Display from '@/components/typography/Display';
import Body from '@/components/typography/Body';

export default function Hero() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
        delay: 0.3
      });
    });
    return () => ctx.revert();
  }, []);

  const border = '1px solid var(--lb-semantic-color-border-default)';

  return (
    <div>

      {/* Hero type section */}
      <Container>
        <div style={{
          display: 'flex',
          borderBottom: border,
        }}>
          {/* Left column — type */}
          <div style={{
            flex: '1 1 50%',
            padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px)',
            borderRight: border,
          }}>
            <div style={{ overflow: 'hidden' }}>
              <div ref={line1Ref}>
                <Display as="h1" size="hero">LAUNCH</Display>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div ref={line2Ref}>
                <Display as="h1" size="hero">LIKE YOU</Display>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div ref={line3Ref}>
                <Display as="h1" size="hero">MEAN IT.</Display>
              </div>
            </div>
          </div>

          {/* Right column — empty */}
          <div style={{ flex: '0 1 50%' }} />
        </div>

        {/* Button row */}
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
          <div style={{
            flex: '1 1 50%',
            padding: '20px clamp(16px, 3%, 48px)',
            display: 'flex',
            alignItems: 'center',
            borderRight: border,
          }}>
            <Body size="small">
              Brand and design systems for early-stage startups.
            </Body>
          </div>
          <div style={{
            flex: '1 0 50%',
            display: 'flex',
          }}>
            <button style={{
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
            }}>
              Plans &amp; Pricing
            </button>
          </div>
        </div>
      </Container>

      {/* Video section */}
      <Container>
        <div style={{
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <iframe
            src="https://www.youtube.com/embed/vV8mY9MsbeE?autoplay=1&mute=1&loop=1&playlist=vV8mY9MsbeE"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </Container>

    </div>
  );
}