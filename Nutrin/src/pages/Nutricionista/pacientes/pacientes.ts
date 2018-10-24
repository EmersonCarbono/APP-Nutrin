import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../../providers/pacientes/paciente';
import { ActionSheetController } from 'ionic-angular';

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
    public pacienteProvaider: PacienteProvider,
    public actionSheetCtrl: ActionSheetController,
  ) {
  }

  public pushPage(page: any){
    this.navCtrl.push(page);
  }

  public openMenu(){
    const actionSheet = this.actionSheetCtrl.create({
      title: "",
      buttons:[
        {
          text: "Editar",
          handler: () => {
            console.log("editar");
          }
        },
        {
          text: "Excluir",
          role: "destructive",
          handler: () => {
            console.log("Excluir");
          }
        }
      ]
    });
    actionSheet.present();
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
