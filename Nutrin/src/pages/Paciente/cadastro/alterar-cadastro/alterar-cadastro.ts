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

  dados_alterar_cadastro:any = {};
  dados_cadastro_user = this.userDataProvider.getUserData().dados_user;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
    public alertCtrl: AlertController
  ) {

    this.dados_alterar_cadastro = this.formBuilder.group({
      nome: new FormControl(this.dados_cadastro_user.nome, Validators.required),
      username: new FormControl(this.dados_cadastro_user.username, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      dataNascimento: new FormControl(this.dados_cadastro_user.dataNascimento, Validators.required),
      sexo: new FormControl(this.dados_cadastro_user.sexo, Validators.required),
      email: new FormControl(this.dados_cadastro_user.email, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      celular: new FormControl(this.dados_cadastro_user.celular, Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        
      ])),
      cidade: new FormControl(this.dados_cadastro_user.cidade, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])),
      profissao: new FormControl(this.dados_cadastro_user.profissao, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])),
      altura: new FormControl(this.dados_cadastro_user.altura, Validators.compose([
        Validators.required
      ])),
    });
  }

  private showAlert(titulo, mensagem) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  private alterarCadastro(){
    var username_atual =  this.dados_cadastro_user.username;
    var tipo =  this.dados_cadastro_user.tipo;
    var objetivo =  this.dados_cadastro_user.objetivo;

    var nome =  this.dados_alterar_cadastro.value.nome;
    var username =   this.dados_alterar_cadastro.value.username;
    var dataNascimento =   this.dados_alterar_cadastro.value.dataNascimento;
    var sexo =   this.dados_alterar_cadastro.value.sexo;
    var email =   this.dados_alterar_cadastro.value.email;
    var celular =   this.dados_alterar_cadastro.value.celular;
    var cidade =   this.dados_alterar_cadastro.value.cidade;
    var profissao =   this.dados_alterar_cadastro.value.profissao;
    var altura =   this.dados_alterar_cadastro.value.altura;
    this.pacienteProvider.alterar_paciente(
      username_atual,
      nome,
      username,
      dataNascimento,
      sexo,
      email,
      celular,
      cidade,
      profissao,
      tipo,
      objetivo,
      altura
      ).subscribe(
      data => {
        const response = (data as any);
        if(response.Status == "Sucesso"){
          this.pacienteProvider.pesquisar_paciente(username).subscribe(
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
    )
  }


  ionViewDidLoad() {

  }

}

