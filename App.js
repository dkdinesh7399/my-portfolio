
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App