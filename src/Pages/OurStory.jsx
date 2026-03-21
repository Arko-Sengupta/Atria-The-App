import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import leaders from '../../data/Leaders.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/OurStoryPage.json'
import '../Styles/Pages/OurStory.css'

const S = urls.SanityCDN

const OurStory = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="story" ref={pageRef}>
      <section className="story__hero">
        <h1 className="reveal">{page.Hero.Title}</h1>
        <p className="story__hero-sub reveal">{page.Hero.Subtitle}</p>
      </section>

      <div className="story__hero-image reveal--scale reveal">
        <img src={`${S}/${page.Hero.Image}`} alt={page.Hero.ImageAlt} loading="lazy" />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <p className="story__lead reveal">{page.Lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">{page.Vision.Title}</h2>
          <p className="reveal">{page.Vision.Body}</p>
        </div>
      </section>

      <div className="story__image-break img-hover reveal">
        <img src={`${S}/${page.MidImage.Image}`} alt={page.MidImage.ImageAlt} loading="lazy" />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">{page.Challenge.Title}</h2>
          <p className="reveal">{page.Challenge.Body1}</p>
          <p className="reveal">{page.Challenge.Body2}</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">{page.ResearchEducation.Title}</h2>
          <p className="reveal">{page.ResearchEducation.Body1}</p>
          <p className="reveal">{page.ResearchEducation.Body2}</p>
          <div className="reveal" style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {page.ResearchEducation.Links.map((link, i) => (
              <Link key={i} to={link.To} className="link-arrow">{link.Label} <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container container--narrow text-center">
          <p className="story__cta-quote reveal">{page.CTA}</p>
          <div className="story__leaders reveal-stagger">
            {leaders.map((l, i) => (
              <div key={i} className="story__leader reveal">
                <span className="story__leader-name">{l.Name}</span>
                <span className="story__leader-role">{l.Role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">{page.ContactTitle}</h2>
          <div className="reveal" style={{ marginTop: '2rem' }}><ContactForm /></div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
