import { TipoTransacaoComponent } from './components/tipo-transacao/tipo-transacao.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './../../app-routing.module';
import { ListaTransacoesComponent } from './components/lista-transacoes/lista-transacoes.component';
import { NovaTransacaoComponent } from './components/nova-transacao/nova-transacao.component';
import { TransacoesComponent } from './transacoes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, CommonModule, ReactiveFormsModule],
  declarations: [
    TransacoesComponent,
    NovaTransacaoComponent,
    ListaTransacoesComponent,
    CalendarioComponent,
    PlanejamentoComponent,
    TipoTransacaoComponent,
  ],
})
export class TransacoesModule {}
