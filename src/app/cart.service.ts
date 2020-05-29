import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];
  addToCart(product){
    this.items.push(product);
  }
  constructor(
    private http: HttpClient
  ) { }

  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}