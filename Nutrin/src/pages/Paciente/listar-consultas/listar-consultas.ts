import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listar-consultas',
  templateUrl: 'listar-consultas.html',
})
export class ListarConsultasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
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

  solicitarConsultaAlert() {
    let alert = this.alertCtrl.create({
      title: "Solicitar Consulta",
      subTitle: "Preencha o Formuario, logo você receberá uma confirmação",
      inputs: [
        {
          name: "Data",
          placeholder: "Data da Consulta"
        },
        {
          name: "Hora",
          placeholder: "Horario da Consulta"
        },
        {
          name: "Observações",
          placeholder: "Observações da consulta"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: data => {
            console.log("Cancelado");
          }
        },
        {
          text: "Enviar",
          handler: data => {
            console.log("Enviado"); // aqui terá uma função de validação e envio.
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarConsultasPage');
  }

}
