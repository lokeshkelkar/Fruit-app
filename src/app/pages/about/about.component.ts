import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-section">
      <h1>About Us</h1>
      <p>Welcome to our about page...</p>
    </div>
  `,
  styles: [`
    .about-section {
      padding: 2rem;
    }
  `]
})
export class AboutComponent {}
