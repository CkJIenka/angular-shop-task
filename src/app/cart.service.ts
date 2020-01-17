import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  productAmountCart=0;
  cartAmount = new BehaviorSubject<number>(0);
  cartSumm = new BehaviorSubject<number>(0);
  totalCartAmount=0;
  totalSumm = 0;

  constructor() { }

  addToCart(product, productAmount) {
    let flag=false;
    product.amount = productAmount;
    let items = this.items;
    let totalAmount=this.totalCartAmount;
    let totalSumm=this.totalSumm;
    items.forEach(function(item){
      if (item.id == product.id){
        item.amount = +item.amount + +product.amount;
        flag=true;
      }
    });
    if (!flag) {
      this.items.push(product);
    }
    items.forEach(function(item){
      totalAmount = totalAmount + +item.amount;
      totalSumm = totalSumm + +item.amount * +item.price;
    });
    this.cartAmount.next(totalAmount);
    this.cartSumm.next(totalSumm);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    let totalAmount=0;
    this.cartAmount.next(totalAmount);
    return this.items;
  }

  deleteFromCart(id) {
    let items = this.items;
    let totalAmount=this.totalCartAmount;
    let totalSumm=this.totalSumm;
    console.log(totalAmount);

    items.forEach(function(item){
      let index = items.indexOf(item);
      if (item.id == id){
        items.splice(index,1);
      }
    });
    items.forEach(function(item){
      totalAmount = totalAmount + +item.amount;
      totalSumm = totalSumm + item.amount * item.price;
    });
    this.cartAmount.next(totalAmount);
    this.cartSumm.next(totalSumm);
    return items;
  }

  recount(amount, id) {
    let items = this.items;
    let totalAmount=this.totalCartAmount;
    let totalSumm=this.totalSumm;
    items.forEach(function(item){
      let index = items.indexOf(item);
      if (item.id == id){
        item.amount=amount;
        totalAmount = totalAmount + +item.amount;
      }
      totalSumm = totalSumm + item.amount * item.price;
    });
    this.cartAmount.next(totalAmount);
    this.cartSumm.next(totalSumm);
    return items;
  }

  getAmount(): Observable<any>{
    return this.cartAmount.asObservable();
  }

  getSumm(): Observable<any>{
    return this.cartSumm.asObservable();
  }
}
