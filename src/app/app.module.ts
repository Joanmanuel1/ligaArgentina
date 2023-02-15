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
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TomorrowComponent,
    FooterComponent,
    YesterdayComponent,
    StandingsComponent,
    FixtureComponent
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
