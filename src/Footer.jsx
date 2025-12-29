import './index.css'
import './Footer.css'

export default function Footer(){
    return(
    
<footer>
    <div className="container">
        <div className="ft-left">
            <a href="https://abycinc.org/membership/member-directory/?id=34fc8c63-4175-49db-90a9-f2b9ed148d86"
                    >
                <img src="./src/assets/Photos/Brands/ABYC logo.png" alt="ABYC Logo" className="logos"/>
            </a>
        </div>
        <div className="flex-item">
            <ul>
                <h2>Contact Info</h2>
                <li>Chris Johnson</li>
                <li><a href="mailto:Service@guardianmarinect.com">Service@guardianmarinect.com</a></li>
                <li><a href="tel:203-214-3282">203-214-3282</a></li>
            </ul>
        </div>

        <div className="ft-right">
            <a href="https://web.nmea.org/Directory-Listing/Guardian-Marine-LLC-8887">
                <img src="./src/assets/Photos/Brands/NMEA Logo.png" alt="NMEA Logo" className="logos"/>
            </a>
        </div>
    </div>

</footer>
    )
}
