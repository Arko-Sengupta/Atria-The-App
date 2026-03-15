import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Components/Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const HandleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">atria</Link>
            <p className="footer__tagline">The future of preventive medicine is here.</p>
          </div>

          <div className="footer__newsletter">
            <p className="footer__newsletter-label">Subscribe to the Atria newsletter</p>
            {subscribed ? (
              <p className="footer__newsletter-success">Thanks for signing up!</p>
            ) : (
              <form className="footer__newsletter-form" onSubmit={HandleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__column-title">Atria Institute</h4>
            <Link to="/institute" className="footer__link">Atria Health Institute</Link>
            <Link to="/doctors" className="footer__link">Our Doctors</Link>
            <Link to="/locations" className="footer__link">Locations</Link>
            <Link to="/contact-us" className="footer__link">Contact Us</Link>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Our Work</h4>
            <Link to="/research" className="footer__link">Atria Research Institute</Link>
            <Link to="/education" className="footer__link">Health Education</Link>
            <Link to="/public-health" className="footer__link">Public Health</Link>
            <Link to="/our-story" className="footer__link">Our Story</Link>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <Link to="/terms" className="footer__link">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
            <Link to="/privacy-practices" className="footer__link">Privacy Practices</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-links">
            <a href="https://records.atria.org/sign-in" target="_blank" rel="noopener noreferrer" className="footer__bottom-link">Member Portal</a>
            <a href="mailto:membership@atria.org" className="footer__bottom-link">membership@atria.org</a>
            <a href="https://apply.workable.com/atria-health/" target="_blank" rel="noopener noreferrer" className="footer__bottom-link">Careers</a>
          </div>
          <p className="footer__copyright">&copy; 2026 Atria Health LLC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
