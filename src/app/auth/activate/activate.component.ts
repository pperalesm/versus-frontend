import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  loading = true;
  error = '';

  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    const token = this.route.snapshot.queryParamMap.get('token');
    if (id && token) {
      this.accountsService.activateAccount(id, token).subscribe({
        next: () => {
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
