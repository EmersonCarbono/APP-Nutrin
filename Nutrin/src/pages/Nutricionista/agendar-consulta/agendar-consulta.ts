import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TipoAtendimentoProvider } from '../../../providers/tipo-atendimento/tipo-atendimento';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { TipoEstadoProvider } from '../../../providers/tipo-estado/tipo-estado';
import { HorarioProvider } from '../../../providers/horario/horario';

@IonicPage()
@Component({
  selector: 'page-agendar-consulta',
  templateUrl: 'agendar-consulta.html'
})
export class AgendarConsultaPage {

  pacientes:any = new Array<any>();
  tipoAtendimentos:any = new Array<any>();
  tipoEstados:any = new Array<any>();
  horarios:any = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider,
    public tipoAtendimentoProvider: TipoAtendimentoProvider,
    public tipoEstadoProvider: TipoEstadoProvider,
    public horarioProvider: HorarioProvider
  ) {
  }

  getPaciente() {
    return this.pacienteProvider.listar_pacientes().subscribe(
      (dados) => { this.pacientes = dados["Dados"]; console.log(this.pacientes); }
    );
  }

  getTipoAtendimento() {
    return this.tipoAtendimentoProvider.tipoAtendimentoRead().subscribe(
      (dados) => { this.tipoAtendimentos = dados["Dados"]; console.log(this.tipoAtendimentos); }
    );
  }

  getHorario() {
    return this.horarioProvider.horarioRead().subscribe(
      (dados) => { this.horarios = dados["Dados"]; console.log(this.horarios); }
    )
  }

  agendarConsulta(dados:any) {
    return console.log(dados);
  }

  getTipoEstadoConsulta(){
  return this.tipoEstadoProvider.tipoEstadoRead().subscribe(
    (dados) => {this.tipoEstados = dados["Dados"]; console.log(this.tipoEstados); }
  );

}

  ionViewDidLoad() {
    this.getTipoEstadoConsulta();
    this.getPaciente();
    this.getTipoAtendimento();
    this.getHorario();
  }

}
