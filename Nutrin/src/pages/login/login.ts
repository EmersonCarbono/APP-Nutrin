import { Component } from '@angular/core';

// importando os validators e form builder
import { Validators, FormBuilder } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/Login/login';
import { UserDataProvider } from '../../providers/UserData/userData';
import { UserProvider } from '../../providers/User/user';


import { HomePacientePage } from '../Paciente/home-paciente/home-paciente';
import { PacienteProvider } from '../../providers/pacientes/paciente';
import { HomeNutricionistaPage } from '../Nutricionista/home-nutricionista/home-nutricionista';


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
  ) {

    this.dados_login = this.FormBuilder.group({
      username:["", Validators.required],
      password:["", Validators.required],
    })

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
                    console.log(paciente_dados)
                  }
                );
                this.navCtrl.setRoot(HomePacientePage);
              } else {
                this.navCtrl.setRoot(HomeNutricionistaPage);
              }
            }
          );
        } else {
          console.log("Erro no login");
        }
      }, error=>{
        console.log(error);
      }
    );
  }

}
