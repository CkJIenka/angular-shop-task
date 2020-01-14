import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../products';
// import { PRODUCTS } from '../mock-product';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productsService: ProductsService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  // addToCart(product) {
  //   this.cartService.addToCart( product as Product)
  //     .subscribe(hero => {
  //       this.cart.push(product);
  //     });
  // }

  addToCart(product) {
    this.cartService.addToCart(product);
  }


  addToWishlist(product) {
    this.wishlistService.addToWishlist(product);
  }

}
