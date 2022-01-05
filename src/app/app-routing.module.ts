import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoencontroComponent } from './404/noencontro/noencontro.component';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { Login3Component } from './auth/login3/login3.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { Grafica1Component } from './paginas/grafica1/grafica1.component';
import { Grafica2Component } from './paginas/grafica2/grafica2.component';
import { PlantillaComponent } from './paginas/plantilla/plantilla.component';
import { PrincipalComponent } from './paginas/principal.component';
import { ProgresoComponent } from './paginas/progreso/progreso.component';
import { PromesasComponent } from './paginas/promesas/promesas.component';
import { RxjsComponent } from './paginas/rxjs/rxjs.component';

const ruta: Routes = [
  {
    path: '', component: PrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dasboard'}},
      { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Gráfica 1'} },
      { path: 'grafica2', component: Grafica2Component, data: {titulo: 'Gráfica 2'} },
      { path: 'progreso', component: ProgresoComponent, data: {titulo: 'Progreso'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}},
      { path: 'plantilla', component: PlantillaComponent, data: {titulo: 'Plantilla'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'login3', component: Login3Component },
  { path: 'registro', component: RegistroComponent},
  { path: '**', component: NoencontroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ruta)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
