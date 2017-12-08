import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account :new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnicque),
      password: new FormControl('', Validators.required)
    })
  });

  // constructor(private fb: FormBuilder) {
  //   this.form = fb.group({
  //     account:fb.group({
  //       username:fb.control('',[Validators.required,
  //                               Validators.minLength(3),
  //                               UsernameValidators.cannotContainSpace],
  //                               UsernameValidators.shouldBeUnicque),
  //       password:fb.control([])
  //     })
  //   })
  // }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  login(form) {
    this.form.setErrors({
      invalidForm: true
    })
  }

}
