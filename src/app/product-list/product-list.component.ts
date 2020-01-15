import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from '../products';

import { WishlistService } from '../wishlist.service';
import { ProductsService } from '../products.service';
import {DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private route: ActivatedRoute,
    // private cartService: CartService,
    private wishlistService: WishlistService,
    private productsService: ProductsService,
    private http: HttpClient,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToWishlist(product) {
    this.wishlistService.addToWishlist(product);
      }

  openDialog(product) {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.autoFocus = true;

      dialogConfig.data = {product}

      this.dialog.open(DialogComponent, dialogConfig);
    }

}
