import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
submitted = false;
  userForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      comment: ''
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value))
    }

 deleteFromCart(id) {
   this.items = this.cartService.deleteFromCart(id);
 }

 addToWishlist(product) {
   this.wishlistService.addToWishlist(product);
   this.deleteFromCart(product.id);
 }

}
