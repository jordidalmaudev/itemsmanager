import { GestorItems } from "./GestorItems.js";  
import { Item } from "./Item.js";

let newItem = new GestorItems();

let pcgaming = newItem.afegirItems(new Item({ nom: "PC Gaming", descripcio: "Pc del tipus gaming" }));
let pcnormal = newItem.afegirItems(new Item({ nom: "PC Normal", descripcio: "Pc del tipus normal" }));
let pcportatil = newItem.afegirItems(new Item({ nom: "PC Portatil", descripcio: "Pc del tipus portatil" }));
newItem.renderItems();