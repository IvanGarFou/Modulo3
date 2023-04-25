class Person{

    constructor(name, edad, altura,peso){
        this.name = name;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }

    //Metodo
    saludar(){
        console.log("Hola Mundo me presento soy", this.name, "Tengo", this.edad)
    }

    despedirse(){
        console.log("Adios", this.name)
    }

}

const Ivan = new Person("Ivan", 21, 1.75, 80)
Ivan.saludar()

const Miguel = new Person("Miguel", 25, 1.80, 82)
Miguel.saludar()

const Ale = new Person("Ale", 23, 1.80, 81)
Ale.despedirse()

//Conexion a base de datos
// Datos name, edad, altura, peso