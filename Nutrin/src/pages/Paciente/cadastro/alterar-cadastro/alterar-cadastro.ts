import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { PacienteProvider } from '../../../../providers/pacientes/paciente';
import { UserDataProvider } from '../../../../providers/UserData/userData';


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

  dados_alterar_cadastro:any = {};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
  ) {
    var dados_atuais_user = this.getDadosAtuais();
    const response  = (dados_atuais_user as any);
    console.log(response);
    this.dados_alterar_cadastro = this.formBuilder.group({
      nome: new FormControl("", Validators.required),
      username: new FormControl("username_teste", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      dataNascimento: new FormControl("2018-08-08", Validators.required),
      sexo: new FormControl("M", Validators.required),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      celular: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])),
      cidade: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])),
      profissao: new FormControl("teste", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])),
    });
  }

  private getDadosAtuais(){
    var user_atual = this.userDataProvider.getUserData().dados_user.username;
    this.pacienteProvider.pesquisar_paciente(user_atual).subscribe(
      data => {
        const cadastro_user = ( data as any);
        var dados_atuais_user = cadastro_user.Dados;
        return dados_atuais_user;
      }
    );
  }

  public alterarCadastro(){
  }

  ionViewDidLoad() {
    
  }

}
