import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listar-consultas',
  templateUrl: 'listar-consultas.html',
})
export class ListarConsultasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController
  ) {}

  // FUNÇÃO MENU LISTA + BOTOES EDITAR E REMOVER
  menuListSelect() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Ações',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Editar',
          role: 'destructive',
          icon: 'create',
          handler: () => {
            console.log("Editar Click"); // aqui terá uma função para editar
          }
        },
        {
          text: 'Remover',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log("Remover Click"); // aqui terá uma função para remover
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarConsultasPage');
  }

}
