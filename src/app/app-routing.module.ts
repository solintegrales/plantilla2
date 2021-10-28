import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoencontroComponent } from './404/noencontro/noencontro.component';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PrincipalComponent } from './paginas/principal.component';

const ruta: Routes = [
  {
    path: '', component: PrincipalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: '**', component: NoencontroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ruta)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
