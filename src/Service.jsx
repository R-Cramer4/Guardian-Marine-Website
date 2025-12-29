import { useState } from 'react';
import './index.css';
import './Service.css';
import dropData from './Services.json';

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
            <img src={dropData.dropdowns[text].photos[0]} alt="Before" className="service-img"/>
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
