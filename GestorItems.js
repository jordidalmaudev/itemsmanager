import { Item } from "./Item.js";

class GestorItems {
    items = []

    constructor(){
        this.items = JSON.parse(localStorage.getItem("items")) || [];
    }

    afegirItems(itemNou) {
        this.items.push(itemNou);
        this.guardarItems();
    }

    eliminarItems(nomItem) {
        //eliminamos en memoria
        let nouArray = items.filter(item => item.nom !== nomItem);
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
       let i = this.items.findIndex((item)=> item === nomItem);
       if (i >= 0) {
        if (novesDades.nom) this.items[index].nom = novesDades.nom;
            if (novesDades.descripcio) this.items[index].descripcio = novesDades.descripcio;
            this.items[index].dataModificacio = new Date();
            this.guardarItems();
            console.log(`Item modificat:`, this.items[index]);
        } else {
            console.log(`Item amb nom "${nom}" no trobat.`);
        }
    }

    guardarItems(){
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    cargarItems(){

    }
}

let newItem = new GestorItems()

let pcgaming = newItem.afegirItems(new Item({nom: "PC", descripcio: "Pc del tipus gaming"}))
console.log(pcgaming);
