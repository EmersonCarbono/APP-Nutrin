import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePacientePage } from '../home-paciente/home-paciente';
import { UserDataProvider } from '../../../providers/UserData/userData';
import { LoginPage } from '../../login/login';
import { ModalSolicitarConsultaPage } from '../modal-solicitar-consulta/modal-solicitar-consulta';

@IonicPage()
@Component({
  selector: 'page-menu-paciente',
  templateUrl: 'menu-paciente.html',
})
export class MenuPacientePage {
  rootPage = HomePacientePage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userDataProvider: UserDataProvider,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    
  }

  pushPage(pagina: string){
    this.navCtrl.push(pagina);
  }

  modalSolicitarConsulta() {
    const modal = this.modalCtrl.create(ModalSolicitarConsultaPage);
    modal.present();
  }

  logout(){
    this.userDataProvider.limpar();
    this.navCtrl.setRoot(LoginPage);
  }
}
