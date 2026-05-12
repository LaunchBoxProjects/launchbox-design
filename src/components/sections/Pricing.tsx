'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import Container from '@/components/layout/Container';
import Body from '@/components/typography/Body';
import CTAPair from '@/components/ui/CTAPair';

const plans = [
  {
    name: 'Ignite.',
    audience: 'Early Stage Founders',
    tagline: 'Raise the bar.',
    price: '$7999',
    frequency: 'One Time',
    stripeLink: 'https://buy.stripe.com/5kQ4gz5FJ9FCahl4ilbfO0y',
    description: 'Get started quickly with everything you need to raise and launch. A solid foundation delivered in 30 days. Get positive feedback from 3 investors, or we keep working.',
    features: [
      'Brand Design',
      'MVP UI/UX',
      'Pitch Deck',
      'Landing Page Design',
    ],
  },
  {
    name: 'Launch.',
    audience: 'Growing Startups',
    tagline: 'Branding built for scale.',
    price: '$4999',
    frequency: 'Per Month',
    stripeLink: 'https://buy.stripe.com/dR67w78cUeem0OA7sC',
    description: 'Scalable brand development and design for fast moving startups. Get everything you need to launch, from UI/UX and landing pages, to social media and pitch decks.',
    features: [
      'Unlimited design, 1 at a time',
      'Designs delivered in < 48hrs',
      'Senior human designers',
      '1/4 the cost of full-time',
    ],
  },
  {
    name: 'Scale.',
    audience: 'Incubators & Venture Studios',
    tagline: 'Agility and consistency.',
    price: '$8999',
    frequency: 'Per Month',
    stripeLink: 'https://buy.stripe.com/00w4gz6JNaJG6154ilbfO0B',
    description: 'A perfect package for incubators and holdcos with multiple brands under one roof. More bandwidth for your partners, one locus of responsibility, and world-class quality.',
    features: [
      'Unlimited brands, 3 designs at a time',
      'Designs delivered in < 48 hrs',
      'Multiple brands allowed',
      'Superior BMF and GTM branding',
    ],
  },
];

function Checkmark() {
  return (
    <div style={{
      width: '32px',
      height: '32px',
      backgroundColor: 'var(--lb-semantic-color-text-primary)',
      borderRadius: '2px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
        <path
          d="M1 5L5 9L13 1"
          stroke="var(--lb-semantic-color-text-inverse)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface PlanProps {
  plan: typeof plans[0];
  isMiddle?: boolean;
}

function PlanCard({ plan, isMiddle }: PlanProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const border = '1px solid var(--lb-semantic-color-border-default)';

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => {
      if (coverRef.current) {
        gsap.to(coverRef.current, {
          yPercent: -100,
          duration: 0.5,
          ease: 'power3.inOut',
        });
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (coverRef.current) {
      gsap.to(coverRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: 'back.out(1.4)',
        onComplete: () => setHovered(false),
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        borderRight: isMiddle ? border : 'none',
        borderLeft: isMiddle ? border : 'none',
      }}
    >
      {/* Pricing card — always underneath */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        <div style={{
          flex: 1,
          padding: 'clamp(32px, 4vw, 48px) clamp(16px, 3%, 40px)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Plan name */}
          <div style={{
            fontFamily: 'var(--font-afacad)',
            fontSize: 'clamp(24px, 3vw, 42px)',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: 'var(--lb-semantic-color-text-primary)',
            marginBottom: '16px',
          }}>
            {plan.name}
          </div>

          {/* Price */}
          <div style={{
            fontFamily: 'var(--font-afacad)',
            fontSize: 'var(--lb-primitives-font-size-2xl)',
            fontWeight: '700',
            color: 'var(--lb-semantic-color-text-primary)',
            lineHeight: '1',
            marginBottom: '8px',
          }}>
            {plan.price}
          </div>

          {/* Frequency */}
          <div style={{
            fontFamily: 'var(--font-albert-sans)',
            fontSize: '16px',
            fontWeight: '700',
            color: 'var(--lb-semantic-color-text-primary)',
            marginBottom: '8px',
          }}>
            {plan.frequency}
          </div>

          {/* Description */}
          <Body size="small">
            {plan.description}
          </Body>

          {/* Features */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            margin: '24px 0',
          }}>
            {plan.features.map((feature, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <Checkmark />
                <Body size="small">{feature}</Body>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <CTAPair
            primaryLabel="Get started"
            primaryHref={plan.stripeLink}
          />
        </div>
      </div>

      {/* Cover card — slides up on hover */}
      <div
        ref={coverRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: hovered
            ? 'var(--lb-semantic-color-action-default)'
            : 'var(--lb-semantic-color-surface-page)',
          padding: 'clamp(32px, 4vw, 48px) clamp(16px, 3%, 40px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-afacad)',
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: '700',
          textTransform: 'uppercase',
          color: hovered
            ? 'var(--lb-semantic-color-text-inverse)'
            : 'var(--lb-semantic-color-text-primary)',
          marginBottom: '24px',
          lineHeight: '1',
          transition: 'color 0.2s ease',
        }}>
          {plan.audience}
        </div>
        <div style={{
          width: '60px',
          borderTop: hovered
            ? '2px solid var(--lb-semantic-color-text-inverse)'
            : '2px solid var(--lb-semantic-color-border-default)',
          marginBottom: '24px',
          transition: 'border-color 0.2s ease',
        }} />
        <div style={{
          fontFamily: 'var(--font-afacad)',
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          fontWeight: '400',
          color: hovered
            ? 'var(--lb-semantic-color-text-inverse)'
            : 'var(--lb-semantic-color-text-primary)',
          fontStyle: 'italic',
          transition: 'color 0.2s ease',
        }}>
          {plan.tagline}
        </div>
      </div>

    </div>
  );
}

export default function Pricing() {
  return (
    <Container>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'stretch',
      }}>
        {plans.map((plan, i) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            isMiddle={i === 1}
          />
        ))}
      </div>
    </Container>
  );
}