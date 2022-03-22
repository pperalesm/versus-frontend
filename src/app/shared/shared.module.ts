import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './components/terms/terms.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, TranslateModule, MatDialogModule, MatButtonModule],
  exports: [TermsComponent],
})
export class SharedModule {}
