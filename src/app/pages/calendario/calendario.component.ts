import { Component } from '@angular/core';
import { EventosComponent } from '../../eventos/eventos.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [EventosComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {

}
