import { TransacoesService } from './../../transacoes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, tap, BehaviorSubject } from 'rxjs';
import { Transacao } from '../../transacao';


@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.scss'],
})
export class NovaComponent implements OnInit {
  transacoes$ = new BehaviorSubject<Array<Transacao>>([]);

  transacaoForm = this.fb.group({
    id: [0],
    tipo: ['gasto', Validators.required],
    valor: [0, Validators.required],
    dataInclusao: [new Date()],
    descricao: [''],
  });

  constructor(
    private fb: FormBuilder,
    private servicoTransacao: TransacoesService
  ) {}

  ngOnInit(): void {
    this.servicoTransacao
      .getTransacoes()
      .pipe(
        tap((transacoes) => {
          this.transacoes$.next(transacoes);
          this.servicoTransacao.listaTransacoes$.next(transacoes);
        })
      )
      .subscribe((res) => console.log(res));
  }

  salvarTransacao(transacao: Transacao) {
    console.log(transacao);
    this.servicoTransacao
      .postTransacao(transacao)
      .pipe(
        catchError((error) => {
          console.log(error);
          return error;
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.servicoTransacao.atualizarTransacao(res);
      });
    console.log(this.transacaoForm.valid);
  }
}
