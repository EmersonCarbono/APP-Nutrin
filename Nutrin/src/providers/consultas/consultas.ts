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

  public adiconarAntropometria(id_antropometria, id_consulta){
    let dados = {
      id_antropometria: id_antropometria,
      id_consulta: id_consulta
    }
    return this.http.put(this.base + '/consultas/antropometria', dados)
  }

  public consultasRead() {
    return this.http.get(this.base + "/consultas");
  }

  public consultaById(id) {
    return this.http.get(this.base + "/consulta/" + id);
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

  public tipoEstadoUpdate(id_consulta, valor) {
    let dados = {
      id_consulta: id_consulta,
      column: "tipoEstado_id",
      id_column: valor
    };
    return this.http.put(this.base + "/consultas/alterarId", dados);
  }

  public pagamentoUpdate(id_consulta, valor) {
    let dados = {
      id_consulta: id_consulta,
      column: "pagamento",
      id_column: valor
    };
    return this.http.put(this.base + "/consultas/alterarId", dados);
  }

  public consultaDelete(id) {
    return this.http.delete(this.base + "/consultas/delete/" + id);
  }
}
