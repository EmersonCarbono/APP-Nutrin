import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { UserDataProvider } from '../../../providers/UserData/userData';
import { LoginPage } from '../../login/login';
import { PerfilPacientePage } from '../perfil-paciente/perfil-paciente';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuPaciente',
  templateUrl: 'menuPaciente.html',
  providers:[
    UserDataProvider,
  ]
})
export class menuPacientePage {
  rootPage = PerfilPacientePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userDataProvider: UserDataProvider,
  ) {}

  user_data = this.userDataProvider.getUserData();
  nome = this.user_data.nome;
  email = this.user_data.email;
  
  ionViewDidLoad() {
    console.log(this.nome, this.email)
  }

  openPerfil(){
    this.navCtrl.push(PerfilPacientePage);
  }
  
  logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }
}
