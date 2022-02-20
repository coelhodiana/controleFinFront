import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Transacao } from '../../transacao';
import { TransacoesService } from '../../transacoes.service';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.scss'],
})
export class BalancoComponent implements OnInit {
  transacoesSubscription: Subscription;
  somaGastosSub$ = new BehaviorSubject<number>(0);
  somaGanhosSub$ = new BehaviorSubject<number>(0);
  somaInvestimentosSub$ = new BehaviorSubject<number>(0);
  saldoSub$ = new BehaviorSubject<number>(0);

  constructor(private servicoTransacao: TransacoesService) {
    this.transacoesSubscription = this.servicoTransacao
      .obterListaTransacoes()
      .subscribe(console.log);
  }

  ngOnInit() {
    this.servicoTransacao.listaTransacoes$.subscribe((transacoes) => {
      this.somaValores(transacoes);
    });
  }

  somaValores(transacoes: Array<Transacao>) {
    let somaGastos: number = 0;
    let somaGanhos: number = 0;
    let somaInvestimentos: number = 0;
    let saldo: number = 0;

    for (let i = 0; i < transacoes.length; i++) {
      if (transacoes[i].tipo === 'gasto') {
        somaGastos += +transacoes[i].valor;
        this.somaGastosSub$.next(somaGastos / 100);
      } else if (transacoes[i].tipo === 'ganho') {
        somaGanhos += transacoes[i].valor;
        this.somaGanhosSub$.next(somaGanhos / 100);
      } else if (transacoes[i].tipo === 'investimento') {
        somaInvestimentos += transacoes[i].valor;
        this.somaInvestimentosSub$.next(somaInvestimentos / 100);
      }
    }

    let gastoInvestimento = somaInvestimentos + somaGastos;
    this.saldoSub$.next((somaGanhos - gastoInvestimento) / 100);
  }
}
