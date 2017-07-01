/*

EJERCICIO N°2

1) Agregar un evento a los inputs:
que al clickear en ellos se muestre
una descripcion de la informacion que tiene que ir en ese campo.

2) Al deseleccionar el input, ocultar el mensaje

3) Dependiendo del sexo de la persona que ingresa mostrar colocar un prefijo mr. o ms. al saludo.

*/

var inputNombre = document.getElementById('nombre');

var inputs = document.querySelectorAll('input[type="text"]')

console.log(inputs)


for (var i = 0; i < inputs.length; i++) {

	inputs[i].onfocus = function (event) {
		var padre = this.parentNode;
		var description = padre.querySelector('.description');
		description.style.display = 'block';
	}

	inputs[i].onblur = function (event) {
		var padre = this.parentNode;
		var description = padre.querySelector('.description');
		description.style.display = 'none';
	}

}

var inputRadios= document.querySelector('inputs[type="radio"]')

for (var i in inputRadios) {
	inputRadios[i].onchage = function(event){
		console.log('cambio');
	}
}
