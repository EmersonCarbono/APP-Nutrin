import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  base_path = "/nutrin_api";

  constructor(public http: HttpClient) {
 
  }

  validarLogin(username, senha){
    var dados: any = {
      "username": username,
      "password": senha
    };
    return this.http.post(this.base_path + "/login", dados);
  }

}
