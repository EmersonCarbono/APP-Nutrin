import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Injectable()
export class HorarioProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public horarioDispRead(){
    return this.http.get(this.base + "/horarios/listaDisp");
  }

  public horarioRead(){
    return this.http.get(this.base + "/horarios");
  }

  public horarioById(id){
    return this.http.get(this.base + "/horarios/" + id);
  }

  public horarioCreate(data, horaI, horaF){
    var dados= {
      "data": data,
      "horaI": horaI,
      "horaF": horaF
    };
    return this.http.post(this.base + "/horario/cadastrar", dados);
  }

  public horarioUpdate(id, horaI, horaF){
    var dados = {
      "id": id,
      "horaI": horaI,
      "horaF": horaF
    };
    return this.http.put(this.base + "/horario/alterar", dados);
    }

  public horarioDelete(id){
    return this.http.get(this.base + "/horario/deletar/" + id);
  }
}
