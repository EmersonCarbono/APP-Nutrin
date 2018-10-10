import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-solicitar-consulta',
  templateUrl: 'modal-solicitar-consulta.html',
})
export class ModalSolicitarConsultaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSolicitarConsultaPage');
  }

  fecharModal() {
    this.viewCtrl.dismiss(ModalSolicitarConsultaPage);
  }

}
