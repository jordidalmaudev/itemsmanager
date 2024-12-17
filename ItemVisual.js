import { Item } from "./Item.js";

export class ItemVisual extends Item{
    urlImatge = "";

    constructor(urlImatge){
        super(id, nom, descripcio, dataCreacio, dataModificacio);
        this.urlImatge = urlImatge;
    }

    
}