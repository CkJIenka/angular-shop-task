import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  amount;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    // this.amount = this.cartService.getItems().length;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      phone: '',
      email: '',
      address: '',
      comment: ''
    })
  }

  onSubmit(customerData) {
   // Process checkout data here
   console.warn('Your order has been submitted', customerData);

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset();
 }

 deleteFromCart(id) {
   this.items = this.cartService.deleteFromCart(id);
 }

 addToWishlist(product) {
   this.wishlistService.addToWishlist(product);
   this.deleteFromCart(product.id);
 }
}
