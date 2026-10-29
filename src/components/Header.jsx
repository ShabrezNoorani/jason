import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Re-clicking a link whose hash is already in the URL doesn't change the
  // location, so scroll explicitly when we're already on the home page.
  const scrollToSection = (id) => {
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">JS</span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <Link to={`/#${link.id}`} onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <NavLink to="/blog" onClick={() => setOpen(false)}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
