import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidePage } from './side';

import { PacientesPageModule } from '../Nutricionista/pacientes/pacientes.module';

@NgModule({
  declarations: [
    SidePage,
  ],
  imports: [
    IonicPageModule.forChild(SidePage),
    PacientesPageModule,
  ],
})
export class SidePageModule {}
