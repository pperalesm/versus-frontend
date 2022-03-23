import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from 'src/app/shared/components/terms/terms.component';
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
      Validators.minLength(this.constants.MIN_PASSWORD_LENGTH),
    ]),
  });

  loading: boolean = false;
  linkSent: boolean = false;

  constructor(private constants: ConstantsService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
  }

  onTermsClicked() {
    this.dialog.open(TermsComponent);
  }
}
