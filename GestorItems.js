export class GestorItems {
    items = []

    constructor() {
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
    modificarItems(nomItem, novesDades) {
        let i = this.items.findIndex((item) => item === nomItem);
        if (i !== -1) {
            if (novesDades.nom) this.items[i].nom = novesDades.nom;
            if (novesDades.descripcio) this.items[i].descripcio = novesDades.descripcio;
            this.items[i].dataModificacio = new Date().toLocaleString();
            this.guardarItems();
            console.log(`Item modificat:`, this.items[i]);
        } else {
            console.log(`Item amb nom "${nom}" no trobat.`);
        }
    }

    guardarItems() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    // renderizar item en el html id items desde el localstorage
    renderItems() {
        let items = JSON.parse(localStorage.getItem("items"));
        let table = document.getElementById("items");
    
        items.forEach(item => {
            table.innerHTML += `
                <tr>
                    <td>${item.nom}</td>
                    <td>${item.descripcio}</td>
                    <td>${item.datacreacio}</td>
                    <td>${item.dataModificacio || ''}</td>
                    <td><a onclick="this.modificarItems(item.nom, item)">Editar</a> - <a onclick="this.eliminarItems(item.nom)">Eliminar</a></td>
                </tr>
            `;
        });
    }
}