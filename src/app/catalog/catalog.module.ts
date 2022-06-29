import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  declarations: [CatalogComponent, GamesListComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    TranslateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
  ],
})
export class CatalogModule {}
