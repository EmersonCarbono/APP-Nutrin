import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// importando as paginas
import { LoginPageModule } from '../pages/login/login.module';
import { HomePacientePageModule } from '../pages/Paciente/home-paciente/home-paciente.module';
import { HomeNutricionistaPageModule } from '../pages/Nutricionista/home-nutricionista/home-nutricionista.module';
import { SidePageModule } from '../pages/side/side.module';

//importando modulo http
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { ConsultasProvider } from '../providers/consultas/consultas';
import { TipoEstadoProvider } from '../providers/tipo-estado/tipo-estado';
import { TipoAtendimentoProvider } from '../providers/tipo-atendimento/tipo-atendimento';
import { AntropometriaProvider } from '../providers/antropometria/antropometria';
import { HorarioProvider } from '../providers/horario/horario';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HomePacientePageModule,
    HomeNutricionistaPageModule,
    SidePageModule,
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultasProvider,
    TipoEstadoProvider,
    TipoAtendimentoProvider,
    AntropometriaProvider,
    HorarioProvider
  ]
})
export class AppModule {}
