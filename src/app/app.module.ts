import { HttpModule } from '@angular/http';
import { MaterEstadoService } from './manter-estados/mater-estado.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ManterEstadosComponent } from './manter-estados/manter-estados.component';


@NgModule({
  declarations: [
    AppComponent,
    ManterEstadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ],
  providers: [MaterEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
