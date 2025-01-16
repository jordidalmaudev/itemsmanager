import { GestorItems } from "../classes/GestorItems.js";  

const gestor = new GestorItems();
gestor.renderItems(gestor.items);


document.getElementById('buscar').addEventListener('click', function () {
    let palabraBuscada = document.getElementById('buscador').value.trim();
    gestor.filtrarYRenderizar(palabraBuscada);

});
