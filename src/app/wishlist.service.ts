import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  items=[];

  constructor() { }

  addToWishlist(product) {
      let date=new Date();
      product.date=date;
      this.items.push(product);
      this.items.sort(function(a, b) {
        return b.date-a.date
      })
  }

  getItems() {
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
