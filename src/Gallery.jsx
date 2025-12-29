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
        './src/assets/Photos/Gallery/BatteryAfter.jpg',
        './src/assets/Photos/Gallery/GarminCenterAfter.jpeg',
        './src/assets/Photos/Gallery/SolarBoatAfter.jpg',
        './src/assets/Photos/Gallery/GarminLeftAfter.jpg',
        './src/assets/Photos/Gallery/GarminRightAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelFrontAfter.jpg',
        './src/assets/Photos/Gallery/LowerPanelBackAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelAfter.jpg',
        './src/assets/Photos/Gallery/IMG_0559.jpg',
        './src/assets/Photos/Gallery/IMG_1658.jpg',
        './src/assets/Photos/Gallery/IMG_2229.jpg',
        './src/assets/Photos/Gallery/IMG_2266.jpg',
        './src/assets/Photos/Gallery/IMG_2894.jpg',
        './src/assets/Photos/Gallery/IMG_2920.jpg',
        './src/assets/Photos/Gallery/IMG_3018.jpg',
        './src/assets/Photos/Gallery/IMG_3125.jpg',
        './src/assets/Photos/Gallery/IMG_3812.jpg',
        './src/assets/Photos/Gallery/IMG_5623.jpg',
        './src/assets/Photos/Gallery/IMG_6915.jpg',
        './src/assets/Photos/Gallery/IMG_7089.jpg',
        './src/assets/Photos/Gallery/IMG_7143.jpg',
        './src/assets/Photos/Gallery/IMG_7203.jpg',
        './src/assets/Photos/Gallery/IMG_7720.jpg',
        './src/assets/Photos/Gallery/IMG_7766.jpg',
        './src/assets/Photos/Gallery/IMG_7846.jpg',
        './src/assets/Photos/Gallery/IMG_7855.jpg',
    ];
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
