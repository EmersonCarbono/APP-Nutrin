import { Component } from '@angular/core';

// importando os validators e form builder
import { Validators, FormBuilder } from '@angular/forms';
import { ToastController} from 'ionic-angular';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { UserDataProvider } from '../../providers/UserData/userData';
import { UserProvider } from '../../providers/User/user';

import { SidePage } from '../side/side';


import { PacienteProvider } from '../../providers/pacientes/paciente';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    LoginProvider,
    UserDataProvider,
    UserProvider,
    PacienteProvider
  ]
})
export class LoginPage {

  dados_login : any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public FormBuilder: FormBuilder,
    private loginProvider: LoginProvider,
    private userProvider: UserProvider,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
    public toastCtrl: ToastController,
  ) {

    this.dados_login = this.FormBuilder.group({
      username:["", Validators.required],
      password:["", Validators.required],
    })

  }

  private toastLoginInvalido(){
    const toast = this.toastCtrl.create({
      message: "Usuário ou senha inválidos",
      duration : 3000,
      showCloseButton: true,
      closeButtonText: "OK",
      position: "bottom",
    });
    toast.present();
  }

  public getTipoUser(){

  }




  public Login(){
    var temp_username = this.dados_login.value.username;
    var temp_senha = this.dados_login.value.password;

    this.loginProvider.validarLogin(temp_username,temp_senha).subscribe(
      data=>{
        const response  = (data as any);
        if (response.Dados) {
          this.userProvider.pesquisarUser(temp_username).subscribe(
            user_data=>{
              const user_data_response = (user_data as any);
              if (user_data_response.Dados.tipo == "P"){
                this.pacienteProvider.pesquisar_paciente(user_data_response.Dados.username).subscribe(
                  paciente_data => {
                    const paciente_dados = (paciente_data as any);
                    this.userDataProvider.setUserData(true, paciente_dados.Dados);
                  }
                );
              } else {
                this.userDataProvider.setUserData(true, user_data_response.Dados);
              }
              this.navCtrl.setRoot(SidePage, {
                tipo_user : user_data_response.Dados.tipo,
                nome_user: user_data_response.Dados.nome
              });
            }
          );
        } else {
          this.toastLoginInvalido();
        }
      }, error=>{
        console.log(error);
      }
    );
  }

}
