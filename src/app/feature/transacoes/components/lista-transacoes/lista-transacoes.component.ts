import { Transacao } from './../../../../core/models/transacao';
import { Component, OnInit } from '@angular/core';

import { TransacoesService } from './../../../../core/services/transacoes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-transacoes',
  templateUrl: './lista-transacoes.component.html',
  styleUrls: ['./lista-transacoes.component.scss'],
})
export class ListaTransacoesComponent implements OnInit {
  transacoesSubscription: Subscription;

  constructor(private servicoTransacao: TransacoesService) {
    this.transacoesSubscription = this.servicoTransacao
      .obterListaTransacoes()
      .subscribe(console.log);
  }

  ngOnInit() {}

  get listaTransacao(): Array<Transacao> {
    return this.servicoTransacao.obterListaTransacoes().value;
  }

  deletarTransacao(id: string) {
    this.servicoTransacao.deletarTransacao(id).subscribe();
  }
}
