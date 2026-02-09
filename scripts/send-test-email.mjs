import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({ path: '.env.local' })

const env = (key, fallback) => process.env[key] ?? fallback

const host = env('SMTP_HOST', 'smtp.hostinger.com')
const port = Number(env('SMTP_PORT', '587'))
const secure = env('SMTP_SECURE', 'false') === 'true'
const user = env('SMTP_USER')
const pass = env('SMTP_PASS')
const fromName = env('SMTP_FROM_NAME', 'Test Sender')
const fromEmail = env('SMTP_FROM_EMAIL', user)
const toEmail = env('NOTIFY_EMAIL', fromEmail)

if (!user || !pass) {
  console.error('Missing SMTP_USER or SMTP_PASS in environment')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: { user, pass },
  authMethod: 'LOGIN',
  ...(port === 587 ? { requireTLS: true } : {}),
})

const now = new Date().toISOString()
const mailOptions = {
  from: `${fromName} <${fromEmail}>`,
  to: toEmail,
  subject: `Test SMTP Email (${now})`,
  text: `Hello, this is a test email sent at ${now}.\nEnvironment host=${host}, port=${port}, secure=${secure}.`,
}

async function main() {
  try {
    await transporter.verify()
    const info = await transporter.sendMail(mailOptions)
    console.log('Test email sent:', info.messageId)
    console.log('Envelope:', info.envelope)
  } catch (err) {
    console.error('Failed to send test email:', err?.stack || err)
    process.exit(2)
  }
}

main()

