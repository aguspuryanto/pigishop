import { Product } from './../entities/product';
import { Inject, Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // alt + shift +down
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProductService {

  constructor(private http: Http ,@Inject('apiUrl') private apiUrl ) { }

  getProducts(seoUrl?:any): Observable<Product[]> {
    if(seoUrl){
      return this.http.get(this.apiUrl + 'evoush/product/get_produk?page=' + seoUrl).map(response => response.json());
    }else{
      // return this.http.get(this.apiUrl + 'pigiShopApi/products.php').map(response => response.json());
      return this.http.get(this.apiUrl + 'evoush/product/get_produk').map(response => response.json());
    }
  }

}
