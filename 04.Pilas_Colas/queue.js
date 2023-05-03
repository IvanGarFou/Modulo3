
    class Queue {
        constructor(){
            this.collection = [] // Cola de ejecución, que esta completamente vacia 
        }
        //METODOS
        enqueue(element){  //encolar
            this.collection.push(element)

        }
        dequeue(){ //desencolar 
            return this.collection.shift()
        }

        isEmpty(){ //nos dice si la cola está vacia o no metodo auxiliar
            return this.collection.length == 0
        }

        //reemplazar a peek
        front(){ //metodo auxiliar
            if(this.collection.length < 1)
            return null
            return this.collection[0]
        }

        back(){ // metodo auxiliar
            if(this.collection.length < 1)
            return null
            return this.collection[this.collection.length-1]
        }
        size(){
            return this.collection.length
        }
        print(){
            console.log("Front: " + this.front() + "Back: " + this.back())
        }
        printQueue(){
            console.log(this.collection)
        }
    }

    let serpienteComeSuperHeroes = new Queue()

    if(serpienteComeSuperHeroes.isEmpty()){
        console.log("Mi serpiente tiene HAMBRE")
    }else{
        console.log("No tiene tanta HAMBRE")
    }

    serpienteComeSuperHeroes.enqueue({
        nombre: "SUPERMAN",
        sexo:"MASCULINO"
    })
    console.log("LA SERPIENTE SE COMIO A " + serpienteComeSuperHeroes.back().nombre)
    // console.log(serpienteComeSuperHeroes.isEmpty())

    serpienteComeSuperHeroes.enqueue({
        nombre: "BATMAN",
        sexo:"MASCULINO"
    })
    console.log("LA SERPIENTE SE COMIO A " + serpienteComeSuperHeroes.back().nombre)

    serpienteComeSuperHeroes.enqueue({
        nombre: "MUJER MARAVILLA",
        sexo:"FEMENINO"
    })
    console.log("LA SERPIENTE SE COMIO A " + serpienteComeSuperHeroes.back().nombre)

    if(serpienteComeSuperHeroes.isEmpty()){
        console.log("Mi serpiente tiene HAMBRE")
    }else if (serpienteComeSuperHeroes.size() < 5){
        console.log("Mi serpiente no tiene tanta HAMBRE, pero quiere comer más")
    }else{
        console.log("ESTA A REVENTAR LA SERPIENTE ")
    }