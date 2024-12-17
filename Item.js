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
    constructor({id = this.generadorId(), nom = "", descripcio = "", dataCreacio = this.generadorData(), dataModificacio = this.generadorData()}) {
        this.id = id; 
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = dataCreacio;
        this.dataModificacio = dataModificacio;
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

