import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { UserDataProvider } from '../../../providers/UserData/userData';


import { AlterarCadastroPage } from './alterar-cadastro/alterar-cadastro';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers:[
    PacienteProvider,
    UserDataProvider,
  ]
})
export class PerfilPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
  ) {

  }

  dados_cadastro_user = this.userDataProvider.getUserData().dados_user;

  public pushAlterarCadastro(){
    this.navCtrl.push(AlterarCadastroPage);
  }

  ionViewDidLoad() {
  }


}
