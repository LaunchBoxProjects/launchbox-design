'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AbsolutePositioning() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const absoluteRef = useRef<HTMLDivElement>(null);
  const positioningRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const copyLeftRef = useRef<HTMLDivElement>(null);
  const copyRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,  // trigger on the square, not the section
          start: 'top 95%',
        }
      })
        .from(boxRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.2)',
        });

      // Animate POSITIONING first (closest to square), then ABSOLUTE
      [positioningRef.current, absoluteRef.current].forEach((el, i) => {
        if (!el) return;
        const split = new SplitText(el, { type: 'chars' });
        const center = (split.chars.length - 1) / 2;

        const sorted = [...split.chars].sort((a, b) => {
          const distA = Math.abs(split.chars.indexOf(a) - center);
          const distB = Math.abs(split.chars.indexOf(b) - center);
          return distA - distB;
        });

        gsap.from(sorted, {
          opacity: 0,
          yPercent: 60,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.03,
          delay: i * 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div ref={sectionRef}>

        {/* Display type */}
        <div style={{
          padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px) 0',
        }}>
          <div
            ref={absoluteRef}
            style={{
              fontFamily: 'var(--font-ut-glorious)',
              fontWeight: '500',
              lineHeight: '0.9',
              color: 'var(--lb-semantic-color-text-primary)',
              textTransform: 'uppercase',
              fontSize: '20vw',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              width: '100%',
              display: 'block',
            }}
          >
            ABSOLUTE
          </div>
          <div
            ref={positioningRef}
            style={{
              fontFamily: 'var(--font-ut-glorious)',
              fontWeight: '600',
              lineHeight: '0.6',
              color: 'var(--lb-semantic-color-text-primary)',
              textTransform: 'uppercase',
              fontSize: '15vw',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              width: '100%',
              display: 'block',
            }}
          >
            POSITIONING
          </div>
        </div>

        {/* Body copy + square (single row; stacks on mobile) */}
        <div
          className="ap-copy-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '120px',
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '48px clamp(16px, 3%, 48px) clamp(32px, 4vw, 60px)',
          }}
        >
          <div
            ref={copyLeftRef}
            className="ap-copy-col"
            style={{ flex: '1 1 0', textAlign: 'justify', hyphens: 'auto' }}
          >
            <Body size="small">
              Investors don't fund the status quo. Customers don't switch
              to the same old thing. AI and templates have raised the floor.
              To win you need to know the needs and motivations of your
              audience and embed them in the DNA of everything you do.
            </Body>
          </div>
          <div
            ref={boxRef}
            className="ap-copy-square"
            style={{
              width: '80px',
              height: '80px',
              flexShrink: 0,
              backgroundColor: 'var(--lb-semantic-color-action-default)',
              boxShadow: '0px 71px 80px 0px #0000001C, 0px 46.02px 46.85px 0px #00000015, 0px 27.35px 25.48px 0px #00000011, 0px 14.2px 13px 0px #0000000E, 0px 5.79px 6.52px 0px #0000000B, 0px 1.31px 3.15px 0px #00000007',
            }}
          />
          <div
            ref={copyRightRef}
            className="ap-copy-col"
            style={{ flex: '1 1 0', textAlign: 'justify', hyphens: 'auto' }}
          >
            <Body size="small">
              This isn't simply a framework you apply. It's what happens
              at the intersection of intention, genuine empathy, and
              commitment to craft. Put simply, it's doing things that
              show you give a shit.
            </Body>
            <Body size="small" as="p">
              That's Absolute Positioning.
            </Body>
          </div>
        </div>

      </div>
    </Container>
  );
}