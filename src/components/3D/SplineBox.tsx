'use client';

import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplineBoxProps {
  size?: number | string;
  scrollDriven?: boolean;
}

export default function SplineBox({
  size = 300,
  scrollDriven = false,
}: SplineBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
  
    const app = new Application(canvasRef.current);
    appRef.current = app;
  
    let scrollRotation = 0;
    let tiltOffset = { x: 0, y: 0 };
  
    app.load('https://prod.spline.design/wg4sglIdwdIarRix/scene.splinecode')
      .then(() => {
        const obj = app.findObjectByName('Cube');
        if (!obj) return;
  
        // Scroll — both platforms, 1:1 locked
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            scrollRotation = self.progress * Math.PI * 0.5;
            obj.rotation.y = scrollRotation + tiltOffset.y;
            obj.rotation.x = tiltOffset.x;
          }
        });
  
        // Device orientation — mobile only, additive tilt
        const handleOrientation = (e: DeviceOrientationEvent) => {
          tiltOffset.y = ((e.gamma ?? 0) / 90) * 0.2;
          tiltOffset.x = ((e.beta ?? 0) / 180) * 0.15;
          obj.rotation.y = scrollRotation + tiltOffset.y;
          obj.rotation.x = tiltOffset.x;
        };
  
        window.addEventListener('deviceorientation', handleOrientation);
  
        return () => {
          window.removeEventListener('deviceorientation', handleOrientation);
        };
      });
  
    return () => {
      app.dispose?.();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [scrollDriven]);

  return (
    <div
      ref={containerRef}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        aspectRatio: '1 / 1',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}