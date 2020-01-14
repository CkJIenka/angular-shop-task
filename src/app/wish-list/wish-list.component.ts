import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  items;
  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.wishlistService.getItems();
  }

  deleteFromWishlist(id) {
    this.items = this.wishlistService.deleteFromWishlist(id);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.deleteFromWishlist(product.id);
  }
}
