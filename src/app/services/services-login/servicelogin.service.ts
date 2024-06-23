import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpC: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    const rawData = {
      username: username,
      password: password
    };
    const data = JSON.stringify(rawData);

    return this.httpC.post('https://dummyjson.com/users/login', data, this.httpOptions);
  }
}
