export class GestorItems {
    items = [];
    noImg = "img/noImg.webp";

    constructor() {
        this.items = JSON.parse(localStorage.getItem("items")) || [];
    }

    /**
     * 
     * @param {Object} itemNou 
     */
    afegirItems(itemNou) {
        this.items.push(itemNou);
        this.guardarItems();
    }

    /**
     * Eliminar un item de this.items
     * @param {string} idItem 
     */
    eliminarItems(idItem) {
        let i = this.items.findIndex((item) => item.id === idItem);
        if (i !== -1) {
            this.items.splice(i, 1); // Elimina 1 elemento a partir de la posición i
            this.guardarItems();
            console.log(`Item eliminat:`, this.items);
            alert('Item eliminado exitosamente.');
            window.location.href = 'index.html';
        } else {
            console.log(`Item amb la id "${idItem}" no trobat.`);
        }
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

    /**
     * 
     * @param {string} itemId 
     */
    guardarItemYRedirigir(itemId) {
        let item = this.items.find(item => item.id === itemId);
        localStorage.setItem('itemAEditar', JSON.stringify(item));
        window.location.href = 'vistas/editItem.html';
    }

    /**
     * 
     * @param {string} palabraBuscada 
     */
    filtrarYRenderizar(palabraBuscada) {
        if (!palabraBuscada) {
            alert('Introduce una palabra para buscar');
            this.renderItems();
            return;
        }

        let items = JSON.parse(localStorage.getItem("items")) || [];
        let resultados = [];

        // si el nom de l’ítem és exactament igual a la paraula entrada
        console.log("1");
        resultados = items.filter(item => item.nom === palabraBuscada);

        // si el nom de l’ítem comença per la paraula entrada
        console.log("2");
        resultados = resultados.concat(
            items.filter(item => item.nom.startsWith(palabraBuscada) && !resultados.includes(item))
        );

        // si el nom de l’ítem conté la paraula entrada
        console.log("3");
        resultados = resultados.concat(
            items.filter(item => item.nom.includes(palabraBuscada) && !resultados.includes(item))
        );

        this.renderItems(resultados);
    }

    // renderizar item en el html id items desde el localstorage y filtrados si fuera necesario
    /**
     * 
     * @param {Array<string>} filtrados 
     * @returns {void}
     */
    renderItems(filtrados = null) {
        // filtrados no es null ni undefined, por lo que esta sera la lista que se renderiza (cuando se busque algo) mientras sera null y se trabajara con el localStorage
        let items = filtrados || JSON.parse(localStorage.getItem("items")) || [];
        let table = document.getElementById("items");
        table.innerHTML = ""; // Limpiar tabla

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
