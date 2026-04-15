import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = schema.parse(body)

    const result = await getResend().emails.send({
      from: 'Aere Health <no-reply@aere.health>',
      to: 'admin@aere.health',
      subject: `Aere contact form — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nTime: ${new Date().toISOString()}`,
    })

    if (result.error) {
      console.error('[contact] Resend error:', result.error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0].message },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
