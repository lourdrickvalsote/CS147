'use client'

import Link from 'next/link'
import { getImagePath } from '@/app/lib/getBasePath'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header style={{ backgroundColor: '#690B22' }} className="fixed w-full top-0 z-50 shadow-lg">
      <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            height: '100%',
          }}
        >
          <img
            src={getImagePath('/images/chatatouille.png')}
            alt="Chatatouille"
            style={{
              height: '70px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
          <span
            style={{
              color: '#F8F3ED',
              fontSize: '28px',
              fontWeight: 'bold',
              fontFamily: 'DM Serif Text, serif',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            Chatatouille
          </span>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', height: '100%' }}>
          <button
            onClick={() => scrollToSection('about')}
            style={{
              backgroundColor: 'rgba(248, 243, 237, 0.2)',
              color: '#F8F3ED',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              fontFamily: 'Source Sans 3, sans-serif',
              display: 'flex',
              alignItems: 'center',
              height: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1E3D3'
              e.currentTarget.style.color = '#690B22'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(248, 243, 237, 0.2)'
              e.currentTarget.style.color = '#F8F3ED'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('team')}
            style={{
              backgroundColor: 'rgba(248, 243, 237, 0.2)',
              color: '#F8F3ED',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              fontFamily: 'Source Sans 3, sans-serif',
              display: 'flex',
              alignItems: 'center',
              height: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1E3D3'
              e.currentTarget.style.color = '#690B22'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(248, 243, 237, 0.2)'
              e.currentTarget.style.color = '#F8F3ED'
            }}
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('process')}
            style={{
              backgroundColor: 'rgba(248, 243, 237, 0.2)',
              color: '#F8F3ED',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              fontFamily: 'Source Sans 3, sans-serif',
              display: 'flex',
              alignItems: 'center',
              height: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1E3D3'
              e.currentTarget.style.color = '#690B22'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(248, 243, 237, 0.2)'
              e.currentTarget.style.color = '#F8F3ED'
            }}
          >
            Process
          </button>
        </nav>
      </div>
    </header>
  )
}
