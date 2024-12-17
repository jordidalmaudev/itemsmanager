import { Item } from "./Item.js";

class GestorItems {
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

    renderItems() {
        let items = JSON.parse(localStorage.getItem("items"));
        let div = document.getElementById("items");

    }

    // renderizar item en el html id items desde el localstorag
    renderItems() {
        let items = JSON.parse(localStorage.getItem("items"));
        let table = document.getElementById("items");
        table.innerHTML = `
            <tr>
                <th>Nom</th>
                <th>Descripció</th>
                <th>Data Creació</th>
                <th>Data Modificació</th>
            </tr>
        `;

        items.forEach(item => {
            table.innerHTML += `
                <tr>
                    <td>${item.nom}</td>
                    <td>${item.descripcio}</td>
                    <td>${item.datacreacio}</td>
                    <td>${item.dataModificacio || ''}</td>
                </tr>
            `;
        });
    }
}

let newItem = new GestorItems()

let pcgaming = newItem.afegirItems(new Item({ nom: "PC Gaming", descripcio: "Pc del tipus gaming" }));
let pcnormal = newItem.afegirItems(new Item({ nom: "PC Normal", descripcio: "Pc del tipus normal" }));
let pcportatil = newItem.afegirItems(new Item({ nom: "PC Portatil", descripcio: "Pc del tipus portatil" }));
newItem.renderItems();
console.log(pcgaming);
console.log(pcnormal);
console.log(pcportatil);
