/*
CONSIGNA: Mejorar el modulo IMDB

- El modulo debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
- El objeto pelicula ahora debera tener la propiedad descripcion e imagen
- El titulo debera ser un H2, la descipcion un P y la imagen un img

*/
var titulos = [
	//Cada objeto dentro del array es una noticia :)
	{
		id:1,
		titulo: "Game of Thrones",
		descripcion: "Luego de mucha expectativa, HBO estrena la séptima temporada del éxito global que ha hecho historia entre las series: Game of Thrones. Este domingo 16 de julio disponible en todo el mundo la continuación del relato basado en los libros de George R. Martin, que se ofrece en una entrega de siete capítulos. La serie ambientada en los continentes ficticios de Westo y Essos recorre distintos arcos narrativos en los cuales participan un gran número de personajes como Lena Heady, Emilia Clarke, Kit Harrington, Maise Williams, Sophie Turner, Nikolaj Coster-Waldau, Gwendoline Christie y Peter Dinklage.",
		imagen: "ID_1.jpg",
	},
	{
		id:2,
		titulo: "Almuerzo con mi madre",
		descripcion: "En tres arroyos madre e hijo comen en un rico restoran.",
		imagen: "ID_2.jpg",
	},
	{
		id:3,
		titulo: "Duro de Matar",
		descripcion: "Emocionante comida para deleitar.",
		imagen: "ID_3.jpg",
	},
];

var News = (function () {

	//parte privada



	//publica
	return {
		getNews: function () {


			log(titulos);
		},



		render: function (datos) {

			var contenedor = document.querySelector('main');

			for (var i = 0; i < datos.length; i++) {
				//Agregamos titilo
				var titulo = document.createElement('h2');
				titulo.innerHTML = datos[i].titulo;
				//Agregamos la imagen
				var imagen = document.createElement('img');
				imagen.src = 'img/' + datos[i].imagen;
				//agregamos descripcion
				var descripcion = document.createElement('p');
				descripcion.innerHTML = datos[i].descripcion;


				contenedor.appendChild(titulo);
				contenedor.appendChild(imagen);
				contenedor.appendChild(descripcion);
      }
}
};
})();

News.render(titulos);
