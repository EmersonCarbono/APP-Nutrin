import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SidePage } from './side';

import { PacientesPageModule } from '../Nutricionista/pacientes/pacientes.module';
import { CadastrarAnamnesePageModule } from '../Nutricionista/cadastrar-anamnese/cadastrar-anamnese.module';

@NgModule({
  declarations: [
    SidePage
  ],
  imports: [
    IonicPageModule.forChild(SidePage),
    PacientesPageModule,
    CadastrarAnamnesePageModule,
  ],
})
export class SidePageModule {}
