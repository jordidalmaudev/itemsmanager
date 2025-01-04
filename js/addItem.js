import { GestorItems } from '../classes/GestorItems.js';

let gestor = new GestorItems();

document.getElementById('cancelar').addEventListener('click', function() {
    window.location.href = '../index.html';
});

document.getElementById('formEditarItem').addEventListener('submit', function(event) {
    event.preventDefault();
    let nuevoItem = {
        nom: document.getElementById('nom').value,
        descripcio: document.getElementById('descripcio').value
    };
    gestor.afegirItems(nuevoItem);
    window.location.href = '../index.html';
});

