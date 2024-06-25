import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceloginService } from '../../Services/services-login/servicelogin.service';
//import { ServiceloginService } from '../../services/services-login/servicelogin.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  public Registrar: FormGroup;
  public errorEnvio: { [key: string]: boolean } = {};
  public escribiendo: { [key: string]: boolean } = {};

  // Usarlo como atributo de clase
  constructor(private route:Router, private logService:ServiceloginService){
    this.Registrar = new FormGroup({
      nomUsuario: new FormControl("", [Validators.required]/*, Validators.email*/),
      contraseña: new FormControl("", [Validators.required]),
      contraseña2: new FormControl("", [Validators.required]),
      edad: new FormControl("", [Validators.required]),
    })
  }

  // Hook para correr al inicio
  ngOnInit(): void {
    this.Registrar.controls['nomUsuario'].valueChanges.subscribe(() => {
      this.escribiendo['nomUsuarioR'] = true;
      this.errorEnvio['nomUsuarioR'] = false;
    });

    this.Registrar.controls['contraseña'].valueChanges.subscribe(() => {
      this.escribiendo['contraseñaR'] = true;
      this.errorEnvio['contraseñaR'] = false;
    });
    
    this.Registrar.controls['contraseña2'].valueChanges.subscribe(() => {
      this.escribiendo['contraseñaR2'] = true;
      this.errorEnvio['contraseñaR2'] = false;
    });
    
    this.Registrar.controls['edad'].valueChanges.subscribe(() => {
      this.escribiendo['edad'] = true;
      this.errorEnvio['edad'] = false;
    });
  }
  
  Registro() {
    if(this.Registrar.valid) {
      this.logService.registrar(this.Registrar.controls['nomUsuario'].value, this.Registrar.controls['contraseña'].value, this.Registrar.controls['edad'].value).subscribe(resultado => {
        Swal.fire({
          title:"Listo",
          icon: "success",
          text: "Usuario registrado: " + resultado.nombreUsuario
        });
        
        // Para almacenar informacion
        sessionStorage.setItem("usuario", JSON.stringify(resultado));

        this.route.navigateByUrl("ODS/inicio");
      })
    }

    if(this.Registrar.controls['contraseña'].value === '') {
      this.errorEnvio['contraseñaR'] = true;
    }
    
    if(this.Registrar.controls['contraseña2'].value === '') {
      this.errorEnvio['contraseñaR2'] = true;
    }

    if(this.Registrar.controls['nomUsuario'].value === '') {
      this.errorEnvio['nomUsuarioR'] = true;
    }
    
    if(this.Registrar.controls['edad'].value === '') {
      this.errorEnvio['edad'] = true;
    }
  }
}

