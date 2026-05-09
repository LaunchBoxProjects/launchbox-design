'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';

const projects = [
  { id: 1, title: 'Kossel', color: '#F5C800' },
  { id: 2, title: 'Blue Dot', color: '#C4C8E2' },
  { id: 3, title: 'Pika', color: '#E8E0D5' },
  { id: 4, title: 'Purse', color: '#1A5F7A' },
];

// ADD THIS
const corners = [
  { x: -60, y: -60, rotation: -4 },
  { x: 60, y: -60, rotation: 4 },
  { x: -60, y: 60, rotation: 4 },
  { x: 60, y: 60, rotation: -4 },
];

interface ProjectCardProps {
  title: string;
  color: string;
}

function ProjectCard({ title, color }: ProjectCardProps) {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
  aspectRatio: '16 / 9',
  backgroundColor: color,
  overflow: 'hidden',
  cursor: 'pointer',
  filter: 'saturate(0.3)',
  transition: 'filter 0.4s ease',
      }}
    >
      {/* Still placeholder */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-afacad)',
          fontSize: 'clamp(24px, 4vw, 48px)',
          fontWeight: '700',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.2)',
          letterSpacing: '0.05em',
        }}>
          {title}
        </span>
      </div>

      {/* Video — hidden until hover */}
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
      >
        {/* Drop video src here when ready */}
        {/* <source src={`/videos/${title.toLowerCase()}.mp4`} type="video/mp4" /> */}
      </video>

      {/* Project title — bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        fontFamily: 'var(--font-albert-sans)',
        fontSize: '13px',
        fontWeight: '400',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.5)',
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
        {projects.map((project, i) => (
          <div key={project.id} className="project-card">
            <ProjectCard
              title={project.title}
              color={project.color}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}