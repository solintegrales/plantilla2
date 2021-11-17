import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) {
    this.router.events
    .pipe(
      filter(evento=>evento instanceof ActivationEnd),
      //filter( (evento: ActivationEnd)=>evento.snapshot.firstChild===null),
      //map( (evento: ActivationEnd)=>evento.snapshot.data)
    )
      .subscribe(data=>{console.log(data)});
   }

  ngOnInit(): void {
  }

}
