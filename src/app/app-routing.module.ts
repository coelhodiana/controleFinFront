import { NovaTransacaoComponent } from './feature/transacoes/components/nova-transacao/nova-transacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { TransacoesComponent } from './feature/transacoes/transacoes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'nova-transacao', component: NovaTransacaoComponent },
  { path: '', redirectTo: '/transacoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
