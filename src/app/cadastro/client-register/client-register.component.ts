import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.newUserForm.value);
  }

  createNewUserForm() {
    this.newUserForm = this.fb.group({
          name: [
            '',
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100)
            ])
          ],
          email: ['', Validators.compose([Validators.email])],
          cpf: ['', Validators.compose([Validators.required])],
          birthday: ['', Validators.compose([Validators.required])],
          telephone: ['', Validators.compose([Validators.required])],
          password: ['', Validators.compose([Validators.required])],
          passwordConfirm: ['', Validators.compose([Validators.required])]
        });
  }
}
