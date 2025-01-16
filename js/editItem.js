import { GestorItems } from '../classes/GestorItems.js';

let gestor = new GestorItems();

document.getElementById('cancelar').addEventListener('click', function() {
    window.location.href = '../index.html';
});

document.addEventListener('DOMContentLoaded', function() {
    let item = JSON.parse(localStorage.getItem('itemAEditar'));
    if (item) {
        document.getElementById('imgItem').src = item.urlImage || "../img/noImg.webp";
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
        
        let items = JSON.parse(localStorage.getItem('items')) || [];
        // si mismo nombre y diferente descripcion = false, se edita sin problema
        let itemExists = items.some(existingItem => existingItem.nom === novesDades.nom && existingItem.descripcio !== item.descripcio);

        if (itemExists) {
            alert('No se puede poner ya que ya existe un item con el mismo nombre.');
        } else {
            gestor.modificarItems(item.nom, novesDades); 
            window.location.href = '../index.html';
        }
    });
});