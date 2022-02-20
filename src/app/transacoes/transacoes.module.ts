import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { BalancoComponent } from './components/balanco/balanco.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { NovaComponent } from './components/nova/nova.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { TransacoesComponent } from './pages/transacoes.component';
import { TransacoesRoutingModule } from './transacoes-routing.module';

@NgModule({
  imports: [
    TransacoesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
  ],
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
