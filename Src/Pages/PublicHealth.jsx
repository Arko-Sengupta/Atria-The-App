import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import partners from '../../Data/Partners.json'
import '../Styles/Pages/PublicHealth.css'

const S = 'https://cdn.sanity.io/images/vv5njd4m/production'

const PublicHealth = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="ph" ref={pageRef}>
      <section className="ph__hero">
        <h1 className="reveal">Atria Public Health</h1>
        <p className="ph__hero-sub reveal">How health care can and should be for all.</p>
      </section>

      <div className="ph__hero-image reveal--scale reveal">
        <img src={`${S}/203701c432ad011f27e1a4303f2a8efebd9e4ab5-1280x800.jpg?w=1280&fm=webp&auto=format`} alt="Atria Public Health" loading="lazy" />
      </div>

      <section className="ph__section reveal">
        <p className="ph__lead">Medical breakthroughs have the power to transform lives — but they rarely reach everyone equally.</p>
        <p>We envision a world where every human has the opportunity to live a long and healthy life. As a 501(c)(3) nonprofit, Atria Public Health builds strategic partnerships that close critical gaps in care and develops evidence-based programs that prevent chronic disease, strengthen health systems, and extend healthy life for all.</p>
      </section>

      <section className="ph__mission">
        <div className="ph__mission-inner reveal">
          <p>Bridge the gap between innovation and access, bringing advances in science to those who need them most.</p>
        </div>
      </section>

      <section className="ph__section">
        <h2 className="reveal">Our Partners</h2>
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
        <Link to="/research" className="link-arrow">Atria Research Institute <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
        <Link to="/education" className="link-arrow">Health Education library <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
      </section>

      <section className="ph__section reveal">
        <h2>Connect with us.</h2>
        <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
      </section>
    </div>
  )
}

export default PublicHealth
