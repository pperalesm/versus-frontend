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

@NgModule({
  declarations: [CatalogComponent],
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
  ],
})
export class CatalogModule {}
