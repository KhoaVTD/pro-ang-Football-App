import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PremierLeagueComponent } from './league/premier-league/premier-league.component';
import { LaLigaComponent } from './league/la-liga/la-liga.component';
import { BundesligaComponent } from './league/bundesliga/bundesliga.component';
import { SerieAComponent } from './league/serie-a/serie-a.component';
import { LigueOneComponent } from './league/ligue-one/ligue-one.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'premier-league', component: PremierLeagueComponent },
  { path: 'la-liga', component: LaLigaComponent },
  { path: 'bundesliga', component: BundesligaComponent },
  { path: 'serie-a', component: SerieAComponent },
  { path: 'ligue-1', component: LigueOneComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
