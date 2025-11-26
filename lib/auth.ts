const ADMIN_SECRET = process.env.ADMIN_SECRET || "changeme-secret"

type AdminPayload = {
  username: string
  iat: number
}

function base64urlEncodeString(str: string): string {
  const b64 = btoa(str)
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function base64urlDecodeToString(b64url: string): string {
  let b64 = b64url.replace(/-/g, "+").replace(/_/g, "/")
  while (b64.length % 4) b64 += "="
  return atob(b64)
}

function toBase64Url(bytes: ArrayBuffer): string {
  const arr = new Uint8Array(bytes)
  let binary = ""
  for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i])
  return base64urlEncodeString(binary)
}

async function getHmacKey() {
  const enc = new TextEncoder()
  return await crypto.subtle.importKey(
    "raw",
    enc.encode(ADMIN_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  )
}

export async function signAdminSession(username: string): Promise<string> {
  const payload: AdminPayload = { username, iat: Date.now() }
  const payloadStr = JSON.stringify(payload)
  const payloadB64 = base64urlEncodeString(payloadStr)
  const key = await getHmacKey()
  const sigBuf = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64))
  const signature = toBase64Url(sigBuf)
  return `${payloadB64}.${signature}`
}

export async function verifyAdminToken(token: string | undefined | null): Promise<AdminPayload | null> {
  if (!token) return null
  const parts = token.split(".")
  if (parts.length !== 2) return null
  const [payloadB64, sig] = parts
  const key = await getHmacKey()
  const sigBuf = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64))
  const expected = toBase64Url(sigBuf)
  if (expected !== sig) return null
  try {
    const json = base64urlDecodeToString(payloadB64)
    const payload = JSON.parse(json) as AdminPayload
    if (!payload?.username) return null
    return payload
  } catch {
    return null
  }
}

export async function hashPassword(password: string, salt?: string) {
  const nodeCrypto = await import("crypto")
  const actualSalt = salt || nodeCrypto.randomBytes(16).toString("hex")
  const hash = nodeCrypto.pbkdf2Sync(password, actualSalt, 100_000, 32, "sha256").toString("hex")
  return { hash, salt: actualSalt }
}

export async function verifyPassword(password: string, hash: string, salt: string) {
  const nodeCrypto = await import("crypto")
  const computed = nodeCrypto.pbkdf2Sync(password, salt, 100_000, 32, "sha256").toString("hex")
  return nodeCrypto.timingSafeEqual(Buffer.from(computed, "hex"), Buffer.from(hash, "hex"))
}

export const ADMIN_COOKIE_NAME = "admin_token"