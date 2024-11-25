import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Swiper imports
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  isSearchOpen = false;
  searchQuery = '';
  private swiper?: Swiper;
  isLoading = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    // Show loader initially
    this.isLoading = true;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Swiper after images are loaded
      window.addEventListener('load', () => {
        this.initializeSwiper();
        this.isLoading = false;
      });

      // Fallback in case window load event has already fired
      setTimeout(() => {
        if (this.isLoading) {
          this.initializeSwiper();
          this.isLoading = false;
        }
      }, 2000);
    }
  }

  private initializeSwiper(): void {
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  submitSearch(): void {
    console.log('Search query:', this.searchQuery);
    // Implement your search logic here
  }
}