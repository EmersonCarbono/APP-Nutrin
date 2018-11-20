import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConsultasProvider } from '../../../providers/consultas/consultas';

@IonicPage()
@Component({
  selector: 'page-detalhe-consulta',
  templateUrl: 'detalhe-consulta.html',
})
export class DetalheConsultaPage {

  consulta:any = null;

  private getConsultaDados(){
    if (this.consulta == null){
      this.consulta = this.navParams.get('consultaSelecionado');
    } else {
      this.consultasProvider.consultaById(this.consulta.id).subscribe(
        (data) => {
            const response = (data as any);
            this.consulta = response.Dados[0];
            console.log(this.consulta);
        }
      );
    }
  }

  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public consultasProvider: ConsultasProvider
  ) {
    this.getConsultaDados();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 
      "Antropometria não cadastrada",
      subTitle: 
      "Deseja cadastrar agora?",
      buttons: [
        {
          text: 'Sim',
          handler: data => {
            this.navCtrl.push("CadastrarAntropometriaPage", {
             consulta : this.consulta
            })
          }
        },
        {
          text: 'Não',
          handler: data => {
            console.log('Não');
          }
        },
      ]
    });
    alert.present();
  }

  public pushCadastrarAntropometria(){
    if (this.consulta.antropometria_id == null){
      this.showAlert();
    }else{
      this.navCtrl.push("AntropometriaPage", {
        consulta: this.consulta
      });
    }
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){
    this.getConsultaDados();
  }

}
