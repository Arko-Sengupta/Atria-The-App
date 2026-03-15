import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import membershipFeatures from '../../Data/MembershipFeatures.json'
import specialties from '../../Data/Specialties.json'
import journeySteps from '../../Data/JourneySteps.json'
import galleryItems from '../../Data/GalleryItems.json'
import instituteLocations from '../../Data/InstituteLocations.json'
import '../Styles/Pages/Institute.css'

const S = 'https://cdn.sanity.io/images/vv5njd4m/production'

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
        <img src={`${S}/c1168e0332e92d4b5ca223ef60ede07907b01979-2720x1600.jpg?w=1600&auto=format`} alt="Atria Health Institute" className="inst__hero-img" />
        <div className="inst__hero-overlay">
          <h1 className="reveal">The future of preventive medicine is here.</h1>
          <p className="reveal">A collaborative, multi-specialty team delivering personalized preventive medicine and longevity care for you and your family.</p>
        </div>
      </section>

      <section className="inst__features reveal-stagger">
        <div className="inst__feat reveal"><h3>24/7 care at our world-class Institutes and your home</h3></div>
        <div className="inst__feat reveal"><h3>Full imaging center and advanced labs on-site</h3></div>
        <div className="inst__feat reveal"><h3>The gold standard of collaborative, multi-specialty care</h3></div>
      </section>

      <section className="inst__section reveal">
        <h2>What Atria membership includes</h2>
        <ul className="inst__list">
          {membershipFeatures.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <a href="mailto:membership@atria.org" className="btn btn--primary">Contact Us About Membership</a>
      </section>

      <section className="inst__gallery reveal">
        <div className="inst__gallery-head">
          <h2>Hospitable health care</h2>
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
        <h2>Multidisciplinary expertise</h2>
        <div className="inst__specs">
          {specialties.map((s, i) => <span key={i} className="inst__spec">{s}</span>)}
        </div>
        <Link to="/doctors" className="btn btn--white" style={{ marginTop: '2rem' }}>Meet Our Doctors</Link>
      </section>

      <section className="inst__section">
        <h2 className="reveal">The Atria Journey</h2>
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
        <h2 className="reveal">Our Locations</h2>
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
        <h2>Connect with us.</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default Institute
