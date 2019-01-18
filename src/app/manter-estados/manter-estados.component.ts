import { Estados } from './estados';

import { MaterEstadoService } from './mater-estado.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractControlDirective, Validators } from '@angular/forms';
import { Page } from '../models/models';


@Component({
  selector: 'app-manter-estados',
  templateUrl: './manter-estados.component.html',
  styleUrls: ['./manter-estados.component.css']
})
export class ManterEstadosComponent implements OnInit {

  estado: Estados = new Estados();
  estado1: Estados = new Estados();
  estados: Estados[];
  nome: string;
  postData:  string;
  filtro: string;
  page: Page;

  constructor(private _estadoService: MaterEstadoService) { }

  ngOnInit() {
    this.pageEstados(0, 5);
  }

  salvarEstado() {
    this._estadoService.salvarEstado(this.estado).subscribe(data => this.postData = JSON.stringify(data),
      () => this.pageEstados(0, 5)

    );
  }
  editarEstado( item: Estados) {
    this.estado = item;
  }
  excluirEstado( item: Estados) {
    this.postData = null;
    this._estadoService.excluirEstado(item).subscribe((data) =>  {
      this.pageEstados(0, 5);
    }
    );
  }
  buscarTodos(mensagem) {
    if ( mensagem != null) {alert(mensagem); }
    this._estadoService.buscarTodos().subscribe(ufs =>   this.estados = ufs);
    this.estado = new Estados();
  }
  buscarPorNome() {
    if ( this.filtro == null || this.filtro === '') {
      this.pageEstados(0, 5);
    }
     //this._estadoService.buscarPorNome(this.filtro).subscribe(ufs =>   this.estados = ufs);
    this.pageEstados(0, 5);
  }
 pageEstados(page, size) {
  if ( this.filtro != null || this.filtro !== '') {
    this.estado.nome = this.filtro;
  }
    this._estadoService.estadosPorPaginacao(page, size, this.estado).subscribe(res => {
      this.page = res;
      this.estados = this.page.content;
      this.estado = new Estados();
    });
  }
  changePage(event) {
   this.pageEstados(event.page, event.size);
  }
}
