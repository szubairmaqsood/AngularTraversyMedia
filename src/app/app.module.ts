import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Coomponents } from './coomponents.header/coomponents.header.component';
import { HeaderComponent } from './coomponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Coomponents.HeaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
