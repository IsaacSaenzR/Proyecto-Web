import { Component } from '@angular/core';
import { EventosAService } from '../Services/eventos-a.service';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent {
  public events: any;
  public datos: any = {};

  constructor(private eventbriteService: EventosAService, public route:Router) { 
    var usu = sessionStorage.getItem("usuario")
    this.datos = JSON.parse(usu?usu:"")
  }

  ngOnInit(): void {
    this.eventbriteService.miLectura(this.datos.nombreUsuario).subscribe(
      (response: any) => {
        this.events = response;
        console.log(this.events);
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  eliminar(id:string){
    console.log(id, this.datos.nombreUsuario)
    this.eventbriteService.eliminar(id, this.datos.nombreUsuario).subscribe(
      resultado => {
        location.reload();
      }
    )
  }
}
