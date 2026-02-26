const inputs = [
    document.querySelector("#username"),
    document.querySelector("#email"),
    document.querySelector("#password"),
];

document.querySelector("#username").addEventListener("keydown", (e) => handleEnter(e, 0));
document.querySelector("#email").addEventListener("keydown", (e) => handleEnter(e, 1));
document.querySelector("#password").addEventListener("keydown", (e) => handleEnter(e, 2));

const username = document.querySelector("#username").value.trim();
const email = document.querySelector("#email").value.trim();
const password = document.querySelector("#password").value.trim();

const nameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form behavior

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    let isValid = true;
    let isUsernameValid = true;
    let isEmailValid = true;
    let isPasswordValid = true;

    if (username === "") {
        isValid = false;
        isUsernameValid = false;
        nameError.innerHTML = "Please enter a valid username";
    }

    if (email === "") {
        isValid = false;
        isEmailValid = false;
        emailError.innerHTML = "Please enter a valid email";
    }

    if (password === "") {
        isValid = false;
        isPasswordValid = false;
        passwordError.innerHTML = "Please enter a password";
    }

    if (password.length < 8) {
        isValid = false;
        isPasswordValid = false;
        passwordError.innerHTML = "Password must be at least 8 characters";
    }

    if (isValid) {
        window.alert("Form submitted successfully");
    }
    else {
        if (! isUsernameValid) {
            document.querySelector("#username").focus();
        }
        else if (! isEmailValid) {
            document.querySelector("#email").focus();
        }
        else {
            document.querySelector("#password").focus();
        }
    }

});

function handleEnter(e, currentIndex) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (currentIndex !== 2) {
            inputs[currentIndex + 1].focus();
        }
        if (currentIndex === 0) {
            validateUsername();
        }
        else if (currentIndex === 1) {
            validateUsername()
            validateEmail();
        }
        else {
            validateUsername()
            validateEmail();
            validatePassword();
        }
    }
}

function validateUsername() {
    const username = document.querySelector("#username").value.trim();
    const nameError = document.querySelector("#usernameError");
    if (username === "") {
        nameError.innerHTML = "Please enter a valid username";
    }
    else {
        console.log("HERE");
        document.getElementById("username").style.backgroundColor = "hsl(110,45%,36%)";
    }
}

function validateEmail() {
    const email = document.querySelector("#email").value.trim();

    if (email === "") {
        emailError.innerHTML = "Please enter a valid email";
    }
    else {
        document.getElementById("email").style.backgroundColor = "hsl(110,45%,36%)";
    }
}

function validatePassword() {
    const password = document.querySelector("#password").value.trim();
    if (password === "") {
        passwordError.innerHTML = "Please enter a password";
    }
    else if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters";
    }
    else {
        document.getElementById("password").style.backgroundColor = "hsl(110,45%,36%)";
    }
}