import { Estados } from './estados';

import { MaterEstadoService } from './mater-estado.service';

import { Component, OnInit } from '@angular/core';

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

  constructor(private _estadoService: MaterEstadoService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  salvarEstado() {
    this._estadoService.salvarEstado(this.estado).subscribe(estad => this.estado = estad);
  }
  editarEstado( item: Estados) {
    alert(item.nome);
    this.estado = item;
  }
  excluirEstado( item: Estados) {
    this._estadoService.excluirEstado(item).subscribe(estad => this.estado1 = estad);
  }
  buscarTodos() {
    this._estadoService.buscarTodos().subscribe(ufs =>   this.estados = ufs);
  }

}
