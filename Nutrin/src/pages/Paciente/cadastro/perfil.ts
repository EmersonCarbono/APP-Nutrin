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
  
  public dados_cadastro_user = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
  ) {

  }

  user_atual = this.userDataProvider.getUserData().dados_user.username;

  public pushAlterarCadastro(){
    this.navCtrl.push(AlterarCadastroPage);
  }

  ionViewDidLoad() {
    this.pacienteProvider.pesquisar_paciente(this.user_atual).subscribe(
      data => {
        const cadastro_user = ( data as any);
        this.dados_cadastro_user = cadastro_user.Dados;
      }
    );
  }


}
