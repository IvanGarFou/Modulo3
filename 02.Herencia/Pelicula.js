import { Largometraje } from './Largometraje.js'

//!Herencia 
//PELICULA ES MI SUBCLASE
class Pelicula extends Largometraje {
    constructor(titulo,duracion,genero){
        //AQUÍ INDICAMOS QUE ATRIBUTOS DE MI CLASE PADRE VA A HEREDEDAR
        super(titulo,duracion)
        this.genero=genero
    }
    //METODO
    getGender(){
        return this.genero
    }
}

//USAMOS LA FORMA DEFINICA POR ECMASCRIPT V6
      export {Pelicula}