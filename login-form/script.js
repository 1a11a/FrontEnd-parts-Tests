const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");

    registerLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating

        // Toggle the display of the login and registration forms
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating

        // Toggle the display of the login and registration forms
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
});


