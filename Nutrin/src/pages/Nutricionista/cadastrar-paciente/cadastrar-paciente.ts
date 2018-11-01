import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { PacienteProvider } from '../../../providers/pacientes/paciente';

import { AlertController } from 'ionic-angular';

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
    public pacienteProvaider: PacienteProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
  }

  showAlert(title, mensagem) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  public cadastrarPaciente(req){
    this.pacienteProvaider.cadastrar_paciente(req.value).subscribe(
      data=>{
        const response = (data as any);
        if(response.Status == "Sucesso"){
          this.showAlert(response.Status, response.Mensagem)
          console.log(response.Mensagem);
        }else{
          this.showAlert(response.Status, response.Mensagem)
          console.log(response.Mensagem);
        }
      }
    );
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPacientePage');
  }

}
