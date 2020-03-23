// checkea mail, valida contra regex string@string.string
function checkMail(email) {
    var reMail = /\S+@\S+\.\S+/;
    return reMail.test(email);
}

// checkea DNI, 8 números
function checkDni(dni) {
    var reDni = /^\d{8}(?:[-\s]\d{4})?$/;
    return reDni.test(dni);
}

function checkPhone(telefono) {
    var reTel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return reTel.test(telefono);
}

function validar() {
    
    var validForm = true;

    // verificación de campos sin validación específica
    var toValidate = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(toValidate, function (form) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            validForm = false;
        }
        form.classList.add('was-validated');
    });

    var email = $("#user_email").val();
    var $mailResult = $("#mail-result");
    if (!checkMail(email)) {
        $mailResult.text("Por favor ingrese una dirección de correo electrónico válida");
        $mailResult.css({
            "color": "#dc3545",
            "width": "100%",
            "font-size": "80%",
        });
        validForm = false;
    } else {
        $mailResult.text("");
    }

    var dni = $("#user_identification").val();
    var $dniResult = $("#dni-result");
    if (!checkDni(dni)) {
        $dniResult.text("Por favor ingrese un DNI válido");
        $dniResult.css({
            "color": "#dc3545",
            "width": "100%",
            "font-size": "80%",
        });
        validForm = false;
    } else {
        $dniResult.text("");
    }

    var tel = $("#user_phone").val();
    var $phoneResult = $("#tel-result");
    if (!checkPhone(tel)) {
        $phoneResult.text("Por favor ingrese un teléfono válido (cod area) + (telefono) sin guines ni espacios");
        $phoneResult.css({
            "color": "#dc3545",
            "width": "100%",
            "font-size": "80%",
        });
        validForm = false;
    } else {
        $phoneResult.text("");
    }

    var terms = $("#terminos_y_condiciones").is(":checked");
    var $termsResult = $("#terms-result");
    if (!terms) {
        $termsResult.text("Debe aceptar los términos y condiciones");
        $termsResult.css({
            "color": "#dc3545",
            "width": "100%",
            "font-size": "80%",
        });
        validForm = false;
    } else {
        $termsResult.text("");
    }

    if (!validForm) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        $("#validar").submit();
        alert("Formulario enviado!");
    }

    return validForm;
}

$("#validar").on("click", validar);