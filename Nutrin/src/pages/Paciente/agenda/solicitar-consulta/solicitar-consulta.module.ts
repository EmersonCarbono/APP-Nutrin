import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitarConsultaPage } from './solicitar-consulta';

@NgModule({
  declarations: [
    SolicitarConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitarConsultaPage),
  ],
})
export class SolicitarConsultaPageModule {}
