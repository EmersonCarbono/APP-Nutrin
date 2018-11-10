import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TipoAtendimentoProvider } from '../../../providers/tipo-atendimento/tipo-atendimento';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { TipoEstadoProvider } from '../../../providers/tipo-estado/tipo-estado';
import { HorarioProvider } from '../../../providers/horario/horario';
import { ConsultasNutricionistaPage } from '../consultas-nutricionista/consultas-nutricionista';
import { ConsultasProvider } from '../../../providers/consultas/consultas';



@IonicPage()
@Component({
  selector: 'page-agendar-consulta',
  templateUrl: 'agendar-consulta.html'
})
export class AgendarConsultaPage {

  pacientes: any = new Array<any>();
  tipoAtendimentos: any = new Array<any>();
  tipoEstados: any = new Array<any>();
  horarios: any = new Array<any>();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider,
    public tipoAtendimentoProvider: TipoAtendimentoProvider,
    public tipoEstadoProvider: TipoEstadoProvider,
    public horarioProvider: HorarioProvider,
    public alertController: AlertController,
    public consultasProvider: ConsultasProvider,
  ) {
  }

  public consulta_json = this.consultasProvider.getConsultaJson();

  iniciarInformacoes() {
    this.pacienteProvider.listar_pacientes().subscribe(
      (dados) => this.pacientes = dados["Dados"]
    );
    this.tipoAtendimentoProvider.tipoAtendimentoRead().subscribe(
      (dados) => this.tipoAtendimentos = dados["Dados"]
    );
    this.horarioProvider.horarioRead().subscribe(
      (dados) => this.horarios = dados["Dados"]
    );
    this.tipoEstadoProvider.tipoEstadoRead().subscribe(
      (dados) => this.tipoEstados = dados["Dados"]
    );
  }

  showAlert(title, mensagem) {
    const alert = this.alertController.create({
      title: title,
      subTitle: mensagem,
      buttons: ["Ok"]
    });
    alert.present();
  }

  agendarConsulta(dados: any) {
    let horaI = String(this.consulta_json.horaI + ":00");
    let horaF = String((this.consulta_json.horaI + 1) + ":00");
   
    this.consulta_json.horaI = horaI
    this.consulta_json.horaF = horaF

    this.consultasProvider.consultaCreate(this.consulta_json).subscribe(
      (data) => {
        const response = (data as any);
        if(response.Status = "Sucesso"){
          this.showAlert(response.Status,response.Mensagem);
          this.navCtrl.pop();
        }else{
          this.showAlert(response.Status,response.Mensagem);
        }
      }
    );
  }

  ionViewDidLoad() {
    this.iniciarInformacoes();
  }

}
