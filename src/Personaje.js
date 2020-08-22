//Clase personaje
class Personaje {
    //Constructor con información "base" que requiero para armar ficha de cada personaje
    constructor(imagen, id, nombre, genero, especie, estado) {   
        this.imagen = imagen
        this.id = id
        this.nombre = nombre
        this.genero = genero
        this.especie = especie
        this.estado = estado
    }
}

export default Personaje