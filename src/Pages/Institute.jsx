import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import membershipFeatures from '../../data/MembershipFeatures.json'
import specialties from '../../data/Specialties.json'
import journeySteps from '../../data/JourneySteps.json'
import galleryItems from '../../data/GalleryItems.json'
import instituteLocations from '../../data/InstituteLocations.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/InstitutePage.json'
import '../Styles/Pages/Institute.css'

const S = urls.SanityCDN

const Institute = () => {
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const total = galleryItems.length
  const pageRef = UseScrollReveal()

  const Scroll = (dir) => {
    const next = dir === 'next' ? Math.min(idx + 1, total - 1) : Math.max(idx - 1, 0)
    setIdx(next)
    trackRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  return (
    <div className="inst" ref={pageRef}>
      <section className="inst__hero">
        <img src={`${S}/${page.Hero.Image}`} alt={page.Hero.ImageAlt} className="inst__hero-img" />
        <div className="inst__hero-overlay">
          <h1 className="reveal">{page.Hero.Title}</h1>
          <p className="reveal">{page.Hero.Subtitle}</p>
        </div>
      </section>

      <section className="inst__features reveal-stagger">
        {page.Features.map((feat, i) => (
          <div key={i} className="inst__feat reveal"><h3>{feat}</h3></div>
        ))}
      </section>

      <section className="inst__section reveal">
        <h2>{page.MembershipTitle}</h2>
        <ul className="inst__list">
          {membershipFeatures.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <a href={urls.MembershipEmail} className="btn btn--primary">{page.MembershipCTA}</a>
      </section>

      <section className="inst__gallery reveal">
        <div className="inst__gallery-head">
          <h2>{page.GalleryTitle}</h2>
          <div className="inst__gallery-controls">
            <span className="inst__gallery-counter">{String(idx + 1).padStart(3, '0')} / {String(total).padStart(3, '0')}</span>
            <button onClick={() => Scroll('prev')} className="inst__gallery-btn" aria-label="Previous">&larr;</button>
            <button onClick={() => Scroll('next')} className="inst__gallery-btn" aria-label="Next">&rarr;</button>
          </div>
        </div>
        <div className="inst__gallery-track" ref={trackRef}>
          {galleryItems.map((item, i) => (
            <div key={i} className="inst__slide">
              <div className="inst__slide-img" style={{ background: `linear-gradient(145deg, ${item.Color}, ${item.Color}99)` }}>
                <div className="inst__slide-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
              </div>
              <span className="inst__slide-label">{item.Label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="inst__section inst__section--dark reveal">
        <h2>{page.ExpertiseTitle}</h2>
        <div className="inst__specs">
          {specialties.map((s, i) => <span key={i} className="inst__spec">{s}</span>)}
        </div>
        <Link to={page.DoctorsLink.To} className="btn btn--white" style={{ marginTop: '2rem' }}>{page.DoctorsLink.Label}</Link>
      </section>

      <section className="inst__section">
        <h2 className="reveal">{page.JourneyTitle}</h2>
        <div className="inst__journey reveal-stagger">
          {journeySteps.map((step) => (
            <div key={step.Num} className="inst__step reveal">
              <span className="inst__step-num">{step.Num}</span>
              <h3>{step.Title}</h3>
              <p>{step.Desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="inst__section">
        <h2 className="reveal">{page.LocationsTitle}</h2>
        <div className="inst__locs reveal-stagger">
          {instituteLocations.map((loc, i) => (
            <div key={i} className="inst__loc reveal">
              <h3>{loc.Name}</h3>
              <p>{loc.Address}</p>
              {loc.Status === 'open' ? (
                <>
                  <p className="inst__loc-hours">{loc.Hours}</p>
                  <p className="inst__loc-phone">{loc.Phone}</p>
                </>
              ) : (
                <span className="inst__loc-badge">{loc.Status}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="inst__section reveal">
        <h2>{page.ContactTitle}</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default Institute
