import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  selected: Date | null;

  constructor() {
    let agora = new Date();
    console.log(agora);

    this.selected = new Date();
  }

  ngOnInit(): void {}
}
