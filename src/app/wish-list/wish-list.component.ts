import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  items;
  amount;
  products;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.items = this.wishlistService.getItems();
  }

  deleteFromWishlist(id) {
    this.items = this.wishlistService.deleteFromWishlist(id);
  }

  openDialog(item) {
    let product=item;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {product}

    this.dialog.open(DialogComponent, dialogConfig);
  }
}
