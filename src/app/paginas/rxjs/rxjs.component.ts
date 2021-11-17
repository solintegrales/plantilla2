import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription} from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalo: Subscription;

  constructor() { 
    

    /* this.retornar_obs().pipe(
      retry(2)
    )
    .subscribe(
      valor => console.log('sub: ', valor),
      error => console.warn('error: ', error),
      () => console.info('Se completo')  
    ); */

  this.intervalo = this.retornar_obs2().subscribe( console.log );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalo.unsubscribe();
  }

  retornar_obs(): Observable<unknown>{
    let con=-1;
    const obs$ = new Observable(observa => {
      
      const interv = setInterval( () => {
         con++;
         observa.next(con);
         if(con === 4){
          clearInterval(interv);
          observa.complete();
         }
         if(con === 2){
           observa.error('Esto es un error');
         }
      }, 1000)
    });

    return obs$;
  }

  retornar_obs2(){
   const obs$ = interval(1000)
                  .pipe(
                    take(20),
                    map(valor=>valor+1),
                    filter(valor=>(valor%2===0)? true: false)
                  ); 
   return obs$
  }

}
