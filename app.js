'use strict';

/*const switcher = document.querySelector('.btn');

alert("Loaded");

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Light";
    }
});
*/


const form = {
    form: document.getElementById("work-form"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    phoneNumber: document.getElementById("phoneNumber"),
    boatType: document.getElementById("boatType"),
    location: document.getElementById("location"),
    workRequest: document.getElementById("workReq"),
    submit: document.getElementById("submit")
};
const mobileForm = {
    form: document.getElementById("work-form-mobile"),
    firstName: document.getElementById("firstNameMobile"),
    lastName: document.getElementById("lastNameMobile"),
    email: document.getElementById("emailMobile"),
    phoneNumber: document.getElementById("phoneNumberMobile"),
    boatType: document.getElementById("boatTypeMobile"),
    location: document.getElementById("locationMobile"),
    workRequest: document.getElementById("workReqMobile"),
    submit: document.getElementById("submit")
}

mobileForm.form.onsubmit = function(event){
    submitForm(mobileForm, event);
}

form.form.onsubmit = function(event){
    submitForm(form, event);
}

function submitForm(form, event){
    event.preventDefault();
    
    if(validateForm(form) && enoughTimeHasPassed()){
        const xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("firstName", form.firstName.value);
        formData.append("lastName", form.lastName.value);
        formData.append("email", form.email.value);
        formData.append("phoneNumber", form.phoneNumber.value);
        formData.append("boatType", form.boatType.value);
        formData.append("location", form.location.value);
        formData.append("WorkRequest", form.workRequest.value);
        
        xhr.open("POST", "https://usebasin.com/f/66616079d131", true);
        xhr.send(formData);
        xhr.onload = function(event){
            if(xhr.status === 200){
                document.getElementById("success").style.display = "block";
                console.log("Success");
                timeOfSubmit = new Date();
            }else{
                console.log("An Error Occured");
                console.log(xhr.statusText);
            }
        };

    }
}



function validateForm(form){
    let isValid = true;
    if(form.firstName.value == ""){
        isValid = false;
        document.getElementById("emptyFirstName").style.display = "block";
    }else{
        document.getElementById("emptyFirstName").style.display = "none";
    }
    if(form.lastName.value == ""){
        isValid = false;
        document.getElementById("emptyLastName").style.display = "block";
    }else{
        document.getElementById("emptyLastName").style.display = "none";
    }
    if(form.email.value == ""){
        isValid = false;
        document.getElementById("emptyEmail").style.display = "block";
    }else if(!form.email.value.includes("@") || !form.email.value.includes(".")){
        document.getElementById("emptyEmail").style.display = "none";
        isValid = false;
        document.getElementById("invalidEmail").style.display = "block";
    }else{
        document.getElementById("invalidEmail").style.display = "none";
        document.getElementById("emptyEmail").style.display = "none";
    }
    if(form.phoneNumber.value == ""){
        isValid = false;
        document.getElementById("emptyPhoneNumber").style.display = "block";
    }else if(form.phoneNumber.value.length < 14){
        document.getElementById("emptyPhoneNumber").style.display = "none";
        isValid = false;
        document.getElementById("invalidPhoneNumber").style.display = "block";
    }else{
        document.getElementById("invalidPhoneNumber").style.display = "none";
        document.getElementById("emptyPhoneNumber").style.display = "none";
    }
    if(form.boatType.value == ""){
        isValid = false;
        document.getElementById("emptyBoatType").style.display = "block";
    }else{
        document.getElementById("emptyBoatType").style.display = "none";
    }
    if(form.location.value == ""){
        isValid = false;
        document.getElementById("emptyLocation").style.display = "block";
    }else{
        document.getElementById("emptyLocation").style.display = "none";
    }
    
    return isValid;
}
var timeOfSubmit = new Date();

function enoughTimeHasPassed(){
    let now = new Date();
    if(timeOfSubmit.getDate() < now.getDate()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    if(timeOfSubmit.getHours < now.getHours()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    if(timeOfSubmit.getMinutes() + 1 <= now.getMinutes()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    document.getElementById("needToWait").style.display = "block";
    return false;
}

function btnToggle(){
    document.getElementById("content").style.display = "flex";
    document.getElementById("content").style.flexDirection = "row";
}
var phoneInput = document.getElementById("phoneNumber");
var cursorPos = 0;

if(phoneInput){
    phoneInput.addEventListener('keyup', (event) =>{
        if(event.key == "Backspace"){
            phoneInput.setSelectionRange(cursorPos - 3, cursorPos - 3);
        }else{
            phoneInput.setSelectionRange(cursorPos, cursorPos);
        }
    });
}

function formatPhone(input, ctrl){
    if(ctrl.selectionStart){
        cursorPos = ctrl.selectionStart;
    }
    input = input.replace(/\D/g,'');
    var size = input.length;
    if (size>0) {
        input="("+input;
        cursorPos += 1;
    }
    if (size>3) {
        input=input.slice(0,4)+") "+input.slice(4,11);
        cursorPos += 1;
    }
    if (size>6) {
        input=input.slice(0,9)+"-" +input.slice(9);
        cursorPos += 1;
    }
    return input;
}

window.onclick = function(event){
    if(!event.target.matches(".servicebtn")){
        document.getElementById("content").style.display = "none";
    }
}


function setPhoto(){
    //changes photo to what I want it to be
    if(document.getElementById("current-work").matches(':hover')){
        document.getElementById("img-display").src="Photos/Logo.png";
    }
    if(document.getElementById("past-projects").matches(':hover')){
        document.getElementById("img-display").src="Photos/Logo.png";
    }
    if(document.getElementById("electrical").matches(':hover')){
        document.getElementById("img-display").src="Photos/Logo.png";
    }
    if(document.getElementById("solar").matches(':hover')){
        document.getElementById("img-display").src="Photos/Logo.png";
    }
    if(document.getElementById("contact").matches(':hover')){
        document.getElementById("img-display").src="Photos/Logo.png";
    }

}

/*window.onresize = function(event) {
    document.location.reload(true);
  }
  
  var href = window.location.href.split("/")
  var html_location = href[href.length-1]
  
  if (window.innerWidth >= 960 && html_location !== "index.html") {
      window.location = "index.html";
  }
  
  if (window.innerWidth < 960 && html_location !== "indexMobile.html") {
      window.location = "indexMobile.html";
  }
  */