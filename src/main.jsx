import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/privacy" element={<Privacy />}/>
      <Route path="/terms" element={<Terms />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
)
