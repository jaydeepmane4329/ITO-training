import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';
import { WarningAlert } from './WarningAlert/warningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessfulAlertComponent,
    WarningAlert,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
