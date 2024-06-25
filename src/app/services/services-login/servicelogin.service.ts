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
      nombreUsuario: username,
      contraseña: password
    };
    const data = JSON.stringify(rawData);

    return this.httpC.post('https://localhost:7070/api/LoginUsuario', data, this.httpOptions);
  }

  public registrar(nombreUsuario:string, contraseña:string, edad:number): Observable<any> {
    const datos = {
      nombreUsuario,
      contraseña,
      edad
    }

    const data = JSON.stringify(datos);

    return this.httpC.post('https://localhost:7070/api/AgregarUsuario', data, this.httpOptions);
  }
}
