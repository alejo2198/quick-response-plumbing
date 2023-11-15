import './App.scss'

import Header from './components/Header/Header.jsx'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
     <Header/>
     <main>
        <Services/>
        <WhyUs/>
        <Carousel/>
     </main>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App
