import { Component } from '@angular/core';
import { EventosAService } from '../Services/eventos-a.service';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent {
  public events: any;
  public datos: any = {};

  constructor(private eventbriteService: EventosAService) { 
    var usu = sessionStorage.getItem("usuario")
    this.datos["nombredeusuario"] = JSON.parse(usu?usu:"")
  }

  ngOnInit(): void {
    this.eventbriteService.miLectura(this.datos.nombredeusuario, "").subscribe(
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
    this.eventbriteService.eliminar(this.datos.nombredeusuario, id)
  }
}
