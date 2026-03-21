import { useState, useMemo } from 'react'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import articlesData from '../../data/Articles.json'
import page from '../../data/EducationPage.json'
import '../Styles/Pages/Education.css'

const Education = () => {
  const [typeFilter, setTypeFilter] = useState('All')
  const [subjectFilter, setSubjectFilter] = useState('All')
  const pageRef = UseScrollReveal()

  const filtered = useMemo(() => {
    return articlesData.Articles.filter(a => {
      if (typeFilter !== 'All' && a.Type !== typeFilter) return false
      if (subjectFilter !== 'All' && !a.Subjects.includes(subjectFilter)) return false
      return true
    })
  }, [typeFilter, subjectFilter])

  return (
    <div className="education" ref={pageRef}>
      <section className="education__hero">
        <div className="container">
          <h1 className="reveal">{page.Hero.Title}</h1>
          <p className="education__hero-tagline reveal">{page.Hero.Tagline}</p>
          <p className="education__hero-desc reveal">{page.Hero.Description}</p>
        </div>
      </section>

      <section className="education__filters">
        <div className="container">
          <div className="education__filter-bar">
            <div className="education__filter-group">
              <label>{page.Filters.TypeLabel}</label>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                {articlesData.ContentTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="education__filter-group">
              <label>{page.Filters.SubjectLabel}</label>
              <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                {articlesData.AllSubjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <span className="education__count">{filtered.length} {filtered.length === 1 ? page.Filters.ItemSingular : page.Filters.ItemPlural}</span>
          </div>
        </div>
      </section>

      <section className="education__content section">
        <div className="container">
          <div className="education__grid">
            {filtered.map((article, i) => (
              <article key={i} className="education__card reveal">
                <div className="education__card-image" style={{ background: `linear-gradient(135deg, hsl(${150 + (i * 13) % 60}, 18%, ${50 + (i * 7) % 20}%), hsl(${160 + (i * 17) % 50}, 22%, ${40 + (i * 5) % 15}%))` }}>
                  {article.Type === 'Video' && (
                    <div className="education__play-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                    </div>
                  )}
                </div>
                <div className="education__card-content">
                  <div className="education__card-meta">
                    <span className={`education__type-badge education__type-badge--${article.Type.toLowerCase()}`}>{article.Type}</span>
                  </div>
                  <h3 className="education__card-title">{article.Title}</h3>
                  <div className="education__card-tags">
                    {article.Subjects.map(s => <span key={s} className="education__subject-tag">{s}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="education__empty text-center">{page.EmptyMessage}</p>}
        </div>
      </section>
    </div>
  )
}

export default Education
