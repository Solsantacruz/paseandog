function Validation (input) {

    let errors = {required: false};

    if (!input.name) {
        errors.name = "Por favor, ingresa un nombre.";
        errors.required= true;
    }
    if (!input.phone) {
        errors.phone = "Por favor, ingresa un teléfono.";
        errors.required = true;
    } else if(/^[0-9]+$/.test(!input.phone)) {
        errors.phone = "Por favor, ingresa un teléfono.";
        errors.required = true;
    }
    if (!input.email) {
        errors.email = "Por favor, ingresa un correo electrónico.";
        errors.required = true;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(!input.email)){
        errors.email = "Por favor, ingresa un correo electrónico.";
        errors.required = true;
    }
    if (!input.address) {
        errors.address = "Por favor, ingresa una dirección.";
        errors.required = true;
    }
    if (!input.postalCode) {
        errors.postalCode = "Por favor, ingresa un código postal.";
        errors.required = true;
    }else if(/^\d{10}$/.test(input.postalCode)) {
        errors.phone = "Por favor, ingresa solo numeros.";
        errors.required = true;
    }

    if (!input.district) {
        errors.district = "Por favor, ingresa un distrito.";
        errors.required = true;
    }
    if (!input.emergencyContact) {
        errors.emergencyContact = "Por favor, ingresa un contacto de emergencia.";
        errors.required = true;
    }


    return errors;


}

export default Validation;