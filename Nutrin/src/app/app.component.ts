import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//--------   Import Providers    -------------
import { UserDataProvider } from '../providers/UserData/userData';

// --------   Import Page    -------------
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    UserDataProvider,
  ]
})
export class MyApp {
  rootPage:any ;

  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userDataProvider: UserDataProvider
    ){
    platform.ready().then(() => {

      let user_data = userDataProvider.getUserData();
      if (!user_data.user) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = TabsPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
