import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarConsultasPage } from './listar-consultas';
import { ModalSolicitarConsultaPageModule } from '../modal-solicitar-consulta/modal-solicitar-consulta.module';

@NgModule({
  declarations: [
    ListarConsultasPage
  ],
  imports: [
    IonicPageModule.forChild(ListarConsultasPage),
    ModalSolicitarConsultaPageModule
  ],
})
export class ListarConsultasPageModule {}
