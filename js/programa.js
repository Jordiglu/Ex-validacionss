//Inputs Fields
const form = document.getElementById('myFormId');

//Password match variables
var minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    number = /[0-9]/;

//Formulario registro validación
function registerValidate() {
    var acumErrores = 0;

    if (inputName.value == "") {
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "El campo es obligatorio";
        acumErrores++;
    } else if (!inputName.value == "" && inputName.value.length < 4) {
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Se requiere un mínimo de 3 caracteres";
        acumErrores++;
    }
    if (inputLastName.value == "") {
        inputLastName.classList.add("is-invalid");
        document.getElementById("errorLastName").textContent = "El campo es obligatorio";
        acumErrores++;
        // 3 character name Validation
    } else if (!inputLastName.value == "" && inputLastName.value.length < 4) {
        inputLastName.classList.add("is-invalid");
        document.getElementById("errorLastName").textContent = "Se requiere un mínimo de 3 caracteres";
        acumErrores++;
    }
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    }

    //Validation password Nivell-2
    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "El campo es obligatorio";
        acumErrores++;
    } else if (!validar_pass(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Introduzca mínimo 8 caracteres, una letra máyuscula y un número";
        acumErrores++;
    }
    if (inputRe_pass.value == "") {
        inputRe_pass.classList.add("is-invalid");
        document.getElementById("errorRe_pass").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    if (inputRe_pass.value !== inputPassword.value) {
        inputRe_pass.classList.add("is-invalid");
        document.getElementById("errorRe_pass").textContent = "La contraseña no coincide";
        acumErrores++;
    }
    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
        acumErrores++;
    }
    if (inputCity.value == "") {
        inputCity.classList.add("is-invalid");
        document.getElementById("errorCity").textContent = "Introduce la ciudad";
        acumErrores++;
    }
    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Acepta las condiciones";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

//Formulario de validación LogIn

function registerValidateLogIn() {
    var acumErrorLogIn = 0;
    if (LogInEmail.value == "") {
        LogInEmail.classList.add("is-invalid");
        document.getElementById("errorLogInEmail").textContent = "Es campo es obligatorio";
        acumErrorLogIn++;
    } else if (!validar_email(LogInEmail.value)) {
        LogInEmail.classList.add("is-invalid");
        document.getElementById("errorLogInEmail").textContent = "El email no cumple el formato";
        acumErrorLogIn++;
    }

    if (inputPassLogIn.value == "") {
        inputPassLogIn.classList.add("is-invalid");
        document.getElementById("errorPass").textContent = "El campo es obligatorio";
        acumErrorLogIn++;
    } else if (!validar_pass(inputPassLogIn.value)) {
        inputPassLogIn.classList.add("is-invalid");
        document.getElementById("errorPass").textContent = "Contraseña incorrecta";
        acumErrorLogIn++;
    }
    if (acumErrorLogIn > 0) {
        return false;
    } else {
        return true;
    }
}

//Blur effect
myFormId.addEventListener('blur', (event) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);

//Email validation
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

//Password validation
function validar_pass(password) {
    var minMaxLength = /^[\s\S]{8,32}$/,
        upper = /[A-Z]/,
        number = /[0-9]/;

    if (minMaxLength.test(password) &&
        upper.test(password) &&
        number.test(password)) {
        return true;
    }
    return false;
}

