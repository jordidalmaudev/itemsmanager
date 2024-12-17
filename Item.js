export class Item {
    id;
    nom;
    descripcio;
    dataCreacio;
    dataModificacio;

    /**
     * @param {string} id 
     * @param {string} nom 
     * @param {string} descripcio 
     * @param {Date} dataCreacio 
     * @param {Date} dataModificacio
     */
    constructor(id, nom, descripcio, dataCreacio = new Date().toLocaleString(), dataModificacio = new Date().toLocaleString()) {
        this.id = id; 
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = dataCreacio;
        this.dataModificacio = dataModificacio;
    }

    
}

