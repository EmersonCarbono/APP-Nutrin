import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPage } from './perfil';
import { AlterarCadastroPageModule } from './alterar-cadastro/alterar-cadastro.module';

@NgModule({
  declarations: [
    PerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPage),
    AlterarCadastroPageModule,
  ],
})
export class PerfilPageModule {}
