import CTAButton from './CTAButton';

interface CTAPairProps {
  primaryLabel?: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTAPair({
  primaryLabel = 'Get started',
  primaryHref,
  secondaryLabel = 'Chat with us',
  secondaryHref = 'https://cal.com/neilmcbean/30-min-chitchat',
}: CTAPairProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
    }}>
      <CTAButton
        label={secondaryLabel}
        href={secondaryHref}
        variant="secondary"
        icon={false}
      />
      <CTAButton
        label={primaryLabel}
        href={primaryHref}
        variant="primary"
        icon={true}
      />
    </div>
  );
}