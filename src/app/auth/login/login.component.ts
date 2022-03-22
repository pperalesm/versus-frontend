import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  sent: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.sent = true;
  }
}
