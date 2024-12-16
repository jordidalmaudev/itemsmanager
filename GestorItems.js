import { Item } from "./Item";

class GestorItems {
    items = []

    afegirItems(itemNou) {
        this.items.push(itemNou);
        this.guardarItems();
    }

    eliminarItems(itemEliminar) {
        let nouArray = items.filter(item => item !== itemEliminar);
        this.items = nouArray;
    }

    /**
     * 
     * @param {string} nomItem 
     * @param {*} novesDades 
     */
    modificarItems(nomItem, novesDades){
       let indice = this.items.findIndex((item)=> item === nomItem);
       console.log(indice); 
    }

    guardarItems(){
        localStorage.setItem("items", JSON.stringify(items));
    }

    cargarItems(){

    }
}
