import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro',
  templateUrl: 'alterar-cadastro.html',
})
export class AlterarCadastroPage {

  dados_alterar_cadastro:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    this.dados_alterar_cadastro = this.formBuilder.group({
      nome: ["", Validators.required],
      username: ["", Validators.required],
      dataNascimento: ["", Validators.required],
      sexo: ["", Validators.required],
      email: ["", Validators.required],
      celular: ["", Validators.required],
      cidade: ["", Validators.required],
      profissao: ["", Validators.required],
    });
  }

  public alterarCadastro(){
    console.log(this.dados_alterar_cadastro.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroPage');
  }

}
