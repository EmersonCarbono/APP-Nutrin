import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePacientePage } from './home-paciente';

@NgModule({
  declarations: [
    HomePacientePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePacientePage),
  ],
})
export class HomePacientePageModule {}
