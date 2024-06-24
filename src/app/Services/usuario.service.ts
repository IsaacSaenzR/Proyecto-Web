import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*', // Permitir peticiones entre diferentes servidores
      'Content-Type':'application/json' 
    })
  }

  constructor(private httpC:HttpClient) { }

  public Registro(name:string, password:string, edad:string):Observable<any>{
    // Objeto DTO
    var rawData = {
      nombreUsuario: name,
      contraseña: password,
      correo: edad,
    };

    // Objeto lo pasa a cadena de texto en JSON
    var data = JSON.stringify(rawData);

    return this.httpC.post("https://localhost:7163/api/AgregarUsuario", data, this.httpOptions);
  }
}
