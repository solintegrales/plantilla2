import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partes/header/header.component';
import { NavComponent } from './partes/nav/nav.component';
import { FooterComponent } from './partes/footer/footer.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PrincipalComponent } from './paginas/principal.component';
import { NoencontroComponent } from './404/noencontro/noencontro.component';
import { LoginComponent } from './auth/login/login.component';
import { PreloaderComponent } from './partes/preloader/preloader.component';
import { Login2Component } from './auth/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    PrincipalComponent,
    NoencontroComponent,
    LoginComponent,
    PreloaderComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
