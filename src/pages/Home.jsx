import { useState } from 'react'
import portrait from '../assets/jason.png'
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  skills,
} from '../data/profile.js'

function SectionHeading({ index, title, id }) {
  return (
    <div className="section-heading">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow">{profile.location}</p>
        <h1 id="hero-title">
          {profile.name}
          <span className="hero-role">{profile.title}</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View experience
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact me
          </a>
          <a className="btn btn-link" href={profile.cvUrl} download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" title="About" id="about-title" />
        <div className="about-grid">
          <figure className="portrait">
            <img
              src={portrait}
              alt="Portrait of Jason Suri wearing glasses and a dark turtleneck, arms crossed"
              width="800"
              height="800"
              loading="lazy"
            />
          </figure>
          <div className="about-body">
            {profile.bio.map((p, i) => (
              <p key={i} className="lead">
                {p}
              </p>
            ))}
            <dl className="facts">
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{profile.languages.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading index="02" title="Experience" id="experience-title" />
        <ol className="timeline">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.start}`}
              className={`timeline-item${job.highlight ? ' is-highlight' : ''}`}
            >
              <p className="timeline-date">
                <time>{job.start}</time> – <time>{job.end}</time>
              </p>
              <div className="timeline-card">
                <h3>{job.role}</h3>
                <p className="timeline-org">
                  {job.company}
                  {job.location && <span> · {job.location}</span>}
                </p>
                {job.bullets && (
                  <ul className="bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {job.skills && (
                  <ul className="tags tags-sm" aria-label="Skills used">
                    {job.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading index="03" title="Education" id="education-title" />
        <div className="card-grid">
          {education.map((ed) => (
            <article key={ed.school} className="card">
              <p className="card-date">
                {ed.start} – {ed.end}
              </p>
              <h3>{ed.degree}</h3>
              <p className="card-org">{ed.school}</p>
              <ul className="plain-list">
                {ed.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading index="04" title="Skills" id="skills-title" />
        <ul className="tags">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading index="05" title="Certifications" id="certifications-title" />
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={c.name}>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
              <p className="cert-date">{c.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="section section-dark" aria-labelledby="achievements-title">
      <div className="container">
        <SectionHeading index="06" title="Key achievements" id="achievements-title" />
        <ul className="metrics">
          {achievements.map((a) => (
            <li key={a.label} className="metric">
              <p className="metric-value">{a.value}</p>
              <p className="metric-label">{a.label}</p>
              <p className="metric-context">{a.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  const [sentName, setSentName] = useState(null)
  const { email, phone, linkedin } = profile.contact

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSentName(String(data.get('name')).trim())
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index="07" title="Contact" id="contact-title" />
        <div className="contact-grid">
          <div>
            <p className="lead">
              Open to Financial Analyst opportunities. The quickest way to reach me is by email.
            </p>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" rows="5" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <p className="form-status" role="status">
              {sentName && `Thank you, ${sentName}. Your message has been received.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  )
}
