import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CatalogRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class CatalogModule {}
