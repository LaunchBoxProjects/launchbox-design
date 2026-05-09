'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Display from '@/components/typography/Display';
import Body from '@/components/typography/Body';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    word: 'Distinctive',
    copy: 'Design that separates you from the noise. Every brand decision — visual, verbal, structural — is made to create clear competitive distance, not blend in.',
  },
  {
    word: 'Intentional',
    copy: 'Nothing is arbitrary. Every choice connects back to your goals, your audience, the problem you\'re solving, and even the systems you use.',
  },
  {
    word: 'Systemic',
    copy: 'The systems, patterns, and design language we establish are built to scale with your product, process, and team — so you can move fast without breaking anything.',
  },
  {
    word: 'Shared',
    copy: 'When positioning is well communicated, the right audience doesn\'t need a demo. They need to know you exist. Resonance isn\'t a launch event, it\'s a choice that you make.',
  },
];

export default function DISS() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cells = sectionRef.current?.querySelectorAll('.diss-cell');

      cells?.forEach((cell, i) => {
        gsap.from(cell, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: cell,
            start: 'top 85%',
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const border = '1px solid var(--lb-semantic-color-border-default)';
  const dottedBorder = '1px dotted var(--lb-semantic-color-border-default)';

  return (
    <Container>
      <div
        ref={sectionRef}
        className="diss-grid"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="diss-cell"
            style={{
              padding: 'clamp(32px, 4vw, 60px) clamp(16px, 3%, 48px)',
            }}
          >
            <Display as="h3" size="subheading">
              {item.word}
            </Display>
            <div style={{
              borderTop: dottedBorder,
              margin: '16px 0 20px',
            }} />
            <Body size="small">
              {item.copy}
            </Body>
          </div>
        ))}
      </div>
      
    </Container>
  );
}