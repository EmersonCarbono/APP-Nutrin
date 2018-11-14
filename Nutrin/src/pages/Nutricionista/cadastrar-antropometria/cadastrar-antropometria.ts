import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AntropometriaProvider } from '../../../providers/antropometria/antropometria';
import { ConsultasProvider } from '../../../providers/consultas/consultas';

@IonicPage()
@Component({
  selector: 'page-cadastrar-antropometria',
  templateUrl: 'cadastrar-antropometria.html',
})
export class CadastrarAntropometriaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public antropometriaProvider: AntropometriaProvider,
    public consultaProvider: ConsultasProvider,
    public alertCtrl: AlertController,
    ) {
  }

  public formAntropometria = this.antropometriaProvider.getJson();
  public consulta = this.navParams.get('consulta')

  showAlert(title, mensagem) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }


  cadastrarAntropometria() {
    this.antropometriaProvider.antropometriaCreate(this.formAntropometria).subscribe(
      data => {
        const response = (data as any);
        console.log(response.Dados);
        if(response.Status == "Sucesso"){
          this.consultaProvider.adiconarAntropometria(response.Dados, this.consulta.id).subscribe(
            (data) => {
              const response = (data as any);
              if (response.Status == "Sucesso"){
                this.showAlert(response.Status, response.Mensagem);
                this.navCtrl.pop();
              }
            }
          );
        }
      }
    )
  }

  ionViewDidLoad() {
    
  }

}
