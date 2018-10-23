import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../../providers/pacientes/paciente';


@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {

  searchQuery: string = '';
  lista_pacientes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvaider: PacienteProvider
  ) {
  }

  private iniciaizarPacientes() {
    this.pacienteProvaider.listar_pacientes().subscribe(
      data => {
        const response = (data as any);
        this.lista_pacientes = response.Dados;
        console.log(this.lista_pacientes);

      }
    )
  }

  public buscarPaciente(ev: any) {

    const val = ev.target.value;
/*
   if (val && val.trim() != '') {
      this.lista_pacientes = this.lista_pacientes.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
*/
  }

  ionViewDidLoad() {
    this.iniciaizarPacientes();

  }

}
