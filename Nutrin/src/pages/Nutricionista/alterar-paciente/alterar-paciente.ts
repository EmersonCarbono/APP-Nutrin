import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PacienteProvider } from '../../../providers/pacientes/paciente';

@IonicPage()
@Component({
  selector: 'page-alterar-paciente',
  templateUrl: 'alterar-paciente.html',
})
export class AlterarPacientePage {

  dados_paciente: any = {};
  username_atual:any;
  alterar:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public pacientesProvaider: PacienteProvider,
    public alertCtrl: AlertController,
  ) {
  }

  private carregarDados(){
    this.pacientesProvaider.pesquisar_paciente(this.navParams.get("nome_paciente")).subscribe(
      data => {
        const response = ( data as any);
        this.dados_paciente = response.Dados;
        this.username_atual = this.dados_paciente.username; 
        }
    )

  }

  showAlert(title, mensagem) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  public alterarCadastro(req){
    this.pacientesProvaider.alterar_paciente(this.username_atual, this.dados_paciente).subscribe(
      data => {
        const response = (data as any);
        if(response.Status == "Sucesso"){
          this.showAlert(response.Status ,response.Mensagem);
          this.navCtrl.pop();
        }else{
          console.log(response.Mensagem);
        }
      }
    )
  }

  ionViewDidLoad() {
    this.carregarDados();
  }

}
