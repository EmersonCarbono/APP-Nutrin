import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AntropometriaProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public antropometriaRead() {
    return this.http.get(this.base + "/antropometria");
  }

  public antropometriaById(id) {
    return this.http.get(this.base + "/antropometria/buscar/" + id)
  }

  public antropometriaCreate(peso, braco, torax, cintura, abdomen, quadril, coxa, biceps, triceps, peito, subsCap, axilar, gorduraPerc, aguaPerc, pesoMagro) {
    var dados = {
      "peso": peso,
      "braco": braco,
      "torax": torax,
      "cintura": cintura,
      "abdomen": abdomen,
      "quadril": quadril,
      "coxa": coxa,
      "biceps": biceps,
      "triceps": triceps,
      "peito": peito,
      "subsCap": subsCap,
      "axilar": axilar,
      "gorduraPerc": gorduraPerc,
      "aguaPerc": aguaPerc,
      "pesoMagro": pesoMagro
    };
    return this.http.post(this.base + "/antropometria/cadastrar", dados);
  }

  public antropometriaUpdate(id, peso, braco, torax, cintura, abdomen, quadril, coxa, biceps, triceps, peito, subsCap, axilar, gorduraPerc, aguaPerc, pesoMagro) {
    var dados = {
      "id": id,
      "peso": peso,
      "braco": braco,
      "torax": torax,
      "cintura": cintura,
      "abdomen": abdomen,
      "quadril": quadril,
      "coxa": coxa,
      "biceps": biceps,
      "triceps": triceps,
      "peito": peito,
      "subsCap": subsCap,
      "axilar": axilar,
      "gorduraPerc": gorduraPerc,
      "aguaPerc": aguaPerc,
      "pesoMagro": pesoMagro
    };
    return this.http.put(this.base + "antropometria/alterar", dados);
  }

  public antropometriaDelete(id) {
    return this.http.get(this.base + "antropometria/deletar/" + id);
  }

}
