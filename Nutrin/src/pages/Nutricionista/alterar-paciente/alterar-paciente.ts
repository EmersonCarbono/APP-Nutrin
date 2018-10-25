import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PacienteProvider } from '../../../providers/pacientes/paciente';

@IonicPage()
@Component({
  selector: 'page-alterar-paciente',
  templateUrl: 'alterar-paciente.html',
})
export class AlterarPacientePage {

  alterar:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public pacientesProvaider: PacienteProvider,
  ) {
    let dados_paciente_atual = this.carregarDados();

    console.log(dados_paciente_atual);

    this.alterar = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      dataNascimento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      celular: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])),
      cidade: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])),
      profissao: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])),
      altura: new FormControl('', Validators.required)
    })
  }

  private carregarDados(){
    this.pacientesProvaider.pesquisar_paciente(this.navParams.get("nome_paciente")).subscribe(
      data => {
          const response = (data as any);
          const dados = response.Dados;
          return(dados);
        }
    )

  }

  public alterarCadastro(dados: any){
    console.log(this.alterar);
  }

  ionViewDidLoad() {
    
  }

}
