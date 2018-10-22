import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PacienteProvider {

  base_path = "/nutrin_api";

  constructor(public http: HttpClient) {
 
  }

  public pesquisar_paciente(username){
    return this.http.get(this.base_path + "/paciente/consultar/" + username)
  }

  public listar_pacientes(){
    return this.http.get(this.base_path + "/pacientes");
  }

  public alterar_paciente(username_atual,nome,username,dataNascimento,sexo,email,celular,cidade,profissao,tipo,objetivo,altura){
    var dados_paciente: any = {
      "username_atual": username_atual,
      "nome": nome,
      "username": username,
      "dataNascimento": dataNascimento,
      "sexo": sexo,
      "email": email,
      "celular": celular,
      "cidade": cidade,
      "profissao": profissao,
      "tipo": tipo,
      "objetivo": objetivo,
      "altura": altura
    };

    return this.http.put(this.base_path + "/paciente/alterar-paciente", dados_paciente)
  }





}