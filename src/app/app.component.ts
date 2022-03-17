import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('@.disabled') get animationsDisabled() {
    return false;
  }
  title = 'versus-frontend';
}
