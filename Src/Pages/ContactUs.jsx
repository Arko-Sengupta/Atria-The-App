import ContactForm from '../Components/ContactForm'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import contactInfo from '../../Data/ContactInfo.json'
import '../Styles/Pages/ContactUs.css'

const ContactUs = () => {
  const pageRef = UseScrollReveal()

  return (
    <div className="contact-us" ref={pageRef}>
      <section className="contact-us__hero">
        <div className="container">
          <h1 className="reveal">Contact Us</h1>
          <p className="reveal">Please use the form below to get in touch.</p>
        </div>
      </section>

      <section className="contact-us__main section">
        <div className="container">
          <div className="contact-us__grid">
            <div className="contact-us__form-col reveal">
              <ContactForm />
            </div>
            <div className="contact-us__info-col reveal--right reveal">
              <div className="contact-us__emails">
                <h3>Email Us</h3>
                {contactInfo.Contacts.map((c, i) => (
                  <div key={i} className="contact-us__email-item">
                    <span className="contact-us__email-label">{c.Label}</span>
                    <a href={`mailto:${c.Email}`} className="contact-us__email-link">{c.Email}</a>
                  </div>
                ))}
              </div>

              <div className="contact-us__locations">
                <h3>Our Locations</h3>
                {contactInfo.Locations.map((loc, i) => (
                  <div key={i} className="contact-us__location-item">
                    <h4>{loc.Name}</h4>
                    <p>{loc.Address}</p>
                    {loc.Phone && <p className="contact-us__phone">{loc.Phone}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
