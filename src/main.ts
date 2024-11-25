import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {
  register as registerSwiperElements
} from 'swiper/element/bundle';


// Register Swiper elements
console.log('Registering Swiper elements...');
registerSwiperElements();

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
