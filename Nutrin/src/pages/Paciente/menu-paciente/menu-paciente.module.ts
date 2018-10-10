import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPacientePage } from './menu-paciente';
import { ModalSolicitarConsultaPageModule } from '../modal-solicitar-consulta/modal-solicitar-consulta.module';

@NgModule({
  declarations: [
    MenuPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPacientePage),
    ModalSolicitarConsultaPageModule
  ],
})
export class MenuPacientePageModule {}
