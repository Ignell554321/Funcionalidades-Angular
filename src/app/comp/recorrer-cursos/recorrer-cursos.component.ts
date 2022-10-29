import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorrer-cursos',
  templateUrl: './recorrer-cursos.component.html',
  styleUrls: ['./recorrer-cursos.component.css']
})
export class RecorrerCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  muestraCursos:boolean=true;
  cursos=this.devuelveCursos();
  textoBtnMuestraCursos:string="Ocultar Cursos";


  mostrarCursos(){
    this.muestraCursos=!this.muestraCursos;
    this.textoBtnMuestraCursos=(this.muestraCursos===false?"Muestra Cursos":"Ocultar Cursos");
  }

  devuelveCursos(){
    return [
      {id:1, nombre:"Java Front", dificultad:8, descripcion:"curso de react, angular y ecmajs"},
      {id:2, nombre:"Java Server Faces", dificultad:9, descripcion:"curso sobre Java avanzado"},
      {id:3, nombre:"Angular", dificultad:9, descripcion:"curso de la capa front que simula un mvc"},
      {id:4, nombre:"React", dificultad:8, descripcion:"curso de la capa fron basado en jsx"},
      {id:5, nombre:"Java Fundamentals", dificultad:5, descripcion:"curso sobre los fundamentos de la prog de Java"},
    ]
  }

}
