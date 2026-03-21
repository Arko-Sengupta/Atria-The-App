import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import navigation from '../../data/Navigation.json'
import urls from '../../data/ExternalURLs.json'
import '../Styles/Components/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const HandleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', HandleScroll)
    return () => window.removeEventListener('scroll', HandleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${mobileOpen ? 'nav--menu-open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">{navigation.Logo}</Link>

        <nav className="nav__menu">
          <div
            className="nav__item nav__item--has-dropdown"
            onMouseEnter={() => setActiveDropdown('institute')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav__link">
              {navigation.InstituteLabel}
              <svg className="nav__chevron" width="8" height="5" viewBox="0 0 8 5" fill="none">
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <div className={`nav__dropdown ${activeDropdown === 'institute' ? 'nav__dropdown--visible' : ''}`}>
              {navigation.InstituteLinks.map(link => (
                <Link key={link.To} to={link.To} className="nav__dropdown-item">{link.Label}</Link>
              ))}
            </div>
          </div>

          <div
            className="nav__item nav__item--has-dropdown"
            onMouseEnter={() => setActiveDropdown('work')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav__link">
              {navigation.WorkLabel}
              <svg className="nav__chevron" width="8" height="5" viewBox="0 0 8 5" fill="none">
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <div className={`nav__dropdown ${activeDropdown === 'work' ? 'nav__dropdown--visible' : ''}`}>
              {navigation.WorkLinks.map(link => (
                <Link key={link.To} to={link.To} className="nav__dropdown-item">{link.Label}</Link>
              ))}
            </div>
          </div>

          <Link to={navigation.ContentLink.To} className="nav__link">{navigation.ContentLink.Label}</Link>
          <Link to={navigation.DoctorsLink.To} className="nav__link">{navigation.DoctorsLink.Label}</Link>
        </nav>

        <a
          href={urls.MemberPortal}
          target="_blank"
          rel="noopener noreferrer"
          className="nav__login"
        >
          {navigation.LoginText}
        </a>

        <button
          className={`nav__burger ${mobileOpen ? 'nav__burger--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${mobileOpen ? 'nav__mobile--open' : ''}`}>
        <div className="nav__mobile-scroll">
          <div className="nav__mobile-group">
            <span className="nav__mobile-label">{navigation.InstituteLabel}</span>
            {navigation.InstituteLinks.map(link => (
              <Link key={link.To} to={link.To} className="nav__mobile-item">{link.Label}</Link>
            ))}
          </div>
          <div className="nav__mobile-group">
            <span className="nav__mobile-label">{navigation.WorkLabel}</span>
            {navigation.WorkLinks.map(link => (
              <Link key={link.To} to={link.To} className="nav__mobile-item">{link.Label}</Link>
            ))}
          </div>
          <div className="nav__mobile-group">
            <Link to={navigation.ContentLink.To} className="nav__mobile-item">{navigation.ContentLink.Label}</Link>
            <Link to={navigation.DoctorsLink.To} className="nav__mobile-item">{navigation.DoctorsLink.Label}</Link>
            <a href={urls.MemberPortal} target="_blank" rel="noopener noreferrer" className="nav__mobile-item">{navigation.LoginText}</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
