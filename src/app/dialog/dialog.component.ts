import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  product;
  constructor(
    private cartService: CartService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

       this.product = data.product;
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
