import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultas-nutricionista',
  templateUrl: 'consultas-nutricionista.html',
})
export class ConsultasNutricionistaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController
  ) {}

  filtroSelect() {
    let filtro = this.actionsheetCtrl.create({
      title: 'Filtrar por',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Consultas do dia',
          role: 'destructive',
          handler: () => {
            console.log("Consultas do dia");
          }
        },
        {
          text: 'Confirmados',
          role: 'destructive',
          handler: () => {
            console.log("Confirmados");
          }
        }
      ]
    });
    filtro.present();
  }

  acoesSelect() {
    let acoes = this.actionsheetCtrl.create({
      title: 'Ações',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Realizado',
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

  pushPage(pagina: string) {
    this.navCtrl.push(pagina);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasNutricionistaPage');
  }

}
