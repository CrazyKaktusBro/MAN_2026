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
