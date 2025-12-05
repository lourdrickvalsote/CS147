import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClasses = `${baseClasses} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  }`;

  // If href is provided, render as Link or anchor
  if (href) {
    // External link
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    // Internal link
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
