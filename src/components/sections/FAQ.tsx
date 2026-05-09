'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/layout/Container';
import Display from '@/components/typography/Display';
import Body from '@/components/typography/Body';

const faqs = [
  {
    question: 'How often do you deliver designs?',
    answer: 'Designs are delivered in 48 hours or less. For more complex requests we will break them down together into 24-48 hour deliverables.',
  },
  {
    question: 'How can I pause the service?',
    answer: 'If you don\'t have enough work for a particular month you can pause using your dashboard in Stripe. If you pause, when you restart your billing cycle will pick up where you left off, and you can use the days you have remaining until the next cycle.',
  },
  {
    question: 'What tools do you use?',
    answer: 'Most design is completed in Figma. Branding in Figma and Affinity. Print and packaging in Affinity. Video and motion design in Resolve or Lottie Creator. 3D in Blender and Spline. Websites are built in Framer or Webflow. We are also offering component delivery to Storybook.',
  },
  {
    question: 'How do we work together?',
    answer: 'We create a shared workspace in ClickUp. ClickUp offers unlimited storage, screen recording, and chat, as well as kanban based task management. There is no cost to you.',
  },
  {
    question: 'What don\'t you do?',
    answer: 'We don\'t do 3D modelling, character animation, video production, video/audio post, or longer format print (such as annual reports). We can collaborate with other providers to help you execute on these kinds of projects.',
  },
  {
    question: 'What do you mean by brand and design systems?',
    answer: 'Our ultimate deliverable is a visual system that can be used by other designers, developers, media teams or AI agents while maintaining a high degree of fidelity and scalability. A brand system will mean your brand will look, feel and speak the same at every touch point. A design system does the same for UI/UX.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'As a rule, no. But you can sign up for two free weeks of service to make sure we work well together. No credit card required. After the two weeks you will be asked to choose a plan and add payment to move forward.',
  },
  {
    question: 'How does copyright work?',
    answer: 'The assets and source files we create are yours from day one.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isLast: boolean;
}

function FAQItem({ question, answer, isLast }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const border = '1px solid var(--lb-semantic-color-border-default)';

  const toggle = () => {
    const el = answerRef.current;
    const icon = iconRef.current;
    if (!el) return;

    if (!isOpen) {
      // Open
      gsap.set(el, { display: 'block' });
      gsap.from(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
      gsap.to(icon, {
        rotation: 45,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      // Close
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => gsap.set(el, { display: 'none' }),
      });
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      borderBottom: isLast ? 'none' : border,
    }}>
      {/* Question row */}
      <div
        onClick={toggle}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3%, 48px)',
          cursor: 'pointer',
          gap: '24px',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-afacad)',
          fontSize: 'clamp(18px, 2vw, 28px)',
          fontWeight: '600',
          textTransform: 'uppercase',
          color: 'var(--lb-semantic-color-text-primary)',
          letterSpacing: '0.02em',
        }}>
          {question}
        </div>

        {/* Plus/cross icon */}
        <div
          ref={iconRef}
          style={{
            flexShrink: 0,
            width: '32px',
            height: '32px',
            position: 'relative',
          }}
        >
          {/* Horizontal bar */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--lb-semantic-color-action-default)',
            transform: 'translateY(-50%)',
          }} />
          {/* Vertical bar */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '2px',
            height: '100%',
            backgroundColor: 'var(--lb-semantic-color-action-default)',
            transform: 'translateX(-50%)',
          }} />
        </div>
      </div>

      {/* Answer */}
      <div
        ref={answerRef}
        style={{
          display: 'none',
          overflow: 'hidden',
          padding: '0 clamp(16px, 3%, 48px) clamp(20px, 3vw, 32px)',
          maxWidth: '720px',
        }}
      >
        <Body size="regular">
          {answer}
        </Body>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Container>
      <div style={{
        padding: 'clamp(32px, 4vw, 60px) 0 0',
      }}>
        {/* Section heading */}
        <div style={{
          padding: '0 clamp(16px, 3%, 48px)',
          marginBottom: 'clamp(24px, 3vw, 48px)',
        }}>
          <Display as="h2" size="heading">
            Questions.
          </Display>
        </div>

        {/* FAQ items */}
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isLast={i === faqs.length - 1}
          />
        ))}
      </div>
    </Container>
  );
}