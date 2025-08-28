import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">
          UstaBul <span className="text-gray-400 text-sm align-top">demo</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm hover:underline">Ana Sayfa</Link>
          <a href="#" className="text-sm hover:underline">Giriş</a>
          <a href="#" className="text-sm hover:underline">Kayıt</a>
        </nav>
      </div>
    </header>
  )
}
