//* COCINANDO ARREGLOS 

//* ESTA FORMA TAMBIEN ES VALIADA YA QUE UN ARRAY O ARREGLO  "ES UN OBJETO"

    var myArray = new Array() //ESTA VACIO
                             //0      1       2      3       4
    var myArray = new Array("JOSE","PEPE","JAIR","MARCO","SARAI")
    console.log(myArray.length)
    // la dimensión de mi arreglo
    console.table(myArray)

//* ESTA ES LA FORMA MAS COMUN Y LAS USADA PARA INICIAR UN ARREGLO 
//* Y LA QUE ESTAREMOS USANDO CONSTANTEMENTE

    var myArrayDos = [ ] // arreglo vacío, que vamos a poblar con datos/elementos
    var myArrayDos = ["LAZARO","JOSE","MADERO","ANDRES","TANIA","PEPE"]
    console.log(myArrayDos.length)
    console.log(myArrayDos)
    // var myArrayDos = [
    //     ["Tyrone", "Jones"],
    //     ["Janet", "Smith"],
    //     ["Maria", "Cruz"],
    // ]
    console.table(myArrayDos)

    //PODEMOS RECORRER UN ARREGLO PARA SABER SU TAMAÑO
      myArrayDos.forEach(function(myArrayDos){
            console.log(myArrayDos)
      })
 //forEach es un bloque constructivo de los lenguajes de programación
 //* RECORRE LOS ELEMENTOS DE UNA COLECCION (arreglos)

 //* EJEMPLO 1) supongamos que tenemos 2 arreglos ya existentes y deseamos crear
 //* uno nuevo  
      const discoUno = ["Green Day","Blink-182", "Linkin Park"]
      const discoDos = ["Gunds and Roses", "Bon Jovi", "Pearl Jam", "Poison D", "AC/DC"]
      const discoNuevo = discoUno.concat(discoDos)
      console.log(discoNuevo)
      console.table(discoNuevo)

 //* EJEMPLO 2) TENEMOS UN ARREGLO PARA ESTUDIANTES 
  var estudiantes = ["ANDRES", "JUAN", "JAIR","LUJAN", "OSCAR"]
  var lista = estudiantes.join(",")
  console.log(lista)
  // join convierte una lista en una cadena , formada por los elementos de mi arreglo
  // separarlo por comas

  //* EJEMPLO 3) VAMOS A UTILIZAR EL MISMO ARREGLO DE ESTUDIANTES, PARA PROBAR 
  //* EL METODO POP (LOS ULTIMOS ELEMENTOS DE LA LISTA)

      var ultimoElemento = estudiantes.pop()
      console.log(estudiantes)
      // PUSH
      estudiantes.push("ROBERTO")
      console.table(estudiantes)

      //* EJEMPLO 4) SEGUIR USANDO EL ARREGLO DE ESTUDIANTES
//* SPLICE (INDICE, NUMERO DE ELEMENTOS A "BORRAR" , "ELEMENTO NUEVO")
//* EN CASO DE SOLO BORRAR, "SOLO METER 2 PARAMETROS (INDICE, NUMERO DE ELEMENTOS A BORRAR)"
      estudiantes.splice(2,2)
      console.log(estudiantes)
    //* PASA QUE A VECES INDICAMOS QUE NO BORRE NINGUN ELEMENTO, PERO SI LO SUELE BORRAR

    estudiantes.splice(2,0, 
        "MARIA", "MARCO", "TANIA", "SARAI", "JUANPA",
        ["MANZANA","PERA"],2,3,4,5,80)//INSERTAR ELEMENTOS EN EL INDICE 2
    console.log(estudiantes)

 //* METODOS SHIFT & UNSHIFT ( IGUAL QUE POP Y PUSH PERO, CON EL PRIMER ELEMENTO DE LA LISTA)
    estudiantes.unshift("DANIEL")
    console.log(estudiantes)
    var primerElemento = estudiantes.shift()
    console.log(primerElemento)
    console.log(estudiantes)
    console.table(estudiantes)

    //* REPLACE a -> e  a ->b
    var ejemploReplace = "cocodrilo"
    var reemplazo = ejemploReplace.replace("c","N")
    console.log(reemplazo)