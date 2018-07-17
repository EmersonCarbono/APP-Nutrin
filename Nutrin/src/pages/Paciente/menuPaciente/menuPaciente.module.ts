import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { menuPacientePage } from './menuPaciente';

import { PerfilPacientePageModule } from '../perfil-paciente/perfil-paciente.module';
import { MarcarConsultaPageModule } from '../marcar-consulta/marcar-consulta.module';
import { ConsultasAgendadasPageModule } from '../consultas-agendadas/consultas-agendadas.module';

@NgModule({
  declarations: [
    menuPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(menuPacientePage),
    PerfilPacientePageModule,
    MarcarConsultaPageModule,
    ConsultasAgendadasPageModule
  ],
})
export class menuPacientePageModule {}
