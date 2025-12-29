import './index.css'
import './Contact.css'
import React from 'react';



class ContactForm extends React.Component{
    constructor({handleClick}){
        super();
        this.handleClick = handleClick.bind(this);
        this.state = {
            FirstName: undefined,
            LastName: undefined,
            Email: undefined,
            Number: undefined,
            boatType: undefined,
            Loc: undefined,
            Request: undefined,
            Time: true,
            Submit: false,
        }

        this.HandleChange = this.HandleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    HandleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    validateForm(){
        if(this.state.FirstName == undefined || this.state.FirstName == "" ||
            this.state.LastName == undefined || this.state.LastName == "" ||
            this.state.Email == undefined || this.state.Email == "" ||
            this.state.Number == undefined || this.state.Number == "" ||
            this.state.boatType == undefined || this.state.boatType == "" ||
            this.state.Loc == undefined || this.state.Loc == "") return false;

        if(!this.state.Email.includes('@') || !this.state.Email.includes('.')) return false;
        if(this.state.Number.length < 10) return false;

        return true;
    }


    submitForm(e){
        e.preventDefault();
        if(!this.validateForm()) return; 
        if(!this.state.Time) return;

        // basin form submission
        const xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("firstName", this.state.FirstName);
        formData.append("lastName", this.state.LastName);
        formData.append("email", this.state.Email);
        formData.append("phoneNumber", this.state.Number);
        formData.append("boatType", this.state.boatType);
        formData.append("location", this.state.Loc);
        formData.append("WorkRequest", this.state.Request);
        
        xhr.open("POST", "https://usebasin.com/f/66616079d131", true);
        xhr.send(formData);
        xhr.onload = function(e){
            if(xhr.status === 200){
                console.log("Success");
                timeOfSubmit = new Date();
                window.location.href = "submitSuccess.html";
            }else{
                console.log("An Error Occured");
                console.log(xhr.statusText);
            }
        };

        // handle submission
        console.log("submitted");
        this.setState({
            FirstName: "",
            LastName: "",
            Email: "",
            Number: "",
            boatType: "",
            Loc: "",
            Request: "",
            Time: false,
            Submit: true,
        })
        this.timer = setTimeout(() => {
            this.setState({Time: true});
        },60000);
    }
    render(){
        if(this.state.Submit == true){
            return (
                <>
                    <h3>Submission Success</h3>
                    <img src="./assets/Photos/Logo-main.png" alt="logo" className="main-logo" onClick={() => this.handleClick('home')}/>
                    <div className="spacer"></div>
                </>

            )
        }
        return (
            <>
                <h3>Work Form</h3>
                <div className="formContainer">
                    <form className="work-form" onSubmit={this.submitForm}>
                        <div className="name-group">
                            <div className="name">
                                <label>First Name</label>
                                <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.HandleChange}/>
                                {(this.state.FirstName != undefined && this.state.FirstName == "" )&&
                                    <div className="errorMessage" id="emptyFirstName">This is a required field</div>}
                            </div>
                            <div className="name">
                                <label >Last Name</label>
                                <input type="text" name="LastName" value={this.state.LastName} onChange={this.HandleChange}/>
                                {(this.state.LastName != undefined && this.state.LastName == "") && 
                                    <div className="errorMessage" id="emptyLastName">This is a required field</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type='text' name="Email" value={this.state.Email} onChange={this.HandleChange}/>
                            {(this.state.Email != undefined && this.state.Email == "") && 
                                <div className="errorMessage" id="emptyEmail">This is a required field</div>}
                            {(this.state.Email != undefined && this.state.Email != "" && (!this.state.Email.includes('@') || !this.state.Email.includes('.') )) && 
                                <div className="errorMessage" id="invalidEmail">Please enter a valid email</div>}
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type='tel' name='Number' value={this.state.Number} onChange={this.HandleChange}/>
                            {(this.state.Number != undefined && this.state.Number == "") && 
                                <div className="errorMessage" id="emptyPhoneNumber">This is a required field</div>}
                            {(this.state.Number != undefined && this.state.Number != "" && this.state.Number.length < 10) && 
                                <div className="errorMessage" id="invalidPhoneNumber">Please enter a valid phone number</div>}
                        </div>
                        <div className="form-group">
                            <label>Make and Model</label>
                            <input type="text" name="boatType" value={this.state.boatType} onChange={this.HandleChange}/> 
                            {(this.state.boatType != undefined && this.state.boatType == "") && 
                                <div className="errorMessage" id="emptyBoatType">This is a required field</div>}
                        </div>
                        <div className="form-group">
                            <label>Boat Location</label>
                            <input type="text" name="Loc" value={this.state.Loc} onChange={this.HandleChange}/>
                            {(this.state.Loc != undefined && this.state.Loc == "") && 
                                <div className="errorMessage" id="emptyLocation">This is a required field</div>}
                        </div>
                        <div className="form-group">
                            <label>Work Request</label>
                            <textarea name="Request" cols="30" rows="10" value={this.state.Request} onChange={this.HandleChange}></textarea>
                        </div>
                        <button type="submit" id="submit">Submit</button>
                        {!this.state.Time && <div className="errorMessage" id="needToWait">You need to wait 1 minute in between submissions</div>}
                    </form>
                </div>
            </>
        )
    }
}

export default function Contact({handleClick}){
    return (
        <main className = "light-theme">
                <ContactForm handleClick={handleClick} />
        </main>
    )
}
