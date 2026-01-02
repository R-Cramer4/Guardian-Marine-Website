import { useState } from 'react';
import './index.css';
import './Service.css';
import dropData from './Services.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

function Dropdown({show, clickE, text}){
    return (
        <div className='service-p'>
            <h3 className={show[text] != -1 ? 'service w-content' : 'service wo-content'} onClick={() => {clickE(text);}}>
                {dropData.dropdowns[text].name}
            </h3>
            <DropContent text={text} show={show} />
        </div>
    )
}
function DropContent({text, show}){
    return (
        <div className={show[text] == -1 ? 'service-drop' : 'service-drop active-drop'}>
            <p className='service-text'>{dropData.dropdowns[text].text}</p>
            <div className='carousel-holder'>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1300
                            },
                            items: 2,
                            partialVisibilityGutter: 40
                        },
                        tablet: {
                            breakpoint: {
                                max: 1300,
                                min: 464, 
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0 
                            },
                            items: 1,
                            partialVisibilityGutter: 0
                        },
                    }}
                    showDots={false}
                    swipeable
                    slidesToSlide={1}
                >
                    {dropData.dropdowns[text].photos.map((photo, index) => (
                        <img 
                            key={index}
                            src={photo} 
                            alt={index} 
                            className="service-img"
                        />

                    ))}
                </Carousel>
            </div>
        </div>
    )
}


export default function Service({index}){
    let initState = [-1, -1, -1, -1];
    if (index != -1) {
        initState[index] = index;
    }
    const [show, setShow] = useState(initState);
    function clickE(index){
        const nextState = show.map((c, i) => {
            if(i === index){
                if(c == -1){
                    return i;
                }
                else{
                    return -1;
                }
            }else{
                return c;
            }
        });
        setShow(nextState);
    }
    return (
        <div className = "light-theme">
            <div className='services-holder'>
                <Dropdown show={show} clickE={clickE} text={0}/>
                <Dropdown show={show} clickE={clickE} text={1}/>
                <Dropdown show={show} clickE={clickE} text={2}/>
                <Dropdown show={show} clickE={clickE} text={3}/>
            </div>
            <div className='spacer'/>
            <div className='spacer'/>
            <div className='spacer'/>
            <div className='spacer'/>
        </div>
    )
}
