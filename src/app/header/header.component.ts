import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router) {
    var user = sessionStorage.getItem("usuario");
    if(user != null)
      var data = JSON.parse(user);
    else 
      this.router.navigate(["login"]);
  }
}
