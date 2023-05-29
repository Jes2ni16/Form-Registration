

let form=document.getElementById('form');
let firstName=document.getElementById('firstName');
let middleName=document.getElementById('middleName');
let lastName=document.getElementById('lastName');
let emails=document.getElementById('emails');
let contact=document.getElementById('contact');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('confirmPassword');
let brgy=document.getElementById('brgy');
let zipCode=document.getElementById('zipCode');
let submit=document.querySelector('#submit');
let input =document.getElementsByClassName('input');
var errDisplay= document.getElementsByClassName('error');
let values =[];
function validateFirst(){
    const firstValue=firstName.value;
    const firstError=document.getElementById('firstError');
    if(firstValue.length ===0){
        input[0].style.border='3px solid red';
firstError.innerHTML='*Please Fill this Field';
return false;
    }
    if(firstValue.length>20){
        input[0].style.border='3px solid red';
        input[0].setAttribute('maxlength','20');
        firstError.innerHTML='*Over 20 Characters';
        return false;
    }
    else{
        input[0].style.border='3px solid green';
        firstError.innerHTML='';
        return true;
    }
}

function validateMiddle(){
    const middleValue=middleName.value;
    const middleError=document.getElementById('middleError');
    if(middleValue.length ===0){
        input[1].style.border='3px solid red';
middleError.innerHTML='*Please Fill this Field';
return false;
    }
    else{
        input[1].style.border='3px solid green';
        middleError.innerHTML='';
        return true;
    }
}

function validateLast(){
    const lastValue=lastName.value;
    const lastError=document.getElementById('lastError');
    if(lastValue.length ===0){
        input[2].style.border='3px solid red';
lastError.innerHTML='*Please Fill this Field';
return false;
    }
    else{
        input[2].style.border='3px solid green';
        lastError.innerHTML='';
        return true;
    }
}

function validateEmail(){
    const emailValue=emails.value;
    let regex1= /@/;
    let regex2=/./;
    let result1 = regex1.test(emailValue);
    let result2 = regex2.test(emailValue);

    const emailError=document.getElementById('emailError');
    if(emailValue.length ===0){
        input[3].style.border='3px solid red';
emailError.innerHTML='*Please Fill this Field';
return false;}
else if(result1 == true && result2== true){
    input[3].style.border='3px solid green';
    emailError.innerHTML='';
    console.log(result1);
    return true;
}
    else{
        input[3].style.border='3px solid red';
        emailError.innerHTML='*Please Enter a Valid Email';
        return false;
    }
}

function validateContact(){
    let contactValue=contact.value;
    const contactError=document.getElementById('contactError');
    if(contactValue.length ===0){
        input[4].style.border='3px solid red';
contactError.innerHTML='*Please Fill this Field';
return false;}
if(contactValue.length > 10){
    input[4].style.border='3px solid red';
    contactError.innerHTML='*Maximum of 10 Characters';
    alert('Maximum of 10');
    return false;
}
    else{
        input[4].style.border='3px solid green';
        contactError.innerHTML='';
        return true;
    }
}
    function validatePassword(){
        let passwordValue=password.value;
        const passwordError=document.getElementById('passwordError');
     
        if(passwordValue.length ===0){
            input[5].style.border='3px solid red';
    passwordError.innerHTML='*Please Fill this Field';
    return false;}
        else{
            input[5].style.border='3px solid green';
            passwordError.innerHTML='';
            return true;
        }
}
function validateConfirmPassword(){
    let passwordValue=password.value;
    let confirmValue=confirmPassword.value;
    const confirmError=document.getElementById('confirmError');
if(confirmValue != passwordValue){
    input[6].style.border='3px solid red';
    confirmError.innerHTML='*Passwords do not Match';
    confirmError.style.color='red';
    return false;
}
    else{
        input[6].style.border='3px solid green';
        confirmError.innerHTML='Passwords Match';
        confirmError.style.color='green';
        return true;
    }
}
function validateBrgy(){
    let brgyValue=brgy.value;
    const brgyError=document.getElementById('brgyError');
    if(brgyValue.length ===0){
        input[7].style.border='3px solid red';
brgyError.innerHTML='*Please Fill this Field';
return false;}
    else{
        input[7].style.border='3px solid green';
        brgyError.innerHTML='';
        return true;
    }
}
function validateZipCode(){
    let zipCodeValue=zipCode.value;
    const zipCodeError=document.getElementById('zipCodeError');
    if(zipCodeValue.length ===0){
        input[8].style.border='3px solid red';
zipCodeError.innerHTML='*Please Fill this Field';
return false;}
    else{
        input[8].style.border='3px solid green';
        zipCodeError.innerHTML='';
        return true;
    }
}
let inputs=[];
document.querySelector('#submit').onclick =(e) => {
    let message=document.getElementById('message');
    e.preventDefault(); 
if(validateFirst()&&validateMiddle()&&validateLast()&&validateEmail()&&validateContact() && validatePassword() &&
 validateConfirmPassword()&&validateBrgy() &&validateZipCode() ){
    for(let i=0;i<input.length;i++){
        inputs[i]=input[i].value;
    }
    message.innerHTML='';
    alert("Congrats your Registration is Complete");    
    console.log(inputs);
 }
 else{
  message.innerHTML=`There's an Error in your Form`;
 }
    e.preventDefault();
}
let num=0;
document.getElementById('icon1').onclick =(e) =>{
    num++;
    if(num%2 ===0){
        input[5].setAttribute('type','text');
        console.log(1);
    }
    else{
        input[5].setAttribute('type','password');
    } 
};
document.getElementById('icon2').onclick =(e) =>{
    num++;
    if(num%2 ===0){
        input[6].setAttribute('type','text');
        console.log(1);
    }
    else{
        input[6].setAttribute('type','password');
    } 
};
