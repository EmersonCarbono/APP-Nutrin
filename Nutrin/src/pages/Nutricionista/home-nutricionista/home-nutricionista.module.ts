import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNutricionistaPage } from './home-nutricionista';

@NgModule({
  declarations: [
    HomeNutricionistaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNutricionistaPage),
  ],
})
export class HomeNutricionistaPageModule {}
