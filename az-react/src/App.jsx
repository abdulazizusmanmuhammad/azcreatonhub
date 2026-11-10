import { useState } from 'react'
import './site.css'
import './App.css'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <svg viewBox="0 0 60 50" aria-hidden="true">
              <defs>
                <linearGradient id="brand-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a020ff" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <path d="M5 40 25 5 45 40H32L25 27 18 40Z" fill="url(#brand-gradient)" />
              <path d="M29 8h27L35 39h20" fill="none" stroke="url(#brand-gradient)" strokeWidth="6" strokeLinejoin="round" />
            </svg>
            <span>AZ <span className="brand-accent">Creation Hub</span></span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>

          <ul className={`nav-links${menuOpen ? ' is-open' : ''}`} id="site-links">
            {links.map(([label, href], index) => (
              <li key={label}>
                <a className={index === 0 ? 'active' : ''} href={href} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact">Let’s Talk</a>
        </nav>
      </header>

      <main>
        <section className="welcome hero" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge"><span className="status-dot" />CREATIVE DIGITAL AGENCY</div>
              <h1>We Turn Your <span>Ideas</span> Into Digital Reality.</h1>
              <p className="hero-description">We design, develop and create digital experiences that help businesses build their brand, connect with people and grow online.</p>
              <div className="hero-buttons">
                <a className="btn-primary" href="#contact">Start a Project <i className="fa-solid fa-arrow-right" /></a>
                <a className="btn-secondary" href="#portfolio">Explore Our Work <i className="fa-solid fa-arrow-up-right-from-square" /></a>
              </div>
              <div className="hero-trust">
                <span>WHAT WE DO</span>
                <div className="trust-services">
                  <span><i className="fa-solid fa-code" /> Web Development</span>
                  <span><i className="fa-solid fa-pen-nib" /> Graphic Design</span>
                  <span><i className="fa-solid fa-video" /> Video Editing</span>
                </div>
              </div>
            </div>
            <div className="hero-visual" aria-label="AZ Creative Studio">
              <div className="visual-glow" />
              <div className="visual-card">
                <div className="visual-top"><div className="visual-dots"><span /><span /><span /></div><span>AZ CREATIVE STUDIO</span></div>
                <div className="visual-main">
                  <div className="visual-icon"><i className="fa-solid fa-wand-magic-sparkles" /></div>
                  <p className="visual-small">CREATIVE THINKING</p>
                  <h2>Design.<br /><span>Create.</span><br />Innovate.</h2>
                  <p className="visual-text">Bringing ambitious ideas to life through creativity and technology.</p>
                  <div className="visual-progress"><span /></div>
                  <div className="visual-bottom"><span>IDEAS INTO REALITY</span><i className="fa-solid fa-arrow-up-right-from-square" /></div>
                </div>
              </div>
              <div className="floating-card floating-one"><i className="fa-solid fa-code" /><span>Web Development</span></div>
              <div className="floating-card floating-two"><i className="fa-solid fa-palette" /><span>Creative Design</span></div>
            </div>
          </div>
        </section>
        <section className="services-preview" id="services">
          <div className="section-heading"><p>WHAT WE DO</p><h2>Our Creative Services</h2></div>
          <div className="services-grid">
            <article className="service-card"><h3>Web Development</h3><p>Modern, responsive and functional websites designed for businesses.</p></article>
            <article className="service-card"><h3>Graphic Design</h3><p>Creative visual designs that help brands communicate effectively.</p></article>
            <article className="service-card"><h3>Video Editing</h3><p>Engaging video content for brands, businesses and social media.</p></article>
          </div>
        </section>
        <section className="site-preview" id="about">
          <p className="site-preview-label">ABOUT AZ CREATION HUB</p>
          <h2>Creative minds. Digital momentum.</h2>
          <p>We help businesses bring their ideas online through thoughtful design, useful technology and creative storytelling.</p>
        </section>
        <section className="site-preview portfolio-preview" id="portfolio">
          <p className="site-preview-label">OUR PORTFOLIO</p>
          <h2>Ideas made visible.</h2>
          <p>Explore creative work in web development, graphic design and video editing.</p>
        </section>
      </main>
      <footer className="site-footer" id="contact">
        <div className="footer-container">
          <div className="footer-brand"><a className="footer-logo" href="#home">AZ<span>Creation</span> Hub.</a><p>We turn creative ideas into powerful digital experiences through technology, design and innovation.</p><div className="footer-socials"><a href="https://wa.me/2347077909619" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a></div></div>
          <div className="footer-column"><h3>Explore</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></div>
          <div className="footer-column"><h3>What We Do</h3><a href="#services">Web Development</a><a href="#services">Graphic Design</a><a href="#services">Video Editing</a></div>
          <div className="footer-column footer-contact"><h3>Let’s Connect</h3><p>Have a project in mind? Let’s create something amazing.</p><a className="footer-contact-btn" href="mailto:hello@azcreationhub.com">Start a Project <i className="fa-solid fa-arrow-right" /></a><a href="https://wa.me/2347077909619"><i className="fa-brands fa-whatsapp" /> Chat with us</a></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} AZ Creation Hub. All rights reserved.</p><p>Designed with creativity ✦ by AZ Creation Hub.</p></div>
      </footer>
    </>
  )
}

export default App
