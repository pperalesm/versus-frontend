import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/shared/constants';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl(''),
  });

  loading = false;
  linkSent = false;
  error = '';

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.accountsService
      .forgotPassword(this.forgotForm.get('emailFormControl')?.value)
      .subscribe({
        next: () => {
          this.linkSent = true;
          this.loading = false;
        },
        error: (err) => {
          if (err.message == Constants.NOT_FOUND) {
            this.error = Constants.EMAIL_NOT_FOUND_ERROR;
          } else {
            this.error = Constants.DEFAULT_ERROR;
          }
          this.loading = false;
        },
      });
  }
}
