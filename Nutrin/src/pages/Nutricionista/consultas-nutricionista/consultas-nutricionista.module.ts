import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasNutricionistaPage } from './consultas-nutricionista';
import { AgendarConsultaPageModule } from '../agendar-consulta/agendar-consulta.module';

@NgModule({
  declarations: [
    ConsultasNutricionistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasNutricionistaPage),
    AgendarConsultaPageModule
  ],
})
export class ConsultasNutricionistaPageModule {}
