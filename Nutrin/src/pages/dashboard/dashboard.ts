import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LucrosProvider } from '../../providers/lucros/lucros';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  lucros: any = new Array<any>();
  datasNegativos: any = new Array<any>();
  datasPositivos: any = new Array<any>();
  qtdConsultasNegativos: any = new Array<any>();
  qtdConsultasPositivos: any = new Array<any>();
  ganho: any = new Array<any>();
  perdido: any = new Array<any>();
  public tituloConsultas = "Consultas Realizadas";
  public botaoConsultas = "Consultas não Realizadas";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lucrosProvider: LucrosProvider
  ) {

    this.tituloConsultas;
    this.botaoConsultas;
  }
  
  public getLucros() {
    this.lucrosProvider.lucrosRead().subscribe(
      (dados) => { 
        this.lucros = dados["Dados"];
        let lucro:any;
        let losse:any;
        let profit:any;
        for(lucro of this.lucros) {
          for(losse of lucro.losses) {
            this.qtdConsultasNegativos.push(losse.qtdConsultas);
            this.datasNegativos.push(losse.mes);
            this.perdido.push(losse.vlrTotal);
          };
          for(profit of lucro.profit) {
            this.qtdConsultasPositivos.push(profit.qtdConsultas);
            this.datasPositivos.push(profit.mes);
            this.ganho.push(profit.vlrTotal);
          }
        };
    });
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = this.datasPositivos;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    { data: this.qtdConsultasPositivos, label: 'Consultas' }
  ];

  public pieChartLabels: string[] = this.datasPositivos;
  public pieChartData: any[] = this.ganho;
  public pieChartType: string = 'pie';

  public pivo:string = "Positivo";
  public positivoNegativo() {
    if (this.pivo == "Positivo") {
      this.barChartLabels = this.datasNegativos;
      this.barChartData = [{ data: this.qtdConsultasNegativos, label: 'Consultas' }];
      this.pivo = "Negativo";
      this.tituloConsultas = "Consultas não realizadas";
      this.botaoConsultas = "Consultas realizadas";
    } else {
      this.barChartLabels = this.datasPositivos;
      this.barChartData = [{ data: this.qtdConsultasPositivos, label: 'Consultas' }];
      this.pivo = "Positivo";
      this.tituloConsultas = "Consultas realizadas";
      this.botaoConsultas = "Consultas não realizadas";
    }
  }


  ionViewDidLoad() {
    this.getLucros();
  }

}
