import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';

import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { PacienteProvider } from '../../../../providers/pacientes/paciente';
import { UserDataProvider } from '../../../../providers/UserData/userData';

import { PerfilPage } from '../perfil';
import { AlertController } from 'ionic-angular';
import { HomePacientePage } from '../../home-paciente/home-paciente';


@IonicPage()
@Component({
  selector: 'page-alterar-cadastro',
  templateUrl: 'alterar-cadastro.html',
  providers:[
    PacienteProvider,
    UserDataProvider,
  ]
})
export class AlterarCadastroPage {

  dados_paciente = this.userDataProvider.getUserData().dados_user;
  username_atual = this.dados_paciente.username;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
    public alertCtrl: AlertController
  ) { }

  private showAlert(titulo, mensagem) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }


  private alterarCadastro(req){
    this.pacienteProvider.alterar_paciente(this.username_atual, this.dados_paciente).subscribe(
      data => {
        const response = (data as any);
        if(response.Status == "Sucesso"){
          this.pacienteProvider.pesquisar_paciente(this.dados_paciente.username).subscribe(
            paciente_data => {
              const paciente_dados = (paciente_data as any);
              this.userDataProvider.setUserData(true, paciente_dados.Dados);
              this.showAlert(response.Status, response.Mensagem);
              this.navCtrl.push(HomePacientePage);
            }
          );
        } else{
          this.showAlert(response.Status, response.Mensagem);
        }
      }
    );
  }

  ionViewDidLoad() {

  }

}

