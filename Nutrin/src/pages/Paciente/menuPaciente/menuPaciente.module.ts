import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { menuPacientePage } from './menuPaciente';

import { PerfilPacientePageModule } from '../perfil-paciente/perfil-paciente.module';

@NgModule({
  declarations: [
    menuPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(menuPacientePage),
    PerfilPacientePageModule
  ],
})
export class menuPacientePageModule {}
