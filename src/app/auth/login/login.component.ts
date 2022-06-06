import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
  });

  loading = false;
  error = '';

  constructor(
    private accountsService: AccountsService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.accountsService
      .login(
        this.loginForm.get('userFormControl')?.value,
        this.loginForm.get('passwordFormControl')?.value,
      )
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          if (
            err.message == Constants.NOT_FOUND ||
            err.message == Constants.BAD_REQUEST ||
            err.message == Constants.UNAUTHORIZED
          ) {
            this.error = Constants.LOGIN_CREDENTIALS_ERROR;
          } else {
            this.error = Constants.DEFAULT_ERROR;
          }
          this.loading = false;
        },
      });
  }
}
