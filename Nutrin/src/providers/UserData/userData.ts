import { Injectable } from '@angular/core';


let userData_key_name = "userData";

@Injectable()
export class UserDataProvider {

  constructor() {
 
  }

  getUserData(): any{
    return JSON.parse(localStorage.getItem(userData_key_name)) || {user : false};
  }

  setUserData(
    user: boolean,
    response_dados_user
  ){
    let user_data = {
      user : user,
      dados_user : response_dados_user
    }

    localStorage.setItem(userData_key_name, JSON.stringify(user_data));
  }

  limpar(){
    localStorage.clear();
  }
}
