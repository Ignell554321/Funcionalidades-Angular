import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional-simple',
  templateUrl: './condicional-simple.component.html',
  styleUrls: ['./condicional-simple.component.css']
})
export class CondicionalSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  muestraCursos:boolean=true;
  cursoDisponible:boolean=true;
  textoBtnCursoDisponible:string="Ocultar Curso";
  textoCambiarEstilo:String="Cambiar Estilo";
  cursos=this.devuelveCursos();

  devuelveCursos(){
    return [
      {id:1, nombre:"Java Front", dificultad:8, descripcion:"curso de react, angular y ecmajs"},
      {id:2, nombre:"Java Server Faces", dificultad:9, descripcion:"curso sobre Java avanzado"},
      {id:3, nombre:"Angular", dificultad:9, descripcion:"curso de la capa front que simula un mvc"},
      {id:4, nombre:"React", dificultad:8, descripcion:"curso de la capa fron basado en jsx"},
      {id:5, nombre:"Java Fundamentals", dificultad:5, descripcion:"curso sobre los fundamentos de la prog de Java"},
    ]
  }

  accederCurso(){
    this.cursoDisponible=!this.cursoDisponible;
    this.textoBtnCursoDisponible=(this.cursoDisponible===false?"Acceder Curso":"Ocultar Curso");
  }

  textoBtnMuestraCursos:string="Ocultar Cursos";

  mostrarCursos(){
    this.muestraCursos=!this.muestraCursos;
    this.textoBtnMuestraCursos=(this.muestraCursos===false?"Muestra Cursos":"Ocultar Cursos");
  }




}
