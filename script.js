const form = document.getElementById("emailForm");
const email = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.checkValidity()) {
        localStorage.setItem("email", email.value);
        window.location.href = "next.html";
    } else {
        email.value = "";
        email.focus();
    }
});

function registerOlympiad() {
    window.location.href = "register.html";
}

function loginOlympiad() {
    window.location.href = "login.html";
}
