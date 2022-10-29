import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-interpolacion',
  templateUrl: './comp-interpolacion.component.html',
  styleUrls: ['./comp-interpolacion.component.css']
})
export class CompInterpolacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Cap3 Angular version 14';
  subtitulo:string="Revision de Interpolacion";

}
