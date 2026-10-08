const form = document.getElementById("emailForm");
const email = document.getElementById("email");

if (form) {
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
}


function registerOlympiad() {
    window.location.href = "register.html";
}


function loginOlympiad() {
    window.location.href = "login.html";
}


const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const middleName = document.getElementById("middleName").value;

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("middleName", middleName);

        window.location.href = "age.html";
    });
}


const continueButton = document.getElementById("continueButton");

if (continueButton) {
    continueButton.addEventListener("click", function() {

        const olympiad = document.getElementById("olympiad").value;

        if (olympiad === "") {
            return;
        }

        localStorage.setItem("olympiad", olympiad);

        window.location.href = "olympiad.html";
    });
}

function goHome() {
    localStorage.clear();
    window.location.href = "index.html";
}

if (window.location.pathname.endsWith("olympiad.html")) {
    localStorage.clear();
}
