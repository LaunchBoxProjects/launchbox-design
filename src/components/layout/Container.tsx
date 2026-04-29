// src/components/layout/Container.tsx

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <section style={{
      width: '100%',
      borderBottom: '1px solid var(--lb-semantic-color-border-default)',
    }}>
      <div className="inner">
        {children}
      </div>
    </section>
  );
}
