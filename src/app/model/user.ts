export class User {

    constructor(name: string, email: string, cpf: string, birthday: Date, telephone: string, password: string) {
      this.name = name;
      this.email = email;
      this.cpf = cpf;
      this.birthday = birthday;
      this.telephone = telephone;
      this.password = password;
    }
  
    name: string;
    email: string;
    cpf: string;
    birthday: Date;
    telephone: string;
    password: string;
  }