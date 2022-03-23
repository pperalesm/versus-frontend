import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl(''),
  });

  loading: boolean = false;
  linkSent: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
  }
}
