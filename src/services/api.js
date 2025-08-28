const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export async function api(path, options={}) {
  const url = `${BASE}${path}`
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed: ${res.status}`)
  }
  return res.json()
}
