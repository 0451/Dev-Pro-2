function Submit(){
var emailReg=/^[A-Za-Z0-9._]*\@[A-Za-Z]{2,5}$/;
var fname=doc.form.firstname.value;
lname=doc.form.lastname.value;
email=doc.form.email.value;

if(fname==""){
doc.form.firstname.focus();
doc.getElementById("error").innerHTML="enter the first name";
return false;

if(lname==""){
doc.form.firstname.focus();
doc.getElementById("error").innerHTML="enter the last name";
return false;

if(email==""){
doc.form.firstname.focus();
doc.getElementById("error").innerHTML="enter the valid email";
return false;
}
}