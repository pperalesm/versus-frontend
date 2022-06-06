import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  querySubscription!: Subscription;

  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    const token = this.route.snapshot.queryParamMap.get('token');
    if (id && token) {
      this.querySubscription = this.accountsService
        .activateAccount(id, token)
        .subscribe({
          next: () => {
            this.loading = false;
          },
          error: (err) => {
            if (err.message == Constants.NOT_FOUND) {
              this.error = Constants.ACTIVATION_NOT_FOUND_ERROR;
            } else {
              this.error = Constants.DEFAULT_ERROR;
            }
            this.loading = false;
          },
        });
    }
  }
}
