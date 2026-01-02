import './index.css'
import './About.css'

function Story() {
    return (
        <div className="story-holder">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2a4675' }}>
                Our Story
            </h2>
            <div className="story">
                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                </p>
                <p className="text-lg leading-relaxed">

                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
        </div>
    )
}
function Work() {
    return (
        <div className='services'>
            <div className="service-holder"
                style={{ backgroundColor: '#2a4675' }}>
                <div>
                    <h3 className='service-header'>Electrical Systems</h3>
                </div>
                <ul className="service-list">
                    <li className="service-list-item">
                        <span>Complete electrical system installation and rewiring</span>
                    </li>
                    <li className="service-list-item">
                        <span>Navigation and communication electronics</span>
                    </li>
                    <li className="service-list-item">
                        <span>Battery systems and solar installations</span>
                    </li>
                    <li className="service-list-item">
                        <span>Troubleshooting and diagnostics</span>
                    </li>
                    <li className="service-list-item">
                        <span>LED lighting upgrades and systems</span>
                    </li>
                </ul>
            </div>

            <div className="service-holder"
                style={{backgroundColor: '#364153'}}>
                <div>
                    <h3 className='service-header'>Electronic Systems</h3>
                </div>
                <ul className="service-list">
                    <li className="service-list-item">
                        <span>Advanced navigation system integration</span>
                    </li>
                    <li className="service-list-item">
                        <span>Multi-function display installation</span>
                    </li>
                    <li className="service-list-item">
                        <span>Network system design and setup</span>
                    </li>
                    <li className="service-list-item">
                        <span>Radar and autopilot systems</span>
                    </li>
                    <li className="service-list-item">
                        <span>Entertainment and communication systems</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
function Values() {
    return (
        <div className="values-holder">
            <h2 className="values-text">
                What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="values-text-holder">
                    <h3 className="values-text">
                        Certified Excellence
                    </h3>
                    <p className="values-text">
                        ABYC Master Technician and NMEA certified with manufacturer certifications for major marine electronics brands including Garmin, Raymarine, and Victron.
                    </p>
                </div>

                <div className="values-text-holder">
                    <h3 className="values-text">
                        Professional Service
                    </h3>
                    <p className="values-text">
                        Prompt response times and clear communication throughout every project, ensuring you're informed every step of the way.
                    </p>
                </div>

                <div className="values-text-holder">
                    <h3 className="values-text">
                        Quality Guaranteed
                    </h3>
                    <p className="values-text">
                        All work backed by our comprehensive warranty and commitment to using only marine-grade components and industry best practices.
                    </p>
                </div>
            </div>
        </div>
    )
}
function Standards() {
    return (
        <div className="standards-holder">
            <h2 className="standards-text">
                Industry Standards & Compliance
            </h2>
            <div className="standards">
                <h3 className="standards-text">
                    ABYC Standards
                </h3>
                <p className="standards-text">
                    The American Boat and Yacht Council sets the safety standards for marine systems. As an ABYC Master Technician, we ensure every installation meets or exceeds these critical safety requirements.
                </p>
            </div>
            <div className="standards">
                <h3 className="standards-text">
                    NMEA Standards
                </h3>
                <p className="standards-text">
                    National Marine Electronics Association standards ensure seamless integration between marine electronic devices. Our NMEA certification guarantees proper system communication and compatibility.
                </p>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div className="contact-holder">
            <h2 className="contact-text">
                Ready to Get Started?
            </h2>
            <p className="contact-text">
                Whether you need routine maintenance or a complete system upgrade, we're here to keep your vessel running smoothly.
            </p>
            <div className="contact-button-holder">
                <a 
                    href="tel:203-214-3282"
                    className='contact'
                >
                    Call: (203) 214-3282
                </a>
                <button 
                    className="contact"
                >
                    Request a Quote
                </button>
            </div>
        </div>
    )

}

export default function About() {
    return (
        <div className='about'>
            {/* Hero Section with Photo Banner Style */}
            <div className="about-holder">
                <h1 className="about-text">
                    About Guardian Marine
                </h1>
                <p className="about-text">
                    Expert marine electrical and electronic solutions grounded in ABYC and NMEA standards
                </p>
            </div>

            {/* Main Content */}
            <div className="content-holder">
                <Story />

                <Work />

                <Values />

                <Standards />

                <Contact />

                <div style={{ height: '100px' }}></div>
            </div>
        </div>
  );
}
