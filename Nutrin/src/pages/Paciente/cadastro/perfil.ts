import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { UserDataProvider } from '../../../providers/UserData/userData';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers:[
    PacienteProvider,
    UserDataProvider,
  ]
})
export class PerfilPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pacienteProvider: PacienteProvider,
    private userDataProvider: UserDataProvider,
  ) {
  }

  public getPaciente(username){
    this.pacienteProvider.pesquisar_paciente(username).subscribe(
      data => {
        const response  = (data as any);
        return response.Dados;
      }, error => {
        console.log(error);
      }
    );
  }

  dados_paciente = this.getPaciente("ozob");

  ionViewDidLoad() {
    console.log(this.dados_paciente);
  }


}
