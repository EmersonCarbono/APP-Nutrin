import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AntropometriaProvider } from '../../../providers/antropometria/antropometria';

@IonicPage()
@Component({
  selector: 'page-cadastrar-antropometria',
  templateUrl: 'cadastrar-antropometria.html',
})
export class CadastrarAntropometriaPage {

  formAntropometria:any = {
    peso: 0.0,
    braco: 0.0,
    torax: 0.0,
    cintura: 0.0,
    abdomen: 0.0,
    quadril: 0.0,
    coxa: 0.0,
    biceps: 0.0,
    triceps: 0.0,
    peito: 0.0,
    subsCap: 0.0,
    axilar: 0.0,
    gorduraPerc: 0.0,
    aguaPerc: 0.0,
    pesoMagro: 0.0
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public antropometriaProvider: AntropometriaProvider,
    public alertCtrl: AlertController,
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


  cadastrarAntropometria() {
    this.antropometriaProvider.antropometriaCreate(this.formAntropometria).subscribe(
      data => {
        const response = (data as any);
        this.showAlert(response.Status, response.Mensagem);
      }
    )
  }

  ionViewDidLoad() {
  }

}
