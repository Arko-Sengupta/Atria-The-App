import { useState } from 'react'
import '../Styles/Components/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ subject: '', name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ subject: '', name: '', email: '', message: '' })
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <h3>Thank you!</h3>
        <p>We'll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={HandleSubmit}>
      <div className="contact-form__field">
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="contact-form__select"
          required
        >
          <option value="">Subject</option>
          <option value="membership">Membership Inquiry</option>
          <option value="general">General Inquiry</option>
          <option value="press">Press</option>
          <option value="careers">Careers</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="contact-form__field">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="contact-form__input"
          required
        />
      </div>
      <div className="contact-form__field">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="contact-form__input"
          required
        />
      </div>
      <div className="contact-form__field">
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Message"
          className="contact-form__textarea"
          rows={5}
          required
        />
      </div>
      <button type="submit" className="contact-form__submit">Send</button>
    </form>
  )
}

export default ContactForm
