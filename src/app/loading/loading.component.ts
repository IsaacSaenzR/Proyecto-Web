import { Component } from '@angular/core';
import { LoadingService } from '../Services/loading/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  cargando : boolean = true;

  constructor(public carga:LoadingService){

  }

  ngOnInit() {
    this.carga.loading.subscribe(r => this.cargando = r);
  }

  ngOnDrestroy() {
    
  }
}
