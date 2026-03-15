import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import researchStats from '../../Data/ResearchStats.json'
import pillars from '../../Data/Pillars.json'
import fellows from '../../Data/Fellows.json'
import '../Styles/Pages/Research.css'

const S = 'https://cdn.sanity.io/images/vv5njd4m/production'

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
        <h1 className="reveal">The Atria Research Institute</h1>
        <p className="res__hero-sub reveal">Translating science into medicine.</p>
      </section>

      <div className="res__hero-image reveal--scale reveal">
        <img src={`${S}/bf3eec2b98e004c41f235f3f3d4e3e7aa8d20b56-1280x800.jpg?w=1280&fm=webp&auto=format`} alt="Atria Research Institute" loading="lazy" />
      </div>

      <section className="res__section reveal">
        <p className="res__lead">It takes an average of 17 years for scientific breakthroughs to reach doctors' offices — nearly two decades of missed disease prevention opportunities.</p>
        <p>The pharmaceutical industry spends $83 billion annually on disease treatments versus minimal investment in prevention. The Atria Research Institute, with a global network of 100+ distinguished fellows and researchers, is working to change this.</p>
      </section>

      <section className="res__mission">
        <div className="res__mission-inner reveal">
          <h2>Our Mission</h2>
          <p>Identify and advance preventive solutions that improve health outcomes and enhance the lives of as many people as possible.</p>
        </div>
      </section>

      <section className="res__section">
        <h2 className="reveal">Strategic Pillars</h2>
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
        <h2 className="reveal">The Challenge in Numbers</h2>
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
        <h2 className="reveal">Research Fellows</h2>
        <p className="reveal" style={{ marginBottom: '2.5rem' }}>A global network of 100+ distinguished fellows exploring innovative preventive strategies and accelerating the translation of science into clinical practice.</p>
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
        <Link to="/our-story" className="link-arrow">Why we're here <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
        <Link to="/education" className="link-arrow">Health Education library <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
      </section>

      <section className="res__section reveal">
        <h2>Connect with us.</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default Research
