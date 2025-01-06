import { Item } from "./Item.js";

export class ItemVisual extends Item {

    urlImage;

    /**
     * 
     * @param {string} id 
     * @param {string} nom 
     * @param {string} descripcio 
     * @param {Date} dataCreacio 
     * @param {Date} dataModificacio
     * @param {string} urlImage 
     */
    constructor(nom = "Item visual por defecto", descripcio = "Item visual descripcio por defecto", urlImage) {
        super(nom, descripcio);
        this.urlImage = urlImage;
        this.id = "v" + this.id;
    }
}