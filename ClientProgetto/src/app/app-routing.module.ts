import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SondaggioComponent } from './sondaggio/sondaggio.component';
import { ServizioclientiComponent } from './servizioclienti/servizioclienti.component';
import { DonateComponent } from './donate/donate.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'donate', component: DonateComponent },
  { path: 'ricerca', component: RicercaComponent },
  { path: 'servizio', component: ServizioclientiComponent },
  { path: 'sondaggio', component: SondaggioComponent },
  { path: 'home', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
