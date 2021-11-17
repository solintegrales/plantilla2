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
import { SidebarComponent } from './partes/sidebar/sidebar.component';
import { Grafica1Component } from './paginas/grafica1/grafica1.component';
import { Grafica2Component } from './paginas/grafica2/grafica2.component';
import { ProgresoComponent } from './paginas/progreso/progreso.component';
import { PromesasComponent } from './paginas/promesas/promesas.component';
import { PlantillaComponent } from './paginas/plantilla/plantilla.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './componentes/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { RxjsComponent } from './paginas/rxjs/rxjs.component';
import { Login3Component } from './auth/login3/login3.component';
import { NavlComponent } from './partes/navl/navl.component';

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
    Login2Component,
    SidebarComponent,
    Grafica1Component,
    Grafica2Component,
    ProgresoComponent,
    PromesasComponent,
    PlantillaComponent,
    IncrementadorComponent,
    RxjsComponent,
    Login3Component,
    NavlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
