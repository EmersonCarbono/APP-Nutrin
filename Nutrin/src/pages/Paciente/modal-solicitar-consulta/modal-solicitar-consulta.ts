import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-modal-solicitar-consulta',
  templateUrl: 'modal-solicitar-consulta.html',
})
export class ModalSolicitarConsultaPage {

  form_solicitar:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder
  ) {

    this.form_solicitar = this.formBuilder.group({
      data: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSolicitarConsultaPage');
  }

  fecharModal() {
    this.viewCtrl.dismiss(ModalSolicitarConsultaPage);
  }

}
