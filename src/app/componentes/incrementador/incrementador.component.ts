import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() progreso: number = 50;
  @Input() porc: any = `${this.progreso}%`;
  @Input() colorboton: any = 'btn-primary';

  
  @Output() pvalor: EventEmitter<string> = new EventEmitter();
  

  cambiarvalor(dato:number){
    if(this.progreso>=100 && dato>=0){
      this.progreso=100;
    }else if(this.progreso<=0 && dato<0){
      this.progreso=0;
    }else{
      this.progreso = this.progreso + dato;
    }
    this.porc = `${this.progreso}%`;
    this.pvalor.emit(this.porc);
  }

}
