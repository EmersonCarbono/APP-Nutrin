import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ConsultasProvider } from '../../../providers/consultas/consultas';
import { AlterarConsultaPage } from '../alterar-consulta/alterar-consulta'
import { DetalheConsultaPage } from '../detalhe-consulta/detalhe-consulta';


@IonicPage()
@Component({
  selector: 'page-consultas-nutricionista',
  templateUrl: 'consultas-nutricionista.html',
})
export class ConsultasNutricionistaPage {

  consultas:any = new Array<any>();
  filtro = "";
  @ViewChild('idConsulta') id_consulta: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public consultasProvider: ConsultasProvider
  ) {
    this.filtro = "confirmados";
  }

  filtroSelect() {
    let filtro = this.actionsheetCtrl.create({
      title: 'Filtrar por',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Consultas Solicitadas',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push("ConsultasSolicitadasPage");
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
            //this.navCtrl.push('AlterarConsultaPage', );
            console.log(this.id_consulta.innerText);
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

  consultaDetalhada(consulta: any) {
    this.navCtrl.push(DetalheConsultaPage, {
      consultaSelecionado: consulta
    });
  }

  ionViewDidLoad() {
    this.consultasProvider.consultasRead().subscribe(
      (dados) => { this.consultas = dados["Dados"]; }
    );
  }

}
