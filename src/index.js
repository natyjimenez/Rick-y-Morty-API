import dataRick from './App'

//Función para imprimir información de la data
dataRick.then((personaje) => {
  //Constante donde llamo por ID a la etiqueta de HTML donde registraré los cambios
  const cardData = document.getElementById('personajes')
  //Función iterante de donde extraigo la información para imprimirla en HTML
  personaje.forEach(element => {
    //Template donde imprimo la data que quiero mostrar
    cardData.innerHTML += `
      <div class="tarjetita ml-5 mb-5 col-sm-12 col-md-4 col-lg-3"> 
      <h1 class="title">${element.nombre}</h1>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img id="${element.id}" src="${element.imagen}" class="card-img imagen" alt="image">
          </div>
          <div class="flip-card-back">
          <p class="card-text">${element.genero}</p>
          <p class="card-text">${element.especie}</small></p>
          <p class="card-text">${element.estado}</small></p>
          </div>
        </div>
      </div>
    </div>`

  });
  //Error
}).catch((error) => console.log(error))