import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-consulta',
  templateUrl: 'detalhe-consulta.html',
})
export class DetalheConsultaPage {

  consulta:any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.consulta = this.navParams.get('consultaSelecionado');
  }

  public pushCadastrarAntropometria(){
    this.navCtrl.push("CadastrarAntropometriaPage", {
      consulta : this.consulta
    });
  }

  ionViewDidLoad() {
    console.log(this.consulta);
  }

}
