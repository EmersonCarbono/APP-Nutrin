import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePacientePage } from '../home-paciente/home-paciente';
import { UserDataProvider } from '../../../providers/UserData/userData';
import { LoginPage } from '../../login/login';

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

  pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

  logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }
}
