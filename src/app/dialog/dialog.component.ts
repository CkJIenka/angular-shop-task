import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';

import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  product;
  productAmount=1;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
       this.product = data.product;
  }

  ngOnInit() {
  }


  close() {
    this.dialogRef.close();
  }


  valuechange(event: any) {
    this.productAmount = event.target.value;
    return this.productAmount;
  }

  addToCart(product) {
    this.cartService.addToCart(product, this.productAmount);
    this.dialogRef.close();
    this.wishlistService.deleteFromWishlist(product.id);
  }

}
