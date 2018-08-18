import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//--------   Import Providers    -------------
import { UserDataProvider } from '../providers/UserData/userData';

// --------   Import Page    -------------
import { LoginPage } from '../pages/login/login';
import { HomePacientePage } from '../pages/Paciente/home-paciente/home-paciente';


@Component({
  templateUrl: 'app.html',
  providers: [
    UserDataProvider,
  ]
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userDataProvider: UserDataProvider
    ){
    platform.ready().then(() => {

      let user_data = userDataProvider.getUserData();
      if (user_data.user == false) {
        this.rootPage = LoginPage;
      } else {
        if (user_data.dados_user.tipo == "P"){
          this.rootPage = HomePacientePage;
        } else {
          console.log("Nutri");
        }
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
