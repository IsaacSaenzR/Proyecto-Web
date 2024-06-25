import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosAService {
  private httpOtions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  public lectura(): Observable<any> {
    return this.http.get('https://localhost:7108/api/ControllerLecturaEvento', this.httpOtions);
  }

  public miLectura(id:string, nombreUsuario:string): Observable<any> {
    var data = {
      id,
      nombredeusuario: nombreUsuario
    }
    
    var dat = JSON.stringify(data)
    return this.http.post('https://localhost:7108/api/leerReservacion', dat, this.httpOtions);
  }

  public eliminar(id:string, nombreUsuario:string): Observable<any> {
    var data = {
      id,
      nombredeusuario: nombreUsuario
    }
    
    var dat = JSON.stringify(data)
    return this.http.post('https://localhost:7108/api/EliminarReservacion', dat, this.httpOtions);
  }

  public agregar(id:string, nombreUsuario:string): Observable<any> {
    var data = {
      id,
      nombredeusuario: nombreUsuario
    }
    
    var dat = JSON.stringify(data)
    return this.http.post('https://localhost:7108/api/Reservaciones', dat,this.httpOtions);
  }
}
