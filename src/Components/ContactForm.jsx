import { useState } from 'react'
import formData from '../../data/ContactFormData.json'
import '../Styles/Components/ContactForm.css'

const ContactForm = () => {
  const [formState, setFormState] = useState({ subject: '', name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ subject: '', name: '', email: '', message: '' })
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <h3>{formData.Success.Title}</h3>
        <p>{formData.Success.Body}</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={HandleSubmit}>
      <div className="contact-form__field">
        <select
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          className="contact-form__select"
          required
        >
          {formData.Subjects.map((s, i) => (
            <option key={i} value={s.Value}>{s.Label}</option>
          ))}
        </select>
      </div>
      <div className="contact-form__field">
        <input
          type="text"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder={formData.Placeholders.Name}
          className="contact-form__input"
          required
        />
      </div>
      <div className="contact-form__field">
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          placeholder={formData.Placeholders.Email}
          className="contact-form__input"
          required
        />
      </div>
      <div className="contact-form__field">
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder={formData.Placeholders.Message}
          className="contact-form__textarea"
          rows={5}
          required
        />
      </div>
      <button type="submit" className="contact-form__submit">{formData.SubmitText}</button>
    </form>
  )
}

export default ContactForm
