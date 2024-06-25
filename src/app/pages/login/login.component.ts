import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceloginService } from '../../Services/services-login/servicelogin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public forms: FormGroup;

  constructor(private router: Router, private loginService: ServiceloginService) {
    this.forms = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  Iniciar(): void {
    sessionStorage.setItem("usuario", JSON.stringify({"nombreUsuario":"Ale"}));
    if (this.forms.valid) {
      this.loginService.login(this.forms.controls['username'].value, this.forms.controls['password'].value).subscribe(
        resultado => {
          Swal.fire({
            title: "Listo",
            icon: "success",
            text: "Bienvenido " + resultado.username
          });

          // Para almacenar informacion
          sessionStorage.setItem("usuario", JSON.stringify(resultado));

          this.router.navigateByUrl("/ODS/inicio");
        },
        error => {
          console.error(error);
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "Usuario o contraseña incorrectos"
          });
        }
      );
    } else {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Por favor complete todos los campos"
      });
    }
  }
}
