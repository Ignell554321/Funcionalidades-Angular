import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompInterpolacionComponent } from './comp/comp-interpolacion/comp-interpolacion.component';
import { CondicionalSimpleComponent } from './comp/condicional-simple/condicional-simple.component';
import { RecorrerCursosComponent } from './comp/recorrer-cursos/recorrer-cursos.component';
import { CondicionalMultipleComponent } from './comp/condicional-multiple/condicional-multiple.component';
import { DirectivasAtributosComponent } from './comp/directivas-atributos/directivas-atributos.component';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { PipesComponent } from './comp/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CompInterpolacionComponent,
    CondicionalSimpleComponent,
    RecorrerCursosComponent,
    CondicionalMultipleComponent,
    DirectivasAtributosComponent,
    NavegadorComponent,
    PageNotFoundComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
