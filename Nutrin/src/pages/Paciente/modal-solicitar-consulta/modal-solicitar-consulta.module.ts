import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSolicitarConsultaPage } from './modal-solicitar-consulta';

@NgModule({
  declarations: [
    ModalSolicitarConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSolicitarConsultaPage),
  ],
})
export class ModalSolicitarConsultaPageModule {}
