'use client'

import { useState, useRef } from 'react'

export default function CareerForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fileName, setFileName] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData()
    formData.append('name', (form.elements.namedItem('c-name') as HTMLInputElement).value)
    formData.append('email', (form.elements.namedItem('c-email') as HTMLInputElement).value)
    formData.append('phone', (form.elements.namedItem('c-phone') as HTMLInputElement).value)
    formData.append('role', (form.elements.namedItem('c-role') as HTMLSelectElement).value)

    const file = fileRef.current?.files?.[0]
    if (file) formData.append('resume', file)

    try {
      const res = await fetch('/api/career', { method: 'POST', body: formData })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Something went wrong.')
      }
      setStatus('success')
      form.reset()
      setFileName('')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-name">Full Name</label>
          <input id="c-name" name="c-name" type="text" placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="c-email" type="email" placeholder="name@email.com" required />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="c-phone" type="tel" placeholder="+92 3XX XXXXXXX" />
        </div>
        <div className="field">
          <label htmlFor="c-role">Position Applying For</label>
          <select id="c-role" name="c-role" required>
            <option value="">Select a role</option>
            <option>MEP Engineer</option>
            <option>Electrical Engineer</option>
            <option>HVAC Engineer</option>
            <option>Civil / Structural Engineer</option>
            <option>Project Manager</option>
            <option>Site Supervisor</option>
            <option>Facility Management Technician</option>
            <option>Quantity Surveyor</option>
            <option>AutoCAD / Drafting</option>
            <option>Finance &amp; Accounts</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label>Upload Resume</label>
        <div
          className="career-upload"
          onClick={() => fileRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label="Upload resume file"
        >
          <input
            ref={fileRef}
            id="c-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            style={{ display: 'none' }}
          />
          <span className="career-upload__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 13V4M10 4L7 7M10 4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="career-upload__label">
            {fileName || 'Click to attach PDF or Word document'}
          </span>
          <span className="career-upload__hint">PDF, DOC, DOCX · Max 5 MB</span>
        </div>
      </div>

      <div className="form__actions">
        <button className="btn btn--solid-blue" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit Application'}
        </button>
        {status === 'success' && (
          <span className="form__note">Application received. We&apos;ll be in touch.</span>
        )}
        {status === 'error' && (
          <span className="form__note" style={{ color: '#c0392b' }}>{errorMsg}</span>
        )}
      </div>
    </form>
  )
}
