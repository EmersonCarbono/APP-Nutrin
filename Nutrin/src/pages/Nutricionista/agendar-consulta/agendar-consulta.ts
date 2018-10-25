import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-agendar-consulta',
  templateUrl: 'agendar-consulta.html',
})
export class AgendarConsultaPage {

  agendar_consulta:any = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    this.agendar_consulta = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      tipoConsulta: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      tipoEstado: new FormControl('', Validators.required),
      dieta: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarConsultaPage');
  }

}
