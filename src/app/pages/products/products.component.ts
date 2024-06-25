import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}







/*

import { Component, OnInit } from '@angular/core';
import { ServicesProductosService } from '../services-productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public product: any = { products: [] };

  constructor(private servicesProducts: ServicesProductosService) {}

  ngOnInit(): void {
    this.servicesProducts.request().subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
}

*/




