const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	firstname: /^[a-zA-Z0-9\_\-]{4,16}$/,
	Apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const campos = {
	firstname: false,
	Apellido: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "firstname":
			validarCampo(expresiones.usuario, e.target, 'nombre');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'Código-postal');
			validarPassword2();
		break;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
