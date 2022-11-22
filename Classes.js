 class Person {
    name;
    adress;

    constructor(name,adress) {
        this.name = name;
        this.adress = adress;
      }
      get name() {
        return this.name;
      }

      set name(name) {
        this.name = name;
      }

      get surname() {
        return this.name;
      }

      set surname(surname) {
        this.surname = surname;
      }

      get adress() {
        return this.adress;
      }

      set adress(adress) {
        this.adress = adress;
      }
}
export class Client extends Person {
    SIRET;
    status;
    Naf_code;

    constructor(name, adress,SIRET,status,Naf_code) {
        super(name, adress);
        this.name = name;
        this.adress = adress;
        this.SIRET = SIRET;
        this.status = status;
        this.Naf_code = Naf_code;
      }
}

export class Provider extends Person {
  Sec_nb;
  constructor(name, adress,Sec_nb) {
      this.name = name;
      this.adress = adress;
      this.Sec_nb = Sec_nb;
    }
  }