let first=document.querySelector('#first')
let last=document.querySelector('#last')
let email=document.querySelector('#email')
let phone=document.querySelector('#phone')
let password=document.querySelector('#pass')
let confirm=document.querySelector('#confirm')
let submit=document.querySelector('#submit')
const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventlistener("click",() =>{
    let firstData=first.value
    let lastData=last.value
    let emailtData=email.value
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
})