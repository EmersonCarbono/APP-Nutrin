import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//--------   Import Providers    -------------
import { UserDataProvider } from '../providers/UserData/userData';
import { PacienteProvider } from '../providers/pacientes/paciente';

// --------   Import Page    -------------
import { LoginPage } from '../pages/login/login';
import { SidePage } from '../pages/side/side';



@Component({
  templateUrl: 'app.html',
  providers: [
    UserDataProvider,
    PacienteProvider
  ]
})
export class MyApp {
  rootPage:any = LoginPage;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    pacienteProvider: PacienteProvider,
    userDataProvider: UserDataProvider
    ){
    platform.ready().then(() => {
      let user_data = userDataProvider.getUserData();
      if (user_data.user == false) {
        this.rootPage = LoginPage;
      } else {
        if (user_data.dados_user.tipo == "P"){
          pacienteProvider.pesquisar_paciente(user_data.dados_user.username).subscribe(
            paciente_data => {
              const paciente_dados = (paciente_data as any);
              userDataProvider.setUserData(true, paciente_dados.Dados);
              this.rootPage = SidePage;
            }
          );
        } else {
          this.rootPage = SidePage;
        }
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
