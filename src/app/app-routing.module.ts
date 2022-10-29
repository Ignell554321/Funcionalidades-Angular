import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompInterpolacionComponent } from './comp/comp-interpolacion/comp-interpolacion.component';
import { CondicionalSimpleComponent } from './comp/condicional-simple/condicional-simple.component';
import { RecorrerCursosComponent } from './comp/recorrer-cursos/recorrer-cursos.component';
import { CondicionalMultipleComponent } from './comp/condicional-multiple/condicional-multiple.component';
import { DirectivasAtributosComponent } from './comp/directivas-atributos/directivas-atributos.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { PipesComponent } from './comp/pipes/pipes.component';

const routes: Routes = [

  {path:'interpolacion-componente',component:CompInterpolacionComponent},
  {path:'condicional-simple-componente',component:CondicionalSimpleComponent},
  {path:'cursos-cards',component:RecorrerCursosComponent},
  {path:'multiple-evaluaciones',component:CondicionalMultipleComponent},
  {path:'directivas-atributos',component:DirectivasAtributosComponent},
  {path:'tuberias',component:PipesComponent},
  {path: '**', pathMatch:'full', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
