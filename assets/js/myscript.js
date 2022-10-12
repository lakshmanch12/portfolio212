function submitValidation() {
    //Username validation started
    let username = document.getElementById('username').value;
    var date = document.getElementById('dateOfBirth').value;
    const email = document.getElementById('inputEmail').value;
    const pnumber = document.getElementById('inputPhonenumber').value;
    let country = document.getElementById('inputCountry').value;
    const male=document.getElementById("male");  
    const female=document.getElementById("female");  
    const checkbox = document.getElementById("checkbox"); 

    let pnumberPattern = /^[6-9]\d{9}$/;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let check = userCheck =mfCheck= dobCheck = emailCheck = mobileCheck = countryCheck = false;



  if(nameValidation(username)) {
    if(dobValidation(date)) {
      if(emailValidation(email, emailPattern)) {
        if(phoneValidation(pnumber, pnumberPattern)) {
          if(countryValidation(country)) {
            if(genderValidation(male, female)) {
              if(checkboxValidation(checkbox)) {
                document.getElementById("popupMsg").style.display = "block";
                document.getElementById('username').value = ""
                document.getElementById('dateOfBirth').value = ""
                document.getElementById('inputPhonenumber').value = ""
                document.getElementById('inputCountry').value = ""
                document.getElementById('inputEmail').value = ""
                document.getElementById("checkbox").checked = false;
                document.getElementById("male").checked = false
                document.getElementById("female").checked = false
                document.getElementById('inputCountry').value = ""
              }
            }
          }
        }
      }
    }
  }


}
function nameValidation(username) { 
  if(username.length == "" || username.length <=3)
  {
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("usernameErr").style.display = "block";
    userCheck = false
    return false
} else if(username.length >= 3){
    document.getElementById("username").style.borderColor = "green";
    document.getElementById("usernameErr").style.display = "none";
    userCheck = true
    return true
}
}
function dobValidation(date) {
 if(date == null || date== '') {
    document.getElementById("dateOfBirth").style.borderColor = "red";
    document.getElementById("dateOfBirthrErr").style.display = "block";
    dobCheck = false
    return false
  }
   else{ 
    document.getElementById("dateOfBirth").style.borderColor = "green"; 
    document.getElementById("dateOfBirthrErr").style.display = "none";
    dobCheck = true
    return true
  }
  
}
function emailValidation(email,emailPattern){
  console.log(email, emailPattern.test(email))
  if(emailPattern.test(email))
{
    document.getElementById("inputEmail").style.borderColor = "green";
    document.getElementById("emailErr").style.display = "none";
    emailCheck = true
    return true
} else if(!emailPattern.test(email))
{
    document.getElementById("inputEmail").style.borderColor = "red";
    document.getElementById("emailErr").style.display = "block";
    emailCheck = false
    return false
}
}
function phoneValidation(pnumber,pnumberPattern){
if(pnumberPattern.test(pnumber)){
    document.getElementById("inputPhonenumber").style.borderColor ="green";
    document.getElementById("phonenumberErr").style.display = "none";
    mobileCheck = true
    return true
} else if(!pnumberPattern.test(pnumber)){
    document.getElementById("inputPhonenumber").style.borderColor = "red";
    document.getElementById("phonenumberErr").style.display = "block";
    mobileCheck = false
    return false
}
}
function countryValidation(country) { 
 
if(country.length == 1){
    document.getElementById("inputCountry").style.borderColor = "green";
    document.getElementById("countryErr").style.display = "none";
    countryCheck = true
    return true
} 
else if(country.length  != 1){
    document.getElementById("inputCountry").style.borderColor = "red";
    document.getElementById("countryErr").style.display = "block";
    countryCheck = false
    return false
}
}
function genderValidation(gender) {

 if(male.checked == true || female.checked == true )
{  
   document.getElementById("genderErr").style.display="none";
   mfCheck = true     
   return true  
} 
else if(male.checked == false && female.checked == false )
{ 
    document.getElementById("genderErr").style.display="block";
    mfCheck = false 
    return false
}
}
function checkboxValidation(checkbox) { 
 if(checkbox.checked == true )

 { 
    document.getElementById("checkbox").style.borderColor = "green";
    document.getElementById("inputAgreeErr").style.display = "none";
    check = true
    return true
}
else if(checkbox.checked == false){ 
    document.getElementById("checkbox").style.borderColor = "red";
    document.getElementById("inputAgreeErr").style.display = "block";
    check = false
    return false
}
}