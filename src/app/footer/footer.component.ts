import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from '../shared/components/terms/terms.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  pablo: string = ' Pablo Perales Molas';
  pabloUrl: string =
    'https://www.linkedin.com/in/pablo-perales-molas-900723a5/';
  separator: string = ' · ';
  version: string = 'v0.0.1';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onTermsClicked() {
    this.dialog.open(TermsComponent);
  }
}
