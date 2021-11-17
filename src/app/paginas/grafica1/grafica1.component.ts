import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Ventas', 'Compras', 'Pedidos', 'Solicitudes'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 80],
    [50, 150, 120, 100],
    [250, 130, 70, 80],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }


}
