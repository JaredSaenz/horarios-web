function validateUser() {
    // Credenciales permitidas
    const allowedUsers = [
        { email: "newuser@any.com", password: "142536xD", redirect: "main.html" },
        { email: "admin@admin.com", password: "123412341234", redirect: "main_reg.html" }
    ];

    // Obtener valores ingresados por el usuario
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación
    const message = document.getElementById("message");
    const user = allowedUsers.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        message.style.color = "green";
        message.textContent = "Acceso permitido. ¡Bienvenido!";
        // Redirigir a la página correspondiente después de un breve retraso
        setTimeout(() => {
            window.location.href = user.redirect;
        }, 1000);
        return false; // Prevenir el envío del formulario
    } else {
        message.style.color = "red";
        message.textContent = "Correo o contraseña incorrectos. Intente de nuevo.";
        return false; // Prevenir el envío del formulario
    }
}
