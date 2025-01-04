export class GestorItems {
    items = []
    noImg = "img/noImg.webp";

    constructor() {
        this.items = JSON.parse(localStorage.getItem("items")) || [];
    }

    afegirItems(itemNou) {
        this.items.push(itemNou);
        this.guardarItems();
    }

    eliminarItems(idItem) {
        //eliminamos en memoria
        let nouArray = items?.filter(item => item.id !== idItem);
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
        let item = this.items.find(item => item.id === itemId);
        localStorage.setItem('itemAEditar', JSON.stringify(item));
        window.location.href = 'vistas/editItem.html';
    }

    // renderizar item en el html id items desde el localstorage
    renderItems() {
        console.log(this.items);
        
        let items = JSON.parse(localStorage.getItem("items"));
        let table = document.getElementById("items");

        if (this.items.length > 0) {
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
                row.querySelector('.delete-btn').addEventListener('click', () => this.eliminarItems(item.id));
            });
        } else {
            console.log("No hay items");
            
            table.innerHTML = `<h1>No hay items</h1>`;
            return;
        }
    }
}

