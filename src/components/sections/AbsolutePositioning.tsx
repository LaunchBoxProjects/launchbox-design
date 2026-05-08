'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';

gsap.registerPlugin(ScrollTrigger);

export default function AbsolutePositioning() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const copyLeftRef = useRef<HTMLDivElement>(null);
  const copyRightRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from([copyLeftRef.current, copyRightRef.current], {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: copyLeftRef.current,
          start: 'top 85%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const border = '1px solid var(--lb-semantic-color-border-default)';

  return (
    <Container>
      <div ref={sectionRef}>

       {/* Display type */}
<div style={{
  padding: 'clamp(24px, 4vw, 60px) clamp(16px, 3%, 48px) 0',
}}>
  <div style={{
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
  }}>
    ABSOLUTE
  </div>
  <div style={{
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
  }}>
    POSITIONING
  </div>
</div>

{/* Square */}
<div style={{
  height: '48px',
}} />
<div
  ref={boxRef}
  style={{
    width: '120px',
    height: '120px',
    backgroundColor: 'var(--lb-semantic-color-action-default)',
    margin: '0 auto',
  }}
/>
<div style={{ height: '48px' }} />

{/* Body copy */}
<div style={{
  display: 'flex',
  gap: '120px',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 clamp(16px, 3%, 48px) clamp(32px, 4vw, 60px)',
  flex: '1 1 0', 
  textAlign: 'justify',
  hyphens: 'auto',
}}>
  <div ref={copyLeftRef} style={{ flex: '1 1 0' }}>
    <Body size="regular">
      Investors don't fund the status quo. Customers don't switch
      to the same old thing. AI and templates have raised the floor.
      To win you need to know the needs and motivations of your
      audience and embed them in the DNA of everything you do.
    </Body>
  </div>
  <div ref={copyRightRef} style={{ flex: '1 1 0' }}>
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