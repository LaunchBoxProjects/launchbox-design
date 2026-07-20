'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';
import Script from 'next/script';

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
            position: 'relative',
            borderBottom: border,
          }}
        >

          {/* Left column — type */}
          <div
            className="hero-type"
            style={{
            flex: '1 1 50%',
            padding: 'clamp(16px, 2vw, 42px) clamp(16px, 2%, 24px)',
          }}>
            <div
              data-line="0"
              style={{
                fontFamily: 'var(--font-ut-glorious)',
                fontSize: 'clamp(120px, 18vw, 260px)',
                fontWeight: '600',
                lineHeight: '0.8',
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
                fontFamily: 'var(--font-ut-glorious)',
                fontSize: 'clamp(120px, 18vw, 260px)',
                fontWeight: '600',
                lineHeight: '0.8',
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
                fontFamily: 'var(--font-ut-glorious)',
                fontSize: 'clamp(120px, 18vw, 260px)',
                fontWeight: '600',
                lineHeight: '0.8',
                textTransform: 'uppercase',
                color: 'var(--lb-semantic-color-text-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              MEAN IT.
            </div>
          </div>

          {/* Right column — manifesto */}
          <div
            className="hero-manifesto"
            style={{
            flex: '0 1 50%',
            padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px)',
            display: 'flex',
            alignItems: 'flex-end',
            
          }}>
            <div style={{
              border: '1px solid var(--lb-semantic-color-border-default)',
              padding: '16px',
            }}>
            <Body size="small">
              {"Nobody cares about brands that don't stand for anything . But you aren't building for nobody. You're building for somebody."}
            </Body>
            </div>
          </div>

          <div
            className="hero-mark"
            style={{
              position: 'absolute',
              top: 'clamp(16px, 2vw, 42px)',
              right: 'clamp(16px, 3%, 48px)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M70.7139 1.03223H71.2246C71.6527 1.03223 72 1.36958 72 1.78613V47.4482C72 47.5463 71.9796 47.6443 71.9404 47.7363C71.9011 47.8287 71.8441 47.9119 71.7725 47.9814L48.29 70.8115C48.1448 70.9527 47.9475 71.0321 47.7422 71.0322H0.775391C0.674477 71.0322 0.573229 71.0118 0.478516 70.9736C0.289195 70.8972 0.138008 70.7505 0.0595703 70.5664C0.020429 70.4744 0 70.3763 0 70.2783V24.6172C0 24.417 0.0822145 24.2253 0.227539 24.084L23.71 1.25391C23.7815 1.18417 23.8668 1.12812 23.9619 1.08984C24.0564 1.05185 24.1571 1.03229 24.2578 1.03223H24.75V0H70.7139V1.03223ZM24.5791 48.2021L2.64648 69.5254H7.16406L29.0967 48.2021H24.5791ZM29.6445 48.2021L7.71191 69.5254H13.0508L34.9844 48.2021H29.6445ZM35.5322 48.2021L13.5986 69.5254H18.9385L40.8711 48.2021H35.5322ZM41.4199 48.2021L19.4863 69.5254H24.8252L46.7588 48.2021H41.4199ZM47.3066 48.2021L25.374 69.5254H30.7129L52.6465 48.2021H47.3066ZM53.1943 48.2021L31.2607 69.5254H36.6006L58.5332 48.2021H53.1943ZM59.082 48.2021L37.1484 69.5254H42.4883L64.4209 48.2021H59.082ZM64.9688 48.2021L43.0361 69.5254H47.4209L69.3535 48.2021H64.9688ZM1.5498 64.0527V68.46L23.4834 47.1357V42.7295L1.5498 64.0527ZM1.5498 58.3145V63.5205L23.4834 42.1963V36.9902L1.5498 58.3145ZM1.5498 52.5752V57.7812L23.4834 36.457V31.251L1.5498 52.5752ZM1.5498 46.8359V52.042L23.4834 30.7178V25.5117L1.5498 46.8359ZM25.0332 46.6074V46.6943H70.4502V46.6074H25.0332ZM1.5498 41.0967V46.3027L23.4834 24.9795V19.7734L1.5498 41.0967ZM1.5498 35.3574V40.5645L23.4834 19.2402V14.0342L1.5498 35.3574ZM1.5498 29.6191V34.8252L23.4834 13.502V8.29492L1.5498 29.6191ZM1.5498 24.9287V29.0869L23.4834 7.7627V3.60449L1.5498 24.9287Z" fill="#EF2C60" />
            </svg>
          </div>

          <div
            className="hero-stamp"
            style={{
              position: 'absolute',
              top: '50%',
              left: '45%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--lb-semantic-color-action-default)',
              padding: '8px 16px',
              zIndex: 10,
              pointerEvents: 'none',
              boxShadow: '0px 28px 32px 0px #0000001A, 0px 18px 20px 0px #00000014, 0px 10px 12px 0px #00000010, 0px 5px 6px 0px #0000000C, 0px 2px 3px 0px #00000008, 0px 1px 1px 0px #00000006',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-bungee-inline)',
              fontSize: 'clamp(32px, 3vw, 42px)',
              color: 'var(--lb-semantic-color-text-inverse)',
            }}>
              LaunchBox
            </span>
          </div>

        </div>{/* end flex row */}

        {/* Button row */}
        <div
          className="hero-button-row"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
          }}
        >
          <div className="hero-subhead-cell" style={{
            flex: '1 1 50%',
            minWidth: 0,
            padding: '18px clamp(16px, 3%, 48px)',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Body as="span">
              Brand and design systems for early-stage startups.
            </Body>
          </div>
          <div className="hero-pricing-button-cell" style={{ flex: '1 1 50%', minWidth: 0, display: 'flex' }}>
            <a
              href="#pricing"
              className="hero-pricing-button"
              style={{
                width: '100%',
                backgroundColor: 'var(--lb-semantic-color-action-default)',
                color: 'var(--lb-semantic-color-text-inverse)',
                fontFamily: 'var(--font-ut-glorious)',
                fontSize: 'clamp(24px, 2.4vw, 38px)',
                fontWeight: '400',
                padding: '18px 24px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                minWidth: 0,
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
            autoplay
            muted
            silent-autoplay="true"
            playsinline="true"
            preload="auto"
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
