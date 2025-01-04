import { GestorItems } from '../classes/GestorItems.js';

let gestor = new GestorItems();

document.getElementById('cancelar').addEventListener('click', function() {
    window.location.href = '../index.html';
});

document.addEventListener('DOMContentLoaded', function() {
    let item = JSON.parse(localStorage.getItem('itemAEditar'));
    if (item) {
        document.getElementById('nom').value = item.nom;
        document.getElementById('descripcio').value = item.descripcio;
    }

    document.getElementById('formEditarItem').addEventListener('submit', function(event) {
        event.preventDefault();
        let novesDades = {
            nom: document.getElementById('nom').value,
            descripcio: document.getElementById('descripcio').value,
            dataModificacio: new Date().toLocaleString()
        };
        gestor.modificarItems(item.id, novesDades);
        window.location.href = '../index.html';
    });
});