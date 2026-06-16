import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, company, email, projectType, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const subject = `New Enquiry — ${projectType || 'General'} | ${name}`

  const html = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <h2 style="color:#1a3a5c;border-bottom:2px solid #1a3a5c;padding-bottom:8px">New Project Enquiry</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
    <tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${company || '—'}</td></tr>
    <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1a3a5c">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">${projectType || '—'}</td></tr>
  </table>
  <div style="margin-top:20px">
    <p style="color:#666;margin-bottom:6px">Message / Brief</p>
    <div style="background:#f5f5f5;padding:16px;border-radius:6px;white-space:pre-wrap">${message || '—'}</div>
  </div>
  <p style="margin-top:24px;font-size:12px;color:#999">Sent from mima.pk contact form · Reply directly to respond to ${name}</p>
</div>`

  const { error } = await resend.emails.send({
    from: 'Mima Groups Website <noreply@mima.pk>',
    to: ['info@mima.pk'],
    replyTo: email,
    subject,
    html,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
