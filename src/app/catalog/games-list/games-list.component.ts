import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  constructor(public accountsService: AccountsService) {}

  ngOnInit(): void {}

  toggleFilter() {
    console.log('Filter toggled');
  }
}
