import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/shared/constants';

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

  loading: boolean = false;
  changed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
  }
}
