import { ShoppingCartPage } from "./../shopping-cart/shopping-cart";
import { CartService } from "./../../providers/cart.service";
import { CategoryService } from "./../../providers/category.service";
import { Category } from "../../entities/category";
import { ProductDetailPage } from "./../product-detail/product-detail";
import { Product } from "../../entities/product";
import { ProductService } from "../../providers/product.service";
import { Component, ViewChild, Inject } from "@angular/core";
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from "ionic-angular";

import { Http } from "@angular/http";
import { IonicImageCacheModule } from 'ionic3-image-cache';
// import { IonicImageLoader } from 'ionic-image-loader';

@IonicPage({
  name:'ProductPage',
  segment:'product'
})
@Component({
  selector: "page-product",
  templateUrl: "product.html",
  providers: [ProductService, CategoryService]
})
export class ProductPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService,
    public categoryService: CategoryService,
    public cartService: CartService,
    public loadingController: LoadingController,
    private http: Http ,@Inject('apiUrl') private apiUrl
  ) {}

  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: string;
  filterText: string;
  cartCount: number = 0;
  myClock: string;
  page: number = 1;
  noMoreData: boolean = false;
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");
    this.getProducts(this.page);
    // this.getCategories();
    
    this.myClock = this.getTime();
    // setInterval(function(){ 
    //   this.myClock = this.getTime();
    // }, 1000);
  }

  getTime(){
    var date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(current => current >= 10 ? current : "0" + current).join(":");
  }

  getProducts(page) {
    let loader=this.loadingController.create( {content:'Please wait....'} );
    loader.present().then(() => {
      this.productService.getProducts(page).subscribe(data => {
        console.log("products:" + JSON.stringify(data));
        this.products = this.products.concat(data);
        // this.products.concat(data);
        loader.dismiss();
      });
    });
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailPage, { item: product });
  }

  getCategories() {
    let loader=this.loadingController.create( {content:'Please wait....'} );
    loader.present().then(() => {
    this.categoryService
      .getCategories()
      .subscribe(data =>{
        this.categories = data;
        loader.dismiss();

      });});
  }

  getItems() {
    // var val = this.filterText;
    // if (val && val.trim() != "") {
    //   this.productService.getProducts(this.selectedCategory).subscribe(p => {
    //     this.products = p.filter(item => {
    //       return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
    //     });
    //   });
    // } else {
    //   this.productService.getProducts(this.selectedCategory).subscribe(p => {
    //     this.products = p;
    //   });
    // }
  }

  goToCart() {
    this.navCtrl.push(ShoppingCartPage);
  }

  ionViewWillEnter() {
    if (this.cartService.cartCount) {
      this.cartCount = this.cartService.cartCount;
    }
  }

  loadData(infiniteScroll) {
    // console.log('Begin async operation');
    this.page = this.page+1;
    // console.log("next page:" + this.page);

    setTimeout(() => {
      this.getProducts(this.page);
      // console.log('Async operation has ended');
      // this.noMoreData = true;
      infiniteScroll.complete();
    }, 1000);
  }
}
