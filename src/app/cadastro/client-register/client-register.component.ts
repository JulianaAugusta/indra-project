import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validations } from '../../diretivas/validations';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createNewUserForm();
  }

  sendData() {
    const dataForm = this.newUserForm.value;

    const user = new User(
      dataForm.name,
      dataForm.email,
      dataForm.cpf,
      dataForm.birthday,
      dataForm.telephone,
      dataForm.password,
      dataForm.terms,
      dataForm.sms
    );

    alert(`O usuário ${user.name} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(user)}`);

    this.newUserForm.reset();
  }

  createNewUserForm() {
    this.newUserForm = this.fb.group(
      {
          name: [
            '',
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100)
            ])
          ],
          email: ['', Validators.compose([Validators.email])],
          cpf: ['', Validators.compose([Validators.required, Validations.cpfValidation])],
          birthday: ['', Validators.compose([Validators.required, Validations.ofAge])],
          telephone: ['', Validators.compose([Validators.required])],
          password: [
            '',
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(8)
            ])
          ],
          passwordConfirm: ['', Validators.compose([Validators.required])],
          sms: [''],
          terms: ['', Validators.compose([Validators.required])]
        },
        {
          validator: Validations.checkSamePassword
        }
      );
  }

  get name() {
    return this.newUserForm.get('name');
  }

  get email() {
    return this.newUserForm.get('email');
  }

  get cpf() {
    return this.newUserForm.get('cpf');
  }

  get birthday() {
    return this.newUserForm.get('birthday');
  }

  get telephone() {
    return this.newUserForm.get('telephone');
  }

  get password() {
    return this.newUserForm.get('password');
  }

  get passwordConfirm() {
    return this.newUserForm.get('passwordConfirm');
  }
  
  get terms(){
    return this.newUserForm.get('terms');
  }

  get sms(){
    return this.newUserForm.get('sms');
  }
  
}
