import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarConsultaPage } from './agendar-consulta';

@NgModule({
  declarations: [
    AgendarConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendarConsultaPage),
  ],
})
export class AgendarConsultaPageModule {}
