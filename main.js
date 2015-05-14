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
