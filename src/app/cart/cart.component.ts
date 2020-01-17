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
  order;
  userForm: FormGroup;
  amount;

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
      email: ['', Validators.email],
      address: ['', Validators.required],
      comment: ''
    })
  }

  get name() {
    return this.userForm.get('name');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get email() {
    return this.userForm.get('email');
  }
  get address() {
    return this.userForm.get('address');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.log("error")
          return;
        }
    this.cartService.clearCart();
    alert('Order: ' + JSON.stringify(this.items) + '\n\n' + JSON.stringify(this.userForm.value));
  }

  recount(event: any, id) {
    this.amount = event.target.value;
    this.items = this.cartService.recount(this.amount, id);
  }

 deleteFromCart(id) {
   this.items = this.cartService.deleteFromCart(id);
 }

 addToWishlist(product) {
   let items = this.wishlistService.getItems();
   let flag = false;
   items.forEach(function(item) {
     if(product.id == item.id) {
       flag=true;
     }
   });
   if (!flag) {
     this.wishlistService.addToWishlist(product);
     this.deleteFromCart(product.id);
   }
 }
}
