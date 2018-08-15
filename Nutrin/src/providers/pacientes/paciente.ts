import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PacienteProvider {

  base_path = "/nutrin_api";

  constructor(public http: HttpClient) {
 
  }

  pesquisarUser(username){
    return this.http.get(this.base_path + "/usuario/" + username)
  }



}