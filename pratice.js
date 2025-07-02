let user=document.querySelector('#user')
let password=document.querySelector('#password')
let submit=document.querySelector('#submit')
const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click",()=>{
     let userData=user.value.trim();
     let passwordData=password.value.trim();
     if(userData===""||passwordData===""){
        alert("input the fields")
     }
     if(!userData.match(pattern)){
         alert ("succes email")
     }else
        alert("invalid")
})