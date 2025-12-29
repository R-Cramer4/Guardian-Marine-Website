import './index.css'
import './Home.css'
import {useState, useEffect, useRef} from 'react';

function Card({ image, imageName, link, animationSpeed }) {
    return (
        <div
            className='brand-card'
            style={{ 
                animationDuration: `${animationSpeed}s`
            }}
        >
            <a className='card-image' href={link}>
                <img src={image} alt={imageName} className="home-logos" />
            </a>
        </div>
    );
}

function ScrollingBrands({ brands }) {
    const containerRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);
    const [animationSpeed, setAnimationSpeed] = useState(25);

    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                // Since we render the list twice, the loop point 
                // is exactly half of the total scrollWidth.
                const totalWidth = containerRef.current.scrollWidth;
                const singleSetWidth = totalWidth / 2;
                
                setScrollDistance(singleSetWidth);
                setAnimationSpeed(brands.length * 3); 
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [brands.length]);

    const keyframes = `
        @keyframes animateCards {
            100% { transform: translateX(-${scrollDistance}px); }
        }
    `;

    return (
        <div className="card-holder">
            <style>{keyframes}</style>
            <div 
                className="companies-c" 
                ref={containerRef}
                style={{
                    animation: `animateCards ${animationSpeed}s linear infinite`
                }}
            >
                {[...brands, ...brands].map((el, index) => (
                    <Card
                        key={index}
                        image={el.image}
                        imageName={el.name}
                        link={el.link}
                        animationSpeed={animationSpeed}
                    />
                ))}
            </div>
        </div>
    );
}

function FadeImages({images}){
    const initIndex = {
        i0: 0,
        i1: 2,
        next: 1,
    }
    const [fade, setFade] = useState(false);
    const[imgIndex, setImgIndex] = useState(initIndex);
    useEffect(() => {
        const interval = setInterval(() => {

            setFade(true);
            setTimeout(() => {
                setFade(false);
                setImgIndex((prevI) => {
                    const newI = prevI;
                    if((prevI.i0 + 2) % images.length == prevI.i1){
                        newI.i0 = (newI.i0 + 2) % images.length;
                        newI.next = 0;
                        return newI;
                    }else{
                        newI.i1 = (newI.i1 + 2) % images.length;
                        newI.next = 1;
                        return newI;
                    }
                })
            }, 2000);
        }, 6000);
        return () => clearInterval(interval);
    });

    return (
        <div className='photo-banner'>
            <div className={getCur(0, imgIndex.next)}>
                <img src={images[imgIndex.i0]} alt="Before" className={getName(0, imgIndex.next, fade)}/>
                <img src={images[imgIndex.i0 + 1]} alt="After" className={getName(0, imgIndex.next, fade)}/>
            </div>
            <div className={getCur(1, imgIndex.next)}>
                <img src={images[imgIndex.i1]} alt="Before" className={getName(1, imgIndex.next, fade)}/>
                <img src={images[imgIndex.i1 + 1]} alt="After" className={getName(1, imgIndex.next, fade)}/>
            </div>
        </div>
    )
}
function getName(ind, next, fade){
    let classes = 'photos';
    if(next == ind){
        if(!fade) classes += ' inactive';
        else classes += ' fade-in';
    }else{
        if(!fade) classes += ' active';
        else classes += ' fade-out';
    }
    return classes;
}
function getCur(ind, next){
    let classes = '';
    const w = window.innerWidth;
    if(w < 750) classes += ' p-mobile';
    else classes += ' p-computer';
    if(next == ind) classes += ' img-next';
    classes += ' img-current';
    return classes;
}

export default function Home(){
    const images = [
        './src/assets/Photos/Gallery/BatteryBefore.jpg',
        './src/assets/Photos/Gallery/BatteryAfter.jpg',
        './src/assets/Photos/Gallery/GarminCenterBefore.jpeg',
        './src/assets/Photos/Gallery/GarminCenterAfter.jpeg',
        './src/assets/Photos/Gallery/GarminLeftBefore.jpg',
        './src/assets/Photos/Gallery/GarminLeftAfter.jpg',
        './src/assets/Photos/Gallery/GarminRightBefore.jpg',
        './src/assets/Photos/Gallery/GarminRightAfter.jpg',
        './src/assets/Photos/Gallery/LowerPanelBackBefore.jpg',
        './src/assets/Photos/Gallery/LowerPanelBackAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelBefore.jpg',
        './src/assets/Photos/Gallery/UpperPanelAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelFrontBefore.jpg',
        './src/assets/Photos/Gallery/UpperPanelFrontAfter.jpg',
    ]
    const brands = [
        {
            image: "./src/assets/Photos/Brands/ABYCMasterTech.png",
            name: "ABYC logo",
            link: "https://abycinc.org/membership/member-directory/?id=34fc8c63-4175-49db-90a9-f2b9ed148d86"
        },
        {
            image: "./src/assets/Photos/Brands/integrel_logo.png",
            name: "integrel logo",
            link: "https://integrelsolutions.com/"
        },
        {
            image: "./src/assets/Photos/Brands/NMEA Logo.png",
            name: "NMEA logo",
            link: "https://web.nmea.org/Directory-Listing/Guardian-Marine-LLC-8887"
        },
        {
            image: "./src/assets/Photos/Brands/Victron.png",
            name: "Victron logo",
            link: "https://www.victronenergy.com/"
        },
        {
            image: "./src/assets/Photos/Brands/garmin.svg",
            name: "garmin logo",
            link: "https://www.garmin.com/"
        },
        {
            image: "./src/assets/Photos/Brands/RaymarineLogo.png",
            name: "Raymarine logo",
            link: "https://www.raymarine.com/"
        },
        {
            image: "./src/assets/Photos/Brands/Sleipner Logo.png",
            name: "Sleipner logo",
            link: "https://www.sleipnergroup.com/"
        },
        {
            image: "./src/assets/Photos/Brands/BG.png",
            name: "B&G logo",
            link: "https://www.bandg.com/"
        },
        {
            image: "./src/assets/Photos/Brands/czone.png",
            name: "CZone logo",
            link: "https://czone.navico.com/marine/"
        },
        {
            image: "./src/assets/Photos/Brands/mastervolt.png",
            name: "Mastervolt logo",
            link: "https://www.mastervolt.com/"
        },
    ]
    return(
        <main className="light-theme">

            <FadeImages images={images}/>

            <div className='slogan-banner'>
                <h2 className='slogan'>Marine systems, customized to fit your needs</h2>
            </div>
            <ScrollingBrands brands={brands}/>
        </main>
    )
}
