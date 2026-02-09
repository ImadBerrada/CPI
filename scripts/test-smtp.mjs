import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import nodemailer from 'nodemailer'

const env = (key, fallback) => process.env[key] ?? fallback

const host = env('SMTP_HOST', 'smtp.hostinger.com')
const portEnv = Number(env('SMTP_PORT', '465'))
const secureEnv = env('SMTP_SECURE', 'true') === 'true'
const user = env('SMTP_USER')
const pass = env('SMTP_PASS')

if (!user || !pass) {
  console.error('Missing SMTP_USER or SMTP_PASS in environment')
  process.exit(1)
}

function createTransport(cfg) {
  return nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user, pass },
    authMethod: 'LOGIN',
    ...(cfg.port === 587 ? { requireTLS: true } : {}),
  })
}

const candidates = [
  { host, port: portEnv, secure: secureEnv },
  { host: portEnv === 465 ? 587 : 465, secure: portEnv === 465 ? false : true, host: host },
  { host: 'mail.bureau-immatriculation.com', port: 465, secure: true },
  { host: 'mail.bureau-immatriculation.com', port: 587, secure: false },
  { host: 'smtp.titan.email', port: 465, secure: true },
  { host: 'smtp.titan.email', port: 587, secure: false },
]

async function main() {
  let lastErr = null
  for (const cfg of candidates) {
    try {
      const t = createTransport(cfg)
      console.log(`Verifying ${cfg.host}:${cfg.port} secure=${cfg.secure}`)
      await t.verify()
      console.log('Success! Login verified.')
      process.exit(0)
    } catch (err) {
      lastErr = err
      console.warn(`Failed: ${cfg.host}:${cfg.port} secure=${cfg.secure}`)
      console.warn(err?.message || err)
    }
  }
  console.error('All candidates failed. Last error:')
  console.error(lastErr?.stack || lastErr)
  process.exit(2)
}

main().catch((e) => {
  console.error(e)
  process.exit(3)
})
