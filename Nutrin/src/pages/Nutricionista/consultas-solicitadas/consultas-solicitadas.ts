import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ConsultasProvider } from '../../../providers/consultas/consultas';

@IonicPage()
@Component({
  selector: 'page-consultas-solicitadas',
  templateUrl: 'consultas-solicitadas.html',
})
export class ConsultasSolicitadasPage {

  consultas:any = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public consultasProvider: ConsultasProvider
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

  getListarConsultas() {
    this.consultasProvider.consultasRead().subscribe(
      (dados) => { this.consultas = dados["Dados"];}
    );
    return this.consultas;
  }

  ionViewDidLoad() {
    this.getListarConsultas();
  }

}
