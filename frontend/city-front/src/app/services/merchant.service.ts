import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  public addMerchant(merchant: any) {
    // here we are using dynamic value
    // return this.http.post('${baseUrl}/register-user', user);
    return this.http.post('http://localhost:8081/register-merchant', merchant);
  }

  public loginMerchantFromRemote(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:8081/merchant-login", user);
  }

  public fetchMerchantByShopFromRemote(shop: any): Observable<any> {
    return this.http.get("http://localhost:8081" + '/getMerchantByShop?shop=' + shop);
  }
  public updateMerchant(merchant: any): Observable<any> {
    return this.http.put<any>("http://localhost:8081/updateMerchant", merchant);
  }
  public fetchMerchantByEmailFromRemote(email: any): Observable<any> {
    return this.http.get("http://localhost:8081" + '/getMerchantByEmail?email=' + email);
  }
  public fetchAllMerchant(): Observable<any> {
    return this.http.get("http://localhost:8081/getAllMerchant");
  }
  public deleteMerchant(id: any) {
    return this.http.delete("http://localhost:8081" + '/deleteMerchant?id=' + id);
  }
}
