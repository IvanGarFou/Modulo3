//! SALA NO ES UNA SUPER CLASE NI UNA SUBCLASE
//? SOLO ES UNA CLASE

 class Sala {
    constructor(numSala,cantGente,largometraje){
        this.numSala=numSala
        this.cantGente=cantGente
        this.largometraje=largometraje
    }
    //METODOS
    setMovie(){
      return "SE ESTA REPRODUCIENDO: " + this.largometraje.getTitle() +
            "\n Duracion: " + this.largometraje.getDuration()
    }

    getPeople(){
       return this.cantGente
    }

    getsalaNumber(){
        return this.numSala
    }
 }

 //EXPORTAMOS NUESTRA CLASE SALA
 export {Sala}