// SWITCH BETWEEN LOGIN / REGISTER / FORGOT PAGES
function showPage(pageId) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("forgotPage").style.display = "none";

    document.getElementById(pageId).style.display = "block";
}

// REGISTER USER
function register() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;
    let conf = document.getElementById("confirmPass").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }
    if (pass !== conf) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem(user, pass);
    alert("Account created successfully!");
    showPage("loginPage");
}

// LOGIN USER
function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value;
    let error = document.getElementById("loginError");

    error.textContent = ""; // clear previous error

    if (user === "" || pass === "") {
        error.textContent = "Please fill in all fields.";
        return;
    }

    let savedPass = localStorage.getItem(user);

    if (!savedPass) {
        error.textContent = "Username not found.";
        return;
    }

    if (savedPass !== pass) {
        error.textContent = "Incorrect password.";
        return;
    }

    // Success login
    error.textContent = "";
    localStorage.setItem("currentUser", user);
    window.location.href = "portfolio.html";
}


// GO TO FORGOT PASSWORD PAGE
function forgotPassword() {
    let user = document.getElementById("loginUser").value;

    if (user === "") {
        alert("Enter your username first!");
        return;
    }

    let saved = localStorage.getItem(user);

    if (saved) {
        showPage("forgotPage");
    } else {
        alert("This username does not exist!");
    }
}

// ANIMATION RESET FOR FORGOT PAGE
function showForgotPage() {
    document.getElementById("loginPage").style.display = "none";
    const fp = document.getElementById("forgotPage");

    fp.style.display = "block";
    fp.style.animation = "none";
    void fp.offsetWidth;
    fp.style.animation = "eerieFade 1.2s ease-out forwards";
}

function goToPage1() {
    window.location.href = "portfolio.html";
}

function goToPage2() {
    window.location.href = "portfolio-page2.html";
}

function goToProjects() {
    window.location.href = "projects.html";
}

function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {

        // store message to show after redirect
        localStorage.setItem("logoutMessage", "You have logged out successfully.");

        // remove user data
        localStorage.removeItem("currentUser");

        // go back to login page
        window.location.href = "index.html";
    }
}
