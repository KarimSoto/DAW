import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Wolverine','Thor'];

  public deletedHero?:string;   // Es cuando no queremos declarar una variable

  public remotelastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
