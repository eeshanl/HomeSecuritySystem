function logIn() {
    var pass = document.getElementById("input").value;
    if (pass != null || pass == "") {
      if (pass == "abcd") {
          window.location.replace('main.html');
      } else {
      	alert("Log in failed.");
      	pass = "";
      }
    }
}

var secure1 = 0;
var secure2 = 0;
var secure3 = 0;
var secure4 = 0;

function secure() {
  
}

function securityCheck() {

}
