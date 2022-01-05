import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
              private fb: FormBuilder,
              private susuario: UsuarioService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  //-----------formulario reactivo
  validarenvio: any = false;

  public fregistro = this.fb.group({
    nombre:   ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    clave:    ['', Validators.required],
    clave2:   ['', Validators.required],
    rol:      ['', Validators.required],
    terminos: [false, Validators.required]
  })
  //-----------------

  //--------validar campos------------
  camponoValido(campo: string):boolean{
      if(this.fregistro.get(campo)?.invalid && this.validarenvio){
        return true;
      }else{
        return false;
      }
  }
  vclaves(){
    const clave1 = this.fregistro.get('clave')?.value;
    const clave2 = this.fregistro.get('clave2')?.value;

    if(clave1 === clave2){
      this.fregistro.setErrors(null);
      //console.log(this.fregistro.errors);
      return false;
    }else{
      this.fregistro.setErrors({error: "Error"});
      //console.log(this.fregistro.errors);
      return true;
    }
  }
  
  aceptaterminos(){
    return !this.fregistro.get('terminos')?.value && this.validarenvio;
  }
  private limpiarform() {
    this.fregistro.patchValue({
      nombre: '',
      email: '',
      clave: '',
      clave2: '',
      rol: '',
      terminos: false
    });
  }
  //---------------

  crearusuario(){
    this.validarenvio=true;
    //console.log(this.fregistro.value);

    if(this.fregistro.invalid){
      console.log("Formulario no es correcto...");
      return;
    }

    this.susuario.crearusuario(this.fregistro.value)
      .subscribe( resp => {
          console.log('Usuario creado');
          //ENTRAR AL DASHBOARD
          this.router.navigateByUrl('/');
          //console.log(resp);    
          this.limpiarform();
        }, 
        (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      );

  }

}
