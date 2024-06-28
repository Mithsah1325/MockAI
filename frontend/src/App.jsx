import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignIn from './pages/SignIn.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SignUp from './pages/SignUp.jsx'
import Chat from './pages/Chat.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
