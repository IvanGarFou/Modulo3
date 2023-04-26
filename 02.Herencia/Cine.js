//! NO ES UNA SUPERCLASE NI UNA SUBCLASE
//!ES SOLO UNA CLASE 
//! ARCHIVO PRINCIPAL  main.js
import {Sala} from './Sala.js'
import { Pelicula } from './Pelicula.js'
import { Documental } from "./Documental"
import { Partido } from "./Partido"


    class Cine {
        constructor(sala){
            this.sala=sala
        }
        //METODO
        Reproducir () {
            return this.sala.setMovie() + "\n" + this.sala.getPeople() + "\n" + this.sala.getsalaNumber()
        }
    }

    // CREAR NUESTROS OBJETOS / INSTANCIAR OBJETOS 

//* INSTANCIAS DE NUESTRO OBJETO PELICULA
const peliculaUno = new Pelicula("TITANIC","220MIN", "B")
const salaUno = new Sala ("SALA 1", "220 PERSONAS", peliculaUno)
const cinepolisPolanco = new Cine (salaUno) 

//IMPRIMIR NUESTROS OBJETOS EN CONSOLA 
console.log(cinepolisPolanco.Reproducir())
