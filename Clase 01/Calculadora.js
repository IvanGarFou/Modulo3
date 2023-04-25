//Creando una clase de un objeto Calculadora
class Calculadora{
    //Constructor es crear nuestro objeto
    constructor(numero, numero2){
        //Propiedad del objeto
        this.numero = numero
        this.numero2 = numero2
    }

    //Metodos
    suma(){
        console.log(this.numero + this.numero2)
    }

    multiplicar(){
        console.log(this.numero * this.numero2)
    }
}

//Instanciar 
const calculadora = new Calculadora(5,10)


calculadora.suma()
calculadora.multiplicar()

console.log(Calculadora)