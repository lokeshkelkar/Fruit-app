import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeSliderComponent {

}
