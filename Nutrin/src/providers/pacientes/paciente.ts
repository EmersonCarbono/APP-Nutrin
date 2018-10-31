import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PacienteProvider {

  base_path = "/nutrin_api";

  constructor(public http: HttpClient) {
 
  }

  public cadastrar_paciente(dados_cadastro: any){
    return this.http.post(this.base_path + "/paciente/cadastrar", dados_cadastro);
  }

  public pesquisar_paciente(username){
    return this.http.get(this.base_path + "/paciente/consultar/" + username)
  }

  public listar_pacientes(){
    return this.http.get(this.base_path + "/pacientes");
  }

  public alterar_paciente(username_atual, dados_alterar){
    var dados_paciente: any = {
      "username_atual": username_atual,
      "nome": dados_alterar.nome,
      "username": dados_alterar.username,
      "dataNascimento": dados_alterar.dataNascimento,
      "sexo": dados_alterar.sexo,
      "email": dados_alterar.email,
      "celular": dados_alterar.celular,
      "cidade": dados_alterar.cidade,
      "profissao": dados_alterar.profissao,
      "tipo": dados_alterar.tipo,
      "objetivo": dados_alterar.objetivo,
      "altura": dados_alterar.altura
    };
    return this.http.put(this.base_path + "/paciente/alterar-paciente", dados_paciente)
  }





}