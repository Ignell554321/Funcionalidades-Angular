import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional-multiple',
  templateUrl: './condicional-multiple.component.html',
  styleUrls: ['./condicional-multiple.component.css']
})
export class CondicionalMultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  evaluacion:number=1;
  textoBotonEvaluacion:String="Siguiente Evaluacion";

  muestraSgteEvaluacion(){
    this.evaluacion=(this.evaluacion===3?0:this.evaluacion+1);

    this.textoBotonEvaluacion=this.evaluacion===0?'Desea revisar Examen':'Siguiente Evaluacion';
  }

}
