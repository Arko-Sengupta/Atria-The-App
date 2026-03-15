import terms from '../../Data/Terms.json'
import '../Styles/Pages/Legal.css'

const Terms = () => {
  return (
    <div className="legal">
      <section className="legal__hero">
        <div className="container">
          <h1>{terms.Title}</h1>
          <p>Last updated: {terms.LastUpdated}</p>
        </div>
      </section>
      <section className="legal__content section">
        <div className="container container--narrow">
          {terms.Sections.map((s, i) => (
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

export default Terms
