import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { StandingsComponent } from './standings/standings.component';
import { FixtureComponent } from './fixture/fixture.component';

import localePy from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeraAComponent } from './primera-a/primera-a.component';
import { PrimeraNacionalComponent } from './primera-nacional/primera-nacional.component';
import { PrimeraBComponent } from './primera-b/primera-b.component';
import { LibertadoresComponent } from './libertadores/libertadores.component';
import { ChampionsLeagueComponent } from './champions-league/champions-league.component';
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TomorrowComponent,
    FooterComponent,
    YesterdayComponent,
    StandingsComponent,
    FixtureComponent,
    NavbarComponent,
    PrimeraAComponent,
    PrimeraNacionalComponent,
    PrimeraBComponent,
    LibertadoresComponent,
    ChampionsLeagueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'tomorrow', component: TomorrowComponent},
      {path: 'yesterday', component: YesterdayComponent},
      {path: 'standings', component: StandingsComponent},
      {path: 'fixture', component: FixtureComponent},
      {path: 'primera', component: PrimeraAComponent},
      {path: 'nacional', component: PrimeraNacionalComponent},
      {path: 'bmetro', component: PrimeraBComponent},
      {path: 'libertadores', component: LibertadoresComponent},
      {path: 'championsleague', component: ChampionsLeagueComponent},
    ]),
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
