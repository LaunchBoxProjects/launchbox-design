'use client';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import CTAPair from '@/components/ui/CTAPair';

const plans = [
  {
    name: 'Ignite.',
    illustration: '/images/frog-tadpole.png',
    audience: 'Early Stage\nFounders',
    coverCopy: 'Foundational brand & design.',
    tagline: 'Raise the bar.',
    price: '$7999',
    frequency: 'One Time',
    stripeLink: 'https://buy.stripe.com/5kQ4gz5FJ9FCahl4ilbfO0y',
    description: 'Brand, MVP UI, deck, and landing page in 30 days. Investor-ready, or we keep working.',
    features: [
      'Brand System',
      'MVP UI/UX',
      'Pitch Deck',
      'Landing Page',
    ],
  },
  {
    name: 'Launch.',
    illustration: '/images/frog-juvenile.png',
    audience: 'Growing\nStartups',
    coverCopy: 'Scalable systems.',
    tagline: 'Branding built for scale.',
    price: '$4999',
    frequency: 'Per Month',
    stripeLink: 'https://buy.stripe.com/dR67w78cUeem0OA7sC',
    description: 'Ongoing brand, UI, deck, and launch design for fast-moving startup teams.',
    features: [
      'Unlimited Design',
      '< 48hr Delivery',
      'Senior Designers',
      '1/4 Full-Time Cost',
    ],
  },
  {
    name: 'Scale.',
    illustration: '/images/frog-mature.png',
    audience: 'Incubators &\nVenture Studios',
    coverCopy: 'Agility and consistency.',
    tagline: 'Agility and consistency.',
    price: '$8999',
    frequency: 'Per Month',
    stripeLink: 'https://buy.stripe.com/00w4gz6JNaJG6154ilbfO0B',
    description: 'Design bandwidth and brand-system consistency across multiple portfolio companies.',
    features: [
      'Unlimited Brands',
      '3 Designs At A Time',
      '< 48hr Delivery',
      'BMF & GTM Branding',
    ],
  },
];

function Checkmark() {
  return (
    <div style={{
      width: '26px',
      height: '26px',
      backgroundColor: 'var(--lb-semantic-color-text-primary)',
      borderRadius: '2px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="12" height="10" viewBox="0 0 14 11" fill="none">
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
  illustration: string;
  isMiddle?: boolean;
}

function PlanCard({ plan, illustration, isMiddle }: PlanProps) {
  const border = '1px solid var(--lb-semantic-color-border-default)';

  return (
    <div
      className="pricing-plan-card"
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
          padding: 'clamp(22px, 2.6vw, 34px) clamp(14px, 2.4vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Plan name */}
          <div style={{
            fontFamily: 'var(--font-ut-glorious)',
            fontSize: 'clamp(22px, 2.3vw, 34px)',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: 'var(--lb-semantic-color-text-primary)',
            marginBottom: '8px',
          }}>
            {plan.name}
          </div>

          {/* Price */}
          <div style={{
            fontFamily: 'var(--font-ut-glorious)',
            fontSize: 'clamp(48px, 5vw, 64px)',
            fontWeight: '700',
            color: 'var(--lb-semantic-color-text-primary)',
            lineHeight: '1',
            marginBottom: '4px',
          }}>
            {plan.price}
          </div>

          {/* Frequency */}
          <div style={{
            fontFamily: 'var(--font-libertinus-serif)',
            fontSize: '16px',
            fontWeight: '700',
            color: 'var(--lb-semantic-color-text-primary)',
            marginBottom: '8px',
          }}>
            {plan.frequency}
          </div>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-libertinus-serif)',
            fontSize: 'clamp(14px, 1.1vw, 16px)',
            lineHeight: '1.25',
            color: 'var(--lb-semantic-color-text-primary)',
          }}>
            {plan.description}
          </p>

          {/* Features */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            margin: '16px 0 0',
          }}>
            {plan.features.map((feature, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <Checkmark />
                <span style={{
                  fontFamily: 'var(--font-libertinus-serif)',
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  lineHeight: '1.15',
                  color: 'var(--lb-semantic-color-text-primary)',
                }}>
                  {feature}
                </span>
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
        className="pricing-cover-card"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--lb-semantic-color-surface-page)',
          cursor: 'pointer',
        }}
      >
        <div>
          <h3 className="pricing-cover-audience">
            {plan.audience}
          </h3>
          <p className="pricing-cover-copy">
            {plan.coverCopy}
          </p>
        </div>

        <div className="pricing-cover-image" style={{ position: 'relative' }}>
          <Image
            key={illustration}
            src={illustration}
            alt={plan.name}
            fill
            sizes="(max-width: 600px) 72vw, 28vw"
            style={{
              objectFit: 'contain',
              opacity: 0.85,
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default function Pricing() {
  return (
    <Container id="pricing">
      <div className="pricing-editorial">
        <div className="pricing-title-rail">
          <h2>Plans &amp; Prices</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              illustration={plan.illustration}
              isMiddle={i === 1}
            />
          ))}
        </div>
      </div>

      <div className="pricing-manifesto">
        WE MEET YOU WHERE YOU&rsquo;RE AT AND HELP GET YOU TO WHERE YOU&rsquo;RE GOING
      </div>
    </Container>
  );
}
