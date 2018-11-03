import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TipoAtendimentoProvider } from '../../../providers/tipo-atendimento/tipo-atendimento';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { TipoEstadoProvider } from '../../../providers/tipo-estado/tipo-estado';

@IonicPage()
@Component({
  selector: 'page-agendar-consulta',
  templateUrl: 'agendar-consulta.html'
})
export class AgendarConsultaPage {

  formAgendar:any = {
    paciente_id: 0,
    tipoAtendimento_id: 0,
    horario_id: 0,
    tipoEstado_id: 0,
    dieta: ""
  };

  pacientes:any = new Array<any>();
  tipoAtendimentos:any = new Array<any>();
  tipoEstados:any = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider,
    public tipoAtendimentoProvider: TipoAtendimentoProvider,
    public tipoEstadoProvider: TipoEstadoProvider
  ) {}

  getPaciente() {
    return this.pacienteProvider.listar_pacientes().subscribe(
      (dados) => { this.pacientes = dados["Dados"]; }
    );
  }

  getTipoAtendimento() {
    return this.tipoAtendimentoProvider.tipoAtendimentoRead().subscribe(
      (dados) => { this.tipoAtendimentos = dados["Dados"]; }
    );
  }

  agendarConsulta() {
    return console.log(this.formAgendar);
  }

  getTipoEstadoConsulta(){

  return this.tipoEstadoProvider.tipoEstadoRead().subscribe(
    (dados) => {this.tipoEstados = dados["Dados"]; console.log(this.tipoEstados) }
  );

}

  ionViewDidLoad() {
    this.getTipoEstadoConsulta();
    this.getPaciente();
    this.agendarConsulta();
  }

}
