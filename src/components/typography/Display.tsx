interface DisplayProps {
  children: React.ReactNode;
  size?: 'hero' | 'section' | 'heading' | 'subheading';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
}

const sizeClamp: Record<string, string> = {
  hero:       'clamp(60px, 12vw, 190px)',
  section:    'clamp(48px, 10vw, 96px)',
  heading:    'clamp(32px, 6vw, 60px)',
  subheading: 'clamp(24px, 4vw, 42px)',
};

export default function Display({ 
  children, 
  size = 'heading',
  as: Tag = 'h2'
}: DisplayProps) {
  return (
    <Tag style={{
      fontFamily: 'var(--font-afacad)',
      fontSize: sizeClamp[size],
      fontWeight: `var(--lb-semantic-typography-display-${size}-font-weights)`,
      lineHeight: '0.75',
      textTransform: 'uppercase',
      color: 'var(--lb-semantic-color-text-primary)',
      margin: 0,
    }}>
      {children}
    </Tag>
  );
}