import { useState } from 'react'
import mindovaLogo from './assets/mindova-logo-full.png'
import './App.css'

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="rgba(201,160,85,0.15)" />
    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#c9a055" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function App() {
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) { setError('Please enter your email address.'); return }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Please enter a valid email address.'); return }
    if (!selected) { setError('Please select which option applies to you.'); return }
    setError('')
    setSubmitted(true)
  }

  const benefits = [
    'Early access to services and programs',
    'Provider and partnership opportunities',
    'Wellness and healthcare resources',
    'Launch announcements and special offers',
  ]

  return (
    <div className="page">

      {/* ── NAVBAR ─────────────────────────────── */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src={mindovaLogo} alt="Mindova Holdings" className="nav-logo-img" />
          </a>
          <span className="nav-tag">Pre-Launch</span>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────── */}
      <section className="hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div className="hero-inner">
          <div className="brand-eyebrow">
            <span className="eyebrow-dot" />
            Mindova Holdings
          </div>

          <h1 className="hero-headline">
            <span>Connecting Providers.</span>
            <span>Empowering Communities.</span>
            <span className="headline-accent">Transforming Lives.</span>
          </h1>

          <p className="hero-body">
            Mindova Holdings is building an innovative network of healthcare providers,
            wellness professionals, mental health specialists, and community organizations
            committed to improving access, outcomes, and quality of life.
          </p>

          <p className="hero-body hero-body-2">
            Whether you're seeking personalized healthcare, wellness programs, weight loss
            solutions, peptide therapies, mental health support, or community resources -
            or you're a provider looking to expand your reach through strategic partnerships
            and referrals - <strong>Mindova is designed for you.</strong>
          </p>

          <a href="#waitlist" className="hero-cta">
            Join the Waitlist
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────── */}
      <div className="section-divider">
        <span />
        <span className="divider-label">Coming Soon</span>
        <span />
      </div>

      {/* ── WAITLIST SECTION ───────────────────── */}
      <section className="waitlist" id="waitlist">
        <div className="waitlist-glow" />

        <div className="waitlist-inner">

          {/* Left: Content */}
          <div className="waitlist-content">
            <h2 className="waitlist-heading">
              A Better Connected<br />Future Is Coming
            </h2>
            <p className="waitlist-sub">
              Join our exclusive pre-launch community to receive:
            </p>
            <ul className="benefits-list">
              {benefits.map((b) => (
                <li key={b}>
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form Card */}
          <div className="waitlist-card">
            {!submitted ? (
              <>
                <div className="card-top">
                  <span className="card-badge">Free · No commitment</span>
                  <h3>Be Among the First to<br/>Experience Mindova</h3>
                  <p>Enter your email and join the waitlist to get notified at launch.</p>
                </div>

                {/* Email form + main CTA */}
                <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    className="email-input"
                  />
                  <button type="submit" className="submit-btn">
                    Join the Waitlist Today
                    <ArrowRight />
                  </button>
                </form>

                {/* Segmentation - below the main CTA */}
                <div className="segment-divider">
                  <span /><span className="seg-divider-label">I am a…</span><span />
                </div>

                <div className="segment-group">
                  <button
                    type="button"
                    className={`segment-btn ${selected === 'services' ? 'active' : ''}`}
                    onClick={() => { setSelected('services'); setError('') }}
                  >
                    <span className="seg-icon">🏥</span>
                    <div>
                      <strong>I'm Looking for Services</strong>
                      <span>Healthcare, wellness &amp; support</span>
                    </div>
                    <span className="seg-check" />
                  </button>

                  <button
                    type="button"
                    className={`segment-btn ${selected === 'provider' ? 'active' : ''}`}
                    onClick={() => { setSelected('provider'); setError('') }}
                  >
                    <span className="seg-icon">🤝</span>
                    <div>
                      <strong>I'm a Provider / Partner</strong>
                      <span>Partnerships &amp; referrals</span>
                    </div>
                    <span className="seg-check" />
                  </button>
                </div>

                {error && <p className="form-error">{error}</p>}
                <p className="form-note">We respect your privacy. No spam, ever.</p>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>You're on the list!</h3>
                <p>
                  Thank you for joining{selected === 'provider' ? ' as a Provider / Partner' : ' as someone looking for Services'}.
                  We'll reach out to <strong>{email}</strong> with early access details.
                </p>
                <p className="success-note">Keep an eye on your inbox - great things are coming.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={mindovaLogo} alt="Mindova Holdings" className="footer-logo-img" />
            <p>Where Healthcare, Wellness, and Community Come Together.</p>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Mindova Holdings. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}
