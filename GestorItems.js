export class GestorItems {
    items = []
    noImg = "./img/noImg.webp";

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
    * @param {string} id
    * @param {Object} novesDades
    */
    modificarItems(id, novesDades) {
        let i = this.items.findIndex((item) => item.id === id);
        if (i !== -1) {
            if (novesDades.nom) this.items[i].nom = novesDades.nom;
            if (novesDades.descripcio) this.items[i].descripcio = novesDades.descripcio;
            if (novesDades.dataModificacio) this.items[i].dataModificacio = novesDades.dataModificacio;
            this.guardarItems();
            console.log(`Item modificat:`, this.items[i]);
        } else {
            console.log(`Item amb la id "${id}" no trobat.`);
        }
    }

    guardarItems() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    guardarItemYRedirigir(itemId) {
        console.log("aaa");
        
        let item = this.items.find(item => item.id === itemId);
        localStorage.setItem('itemAEditar', JSON.stringify(item));
        window.location.href = './editItem.html';
    }

    // renderizar item en el html id items desde el localstorage
    renderItems() {
        let items = JSON.parse(localStorage.getItem("items"));
        let table = document.getElementById("items");

        items?.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${item.urlImage || this.noImg}" width="100" height="100">
                </td>
                <td>${item.nom}</td>
                <td>${item.descripcio}</td>
                <td>${item.dataCreacio}</td>
                <td>${item.dataModificacio || ''}</td>
                <td>
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">${item.id}</button>
                </td>
            `;
            table?.appendChild(row);

            // Agregar event listeners a los botones
            row.querySelector('.edit-btn').addEventListener('click', () => this.guardarItemYRedirigir(item.id));
            row.querySelector('.delete-btn').addEventListener('click', () => this.eliminarItem(item.id));
        });
    }
}

const gestor = new GestorItems();
gestor.renderItems();