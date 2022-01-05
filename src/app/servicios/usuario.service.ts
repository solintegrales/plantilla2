import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { interfacelogin } from '../interfaces/interface-login';
import { interfaceusuario } from '../interfaces/interface-usuario';

//--------importo la URL del enviroment
const base_url = environment.base_url
//-------------------------------------

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private router: Router) { }

  //----------crear usuario

  crearusuario(valores: interfaceusuario){
    console.log('Creando usuario');
   return this.http.post(`${base_url}/usuario`, valores)
                    .pipe(
                      tap( (resp: any) =>{
                        localStorage.setItem('token',resp.token);
                      })
                    );
  }

  //-----------login

  loginusuario(valores: interfacelogin){
  
   return this.http.post(`${base_url}/login`, valores)
                    .pipe(
                      tap( (resp: any) =>{
                        localStorage.setItem('token',resp.token);
                      })
                    );
  }

  //-----------validar token

  validartoken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) =>{
        localStorage.setItem('token',resp.token);
      }),
      map( resp => true),
      catchError(error=>of(false))
    )
  }

  cerrarsesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
