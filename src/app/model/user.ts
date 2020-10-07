export class User {

    constructor(name: string, email: string, cpf: string, birthday: Date, telephone: string, password: string, terms:boolean, sms: boolean) {
      this.name = name;
      this.email = email;
      this.cpf = cpf;
      this.birthday = birthday;
      this.telephone = telephone;
      this.password = password;
      this.terms = terms;
      this.sms = sms;
    }
  
    name: string;
    email: string;
    cpf: string;
    birthday: Date;
    telephone: string;
    password: string;
    terms: boolean;
    sms: boolean;
  }