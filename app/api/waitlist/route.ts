import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase/client'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = schema.parse(body)

    const { error } = await supabase
      .from('waitlist')
      .insert({ email, source: 'marketing_teaser' })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: true })
      }
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 },
      )
    }

    // Send notification email (don't block the response on failure)
    getResend().emails.send({
      from: 'Aere Health <no-reply@aere.health>',
      to: 'admin@aere.health',
      subject: 'New Aere waitlist signup',
      text: `New waitlist signup: ${email}\nTime: ${new Date().toISOString()}\nSource: marketing_teaser`,
    }).catch((err) => { console.error('Waitlist notification failed:', err) })

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
