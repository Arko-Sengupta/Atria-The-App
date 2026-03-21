import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import homeStats from '../../data/HomeStats.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/HomePage.json'
import '../Styles/Pages/Home.css'

const S = urls.SanityCDN

const ArrowIcon = () => (
  <span className="link-arrow__icon">
    <svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
  </span>
)

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const HandleSubmit = (e) => { e.preventDefault(); if (email) { setDone(true); setEmail('') } }

  if (done) return <p className="home__newsletter-thanks">{page.Newsletter.SuccessMessage}</p>

  return (
    <form className="home__newsletter-form" onSubmit={HandleSubmit}>
      <span>{page.Newsletter.Label}</span>
      <div className="home__newsletter-row">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={page.Newsletter.Placeholder} required />
        <button type="submit">{page.Newsletter.ButtonText}</button>
      </div>
    </form>
  )
}

const Home = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="home" ref={pageRef}>
      <section className="home__hero">
        <h1 className="reveal">{page.Hero.Title}</h1>
        <div className="home__hero-line reveal" />
      </section>

      <section className="home__block home__block--grid">
        <div className="home__content reveal">
          <p><strong>{page.Intro.Lead}</strong></p>
          <p>{page.Intro.Body}</p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/${page.Intro.Image}`} alt={page.Intro.ImageAlt} loading="lazy" />
        </div>
      </section>

      <section className="home__block home__block--grid-reverse">
        <div className="home__content reveal">
          <h3>{page.Mission.Title}</h3>
          <p>{page.Mission.Body}</p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/${page.Mission.Image}`} alt={page.Mission.ImageAlt} loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>{page.StatsTitle}</h2>
        </div>
        <div className="home__stats reveal-stagger">
          {homeStats.map((stat, i) => (
            <div key={i} className="stat reveal">
              <div className="stat__value">{stat.Value}</div>
              <p className="stat__desc">{stat.Desc}</p>
              <cite className="stat__source">{stat.Source}</cite>
            </div>
          ))}
        </div>
      </section>

      <div className="home__fullimage reveal--scale reveal">
        <img src={`${S}/${page.FullImage.Image}`} alt={page.FullImage.ImageAlt} loading="lazy" />
      </div>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>{page.Institute.Title}</h2>
          <p>{page.Institute.Body}</p>
          <Link to={page.Institute.LinkTo} className="link-arrow">{page.Institute.LinkLabel} <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home__block home__block--grid-reverse">
        <div className="home__image img-hover reveal">
          <img src={`${S}/${page.Unique.Image}`} alt={page.Unique.ImageAlt} loading="lazy" />
        </div>
        <div className="home__content reveal">
          <h2>{page.Unique.Title}</h2>
          <Link to={page.Unique.LinkTo} className="link-arrow">{page.Unique.LinkLabel} <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home__block home__block--grid">
        <div className="home__image img-hover reveal">
          <img src={`${S}/${page.Membership.Image}`} alt={page.Membership.ImageAlt} loading="lazy" />
        </div>
        <div className="home__content reveal">
          <h2>{page.Membership.Title}</h2>
          <a href={urls.MembershipEmail} className="link-arrow">{page.Membership.LinkLabel} <ArrowIcon /></a>
        </div>
      </section>

      <section className="home__block home__block--doctors">
        <div className="home__content reveal">
          <h3>{page.Doctors.Title}</h3>
          <p>{page.Doctors.Body}</p>
          <Link to={page.Doctors.LinkTo} className="link-arrow">{page.Doctors.LinkLabel} <ArrowIcon /></Link>
        </div>
        <div className="home__doctors-images">
          {page.Doctors.Images.map((img, i) => (
            <div key={i} className={`home__image ${img.Portrait ? 'home__image--portrait' : ''} img-hover reveal`}>
              <img src={`${S}/${img.Image}`} alt={img.Alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="home__block home__block--grid">
        <div className="home__content reveal">
          <p>{page.ClinicalApproach.Body1}</p>
          <p>{page.ClinicalApproach.Body2}</p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/${page.ClinicalApproach.Image}`} alt={page.ClinicalApproach.ImageAlt} loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>{page.WorkTitle}</h2>
        </div>

        <div className="home__work-grid reveal-stagger">
          {page.WorkItems.map((item, i) => (
            <div key={i} className="home__work-item reveal">
              <div className="home__image img-hover">
                <img src={`${S}/${item.Image}`} alt={item.ImageAlt} loading="lazy" />
              </div>
              <div className="home__work-text">
                <h4>{item.Title}</h4>
                <p>{item.Body}</p>
                <Link to={item.LinkTo} className="link-arrow">{item.LinkLabel} <ArrowIcon /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>{page.ContactTitle}</h2>
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </section>

      <section className="home__newsletter reveal">
        <NewsletterForm />
      </section>
    </div>
  )
}

export default Home
