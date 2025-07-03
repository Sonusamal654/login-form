let first=document.querySelector('#first')
let last=document.querySelector('#last')
let email=document.querySelector('#email')
let phone=document.querySelector('#phone')
let password=document.querySelector('#pass')
let confirm=document.querySelector('#confirm')
let submit=document.querySelector('#submit')
const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click",() =>{
    let firstData=first.value
    let lastData=last.value
    let emailData=email.value
    let phoneData=phone.value
    let passwordData=password.value
    let confirmData=confirm.value

   if(!firstData){
     alert("enter first name")
     
   }
    if(!lastData){
        alert("enter last name")
    }
    
    if(!emailData){
        alert("enter email")
    }
    if(emailData.match(pattern)){
        alert("succes the email")
        }
        else{
            alert("invalid email")
        }
    if(!phoneData){
        alert("enter phone number")
    }
    if(phoneData.length!=10){
        alert("invalid phone number")
    }
    else{
        alert("success number")
    }
    if(!passwordData){
        alert("enter password")
    }
    if(passwordData.match(pattern)){
         alert("success password")
    }
    else{
        alert("password contain one uppercase,lower case,one letter")
    }
    if(!confirmData){
        alert("enter confirm password")
    }
    if(confirmData.match(pattern)){
         alert("success password")
    }
    else{
        alert(" confirm password contain one uppercase,lower case,oneletter")
    }
    if(passwordData!=confirmData){
        alert("password mismatch")
    }
    if(passwordData.length!=6 && confirmData.length!=6){
        alert("invalid password")
        }
        else{
            alert("success the password length")
        }      
   
})