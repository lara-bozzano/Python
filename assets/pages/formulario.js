
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	Apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    Códigopostal: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const campos = {
	firstname: false,
	Apellido: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
            
		case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;
        case "Codigopostal":
			validarCampo(expresiones.password, e.target, 'Codigopostal');
		break;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
