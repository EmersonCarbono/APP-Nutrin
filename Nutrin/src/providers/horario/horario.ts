import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HorarioProvider {

  base = "/nutrin_api";

  constructor(public http: HttpClient) {}


  public horarioRead() {
    return this.http.get(this.base + "/horarios/listaDisp");
  }
}
