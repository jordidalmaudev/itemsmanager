export class Item {

    nom = "";
    descripcio = "";
    dataCreacio = new Date.now();
    dataModificació = new Date.now();

    constructor(nom, descripcio, dataCreacio, dataModificació) { 
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = dataCreacio;
        this.dataModificació = dataModificació;
    }


}