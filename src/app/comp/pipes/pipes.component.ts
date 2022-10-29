import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  descripcion:string="JAVASCRIPT es un Lenguaje Repotenciado";
  precio:number=1234.567234;
  IGV:number=0.18;
  TCEA:number=0.83;
  sueldoFutbolista:number=1235412569422;
  ahorro:number=2300;

  constructor() { }

  ngOnInit(): void {
  }

}
