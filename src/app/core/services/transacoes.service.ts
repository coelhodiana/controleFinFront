import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Transacao } from '../models/transacao';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  listaTransacoes$ = new BehaviorSubject<Array<Transacao>>([]);

  url = 'http://localhost:3000/transacoes';

  constructor(private http: HttpClient) {}

  atualizarListaTransacoes(transacoes: Array<Transacao>) {
    return this.listaTransacoes$.next(transacoes as Array<Transacao>);
  }

  atualizarTransacao(transacao: Array<Transacao>) {
    let transacoesAtuais = this.listaTransacoes$.value;
    let listaAtualizada = [transacao, ...transacoesAtuais];
    return this.listaTransacoes$.next(listaAtualizada as Array<Transacao>);
  }

  obterListaTransacoes() {
    return this.listaTransacoes$;
  }

  getTransacoes(): Observable<Array<Transacao>> {
    return this.http.get<Array<Transacao>>(this.url);
  }

  postTransacao(transacao: Transacao): Observable<any> {
    return this.http.post<Transacao>(this.url, transacao);
  }

  deletarTransacao(id: string): Observable<any> {
    console.log(id);

    return this.http.delete<Transacao>(`${this.url}/${id}`);
  }
}
