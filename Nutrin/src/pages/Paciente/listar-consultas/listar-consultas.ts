import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ModalSolicitarConsultaPage} from '../modal-solicitar-consulta/modal-solicitar-consulta';

@IonicPage()
@Component({
  selector: 'page-listar-consultas',
  templateUrl: 'listar-consultas.html',
})
export class ListarConsultasPage {

  filtro = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.filtro = "confirmados";
  }

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

  modalSolicitarConsulta() {
    const modal = this.modalCtrl.create(ModalSolicitarConsultaPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarConsultasPage');
  }

}
