import { BehaviorSubject, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Transacao } from './../../core/models/transacao';
import { TransacoesService } from './../../core/services/transacoes.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss'],
})
export class TransacoesComponent implements OnInit {
  constructor(private servicoTransacao: TransacoesService) {}

  ngOnInit() {
    this.servicoTransacao
      .getTransacoes()
      .subscribe((transacoes: Array<Transacao>) => {
        this.servicoTransacao.atualizarListaTransacoes(transacoes);
      });

    this.servicoTransacao.listaTransacoes$.subscribe((transacoes) => {
      console.log(transacoes);
    });
  }

  get listaTransacao(): Array<Transacao> {
    return this.servicoTransacao.obterListaTransacoes().value;
  }
}
