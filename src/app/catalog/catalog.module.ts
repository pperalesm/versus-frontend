import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CatalogRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    TranslateModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class CatalogModule {}
