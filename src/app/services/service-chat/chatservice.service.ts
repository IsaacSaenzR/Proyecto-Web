import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  private apiUrl = 'https://localhost:7182/api/chat'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/messages`);
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send`, message);
  }
}
