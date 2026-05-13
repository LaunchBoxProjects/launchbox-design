'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';

gsap.registerPlugin(ScrollTrigger);

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
})
.from(positioningRef.current, {
  yPercent: 30,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
}, '-=0.4')
.from(absoluteRef.current, {
  yPercent: 20,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
}, '-=0.6')

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
              fontFamily: 'Afacad, sans-serif',
              fontWeight: '700',
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
              fontFamily: 'Afacad, sans-serif',
              fontWeight: '700',
              lineHeight: '0.9',
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

        {/* Square */}
        <div style={{ height: '48px' }} />
        <div
          ref={boxRef}
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--lb-semantic-color-action-default)',
            margin: '0 auto',
            boxShadow: '0px 71px 80px 0px #0000001C, 0px 46.02px 46.85px 0px #00000015, 0px 27.35px 25.48px 0px #00000011, 0px 14.2px 13px 0px #0000000E, 0px 5.79px 6.52px 0px #0000000B, 0px 1.31px 3.15px 0px #00000007',
          }}
        />
        <div style={{ height: '48px' }} />

        {/* Body copy */}
        <div
          className="ap-copy-row"
          style={{
            display: 'flex',
            gap: '120px',
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0 clamp(16px, 3%, 48px) clamp(32px, 4vw, 60px)',
          }}
        >
          <div ref={copyLeftRef} style={{ flex: '1 1 0', textAlign: 'justify', hyphens: 'auto' }}>
            <Body size="regular">
              Investors don't fund the status quo. Customers don't switch
              to the same old thing. AI and templates have raised the floor.
              To win you need to know the needs and motivations of your
              audience and embed them in the DNA of everything you do.
            </Body>
          </div>
          <div ref={copyRightRef} style={{ flex: '1 1 0', textAlign: 'justify', hyphens: 'auto' }}>
            <Body size="regular">
              This isn't simply a framework you apply. It's what happens
              at the intersection of intention, genuine empathy, and
              commitment to craft. Put simply, it's doing things that
              show you give a shit.
            </Body>
            <Body size="regular" as="p">
              That's Absolute Positioning.
            </Body>
          </div>
        </div>

      </div>
    </Container>
  );
}