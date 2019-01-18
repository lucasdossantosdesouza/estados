import { HttpModule } from '@angular/http';
import { MaterEstadoService } from './manter-estados/mater-estado.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ManterEstadosComponent } from './manter-estados/manter-estados.component';
import { ManterCidadesComponent } from './manter-cidades/manter-cidades.component';
import { _routing } from './app.routing';
import { PaginationComponent } from './pagination/paginacao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ManterEstadosComponent,
    ManterCidadesComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    _routing,
    HttpClientModule
    ],
  providers: [MaterEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
