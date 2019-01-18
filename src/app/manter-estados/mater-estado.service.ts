import { Http, Response } from '@angular/http';
import { Estados } from './estados';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { Page } from '../models/models';



@Injectable({
  providedIn: 'root'
})
export class MaterEstadoService {
  estados: Estados[];
  url = 'http://localhost:8080';
  constructor(private http: Http) {

   }

  salvarEstado(estado: Estados) {
      return this.http.post(this.url + '/salvar', estado )
      .pipe(map(res => res.json()));

  }
  excluirEstado(item: Estados) {
    return this.http.delete(this.url + '/excluir/' + item.id )
    .pipe( map(esta => <Estados>item ));

  }
 buscarTodos(): Observable<Estados[]> {
   return this.http.get(this.url + '/buscarTodos').pipe(map(res => res.json()));
 }
 estadosPorPaginacao(page: number, size: number): Observable<Page> {
  return this.http.get(this.url + `/buscarPorPaginacao?page=${page}&size=${size}`).pipe(map(res => res.json()));
}
 buscarPorNome(nome: String): Observable<Estados[]> {
  return this.http.get(this.url + '/buscarByNome/' + nome).pipe(map(res => res.json()));
}


}
