import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonateComponent } from './donate/donate.component';
import { SondaggioComponent } from './sondaggio/sondaggio.component';
import { ServizioclientiComponent } from './servizioclienti/servizioclienti.component';

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    SondaggioComponent,
    ServizioclientiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
