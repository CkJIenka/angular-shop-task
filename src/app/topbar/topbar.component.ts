import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  visibility: boolean = true;
  wishlistItems;
  cartItems;
  cartAmount: Subscription;
  cartSumm: Subscription;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {
    this.cartAmount = this.cartService.getAmount().
      subscribe(cartAmount => {
        this.cartAmount = cartAmount });

    this.cartSumm = this.cartService.getSumm().
      subscribe(cartSumm => {
        this.cartSumm = cartSumm});
    }


  ngOnInit() {
    this.wishlistItems = this.wishlistService.getItems();
    this.cartItems = this.cartService.getItems();
  }

  ngOnDestroy(): void {
      this.cartAmount.unsubscribe();
      this.cartSumm.unsubscribe();
   }

  toggle(){
        this.visibility=!this.visibility;
    }
}
