import { Component } from '@angular/core';


import { menuPacientePage } from '../Paciente/menuPaciente/menuPaciente';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = menuPacientePage;

  constructor() {

  }
}
