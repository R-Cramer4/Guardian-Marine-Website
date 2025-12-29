import './index.css'
import './Gallery.css'

function Column({index, images}) {
    var imgs = [];
    for (let i = 0; i < images.length; i++) {
        if (i % 3 != index) continue;
        imgs.push(
            <img src={images[i]} alt={'gallery image ' + i}/>
        );
    }
    return (
        <div className='gall-col'>
            {imgs}
        </div>
    )
}

export default function Gallery(){
    const images = [
        './assets/Photos/Gallery/BatteryAfter.jpg',
        './assets/Photos/Gallery/GarminCenterAfter.jpeg',
        './assets/Photos/Gallery/SolarBoatAfter.jpg',
        './assets/Photos/Gallery/GarminLeftAfter.jpg',
        './assets/Photos/Gallery/GarminRightAfter.jpg',
        './assets/Photos/Gallery/UpperPanelFrontAfter.jpg',
        './assets/Photos/Gallery/LowerPanelBackAfter.jpg',
        './assets/Photos/Gallery/UpperPanelAfter.jpg',
        './assets/Photos/Gallery/IMG_0559.jpg',
        './assets/Photos/Gallery/IMG_1658.jpg',
        './assets/Photos/Gallery/IMG_2229.jpg',
        './assets/Photos/Gallery/IMG_2266.jpg',
        './assets/Photos/Gallery/IMG_2894.jpg',
        './assets/Photos/Gallery/IMG_2920.jpg',
        './assets/Photos/Gallery/IMG_3018.jpg',
        './assets/Photos/Gallery/IMG_3125.jpg',
        './assets/Photos/Gallery/IMG_3812.jpg',
        './assets/Photos/Gallery/IMG_5623.jpg',
        './assets/Photos/Gallery/IMG_7089.jpg',
        './assets/Photos/Gallery/IMG_7143.jpg',
        './assets/Photos/Gallery/IMG_7720.jpg',
        './assets/Photos/Gallery/IMG_7766.jpg',
        './assets/Photos/Gallery/IMG_7846.jpg',
        './assets/Photos/Gallery/IMG_7855.jpg',
    ];
    const bad_images = [
        './assets/Photos/Gallery/IMG_7203.jpg',
        './assets/Photos/Gallery/IMG_6915.jpg',
    ]
    return (
        <div>
            <div className='gall-row'>
                <Column images={images} index={0}/>
                <Column images={images} index={1}/>
                <Column images={images} index={2}/>
            </div>
        </div>
    )
}
