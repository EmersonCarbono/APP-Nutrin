import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePacientePage } from './home-paciente';
import { PerfilPageModule } from '../cadastro/perfil.module';
import { ModalSolicitarConsultaPageModule } from '../modal-solicitar-consulta/modal-solicitar-consulta.module';

@NgModule({
  declarations: [
    HomePacientePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePacientePage),
    PerfilPageModule,
    ModalSolicitarConsultaPageModule
  ],
})
export class HomePacientePageModule {}
