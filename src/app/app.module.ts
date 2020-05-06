import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
