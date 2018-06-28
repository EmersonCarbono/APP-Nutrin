import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from '../consulta/consulta';


import { UserDataProvider } from '../../providers/UserData/userData';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers:[
    UserDataProvider,
  ]
})
export class MenuPage {
  rootPage = ConsultaPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userDataProvider: UserDataProvider,
  ) {}

  user_data = JSON.parse(this.userDataProvider.getUserData());
  
  nome = this.user_data.nome;
  email = this.user_data.email;
  ionViewDidLoad() {
    console.log(this.nome);
  }

}
