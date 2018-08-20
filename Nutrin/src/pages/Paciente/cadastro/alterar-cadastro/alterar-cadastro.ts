import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro',
  templateUrl: 'alterar-cadastro.html',
})
export class AlterarCadastroPage {

  dados_altear_cadastro:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    this.dados_altear_cadastro = this.formBuilder.group({
      username:[],
      nome:[],
      email:[],
      celular:[],
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroPage');
  }

}
