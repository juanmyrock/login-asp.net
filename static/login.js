// Elementos del DOM
const nombreUsuario = document.getElementById("nombre-usuario");
const contraseña = document.getElementById("contraseña");
const form = document.getElementById("login-form");
const parrafo = document.getElementById("warnings");

// Expresión regular para el nombre de usuario (puedes ajustarla según las necesidades)
const regexUsuario = /^[a-zA-Z0-9]{4,20}$/;  // entre 4 y 20 caracteres alfanuméricos

// Evento para manejar la validación del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar el envío del formulario
  let warnings = "";
  let entrar = false;

  // Validar nombre de usuario
  if (!regexUsuario.test(nombreUsuario.value)) {
    warnings += `El nombre de usuario no es válido (mín. 4 caracteres, solo letras y números).<br>`;
    entrar = true;
  }

  // Validar contraseña (mínimo 8 caracteres)
  if (contraseña.value.length < 8) {
    warnings += `La contraseña debe tener al menos 8 caracteres.<br>`;
    entrar = true;
  }

  // Mostrar advertencias si hay errores, de lo contrario limpiar el mensaje
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "";
    alert("Usuario logueado con éxito");
    form.submit(); // Solo enviar el formulario si todo es válido
  }
});

// Evento para eliminar advertencias cuando el usuario empieza a escribir
nombreUsuario.addEventListener("input", () => {
  if (regexUsuario.test(nombreUsuario.value)) {
    parrafo.innerHTML = ""; // Limpiar advertencias si el campo es válido
  }
});

contraseña.addEventListener("input", () => {
  if (contraseña.value.length >= 8) {
    parrafo.innerHTML = ""; // Limpiar advertencias si el campo es válido
  }
});
