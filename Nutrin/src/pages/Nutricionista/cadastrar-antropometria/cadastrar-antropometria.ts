import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    axiliar: 0.0,
    gorduraPerc: 0.0,
    aguaPerc: 0.0,
    pesoMagro: 0.0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastrarAntropometria() {
    return console.log(this.formAntropometria);
  }

  ionViewDidLoad() {
    this.cadastrarAntropometria();
  }

}
