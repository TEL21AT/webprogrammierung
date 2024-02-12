class Fahrzeug {
    constructor(hersteller, modell, baujahr) {
        this.hersteller = hersteller;
        this.modell = modell;
        this.baujahr = baujahr;
    }

    getVehicleInfo() {
        return `Hersteller: ${this.hersteller}; Modell: ${this.modell}; Baujahr: ${this.baujahr}`;
    }
}

class Auto extends Fahrzeug{
    constructor(hersteller, modell, baujahr, tueren) {
        super(hersteller, modell, baujahr);
        this.tueren = tueren;
    }

    getVehicleInfo() {
        return `${super.getVehicleInfo()}; Tueren: ${this.tueren}`;
    }
}

let fahrzeug = new Fahrzeug("VW", "Golf", 2010);
let auto = new Auto("VW", "Golf", 2010, 5);
console.log(auto.getVehicleInfo()); // Hersteller: VW; Modell: Golf; Baujahr: 2010; Türen: 5
console.log(fahrzeug.getVehicleInfo()); // Hersteller: VW; Modell: Golf; Baujahr: 2010