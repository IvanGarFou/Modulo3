import { Largometraje } from './Largometraje.js'

//! Herencia
// PARTIDO ES MI SUBCLASE 
class Partido extends Largometraje {
     constructor(titulo,duracion,equipo){
        //AQUÍ INDICAMOS QUE ATRIBUTOS DE MI CLASE PADRE VA A HEREDEDAR
        super(titulo,duracion)
        this.equipo=equipo
     }
     //METODO
     getTeam(){
        return this.equipo
     }
}

//EXPORTAMOS NUESTRO BLOQUE DE CODIGO
    export {Partido}