import { HttpModule } from '@angular/http';
import { MaterEstadoService } from './manter-estados/mater-estado.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ManterEstadosComponent } from './manter-estados/manter-estados.component';
import { ManterCidadesComponent } from './manter-cidades/manter-cidades.component';
import { _routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ManterEstadosComponent,
    ManterCidadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    _routing
    ],
  providers: [MaterEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
