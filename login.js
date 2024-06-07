const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link"),
    loginButton = document.getElementById("login-button"),
    registerButton = document.getElementById("register-button");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-registro");
    });
});

registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert('Usuário registrado com sucesso!');
        document.getElementById("register-email").value = '';
        document.getElementById("register-password").value = '';
        window.location.href = 'calculadora.html';
    } else {
        alert('Por favor, preencha todos os campos');
    }
});

loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert('Login realizado com sucesso!');
        window.location.href = 'calculadora.html';
    } else {
        alert('Email ou senha incorretos');
    }
});