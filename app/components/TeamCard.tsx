'use client'

interface TeamCardProps {
  name: string
  role: string
  image?: string
  linkedinUrl?: string
}

export default function TeamCard({
  name,
  role,
  image = '/images/elliot.png',
  linkedinUrl,
}: TeamCardProps) {
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Circular Image Container */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #690B22',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        }}>
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Content */}
      <h3 style={{
        fontSize: '20px',
        fontFamily: 'DM Serif Text, serif',
        fontWeight: 'bold',
        color: '#121211',
        margin: '0.5rem 0',
      }}>
        {name}
      </h3>
      <p style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#690B22',
        marginBottom: '1rem',
      }}>
        {role}
      </p>

      {/* LinkedIn Link */}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            backgroundColor: '#121211',
            borderRadius: '4px',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#690B22'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121211'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          aria-label={`${name}'s LinkedIn profile`}
        >
          <svg
            style={{ width: '20px', height: '20px' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      )}
    </div>
  )
}
