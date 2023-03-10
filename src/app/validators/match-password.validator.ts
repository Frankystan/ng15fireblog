import { AbstractControl } from '@angular/forms';
export class PasswordValidator {
    // FUENTE: https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password')?.value; // to get value in input tag
        let passwordConfirm = AC.get('confirm_password')?.value; // to get value in input tag
        if (password != passwordConfirm) {
            // console.log('false');

            AC.get('confirm_password')?.setErrors({ pwdMatch: true })
            return { matching: true };
        } else {
            // console.log('true');
            return null
        }
    }
}
