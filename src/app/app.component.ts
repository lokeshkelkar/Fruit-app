import { Component } from '@angular/core';
//import { HomePageComponent } from './home-page/home-page.component';
import { HomePage2Component } from './pages/home-page2/home-page2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage2Component],
  template: `<app-home-page2></app-home-page2>`,
})
export class AppComponent {}
