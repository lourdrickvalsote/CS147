'use client'

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
          src={image}
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
          fontSize: '22px',
          fontFamily: 'DM Serif Text, serif',
          fontWeight: 'bold',
          color: '#121211',
          marginBottom: '0.75rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#555555',
          lineHeight: '1.6',
          marginBottom: '1.25rem',
        }}>
          {description}
        </p>

        {/* Tags/Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {tags.map((tag, index) => (
            <a
              key={index}
              href={tag.href || '#'}
              target={tag.href ? '_blank' : undefined}
              rel={tag.href ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#690B22',
                color: '#F8F3ED',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 200ms ease',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8B0E2C'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#690B22'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
