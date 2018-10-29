import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultasProvider {

  base_path = "/nutrin_api";

  constructor(public http: HttpClient) {}

  public listar_all_consultas() {
    return this.http.get(this.base_path + "/consultas");
  }

}
