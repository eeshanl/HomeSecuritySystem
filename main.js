function logIn() {
    var pass = prompt("Please enter the password", "Password");
    if (pass == "abcd") {
        window.location.replace('main.html');
    } else {
    	alert("Log in failed.");
    }
}