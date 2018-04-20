function validation() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var city = document.getElementById("city").value;
if(username == "" || password == "" || email == "" || city == ""){
  alert("Fields are empty");
  return false;
}
else {
  alert("Registration Successful")
  return true;
}
}

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username != "ankita" || password != "ankita") {
      alert("Please Check Your Username/Password")
      return false;
  }
  else {
    alert(" You are Successfully Logged In");
  }
}
