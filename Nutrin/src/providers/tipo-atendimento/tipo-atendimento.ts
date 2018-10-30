import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoAtendimentoProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public tipoAtendimentoRead() {
    return this.http.get(this.base + "/tipo-atendimento");
  }

  public tipoAtendimentoById(id) {
    return this.http.get(this.base + "/tipo-atendimento/buscar/" + id);
  }

  public tipoAtendimentoCreate(nome, preco, qtdRetorno) {
    var dados = {
      "nome": nome,
      "preco": preco,
      "qtdRetorno": qtdRetorno
    };
    return this.http.post(this.base + "/tipo-atendimento/cadastrar", dados);
  }

  public tipoAtendimentoUpdate(id, nome, preco, qtdRetorno) {
    var dados = {
      "id_atendimento": id,
      "nome": nome,
      "preco": preco,
      "qtdRetorno": qtdRetorno
    };
    return this.http.put(this.base + "/tipo-atendimento/alterar", dados);
  }

  public tipoAtendimentoDelete(id) {
    return this.http.get(this.base + "tipo-atendimento/deletar/" + id);
  }

}
