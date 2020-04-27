import { CartItem } from '../../entities/cart-item';
import { CartService } from "../../providers/cart.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CheckoutPage } from '../checkout/checkout';

@IonicPage()
@Component({
  selector: "page-shopping-cart",
  templateUrl: "shopping-cart.html"
})
export class ShoppingCartPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService
  ) {}

  cartItems:CartItem[]=[];
  cartTotal: number = 0;

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShoppingCartPage");
    this.cartItems=this.cartService.list();
    if(this.cartItems) this.cartTotal = this.cartItems.map(item => (item.quantity*item.product.unitPrice)).reduce((prev, next) => prev + next, 0);
  }

  goChekout(){
    this.navCtrl.push(CheckoutPage);
  }
}
