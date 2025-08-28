import { useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    api('/api/categories')
      .then((data) => {
        if (active) setCategories(data)
      })
      .catch((err) => setError(err.message || 'Bir hata oluştu'))
      .finally(() => setLoading(false))
    return () => { active = false }
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return categories
    return categories.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.slug.toLowerCase().includes(term)
    )
  }, [q, categories])

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-3">Hizmet Bul</h1>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nakliyat, Boya, Temizlik, Diyetisyen..."
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring"
          />
          <button className="px-4 py-2 rounded-xl border">Ara</button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-3">Popüler Kategoriler</h2>
        {loading && <div>Yükleniyor...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl p-5 shadow hover:shadow-md transition">
                <div className="text-xl font-semibold">{c.name}</div>
                <div className="text-sm text-gray-500 mt-1">{c.serviceCount.toLocaleString('tr-TR')} uzman</div>
                <div className="mt-4">
                  <button className="text-sm underline">Talep Oluştur</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
