import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AntropometriaProvider } from '../../../providers/antropometria/antropometria';

/**
 * Generated class for the AntropometriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-antropometria',
  templateUrl: 'antropometria.html',
})
export class AntropometriaPage {

  consulta: any;
  antropometria: any;
  json_antropometria = {
    peso: null,
    braco: null,
    torax: null,
    cintura: null,
    abdomen: null,
    quadril: null,
    coxa: null,
    biceps: null,
    triceps: null,
    peito: null,
    subsCap: null,
    axilar: null,
    gorduraPerc: null,
    aguaPerc: null,
    pesoMagro: null,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public antropometriaProvider: AntropometriaProvider,
     ) {
  }

  public getDadosAntropometria(){
    this.consulta = this.navParams.get("consulta");
    this.antropometriaProvider.antropometriaById(this.consulta.antropometria_id).subscribe(
      (data) => {
        const response = (data as any);
        this.json_antropometria = {
          peso: response.Dados.peso,
          braco: response.Dados.braco,
          torax: response.Dados.torax,
          cintura: response.Dados.cintura,
          abdomen: response.Dados.abdomen,
          quadril: response.Dados.quadril,
          coxa: response.Dados.coxa,
          biceps: response.Dados.biceps,
          triceps: response.Dados.triceps,
          peito: response.Dados.peito,
          subsCap: response.Dados.subsCap,
          axilar: response.Dados.axilar,
          gorduraPerc: response.Dados.gorduraPerc,
          aguaPerc: response.Dados.aguaPerc,
          pesoMagro: response.Dados.pesoMagro,
        }
        console.log(this.json_antropometria);
      }
    )
  }

  ionViewDidLoad() {
    this.getDadosAntropometria();
  }

  ionViewDidEnter(){
    this.getDadosAntropometria();
  }

}
