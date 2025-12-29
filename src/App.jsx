import { useState, useEffect } from 'react'
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
    const [serviceIndex, setServiceIndex] = useState(-1);
    function handleClick(newPage, index = -1){
        setPage(newPage);
        setServiceIndex(index);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);
    return (
        <>
            <Header handleClick={handleClick} isHome={page == 'home'}/>
            {page == 'home' && <Home handleClick={handleClick}/>}
            {page == 'services' && <Service index={serviceIndex}/>}
            {page == 'about' && <About />}
            {page == 'contact' && <Contact handleClick={handleClick} />}
            {page == 'gallery' && <Gallery />}
            {page == 'brands' && <Brands />}
            <Footer />
        </>
    )
}
export default App
