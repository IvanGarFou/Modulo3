
class Pila {
    constructor(){
        this.stack = [] //guardar datos en un arreglo vacío
    }
    //METODOS
    
    push(data){
       this.stack.push(data)
    }

    pop(){
        return this.stack.pop() //elimino el último elemento de la pila
    }

    peek(){
        if(this.stack < 1)
        return null 
        return this.stack[this.stack.length-1]
    }

    size(){
        return this.stack.length
    }

    print(){
        console.log(this.peek()) //imprimir el último elemento de mi pila, sin sacarlo de ella 
    }

    printStack(){
        console.log(this.stack)  //imprimir toda la pila 
    }
}

let pilita = new Pila()

pilita.printStack()
console.log(pilita.size())
pilita.push(1)
pilita.push(2)
pilita.push(3)
pilita.push(4)
pilita.printStack()
console.log(pilita.size())
console.log(pilita.print())
pilita.push("ROJO")
pilita.push("AMARILLO")
pilita.printStack()
console.log(pilita.print())
console.log(pilita.pop())
