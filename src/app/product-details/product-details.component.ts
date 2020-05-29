import { Component, OnInit } from '@angular/core';
import { ActivetedRoute, ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("your product has been added successfully");
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(prod => prod.id === params.get('productId'));
    });
  }

}