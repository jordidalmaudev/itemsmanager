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
    constructor(nom = "Item visual", descripcio = "Item visual descripcio", urlImage) {
        super(nom, descripcio);
        this.urlImage = urlImage;
        this.id = "visual-" + this.id;
    }
}