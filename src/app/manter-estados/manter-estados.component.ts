import { Estados } from './estados';

import { MaterEstadoService } from './mater-estado.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

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
  constructor(private _estadoService: MaterEstadoService) { }

  ngOnInit() {
    this.buscarTodos(null);
  }

  salvarEstado() {
    this._estadoService.salvarEstado(this.estado).subscribe(data => this.postData = JSON.stringify(data),
      () => this.buscarTodos(this.postData)
    );
  }
  editarEstado( item: Estados) {
    this.estado = item;
  }
  excluirEstado( item: Estados) {
    this.postData = null;
    this._estadoService.excluirEstado(item).subscribe((data) =>  {
      this.buscarTodos(JSON.stringify(data));
    }
    );
  }
  buscarTodos(mensagem) {
    if ( mensagem != null) {alert(mensagem); }
    this._estadoService.buscarTodos().subscribe(ufs =>   this.estados = ufs);
    this.estado = new Estados();
  }

}
