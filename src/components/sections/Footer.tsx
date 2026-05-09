'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--lb-semantic-color-text-primary)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div className="inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        padding: 'clamp(32px, 4vw, 60px) clamp(16px, 3%, 48px)',
      }}>

        {/* Logo */}
        <Image
          src="/lb_logo.png"
          alt="LaunchBox"
          width={200}
          height={40}
          style={{
            objectFit: 'contain',
            opacity: 0.9,
          }}
        />

        {/* Copyright */}
        <div style={{
          fontFamily: 'var(--font-albert-sans)',
          fontSize: '13px',
          color: 'var(--lb-semantic-color-text-inverse)',
          opacity: 0.4,
          letterSpacing: '0.05em',
        }}>
          {'© '}{new Date().getFullYear()}{' LaunchBox.Design'}
        </div>

      </div>
    </footer>
  );
}