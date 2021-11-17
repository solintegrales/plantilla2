import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'fas fa-th',
      url: '/dashboard',
      submenu:[
        { titulo: 'Dashboard', icono: 'far fa-circle', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Páginas',
      icono: 'fas fa-copy',
      submenu:[
        { titulo: 'Gráfica 1', icono: 'far fa-circle', url: '/grafica1' },
        { titulo: 'Gráfica 2', icono: 'far fa-circle', url: '/grafica2' },
        { titulo: 'Progreso', icono: 'far fa-circle', url: '/progreso' },
        { titulo: 'Promesas', icono: 'far fa-circle', url: '/promesas' },
        { titulo: 'RXJS', icono: 'far fa-circle', url: '/rxjs' },
      ]
    }
  ];
}
