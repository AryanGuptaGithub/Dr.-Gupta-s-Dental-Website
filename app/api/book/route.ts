import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // Integrate with email (nodemailer) or Google Sheets API
  console.log('Appointment inquiry:', body)
  // For now, simulate success
  return NextResponse.json({ success: true })
}