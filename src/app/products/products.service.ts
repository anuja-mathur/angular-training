import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Constants } from '../config/constants'; 
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsApi:string = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<Products>(
      this.productsApi, { observe: 'response' });
  }

  getProduct(id:number): Observable<any> {
    return this.http.get<Products>(
      this.productsApi+'/'+id, { observe: 'response' });
  }
}
