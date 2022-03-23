import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
  });

  sent: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.sent = true;
  }
}
