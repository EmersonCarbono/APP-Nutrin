import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacientesPage } from './pacientes';
import { AlterarPacientePageModule } from '../alterar-paciente/alterar-paciente.module';
import { PerfilPacientePageModule } from '../perfil-paciente/perfil-paciente.module';

@NgModule({
  declarations: [
    PacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PacientesPage),
    AlterarPacientePageModule,
    PerfilPacientePageModule
  ],
})
export class PacientesPageModule {}
