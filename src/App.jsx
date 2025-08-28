import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
