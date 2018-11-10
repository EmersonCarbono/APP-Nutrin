import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConsultasProvider } from '../../../providers/consultas/consultas';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { TipoAtendimentoProvider } from '../../../providers/tipo-atendimento/tipo-atendimento';
import { HorarioProvider } from '../../../providers/horario/horario';
import { TipoEstadoProvider } from '../../../providers/tipo-estado/tipo-estado';

@IonicPage()
@Component({
  selector: 'page-alterar-consulta',
  templateUrl: 'alterar-consulta.html',
})
export class AlterarConsultaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public consultasProvider: ConsultasProvider,
    public pacienteProvider: PacienteProvider,
    public tipoAtendimentoProvider: TipoAtendimentoProvider,
    public horarioProvider: HorarioProvider,
    public tipoEstadoProvider: TipoEstadoProvider,
    public alertController: AlertController,
    ) {
  }

  public consulta_json = this.consultasProvider.getConsultaJson();
  public pacientes: any = new Array<any>();
  public tipoAtendimentos: any = new Array<any>();
  public tipoEstados: any = new Array<any>();
  public horarios: any = new Array<any>();

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

  public alterarConsulta(req){
    console.log(req);
  }

  ionViewDidLoad() {
    this.iniciarInformacoes();
    //this.consultasProvider.getAlterarConsultaJson();
  }

}
