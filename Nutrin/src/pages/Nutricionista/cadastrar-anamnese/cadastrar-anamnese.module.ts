import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarAnamnesePage } from './cadastrar-anamnese';

@NgModule({
  declarations: [
    CadastrarAnamnesePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarAnamnesePage),
  ],
})
export class CadastrarAnamnesePageModule {}
