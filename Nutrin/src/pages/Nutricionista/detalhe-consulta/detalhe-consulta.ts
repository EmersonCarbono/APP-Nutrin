import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-consulta',
  templateUrl: 'detalhe-consulta.html',
})
export class DetalheConsultaPage {

  consulta:any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.consulta = this.navParams.get('consultaSelecionado');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 
      "Antropometria não cadastrada",
      subTitle: 
      "Deseja cadastrar agora?",
      buttons: [
        {
          text: 'Sim',
          handler: data => {
            this.navCtrl.push("CadastrarAntropometriaPage", {
             consulta : this.consulta
            })
          }
        },
        {
          text: 'Não',
          handler: data => {
            console.log('Não');
          }
        },
      ]
    });
    alert.present();
  }

  public pushCadastrarAntropometria(){
    if (this.consulta.antropometria_id == null){
      this.showAlert();
    }
  }

  ionViewDidLoad() {
    console.log(this.consulta);
  }

}
