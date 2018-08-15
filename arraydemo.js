var studentsfirst =[];
var studentslast=[];
var firstName = prompt("what is your first name");
var lastName = prompt("what is your last name");
studentsfirst.unshift(firstName);
studentslast.unshift(lastName);
window.alert(firstName + " " + lastName + " "+ studentslast.length + " " + studentsfirst.length);
