
// import ClipOne from "./components/ClipOne";
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (

    <BrowserRouter>
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
     
        </Routes>
      <Footer />
    </>
    </BrowserRouter>
  );
}
