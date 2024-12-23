
let signupBtn = document.getElementById("signup");
let userInputName = document.getElementById("username");
let userInputEmail = document.getElementById("useremail");
let userInputPswd = document.getElementById("userpswd");
let nameError = document.getElementById("nameerror");
let pswdError = document.getElementById("pswderror");
let emailError = document.getElementById("emailerror");

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let regName = /^[a-zA-Z]{3,}$/;
    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regPassword = /^[a-zA-Z0-9@!#$%^&*]{8,15}$/;
    nameError.textContent = "";
    emailError.textContent = "";
    pswdError.textContent = "";
    let name = userInputName.value.trim();
    let email = userInputEmail.value.trim();
    let pswd = userInputPswd.value.trim();
    if (name === "" || email === "" || pswd === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if (!regName.test(name)) {
        nameError.textContent = "Please enter a valid name (at least 3 alphabetic characters).";
        return;
    }
    if (!regEmail.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    if (!regPassword.test(pswd)) {
        pswdError.textContent = "Please enter a strong password (8-15 characters, including letters, numbers, or special characters).";
        return;
    }
    alert("Signup successful!");
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pswd", pswd);

    window.location.href = "./login.html";
});
