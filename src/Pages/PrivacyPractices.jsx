import privacyPractices from '../../data/PrivacyPractices.json'
import '../Styles/Pages/Legal.css'

const PrivacyPractices = () => {
  return (
    <div className="legal">
      <section className="legal__hero">
        <div className="container">
          <h1>{privacyPractices.Title}</h1>
          <p>Effective: {privacyPractices.Effective}</p>
        </div>
      </section>
      <section className="legal__content section">
        <div className="container container--narrow">
          {privacyPractices.Sections.map((s, i) => (
            <div key={i}>
              <h2>{s.Heading}</h2>
              <p>{s.Content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PrivacyPractices
