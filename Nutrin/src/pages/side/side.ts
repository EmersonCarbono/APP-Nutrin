import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomeNutricionistaPage } from '../Nutricionista/home-nutricionista/home-nutricionista';
import { HomePacientePage } from '../Paciente/home-paciente/home-paciente';
import { UserDataProvider } from '../../providers/UserData/userData';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-side',
  templateUrl: 'side.html',
  providers:[
    UserDataProvider,
  ]
})
export class SidePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userDataProvider: UserDataProvider,
    ) {
  }

  rootPage: any;
  user_tipo = this.navParams.get('tipo_user');
  user_nome = this.navParams.get('nome_user');

  dados_usuario_provaider = this.userDataProvider.getUserData();
  user_tipo_provaider = ((this.dados_usuario_provaider.user == true) ? this.dados_usuario_provaider.dados_user.tipo : this.user_tipo);
  user_nome_provaider = ((this.dados_usuario_provaider.user == true) ? this.dados_usuario_provaider.dados_user.nome : this.user_nome);
  
  private setRootPage(tipo_user){
    if (tipo_user == "P"){
      this.rootPage = HomePacientePage;
    } else {
      this.rootPage = HomeNutricionistaPage;
    }
  }

  pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

  logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad(){
    console.log(this.user_tipo_provaider);
    this.setRootPage(this.user_tipo);
  };

}
