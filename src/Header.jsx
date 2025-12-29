import { useState } from 'react';
import './index.css'
import './Header.css'

function MissionStatement({isHome}) {
    if (!isHome) return;
    return (
        <div className='mission-statement'>
            <h3 className='mission-text'>
                Our mission is to provide exceptional marine electrical, electronic, and systems solutions grounded in ABYC and NMEA standards.
            </h3>
        </div>
    )
}

function DropButton({changeSite}){
    const [active, setActive] = useState(false);

    function handleClick(name){
        setActive((act) => {return !act;});
        if(name == '') return; 
        changeSite(name);
    }
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => handleClick('')}/>
            <div className={active ? "dropdown-content dc-active" : "dropdown-content"}>
                <a onClick={() => handleClick('home')} className="drop-label">Home</a>
                <a onClick={() => handleClick('about')} className="drop-label">About</a>
                <a onClick={() => handleClick('services')} className="drop-label">Services</a>
                <a onClick={() => handleClick('gallery')} className="drop-label">Gallery</a>
                <a onClick={() => handleClick('brands')} className="drop-label">Our Brands</a>
                <a onClick={() => handleClick('contact')} className="drop-label">Contact</a>
            </div>
        </div>
    );
}


function Header({handleClick, isHome}){
    return(
        <header className={(isHome ? 'header-home ' : '') + 'light-theme'}>
            <div className="phone-number">
                <a href='tel:203-214-3282'>
                    <h5 className="phone-number-text">(203) 214-3282</h5>
                </a>
            </div>
            <div className="main-header">
                <div className="left">
                    <a onClick={() => handleClick('home')}>
                        <img src="./src/assets/Logo.png" alt="Logo" className = "logo"/>
                    </a>
                    <h4 className='brand-text'>Guardian Marine</h4>
                </div>

                <div className="top-right">
                    <div className="mobile">
                        <DropButton changeSite={handleClick} />

                    </div>
                    <div className="computer">
                        <div className="right">
                            <a onClick={() => handleClick('home')} className="label">Home</a>
                            <a onClick={() => handleClick('about')} className="label">About</a>
                            <a onClick={() => handleClick('services')} className="label">Services</a>
                            <a onClick={() => handleClick('gallery')} className="label">Gallery</a>
                            <a onClick={() => handleClick('brands')} className="label">Our Brands</a>
                            <a onClick={() => handleClick('contact')} className="label">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isHome ? 'header-spacer' : ''}/>
            <MissionStatement isHome={isHome}/>

        </header>
    )
}


export default Header
