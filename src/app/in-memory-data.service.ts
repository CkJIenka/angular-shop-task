import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService {
  createDb() {
    let products = [
      {id: 1, name: 'Apple Iphone 5s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 2, name: 'Apple Iphone 6', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 3, name: 'Apple Iphone 6s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 4, name: 'Apple Iphone 5s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 5, name: 'Apple Iphone 6', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 6, name: 'Apple Iphone 6s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 7, name: 'Apple Iphone 5s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 8, name: 'Apple Iphone 6', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 9, name: 'Apple Iphone 6s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 10, name: 'Apple Iphone 5s', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 11, name: 'Apple Iphone 6', price: 59100, img: "assets/images/iphone.jpg"},
      {id: 12, name: 'Apple Iphone 6s', price: 59100, img: "assets/images/iphone.jpg"}
    ];
    return {products};
  }
}
