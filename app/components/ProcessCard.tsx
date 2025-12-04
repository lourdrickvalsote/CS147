'use client'

import { getImagePath } from '@/app/lib/getBasePath'

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
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 300ms ease',
      border: '1px solid #E5E5E5',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)'
      e.currentTarget.style.transform = 'translateY(-4px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}>
      {/* Image Container */}
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        backgroundColor: '#E5E5E5',
      }}>
        <img
          src={getImagePath(image)}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />
      </div>

      {/* Content Container */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '24px',
          fontFamily: 'DM Serif Text, serif',
          fontWeight: 'bold',
          color: '#121211',
          marginBottom: '0.75rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#555555',
          lineHeight: '1.6',
          marginBottom: '1.25rem',
        }}>
          {description}
        </p>

        {/* Tags/Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {tags.map((tag, index) => {
            const isUnderConstruction = tag.href === '#';

            if (isUnderConstruction) {
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  style={{
                    display: 'block',
                    width: 'calc(50% - 0.375rem)',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#FFFFFF',
                    color: '#690B22',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 200ms ease',
                    border: '2px solid #690B22',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1E3D3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
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
                  display: 'block',
                  width: 'calc(50% - 0.375rem)',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#690B22',
                  color: '#F8F3ED',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 200ms ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#8B0E2C'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#690B22'
                  e.currentTarget.style.transform = 'scale(1)'
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
