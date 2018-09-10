import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-nutricionista',
  templateUrl: 'home-nutricionista.html',
})
export class HomeNutricionistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

  ionViewDidLoad() {
  }

}
