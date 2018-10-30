import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoEstadoProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public tipoEstadoRead() {
    return this.http.get(this.base + "/tipo-estado");
  }

  public tipoEstadoById(id) {
    return this.http.get(this.base + "/tipo-estado/" + id);
  }

  public tipoEstadoCreate(nome) {
    var dados = {
      "nome": nome
    };
    return this.http.post(this.base + "/tipo-estado/cadastrar", dados);
  }

  public tipoEstadoUpdate(id, nome) {
    var dados = {
      "id": id,
      "nome_novo": nome
    };
    return this.http.put(this.base + "/tipo-estado/alterar", dados);
  }

  public tipoEstadoDelete(id) {
    return this.http.get(this.base + "tipo-estado/deletar/" + id);
  }

}
