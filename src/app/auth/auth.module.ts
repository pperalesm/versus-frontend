import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { ActivateComponent } from './activate/activate.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ActivateComponent,
    ForgotComponent,
    ResetComponent,
    WrapperComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
})
export class AuthModule {}
