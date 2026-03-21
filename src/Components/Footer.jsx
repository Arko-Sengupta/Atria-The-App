import { useState } from 'react'
import { Link } from 'react-router-dom'
import urls from '../../data/ExternalURLs.json'
import footerData from '../../data/FooterData.json'
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
            <Link to="/" className="footer__logo">{footerData.Logo}</Link>
            <p className="footer__tagline">{footerData.Tagline}</p>
          </div>

          <div className="footer__newsletter">
            <p className="footer__newsletter-label">{footerData.Newsletter.Label}</p>
            {subscribed ? (
              <p className="footer__newsletter-success">{footerData.Newsletter.SuccessMessage}</p>
            ) : (
              <form className="footer__newsletter-form" onSubmit={HandleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footerData.Newsletter.Placeholder}
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">{footerData.Newsletter.ButtonText}</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__columns">
          {footerData.Columns.map((col, i) => (
            <div key={i} className="footer__column">
              <h4 className="footer__column-title">{col.Title}</h4>
              {col.Links.map((link, j) => (
                <Link key={j} to={link.To} className="footer__link">{link.Label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-links">
            {footerData.BottomLinks.map((link, i) => (
              <a
                key={i}
                href={urls[link.UrlKey]}
                {...(link.External ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="footer__bottom-link"
              >{link.Label}</a>
            ))}
          </div>
          <p className="footer__copyright">&copy; {footerData.Copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
