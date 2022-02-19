import { Component, OnInit } from '@angular/core';
import { TransacoesService } from '../transacoes.service';
import { Transacao } from '../transacao';


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
