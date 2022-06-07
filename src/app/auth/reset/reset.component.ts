import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  resetForm: FormGroup = new FormGroup({
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(Constants.MIN_PASSWORD_LENGTH),
    ]),
  });

  loading = false;
  changed = false;
  error = '';

  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    const id = this.route.snapshot.queryParamMap.get('id');
    const token = this.route.snapshot.queryParamMap.get('token');
    if (id && token) {
      this.accountsService
        .resetPassword(
          id,
          token,
          this.resetForm.get('passwordFormControl')?.value,
        )
        .subscribe({
          next: () => {
            this.changed = true;
            this.loading = false;
          },
          error: (err) => {
            if (err.message == Constants.NOT_FOUND) {
              this.error = Constants.LINK_NOT_FOUND_ERROR;
            } else {
              this.error = Constants.DEFAULT_ERROR;
            }
            this.loading = false;
          },
        });
    }
  }
}
