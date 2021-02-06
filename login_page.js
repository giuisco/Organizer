const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");
const loginErrorMsg = document.getElementById("login_error_msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const uName = loginForm.username.value;
    const passW = loginForm.password.value;

    if (uName == "admin" && passW == "12345") {
        alert("You have successfully logged in.");
        var newUrl = "127.0.0.1:550/dashboard.html"
        window.open(newUrl);
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})