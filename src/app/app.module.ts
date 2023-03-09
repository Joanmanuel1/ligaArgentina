import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { StandingsComponent } from './standings/standings.component';

import localePy from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeraAComponent } from './primera-a/primera-a.component';
import { PrimeraNacionalComponent } from './primera-nacional/primera-nacional.component';
import { PrimeraBComponent } from './primera-b/primera-b.component';
import { LibertadoresComponent } from './libertadores/libertadores.component';
import { ChampionsLeagueComponent } from './champions-league/champions-league.component';
registerLocaleData(localePy, 'es');

import { CommonModule } from '@angular/common';
import { CopaArgentinaComponent } from './copa-argentina/copa-argentina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    StandingsComponent,
    NavbarComponent,
    PrimeraAComponent,
    PrimeraNacionalComponent,
    PrimeraBComponent,
    LibertadoresComponent,
    ChampionsLeagueComponent,
    CopaArgentinaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'standings', component: StandingsComponent},
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
