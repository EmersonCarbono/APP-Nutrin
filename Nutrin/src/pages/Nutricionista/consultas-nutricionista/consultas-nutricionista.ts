import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Refresher } from 'ionic-angular';
import { ConsultasProvider } from '../../../providers/consultas/consultas';
import { AlterarConsultaPage } from '../alterar-consulta/alterar-consulta';
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
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public consultasProvider: ConsultasProvider,
  ) {
    this.filtro = "agendados";
  }

  pushPage(pagina: string) {
    this.navCtrl.push(pagina);
  }

  alterarEstadoConsulta(consulta:any, estado:string) {
    return console.log(consulta, estado); // função para alterar estado da consulta
  }

  deletarConsulta(id:any) {
    const alert = this.alertCtrl.create({
      title: 'AVISO!',
      message: 'Tem certeza que você quer deletar essa consulta?',
      buttons: [
        {
          text: 'Sim',
          handler: data => {
            this.consultasProvider.consultaDelete(id).subscribe(
              (action) => {  }
            );
          }
        },
        {
          text: 'Não',
          handler: data => {
            console.log("nenhuma ação");
          }
        }
      ]
    });
    alert.present();
  }

  consultaDetalhada(consulta: any) {
    this.navCtrl.push(DetalheConsultaPage, {
      consultaSelecionado: consulta
    });
  }

  getConsultas() {
    this.consultasProvider.consultasRead().subscribe(
      (dados) => { this.consultas = dados["Dados"]; }
    );
  }

  ionViewDidLoad() {
    this.getConsultas();
  }

  ionViewDidEnter() {
    this.getConsultas();
  }

}
