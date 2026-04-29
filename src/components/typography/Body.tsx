// src/components/typography/Body.tsx

interface BodyProps {
  children: React.ReactNode;
  size?: 'large' | 'regular' | 'small';
  as?: 'p' | 'span' | 'div' | 'li';
}

export default function Body({
  children,
  size = 'regular',
  as: Tag = 'p'
}: BodyProps) {
  return (
    <Tag style={{
      fontFamily: 'var(--font-albert-sans)',
      fontSize: `var(--lb-semantic-typography-body-${size}-font-sizes)`,
      fontWeight: `var(--lb-semantic-typography-body-${size}-font-weights)`,
      lineHeight: `var(--lb-semantic-typography-body-${size}-line-heights)`,
      color: 'var(--lb-semantic-color-text-primary)',
    }}>
      {children}
    </Tag>
  );
}