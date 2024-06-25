import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  

  constructor(private route:Router){}

  RedirectLogin(){
    this.route.navigateByUrl("login");
    console.log("enviado")
//console.error
//console.warn

  }

  RedirectInicio(){
    this.route.navigateByUrl("inicio");
    console.log("enviado")
//console.error
//console.warn

  }
  RedirectProducts(){
    this.route.navigateByUrl("products");
    console.log("enviado")
//console.error
//console.warn

  }
  RedirectCarrito(){
    this.route.navigateByUrl("carrito");
    console.log("enviado")
//console.error
//console.warn

  }


}
