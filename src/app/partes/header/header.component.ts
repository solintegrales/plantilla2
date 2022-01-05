import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private susuario: UsuarioService) { }

  ngOnInit(): void {
  }

  cerrarsesion(){
    this.susuario.cerrarsesion();
  }

}
