import { CART_ITEM_LIST } from './../entities/cart-item-list';
import { Product } from './../entities/product';
import { CartItem } from './../entities/cart-item';

import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cartItems: CartItem[];
  cartCount:number;
  constructor() {
    this.cartCount=0;
  }

  addToCart(product: Product): void {

    console.log("unitPrice: " + product.unitPrice);
    // product.unitPrice = +(product.unitPrice as any).replace(/[^0-9.]/g,"");
    // product.unitPrice = +(product.unitPrice as any).match(/([0-9.])+/,"");

    var addedItem = CART_ITEM_LIST.find(
      t => t.product.productId == product.productId
    );

    if (addedItem) {
      addedItem.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.productImg = product.productImg;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  clear() {
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  removeFromCart(product: Product) {
    var addedItem = CART_ITEM_LIST.find(
      t => t.product.productId == product.productId
    );
    var indexNo = CART_ITEM_LIST.indexOf(addedItem);

    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }
}
