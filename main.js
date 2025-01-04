import { GestorItems } from "./GestorItems.js";  
import { Item } from "./Item.js";
import { ItemVisual } from "./ItemVisual.js";

let newItem = new GestorItems();

let pcgaming = new Item("PC Gaming", "Pc del tipus gaming");
newItem.afegirItems(pcgaming);
let pcnormal = new Item("PC Normal", "Pc del tipus normal");
newItem.afegirItems(pcnormal);

let pcw = new ItemVisual("PC Workstation", "Pc del tipus workstation", "./img/worstation.webp")
newItem.afegirItems(pcw);

let pcw2 = new ItemVisual()
newItem.afegirItems(pcw2);

newItem.renderItems();
