//import { DnmPage } from './../pages/dnm/dnm';
import { CartService } from '../providers/cart.service';
import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { ChatPage } from '../pages/chat/chat';
import { CheckoutPage } from '../pages/checkout/checkout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageCacheModule } from 'ionic3-image-cache';
// import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    ShoppingCartPage,
    ChatPage,
    CheckoutPage,
   // DnmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageCacheModule.forRoot(),
    // IonicImageLoader.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    ShoppingCartPage,
    ChatPage,
    CheckoutPage,
   // DnmPage

  ],
  providers: [
    CartService,
    {provide: "apiUrl", useValue :"http://localhost/"},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
