import Personaje from "./Personaje"
import axios from "axios";

//Función IIFE
const dataRick = (() => {
    //Función asíncrona que retorna una promesa
    return new Promise(async (resolve, reject) => {
        //Intento hacer una llamada a la API
        try {
            //Constante que espera el llamado a la API 
            const apiUrl = await axios.get("https://rickandmortyapi.com/api/character");
            //Variable que espera el resultado de la llamada a la API
            let datos = apiUrl.data.results
            //Variable en que guardo el resultado del recorrido del array de la data que me traigo de la API
            let personaje = []
            //Recorro la data para sacar la información que necesito
            datos.forEach(e => {         
                personaje.push(new Personaje(e.image, e.id, e.name, e.gender, e.species, e.status))
            });
            //Recibo la información que solicito a la API
            resolve(personaje);

            //Error en la Promesa
        } catch (error) {
            //Ejecuto mensaje de error
            reject(`Error: ${error}`)
        }

    })
})();

export default dataRick