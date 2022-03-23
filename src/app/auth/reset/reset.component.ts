import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  resetForm: FormGroup = new FormGroup({
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(this.constants.MIN_PASSWORD_LENGTH),
    ]),
  });

  loading: boolean = false;
  changed: boolean = false;

  constructor(private constants: ConstantsService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
  }
}
