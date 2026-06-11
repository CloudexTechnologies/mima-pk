'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('f-name') as HTMLInputElement).value,
      company: (form.elements.namedItem('f-co') as HTMLInputElement).value,
      email: (form.elements.namedItem('f-email') as HTMLInputElement).value,
      projectType: (form.elements.namedItem('f-type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('f-msg') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Something went wrong.')
      }
      setStatus('success')
      form.reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="f-name" type="text" placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="f-co">Company</label>
          <input id="f-co" name="f-co" type="text" placeholder="Organisation" />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="f-email" type="email" placeholder="name@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="f-type">Project Type</label>
          <select id="f-type" name="f-type">
            <option>Construction (Civil &amp; Interior)</option>
            <option>Electrical &amp; HVAC</option>
            <option>MEP &amp; Engineering</option>
            <option>Facility Management</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Brief</label>
        <textarea id="f-msg" name="f-msg" placeholder="A short note on scope, site, and timeline." style={{ minHeight: 110 }} />
      </div>
      <div className="form__actions">
        <button className="btn btn--solid-blue" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
        </button>
        {status === 'success' && (
          <span className="form__note">Thank you, we&apos;ll be in touch.</span>
        )}
        {status === 'error' && (
          <span className="form__note" style={{ color: '#c0392b' }}>{errorMsg}</span>
        )}
      </div>
    </form>
  )
}
