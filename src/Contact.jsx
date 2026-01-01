import './index.css'
import './Contact.css'
import { useState } from 'react';
import { Country, State, City } from 'country-state-city';

function RequiredComponent({data, name}) {
    if (data === undefined) return null;
    if (data === "") {
        return (
            <div className="errorMessage" name={"empty" + name}>This is a required field</div>
        );
    } 
    return null;
}

function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState(0);
    const [formData, setFormData] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phoneNumber: undefined,
        state: undefined,
        city: undefined,
        boatType: undefined,
        work: undefined,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateAndSubmit = e => {
        e.preventDefault();

        // I don't like this
        setFormData(currentData => {
            var newData = Object.fromEntries(
                Object.entries(currentData).map(([key, val]) => [key, (val ?? '').trim()])
            );

            if (!Object.values(newData).some(value => value === "")) {
                // all values are good
                // basin form submission
                const xhr = new XMLHttpRequest();
                var formData = new FormData();
                formData.append("firstName", newData.firstName);
                formData.append("lastName", newData.lastName);
                formData.append("email", newData.email);
                formData.append("phoneNumber", newData.phoneNumber);
                formData.append("boatType", newData.boatType);
                formData.append("state", newData.state);
                formData.append("city", newData.city);
                formData.append("WorkRequest", newData.work);

                xhr.open("POST", "https://usebasin.com/f/66616079d131", true);
                xhr.send(formData);
                xhr.onload = function(){
                    if(xhr.status === 200){
                        console.log("Success");
                        // handle submit redirect
                        setSubmitStatus(200);
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 2000);
                    }else{
                        setSubmitStatus(xhr.status);
                        console.log("An Error Occured");
                        console.log(xhr.statusText);
                    }
                };
                window.scrollTo(0, 0);
            }

            return newData;
        });
    }

    return (
        <div className='formContainer'>
            <h3>Work Form</h3>
            <form className="work-form" onSubmit={validateAndSubmit}>
                {submitStatus === 200 && (
                    <div className='success-message'>
                        Form submitted successfully! Redirecting to homepage...
                    </div>
                )}
                {submitStatus != 200 && submitStatus != 0 && (
                    <div className='submit-error'>
                        Form submission error with code {submitStatus} <br/>
                        Please try again or email your request to service@guardianmarinect.com
                    </div>
                )}
                <div className="name-group">
                    <div className="name">
                        <label>First Name</label>
                        <input 
                            type="text"
                            name="firstName"
                            value={formData.firstName || ''}
                            onChange={handleChange}/>
                        <RequiredComponent data={formData.firstName} name={"FirstName"} />
                    </div>
                    <div className="name">
                        <label>Last Name</label>
                        <input 
                            type="text"
                            name="lastName"
                            value={formData.lastName || ''}
                            onChange={handleChange}/>
                        <RequiredComponent data={formData.lastName} name={"LastName"} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}/>
                    <RequiredComponent data={formData.email} name={"email"} />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber || ''}
                        onChange={handleChange}/>
                    <RequiredComponent data={formData.phoneNumber} name={"Number"} />
                </div>
                <div className="form-group">
                    <label>Make and Model</label>
                    <input 
                        type="text"
                        name="boatType"
                        value={formData.boatType || ''}
                        onChange={handleChange}/>
                    <RequiredComponent data={formData.boatType} name={"BoatType"} />
                </div>
                <div className="name-group">
                    <div className="name">
                        <label>State</label>
                        <select
                            type="text"
                            name="state"
                            value={formData.state || ''}
                            onChange={handleChange}>
                            <option value=""> Select a state</option>
                            {State.getStatesOfCountry("US").map(state => (
                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                        <RequiredComponent data={formData.state} name={"State"} />
                    </div>
                    <div className="name">
                        <label>City</label>
                        <select
                            type="text"
                            name="city"
                            value={formData.city || ''}
                            onChange={handleChange}>
                            <option value=""> Select a city</option>
                            {City.getCitiesOfState("US", formData.state).map(city => (
                                <option key={city.name} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        <RequiredComponent data={formData.city} name={"City"} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Work Request</label>
                    <textarea
                        name="work"
                        cols="30"
                        rows="10"
                        value={formData.work || ''}
                        onChange={handleChange}/>
                    <RequiredComponent data={formData.work} name={"Request"} />
                </div>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    )
}

export default function Contact(){
    return (
        <main className = "light-theme">
            <ContactForm/>
        </main>
    )
}
