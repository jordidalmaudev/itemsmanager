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
    constructor(nom = "", descripcio = "") {
        this.id = this.generadorId(); 
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = this.generadorData();
        this.dataModificacio = this.generadorData();
    }

     /**
     * 
     * @returns {string} id
     */
     generadorId() {
        const id = Date.now() + '-' + Math.floor(Math.random() * 1000);
        return id;
    }
    
    /**
     * 
     * @returns {Date} data
     */
    generadorData() {
        let data = new Date().toLocaleString();
        return data;
    }

    render(){
    }
    
    append(element){
        return element.innerHTML += this.render();
    }
}