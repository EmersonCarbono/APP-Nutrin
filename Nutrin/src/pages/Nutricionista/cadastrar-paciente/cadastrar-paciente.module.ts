import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPacientePage } from './cadastrar-paciente';

@NgModule({
  declarations: [
    CadastrarPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPacientePage),
  ],
})
export class CadastrarPacientePageModule {}
