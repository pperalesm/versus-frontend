import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from '../shared/components/terms/terms.component';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  DEVELOPER = Constants.DEVELOPER;
  DEVELOPER_URL = Constants.DEVELOPER_URL;
  VERSION = Constants.VERSION;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onTermsClicked() {
    this.dialog.open(TermsComponent);
  }
}
