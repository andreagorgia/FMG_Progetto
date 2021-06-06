import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonateComponent } from './donate/donate.component';
import { SondaggioComponent } from './sondaggio/sondaggio.component';
import { ServizioclientiComponent } from './servizioclienti/servizioclienti.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { FormsModule } from '@angular/forms';
import { CesarService } from './servizioclienti/cesar.service';
import { CryptoJsService } from './servizioclienti/crypto.service';
import { SocketService } from './servizioclienti/socket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://blush-cobra-iandoaja.ws-eu08.gitpod.io/', options: {/*transport : ['websocket'], withCredentials:false*/} };

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    SondaggioComponent,
    ServizioclientiComponent,
    RicercaComponent,
    HomeComponent,
    ChisiamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SocketService, CesarService,CryptoJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
