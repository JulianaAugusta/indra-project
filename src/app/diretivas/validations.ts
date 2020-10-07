import { AbstractControl } from '@angular/forms';

export class Validations {
  static cpfValidation(control: AbstractControl) {
    const cpf = control.value;

    let sum: number = 0;
    let rest: number;
    let valid: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valid = false;
    else {

      valid = true;

      for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(cpf.substring(9, 10))) valid = false;

      sum = 0;
      for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(cpf.substring(10, 11))) valid = false;      
    }

    if (valid) return null;

    return { invalidCpf: true };
  }

  static ofAge(control: AbstractControl) {
    const birthday = control.value;
    const [year, month, day] = birthday.split('-');
    const currentDay = new Date();
    const dateOfBirth = new Date(year, month, day, 0, 0, 0);
    const timeForTest = 1000 * 60 * 60 * 24 * 365 * 18;

    if (currentDay.getTime() - dateOfBirth.getTime() >= timeForTest)
      return null;

    return { underAge: true };
  }

  static checkSamePassword(control: AbstractControl) {
    let password = control.get('password').value;
    let passwordConfirm = control.get('passwordConfirm').value;

    if (password === passwordConfirm) return null;

    control.get('passwordConfirm').setErrors({ passwordsNotMatch: true });
  }
}