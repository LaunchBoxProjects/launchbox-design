'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Konnec', src: '/images/konnec.png' },
  { id: 2, title: 'Blue Dot', src: '/images/bluedot.png' },
  { id: 3, title: 'Pika', src: '/images/pika.png' },
  { id: 4, title: 'Purse', src: '/images/purse.png' },
];

const corners = [
  { x: -60, y: -60, rotation: -4 },
  { x: 60, y: -60, rotation: 4 },
  { x: -60, y: 60, rotation: 4 },
  { x: 60, y: 60, rotation: -4 },
];

function ProjectCard({ title, src }: { title: string; src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = '1';
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="project-card-inner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
      }}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 600px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
      />

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        fontFamily: 'var(--font-albert-sans)',
        fontSize: '13px',
        fontWeight: '400',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        zIndex: 1,
      }}>
        {title}
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');

      cards?.forEach((card, i) => {
        gsap.from(card, {
          x: corners[i].x,
          y: corners[i].y,
          rotation: corners[i].rotation,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
          delay: i * 0.08,
        });
      });

    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div
        ref={gridRef}
        className="project-grid"
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard
              title={project.title}
              src={project.src}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}