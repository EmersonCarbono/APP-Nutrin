import { Component } from '@angular/core';

// importando os validators e form builder
import { Validators, FormBuilder } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/Login/login';
import { TabsPage } from '../tabs/tabs';
import { UserDataProvider } from '../../providers/UserData/userData';
import { UserProvider } from '../../providers/User/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    LoginProvider,
    UserDataProvider,
    UserProvider
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
              var username = user_data_response.Dados.username;
              var nome = user_data_response.Dados.nome;
              var tipo = user_data_response.Dados.tipo;
              var email = user_data_response.Dados.email;
              this.userDataProvider.setUserData(True, username, nome, email, tipo);
            }
          );
        }
      }, error=>{
        console.log(error);
      }
    )
  }

}
