import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Importações de Page*/


@IonicPage()
@Component({
  selector: 'page-home-paciente',
  templateUrl: 'home-paciente.html',
})
export class HomePacientePage {
  activeMenu: string = "menu-nutricionista";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  private pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

}
