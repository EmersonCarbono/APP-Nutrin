import { Component } from '@angular/core';

// importando os validators e form builder
import { Validators, FormBuilder } from '@angular/forms';


import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class LoginPage {

  dados_login : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public FormBuilder: FormBuilder) {

    this.dados_login = this.FormBuilder.group({
      username:["", Validators.required],
      password:["", Validators.required],
    })

  }

  public getDadosLogin(){
    console.log(this.dados_login.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
