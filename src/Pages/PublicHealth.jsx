import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import partners from '../../data/Partners.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/PublicHealthPage.json'
import '../Styles/Pages/PublicHealth.css'

const S = urls.SanityCDN

const PublicHealth = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="ph" ref={pageRef}>
      <section className="ph__hero">
        <h1 className="reveal">{page.Hero.Title}</h1>
        <p className="ph__hero-sub reveal">{page.Hero.Subtitle}</p>
      </section>

      <div className="ph__hero-image reveal--scale reveal">
        <img src={`${S}/${page.Hero.Image}`} alt={page.Hero.ImageAlt} loading="lazy" />
      </div>

      <section className="ph__section reveal">
        <p className="ph__lead">{page.Intro.Lead}</p>
        <p>{page.Intro.Body}</p>
      </section>

      <section className="ph__mission">
        <div className="ph__mission-inner reveal">
          <p>{page.Mission}</p>
        </div>
      </section>

      <section className="ph__section">
        <h2 className="reveal">{page.PartnersTitle}</h2>
        <div className="ph__partners">
          {partners.map((p, i) => (
            <div key={i} className="ph__partner reveal">
              <h3>{p.Name}</h3>
              <p>{p.Desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ph__section reveal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        {page.CrossLinks.map((link, i) => (
          <Link key={i} to={link.To} className="link-arrow">{link.Label} <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
        ))}
      </section>

      <section className="ph__section reveal">
        <h2>{page.ContactTitle}</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default PublicHealth
