'use client';

import { useRef } from 'react';
import gsap from 'gsap';

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  fullWidth?: boolean;
}

export default function CTAButton({
  label,
  href,
  variant = 'primary',
  icon = true,
  fullWidth = false,
}: CTAButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const isPrimary = variant === 'primary';

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      backgroundColor: isPrimary
        ? 'var(--lb-semantic-color-text-primary)'
        : 'var(--lb-semantic-color-action-default)',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      backgroundColor: isPrimary
        ? 'var(--lb-semantic-color-action-default)'
        : 'var(--lb-semantic-color-surface-page)',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  return (
    <a
        ref={btnRef}
        href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: fullWidth ? 'center' : undefined,
        gap: '12px',
        width: fullWidth ? '100%' : undefined,
        backgroundColor: isPrimary
          ? 'var(--lb-semantic-color-action-default)'
          : 'var(--lb-semantic-color-surface-page)',
        color: isPrimary
          ? 'var(--lb-semantic-color-text-inverse)'
          : 'var(--lb-semantic-color-text-primary)',
        border: 'none',
        borderTop: '1px solid var(--lb-semantic-color-border-default)',
        borderRight: isPrimary
          ? 'none'
          : '1px solid var(--lb-semantic-color-border-default)',
        fontFamily: 'var(--font-albert-sans)',
        fontSize: '16px',
        fontWeight: '400',
        padding: '16px 24px',
        cursor: 'pointer',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      {icon && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 13L13 7M13 7H8M13 7V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}