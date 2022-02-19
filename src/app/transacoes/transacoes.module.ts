import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BalancoComponent } from './components/balanco/balanco.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { NovaComponent } from './components/nova-transacao/nova.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { TransacoesComponent } from './pages/transacoes.component';
import { TransacoesRoutingModule } from './transacoes-routing.module';

@NgModule({
  imports: [TransacoesRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [
    TransacoesComponent,
    CalendarioComponent,
    PlanejamentoComponent,
    NovaComponent,
    ExtratoComponent,
    BalancoComponent,
  ],
})
export class TransacoesModule {}
