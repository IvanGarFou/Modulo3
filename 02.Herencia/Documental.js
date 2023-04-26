import { Largometraje } from './Largometraje.js'

//DOCUMENTAL ES MI SUBCLASE
//! HERENCIA
     //subclase
class Documental extends Largometraje {
      constructor(titulo,duracion,autor){
        //AQUÍ INDICAMOS QUE ATRIBUTOS DE MI CLASE PADRE VA A HEREDEDAR
         super(titulo,duracion)
         this.autor=autor
      }
      //METODOS
      getAuthor(){
        return this.autor=autor
      }
}

//EXPORTAMOS
    export {Documental}