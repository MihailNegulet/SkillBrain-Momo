class Masina {
    constructor(marca, model, culoare, kilometraj){
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    getProperties() {
        return `Masina [marca= ${this.marca}, model= ${this.model}, culoare= ${this.culoare}, kilometraj= ${this.kilometraj}]`;
    }
}

const  main = () => {
    const car1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
    const car2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const car3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

    console.log(car1.getProperties());
    console.log(car2.getProperties());
    console.log(car3.getProperties());
}

main();

class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj){
        super(marca, model, culoare, kilometraj);
    }

    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            return `a castigat locul ${pozitiaInCampionat}`;
        }
        else return `nu a castigat niciun premiu`;
    }
}

const campionat = () => {
    const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
    const m2 = new MasinaDeCurse("Renault", "Clio", "Alb", 250000);

    console.log(`Masina ${m1.marca}, ${m1.participaLaCampionat(10)}`);
    console.log(`Masina ${m2.marca}, ${m2.participaLaCampionat(-1)}`);
}

campionat();