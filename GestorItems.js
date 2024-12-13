class GestorItems {
    items = []

    afegirItems(itemNou) {
        this.items.push(itemNou);
    }

    eliminarItems(itemEliminar) {
        let nouArray = items.filter(item => item !== itemEliminar);
        items = nouArray;
    }

    modificarItems(nomItem, novesDades){

    }

    guardarItems(){
        localStorage.setItem("items", JSON.stringify(items));
    }
}