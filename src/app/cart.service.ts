import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  //
  // private cartUrl = 'api/cart';  // URL to web api

  constructor(
    // private http: HttpClient,
  ) { }

  /** GET items from the server */
  // getItems (): Observable<Cart[]> {
  //   return this.http.get<Cart[]>(this.cartUrl)
  // }
  //
  // addToCart (product: Product): Observable<Cart[]> {
  //   return this.http.post<Cart[]>(this.cartUrl, product, this.httpOptions)
  // }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteFromCart(id) {
    let items = this.items;
    items.forEach(function(item){
      let index = items.indexOf(item);
      if (item.id == id){
          let index = items.indexOf(item);
          items.splice(index,1);
      }
    });
    return items;
  }
}
