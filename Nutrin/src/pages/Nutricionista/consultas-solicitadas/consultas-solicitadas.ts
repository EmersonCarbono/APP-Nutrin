import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultas-solicitadas',
  templateUrl: 'consultas-solicitadas.html',
})
export class ConsultasSolicitadasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController
  ) {}

  acoesSelect() {
    let acoes = this.actionsheetCtrl.create({
      title: 'Ações',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Confirmar',
          role: 'destructive',
          icon: 'checkmark',
          handler: () => {
            console.log("confirmar");
          }
        },
        {
          text: 'Editar',
          role: 'destructive',
          icon: 'create',
          handler: () => {
            console.log("editar");
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log("deletar");
          }
        }
      ]
    });
    acoes.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasSolicitadasPage');
  }

}
