import { useState, useEffect } from 'react'
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
  const [selected, setSelected]       = useState(null)
  const [activeModal, setActiveModal] = useState(null)
  const [error, setError]             = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.webtechs.dev/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  function handleJoin() {
    if (!selected) { setError('Please select an option above first.'); return }
    setError('')
    setActiveModal(selected)
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

          <div className="hero-cta-group">
            <a href="#waitlist" className="hero-cta">
              Join the Waitlist
              <ArrowRight />
            </a>
            <a href="#promo" className="hero-cta-outline">
              Get Promo
              <ArrowRight />
            </a>
          </div>
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

          {/* Right: Card */}
          <div className="waitlist-card">
            <div className="card-top">
              <span className="card-badge">Free · No commitment</span>
              <h3>Be Among the First to<br/>Experience Mindova</h3>
              <p>Select who you are, then join the waitlist.</p>
            </div>

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

            <button className="submit-btn" onClick={handleJoin}>
              Join the Waitlist Today
              <ArrowRight />
            </button>

            <p className="form-note">We respect your privacy. No spam, ever.</p>
          </div>

        </div>
      </section>

      {/* ── PROMO SECTION ──────────────────────── */}
      <div className="section-divider">
        <span />
        <span className="divider-label divider-label--bright">Featured Opportunity</span>
        <span />
      </div>

      <section className="promo-section" id="promo">
        <div className="promo-glow promo-glow-1" />
        <div className="promo-glow promo-glow-2" />

        <div className="promo-inner">

          <span className="promo-badge">★ &nbsp;Limited Enrollment&nbsp; ★</span>

          <h2 className="promo-heading">
            Community Support<br />
            <span className="headline-accent">Preferred Partner Program</span>
          </h2>

          <p className="promo-sub">In Partnership with the Ferguson Foundation</p>

          <p className="promo-how-it-works">
            <strong>How It Works:</strong> Donate 6 hours of therapy sessions to the Ferguson Foundation - a Houston-based nonprofit providing free mental health resources to communities in need. In return, Mindova Holdings will waive your onboarding and platform fees during your first months on the platform.
          </p>

          <ul className="promo-list">
            <li><CheckIcon /><span>Donate 6 hours of in-kind therapy sessions to the Ferguson Foundation</span></li>
            <li><CheckIcon /><span>Begin your Mindova screening and onboarding process immediately - no waiting</span></li>
            <li><CheckIcon /><span>Receive platform fee waiver for your initial onboarding period</span></li>
            <li><CheckIcon /><span>Get full access to Mindova's scheduling, marketing, credentialing and client referral systems from day one</span></li>
            <li><CheckIcon /><span>Be listed as a Mindova Community Partner - a trusted provider making a real difference</span></li>
          </ul>

          <div className="promo-divider" />

          <p className="promo-closing">
            <span className="promo-highlight">This is a limited enrollment opportunity.</span> Spots are reserved for providers aligned with our mission of accessible, compassionate care.
          </p>
          <p className="promo-contact-label">To schedule your Partner Consult &amp; begin enrollment, send your resume to:</p>
          <div className="promo-emails">
            <a href="mailto:enroll@mindovaholdings.com">enroll@mindovaholdings.com</a>
            <a href="mailto:info@mindovaholdings.com">info@mindovaholdings.com</a>
            <a href="mailto:info@ferguson-foundation.com">info@ferguson-foundation.com</a>
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

      {/* ── MODAL ──────────────────────────────── */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">
                {activeModal === 'services' ? '🏥 Services Waitlist' : '🤝 Provider & Partner Application'}
              </span>
              <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>

            <div className="modal-iframe-wrap">
              {activeModal === 'services' ? (
                <iframe
                  src="https://link.webtechs.dev/widget/form/DJhjfniFpv8PsM7KZ79l"
                  style={{ width: '100%', height: '857px', border: 'none', borderRadius: '8px' }}
                  id="inline-DJhjfniFpv8PsM7KZ79l"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Mindova Holdings Services Waitlist"
                  data-height="857"
                  data-layout-iframe-id="inline-DJhjfniFpv8PsM7KZ79l"
                  data-form-id="DJhjfniFpv8PsM7KZ79l"
                  title="Mindova Holdings Services Waitlist"
                />
              ) : (
                <iframe
                  src="https://link.webtechs.dev/widget/form/mzTMx1TwnQcZkf7w7hKZ"
                  style={{ width: '100%', height: '1304px', border: 'none', borderRadius: '8px' }}
                  id="inline-mzTMx1TwnQcZkf7w7hKZ"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Mindova Holdings Provider & Partner Application"
                  data-height="1304"
                  data-layout-iframe-id="inline-mzTMx1TwnQcZkf7w7hKZ"
                  data-form-id="mzTMx1TwnQcZkf7w7hKZ"
                  title="Mindova Holdings Provider & Partner Application"
                />
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
