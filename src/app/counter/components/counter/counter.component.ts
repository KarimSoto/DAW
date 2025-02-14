import { Component } from "@angular/core";

@Component({
    standalone:false,
    selector:'app-counter',
    template:`
        <h3> Counter : {{counter}}</h3>

        <button (click)="this.increaseBy(1)">+1</button>
        <button (click)="this.decreaseBy(1)">-1</button>
        <button (click)="this.resetCounter()">Resetear valor</button>
        <button (click)="this.iterator()">Mostrar waifu</button>

        <h4> Waifu: {{name}}</h4>
    `
})


// Esta es la clase del componente
export class CounterComponent{

  public counter : number = 10;
  private Quintillizas : string[]= ['Ichika','Nino','Miku','Yotsuba','Itsuki'];
  private novias : Array<string> = ['Rem','Yamada','Akane'];
  public name : string = this.Quintillizas[0];
  private x: number = 0;

  /*
    Comentarios como en Java o en JavaScript
  */
   

  // La razon por la que se usa this es porque tanto el component.html y el component.ts son un mismo objeto
  increaseBy(value:number):void{
    this.counter = this.counter + value;
  }

  decreaseBy(value:number):void{
    this.counter = this.counter - value;
  }

  iterator(){
    this.x = this.x + 1;   //  <--- Iteramos al siguiente

    if(this.x > this.Quintillizas.length-1){
      this.x = 0;  // <--- Volver al inicio
    }
    
    // Asignar el valor de name
    this.name = this.Quintillizas[this.x];
  }

  resetCounter():void{
    this.counter = 10;
  }
    
}