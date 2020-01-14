import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  items=[];

  constructor() { }

  addToWishlist(product) {
    let flag=false;
    let items=this.items;
    items.forEach(function(item) {
      if(product.id == item.id) {
        flag=true;
      }
    });
    if (!flag) {
      this.items.push(product);
      }
  }

  getItems() {
    return this.items;
  }

  clearWishlist() {
    this.items = [];
    return this.items;
  }

  deleteFromWishlist(id) {
    let items = this.items;
    items.forEach(function(item) {
      let index = items.indexOf(item);
      if (item.id == id){
          let index = items.indexOf(item);
          items.splice(index,1);
      }
    });
    return items;
  }
}
