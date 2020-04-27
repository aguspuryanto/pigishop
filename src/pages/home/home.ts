import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("mySlider") slides: Slides;
  
  // AdsImages = [
  //   "../../assets/images/ads-sample.webp",
  //   "../../assets/images/ads-sample2.webp",
  //   "../../assets/images/ads-sample3.webp"
  // ];

  constructor(public navCtrl: NavController) {

  }

  slidesDidLoad() {
    this.slides.startAutoplay();
  }
}
