import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AntropometriaProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) { }

  private responseAntropometria = {
    "Dados": {
      "abdomen": null,
      "aguaPerc": null,
      "axilar": null,
      "biceps": null,
      "braco": null,
      "cintura": null,
      "coxa": null,
      "gorduraPerc": null,
      "peito": null,
      "peso": null,
      "pesoMagro": null,
      "quadril": null,
      "subsCap": null,
      "torax": null,
      "triceps": null
    },
    "Mensagem": null,
    "Status": null
  }

  private json_antropometria = {
    peso: null,
    braco: null,
    torax: null,
    cintura: null,
    abdomen: null,
    quadril: null,
    coxa: null,
    biceps: null,
    triceps: null,
    peito: null,
    subsCap: null,
    axilar: null,
    gorduraPerc: null,
    aguaPerc: null,
    pesoMagro: null,
  }

  public getJson() {
    return this.json_antropometria;
  }

  public antropometriaRead() {
    return this.http.get(this.base + "/antropometria");
  }

  public antropometriaById(id) {
    return this.http.get(this.base + "/antropometria/buscar/" + id);
  }

  public antropometriaCreate(dados: any) {
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
