import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePacientePage } from '../home-paciente/home-paciente';
import { UserDataProvider } from '../../../providers/UserData/userData';
import { LoginPage } from '../../login/login';

/**
 * Generated class for the MenuPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-paciente',
  templateUrl: 'menu-paciente.html',
})
export class MenuPacientePage {
  rootPage = HomePacientePage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userDataProvider: UserDataProvider,
  ) {
  }

  ionViewDidLoad() {
    
  }

  private pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

  private logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }
}
