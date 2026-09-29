const form = document.getElementById("emailForm");
const email = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.checkValidity()) {
        window.location.href = "next.html";
    } else {
        email.value = "";
        email.focus();
    }
});
