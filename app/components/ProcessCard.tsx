'use client'

import { getImagePath } from '@/app/lib/getBasePath'
import { useState } from 'react'

interface ProcessCardProps {
  title: string
  description: string
  image: string
  tags: Array<{
    label: string
    href?: string
  }>
}

export default function ProcessCard({
  title,
  description,
  image,
  tags,
}: ProcessCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(105, 11, 34, 0.08)',
        boxShadow: isHovered
          ? 'var(--shadow-heavy)'
          : 'var(--shadow-medium)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with enhanced styling */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '220px',
          overflow: 'hidden',
          background: 'var(--color-warm-beige)',
        }}
      >
        <img
          src={getImagePath(image)}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        {/* Gradient overlay for better text contrast */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'transparent',
            opacity: isHovered ? 0.8 : 0.4,
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>

      {/* Content Container */}
      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'DM Serif Text, serif',
            fontSize: '22px',
            fontWeight: '700',
            color: 'var(--color-burgundy)',
            marginBottom: '0.875rem',
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '16px',
            color: 'var(--color-charcoal)',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            flex: 1,
            letterSpacing: '-0.01em',
          }}
        >
          {description}
        </p>

        {/* Tags/Links with refined styling */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))', gap: '0.5rem' }}>
          {tags.map((tag, index) => {
            const isUnderConstruction = tag.href === '#';

            if (isUnderConstruction) {
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    color: 'var(--color-gray)',
                    border: '1.5px solid rgba(107, 107, 107, 0.3)',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Source Sans 3, sans-serif',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'not-allowed',
                    letterSpacing: '0.3px',
                    opacity: 0.5,
                    width: '100%',
                  }}
                >
                  {tag.label}
                </div>
              );
            }

            return (
              <a
                key={index}
                href={tag.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--color-burgundy-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Source Sans 3, sans-serif',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-subtle)',
                  letterSpacing: '0.3px',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(105, 11, 34, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(105, 11, 34, 0.2)';
                }}
              >
                {tag.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}
