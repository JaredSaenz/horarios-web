function validateUser() {
    // Credenciales permitidas
    const allowedEmail = "newuser@any.com";
    const allowedPassword = "142536xD";

    // Obtener valores ingresados por el usuario
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación
    const message = document.getElementById("message");
    if (email === allowedEmail && password === allowedPassword) {
      message.style.color = "green";
      message.textContent = "Acceso permitido. ¡Bienvenido!";
      // Redirigir a la página principal después de un breve retraso
      setTimeout(() => {
        window.location.href = "main.html";
      }, 1000);
      return false; // Prevenir el envío del formulario
    } else {
      message.style.color = "red";
      message.textContent = "Correo o contraseña incorrectos. Intente de nuevo.";
      return false; // Prevenir el envío del formulario
    }
  }