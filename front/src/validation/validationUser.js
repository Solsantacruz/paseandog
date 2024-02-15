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


    return errors;


}

export default Validation;