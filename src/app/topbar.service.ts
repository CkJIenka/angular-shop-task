import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  constructor() { }

  wishlistAmount = 0;
  cartAmount;
  cartSumm;

  setWishlistAmount() {
      this.wishlistAmount += 1;
  }

  getWishlistAmount() {
      return this.wishlistAmount;
  }
}
