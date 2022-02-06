import { Transacao } from './core/models/transacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'controleGastosApp';

  transacoes: Array<Transacao> = [];

  somaGastosSub = new BehaviorSubject<number>(0);
  somaGanhosSub = new BehaviorSubject<number>(0);
  somaInvestimentosSub = new BehaviorSubject<number>(0);

  saldoSub = new BehaviorSubject<number>(0);

  transacaoForm = this.fb.group({
    id: [],
    tipo: ['gasto',Validators.required],
    valor: [Validators.required],
    data: [new Date()],
    descricao: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  salvarTransacao(transacao: Transacao) {
    if(this.transacaoForm.valid){
      console.log(this.transacaoForm.valid)
    }
    this.transacoes.push(transacao);
    console.log(this.transacoes);
    console.log(this.somaValores(this.transacoes));
  }

  somaValores(transacoes: Array<Transacao>) {
    let somaGastos: number = 0;
    let somaGanhos: number = 0;
    let somaInvestimentos: number = 0;

    for (let i = 0; i < transacoes.length; i++) {
      if (transacoes[i].tipo === 'gasto') {
        somaGastos += transacoes[i].valor;
        this.somaGastosSub.next(somaGastos);
        this.saldoSub.next(this.somaGanhosSub.value - this.somaGastosSub.value);
      } else if (transacoes[i].tipo === 'ganho') {
        somaGanhos += transacoes[i].valor;
        this.somaGanhosSub.next(somaGanhos);
        this.saldoSub.next(this.saldoSub.value + transacoes[i].valor);
      } else if (transacoes[i].tipo === 'investimento') {
        somaInvestimentos += transacoes[i].valor;
        this.somaInvestimentosSub.next(somaInvestimentos);
      }
    }
  }
}
