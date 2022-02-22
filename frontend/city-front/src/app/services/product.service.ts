import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public addProduct(product: any) {
    // here we are using dynamic value
    // return this.http.post('${baseUrl}/register-user', user);
    return this.http.post('http://localhost:8081/add-product', product);
  }

  // public fetchProductListFromRemote(product: any): Observable<any> {
  //   return this.http.get<Product[]>('http://localhost:8080/getAllProductByShop', product);
  // }

  public fetchProductListFromRemote(products: any): Observable<any> {
    return this.http.post<Product[]>('http://localhost:8081/getAllProductByShop', products);
  }

  //fetch all products for customer component from backend
  public fetchAllProduct(): Observable<any> {
    return this.http.get<Product[]>("http://localhost:8081/getAllProducts");
  }

  //fetch all shops for customer component from backend
  public fetchAllShop(): Observable<any> {
    return this.http.get("http://localhost:8081/getAllShops");
  }

  public fetchProductByIdFromRemote(id: any): Observable<any> {
    return this.http.get("http://localhost:8081" + '/getProduct?id=' + id);
  }

  public updateProductQuantity(id: any, pro: Product): Observable<any> {
    return this.http.put<any>("http://localhost:8081/updateItemQty/" + id, pro);
  }
  public deleteProduct(id: any) {
    return this.http.delete("http://localhost:8081" + '/deleteProduct?id=' + id);
  }

}
