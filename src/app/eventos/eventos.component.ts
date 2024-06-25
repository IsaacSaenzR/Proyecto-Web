import { Component } from '@angular/core';
import { EventosAService } from '../Services/eventos-a.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  public events: any;
  public datosEven: any = {};

  constructor(private eventbriteService: EventosAService) { }

  ngOnInit(): void {
    this.eventbriteService.lectura().subscribe(
      (response: any) => {
        this.events = response;
        console.log(this.events);
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  clickAgregar(id:string) {
    var us = sessionStorage.getItem('usuario')
    var nom = JSON.parse(us?us:"");
    this.datosEven['nombreUsuario'] = nom.nombreUsuario;
    this.datosEven['id'] = id
    this.eventbriteService.agregar(this.datosEven.id,this.datosEven.nombreUsuario)
  }
}
