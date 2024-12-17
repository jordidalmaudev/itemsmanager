import { Item } from "./Item.js";

class GestorItems {
    items = []

    constructor(){
        this.items = JSON.parse(localStorage.getItem("items")) || [];
    }

    /**
     * 
     * @returns {string} id
     */
    generadorId() {
        const id = Date.now() + '-' + Math.floor(Math.random() * 1000);
        return id;
    }

    afegirItems(itemNou) {
        this.items.push(itemNou);
        this.guardarItems();
    }

    eliminarItems(idItem) {
        //eliminamos en memoria
        let nouArray = items.filter(item => item !== idItem);
        this.items = nouArray;
        // guardamos en localstorage la data actualizada (eliminado)
        this.guardarItems();
    }

    /**
     * 
     * @param {string} nomItem 
     * @param {Object} novesDades 
     */
    modificarItems(nomItem, novesDades){
       let indice = this.items.findIndex((item)=> item === nomItem);
       console.log(indice); 
    }

    guardarItems(){
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    cargarItems(){

    }
}

let newItem = new GestorItems()

let pcgaming = newItem.afegirItems(new Item(newItem.generadorId(), "PC", "Ordinador gaming"))
console.log(pcgaming);
//enseñar items
console.log(newItem.items);
//eliminar items
newItem.eliminarItems(pcgaming);

