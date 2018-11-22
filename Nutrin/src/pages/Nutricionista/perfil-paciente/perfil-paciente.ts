import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../../providers/pacientes/paciente';

@IonicPage()
@Component({
  selector: 'page-perfil-paciente',
  templateUrl: 'perfil-paciente.html',
})
export class PerfilPacientePage {

  paciente = new Array<any>();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public pacienteProvider: PacienteProvider) {
  }

  private carregarDados(){
    this.pacienteProvider.pesquisar_paciente(this.navParams.get("nome_paciente")).subscribe(
        data => {
            const response = (data as any);
            this.paciente = response;
          }
      )
  }

  ionViewDidLoad() {
    this.carregarDados();
  }

}
