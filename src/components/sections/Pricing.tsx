import Image from 'next/image';
import Container from '@/components/layout/Container';

const plans = [
  {
    name: 'Ignite.',
    illustration: '/images/frog-tadpole.png',
    audience: 'Early Stage\nFounders',
    tagline: 'Foundational brand & design.',
  },
  {
    name: 'Launch.',
    illustration: '/images/frog-juvenile.png',
    audience: 'Growing\nStartups',
    tagline: 'Scalable systems.',
  },
  {
    name: 'Scale.',
    illustration: '/images/frog-mature.png',
    audience: 'Incubators &\nVenture Studios',
    tagline: 'Agility and consistency.',
  },
];

function PlanPanel({ plan }: { plan: typeof plans[0] }) {
  return (
    <article className="pricing-plan-panel">
      <div>
        <h3 className="pricing-plan-audience">
          {plan.audience}
        </h3>
        <p className="pricing-plan-tagline">
          {plan.tagline}
        </p>
      </div>

      <div className="pricing-plan-image">
        <Image
          src={plan.illustration}
          alt={plan.name}
          fill
          sizes="(max-width: 600px) 72vw, 28vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <Container id="pricing">
      <div className="pricing-editorial">
        <div className="pricing-title-rail">
          <h2>Plans &amp; Prices</h2>
        </div>

        <div className="pricing-plan-grid">
          {plans.map((plan) => (
            <PlanPanel key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      <div className="pricing-manifesto">
        WE MEET YOU WHERE YOU&rsquo;RE AT AND HELP GET YOU TO WHERE YOU&rsquo;RE GOING
      </div>
    </Container>
  );
}
