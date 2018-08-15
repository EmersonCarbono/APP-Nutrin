import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePacientePage } from './home-paciente';


import { PerfilPageModule } from '../cadastro/perfil.module';
import { AgendaPageModule } from '../agenda/agenda.module';

@NgModule({
  declarations: [
    HomePacientePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePacientePage),
    PerfilPageModule,
    AgendaPageModule,
  ],
})
export class HomePacientePageModule {}
