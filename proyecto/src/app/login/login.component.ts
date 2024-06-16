import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public forms: FormGroup;
  constructor(private route:Router){
      this.forms = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
    })
  }
  Iniciar(){
    if(this.forms.valid)
      this.route.navigateByUrl("Dashboard");
    //console.log("Enviado")
  }
  
  
  
}
