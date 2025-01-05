import { GestorItems } from '../classes/GestorItems.js';
import { Item } from '../classes/Item.js';
import { ItemVisual } from '../classes/ItemVisual.js';

let gestor = new GestorItems();
let tipusItem = document.getElementById('categoria').value;

document.getElementById('cancelar').addEventListener('click', function () {
    window.location.href = '../index.html';
});


// esconde o muestra el campo de imagen dependiendo del tipo de item, por defecto es item (escondido)
document.getElementById('categoria').addEventListener('change', function () {
    tipusItem = this.value;
    if (tipusItem === "itemVisual") {
        document.getElementById('imgItemVisual').style.display = 'block';
    } else {
        document.getElementById('imgItemVisual').style.display = 'none';
    }
});

document.getElementById('formEditarItem').addEventListener('submit', function (event) {
    event.preventDefault();
    if (tipusItem === "itemVisual") {
        let nuevoItem = new ItemVisual(document.getElementById('nom').value, document.getElementById('descripcio').value, document.getElementById('img').value);
        gestor.afegirItems(nuevoItem);
        alert('Item Visual agregado exitosamente.');
        window.location.href = '../index.html';
    } else {
        let nuevoItem = new Item(document.getElementById('nom').value, document.getElementById('descripcio').value);
        gestor.afegirItems(nuevoItem);
        alert('Item agregado exitosamente.');
        window.location.href = '../index.html';
        
    }
});

