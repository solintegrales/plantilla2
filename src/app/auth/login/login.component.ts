import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private router: Router,
              private fb: FormBuilder,
              private susuario: UsuarioService
              ) { }

  ngOnInit(): void {
  }

  //-----------formulario reactivo
  validarenvio: any = false;

  public flogin = this.fb.group({
    email:    [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    clave:    ['', Validators.required],
    recordar: [false]
  })
  //--------validar campos------------
  camponoValido(campo: string):boolean{
    if(this.flogin.get(campo)?.invalid && this.validarenvio){
      return true;
    }else{
      return false;
    }
  }

  //----------------------

  login(){
    //this.router.navigateByUrl('./');
    this.validarenvio=true;
    //console.log(this.flogin.value);

    this.susuario.loginusuario(this.flogin.value)
      .subscribe( resp => {
          
          //console.log(resp);
          if(this.flogin.get('recordar')?.value){
            localStorage.setItem('email', this.flogin.get('email')?.value);
          } else{
            localStorage.removeItem('email');
          }  
          
          //ENTRAR AL DASHBOARD
          this.router.navigateByUrl('/');
          //this.limpiarform();
        }, 
        (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      );
  }

}
