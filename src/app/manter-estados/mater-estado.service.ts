import { Http, Response } from '@angular/http';
import { Estados } from './estados';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { Page } from '../models/models';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MaterEstadoService {
  estados: Estados[];
  url = 'http://localhost:8080/estados';
  constructor(private http: HttpClient) {

   }

  salvarEstado(estado: Estados): Observable<Estados> {
      return this.http.post<Estados>(this.url, estado );
  }
  excluirEstado(item: Estados) {
    return this.http.delete(this.url + '/' + item.id )
    .pipe( map(esta => <Estados>item ));

  }
 buscarTodos(): Observable<Estados[]> {
   return this.http.get<Estados[]>(this.url);
 }
 estadosPorPaginacao(page, size
  , estado: Estados): Observable<Page> {
  // tslint:disable-next-line:max-line-length
  return this.http.get<Page>(this.url + `?page=${page}&size=${size}&nome=${estado.nome}`);
}
 buscarPorNome(nome: String): Observable<Estados[]> {
  return this.http.get<Estados[]>(this.url + '/' + nome);
}


}
