import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { UserDataProvider } from '../../../providers/UserData/userData';
import { LoginPage } from '../../login/login';
import { PerfilPacientePage } from '../perfil-paciente/perfil-paciente';
import { ConsultasAgendadasPage } from '../consultas-agendadas/consultas-agendadas';
import { MarcarConsultaPage } from '../marcar-consulta/marcar-consulta';

@IonicPage()
@Component({
  selector: 'page-menuPaciente',
  templateUrl: 'menuPaciente.html',
  providers:[
    UserDataProvider,
  ]
})
export class menuPacientePage {
  rootPage = PerfilPacientePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userDataProvider: UserDataProvider,
  ) {}

  user_data = this.userDataProvider.getUserData();
  nome = this.user_data.dados_user.nome;
  email = this.user_data.dados_user.email;
  
  ionViewDidLoad() {
    console.log(this.nome, this.email)
  }

  openPerfil(){
    this.navCtrl.push(PerfilPacientePage);
  }
  openConsultasAgendadas(){
    this.navCtrl.push(ConsultasAgendadasPage);
  }
  openMarcarConsulta(){
    this.navCtrl.push(MarcarConsultaPage);
  }
  
  logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }
}
