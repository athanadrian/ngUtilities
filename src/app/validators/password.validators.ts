import { AbstractControl, ValidationErrors } from '@angular/forms';



export class PasswordValidators {
    static invalidPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (control.value !== '1234') {
                resolve({ invalidPassword: true });
            } else { resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsShouldMatch: true };
        }
        return null;
    }
}
