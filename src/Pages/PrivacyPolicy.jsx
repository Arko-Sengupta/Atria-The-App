import privacyPolicy from '../../data/PrivacyPolicy.json'
import '../Styles/Pages/Legal.css'

const PrivacyPolicy = () => {
  return (
    <div className="legal">
      <section className="legal__hero">
        <div className="container">
          <h1>{privacyPolicy.Title}</h1>
          <p>Last updated: {privacyPolicy.LastUpdated}</p>
        </div>
      </section>
      <section className="legal__content section">
        <div className="container container--narrow">
          {privacyPolicy.Sections.map((s, i) => (
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

export default PrivacyPolicy
