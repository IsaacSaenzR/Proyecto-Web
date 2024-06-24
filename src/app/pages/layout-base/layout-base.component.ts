import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-layout-base',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './layout-base.component.html',
  styleUrl: './layout-base.component.scss'
})
export class LayoutBaseComponent {

}
