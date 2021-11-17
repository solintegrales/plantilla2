import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/servicios/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menus!: any[];

  constructor(private navm:NavService) {
    this.menus = navm.menu;
    console.log(this.menus);
    
   }

  ngOnInit(): void {
  }

}
