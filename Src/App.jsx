import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Institute from './Pages/Institute'
import Doctors from './Pages/Doctors'
import Locations from './Pages/Locations'
import ContactUs from './Pages/ContactUs'
import Research from './Pages/Research'
import Education from './Pages/Education'
import PublicHealth from './Pages/PublicHealth'
import OurStory from './Pages/OurStory'
import Terms from './Pages/Terms'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import PrivacyPractices from './Pages/PrivacyPractices'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/research" element={<Research />} />
          <Route path="/education" element={<Education />} />
          <Route path="/public-health" element={<PublicHealth />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-practices" element={<PrivacyPractices />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
