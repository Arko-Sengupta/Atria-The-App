import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import researchStats from '../../data/ResearchStats.json'
import pillars from '../../data/Pillars.json'
import fellows from '../../data/Fellows.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/ResearchPage.json'
import '../Styles/Pages/Research.css'

const S = urls.SanityCDN

const GetInitials = (name) => {
  const clean = name.replace(/,.*$/, '').replace(/\s+(MD|PhD|DO|MPH|MS).*$/i, '')
  const parts = clean.trim().split(' ')
  return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0]
}

const Research = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="res" ref={pageRef}>
      <section className="res__hero">
        <h1 className="reveal">{page.Hero.Title}</h1>
        <p className="res__hero-sub reveal">{page.Hero.Subtitle}</p>
      </section>

      <div className="res__hero-image reveal--scale reveal">
        <img src={`${S}/${page.Hero.Image}`} alt={page.Hero.ImageAlt} loading="lazy" />
      </div>

      <section className="res__section reveal">
        <p className="res__lead">{page.Intro.Lead}</p>
        <p>{page.Intro.Body}</p>
      </section>

      <section className="res__mission">
        <div className="res__mission-inner reveal">
          <h2>{page.MissionTitle}</h2>
          <p>{page.Mission}</p>
        </div>
      </section>

      <section className="res__section">
        <h2 className="reveal">{page.PillarsTitle}</h2>
        <div className="res__pillars reveal-stagger">
          {pillars.map((p) => (
            <div key={p.Num} className="res__pillar reveal">
              <span className="res__pillar-num">{p.Num}</span>
              <h3>{p.Title}</h3>
              <p>{p.Desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="res__section">
        <h2 className="reveal">{page.StatsTitle}</h2>
        <div className="res__stats reveal-stagger">
          {researchStats.map((stat, i) => (
            <div key={i} className="stat reveal">
              <div className="stat__value">{stat.Value}</div>
              <p className="stat__desc">{stat.Desc}</p>
              <cite className="stat__source">{stat.Source}</cite>
            </div>
          ))}
        </div>
      </section>

      <section className="res__section">
        <h2 className="reveal">{page.FellowsTitle}</h2>
        <p className="reveal" style={{ marginBottom: '2.5rem' }}>{page.FellowsIntro}</p>
        <div className="res__fellows reveal-stagger">
          {fellows.map((f, i) => (
            <div key={i} className="res__fellow reveal">
              <div className="res__fellow-avatar" style={{ backgroundColor: `hsl(${155 + i * 8}, 18%, ${36 + (i % 3) * 6}%)` }}>{GetInitials(f.Name)}</div>
              <h4>{f.Name}</h4>
              <p className="res__fellow-spec">{f.Specialty}</p>
              <p className="res__fellow-aff">{f.Affiliation}</p>
              {f.Role !== 'Fellow' && <span className="res__fellow-badge">{f.Role}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="res__section reveal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        {page.CrossLinks.map((link, i) => (
          <Link key={i} to={link.To} className="link-arrow">{link.Label} <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
        ))}
      </section>

      <section className="res__section reveal">
        <h2>{page.ContactTitle}</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default Research
