import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private susuario: UsuarioService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      
      /* this.susuario.validartoken()
      .subscribe(resp => {
        console.log(resp);
        
      })
      
      console.log('paso por el canactivate del guard');
      return false; */
      return this.susuario.validartoken()
       .pipe(
        tap(estaautenticado =>{
          if(!estaautenticado){
            this.router.navigateByUrl('/login');
          }
        })
      ); 
  }
  
}
