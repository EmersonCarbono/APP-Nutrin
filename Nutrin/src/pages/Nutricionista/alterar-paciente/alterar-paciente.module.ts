import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarPacientePage } from './alterar-paciente';

@NgModule({
  declarations: [
    AlterarPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarPacientePage),
  ],
})
export class AlterarPacientePageModule {}
