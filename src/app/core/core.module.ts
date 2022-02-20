import { NavbarComponent } from './components/Navbar/Navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  declarations: [NavbarComponent],
})
export class CoreModule {}
