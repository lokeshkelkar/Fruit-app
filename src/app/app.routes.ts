import { RouterModule, Routes } from '@angular/router';
import { HomePage2Component } from './pages/home-page2/home-page2.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { NgModule } from '@angular/core';
//import { CheckoutComponent } from './checkout/checkout.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { SingleNewsComponent } from './single-news/single-news.component';
//import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomePage2Component,
    title: 'Home'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'About Us'
  },
  { 
    path: 'news', 
    component: NewsComponent,
    title: 'News'
  },
  /*
  { 
    path: 'single-news', 
    component: SingleNewsComponent,
    title: 'News Details'
  },*/
  { 
    path: 'contact', 
    component: ContactComponent,
    title: 'Contact Us'
  },
  { 
    path: 'shop', 
    component: ShopComponent,
    title: 'Shop'
  },
  /*{ 
    path: 'single-product', 
    component: SingleProductComponent,
    title: 'Product Details'
  },*/
  { 
    path: 'cart', 
    component: CartComponent,
    title: 'Shopping Cart'
  },/*
  { 
    path: 'checkout', 
    component: CheckoutComponent,
    title: 'Checkout'
  },
  { 
    path: '404', 
    component: PageNotFoundComponent,
    title: 'Page Not Found'
  },*/
  { 
    path: '**', 
    redirectTo: '404'
  },
  
];

