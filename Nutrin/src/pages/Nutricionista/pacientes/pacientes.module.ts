import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacientesPage } from './pacientes';
import { CadastrarPageModule } from './cadastrar/cadastrar.module';


@NgModule({
  declarations: [
    PacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PacientesPage),
    CadastrarPageModule
  ],
})
export class PacientesPageModule {}
