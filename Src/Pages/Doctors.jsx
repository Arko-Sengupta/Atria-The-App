import { useState, useMemo } from 'react'
import UseScrollReveal from '../Hooks/UseScrollReveal'
import doctorsData from '../../Data/Doctors.json'
import '../Styles/Pages/Doctors.css'

const GetInitials = (name) => {
  const clean = name.replace(/,.*$/, '').replace(/\s+(MD|PhD|DO|DPT|ND|LAc|RD|MPH|MS|MBA).*$/i, '')
  const parts = clean.trim().split(' ')
  return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0]
}

const GetHue = (name) => {
  let h = 0
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h)
  return 145 + (Math.abs(h) % 30)
}

const Doctors = () => {
  const [locFilter, setLocFilter] = useState('All')
  const [specFilter, setSpecFilter] = useState('All')
  const pageRef = UseScrollReveal()

  const allSpecialties = useMemo(() => ['All', ...Array.from(new Set(doctorsData.Doctors.map(d => d.Specialty))).sort()], [])

  const filtered = useMemo(() => {
    return doctorsData.Doctors.filter(d => {
      if (locFilter !== 'All' && !d.Location.includes(locFilter)) return false
      if (specFilter !== 'All' && d.Specialty !== specFilter) return false
      return true
    })
  }, [locFilter, specFilter])

  return (
    <div className="doc-page" ref={pageRef}>
      <section className="doc-page__hero">
        <h1 className="reveal">Our Doctors</h1>
        <p className="doc-page__tagline reveal">Excellence and compassion in action.</p>
        <p className="doc-page__subtitle reveal">Our clinical team works at the forefront of science and medicine, combining deep expertise with seamless collaboration to deliver the best possible care.</p>
      </section>

      <div className="doc-page__filters">
        <div className="container">
          <div className="doc-page__filter-row">
            <div className="doc-page__filter">
              <label>Location</label>
              <select value={locFilter} onChange={(e) => setLocFilter(e.target.value)}>
                {doctorsData.AllLocations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="doc-page__filter">
              <label>Specialty</label>
              <select value={specFilter} onChange={(e) => setSpecFilter(e.target.value)}>
                {allSpecialties.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <span className="doc-page__count">{filtered.length} {filtered.length === 1 ? 'doctor' : 'doctors'}</span>
          </div>
        </div>
      </div>

      <section className="doc-page__list section">
        <div className="container">
          <div className="doc-grid">
            {filtered.map((doc, i) => {
              const hue = GetHue(doc.Name)
              const light = 38 + (i % 4) * 5
              return (
                <div key={i} className="doc-card">
                  <div className="doc-card__photo" style={{ backgroundColor: `hsl(${hue}, 18%, ${light}%)` }}>
                    <span className="doc-card__initials">{GetInitials(doc.Name)}</span>
                  </div>
                  <div className="doc-card__info">
                    <h3 className="doc-card__name">{doc.Name}</h3>
                    <p className="doc-card__role">{doc.Role}</p>
                    <div className="doc-card__locations">
                      {doc.Location.map(l => <span key={l}>{l}</span>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {filtered.length === 0 && <p className="doc-page__empty">No doctors match your current filters.</p>}
        </div>
      </section>
    </div>
  )
}

export default Doctors
