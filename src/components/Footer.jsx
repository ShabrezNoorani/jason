import { profile } from '../data/profile.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <p className="footer-meta">
          {profile.title} · {profile.location}
        </p>
      </div>
    </footer>
  )
}
