import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import homeStats from '../../Data/HomeStats.json'
import '../Styles/Pages/Home.css'

const S = 'https://cdn.sanity.io/images/vv5njd4m/production'

const ArrowIcon = () => (
  <span className="link-arrow__icon">
    <svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
  </span>
)

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const HandleSubmit = (e) => { e.preventDefault(); if (email) { setDone(true); setEmail('') } }

  if (done) return <p className="home__newsletter-thanks">Thanks for signing up!</p>

  return (
    <form className="home__newsletter-form" onSubmit={HandleSubmit}>
      <span>Subscribe to the Atria newsletter</span>
      <div className="home__newsletter-row">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  )
}

const Home = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="home" ref={pageRef}>
      <section className="home__hero">
        <h1 className="reveal">The future of preventive medicine is here.</h1>
        <div className="home__hero-line reveal" />
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <p>
            <strong>The Atria Health Institute is pioneering a precision-based approach to preventive medicine and longevity science through a collaborative, team-based clinical practice.</strong>
          </p>
          <p>
            Through meticulous screening, advanced therapeutics, lifestyle optimization, and ongoing support,
            our multi-specialty team of more than 50 doctors across 15+ areas of specialty works together
            to deliver personalized family care — from pediatrics through geriatric care.
          </p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/8ea2b78e110e1adbf9b960963e29f6398ecd5325-640x880.jpg?w=640&fm=webp&auto=format`} alt="Atria Health and Research Institute" loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h3>We are on a mission to accelerate a global shift from reactive sick care to proactive, preventive health care.</h3>
          <p>Our goal is to prevent disease and extend healthy lifespan by translating the latest scientific discoveries into clinical practice — through longitudinal research and clinical innovation.</p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/8275eecf92a0ed1a637d17b62928335f6b7f2ed0-1280x1600.jpg?w=1280&fm=webp&auto=format`} alt="Atria clinical consultation" loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>The case for proactive medicine</h2>
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
        <img src={`${S}/c1168e0332e92d4b5ca223ef60ede07907b01979-2720x1600.jpg?w=2880&fm=webp&auto=format`} alt="The Atria Health Institute" loading="lazy" />
      </div>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>The Atria Health Institute</h2>
          <p>The Atria Health Institute is a membership-based health care organization delivering longevity and precision medicine through 50 full-time physicians across 15+ specialties. With on-site advanced testing and imaging technology, Atria provides integrated family care at the cutting edge of science.</p>
          <Link to="/institute" className="link-arrow">The Atria Health Institute <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home__block">
        <div className="home__image img-hover reveal">
          <img src={`${S}/3e74d4ba9609afe3fce4bbc2958cdec4d2384d69-1280x880.jpg?w=1280&fm=webp&auto=format`} alt="What makes Atria unique" loading="lazy" />
        </div>
        <div className="home__content reveal">
          <h2>What makes Atria unique</h2>
          <Link to="/institute" className="link-arrow">Learn more about membership <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home__block">
        <div className="home__image img-hover reveal">
          <img src={`${S}/859e4393879d9733d820d52d4d4556b4209064a7-1280x880.jpg?w=1280&fm=webp&auto=format`} alt="Membership for you and your family" loading="lazy" />
        </div>
        <div className="home__content reveal">
          <h2>Membership for you and your family</h2>
          <a href="mailto:membership@atria.org" className="link-arrow">Contact us about membership <ArrowIcon /></a>
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h3>Meet our doctors</h3>
          <p>Top clinicians in internal medicine, brain health, cardiology, endocrinology, exercise physiology, integrative health, medical dermatology, metabolic health, neurology, nutrition, pediatrics, performance and movement, women's and men's health, and more.</p>
          <Link to="/doctors" className="link-arrow">About our clinicians <ArrowIcon /></Link>
        </div>
        <div className="home__image home__image--portrait img-hover reveal">
          <img src={`${S}/9a870f4668b35018be159c7d6ec465d583e8107f-480x640.jpg?w=480&fm=webp&auto=format`} alt="Atria doctor" loading="lazy" />
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/2b732a0f388bb8bb7da5383821bedb476ce45710-1280x1600.jpg?w=1280&fm=webp&auto=format`} alt="Atria doctors team" loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <p>Atria's full-time, multi-specialty medical team practices medicine as it should be: in collaboration, at the leading-edge of science, and with a patient-first approach.</p>
          <p>We perform advanced imaging and in-depth screening on-site, establishing a new standard of prevention. And our Research Institute explores novel preventive strategies and shares its findings with the world.</p>
        </div>
        <div className="home__image img-hover reveal">
          <img src={`${S}/9ada95e1d3bbf97fe42fc39744e5f3e55fcb5748-640x880.jpg?w=640&fm=webp&auto=format`} alt="Atria clinical approach" loading="lazy" />
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>Explore our work</h2>
        </div>

        <div className="home__work-item reveal">
          <div className="home__image img-hover">
            <img src={`${S}/bf3eec2b98e004c41f235f3f3d4e3e7aa8d20b56-1280x800.jpg?w=1280&fm=webp&auto=format`} alt="Atria Research Institute" loading="lazy" />
          </div>
          <div className="home__work-text">
            <h4>The Atria Research Institute</h4>
            <p>Our Research Institute, comprised of 100+ fellows, explores innovative preventive strategies, publishes scientific findings, and works to accelerate the translation of breakthroughs into public health practice.</p>
            <Link to="/research" className="link-arrow">Meet our research fellows <ArrowIcon /></Link>
          </div>
        </div>

        <div className="home__work-item reveal">
          <div className="home__image img-hover">
            <img src={`${S}/b61c9f18b13d4291a33ba5e476cf625e52a5f755-1280x800.jpg?w=1280&fm=webp&auto=format`} alt="Health Education" loading="lazy" />
          </div>
          <div className="home__work-text">
            <h4>Health Education</h4>
            <p>Empowering people with modern medical knowledge for free. Our comprehensive library offers actionable guidance from Atria clinicians and our expert network on the most important topics in contemporary medicine.</p>
            <Link to="/education" className="link-arrow">Explore our library <ArrowIcon /></Link>
          </div>
        </div>

        <div className="home__work-item reveal">
          <div className="home__image img-hover">
            <img src={`${S}/203701c432ad011f27e1a4303f2a8efebd9e4ab5-1280x800.jpg?w=1280&fm=webp&auto=format`} alt="Atria Public Health" loading="lazy" />
          </div>
          <div className="home__work-text">
            <h4>Atria Public Health</h4>
            <p>We believe advances in science and medicine should benefit everyone. Our non-profit division partners with organizations to address healthcare equity gaps between underserved and well-resourced populations.</p>
            <Link to="/public-health" className="link-arrow">Meet our partners <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="home__block">
        <div className="home__content reveal">
          <h2>Connect with us.</h2>
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
