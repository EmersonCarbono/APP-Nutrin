import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastrar-paciente',
  templateUrl: 'cadastrar-paciente.html',
})
export class CadastrarPacientePage {

  cadastro:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    this.cadastro = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      dataNascimento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      celular: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])),
      cidade: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])),
      profissao: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])),
      altura: new FormControl('', Validators.required)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPacientePage');
  }

}
