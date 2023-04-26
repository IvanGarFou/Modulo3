//? LARGOMETRAJE ES MI CLASE PADRE 
 class Largometraje {
    constructor(titulo,duracion){
      this.titulo=titulo 
      this.duracion=duracion 
    }
    //MÉTODOS DE LA CLASE (GETTER Y SETTER)
     
    getTitle(){
       return this.titulo
    }

    getDuration(){
      return this.duracion
    }
 }

 //EXPORTAR LAS PLATILLAS DE CÓDIGO
 //USAMOS LA FORMA DEFINIDA POR ECMASCRIPT V6
  export { Largometraje }