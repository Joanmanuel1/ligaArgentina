import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { StandingsComponent } from './standings/standings.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TomorrowComponent,
    FooterComponent,
    YesterdayComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'tomorrow', component: TomorrowComponent},
      {path: 'yesterday', component: YesterdayComponent},
      {path: 'standings', component: StandingsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
