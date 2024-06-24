import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarcaVehiculos, ModeloVehiculos, calcularElectricidad, calcularEnvio, calcularGas, calcularVehiculo, calcularVuelos } from './funciones';

interface CalculoApiItem {
  data: {
    attributes: {
      carbon_kg: number;
      [key: string]: any;
    },
    [key: string]: any;
  };
}

interface CalculosApiResponse {
  [key: string]: CalculoApiItem;
}

interface Marca {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
}

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  public formulario: FormGroup;
  public calculosApi: CalculosApiResponse = {};
  private id : any = {};
  public calculo: number = 0;
  public comparacion: any = {};
  public marcas: any = {};
  public modelos: any;
  public compara: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      electricidad: new FormControl("", [Validators.required]/*, Validators.email*/),
      aeropuertoSal: new FormControl("",),
      aeropuertoLle: new FormControl("",),
      pesoCarga: new FormControl("", [Validators.required]),
      metodo: new FormControl("", [Validators.required]),
      recorrido: new FormControl("", [Validators.required]),
      vehiculo: new FormControl("", [Validators.required]),
      marca: new FormControl("", [Validators.required]),
      modelo: new FormControl("", [Validators.required]),
      gas: new FormControl("", [Validators.required]),
    })
  }

  async ngOnInit() {
    this.marcas = await MarcaVehiculos();
  }

  async onMarcaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMarcaId = selectElement.value;
    
    this.modelos = this.getUniqueMarcas(await ModeloVehiculos(selectedMarcaId));
  }

  async calcular() {
    this.calculo = 0;
    // Llamadas a api
    if(this.formulario.valid) {
      if(this.formulario.controls['aeropuertosLle']?.value){
        this.calculosApi['Vuelos'] = await calcularVuelos(this.formulario.controls['aeropuertoSal'].value, this.formulario.controls['aeropuertoLle'].value);
        this.id['Vuelos'] = (this.calculosApi['Vuelos']?.data['id']);
      }

      this.calculosApi['Electricidad'] = await calcularElectricidad(this.formulario.controls['electricidad'].value*12);
      this.id['Electricidad'] = (this.calculosApi['Electricidad']?.data['id']);
    
      this.calculosApi['PesoCarga'] = await calcularEnvio(this.formulario.controls['pesoCarga'].value, this.formulario.controls['metodo'].value, this.formulario.controls['recorrido'].value);
      this.id['PesoCarga'] = (this.calculosApi['PesoCarga']?.data['id']);
      
      this.calculosApi['Vehiculo'] = await calcularVehiculo(this.formulario.controls['vehiculo'].value, this.formulario.controls['modelo'].value);
      this.id['Vehiculo'] = (this.calculosApi['Vehiculo']?.data['id']);
      
      this.calculosApi['Gas'] = await calcularGas(this.formulario.controls['gas'].value*12);
      this.id['Gas'] = (this.calculosApi['Gas']?.data['id']);
    }

    // Calculo
    Object.values(this.calculosApi).forEach((i: CalculoApiItem) => this.calculo += i.data.attributes.carbon_kg)
    this.calculo = Math.ceil(this.calculo);

    if (window.innerWidth >= 768) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  comparar() {
    this.compara = true;
    // Datos ficticios para la comparación
    const promedioMexico = 2323;
    this.comparacion = {
      promedio: promedioMexico,
      diferencia: (this.calculo - promedioMexico)
    };
  }

  getUniqueMarcas(marcas: Marca[]): Marca[] {
    const seen = new Set();
    return marcas.filter(marca => {
      const name = marca.data.attributes.name;
      return seen.has(name) ? false : seen.add(name);
    });
  }
}
