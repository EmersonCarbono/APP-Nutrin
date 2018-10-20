import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasNutricionistaPage } from './consultas-nutricionista';

@NgModule({
  declarations: [
    ConsultasNutricionistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasNutricionistaPage),
  ],
})
export class ConsultasNutricionistaPageModule {}
