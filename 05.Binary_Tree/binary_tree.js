//* PASOS PARA DESARROLLAR EL CÓDIGO DE UN ARBOL BINARIO 
//* 2 CLASES, 1 CLASE - NODOS, 1 CLASE ÁRBOL BINARIO  

    class Node {  // CREAR NUESTROS NODOS -> CIERTA DATA, INFORMACIÓN O ATRIBUTOS
        constructor(data,left,right){
            this.data=data
            this.left=left
            this.right=right
        }
    }


    class binaryTree { // VAMOS A CONSTRUIR NUESTRO ÁRBOL BINARIO
        constructor(){
            this.root=null
        }
        // VAMOS A TENER COMO METODOS PRINCIPALES
        //* AGREGAR -> add: se va a encargar de agregar un dato
        //* CONTIENE -> contains: verificar si un nodo existe respecto a un dato 

        add(data){
            // lo primero que hacemos es verificar si la raiz (root) está vacia 
            if(this.root === null){
                // vamos a crear un nuevo nodo (data,null,null)
                this.root = new Node (data,null,null)
                return
            }
            // si no está vacio
            //vamos a crear un nuevo nodo -> currentNode (nodo actual)
            let currentNode = this.root
            // agregamos un ciclo mientras cada nodo sea un subarbol 
            while(true){
                if (data < currentNode.data){
                    //revisar si el nodo de la izquierda está vacio
                    if(currentNode.left !== null ){
                        // mi nodo actual se le asigna la posición de la izquierda
                        currentNode = currentNode.left
                    }else{
                        currentNode.left = new Node (data,null,null)
                        return currentNode.left
                    }
                }else{
                        //si el nodo de la derecha está vacio
                        if(currentNode.right !== null){
                            //agregamos un nuevo nodo 
                            currentNode = currentNode.right
                        }else{
                            //cambiar nuestro nodo actual por el espacio a la derecha
                            currentNode.right = new Node (data,null,null)
                            return currentNode.right
                        }
                }
            }   
        }
        contains(data){
            //partir de la raiz 
            let currentNode = this.root 
            //mientras currentNode EXISTA
            while(currentNode !== null ){
                //exista data adentro del nodo
                if (data === currentNode.data){
                    return true 
                }else{
                    if (data < currentNode.data){
                        currentNode = currentNode.left
                    }else{
                        currentNode = currentNode.right
                    }
                }
            }
            return false 
        }
    }

    // agregar información instanciar nuestros nodos

    const nodo = new binaryTree()
    nodo.add(12)
    nodo.add(13)
    nodo.add(11)
    console.log(nodo.contains(20))//false, no existe el nodo con la data (número) 20
    console.log(nodo)