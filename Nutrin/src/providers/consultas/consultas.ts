import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultasProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public consultasRead() {
    return this.http.get(this.base + "/consultas");
  }

  public consultaById(id) {
    return this.http.get(this.base + "/consulta/buscar/" + id);
  }

  public consultaCreate(paciente_id, tipoAtendimento_id, data, horaI, horaF, tipoEstado_id) {
    var dados = {
      "paciente_id": paciente_id,
      "tipoAtendimento_id": tipoAtendimento_id,
      "data": data,
      "horaI": horaI,
      "horaF": horaF,
      "tipoEstado_id": tipoEstado_id
    };
    return this.http.post(this.base + "/cadastrar", dados);
  }

  public consultaUpdate(id, paciente_id, tipoAtendimento_id, data, horaI, horaF, tipoEstado_id) {
    var dados = {
      "id": id,
      "paciente_id": paciente_id,
      "tipoAtendimento_id": tipoAtendimento_id,
      "data": data,
      "horaI": horaI,
      "horaF": horaF,
      "tipoEstado_id": tipoEstado_id
    };
    return this.http.put(this.base + "/consultas/alterar", dados);
  }

  public consultaDelete(id) {
    return this.http.get(this.base + "/consulta/deletar/" + id);
  }
}
