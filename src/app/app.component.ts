import { Component } from '@angular/core';
import { UsersPageComponent } from './ui/pages/users-page/users-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersPageComponent],
  template: `<users-page/>`
})
export class AppComponent {}
