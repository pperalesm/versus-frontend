import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from 'src/app/shared/components/terms/terms.component';
import { Constants } from 'src/app/shared/constants';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(Constants.EMAIL_PATTERN),
    ]),
    usernameFormControl: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(Constants.MIN_USERNAME_LENGTH),
        Validators.pattern(Constants.USERNAME_PATTERN),
      ],
      this.accountsService.checkUsernameValidator(),
    ),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(Constants.MIN_PASSWORD_LENGTH),
    ]),
  });

  loading = false;
  linkSent = false;
  error = '';

  constructor(
    private dialog: MatDialog,
    private accountsService: AccountsService,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.accountsService
      .createAccount(
        this.signupForm.get('emailFormControl')?.value,
        this.signupForm.get('usernameFormControl')?.value,
        this.signupForm.get('passwordFormControl')?.value,
      )
      .subscribe({
        next: () => {
          this.linkSent = true;
          this.loading = false;
        },
        error: (err) => {
          if (err.message == Constants.CONFLICT) {
            this.error = Constants.EMAIL_CONFLICT_ERROR;
          } else {
            this.error = Constants.DEFAULT_ERROR;
          }
          this.loading = false;
        },
      });
  }

  onTermsClicked() {
    this.dialog.open(TermsComponent);
  }
}
