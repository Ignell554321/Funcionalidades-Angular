import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributos',
  templateUrl: './directivas-atributos.component.html',
  styleUrls: ['./directivas-atributos.component.css']
})
export class DirectivasAtributosComponent implements OnInit {

  textoStyle:String="directivas-atributos usando style";
  textoNgStyle:String="Directivas atributos usando ngStyle"

  textoNgClass:string="Un texto de ngClass";
  indicadorEstilo:boolean=true;
  textoCambiarEstilo="Cambiar Estilo";

  fnStilo(){
    let estilo='mt-2 p-2 text-white fw-2 fw-bold border-3 border bg-info';
    let estiloBaja='mt-2 p-2 text-primary fw-2 fw-bold border-3 border';
      return this.indicadorEstilo===true? estilo: estiloBaja;
  }

  cambiaEstiloClase(){
    this.indicadorEstilo=!this.indicadorEstilo;
  }

  frutas:any[]=[
    { nombre:'manzana', beneficios:'vitamina A'},
    { nombre:'pera', beneficios:'vitamina B'},
    { nombre:'naranja', beneficios:'vitamina C'}
  ];

  devuelveColor(beneficio:any):any{
     switch(beneficio){

      case 'vitamina A':
        return 'green';
        break;
      case 'vitamina B':
        return 'red';
        break;
      case 'vitamina C':
        return 'orange';
          break;
        default:
          return 'black'
     }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
