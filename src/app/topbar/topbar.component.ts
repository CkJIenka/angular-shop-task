import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  amountWishlist=0;

  constructor(
    private wishlistService: WishlistService,
  ) { }

  ngOnInit() {
  }

  recountWishlistAmount(count) {
    this.amountWishlist+=count;
  }
}
