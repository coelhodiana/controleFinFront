import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Transacao } from '../../transacao';
import { TransacoesService } from '../../transacoes.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
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
