function prikaziElement(element) {
    var element = document.getElementById(element);
    element.style.display = "block";
}

function sakrijElement(element) {
    var element = document.getElementById(element);
    element.style.display = "none";
}

function sakrijRed(element) {
    var red = element.parentElement;
    red.style.display="none";
}

function checkForm() {
    var password = document.getElementById("password").value;
    if(password.length<6)
    {
        alert("Lozinka mora biti najmanje 6 karaktera!");
        return false;
    }
    return true;
}