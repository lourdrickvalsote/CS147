'use client';

import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  decorative?: boolean;
  className?: string;
  level?: 1 | 2;
}

export default function SectionHeading({
  children,
  decorative = true,
  className = '',
  level = 1,
}: SectionHeadingProps) {
  const headingClasses = level === 1 ? 'section-heading' : 'section-subheading';
  const combinedClasses = `${headingClasses} ${className}`;

  const HeadingTag = level === 1 ? 'h2' : 'h3';

  return (
    <div className="relative inline-block">
      <HeadingTag className={combinedClasses}>{children}</HeadingTag>
      {decorative && (
        <div
          className="h-1 rounded-full mt-4 transition-all duration-500 ease-out"
          style={{
            backgroundColor: '#690B22',
            width: '80px',
            animation: 'expandLine 0.6s ease-out 0.3s both',
          }}
        />
      )}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes expandLine {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 80px;
              opacity: 1;
            }
          }
        `
      }} />
    </div>
  );
}
