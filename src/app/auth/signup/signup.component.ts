import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    usernameFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(this.constants.USERNAME_VALIDATION),
    ]),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private constants: ConstantsService) {}

  ngOnInit(): void {}

  onSubmit() {}
}
