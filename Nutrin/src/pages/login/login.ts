import { Component } from '@angular/core';

// importando os validators e form builder
import { Validators, FormBuilder } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    LoginProvider,
  ]
})
export class LoginPage {

  dados_login : any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public FormBuilder: FormBuilder,
    private loginProvider: LoginProvider
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
        console.log(response.Dados);
        if (response.Dados) {
          this.navCtrl.push(HomePage)
        }
      }, error=>{
        console.log(error);
      }
    )

    //if (temp_username == this.username_teste && temp_senha == this.senha_teste) {
    //  
    //} else {
    //  console.log("Login ou Senha invalida")
    //}

  }

}
