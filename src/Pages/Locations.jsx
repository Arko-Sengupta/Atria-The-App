import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import pageLocations from '../../data/PageLocations.json'
import urls from '../../data/ExternalURLs.json'
import page from '../../data/LocationsPage.json'
import '../Styles/Pages/Locations.css'

const S = urls.SanityCDN

const Locations = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="locs" ref={pageRef}>
      <section className="locs__hero">
        <h1 className="reveal">{page.Hero.Title}</h1>
        <p className="locs__hero-sub reveal">{page.Hero.Subtitle}</p>
        <p className="reveal">{page.Hero.Body}</p>
      </section>

      <section className="locs__list section">
        <div className="container">
          {pageLocations.map((loc, i) => (
            <div key={i} className="locs__card reveal">
              <div className="locs__card-img img-hover">
                <img src={`${S}/${loc.Image}`} alt={loc.Name} loading="lazy" />
              </div>
              <div className="locs__card-info">
                <h3>{loc.Name}</h3>
                <p>{loc.Address}</p>
                {loc.Status === 'open' ? (
                  <>
                    <p className="locs__hours">{loc.Hours}</p>
                    <p className="locs__phone">{loc.Phone}</p>
                    <a href={`${page.MapsBaseURL}${encodeURIComponent(loc.Address)}`} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      {page.DirectionsLabel} <span className="link-arrow__icon"><svg viewBox="0 0 12 12"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg></span>
                    </a>
                  </>
                ) : (
                  <span className="locs__badge">{loc.Status}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="locs__contact reveal">
        <div className="container container--narrow">
          <h2>{page.ContactTitle}</h2>
          <div style={{ marginTop: '1.5rem' }}><ContactForm /></div>
        </div>
      </section>
    </div>
  )
}

export default Locations
