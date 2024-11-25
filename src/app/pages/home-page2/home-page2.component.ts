import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { HeroAreaComponent } from '../../components/hero-area/hero-area.component';
import { FeaturesListSectionComponent } from '../../components/features-list-section/features-list-section.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';
import { CartBannerComponent } from '../../components/cart-banner/cart-banner.component';
import { AdvertisementComponent } from '../../components/advertisement/advertisement.component';
import { ShopBannerComponent } from '../../components/shop-banner/shop-banner.component';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { LogoCarouselComponent } from '../../components/logo-carousel/logo-carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';












// Swiper imports
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-home-page2',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, SearchAreaComponent, HeroAreaComponent, FeaturesListSectionComponent, ProductSectionComponent, CartBannerComponent, AdvertisementComponent, ShopBannerComponent, LatestNewsComponent, LogoCarouselComponent, FooterComponent, CopyrightComponent , HomeSliderComponent , PreloaderComponent],
  templateUrl: './home-page2.component.html',
  styleUrl: './home-page2.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage2Component {
  isSearchVisible = false;

  showSearch() {
    this.isSearchVisible = true;
  }

  hideSearch() {
    this.isSearchVisible = false;
  }

  handleSearch(query: string) {
    console.log('Searching for:', query);
    // Implement your search logic here
    this.hideSearch();
  }

}
