import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registrar', component:RegistroComponent},
    {path: 'ODS', component:LayoutBaseComponent, pathMatch:'prefix',
        children: [
            {path:'inicio', component:CalculadoraComponent, pathMatch:'full'},
            {path:'chat', component:ChatComponent, pathMatch: 'full'},
            {path:'calendario', component:CalendarioComponent},
            {path:'calculadora', component:CalculadoraComponent},
            {path:'guia', component:CalculadoraComponent},
        ]
    }
];
