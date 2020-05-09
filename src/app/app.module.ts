import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PacienteServiceAlternative } from './services/paciente-service.service.alternative';
import PacienteServiceInterface from './services/paciente-service.service.interface';
import { PacienteListComp } from './components/paciente-list/paciente-list.component';
import { PacienteServiceService } from './services/paciente-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PacienteListComp,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [{provide:PacienteServiceInterface, useClass:PacienteServiceAlternative}],
  bootstrap: [AppComponent]
})
export class AppModule { }
