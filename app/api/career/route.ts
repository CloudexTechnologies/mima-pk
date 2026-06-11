import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const role = formData.get('role') as string
    const file = formData.get('resume') as File | null

    if (!name || !email || !role) {
      return NextResponse.json({ error: 'Name, email, and role are required.' }, { status: 400 })
    }

    const attachments: { filename: string; content: Buffer }[] = []

    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'Resume must be under 5 MB.' }, { status: 400 })
      }
      const bytes = await file.arrayBuffer()
      attachments.push({ filename: file.name, content: Buffer.from(bytes) })
    }

    await resend.emails.send({
      from: 'Mima Groups Careers <noreply@mima.pk>',
      to: 'career@mima.pk',
      replyTo: email,
      subject: `New Application — ${role} | ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <h2 style="color:#1a3a5c;border-bottom:2px solid #1a3a5c;padding-bottom:8px">New Job Application</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1a3a5c">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Position</td><td style="padding:8px 0;font-weight:600">${role}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Resume</td><td style="padding:8px 0">${file?.name ? `Attached: ${file.name}` : 'Not provided'}</td></tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#999">Sent from mima.pk careers form · Reply directly to respond to ${name}</p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[career] resend error', err)
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 })
  }
}
