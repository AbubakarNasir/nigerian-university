import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Departments from './Departments'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/academics" element={<Academics />} />

          <Route path="/admissions" element={<Admissions />} />

          <Route path="/departments" element={<Departments />} />

          <Route path="/news-events" element={<News />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
