import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedLanguage: string;

  constructor(
    public translate: TranslateService,
    public accountsService: AccountsService,
  ) {
    this.selectedLanguage = translate.getDefaultLang();
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLanguage = event.lang;
    });
  }

  ngOnInit(): void {}

  switchLanguage(change: MatSelectChange) {
    this.translate.use(change.value);
  }

  logout() {
    this.accountsService.logout();
  }
}
