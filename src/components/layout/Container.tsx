'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
}

export default function Container({ children, id }: ContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftBorderRef = useRef<HTMLDivElement>(null);
  const rightBorderRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<HTMLDivElement>(null);
  const trRef = useRef<HTMLDivElement>(null);
  const blRef = useRef<HTMLDivElement>(null);
  const brRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Border draw down
      gsap.from([leftBorderRef.current, rightBorderRef.current], {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      });

      // Selection handles — appear then fade
      const handles = [tlRef.current, trRef.current, blRef.current, brRef.current];
      
      gsap.set(handles, { opacity: 0, scale: 0 });
      
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      })
      .to(handles, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: 'back.out(2)',
        stagger: 0.05,
        delay: 0.4,
      })
      .to(handles, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.in',
        stagger: 0.03,
        delay: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const borderColor = 'var(--lb-semantic-color-border-default)';
  const handleStyle: React.CSSProperties = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--lb-semantic-color-action-default)',
    border: '2px solid white',
    zIndex: 10,
    pointerEvents: 'none',
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        width: '100%',
        borderBottom: `1px solid ${borderColor}`,
        position: 'relative',
      }}
    >
      <div className="inner" style={{ position: 'relative' }}>

        {/* Left border */}
        <div
          ref={leftBorderRef}
          style={{
            position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '100%',
              backgroundColor: borderColor,
              transformOrigin: 'top',
              zIndex: 10,
          }}
        />

        {/* Right border */}
        <div
          ref={rightBorderRef}
          style={{
            position: 'absolute',
              top: 0,
              right: 0,
              width: '1px',
              height: '100%',
              backgroundColor: borderColor,
              transformOrigin: 'top',
              zIndex: 10,
          }}
        />

        {/* Selection handles */}
        <div ref={tlRef} style={{ ...handleStyle, top: '-5px', left: '-5px' }} />
        <div ref={trRef} style={{ ...handleStyle, top: '-5px', right: '-5px' }} />
        <div ref={blRef} style={{ ...handleStyle, bottom: '-5px', left: '-5px' }} />
        <div ref={brRef} style={{ ...handleStyle, bottom: '-5px', right: '-5px' }} />

        {children}
      </div>
    </section>
  );
}