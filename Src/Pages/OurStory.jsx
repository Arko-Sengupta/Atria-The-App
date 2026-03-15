import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import leaders from '../../Data/Leaders.json'
import '../Styles/Pages/OurStory.css'

const S = 'https://cdn.sanity.io/images/vv5njd4m/production'

const OurStory = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="story" ref={pageRef}>
      <section className="story__hero">
        <h1 className="reveal">Why We're Here</h1>
        <p className="story__hero-sub reveal">The mission and vision of the Atria Health and Research Institute</p>
      </section>

      <div className="story__hero-image reveal--scale reveal">
        <img src={`${S}/8275eecf92a0ed1a637d17b62928335f6b7f2ed0-1280x1600.jpg?w=960&fm=webp&auto=format`} alt="Atria Health Institute" loading="lazy" />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <p className="story__lead reveal">At the Atria Health and Research Institute, we believe it's time for a revolutionary shift from reactive sick care to proactive, preventive health care.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">Our vision for health care</h2>
          <p className="reveal">Our ambition is to deliver the world's best preventive care — precision-based, personalized, and grounded in the latest science. We are committed to generating data and sharing insights freely, because breakthroughs shouldn't stay behind closed doors.</p>
        </div>
      </section>

      <div className="story__image-break img-hover reveal">
        <img src={`${S}/3e74d4ba9609afe3fce4bbc2958cdec4d2384d69-1280x880.jpg?w=1280&fm=webp&auto=format`} alt="Atria clinical environment" loading="lazy" />
      </div>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">The challenge we face</h2>
          <p className="reveal">The facts are clear: 80% of strokes are preventable. 45% of dementia cases are preventable through lifestyle changes. Half of U.S. adults have hypertension. 38% of Americans have prediabetes — and most don't know it.</p>
          <p className="reveal">Yet our healthcare system remains oriented toward treatment rather than prevention. It takes an average of 17 years for a scientific breakthrough to reach a doctor's office. Over 3,000 medical papers are published daily, but precious few translate into the care patients actually receive.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 className="reveal">Research and education for the greater good</h2>
          <p className="reveal">The Atria Research Institute brings together more than 100 distinguished fellows from the world's leading medical institutions — working to identify and advance preventive solutions that can improve health outcomes for as many people as possible.</p>
          <p className="reveal">Our Health Education library makes cutting-edge medical knowledge freely available to everyone, because informed individuals make healthier choices.</p>
          <div className="reveal" style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link to="/research" className="link-arrow">Atria Research Institute <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
            <Link to="/education" className="link-arrow">Health Education <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span></Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container container--narrow text-center">
          <p className="story__cta-quote reveal">Join us in shaping a future where health is preserved, not just repaired — where well-spent years and healthy longevity are within reach for everyone.</p>
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
          <h2 className="reveal">Connect with us.</h2>
          <div className="reveal" style={{ marginTop: '2rem' }}><ContactForm /></div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
