import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  progreso1: number=20;
  porc1: any=`${this.progreso1}%`;
  progreso2: number=50;
  porc2: any=`${this.progreso2}%`;

  

}
