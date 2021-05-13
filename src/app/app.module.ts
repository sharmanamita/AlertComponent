import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from './alert/alert.module';
import { Config } from './alert/alert.data';

const alertConfig: Config = {
  display: 'block',
  position: '',
  align: 'right',
  timeout: 10000
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(alertConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
