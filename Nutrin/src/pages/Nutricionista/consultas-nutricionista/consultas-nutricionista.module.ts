import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasNutricionistaPage } from './consultas-nutricionista';
import { AgendarConsultaPageModule } from '../agendar-consulta/agendar-consulta.module';
import { AlterarConsultaPageModule } from '../alterar-consulta/alterar-consulta.module';

@NgModule({
  declarations: [
    ConsultasNutricionistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasNutricionistaPage),
    AgendarConsultaPageModule,
    AlterarConsultaPageModule
  ],
})
export class ConsultasNutricionistaPageModule {}
