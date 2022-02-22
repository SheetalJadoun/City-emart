import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public addUser(user: any) {
    // here we are using dynamic value
    // return this.http.post('${baseUrl}/register-user', user);
    return this.http.post('http://localhost:8081/register-user', user);
  }

  public loginUserFromRemote(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:8081/login", user)
  }

  public fetchUserByEmailFromRemote(email: any): Observable<any> {
    return this.http.get("http://localhost:8081" + '/getUserByEmail?email=' + email);
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put<any>("http://localhost:8081/updateUser", user);
  }

  public fetchAllCustomer(): Observable<any> {
    return this.http.get("http://localhost:8081/getAllCustomer");
  }
  public deleteCustomer(id: any) {
    return this.http.delete("http://localhost:8081" + '/deleteCustomer?id=' + id);
  }
}
