import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultasProvider {

  base = "/nutrin_api";

  private consulta_json = {
    "paciente_id": null,
    "tipoAtendimento_id": null,
    "data": null,
    "horaI": null,
    "horaF": null,
    "tipoEstado_id": null,
  };

  public getAlterarConsultaJson(id_consulta){
    const dados_atuais = this.consultaById(id_consulta).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  constructor(public http: HttpClient) {}

  public getConsultaJson(){
    return this.consulta_json;
  }

  public consultasRead() {
    return this.http.get(this.base + "/consultas");
  }

  public consultaById(id) {
    return this.http.get(this.base + "/consulta/buscar/" + id);
  }

  public consultaCreate(dados: any) {
    return this.http.post(this.base + "/consulta/cadastrar", dados);
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
