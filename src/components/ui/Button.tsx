interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  children,
  onClick,
  fullWidth = false,
  variant = 'primary'
}: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <button
      onClick={onClick}
      style={{
        width: fullWidth ? '100%' : 'auto',
        backgroundColor: isPrimary
          ? 'var(--lb-semantic-color-action-default)'
          : 'var(--lb-semantic-color-surface-page)',
        color: isPrimary
          ? 'var(--lb-semantic-color-text-inverse)'
          : 'var(--lb-semantic-color-action-default)',
        border: isPrimary
          ? 'none'
          : '1px solid var(--lb-semantic-color-action-default)',
        fontFamily: 'var(--font-albert-sans)',
        fontSize: '16px',
        fontWeight: '400',
        padding: '20px 24px',
        cursor: 'pointer',
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </button>
  );
}