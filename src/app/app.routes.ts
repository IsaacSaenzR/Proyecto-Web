import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CitasComponent } from './citas/citas.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registrar', component:RegistroComponent},
    {path: 'ODS', component:LayoutBaseComponent, pathMatch:'prefix',
        children: [
            {path:'inicio', component:InicioComponent, pathMatch:'full'},
            {path:'chat', component:ChatComponent, pathMatch: 'full'},
            {path:'calendario', component:CalendarioComponent, pathMatch:'prefix',
                children:[
                    {path:'', component:EventosComponent}, 
                    {path:'MisEventos', component:CitasComponent} 
                ]
            },
            {path:'calculadora', component:CalculadoraComponent},
            {path:'guia', component:ProductsComponent},
        ]
    }
];
