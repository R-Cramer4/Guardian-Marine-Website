import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Service from './Service.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Gallery from './Gallery.jsx'
import Brands from './Brands.jsx'


function App() {
    const [page, setPage] = useState('home');
    function handleClick(newPage){
        setPage(newPage)
    }
    return (
        <>
            <Header handleClick={handleClick} isHome={page == 'home'}/>
            {page == 'home' && <Home />}
            {page == 'services' && <Service />}
            {page == 'about' && <About />}
            {page == 'contact' && <Contact handleClick={handleClick} />}
            {page == 'gallery' && <Gallery />}
            {page == 'brands' && <Brands />}
            <Footer />
        </>
    )
}
export default App
